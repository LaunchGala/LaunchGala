
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

import { ArrowRight, Calendar as CalendarIcon } from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const isOpen = ref(false)
const date = ref<Date>()

const allEvents = ref([
  {
    img: "/Bootstrapping.png",
    eventName: "House Party",
    organizerName: "Mr. X",
    organizerAvatar: "https://github.com/radix-vue.png",
    eventType: "Networking",
    industry: "AI",
    eventDate: "04/21/2024",
    description: "A stylish venue for modern gatherings.",
    location: "SF, CA",
    likeEvent: true
  },
  {
    img: "/Bootstrapping.png",
    eventName: "Tech Expo",
    organizerName: "Ms. Y",
    organizerAvatar: "https://github.com/radix-vue.png",
    eventType: "Exhibition",
    industry: "Technology",
    eventDate: "09/15/2024",
    description: "Showcasing the latest tech innovations and products.",
    location: "San Francisco, CA",
    likeEvent: false
  },

  {
    img: "/Bootstrapping.png",
    eventName: "Startup Summit",
    organizerName: "Mr. Z",
    organizerAvatar: "https://github.com/radix-vue.png",
    eventType: "Conference",
    industry: "Entrepreneurship",
    eventDate: "11/02/2024",
    description: "Bringing together aspiring and experienced entrepreneurs.",
    location: "New York City, NY",
    likeEvent: false
  },

  {
    img: "/Bootstrapping.png",
    eventName: "AI Symposium",
    organizerName: "Dr. A",
    organizerAvatar: "https://github.com/radix-vue.png",
    eventType: "Symposium",
    industry: "Artificial Intelligence",
    eventDate: "06/30/2024",
    description: "Exploring the future of AI technology and applications.",
    location: "Los Angeles, CA",
    likeEvent: true
  },

  {
    img: "/Bootstrapping.png",
    eventName: "Fashion Week",
    organizerName: "Ms. B",
    organizerAvatar: "https://github.com/radix-vue.png",
    eventType: "Fashion Show",
    industry: "Fashion",
    eventDate: "02/12/2024",
    description: "A showcase of the latest trends and designs in fashion.",
    location: "Paris, France",
    likeEvent: true
  },

  {
    img: "/Bootstrapping.png",
    eventName: "Food Festival",
    organizerName: "Mr. C",
    organizerAvatar: "https://github.com/radix-vue.png",
    eventType: "Culinary Event",
    industry: "Food & Beverage",
    eventDate: "08/08/2024",
    description: "Celebrating the diversity of world cuisine with delicious food and drinks.",
    location: "Miami, FL",
    likeEvent: true
  }
])
</script>

<template>
  <div class="flex flex-col space-y-4 p-6 dark:bg-black">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold dark:text-white">Upcoming Events</h1>
      <NuxtLink to="CreateEvent">
      <Button class="bg-orange-500 text-white  ">Create your Event</Button>
      </NuxtLink>
    </div>
    
    <Collapsible v-model:open="isOpen" class="px-6 py-4">
        <CollapsibleTrigger as="button" class="flex w-full justify-between px-4 py-3 mb-4 text-left bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow">
            <span>Search Filters</span>
            <ArrowRight class="w-5 h-5 transition-transform" :class="{ 'rotate-90': isOpen }"  />
        </CollapsibleTrigger>

      <CollapsibleContent class="space-y-4 pb-4">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Input placeholder="Location" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="1br">1 Bedroom</SelectItem>
              <SelectItem value="2br">2 Bedroom</SelectItem>
              <SelectItem value="3brplus">3+ Bedroom</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Venue Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Amenities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pool">Pool</SelectItem>
              <SelectItem value="gym">Gym</SelectItem>
              <SelectItem value="wifi">WiFi</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger as-child>
              <Button
                variant="outline"
                class="dark:text-white dark:bg-gray-700 dark:border-gray-700"
              >
                <CalendarIcon class="mr-2 h-4 w-4" />
                Pick a date
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="date" />
            </PopoverContent>
          </Popover>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sponsor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sponsored">Sponsored</SelectItem>
              <SelectItem value="nonsponsored">Non-Sponsored</SelectItem>
            </SelectContent>
          </Select>
          <Button class="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-md">
            <Search class="w-5 h-5 mr-2" />
            Search
          </Button>
        </div>
      </CollapsibleContent>

    </Collapsible>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="event in allEvents" class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <div class="relative">
          <img class="w-full h-64 object-cover" :src="event.img" alt="Event image" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 dark:text-white">{{event.eventName}}</div>
          <div class="text-gray-700 text-base dark:text-gray-300">
            <div class="flex items-center mb-1">
              <Avatar class="bg-gray-200 dark:bg-gray-700 mr-4">
              <AvatarImage :src="event.organizerAvatar" alt="@radix-vue" />
              <AvatarFallback class="dark:text-white">CN</AvatarFallback>
            </Avatar>
              {{event.organizerName}}
            </div>
            <div class="flex items-center mb-1">
              <Tag class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"/>
              {{event.eventType}}
            </div>
            <div class="flex items-center mb-1">
              <Tag class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"/>
              {{event.industry}}
            </div>
            <div class="flex items-center mb-1">
              <Calendar class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"/>
              {{event.eventDate}}
            </div>
            <div class="flex items-center mb-1">
              <MapPin class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"/>
              {{event.location}}
            </div>
            <p class="mt-2">
              {{event.description}}
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
              <Heart :fill="event.likeEvent ? 'red': 'none'" class="w-5 h-5 mr-1" />
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
