
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
const props = defineProps(['venueListing']);
console.log(props.venueListing);

function addAmenity(amenity: string) {
  if (props.venueListing.amenities.includes(amenity)) {
    console.log('amenity already exists');
  } else {
    props.venueListing.amenities = [...props.venueListing.amenities, amenity];
    console.log(props.venueListing.amenities);
  }
}

</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <TooltipProvider>
      <div class="container mx-auto px-4 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Select Amenities</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('wifi')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="wifi" class="sr-only" />
                    <Car class="w-6 h-6 mb-2 text-gray-500" />
                    <span class="text-lg font-semibold mb-1">On-site parking</span>
                    <span class="text-sm dark:text-gray-300">On-site parking or valet service</span>
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('wifi')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="wifi" class="sr-only" />
                    <Bus class="w-6 h-6 mb-2 text-green-500" />
                    <span class="text-lg font-semibold mb-1">Public transportation access</span>
                    <span class="text-sm dark:text-gray-300">High-speed internet</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('wifi')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="wifi" class="sr-only" />
                    <Wifi class="w-6 h-6 mb-2 text-blue-500" />
                    <span class="text-lg font-semibold mb-1">Wi-Fi</span>
                    <span class="text-sm dark:text-gray-300">High-speed internet</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('wifi')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="wifi" class="sr-only" />
                    <AudioLinesIcon class="w-6 h-6 mb-2 text-purple-500" />
                    <span class="text-lg font-semibold mb-1">Audiovisual equipment</span>
                    <span class="text-sm dark:text-gray-300">High-speed internet</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('wifi')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="wifi" class="sr-only" />
                    <TheaterIcon class="w-6 h-6 mb-2 text-red-500" />
                    <span class="text-lg font-semibold mb-1">Stage/Speaking platform</span>
                    <span class="text-sm dark:text-gray-300">High-speed internet</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('wifi')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="wifi" class="sr-only" />
                    <Mic class="w-6 h-6 mb-2 text-yellow-500" />
                    <span class="text-lg font-semibold mb-1">Mic & Sound system</span>
                    <span class="text-sm dark:text-gray-300">High-speed internet</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('wifi')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="wifi" class="sr-only" />
                    <Tv2 class="w-6 h-6 mb-2 text-green-500" />
                    <span class="text-lg font-semibold mb-1">Projectors & Screens</span>
                    <span class="text-sm dark:text-gray-300">High-speed internet</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('wifi')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="wifi" class="sr-only" />
                    <LightbulbIcon class="w-6 h-6 mb-2 text-yellow-500" />
                    <span class="text-lg font-semibold mb-1">Adjustable lighting</span>
                    <span class="text-sm dark:text-gray-300">High-speed internet</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('wifi')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="wifi" class="sr-only" />
                    <sofa class="w-6 h-6 mb-2 text-gray-500" />
                    <span class="text-lg font-semibold mb-1">Tables & chairs</span>
                    <span class="text-sm dark:text-gray-300">High-speed internet</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('wifi')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="wifi" class="sr-only" />
                    <AirVentIcon class="w-6 h-6 mb-2 text-red-500" />
                    <span class="text-lg font-semibold mb-1">AC & heating controls</span>
                    <span class="text-sm dark:text-gray-300">High-speed internet</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <shower-head class="w-6 h-6 mb-2 text-blue-500" />
                    <span class="text-lg font-semibold mb-1">Restrooms</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <AccessibilityIcon class="w-6 h-6 mb-2 text-blue-500" />
                    <span class="text-lg font-semibold mb-1">Disability access</span>
                    <span class="text-sm dark:text-gray-300">ramps or elevators</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <shield class="w-6 h-6 mb-2 text-red-500" />
                    <span class="text-lg font-semibold mb-1">Security services</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <book-user class="w-6 h-6 mb-2 text-green-500" />
                    <span class="text-lg font-semibold mb-1">Reception/Registration area</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <DivideIcon class="w-6 h-6 mb-2 text-gray-500" />
                    <span class="text-lg font-semibold mb-1">Room/space divider options</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <door-closed class="w-6 h-6 mb-2 text-green-500" />
                    <span class="text-lg font-semibold mb-1">Private meeting rooms</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <BedIcon class="w-6 h-6 mb-2 text-purple-500" />
                    <span class="text-lg font-semibold mb-1">On-site accommodations</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <Sun class="w-6 h-6 mb-2 text-green-500" />
                    <span class="text-lg font-semibold mb-1">Outdoor spaces</span>
                    <span class="text-sm dark:text-gray-300">(e.g., gardens, terraces)</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <FlagIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Signage & branding option</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <Check class="w-6 h-6 mb-2 text-blue-500" />
                    <span class="text-lg font-semibold mb-1">Cloakroom/Coat check</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <Crown class="w-6 h-6 mb-2 text-green-500" />
                    <span class="text-lg font-semibold mb-1">Green room/VIP area</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <AlarmSmokeIcon class="w-6 h-6 mb-2 text-red-500" />
                    <span class="text-lg font-semibold mb-1">Smoke alarm</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <refrigerator class="w-6 h-6 mb-2 text-blue-500" />
                    <span class="text-lg font-semibold mb-1">Refrigerator</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <microwave class="w-6 h-6 mb-2 text-yellow-500" />
                    <span class="text-lg font-semibold mb-1">Microwave</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <DoorOpenIcon class="w-6 h-6 mb-2 text-green-500" />
                    <span class="text-lg font-semibold mb-1">Private entrance</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('tv')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="tv" class="sr-only" />
                    <arrow-up-down class="w-6 h-6 mb-2 text-gray-500" />
                    <span class="text-lg font-semibold mb-1">Elevators</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Projector')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="ac" class="sr-only" />
                    <Martini class="w-6 h-6 mb-2 text-purple-500" />
                    <span class="text-lg font-semibold mb-1">Bar space</span>
                    <span class="text-sm dark:text-gray-300">HD Projector</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-definition projector for presentations.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('AC')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="heat" class="sr-only" />
                    <chef-hat class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Kitchen</span>
                    <span class="text-sm dark:text-gray-300">Adjustable thermostat</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Adjustable heating controls for your comfort.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Coffee Machine')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="coffee" class="sr-only" />
                    <Coffee class="w-6 h-6 mb-2 text-black" />
                    <span class="text-lg font-semibold mb-1">Coffee Machine</span>
                    <span class="text-sm dark:text-gray-300">Complimentary coffee</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  In-room coffee machine with complimentary coffee.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Computer')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="monitor" class="sr-only" />
                    <Monitor class="w-6 h-6 mb-2 text-gray-500" />
                    <span class="text-lg font-semibold mb-1">Computer</span>
                    <span class="text-sm dark:text-gray-300">PC with internet access</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Personal computer with internet access available.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Heating')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="audio" class="sr-only" />
                    <GamepadIcon class="w-6 h-6 mb-2 text-red-500" />
                    <span class="text-lg font-semibold mb-1">Games</span>
                    <span class="text-sm dark:text-gray-300">High-quality audio</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-quality sound system for entertainment or presentations.
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addAmenity('Heating')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md focus-within:border-orange-500">
                    <Checkbox id="audio" class="sr-only" />
                    <Fish class="w-6 h-6 mb-2 text-blue-500" />
                    <span class="text-lg font-semibold mb-1">Waterfront</span>
                    <span class="text-sm dark:text-gray-300">High-quality audio</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-quality sound system for entertainment or presentations.
                </TooltipContent>
              </Tooltip>
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
    </TooltipProvider>
  </div>
</template>
