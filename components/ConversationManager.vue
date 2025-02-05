<template>
  <div class="flex h-full w-full bg-gray-100">
    <!-- Contacts sidebar -->
    <div class="w-1/3 bg-white border-r">
      <div class="p-4 bg-orange-500 text-white">
        <h2 class="text-xl font-semibold">Conversations</h2>
      </div>
      <ul class="overflow-y-auto h-[calc(100%-4rem)]">
        <li v-for="conversation in conversations" :key="conversation.id" @click="selectConversation(conversation)"
          class="p-4 hover:bg-gray-100 cursor-pointer transition-colors duration-200" :class="{
            'bg-orange-100': selectedConversation?.id === conversation.id,
            'font-bold text-orange-600': conversation.unreadCount > 0,
          }">
          <div class="flex items-center">
            <div
              class="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-semibold">
              {{ conversation?.otherUserName?.charAt(0) }}
            </div>
            <div class="flex flex-col flex-grow">
              <span class="ml-3" :class="{
                'font-medium': selectedConversation?.id === conversation.id,
                'font-bold': conversation.unreadCount > 0,
              }">{{ conversation?.otherUserName }}</span>
              <span class="ml-3 font-light text-sm text-slate-400">
                {{ conversation?.lastMessage?.length > 10
                  ? conversation.lastMessage.substring(0, 10) + '...'
                  : conversation.lastMessage }}
              </span>
            </div>
            <!-- Unread Badge -->
            <div v-if="conversation.unreadCount > 0"
              class="flex-shrink mr-4 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
              {{ conversation.unreadCount }}
            </div>
            <span class="text-xs">{{ formatDateTime(conversation.updatedAt) }}</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- Chat area -->
    <div class="w-2/3 flex-1 flex flex-col h-full ">
      <!-- Chat header -->
      <div class="bg-white border-b p-4 flex flex-col items-center">
        <h4 v-if="selectedConversation?.pending">New Conversation with</h4>
        <div class="flex items-center">
          <div class="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
            {{ selectedConversation?.otherUserName?.charAt(0) }}
          </div>
          <h2 class="ml-3 text-xl font-semibold">{{ selectedConversation?.otherUserName }}</h2>
        </div>
      </div>

      <!-- Messages area -->
      <div class="flex-1 p-4 w-full overflow-y-auto space-y-4" ref="messagesContainer">
        <div v-for="(message, index) in messages" :key="index" class="flex"
          :class="{ 'justify-end': message.sender_id === currentUser.id }">
          <div class="flex flex-col max-w-full md:max-w-[70%]">
            <p class="text-xs">{{ formatDateTime(message.created_at) }}</p>
          <div class="rounded-lg p-3  break-words" :class="{
            'bg-orange-500 text-white': message.sender_id === currentUser.id,
            'bg-gray-100 border-2 border-orange-500': message.sender_id !== currentUser.id
          }" style="word-wrap: break-word; overflow-wrap: break-word;">
            <p class="text-sm">{{ message.content }}</p>
          </div></div>
        </div>
      </div>


      <!-- Input area -->
      <div class="p-4 bg-white border-t ">
        <form @submit.prevent="sendMessage" class="flex items-center">
          <input v-model="newMessage" type="text" :disabled="!selectedConversation" placeholder="Type a message..."
            class="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <button type="submit" :disabled="!selectedConversation"
            class="bg-orange-500 text-white rounded-r-lg px-4 py-2 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <SendIcon class="h-6 w-5" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Circle } from 'lucide-vue-next';
import { SendIcon } from 'lucide-vue-next';
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
const emit = defineEmits(['conversationStarted']);
const props = defineProps(['newConversationInfo'])
const currentUser = useSupabaseUser(); // Current authenticated user
const conversations = ref([]);
const selectedConversation = ref(null);
const messages = ref([]);
const newMessage = ref('');
const supabase = useSupabaseClient();
const messagesContainer = ref(null);
const pendingConversation = ref({})
let messageSubscription = null; // Store the subscription reference

