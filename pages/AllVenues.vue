
<script setup lang="ts">
import { Heart, Share2, Search, ArrowRight, Calendar as CalendarIcon } from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
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
const allVenues = ref([
  {
    img: "/Bootstrapping.png",
    title: "Chic Urban office",
    price: "Price: $1,200 / hour",
    sponsorshipOption: "Sponsorship option: Yes",
    venueSize: "Size: Large < 200",
    venueType: "Type: Office space",
    description: "A stylish venue for modern gatherings.",
    location: "Location: SF, CA",
    avatar: "https://github.com/radix-vue.png",
    hostName: "Host: Mozart",
    sponsorBadge: true,
    likeVenue: false
  },
  {
    img: "/Bootstrapping.png",
    title: "Chic Urban office",
    price: "Price: $1,200 / hour",
    sponsorshipOption: "Sponsorship option: No",
    venueSize: "Size: Medium < 100",
    venueType: "Type: Co-working space",
    description: "A stylish venue for modern gatherings.",
    location: "Location: SF, CA",
    avatar: "https://github.com/radix-vue.png",
    hostName: "Host: Mozart",
    sponsorBadge: false,
    likeVenue: true
  },  
  {
    img: "/Bootstrapping.png",
    title: "Chic Urban office",
    price: "Price: $0 / hour",
    sponsorshipOption: "Sponsorship option: Yes",
    venueSize: "Size: Small < 50",
    venueType: "Type: Gallery",
    description: "A stylish venue for modern gatherings.",
    location: "Location: SF, CA",
    avatar: "https://github.com/radix-vue.png",
    hostName: "Host: Mozart",
    sponsorBadge: true,
    likeVenue: false
  },  
  {
    img: "/Bootstrapping.png",
    title: "Chic Urban office",
    price: "Price: N/A",
    sponsorshipOption: "Sponsorship option: Yes",
    venueSize: "Size: X-large < 500",
    venueType: "Type: Museum",
    description: "A stylish venue for modern gatherings.",
    location: "Location: SF, CA",
    avatar: "https://github.com/radix-vue.png",
    hostName: "Host: Mozart",
    sponsorBadge: true,
    likeVenue: false
  },  
  {
    img: "/Bootstrapping.png",
    title: "House Party",
    price: "Price: $1 / hour",
    sponsorshipOption: "Sponsorship option: Yes",
    venueSize: "Size: Medium < 100",
    venueType: "Type: Office space",
    description: "A stylish venue for modern gatherings.",
    location: "Location: SF, CA",
    avatar: "https://github.com/radix-vue.png",
    hostName: "Host: Mozart",
    sponsorBadge: true,
    likeVenue: true
  },  
  {
    img: "/Bootstrapping.png",
    title: "Chic Urban office",
    price: "Price: Request quote",
    sponsorshipOption: "Sponsorship option: No",
    venueSize: "Size: Medium < 100",
    venueType: "Type: Office space",
    description: "A stylish venue for modern gatherings.",
    location: "Location: SF, CA",
    avatar: "https://github.com/radix-vue.png",
    hostName: "Host: Mozart",
    sponsorBadge: false,
    likeVenue: false
  },
])
</script>

<template>
  <div class="flex flex-col space-y-4 p-6 dark:bg-black">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold dark:text-white">Explore all Venues</h1>
      <Button class="bg-blue-500 text-white dark:bg-blue-600 dark:text-white">Provide your Venue</Button>

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
      <div v-for="venue in allVenues" :key="'apartment-' + i" class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <div class="relative">
          <img class="w-full h-64 object-cover" :src="venue.img" alt="Apartment image" />
          <Badge v-if="venue.sponsorBadge" variant="secondary" class="absolute top-3 right-3">Sponsorship Available</Badge>
        </div>
        <div class="px-6 py-4">          
          <div class="flex items-center mt-4 mb-4">
            <Avatar class="bg-gray-200 dark:bg-gray-700">
              <AvatarImage :src="venue.avatar" alt="@radix-vue" />
              <AvatarFallback class="dark:text-white">CN</AvatarFallback>
            </Avatar>
            <span class="ml-2 font-semibold text-l text-gray-600 dark:text-gray-400">{{ venue.hostName}}</span>
            
          </div>
          <h5 class="text-2xl font-bold text-gray-900 dark:text-white">{{ venue.title }}</h5>

          <span class="  text-l mt-4 text-gray-600 dark:text-gray-400">{{ venue.location}}</span>
          <div class=" text-l mt-2 mb-2 text-gray-600 dark:text-gray-400">{{ venue.price }}</div>
          <div class="text-l mt-2 mb-2 text-gray-600 dark:text-gray-400">{{ venue.sponsorshipOption }}</div>
          <div class="text-l mt-2 mb-2 text-gray-600 dark:text-gray-400">{{ venue.venueSize }}</div>
          <div class="text-l mt-2 mb-2 text-gray-600 dark:text-gray-400">{{ venue.venueType }}</div>

          <p class="text-gray-700 text-base mt-4 dark:text-gray-300">
            {{ venue.description }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <!-- <div class="flex items-center">
            <Avatar class="bg-gray-200 dark:bg-gray-700">
              <AvatarImage :src="venue.avatar" alt="@radix-vue" />
              <AvatarFallback class="dark:text-white">CN</AvatarFallback>
            </Avatar>
            <span class="ml-2 font-semibold text-l text-gray-600 dark:text-gray-400">{{ venue.hostName}}</span>
            
          </div> -->
          <Button class="mt-4 inline-flex items-center rounded-lg py-2 px-4 hover:bg-gray-200 transition-colors ButtonCol">
            Explore
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
          <div class="flex items-center justify-between mt-3">
            <Button variant="ghost" class="flex items-center justify-center dark:text-white">
              <Heart :fill="venue.likeVenue ? 'orange': 'none'" class="w-5 h-5 mr-1" />
              Like
            </Button>
            <Button variant="ghost" class="flex items-center justify-center dark:text-white">
              <Share2 class="w-5 h-5 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </div>
      <div class="col-span-full">
        <Button variant="outline" class="mx-auto mt-4">Show more</Button>
      </div>
    </div>
  </div>
</template>
