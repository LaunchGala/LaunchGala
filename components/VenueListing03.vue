


<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

const selectedCapacity = ref(0);

// Handlers for handling click events
function selectCapacity(capacity: number) {
  selectedCapacity.value = capacity;
  props.venueListing.capacity = capacity;
  console.log(selectedCapacity.value);
};



const props = defineProps(['venueListing']);
console.log(props.venueListing);
</script>

<template>
  <div class="bg-white dark:bg-red min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Choose Venue Size: (Select only one)</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg "
              :class="{ 'shadow-orange-500': selectedCapacity == 50, 'shadow-lg': selectedCapacity != 50 }"

              @click="selectCapacity(50)"
            >
              <img src="/Bootstrapping.png" alt="Office" class="w-full h-20 mb-2 rounded-lg ">
              <span class="text-sm font-semibold">X-Small</span>
              <span class="text-sm dark:text-gray-300">Up to 50 guests</span>

            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedCapacity == 100, 'shadow-lg': selectedCapacity != 100 }"
              @click="selectCapacity(100)"
            >
            <img src="/Bootstrapping.png" alt="Office" class="w-full h-20 mb-2 rounded-lg ">
              <span class="text-sm font-semibold">Small</span>
              <span class="text-sm dark:text-gray-300">Up to 100 guests</span>

            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedCapacity == 200, 'shadow-lg': selectedCapacity != 200 }"
              @click="selectCapacity(200)"
            >
            <img src="/Bootstrapping.png" alt="Gallery" class="w-full h-20 mb-2 rounded-lg ">
              <span class="text-sm font-semibold">Medium</span>
              <span class="text-sm dark:text-gray-300">Up to 200 guests</span>

            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedCapacity == 350, 'shadow-lg': selectedCapacity != 350 }"
              @click="selectCapacity(350)"
            >
              <img src="/placeholder.svg" alt="Co-Working space" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Large</span>
              <span class="text-sm dark:text-gray-300">Up to 350 guests</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedCapacity == 500, 'shadow-lg': selectedCapacity != 500 }"
              @click="selectCapacity(500)"
            >
              <img src="/placeholder.svg" alt="Private room" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">X-Large</span>
              <span class="text-sm dark:text-gray-300">Up to 500 guests</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedCapacity == 999, 'shadow-lg': selectedCapacity != 999 }"
              @click="selectCapacity(999)"
            >
              <img src="/placeholder.svg" alt="Auditorium" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Huge</span>
              <span class="text-sm dark:text-gray-300">500 and more</span>

            </button>
            
            <!-- Additional categories would go here -->
          </div>
        </CardContent>
        <div class="flex justify-between items-center p-4">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="10"  />
          <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
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
