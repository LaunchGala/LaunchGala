<script setup lang="ts">
import { ref, watch } from 'vue';
import { DialogRoot } from 'radix-vue';

const emit = defineEmits(['open']); // Declare the event to emit
const isOpen = ref(false); // Reactive state variable to track open state

const notifyParent = () => {
  emit('open'); // Emit the event with data
};

// Watch the isOpen variable and call notifyParent when it changes to true
watch(isOpen, (newVal) => {
  if (newVal) {
    notifyParent();
  }
});
</script>

<template>
  <DialogRoot v-model:open="isOpen">
    <slot />
  </DialogRoot>
</template>
