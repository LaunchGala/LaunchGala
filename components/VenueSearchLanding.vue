
<script setup lang="ts">
import { ref } from 'vue'
import { Clock, Search, ChevronDown } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'



const startDate = ref('')
const startTime = ref('')
const endDate = ref('')
const endTime = ref('')
const selectedCity = ref('')
const eventSize = ref('')
</script>

<template>
  <div class="flex items-left justify-left  bg-gray-100 dark:bg-black p-4">
      <div class="space-y-4 w-1/4 z-20 mx-10">
        <div class="flex flex-col gap-6 p-10 bg-white dark:bg-black shadow-lg rounded-md max-w-md mx-auto my-8">
          <h>Find a venue for your event</h>
        <!-- Start Date and Time Picker -->
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline" class="w-full justify-between">
              <span>{{ startDate || 'Start Date' }}</span>
              <Clock class="ml-2 h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="p-4">
            <Calendar v-model="startDate" />
            <Input type="time" v-model="startTime" class="mt-2 w-full" placeholder="HH:mm" />
          </PopoverContent>
        </Popover>

        <!-- End Date and Time Picker -->
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline" class="w-full justify-between">
              <span>{{ endDate || 'End Date' }}</span>
              <Clock class="ml-2 h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="p-4">
            <Calendar v-model="endDate" />
            <Input type="time" v-model="endTime" class="mt-2 w-full" placeholder="HH:mm" />
          </PopoverContent>
        </Popover>
        <!-- Start time and end time picker -->

    <div>
      <label for="start-time" class="block text-sm font-medium text-gray-700 dark:text-white mb-1">Start Time</label>
      <Input
        id="start-time"
        type="time"
        v-model="startTime"
        class="w-full border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 rounded-md shadow-sm"
        placeholder="HH:MM"
      />
    </div>
    <div>
      <label for="end-time" class="block text-sm font-medium text-gray-700 dark:text-white mb-1">End Time</label>
      <Input
        id="end-time"
        type="time"
        v-model="endTime"
        class="w-full border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 rounded-md shadow-sm"
        placeholder="HH:MM"
      />
    </div>
        <!-- City Select Box -->
        <Select v-model="selectedCity">
          <SelectTrigger>
            <SelectValue placeholder="Select a city" />
          </SelectTrigger>
          <SelectContent class="shadow-lg">
            <SelectGroup>
              <SelectLabel>Famous Cities</SelectLabel>
              <SelectItem value="new-york">
                New York
              </SelectItem>
              <SelectItem value="los-angeles">
                Los Angeles
              </SelectItem>
              <SelectItem value="chicago">
                Chicago
              </SelectItem>
              <SelectItem value="houston">
                Houston
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <!-- Event Size Dropdown Menu -->
        <div class="flex items-center">
          <Users class="h-5 text-gray-700 dark:text-gray-300" />
          <Select v-model="eventSize" class="w-full">
            <SelectTrigger>
              <SelectValue placeholder="Event size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="small">Small (up to 50)</SelectItem>
                <SelectItem value="medium">Medium (50 - 200)</SelectItem>
                <SelectItem value="large">Large (200 - 500)</SelectItem>
                <SelectItem value="xlarge">Very large (500+)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <!-- Search Button -->
        <NuxtLink to="VenueSearchResults">
        <Button class="flex w-full items-center justify-center rounded-md  OrangeCol font-semibold text-white hover:bg-orange-400 transition-colors">
          <Search class="mr-2 h-5 w-5" />
          <span>Search Venue</span>
        </Button>
      </NuxtLink>
      </div>
    </div>
  <img src="/venueBG01.jpeg" alt="Landing Page" class="z-10 absolute right-10 rounded-xl">
  <div class="absolute top-0 right-6 z-20 m-8">
      <Button variant="default" class="mt-16  text-md text-white bg-orange-500 rounded-md hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
        Signup for Free
      </Button>


    </div>
    <div class="w-1/2 font-bold text-5xl absolute top-0 right-24 z-20 m-8 mt-72  text-center text-white">
      Find Venues, Volunteers, <div>Speakers & Sponsors.</div> <div class="mt-6"> Launch your Event </div><div>for Free.</div>
    </div>
</div>

</template>


<style>
 .OrangeCol {   
  background-color: #ff6900;
 }

 .ButtonCol {
  background-color: white;
  color:#ff6900;
  border-color: #ff6900;
  border-radius: solid 15px;
  border-width: 1px;
  text-align: center;
  justify-content: center;
  align-items: center;
  
 }
</style>