watch(props.newConversationInfo, async (info) => {
  console.log(info)
  if (info) {
    console.log(info.otherUserName)
    await startConversation(info.otherUserId, info.otherUserName);
  }
});
const startConversation = async (otherUserId, otherUserName) => {
  try {
    // Check if a conversation already exists in either direction
    const { data: existingConversation, error: fetchError } = await supabase
      .from('Conversations')
      .select(`
        id,
        current_user_id,
        other_user_id,
        last_message,
        unread_counts,
        updated_at,
        current_user:profiles!current_user_id(full_name),
        other_user:profiles!other_user_id(full_name)
      `)
      .or(
        `and(current_user_id.eq.${currentUser.value.id},other_user_id.eq.${otherUserId}),and(current_user_id.eq.${otherUserId},other_user_id.eq.${currentUser.value.id})`
      )
      .limit(1)
      .single();
    if (existingConversation) {
      // If the conversation exists, select it
      selectedConversation.value = {
        id: existingConversation.id,
        otherUserId: existingConversation.current_user_id === currentUser.value.id
          ? existingConversation.other_user_id
          : existingConversation.current_user_id,
        otherUserName: existingConversation.current_user_id === currentUser.value.id
          ? existingConversation.other_user?.full_name ?? 'Unknown'
          : existingConversation.current_user?.full_name ?? 'Unknown',
        lastMessage: existingConversation.last_message ?? '',
        unreadCounts: existingConversation.unread_counts ?? 0,
        updatedAt: existingConversation.updated_at ?? null,
      };;
      await selectConversation(selectedConversation.value);
      console.log(existingConversation.other_user.full_name, existingConversation.current_user.full_name)
    } else {
      throw fetchError
    }
  } catch (error) {
    if (error && error.code !== 'PGRST116') {
      console.error('Error checking for existing conversation:', error);
      return;
    } else {
      // Store conversation details temporarily
      pendingConversation.value = {
        otherUserId,
        otherUserName,
        pending: true
      };
      await selectConversation(pendingConversation.value);
    }
  }
};

// Fetch conversations for the current user
const fetchConversations = async () => {
  const { data, error } = await supabase
    .from('Conversations')
    .select(`
    id,
    current_user_id,
    other_user_id,
    last_message,
    unread_counts,
    updated_at,
    current_user:profiles!current_user_id(full_name),
    other_user:profiles!other_user_id(full_name)
  `)
    .or(`current_user_id.eq.${currentUser.value.id},other_user_id.eq.${currentUser.value.id}`)
    .order('updated_at', { ascending: false });

  if (!error) {
    conversations.value = data.map((conv) => ({
      id: conv.id,
      otherUserId: conv.current_user_id === currentUser.value.id ? conv.other_user_id : conv.current_user_id,
      otherUserName: conv.current_user_id === currentUser.value.id
        ? conv.other_user.full_name
        : conv.current_user.full_name,
      lastMessage: conv.last_message,
      unreadCounts: conv.unread_counts,
      updatedAt: conv.updated_at,
    }));
    if (props.newConversationInfo) {
      startConversation(props.newConversationInfo.other_user_id, props.newConversationInfo.other_user_name)
    }
  } else {
    console.error('Error fetching conversations:', error);
  }
};

// Select a conversation and fetch messages
const selectConversation = async (conversation) => {
  selectedConversation.value = conversation;
  if (conversation.id) {
    const { data, error } = await supabase
      .from('Messages')
      .select('*')
      .eq('conversation_id', conversation.id)
      .order('created_at', { ascending: true });

    if (!error) {
      messages.value = data;
      scrollToBottom();
      markMessagesAsRead(conversation.id);
    } else {
      console.error('Error fetching messages:', error);
    }
  }
};

// Mark messages as read
const markMessagesAsRead = async (conversationId) => {
  const { error } = await supabase.rpc('reset_unread_count', {
    conversation_id: conversationId,
    user_id: currentUser.value.id,
  });

  if (!error) {
    const conversation = conversations.value.find((c) => c.id === conversationId);
    if (conversation) {
      conversation.unreadCount = 0;
    }
  } else {
    console.error('Error resetting unread count:', error);
  }
};

