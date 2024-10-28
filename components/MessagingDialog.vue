<template>
  <div>

    <!-- Radix Dialog Overlay and Content -->
    <Dialog v-slot="{ }" @open="scrollToBottom">
      <!-- Button to open the message dialog -->
      <DialogTrigger asChild>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Open Messages
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
              @keydown.enter.prevent="sendMessage">
            </Textarea>
            <Button 
              @click="sendMessage" 
              class="OrangeCol font-semibold text-white py-2 rounded-md transition ease-in-out duration-150 hover:bg-orange-400">
              Send
            </Button>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useNuxtApp } from '#app';  // Specific to Nuxt 3
import { DialogClose, DialogContent, Dialog,DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

// Props: currentUser and otherUser (IDs of the two users in the conversation)
const props = defineProps({
  currentUser: {
    type: String,
    required: true
  },
  otherUser: {
    type: String,
    required: true
  }
});

// Reactive variables
const messages = ref([]);
const newMessage = ref('');
const messagesContainer = ref(null);
const supabase = useSupabaseClient();  // Accessing Supabase client from Nuxt app

// Fetch messages for a conversation between currentUser and otherUser
const fetchMessages = async () => {
  const { data, error } = await supabase
    .from('Messages')
    .select('*')
    .or(
      `and(sender_id.eq.${props.currentUser},receiver_id.eq.${props.otherUser}),` +
      `and(sender_id.eq.${props.otherUser},receiver_id.eq.${props.currentUser})`
    )
    .order('created_at', { ascending: true });

  if (!error) {
    messages.value = data;
    scrollToBottom(); // Scroll to the bottom after fetching messages
  } else {
    console.error('Error fetching messages:', error);
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

  const { error } = await supabase
    .from('Messages')
    .insert({
      sender_id: props.currentUser,
      receiver_id: props.otherUser,
      content: newMessage.value.trim()
    });

  if (!error) {
    newMessage.value = '';  // Clear the message input
    await fetchMessages();  // Refresh the message list
  } else {
    console.error('Error sending message:', error);
  }
};

// Fetch messages when the component is mounted
fetchMessages();

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
