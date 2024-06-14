<!-- 
<script setup lang="ts">
import { MapPin, Search, ShoppingCart, Tag, Star } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

import { Heart, Share2, ArrowRight, Calendar as CalendarIcon } from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from '@/components/ui/calendar';
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


const isOpen = ref(false)
const date = ref<Date>()
</script>

<template>
  <div class="flex flex-col space-y-4 p-6 dark:bg-black">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold dark:text-white">Find Vendors</h1>
      <Button class="bg-blue-500 text-white dark:bg-blue-600 dark:text-white">Become a Vendor</Button>

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
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div v-for="i in 12" :key="'vendor-service-' + i" class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <div class="relative">
          <img class="w-full h-64 object-cover" src="/placeholder.svg" alt="Vendor Service image" />
          <div class="absolute top-4 right-4">
            <Badge v-if="Math.random() < 0.5" variant="secondary" class="text-xs">Offer available</Badge>
          </div>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 dark:text-white">Royal Banners</div>
          <p class="text-gray-700 text-base dark:text-gray-300">
            Get all your printing ready for you event 24/7
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <div class="flex items-center justify-between mt-3">
            <Button class="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">
              <Tag class="w-4 h-4 mr-2"/>
              Learn More
            </Button>
            <div class="flex items-center space-x-4">
              <span class="flex items-center justify-center dark:text-white">
                <ShoppingCart class="w-5 h-5 mr-1" />
              </span>
              <span class="flex items-center justify-center dark:text-white">
                <MapPin class="w-5 h-5 mr-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->



<script setup lang="ts">


import { Button } from '@/components/ui/button'
import { Megaphone, Clock } from 'lucide-vue-next'

const countdown = ref(30 * 24 * 60 * 60 * 1000) // 30 days in milliseconds

const intervalId = setInterval(() => {
  countdown.value -= 1000;
  if (countdown.value <= 0) {
    clearInterval(intervalId);
  }
}, 1000);

const days = () => Math.floor(countdown.value / (1000 * 60 * 60 * 24))
const hours = () => Math.floor((countdown.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
const minutes = () => Math.floor((countdown.value % (1000 * 60 * 60)) / (1000 * 60))
const seconds = () => Math.floor((countdown.value % (1000 * 60)) / 1000)
</script>

<template>
  <div class="relative min-h-screen bg-gradient-to-br from-orange-300 via-orange-200 to-orange-500 dark:from-gray-900 dark:via-gray-900 dark:to-black py-12 px-4 md:flex md:items-center md:justify-center">
    <div class="absolute inset-0 overflow-hidden">
      <img src="/placeholder.svg" alt="Vendor Marketplace Coming Soon" class="h-full w-full object-cover opacity-20 dark:opacity-40" />
    </div>
    <div class="z-10 max-w-4xl mx-auto space-y-8 rounded-lg bg-white p-8 shadow-xl dark:bg-slate-700">
      <h1 class="text-4xl font-bold leading-tight text-gray-900 text-center dark:text-white">Join Our Marketplace for Vendors</h1>
      <p class="text-xl text-gray-700 text-center dark:text-gray-200">A dedicated platform to showcase & connect you with a vast audience seeking your unique products and services for their events.

</p>
      <div class="flex items-center justify-center space-x-3">
        <Megaphone class="h-8 w-8 text-orange-600 dark:text-orange-400"/>
        <p class="text-lg font-semibold text-orange-800 dark:text-orange-400">Request to Get Listed Today!</p>
      </div>
      <div class="text-center">
        <Clock class="h-8 w-8 mx-auto text-orange-600 dark:text-orange-400"/>
        <p class="text-lg font-semibold text-orange-800 dark:text-orange-400 my-4">Marketplace Opens In:</p>

        <div class="grid grid-cols-4 gap-2">
        <div class="flex flex-col items-center justify-center">
          <div class="text-6xl font-semibold text-gray-900 dark:text-white">{{ days() }}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">DAYS</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="text-6xl font-semibold text-gray-900 dark:text-white">{{ hours() }}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">HOURS</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="text-6xl font-semibold text-gray-900 dark:text-white">{{ minutes() }}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">MINS</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="text-6xl font-semibold text-gray-900 dark:text-white">{{ seconds() }}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">SECS</div>
        </div>
      </div>

      </div>

      <div class="text-center">
        <p class="text-lg">We provide the stage, you bring your A-game. Increase your visibility and connect with potential clients.</p>
      </div>
      <div class="flex justify-center">
        <NuxtLink to="VendorRegs">

        <Button class="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:bg-orange-500 dark:hover:bg-orange-600">
          Request to Get Listed
        </Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