// Scroll to the bottom of the messages container
const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const sendMessage = async () => {
  if (newMessage.value.trim() === '') return;

  try {
    let conversationId = selectedConversation.value?.id;

    // If there's a pending conversation, create it or find an existing one
    if (!conversationId && pendingConversation.value && selectedConversation.value == pendingConversation.value) {
      const { otherUserId, otherUserName } = pendingConversation.value;

      // Check again if a conversation exists (accounting for both directions)
      const { data: existingConversation, error: fetchError } = await supabase
        .from('Conversations')
        .select('*')
        .or(
          `and(current_user_id.eq.${currentUser.value.id},other_user_id.eq.${otherUserId}),and(current_user_id.eq.${otherUserId},other_user_id.eq.${currentUser.value.id})`
        )
        .limit(1)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        console.error('Error checking for existing conversation:', fetchError);
        return;
      }

      if (existingConversation) {
        selectedConversation.value = existingConversation;
        conversationId = existingConversation.id;
      } else {
        // Create a new conversation
        const { data: newConversation, error: createError } = await supabase
          .from('Conversations')
          .insert({
            current_user_id: currentUser.value.id,
            other_user_id: otherUserId,
            other_user_name: otherUserName,
            last_message: newMessage.value.trim(),
            unread_counts: { [currentUser.value.id]: 0, [otherUserId]: 1 }
          })
          .select()
          .single();

        if (createError) {
          console.error('Error creating conversation:', createError);
          return;
        }

        selectedConversation.value = {
          id: newConversation.id,
          otherUserId: newConversation.current_user_id === currentUser.value.id
            ? newConversation.other_user_id
            : newConversation.current_user_id,
          otherUserName: newConversation.current_user_id === currentUser.value.id
            ? newConversation.other_user?.full_name ?? 'Unknown'
            : newConversation.current_user?.full_name ?? 'Unknown',
          lastMessage: newConversation.last_message ?? '',
          unreadCounts: newConversation.unread_counts ?? 0,
          updatedAt: newConversation.updated_at ?? null,
        };
        conversationId = newConversation.id;

        pendingConversation.value = null;

        emit('conversationStarted', newConversation);
      }
    }

    // Insert the message
    const { error: messageError } = await supabase
      .from('Messages')
      .insert({
        conversation_id: conversationId,
        sender_id: currentUser.value.id,
        receiver_id: selectedConversation.value.otherUserId,
        content: newMessage.value.trim(),
        read: false,
      });

    if (!messageError) {
      await supabase
        .from('Conversations')
        .update({ last_message: newMessage.value.trim() })
        .eq('id', conversationId);

      newMessage.value = '';
      await fetchConversations();
      await selectConversation(selectedConversation.value);
    } else {
      console.error('Error sending message:', messageError);
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
};

// Real-time listener for new messages
const setupRealtimeListener = () => {
  messageSubscription = supabase
    .channel('custom-all-channel')
    .on(
      'postgres_changes',
      { event: 'insert', schema: 'public', table: 'Messages' },
      (payload) => {
        const newMessage = payload.new;

        const conversation = conversations.value.find(
          (c) => c.id === newMessage.conversation_id
        );

        if (conversation) {
          conversation.lastMessage = newMessage.content;
          messages.value.push(newMessage)
          scrollToBottom();

          if (newMessage.receiver_id === currentUser.value.id) {
            conversation.unreadCount += 1;
          }
          // After updating the lastMessage, reassign the conversations array to trigger reactivity
          conversations.value = [...conversations.value];
        } else {
          fetchConversations();
        }
      }
    )
    .subscribe();
};

// Clean up the subscription on unmount
const cleanupRealtimeListener = () => {
  if (messageSubscription) {
    supabase.removeChannel(messageSubscription);
    messageSubscription = null;
  }
};
const formatDateTime = (dateTimeStr) => {
  const date = new Date(dateTimeStr);
  const now = new Date();

  // Check if the date is today
  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  if (isToday) {
    // Format the hour manually to remove leading zero
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Ensure two-digit minutes
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format, ensuring 12 instead of 0

    return `${hours}:${minutes} ${ampm}`;
  } else {
    // Format as "Jan 5"
    return date.toLocaleString('en-US', { month: 'short', day: 'numeric' });
  }
};

// Lifecycle hooks
onMounted(() => {
  fetchConversations();
  setupRealtimeListener();
});

onUnmounted(() => {
  cleanupRealtimeListener();
});
</script>
