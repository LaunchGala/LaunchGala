
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
const props = defineProps(['venueListing']);
console.log(props.venueListing);
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Choose Venue Size</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-xl font-semibold mb-4">Hackathone</span>
              <span class="text-sm">Up to 50 guests</span>
            </div>
            <div 
              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-xl font-semibold mb-4">Networking Event</span>
              <span class="text-sm">Up to 200 guests</span>
            </div>
            <div 
              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-xl font-semibold mb-4">Conference</span>
              <span class="text-sm">Up to 500 guests</span>
            </div>
            <div 
              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-xl font-semibold mb-4">Dinner</span>
              <span class="text-sm">500+ guests</span>
            </div>
          </div>
        </CardContent>
        <div class="flex justify-between p-4">
          <Button @click="$emit('previousStep')" as-child variant="default">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="33" class="w-1/2" />
          <Button @click="$emit('nextStep')" as-child variant="default">
            <div  class="flex items-center">
              Next
              <ArrowRight class="w-4 h-4 ml-2" />
            </div>
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>
