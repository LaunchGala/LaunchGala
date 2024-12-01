<template>
    <div class="flex h-full w-full bg-gray-100">
      <!-- Contacts sidebar -->
      <div class="w-1/3 bg-white border-r">
        <div class="p-4 bg-orange-500 text-white">
          <h2 class="text-xl font-semibold">Conversations</h2>
        </div>
        <ul class="overflow-y-auto h-[calc(100%-4rem)]">
          <li
            v-for="conversation in conversations"
            :key="conversation.id"
            @click="selectConversation(conversation)"
            class="p-4 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            :class="{ 'bg-orange-100': selectedConversation?.id === conversation.id,
                      'font-bold text-blue-600': conversation.unreadCount > 0,}"
          >
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
                {{ conversation?.otherUserName?.charAt(0) }}
              </div>
              <span class="ml-3 font-medium">{{ conversation?.otherUserName }}</span>
            </div>
          </li>
        </ul>
      </div>
  
      <!-- Chat area -->
      <div class="w-2/3 flex-1 flex flex-col h-full ">
        <!-- Chat header -->
        <div class="bg-white border-b p-4 flex items-center">
          <div class="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
            {{ selectedConversation?.otherUserName?.charAt(0) }}
          </div>
          <h2 class="ml-3 text-xl font-semibold">{{ selectedConversation?.otherUserName }}</h2>
        </div>
  
        <!-- Messages area -->
        <div class="flex-1 p-4 w-full overflow-y-auto space-y-4" ref="messagesContainer">
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="flex"
            :class="{ 'justify-end': message.sender_id === currentUser.id }"
          >
            <div
              class="rounded-lg p-3 max-w-[70%]"
              :class="{
                'bg-orange-500 text-white': message.sender_id === currentUser.id,
                'bg-gray-100': message.sender_id !== currentUser.id
              }"
            >
              <p class="text-sm break-words">{{ message.content }}</p>
            </div>
          </div>
        </div>
  
        <!-- Input area -->
        <div class="p-4 bg-white border-t">
          <form @submit.prevent="sendMessage" class="flex items-center">
            <input
              v-model="newMessage"
              type="text"
              placeholder="Type a message..."
              class="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              class="bg-orange-500 text-white rounded-r-lg px-4 py-2 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <SendIcon class="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import { SendIcon } from 'lucide-vue-next';
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const currentUser = useSupabaseUser(); // Current authenticated user
const conversations = ref([]);
const selectedConversation = ref(null);
const messages = ref([]);
const newMessage = ref('');
const supabase = useSupabaseClient();
const messagesContainer = ref(null);
let messageSubscription = null; // Store the subscription reference

// Fetch conversations for the current user
const fetchConversations = async () => {
  const { data, error } = await supabase
    .from('Conversations')
    .select('id, current_user_id, other_user_id, other_user_name, last_message, unread_count, updated_at')
    .or(
      `current_user_id.eq.${currentUser.value.id},other_user_id.eq.${currentUser.value.id}`
    )
    .order('updated_at', { ascending: false });

  if (!error) {
    conversations.value = data.map((conv) => ({
      id: conv.id,
      otherUserId: conv.current_user_id === currentUser.value.id ? conv.other_user_id : conv.current_user_id,
      otherUserName: conv.other_user_name,
      lastMessage: conv.last_message,
      unreadCount: conv.unread_count,
      updatedAt: conv.updated_at,
    }));
  } else {
    console.error('Error fetching conversations:', error);
  }
};

// Select a conversation and fetch messages
const selectConversation = async (conversation) => {
  selectedConversation.value = conversation;

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
};

// Mark messages as read
const markMessagesAsRead = async (conversationId) => {
  const { error } = await supabase
    .from('Messages')
    .update({ read: true })
    .eq('conversation_id', conversationId)
    .eq('receiver_id', currentUser.value.id);

  if (!error) {
    const conversation = conversations.value.find((c) => c.id === conversationId);
    if (conversation) {
      conversation.unreadCount = 0;
    }
  } else {
    console.error('Error marking messages as read:', error);
  }
};

// Scroll to the bottom of the messages container
const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

// Send a new message
const sendMessage = async () => {
  if (newMessage.value.trim() === '') return;

  try {
    const { error } = await supabase
      .from('Messages')
      .insert({
        conversation_id: selectedConversation.value.id,
        sender_id: currentUser.value.id,
        receiver_id: selectedConversation.value.otherUserId,
        content: newMessage.value.trim(),
        read: false,
      });

    if (!error) {
      newMessage.value = '';
      await selectConversation(selectedConversation.value); // Refresh messages
    } else {
      console.error('Error sending message:', error);
    }
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

// Real-time listener for new messages
const setupRealtimeListener = () => {
  messageSubscription = supabase
    .channel('custom-all-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'Messages' },
      (payload) => {
        const newMessage = payload.new;

        // Find the related conversation and update it
        const conversation = conversations.value.find(
          (c) => c.id === newMessage.conversation_id
        );

        if (conversation) {
          conversation.lastMessage = newMessage.content;

          // Increment unread count if the message is for the current user
          if (newMessage.receiver_id === currentUser.value.id) {
            conversation.unreadCount += 1;
          }
        } else {
          // Optionally refetch conversations if it's a new conversation
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

// Lifecycle hooks
onMounted(() => {
  fetchConversations();
  setupRealtimeListener();
});

onUnmounted(() => {
  cleanupRealtimeListener();
});
</script>

