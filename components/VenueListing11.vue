
<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { Home, Calendar, MapPin, Clock, Check } from 'lucide-vue-next';
import { Progress } from '@/components/ui/progress';


const props = defineProps(['venueListing', 'isVisible']);
console.log(props.venueListing);
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10 flex flex-col items-center">
    <div class="w-full max-w-6xl  px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle class="text-2xl">Venue Listing Details</CardTitle>
          <CardDescription>Extensive view for your venue listing details.</CardDescription>
        </CardHeader>
        <CardContent>
          <VenueDetailCard :venue-id="props.venueListing.id" :is-visible="props.isVisible"></VenueDetailCard>
          </CardContent>
        <div class="flex justify-end gap-4 p-4 items-center">
          <Button @click="$emit('previousStep')" variant="outline" class="border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-200">
            Edit Details
          </Button>
          <Progress :model-value="100"   />

          <Button>
            Publish Listing
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>
