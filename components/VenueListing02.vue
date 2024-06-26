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
              v-for="(venue, index) in venueTypes" 
              :key="index"
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == venue.name, 'shadow-lg': selectedType != venue.name }"
              @click="selectType(venue.name)"
            >
              <div class="m-3 cursor-pointer">
                <component :is="venue.icon" class="w-10 h-10 text-orange-500 hover:text-orange-300" />
              </div>
              <span class="text-sm font-semibold">{{ venue.name }}</span>
              <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>
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
import { ArrowLeft, ArrowRight, Home, Building, Image, BookOpen, Globe, Search, Users, GraduationCap, Camera, HotelIcon, Palette, Castle, Landmark, Theater, Wine, Sun, Medal, Briefcase, Store } from 'lucide-vue-next';

const selectedType = ref('');

// Handlers for handling click events
function selectType(type: string) {
  selectedType.value = type;
  props.venueListing.venueType = type;
  console.log(selectedType.value);
};

const venueTypes = [
  { name: 'Office space', icon: Store },
  { name: 'Meeting room', icon: Search },
  { name: 'Gallery & Showroom', icon: Palette },
  { name: 'Co-Working space', icon: Building },
  { name: 'Warehouse', icon: Home },
  { name: 'Auditorium', icon: Search },
  { name: 'Conference center', icon: Users },
  { name: 'Convention center', icon: Briefcase },
  { name: 'Hotels & banquet halls', icon: HotelIcon },
  { name: 'Exhibition hall', icon: Globe },
  { name: 'Theaters & performance space', icon: Theater },
  { name: 'Museum', icon: Landmark },
  { name: 'University & college facility', icon: GraduationCap },
  { name: 'Library', icon: BookOpen },
  { name: 'Historical building', icon: Castle },
  { name: 'Restaurant & bar', icon: Wine },
  { name: 'Sports arena and facility', icon: Medal },
  { name: 'Outdoor event space', icon: Sun },
];

const props = defineProps(['venueListing']);
console.log(props.venueListing);
</script>
