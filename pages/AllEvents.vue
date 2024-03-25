
<script setup lang="ts">
import { Search, Heart, Share2, Calendar, MapPin, User, Tag, Plus } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
</script>

<template>
  <div class="flex flex-col space-y-4 p-6 dark:bg-black">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold dark:text-white">Coming up Events</h1>
      <Button class="bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-600">
        <Plus class="w-4 h-4 mr-2" />
        Create your event
      </Button>
    </div>
    <div class="flex items-center space-x-2 bg-white rounded-md shadow-md p-2 dark:bg-gray-800">
      <Search class="w-5 h-5 text-gray-600 dark:text-gray-300"/>
      <Input type="text" placeholder="Search Events" class="flex-1"/>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline" class="dark:border-gray-600 dark:text-white">Filter</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Name</DropdownMenuItem>
          <DropdownMenuItem>Host</DropdownMenuItem>
          <DropdownMenuItem>Date</DropdownMenuItem>
          <DropdownMenuItem>Location</DropdownMenuItem>
          <DropdownMenuItem>Event Type</DropdownMenuItem>
          <DropdownMenuItem>Industry</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="event in 6" :key="'event-' + event" class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <div class="relative">
          <img class="w-full h-64 object-cover" src="/placeholder.svg" alt="Event image" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 dark:text-white">Event Name</div>
          <div class="text-gray-700 text-base dark:text-gray-300">
            <div class="flex items-center mb-1">
              <User class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"/>
              Host Name
            </div>
            <div class="flex items-center mb-1">
              <Tag class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"/>
              Event Type
            </div>
            <div class="flex items-center mb-1">
              <Tag class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"/>
              Industry
            </div>
            <div class="flex items-center mb-1">
              <Calendar class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"/>
              Event Date
            </div>
            <div class="flex items-center mb-1">
              <MapPin class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"/>
              Location
            </div>
            <p class="mt-2">
              An exciting event discussing the latest trends in the industry. Join us for insightful talks and networking opportunities.
            </p>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <div class="flex items-center justify-between mb-4">
            <Button variant="outline" class="dark:text-white dark:border-gray-600">
              Check it out
            </Button>
          </div>
          <div class="flex items-center justify-between">
            <Button variant="ghost" class="flex items-center justify-center dark:text-white">
              <Heart class="w-5 h-5 mr-1" />
              Like
            </Button>
            <Button variant="ghost" class="flex items-center justify-center dark:text-white">
              <Share2 class="w-5 h-5 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
