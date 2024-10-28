
<script setup lang="ts">
import { ref } from 'vue';
import { Check, Wifi, Tv, Airplay, Sun, Coffee, Monitor, Speaker, Car, Bus, Shield, Network, Crown, Refrigerator, Microwave, ArrowUpDown, Martini, ChefHat, ShowerHead, BookUser, DoorClosed, Sofa } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { AudioLinesIcon } from 'lucide-vue-next';
import { Mic } from 'lucide-vue-next';
import { ResetIcon, SpeakerLoudIcon } from '@radix-icons/vue';
import { Mic2Icon } from 'lucide-vue-next';
import { TheaterIcon } from 'lucide-vue-next';
import { Tv2 } from 'lucide-vue-next';
import { LightbulbIcon } from 'lucide-vue-next';
import { RockingChairIcon } from 'lucide-vue-next';
import { AirVentIcon } from 'lucide-vue-next';
import { AccessibilityIcon } from 'lucide-vue-next';
import { WifiIcon } from 'lucide-vue-next';
import { DivideIcon } from 'lucide-vue-next';
import { Home } from 'lucide-vue-next';
import { BedIcon } from 'lucide-vue-next';
import { FlagIcon } from 'lucide-vue-next';
import { AlarmSmokeIcon } from 'lucide-vue-next';
import { DoorOpenIcon } from 'lucide-vue-next';
import { GamepadIcon } from 'lucide-vue-next';
import { Fish } from 'lucide-vue-next';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { Progress } from '@/components/ui/progress';


const props = defineProps(['venueListing']);
console.log(props.venueListing);

function addAmenity(amenity: string) {
  if (props.venueListing.amenities.includes(amenity)) {
    props.venueListing.amenities = props.venueListing.amenities.filter((item) => item !== amenity);
  } else {
    props.venueListing.amenities.push(amenity);
  }
  console.log(props.venueListing.amenities);
}



