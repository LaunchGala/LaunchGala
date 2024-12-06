<template>
    <div>
      
  
      <!-- Conversation Manager Dialog -->
      <Dialog v-slot="{ }" v-model="openManager">
        <DialogTrigger asChild>
            <!-- Button to open the conversation manager -->
            <Button class="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                @click="openManager = true">
                Messages
            </Button>
            <span
                v-if="unreadCount > 0"
                class="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {{ unreadCount }}
            </span>
        </DialogTrigger>
        <DialogContent class="max-w-2xl flex flex-1">
          <div class="h-[50vh] w-full">
  
            <!-- Conversation Manager Component -->
            <ConversationManager />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Button } from '@/components/ui/button';
  import ConversationManager from './ConversationManager.vue';
  import { DialogContent, Dialog, DialogTrigger } from '@/components/ui/dialog';
  
  const openManager = ref(false);
  </script>
  
  <style scoped>
  button {
    transition: transform 0.2s;
  }
  
  button:hover {
    transform: scale(1.1);
  }
  </style>
  