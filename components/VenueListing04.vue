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
              <Tooltip v-for="amenity in amenities" :key="amenity.key">
                <TooltipTrigger as-child>
                  <label @click="addAmenity(amenity.key)" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md"
                    :class="{ 'bg-orange-100': props.venueListing.amenities.includes(amenity.key), 'bg-white': !props.venueListing.amenities.includes(amenity.key) }">
                    <component :is="amenity.icon" class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">{{ amenity.key }}</span>
                  </label>
                </TooltipTrigger>
              </Tooltip>
            </div>
          </CardContent>
          <div class="flex justify-between items-center p-4">
            <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
              <div class="flex items-center">
                <ArrowLeft class="w-4 h-4 mr-2" />
                Back
              </div>
            </Button>
            <Progress :model-value="30" class="text-white" />
            <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
              <div class="flex items-center">
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

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import {
  Car, Bus, Wifi, AudioLinesIcon, TheaterIcon, Mic, Tv2, LightbulbIcon, Sofa,
  AirVentIcon, AccessibilityIcon, Shield, BookUser, DivideIcon, DoorClosed, BedIcon,
  Sun, FlagIcon, Check, Crown, AlarmSmokeIcon, Refrigerator, Microwave, ArrowUpDown,
  Martini, ChefHat, ShowerHead, Coffee, Monitor, Speaker, GamepadIcon, Fish
} from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Progress } from '@/components/ui/progress';

const props = defineProps(['venueListing']);

const amenities = [
  { key: 'On-site parking', icon: Car },
  { key: 'Public transportation access', icon: Bus },
  { key: 'Wi-Fi', icon: Wifi },
  { key: 'Audiovisual equipment', icon: AudioLinesIcon },
  { key: 'Stage/Speaking platform', icon: TheaterIcon },
  { key: 'Mic & Sound system', icon: Mic },
  { key: 'Projectors & Screens', icon: Tv2 },
  { key: 'Adjustable lighting', icon: LightbulbIcon },
  { key: 'Tables & chairs', icon: Sofa },
  { key: 'AC & heating controls', icon: AirVentIcon },
  { key: 'Disability access', icon: AccessibilityIcon },
  { key: 'Security services', icon: Shield },
  { key: 'Reception/Registration area', icon: BookUser },
  { key: 'Room/space divider', icon: DivideIcon },
  { key: 'Private meeting rooms', icon: DoorClosed },
  { key: 'On-site accommodations', icon: BedIcon },
  { key: 'Outdoor spaces', icon: Sun },
  { key: 'Signage & branding', icon: FlagIcon },
  { key: 'Cloakroom/Coat check', icon: Check },
  { key: 'Green room/VIP area', icon: Crown },
  { key: 'Smoke alarm', icon: AlarmSmokeIcon },
  { key: 'Refrigerator', icon: Refrigerator },
  { key: 'Microwave', icon: Microwave },
  { key: 'Private entrance', icon: DoorClosed },
  { key: 'Elevators', icon: ArrowUpDown },
  { key: 'Bar space', icon: Martini },
  { key: 'Kitchen', icon: ChefHat },
  { key: 'Coffee Machine', icon: Coffee },
  { key: 'Computer', icon: Monitor },
  { key: 'Games', icon: GamepadIcon },
  { key: 'Waterfront', icon: Fish }
];

function addAmenity(amenity: string) {
  const index = props.venueListing.amenities.indexOf(amenity);
  if (index > -1) {
    props.venueListing.amenities.splice(index, 1);
  } else {
    props.venueListing.amenities.push(amenity);
  }
}
</script>
