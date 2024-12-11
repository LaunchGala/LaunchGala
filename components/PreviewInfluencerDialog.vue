<template>
  <div>
    <!-- Radix Dialog Overlay and Content -->
    <Dialog v-slot="{ }">
      <!-- Button to open the message dialog -->
      <DialogTrigger asChild>
        <Button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Preview Influencer Listing
        </button>
      </DialogTrigger>
      <DialogContent>
        <InfluencerDetailCard :influencer="props.influencerPreview" class="m-2 mr-3"></InfluencerDetailCard>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup>
import { DialogClose, DialogContent, Dialog, DialogTrigger } from '@/components/ui/dialog';


const props = defineProps(['influencerPreview']);
</script>