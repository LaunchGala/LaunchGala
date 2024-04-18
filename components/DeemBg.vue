
<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogOverlay,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Check } from 'lucide-vue-next';
</script>

<template>

  <Dialog as="div" class="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-50">
    <DialogTrigger as="div" class="invisible">Open</DialogTrigger>
    <div class="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-80"></div>
    <DialogContent class="relative w-full h-full flex items-center justify-center">
      <div class="bg-white dark:bg-black p-8 rounded-lg shadow-xl max-w-sm w-full">
        <div class="flex justify-between items-center">
          <h3 class="text-2xl font-bold">Modal Title</h3>
          <Check class="w-6 h-6 text-green-500" />
        </div>
        <p class="mt-4 text-gray-600 dark:text-gray-400">
          This is a full-screen modal with a dimmed background. It can include any content you like.
        </p>
        <DialogFooter class="mt-4 flex justify-end">
          <button class="py-2 px-4 bg-blue-500 dark:bg-blue-700 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none transition duration-150">
            Close
          </button>
        </DialogFooter>
      </div>
    </DialogContent>
  </Dialog>
</template>
