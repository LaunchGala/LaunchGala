<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { Home, Heart, Users, Archive, Globe } from 'lucide-vue-next';
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
                <Globe class="w-4 h-4 mr-2"/> New York
              </SelectItem>
              <SelectItem value="paris">
                <Globe class="w-4 h-4 mr-2"/> Paris
              </SelectItem>
              <SelectItem value="tokyo">
                <Globe class="w-4 h-4 mr-2"/> Tokyo
              </SelectItem>
              <SelectItem value="london">
                <Globe class="w-4 h-4 mr-2"/> London
              </SelectItem>
              <SelectItem value="sydney">
                <Globe class="w-4 h-4 mr-2"/> Sydney
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div class="flex items-center">
          <span class="text-sm font-medium dark:text-gray-300 mr-3">Willing to travel</span>
          <Toggle aria-label="Toggle willing to travel"/>
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