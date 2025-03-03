<template>
  <div class="flex h-[70vh] w-full bg-gray-100 dark:bg-gray-800">
    <!-- Contacts sidebar -->
    <aside class="w-1/3 bg-white dark:bg-gray-900 border-r dark:border-gray-700 h-full">
      <div class="p-4 bg-orange-500 text-white dark:bg-orange-600 flex justify-between">
        <h2 class="text-xl font-semibold">Conversations</h2>
        <Button @click="openNewConversationModal = true" variant="ghost" class="text-white">
          <Plus class="w-4 h-4" />
        </Button>
      </div>
      <ul class="overflow-y-auto h-full">
        <li v-for="conversation in conversations" :key="conversation.id" @click="selectConversation(conversation)"
          class="p-4 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-200"
          :class="{ 'bg-orange-100 dark:bg-orange-800': selectedConversation?.id === conversation.id }">
          <div class="flex items-center">
            <div
              class="w-10 h-10 rounded-full bg-orange-500 dark:bg-orange-600 flex items-center justify-center text-white text-sm font-semibold">
              {{ conversation.otherUserFullName?.charAt(0) }}
            </div>
            <div class="flex flex-col flex-grow ml-3">
              <span class="font-medium dark:text-gray-300">{{ conversation.otherUserFullName }}</span>
              <span class="font-light text-sm text-gray-500 dark:text-gray-400 truncate">
                {{ conversation.lastMessage || 'No messages yet' }}
              </span>
            </div>
            <div v-if="conversation.unreadCount > 0"
              class="flex-shrink-0 ml-4 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
              {{ conversation.unreadCount }}
            </div>
            <span class="text-xs text-gray-500 dark:text-gray-400">{{ formatDateTime(conversation.updatedAt) }}</span>
          </div>
        </li>
      </ul>
    </aside>

    <!-- Chat area -->
    <main class="w-2/3 flex-1 flex flex-col h-full">
      <header class="bg-white dark:bg-gray-900 border-b dark:border-gray-700 p-4 flex items-center">
        <div v-if="selectedConversation" class="flex items-center">
          <div
            class="w-10 h-10 rounded-full bg-orange-500 dark:bg-orange-600 flex items-center justify-center text-white text-sm font-semibold">
            {{ selectedConversation?.otherUserFullName?.charAt(0) }}
          </div>
          <h2 class="ml-3 text-xl font-semibold dark:text-white">{{ selectedConversation?.otherUserFullName }}</h2>
        </div>
        <div v-if="!selectedConversation" class="flex items-center">
          <h2 class="ml-3 text-xl font-semibold dark:text-white">Select a conversation or start a new one.</h2>
        </div>
      </header>

      <section class="flex-1 p-4 w-full overflow-y-auto space-y-4" ref="messagesContainer">
        <article v-for="message in messages" :key="message.id" class="flex"
          :class="{ 'justify-end': message.sender_id === currentUser.id }">
          <div class="flex flex-col max-w-full md:max-w-[70%]">
            <p class="text-xs text-gray-500 dark:text-gray-400 self-end">{{ formatDateTime(message.created_at) }}</p>
            <div class="rounded-lg p-3 break-words" :class="{
              'bg-orange-500 text-white': message.sender_id === currentUser.id,
              'bg-gray-100 dark:bg-gray-700 border-2 border-orange-500': message.sender_id !== currentUser.id
            }" style="word-wrap: break-word; overflow-wrap: break-word;">
              <p class="text-sm dark:text-gray-300">{{ message.content }}</p>
            </div>
          </div>
        </article>
      </section>

      <footer class="p-4 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
        <form @submit.prevent="sendMessage" class="flex items-center">
          <input v-model="newMessage" type="text" :disabled="!selectedConversation" placeholder="Type a message..."
            class="flex-1 border dark:border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-gray-300" />
          <button type="submit" :disabled="!selectedConversation"
            class="bg-orange-500 text-white dark:bg-orange-600 rounded-r-lg px-4 py-2 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <SendIcon class="h-6 w-5" />
          </button>
        </form>
      </footer>
    </main>
    <!-- New Conversation Modal -->
    <Dialog v-model:open="openNewConversationModal">
      <DialogContent class="sm:max-w-[425px] flex flex-col">
        <DialogHeader>
          <DialogTitle>New Conversation</DialogTitle>
          <DialogDescription>
            Select a user to start a new conversation with.
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-1 items-center gap-4">
            <Label for="user-search" class="text-right">
              Search Users
            </Label>
            <Input type="text" id="user-search" v-model="searchQuery" placeholder="Search by name" />
            <ul class="mt-2 max-h-48 overflow-y-auto rounded-md border border-gray-300">
              <li v-for="user in filteredUsers" :key="user.id" @click="selectUser(user)"
                class="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                {{ user.full_name }}
              </li>
            </ul>
          </div>
        </div>
        <DialogFooter>
          <Button @click="startNewConversation" type="submit" class="w-full" :disabled="!selectedUser">
            Start Conversation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed, watch, defineExpose } from 'vue';
