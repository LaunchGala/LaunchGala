


<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { User } from 'lucide-vue-next'


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
          <CardTitle>Choose Venue Size/Capacity: (Select only one)</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg "
              :class="{ 'shadow-orange-500': selectedCapacity == 50, 'shadow-lg': selectedCapacity != 50 }"

              @click="selectCapacity(50)"
            >
            <CardContent class="p-5 flex flex-col items-center">
        <div class="p-4 bg-orange-100 dark:bg-orange-600 rounded-full">
          <User size="48" class="text-orange-500 dark:text-white" />
        </div>
        <CardDescription class="mt-4 text-2xl font-semibold text-orange-500 dark:text-white">
          X-Small
        </CardDescription>
        <p class="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          Up to 50 guests
        </p>
      </CardContent>
              <!-- <img src="/Bootstrapping.png" alt="Office" class="w-full h-20 mb-2 rounded-lg "> -->
              <!-- <span class="text-sm font-semibold">X-Small</span>
              <span class="text-sm dark:text-gray-300">Up to 50 guests</span> -->

            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedCapacity == 100, 'shadow-lg': selectedCapacity != 100 }"
              @click="selectCapacity(100)"
            >
            <CardContent class="p-5 flex flex-col items-center">
        <div class="p-4 bg-orange-100 dark:bg-orange-600 rounded-full">
          <User size="48" class="text-orange-500 dark:text-white" />
        </div>
        <CardDescription class="mt-4 text-2xl font-semibold text-orange-500 dark:text-white">
          Small
        </CardDescription>
        <p class="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          Up to 100 guests
        </p>
      </CardContent>
 

            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedCapacity == 200, 'shadow-lg': selectedCapacity != 200 }"
              @click="selectCapacity(200)"
            >
            <CardContent class="p-5 flex flex-col items-center">
        <div class="p-4 bg-orange-100 dark:bg-orange-600 rounded-full">
          <User size="48" class="text-orange-500 dark:text-white" />
        </div>
        <CardDescription class="mt-4 text-2xl font-semibold text-orange-500 dark:text-white">
          Medium
        </CardDescription>
        <p class="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          Up to 200 guests
        </p>
      </CardContent>
        

            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedCapacity == 350, 'shadow-lg': selectedCapacity != 350 }"
              @click="selectCapacity(350)"
            >
            <CardContent class="p-5 flex flex-col items-center">
        <div class="p-4 bg-orange-100 dark:bg-orange-600 rounded-full">
          <User size="48" class="text-orange-500 dark:text-white" />
        </div>
        <CardDescription class="mt-4 text-2xl font-semibold text-orange-500 dark:text-white">
          Large
        </CardDescription>
        <p class="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          Up to 350 guests
        </p>
      </CardContent>              

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedCapacity == 500, 'shadow-lg': selectedCapacity != 500 }"
              @click="selectCapacity(500)"
            >
            <CardContent class="p-5 flex flex-col items-center">
        <div class="p-4 bg-orange-100 dark:bg-orange-600 rounded-full">
          <User size="48" class="text-orange-500 dark:text-white" />
        </div>
        <CardDescription class="mt-4 text-2xl font-semibold text-orange-500 dark:text-white">
          X-Large
        </CardDescription>
        <p class="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          Up to 500 guests
        </p>
      </CardContent>


            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedCapacity == 999, 'shadow-lg': selectedCapacity != 999 }"
              @click="selectCapacity(999)"
            >
            <CardContent class="p-5 flex flex-col items-center">
        <div class="p-4 bg-orange-100 dark:bg-orange-600 rounded-full">
          <User size="48" class="text-orange-500 dark:text-white" />
        </div>
        <CardDescription class="mt-4 text-2xl font-semibold text-orange-500 dark:text-white">
          Huge
        </CardDescription>
        <p class="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          Up to 999 guests
        </p>
      </CardContent>


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
