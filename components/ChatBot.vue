<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const messages = ref([
  {
    type: 'bot',
    content: 'Hi! I\'m Gala, Your Personal Event Organizer. How can I help you today?'
  }
])
const newMessage = ref('')
const chatContainer = ref(null)
const chatBox = ref(null)



const sendMessage = () => {
  if (!newMessage.value.trim()) return

  // Add user message
  messages.value.push({
    type: 'user',
    content: newMessage.value
  })

  // Simulate bot response
  setTimeout(() => {
    messages.value.push({
      type: 'bot',
      content: 'Thanks for your message! Our team will help you find the perfect solution for your event needs.'
    })
  }, 1000)

  newMessage.value = ''

  // Scroll to bottom
  setTimeout(() => {
    if (chatContainer.value) {
      const container = chatContainer.value as HTMLElement
      container.scrollTop = container.scrollHeight
    }
  }, 100)
}
</script>

<template>
  <div ref="chatBox" class="fixed bottom-6 right-6 z-50">
    <!-- Chat Button -->
    <button 
      v-if="!isOpen"
      @click="isOpen = true"
      class="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center space-x-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
      <span class="hidden sm:inline">Gala, lets build your event together</span>
    </button>

    <!-- Chat Window -->
    <div 
      v-else
      class="bg-white rounded-2xl shadow-2xl w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] flex flex-col"
    >
      <!-- Header -->
      <div class="p-4 border-b flex justify-between items-center bg-orange-500 text-white rounded-t-2xl">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 class="font-medium">Gala, Event Organizer</h3>
            <p class="text-sm text-white/80">Online</p>
          </div>
        </div>
        <button @click="isOpen = false" class="text-white/80 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Messages -->
      <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-4">
        <div 
          v-for="(message, index) in messages" 
          :key="index"
          :class="[
            'max-w-[80%] rounded-2xl p-3',
            message.type === 'user' 
              ? 'bg-orange-500 text-white ml-auto rounded-br-none' 
              : 'bg-gray-100 text-gray-800 rounded-bl-none'
          ]"
        >
          {{ message.content }}
        </div>
      </div>

      <!-- Input -->
      <div class="p-4 border-t">
        <form @submit.prevent="sendMessage" class="flex space-x-2">
          <input 
            v-model="newMessage"
            type="text"
            placeholder="Type your message..."
            class="flex-1 bg-gray-100 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
          <button 
            type="submit"
            class="bg-orange-500 text-white p-2 rounded-xl hover:bg-orange-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>