</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <TooltipProvider>
      <div class="container mx-auto px-4 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Select Amenities: (Select all applicable)</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('On-site parking')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md" 
                    :class="{ 'bg-orange-100': props.venueListing.amenities.includes('On-site parking'), 'bg-white': !props.venueListing.amenities.includes('On-site parking') }">
                    <Car class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">On-site parking</span>
                    <!-- <span class="text-sm dark:text-gray-300">On-site parking or valet service</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Public transportation access')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Public transportation access'), 'bg-white': !props.venueListing.amenities.includes('Public transportation access') }">
                    <!-- <Checkbox id="wifi" class="sr-only" /> -->
                    <Bus class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Public transportation access</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('wifi')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('wifi'), 'bg-white': !props.venueListing.amenities.includes('wifi') }">
                    <!-- <Checkbox id="wifi" class="sr-only" /> -->
                    <Wifi class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Wi-Fi</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Audiovisual equipment')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Audiovisual equipment'), 'bg-white': !props.venueListing.amenities.includes('Audiovisual equipment') }">
                    <AudioLinesIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Audiovisual equipment</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Stage/Speaking platform')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Stage/Speaking platform'), 'bg-white': !props.venueListing.amenities.includes('Stage/Speaking platform') }">
                    <TheaterIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Stage/Speaking platform</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Mic & Sound system')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Mic & Sound system'), 'bg-white': !props.venueListing.amenities.includes('Mic & Sound system') }">
                    <Mic class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Mic & Sound system</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Projectors & Screens')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Projectors & Screens'), 'bg-white': !props.venueListing.amenities.includes('Projectors & Screens') }">
                    <Tv2 class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Projectors & Screens</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Adjustable lighting')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Adjustable lighting'), 'bg-white': !props.venueListing.amenities.includes('Adjustable lighting') }">
                    <LightbulbIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Adjustable lighting</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Tables & chairs')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Tables & chairs'), 'bg-white': !props.venueListing.amenities.includes('Tables & chairs') }">
                    <sofa class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Tables & chairs</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('AC & heating controls')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('AC & heating controls'), 'bg-white': !props.venueListing.amenities.includes('AC & heating controls') }">
                    <AirVentIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">AC & heating controls</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Restrooms')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Restrooms'), 'bg-white': !props.venueListing.amenities.includes('Restrooms') }">
                    <shower-head class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Restrooms</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Disability access')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Disability access'), 'bg-white': !props.venueListing.amenities.includes('Disability access') }">
                    <AccessibilityIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Disability access</span>
                    <!-- <span class="text-sm dark:text-gray-300">ramps or elevators</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Security services')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Security services'), 'bg-white': !props.venueListing.amenities.includes('Security services') }">
                    <shield class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Security services</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Reception/Registration area')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Reception/Registration area'), 'bg-white': !props.venueListing.amenities.includes('Reception/Registration area') }">
                    <book-user class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Reception/Registration area</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Room/space divider')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Room/space divider'), 'bg-white': !props.venueListing.amenities.includes('Room/space divider') }">
                    <DivideIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Room/space divider options</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Private meeting rooms')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Private meeting rooms'), 'bg-white': !props.venueListing.amenities.includes('Private meeting rooms') }">
                    <door-closed class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Private meeting rooms</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('On-site accommodations')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('On-site accommodations'), 'bg-white': !props.venueListing.amenities.includes('On-site accommodations') }">
                    <BedIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">On-site accommodations</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Outdoor spaces')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Outdoor spaces'), 'bg-white': !props.venueListing.amenities.includes('Outdoor spaces') }">
                    <Sun class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Outdoor spaces</span>
                    <!-- <span class="text-sm dark:text-gray-300">(e.g., gardens, terraces)</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Signage & branding')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Signage & branding'), 'bg-white': !props.venueListing.amenities.includes('Signage & branding') }">
                    <FlagIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Signage & branding option</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Cloakroom/Coat check')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Cloakroom/Coat check'), 'bg-white': !props.venueListing.amenities.includes('Cloakroom/Coat check') }">
                    <Check class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Cloakroom/Coat check</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Green room/VIP area')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Green room/VIP area'), 'bg-white': !props.venueListing.amenities.includes('Green room/VIP area') }">
                    <Crown class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Green room/VIP area</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Smoke alarm')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Smoke alarm'), 'bg-white': !props.venueListing.amenities.includes('Smoke alarm') }">
                    <AlarmSmokeIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Smoke alarm</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Refrigerator')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Refrigerator'), 'bg-white': !props.venueListing.amenities.includes('Refrigerator') }">
                    <refrigerator class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Refrigerator</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Microwave')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Microwave'), 'bg-white': !props.venueListing.amenities.includes('Microwave') }">
                    <microwave class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Microwave</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Private entrance')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Private entrance'), 'bg-white': !props.venueListing.amenities.includes('Private entrance') }">
                    <DoorOpenIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Private entrance</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Elevators')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Elevators'), 'bg-white': !props.venueListing.amenities.includes('Elevators') }">
                    <arrow-up-down class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Elevators</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Bar space')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Bar space'), 'bg-white': !props.venueListing.amenities.includes('Bar space') }">
                    <Martini class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Bar space</span>
                    <!-- <span class="text-sm dark:text-gray-300">HD Projector</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-definition projector for presentations.
                </TooltipContent> -->
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Kitchen')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Kitchen'), 'bg-white': !props.venueListing.amenities.includes('Kitchen') }">
                    <chef-hat class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Kitchen</span>
                    <!-- <span class="text-sm dark:text-gray-300">Adjustable thermostat</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Adjustable heating controls for your comfort.
                </TooltipContent> -->
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Coffee Machine')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Coffee Machine'), 'bg-white': !props.venueListing.amenities.includes('Coffee Machine') }">
                    <Coffee class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Coffee Machine</span>
                    <!-- <span class="text-sm dark:text-gray-300">Complimentary coffee</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  In-room coffee machine with complimentary coffee.
                </TooltipContent> -->
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Computer')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Computer'), 'bg-white': !props.venueListing.amenities.includes('Computer') }">
                    <Monitor class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Computer</span>
                    <!-- <span class="text-sm dark:text-gray-300">PC with internet access</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Personal computer with internet access available.
                </TooltipContent> -->
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Games')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Games'), 'bg-white': !props.venueListing.amenities.includes('Games') }">
                    <GamepadIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Games</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-quality audio</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-quality sound system for entertainment or presentations.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Waterfront')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.amenities.includes('Waterfront'), 'bg-white': !props.venueListing.amenities.includes('Waterfront') }">
                    <Fish class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Waterfront</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-quality audio</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-quality sound system for entertainment or presentations.
                </TooltipContent> -->
              </Tooltip>
            </div>
          </CardContent>
          <div class="flex justify-between items-center p-4">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="30" class=" text-white "  />
          <Button @click="$emit('nextStep')" :disabled="!(props.venueListing.amenities?.length > 0)" variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
            <div  class="flex items-center">
              Next
              <ArrowRight class="w-4 h-4 ml-2" />
            </div>
          </Button>
        </div>
        </Card>
      </div>
    </TooltipProvider>
  </div>
</template>
