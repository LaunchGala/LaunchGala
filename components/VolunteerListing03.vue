<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';


function setTravelOption(toggleState: boolean) {
  props.volunteerListing.maskRequired = toggleState
}

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { Home, Heart, Users, Archive, Globe } from 'lucide-vue-next';

const props = defineProps(['volunteerListing']);
console.log(props.volunteerListing);
</script>

<template>
  <div class="flex h-screen bg-gray-50 dark:bg-black items-center justify-center p-6">
    <Card class="max-w-xl w-full border border-gray-200 shadow-xl bg-white dark:border-gray-700 dark:bg-gray-800">
      <CardHeader class="border-b border-gray-200 dark:border-gray-700">
        <CardTitle class="text-lg font-semibold">Global Volunteer Location Selection</CardTitle>
        <CardDescription>Select the city and decide if you're willing to travel for volunteering.</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4 p-6">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a city" class="text-left"/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Cities</SelectLabel>
              <SelectItem value="new_york">
               San Francisco
              </SelectItem>
              <SelectItem value="paris">
               Paris
              </SelectItem>
              <SelectItem value="tokyo">
               Tokyo
              </SelectItem>
              <SelectItem value="london">
               London
              </SelectItem>
              <SelectItem value="sydney">
               New York
              </SelectItem>
              <SelectItem value="sydney">
               Sydney
              </SelectItem>
              <SelectItem value="sydney">
               Other
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div class="flex items-center justify-between p-2 pt-6 pb-4 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <span class="text-lg font-semibold text-gray-900 dark:text-white">Are you willing to travel?</span>
              <Switch :default-checked="props.volunteerListing.travelOption" @update:checked="setTravelOption" id="displayPrice" />

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
</template>