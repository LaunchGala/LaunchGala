<template>
  <div>
    <!-- Radix Dialog Overlay and Content -->
    <Dialog v-slot="{ }" @open="initializeConversation">
      <!-- Button to open the message dialog -->
      <DialogTrigger asChild>
        <Button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Preview Expert Listing
        </button>
      </DialogTrigger>
      <DialogContent>
        <ExpertDetailCard :profile="props.profile" class="m-2 mr-3"></ExpertDetailCard>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup>
import { DialogClose, DialogContent, Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Button } from "@/components/ui/button";


const props = defineProps(['profile']);
</script>