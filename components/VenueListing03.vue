
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
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
            @click="props.venueListing.capacity = 50"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-xl font-semibold mb-4">X-Small</span>
              <span class="text-sm">Up to 50 guests</span>
            </div>
            <div 
            @click="props.venueListing.capacity = 100"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-xl font-semibold mb-4">Small</span>
              <span class="text-sm">Up to 100 guests</span>
            </div>
            <div 
            @click="props.venueListing.capacity = 200"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-xl font-semibold mb-4">Medium</span>
              <span class="text-sm">Up to 200 guests</span>
            </div>
            <div 
              @click="props.venueListing.capacity = 350"
              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-xl font-semibold mb-4">Large</span>
              <span class="text-sm">Up to 350 guests</span>
            </div>
            <div 
            @click="props.venueListing.capacity = 500"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-xl font-semibold mb-4">X-Large</span>
              <span class="text-sm">Up to 500 guests</span>
            </div>
            <div 
            @click="props.venueListing.capacity = 999"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-xl font-semibold mb-4">Huge</span>
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