import { SendIcon, Plus } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const supabase = useSupabaseClient();
const currentUser = useSupabaseUser();

const conversations = ref([]);
const selectedConversation = ref(null);
const messages = ref([]);
const newMessage = ref('');
const messagesContainer = ref(null);
let messageSubscription = null;

//New Conversation Properties
const openNewConversationModal = ref(false);
const availableUsers = ref([]);
const selectedUser = ref(null);
const searchQuery = ref('');

// Fetch all conversations for the current user
const fetchConversations = async () => {
  const { data, error } = await supabase
    .from('Conversations')
    .select(`
      id,
      created_at,
      updated_at,
      user_one_id,
      user_two_id,
      last_message,
      unread_counts,
      user_one:profiles!user_one_id(full_name),
      user_two:profiles!user_two_id(full_name)
    `)
    .or(`user_one_id.eq.${currentUser.value.id},user_two_id.eq.${currentUser.value.id}`)
    .order('updated_at', { ascending: false });

  if (error) {
    console.error('Error fetching conversations:', error);
    return;
  }

  conversations.value = data.map(conv => {
    const otherUser = conv.user_one_id === currentUser.value.id ? conv.user_two : conv.user_one;
    return {
      id: conv.id,
      otherUserId: conv.user_one_id === currentUser.value.id ? conv.user_two_id : conv.user_one_id,
      otherUserFullName: otherUser.full_name,
      lastMessage: conv.last_message,
      unreadCount: conv.unread_counts?.[currentUser.value.id] ?? 0,
      updatedAt: conv.updated_at,
    };
  });
};

// Select a conversation and fetch its messages
const selectConversation = async (conversation) => {
  selectedConversation.value = conversation;

  if (conversation.id) {
    const { data, error } = await supabase
      .from('Messages')
      .select('*')
      .eq('conversation_id', conversation.id)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching messages:', error);
      return;
    }

    messages.value = data;
    scrollToBottom();
    markMessagesAsRead(conversation.id);
  } else {
    messages.value = []
  }
};

// Mark messages as read for the current user
const markMessagesAsRead = async (conversationId) => {
  const { error } = await supabase.rpc('reset_unread_count', {
    conversation_id: conversationId,
    user_id: currentUser.value.id,
  });

  if (error) {
    console.error('Error resetting unread count:', error);
    return;
  }

  const conversation = conversations.value.find((c) => c.id === conversationId);
  if (conversation) {
    conversation.unreadCount = 0;
  }
};

// Scroll to the bottom of the messages container
const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

