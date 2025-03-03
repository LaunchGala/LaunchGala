<template>
  <div class="m-2">
    <!-- Conversation Manager Dialog -->
    <Dialog v-model="openManager">
      <DialogTrigger asChild>
        <!-- Button to open the conversation manager -->
        <Button v-if="!isIcon && !hidden" @click="openAndStart"
          class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          {{ getLabel() }}
        </Button>
        <MessageCircleIcon v-if="isIcon && !hidden" class="text-orange-500 rounded-md hover:bg-orange-200" />
        <span v-if="unreadCount > 0"
          class="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {{ unreadCount }}
        </span>
        <slot v-if="hidden" />
      </DialogTrigger>
      <DialogContent class="max-w-4xl flex flex-col">
        <div class="w-full h-[70vh]">
          <!-- Conversation Manager Component -->
          <ConversationManager ref="conversationManagerRef" />
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, watch, computed, nextTick } from 'vue';
import { Button } from '@/components/ui/button';
import ConversationManager from './ConversationManager.vue';
import { DialogContent, Dialog, DialogTrigger } from '@/components/ui/dialog';
import { MessageCircleIcon } from 'lucide-vue-next';

const conversationManagerRef = ref(null);

const openManager = ref(false);
const props = defineProps({
  startConversationUserId: {
    type: String,
    required: false,
  },
  isIcon: {
    type: Boolean,
    default: true
  },
  label: {
    type: String,
    default: null
  },
  hidden: {
    type: Boolean,
    default: false
  },
  unreadCount: {
    type: Number,
    default: 0
  }
});

const isIcon = props.isIcon;
const getLabel = () => props.label ? props.label : "Messages";

async function openAndStart(){
    if (props.startConversationUserId) {
    await nextTick()
    conversationManagerRef.value.startConversation(props.startConversationUserId);
  }
  openManager.value = true;
};
</script>

<style scoped>
button {
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.1);
}
</style>
