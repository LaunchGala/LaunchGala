
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

const selectedType = ref('');

// Handlers for handling click events
function selectType(type: string) {
  selectedType.value = type;
  props.venueListing.venueType = type;
  console.log(selectedType.value);
};



const props = defineProps(['venueListing']);
console.log(props.venueListing);
</script>

<template>
  <div class="bg-white dark:bg-red min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Select Venue Style: (Select only one)</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg "
              :class="{ 'shadow-orange-500': selectedType == 'Office', 'shadow-lg': selectedType != 'Office' }"

              @click="selectType('Office')"
            >
              <img src="/Bootstrapping.png" alt="Office" class="w-full h-20 mb-2 rounded-lg ">
              <span class="text-sm font-semibold">Office space</span>
              <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Meeting room', 'shadow-lg': selectedType != 'Meeting room' }"
              @click="selectType('Meeting room')"
            >
            <img src="/Bootstrapping.png" alt="Office" class="w-full h-20 mb-2 rounded-lg ">
              <span class="text-sm font-semibold">Meeting room</span>
            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Gallery', 'shadow-lg': selectedType != 'Gallery' }"
              @click="selectType('Gallery')"
            >
            <img src="/Bootstrapping.png" alt="Gallery" class="w-full h-20 mb-2 rounded-lg ">
              <span class="text-sm font-semibold">Gallery</span>
            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Co-Working space', 'shadow-lg': selectedType != 'Co-Working space' }"
              @click="selectType('Co-Working space')"
            >
              <img src="/placeholder.svg" alt="Co-Working space" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Co-Working space</span>
            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Private room', 'shadow-lg': selectedType != 'Private room' }"
              @click="selectType('Private room')"
            >
              <img src="/placeholder.svg" alt="Private room" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Private room</span>
            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Auditorium', 'shadow-lg': selectedType != 'Auditorium' }"
              @click="selectType('Auditorium')"
            >
              <img src="/placeholder.svg" alt="Auditorium" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Auditorium</span>
            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Conference center', 'shadow-lg': selectedType != 'Conference center' }"
              @click="selectType('Conference center')"
            >
              <img src="/placeholder.svg" alt="Conference center" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Conference center</span>
            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Convention center', 'shadow-lg': selectedType != 'Convention center' }"
              @click="selectType('Convention center')"
            >
              <img src="/placeholder.svg" alt="Convention center" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Convention center</span>
            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Hotels & banquet halls', 'shadow-lg': selectedType != 'Hotels & banquet halls' }"
              @click="selectType('Hotels & banquet halls')"
            >
              <img src="/placeholder.svg" alt="Hotels & banquet halls" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Hotels & banquet halls</span>
            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Exhibition hall', 'shadow-lg': selectedType != 'Exhibition hall' }"
              @click="selectType('Exhibition hall')"
            >
              <img src="/placeholder.svg" alt="Exhibition hall" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Exhibition hall</span>
            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Theaters & performance space', 'shadow-lg': selectedType != 'Theaters & performance space' }"
              @click="selectType('Theaters & performance space')"
            >
              <img src="/placeholder.svg" alt="Theaters & performance space" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Theaters & performance space</span>
            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Museum', 'shadow-lg': selectedType != 'Museum' }"
              @click="selectType('Museum')"
            >
              <img src="/placeholder.svg" alt="Museum" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Museum</span>
            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'University & college facility', 'shadow-lg': selectedType != 'University & college facility' }"
              @click="selectType('University & college facility')"
            >
              <img src="/placeholder.svg" alt="University & college facility" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">University & college facility</span>
            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Library', 'shadow-lg': selectedType != 'Library' }"
              @click="selectType('Library')"
            >
              <img src="/placeholder.svg" alt="Library" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Library</span>
            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Historical building', 'shadow-lg': selectedType != 'Historical building' }"
              @click="selectType('Historical building')"
            >
              <img src="/placeholder.svg" alt="Historical building" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Historical building</span>
            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Restaurant & bar', 'shadow-lg': selectedType != 'Restaurant & bar' }"
              @click="selectType('Restaurant & bar')"
            >
              <img src="/placeholder.svg" alt="Restaurant & bar" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Restaurant & bar</span>
            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Sports arena and facility', 'shadow-lg': selectedType != 'Sports arena and facility' }"
              @click="selectType('Sports arena and facility')"
            >
              <img src="/placeholder.svg" alt="Sports arena and facility" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Sports arena and facility</span>
            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Outdoor event space', 'shadow-lg': selectedType != 'Outdoor event space' }"
              @click="selectType('Outdoor event space')"
            >
              <img src="/placeholder.svg" alt="Outdoor event space" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Outdoor event space</span>
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
