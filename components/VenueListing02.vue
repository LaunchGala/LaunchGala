
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Home, Building, Image, BookOpen, Globe, Search, Users, GraduationCap, Camera, HotelIcon, Palette, Castle, Landmark, Theater, Wine, Sun, Medal, Briefcase, Store } from 'lucide-vue-next';
import { Hotel } from 'lucide-vue-next';
import VenueListing from '~/pages/VenueListing.vue';

const selectedType = ref('');
const props = defineProps(['venueListing']);

// Handlers for handling click events
function selectType(type: string) {
  selectedType.value = type;
  props.venueListing.venueType = type;
  console.log(selectedType.value);
};

// Watcher for 'props.venueListing.venueType'
watch(() => props.venueListing.venueType, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    selectedType.value = newValue; // Set 'selectedType' to the new value
    console.log(`Venue type changed to: ${selectedType.value}`);
  }
});
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
            <div class="m-3 cursor-pointer">
              <store class="w-10 h-10 text-orange-500 hover:text-orange-300 " />
            </div>
                          <span class="text-sm font-semibold">Office space</span>
              <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Meeting room', 'shadow-lg': selectedType != 'Meeting room' }"
              @click="selectType('Meeting room')"
            >
            <div class="m-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-orange-500 hover:text-orange-300 " width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
            </div>
                          <span class="text-sm font-semibold">Meeting room</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Gallery', 'shadow-lg': selectedType != 'Gallery' }"
              @click="selectType('Gallery')"
            >
            <div class="m-3 cursor-pointer">
              <Palette class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Gallery & Showroom</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Co-Working space', 'shadow-lg': selectedType != 'Co-Working space' }"
              @click="selectType('Co-Working space')"
            >
            <div class="m-3 cursor-pointer">
              <Building class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>             
             <span class="text-sm font-semibold">Co-Working space</span>
             <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Private room', 'shadow-lg': selectedType != 'Private room' }"
              @click="selectType('Private room')"
            >
            <div class="m-3 cursor-pointer">
              <Home class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Warehouse</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Auditorium', 'shadow-lg': selectedType != 'Auditorium' }"
              @click="selectType('Auditorium')"
            >
            <div class="m-3 cursor-pointer">
              <Search class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Auditorium</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Conference center', 'shadow-lg': selectedType != 'Conference center' }"
              @click="selectType('Conference center')"
            >
            <div class="m-3 cursor-pointer">
              <Users class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Conference center</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Convention center', 'shadow-lg': selectedType != 'Convention center' }"
              @click="selectType('Convention center')"
            >
            <div class="m-3 cursor-pointer">
              <Briefcase class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Convention center</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Hotels & banquet halls', 'shadow-lg': selectedType != 'Hotels & banquet halls' }"
              @click="selectType('Hotels & banquet halls')"
            >
            <div class="m-3 cursor-pointer">
              <HotelIcon class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Hotels & banquet halls</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Exhibition hall', 'shadow-lg': selectedType != 'Exhibition hall' }"
              @click="selectType('Exhibition hall')"
            >
            <div class="m-3 cursor-pointer">
              <Globe class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Exhibition hall</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Theaters & performance space', 'shadow-lg': selectedType != 'Theaters & performance space' }"
              @click="selectType('Theaters & performance space')"
            >
            <div class="m-3 cursor-pointer">
              <theater class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Theaters & performance space</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Museum', 'shadow-lg': selectedType != 'Museum' }"
              @click="selectType('Museum')"
            >
            <div class="m-3 cursor-pointer">
              <Landmark class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Museum</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'University & college facility', 'shadow-lg': selectedType != 'University & college facility' }"
              @click="selectType('University & college facility')"
            >
            <div class="m-3 cursor-pointer">
              <graduation-cap class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">University & college facility</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Library', 'shadow-lg': selectedType != 'Library' }"
              @click="selectType('Library')"
            >
            <div class="m-3 cursor-pointer">
              <BookOpen class="w-10 h-10 text-orange-500 hover:text-orange-300 " />
            </div>
                          <span class="text-sm font-semibold">Library</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Historical building', 'shadow-lg': selectedType != 'Historical building' }"
              @click="selectType('Historical building')"
            >
            <div class="m-3 cursor-pointer">
              <Castle class="w-10 h-10 text-orange-500 hover:text-orange-300 "/>
            </div>
                          <span class="text-sm font-semibold">Historical building</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Restaurant & bar', 'shadow-lg': selectedType != 'Restaurant & bar' }"
              @click="selectType('Restaurant & bar')"
            >
            <div class="m-3 cursor-pointer">
              <wine class="w-10 h-10 text-orange-500 hover:text-orange-300"/>
            </div>
                          <span class="text-sm font-semibold">Restaurant & bar</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Gallery', 'shadow-lg': selectedType != 'Gallery' }"
              @click="selectType('Gallery')"
            >
            <div class="m-3 cursor-pointer">
              <wine class="w-10 h-10 text-orange-500 hover:text-orange-300"/>
            </div>
                          <span class="text-sm font-semibold">Gallery</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Store', 'shadow-lg': selectedType != 'Store' }"
              @click="selectType('Store')"
            >
            <div class="m-3 cursor-pointer">
              <wine class="w-10 h-10 text-orange-500 hover:text-orange-300"/>
            </div>
                          <span class="text-sm font-semibold">Store</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'House & Villa', 'shadow-lg': selectedType != 'House & Villa' }"
              @click="selectType('House & Villa')"
            >
            <div class="m-3 cursor-pointer">
              <wine class="w-10 h-10 text-orange-500 hover:text-orange-300"/>
            </div>
                          <span class="text-sm font-semibold">House & Villa</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Sports arena and facility', 'shadow-lg': selectedType != 'Sports arena and facility' }"
              @click="selectType('Sports arena and facility')"
            >
            <div class="m-3 cursor-pointer">
              <Medal class="w-10 h-10 text-orange-500 hover:text-orange-300"/>
            </div>
                          <span class="text-sm font-semibold">Sports arena and facility</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Outdoor event space', 'shadow-lg': selectedType != 'Outdoor event space' }"
              @click="selectType('Outdoor event space')"
            >
            <div class="m-3 cursor-pointer">
              <Sun class="w-10 h-10 text-orange-500 hover:text-orange-300 " />
            </div>
                          <span class="text-sm font-semibold">Outdoor event space</span>
                          <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>

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
          <Button @click="$emit('nextStep')" :disabled="selectedType === null || selectedType === ''" variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
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
