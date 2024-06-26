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
              v-for="capacity in capacities" 
              :key="capacity.capacity"
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedCapacity == capacity.capacity, 'shadow-lg': selectedCapacity != capacity.capacity }"
              @click="selectCapacity(capacity.capacity)"
            >
              <CardContent class="p-5 flex flex-col items-center">
                <div class="p-4 bg-orange-100 dark:bg-orange-600 rounded-full">
                  <User size="48" class="text-orange-500 dark:text-white" />
                </div>
                <CardDescription class="mt-4 text-xl font-semibold text-orange-500 dark:text-white">
                  {{ capacity.label }}
                </CardDescription>
                <p class="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                  {{ capacity.description }}
                </p>
              </CardContent>
            </button>
          </div>
        </CardContent>
        <div class="flex justify-between items-center p-4">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="10" />
          <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
            <div class="flex items-center">
              Next
              <ArrowRight class="w-4 h-4 ml-2" />
            </div>
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { User } from 'lucide-vue-next';

const selectedCapacity = ref(0);

// Handlers for handling click events
function selectCapacity(capacity: number) {
  selectedCapacity.value = capacity;
  props.venueListing.capacity = capacity;
  console.log(selectedCapacity.value);
}

const capacities = [
  { capacity: 50, label: 'X-Small', description: 'Up to 50 guests' },
  { capacity: 100, label: 'Small', description: 'Up to 100 guests' },
  { capacity: 200, label: 'Medium', description: 'Up to 200 guests' },
  { capacity: 350, label: 'Large', description: 'Up to 350 guests' },
  { capacity: 500, label: 'X-Large', description: 'Up to 500 guests' },
  { capacity: 999, label: 'Huge', description: 'Up to 999 guests' },
];

const props = defineProps(['venueListing']);
console.log(props.venueListing);
</script>