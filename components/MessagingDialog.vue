<template>
  <div>
    <!-- Radix Dialog Overlay and Content -->
    <Dialog v-slot="{ }" @open="initializeConversation">
      <!-- Button to open the message dialog -->
      <DialogTrigger asChild>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {{ title }}
        </button>
      </DialogTrigger>
      <DialogContent>
        <div class="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[40vh] flex flex-col">
          <!-- Header with a close button -->
          <div class="p-3 flex justify-between items-center border-b">
            <h2 class="text-lg font-semibold">Conversation</h2>
          </div>

          <!-- Messages container -->
          <div ref="messagesContainer" class="flex-1 p-2 pr-3 pl-3 overflow-y-auto bg-gray-100 flex flex-col gap-2">
            <p
              v-for="message in messages"
              :key="message.id"
              :class="message.sender_id === currentUser ? 'self-end bg-orange-400 text-white' : 'self-start bg-gray-300 text-black'"
              class="p-2 rounded-md text-sm max-w-xs break-words"
            >
              {{ message.content }}
            </p>
          </div>

          <!-- Message input area -->
          <div class="border-t p-3 flex gap-2 items-center bg-white">
            <Textarea
              v-model="newMessage"
              class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm resize-none"
              rows="2"
              placeholder="Type a message..."
              @keydown.enter.prevent="sendMessage"
            ></Textarea>
            <Button
              @click="sendMessage"
              class="OrangeCol font-semibold text-white py-2 rounded-md transition ease-in-out duration-150 hover:bg-orange-400"
            >
              Send
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';
import { DialogClose, DialogContent, Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

// Props: currentUser and otherUser (IDs of the two users in the conversation)
const props = defineProps({
  currentUser: {
    type: String,
    required: true,
  },
  otherUser: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'Open Messages',
  },
});

// Reactive variables
const messages = ref([]);
const newMessage = ref('');
const messagesContainer = ref(null);
const conversationId = ref(null); // Track the conversation ID
const supabase = useSupabaseClient(); // Accessing Supabase client from Nuxt app

// Scroll to the bottom of the messages container
const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

// Fetch messages for the current conversation
const fetchMessages = async () => {
  if (!conversationId.value) return;

  const { data, error } = await supabase
    .from('Messages')
    .select('*')
    .eq('conversation_id', conversationId.value)
    .order('created_at', { ascending: true });

  if (!error) {
    messages.value = data;
    scrollToBottom(); // Scroll to the bottom after fetching messages
  } else {
    console.error('Error fetching messages:', error);
  }
};

// Initialize conversation (find or create)
const initializeConversation = async () => {
  // Check if a conversation exists between the users
  const { data, error } = await supabase
    .from('Conversations')
    .select('id, current_user_id, other_user_id, other_user_name')
    .or(`and(current_user_id.eq.${props.currentUser},other_user_id.eq.${props.otherUser}),and(current_user_id.eq.${props.otherUser},other_user_id.eq.${props.currentUser})`)
    .maybeSingle();

  if (!error && data) {
    conversationId.value = data.id; // Use existing conversation
    await fetchMessages(); // Fetch messages for the conversation
  } else if (!error && !data) {
    // Fetch the name of the other user for the conversation
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', props.otherUser)
      .maybeSingle();

    if (profileError) {
      console.error('Error fetching profile:', profileError);
      return;
    }

    // Create a new conversation if none exists
    const { data: newConversation, error: creationError } = await supabase
      .from('Conversations')
      .insert({
        current_user_id: props.currentUser,
        other_user_id: props.otherUser,
        other_user_name: profileData?.full_name || 'Unknown User',
        updated_at: new Date(),
      })
      .select('id')
      .single();

    if (!creationError) {
      conversationId.value = newConversation.id;
      messages.value = []; // No messages in a new conversation
    } else {
      console.error('Error creating conversation:', creationError);
    }
  } else {
    console.error('Error checking for conversation:', error);
  }
};

// Send a new message
const sendMessage = async () => {
  if (newMessage.value.trim() === '') return;

  if (!conversationId.value) {
    console.error('Conversation not initialized.');
    return;
  }

  const { error } = await supabase
    .from('Messages')
    .insert({
      conversation_id: conversationId.value,
      sender_id: props.currentUser,
      receiver_id: props.otherUser,
      content: newMessage.value.trim(),
      read: false, // Optional field for unread tracking
    });

  if (!error) {
    newMessage.value = ''; // Clear the message input
    await fetchMessages(); // Refresh the message list
  } else {
    console.error('Error sending message:', error);
  }
};

// Watch the messages array and scroll to bottom whenever it changes (e.g., new message)
watch(messages, () => {
  scrollToBottom();
});
</script>

<style scoped>
.OrangeCol {
  background-color: #ff6a00;
}
.OrangeColLight {
  background-color: #ff6a00c4;
}
.OrangeText {
  color: #ff6900;
}
</style>
