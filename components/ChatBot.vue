<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const isOpen = ref(false)
const initialMessage = {
  type: 'bot' as const,
  content: 'Hi I\'m Gala, Your Personal Event Planner. Try one of the suggested prompts below or ask me anything!'
}
const messages = ref([initialMessage])
const newMessage = ref('')
const chatContainer = ref(null)
const chatBox = ref(null)

const suggestedPrompts = [
  {
    text: "Create my event plan",
    description: "I'll help you build a comprehensive event plan"
  },
  {
    text: "Suggest event agenda",
    description: "Get a customized agenda based on your event type"
  },
  {
    text: "Calculate event budget",
    description: "I'll help estimate costs for your event"
  },
  {
    text: "Venue recommendations",
    description: "Find the perfect venue for your event"
  }
]

onClickOutside(chatBox, () => {
  if (isOpen.value) isOpen.value = false
})

const resetChat = () => {
  messages.value = [initialMessage]
  newMessage.value = ''
}

const sendMessage = (text: string = newMessage.value) => {
  if (!text.trim()) return

  // Add user message
  messages.value.push({
    type: 'user',
    content: text
  })

  // Simulate bot response
  messages.value.push({
    type: 'bot',
    content: 'typing...'
  })

  setTimeout(() => {
    messages.value[messages.value.length - 1].content = getResponse(text)
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

const getResponse = (message: string): string => {
  const responses: { [key: string]: string } = {
    "Create my event plan": "I'll help you create a detailed event plan. First, could you tell me the type of event you're planning (conference, wedding, corporate, etc.)?",
    "Suggest event agenda": "I'd be happy to help with your event agenda. What's the duration of your event and what's the main purpose?",
    "Calculate event budget": "Let's work on your event budget. What's your expected number of attendees and what type of event are you planning?",
    "Venue recommendations": "I can help find the perfect venue. What's your expected number of guests and preferred location?"
  }

  return responses[message] || "I understand you're interested in planning an event. Could you provide more details about what you're looking to organize?"
}
</script>

<template>
  <div ref="chatBox" class="fixed bottom-6 right-6 z-50">
    <!-- Chat Button -->
    <button 
      v-if="!isOpen"
      @click="isOpen = true"
      class="bg-orange-100 text-orange-600 p-4 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center space-x-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
      <span class="hidden sm:inline">Gala, Event Planning Assistant</span>
    </button>

    <!-- Chat Window -->
    <div 
      v-else
      class="bg-white rounded-2xl shadow-2xl w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-6rem)] flex flex-col"
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
            <h3 class="font-medium">Gala, Event Planner</h3>
            <p class="text-sm text-white/80">Online</p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button 
            @click="resetChat"
            class="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            title="Reset conversation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button 
            @click="isOpen = false" 
            class="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
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

        <!-- Suggested Prompts (show only if no messages except initial) -->
        <div v-if="messages.length === 1" class="space-y-2">
          <p class="text-sm text-gray-500 mt-4">Suggested prompts:</p>
          <button
            v-for="prompt in suggestedPrompts"
            :key="prompt.text"
            @click="sendMessage(prompt.text)"
            class="block w-full text-left p-3 rounded-xl border border-orange-200 hover:border-orange-500 hover:bg-orange-50 transition-colors duration-200"
          >
            <p class="font-medium text-gray-900">{{ prompt.text }}</p>
            <p class="text-sm text-gray-500">{{ prompt.description }}</p>
          </button>
        </div>
      </div>

      <!-- Input -->
      <div class="p-4 border-t">
        <form @submit.prevent="sendMessage()" class="flex space-x-2">
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