// Send a message
const sendMessage = async () => {
  if (!newMessage.value.trim() || !selectedConversation.value) return;
  if(!selectedConversation.value.id){
      const { data: newConversation, error: createError } = await supabase
      .from('Conversations')
      .insert({
          user_one_id: currentUser.value.id,
          user_two_id: selectedConversation.value.otherUserId,
          unread_counts: { [currentUser.value.id]: 0, [selectedConversation.value.otherUserId]: 1 },
      })
      .select(`
          id,
          created_at,
          updated_at,
          user_one_id,
          user_two_id,
          last_message,
          unread_counts,
          user_one:profiles!user_one_id(full_name),
          user_two:profiles!user_two_id(full_name)
      `)
      .single();

      if (createError) {
      console.error('Error creating conversation:', createError);
      return;
      }
      selectedConversation.value.id = newConversation.id;
      await fetchConversations();
  }
  const conversationId = selectedConversation.value.id;
  const otherUserId = selectedConversation.value.otherUserId;
  
      
  // Insert the message
  const { error: messageError } = await supabase
    .from('Messages')
    .insert({
      conversation_id: conversationId,
      sender_id: currentUser.value.id,
      content: newMessage.value.trim(),
    });

  if (messageError) {
    console.error('Error sending message:', messageError);
    return;
  }

  // Update last_message in Conversations table
  await supabase
    .from('Conversations')
    .update({ last_message: newMessage.value.trim()})
    .eq('id', conversationId);

  newMessage.value = '';
  await fetchConversations();
  await selectConversation(selectedConversation.value);
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
        const conversation = conversations.value.find((c) => c.id === newMessage.conversation_id);

        if (conversation) {
          conversation.lastMessage = newMessage.content;
          messages.value.push(newMessage);
          scrollToBottom();
          if (newMessage.sender_id !== currentUser.value.id) {
            conversation.unreadCount += 1;
          }
          conversations.value = [...conversations.value];
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

// Format date and time for messages and conversation list
const formatDateTime = (dateTimeStr) => {
  const date = new Date(dateTimeStr);
  const now = new Date();
  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  if (isToday) {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  } else {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
};

const fetchAvailableUsers = async () => {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name')
    .neq('id', currentUser.value.id)
    .limit(10)
    .ilike('full_name', `%${searchQuery.value}%`); // Case-insensitive search

  if (error) {
    console.error('Error fetching available users:', error);
    return;
  }

  availableUsers.value = data;
};
// Filter the users based on the search query

const filteredUsers = computed(() => {
  return availableUsers.value.filter(user =>
    user.full_name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
watch(searchQuery, async (newValue, oldValue) => {
  await fetchAvailableUsers();
})
const checkExistingConversation = async (userId) => {
    const { data: existingConversation, error: fetchError } = await supabase
      .from('Conversations')
      .select(`
        id,
        user_one_id,
        user_two_id,
        last_message,
        unread_counts,
        updated_at,
        user_one:profiles!user_one_id(full_name),
        user_two:profiles!user_two_id(full_name)
      `)
      .or(
        `and(user_one_id.eq.${currentUser.value.id},user_two_id.eq.${userId}),and(user_one_id.eq.${userId},user_two_id.eq.${currentUser.value.id})`
      )
      .limit(1)
      .single();
    if (fetchError && fetchError.code !== 'PGRST116') {
        console.error('Error checking for existing conversation:', fetchError);
        return;
    }
    if (existingConversation) {
        const otherUser = existingConversation.user_one_id === currentUser.value.id ? existingConversation.user_two : existingConversation.user_one;
      const conversation = {
        id: existingConversation.id,
        otherUserId: existingConversation.user_one_id === currentUser.value.id ? existingConversation.user_two_id : existingConversation.user_one_id,
        otherUserFullName: otherUser.full_name,
        lastMessage: existingConversation.last_message,
        unreadCount: existingConversation.unread_counts?.[currentUser.value.id] ?? 0,
        updatedAt: existingConversation.updated_at,
      }
      selectConversation(conversation)
    }
    else{
        const { data: user, error: userError } = await supabase
        .from('profiles')
        .select('id, full_name')
        .eq('id', userId)
        .single();
        if(userError) return console.log("Error getting user data", userError)
        const conversation = {
            otherUserId: user.id,
            otherUserFullName: user.full_name,
            id: null
        }
        selectConversation(conversation)
    }
};
//Start Conversation
const startConversation = async (userId) => {
    await checkExistingConversation(userId)
};
const startNewConversation = async () => {
    if (!selectedUser.value) return;
    await checkExistingConversation(selectedUser.value.id);
    selectedUser.value = null;
    openNewConversationModal.value = false;
};
const selectUser = (user) => {
  selectedUser.value = user;
}
defineExpose({
  startConversation
})
onMounted(async () => {
  await fetchConversations();
  fetchAvailableUsers();
  setupRealtimeListener();
});

onUnmounted(() => {
  cleanupRealtimeListener();
});
</script>

<style scoped>
.message-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  padding: 1rem;
}

.message-row {
  display: flex;
  width: 100%;
  gap: 0.5rem;
}

.message-bubble {
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  max-width: 80%;
}

.message-row.sent {
  justify-content: flex-end;
}

.message-bubble.sent {
  background-color: #007bff;
  color: white;
}

.message-bubble.received {
  background-color: #f0f0f0;
}
</style>

