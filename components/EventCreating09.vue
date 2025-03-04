
<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';


const props = defineProps(['event', 'isVisible']);
console.log(props.event);
const emits = defineEmits(['publish']);
function publishEventListing(){
  emits('publish');
}
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10 flex flex-col items-center">
    <div class="w-full  px-4 lg:px-8">
          <h1 class="text-2xl font-semibold mb-2 text-center">Event Listing Preview</h1>
          <h2 class="text-xl mb-4 text-center">Extensive view for your event listing details.</h2>
          <EventDetailCard :event-id="props.event.id" :is-visible="props.isVisible" :is-preview="true"></EventDetailCard>
          
        <div class="flex justify-end gap-4 p-4 items-center">
          <Button @click="$emit('previousStep')" variant="outline" class="border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-200">
            Edit Details
          </Button>
          <Progress :model-value="100"   />
          <Button v-show="!event.is_published" @click="publishEventListing()">
            Publish
          </Button>
          <Button v-show="event.is_published" @click="publishEventListing()">
            Unpublish
          </Button>
        </div>
    </div>
  </div>
</template>
