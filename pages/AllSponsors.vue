
<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Heart, Share2, Search, ArrowRight, Calendar as CalendarIcon } from 'lucide-vue-next';
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
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';

const isOpen = ref(false)
const date = ref<Date>()

const AllSponsors = ref([
  {
    img: "/Bootstrapping.png",
    sponsorName: "SVB",
    sponsorAvatar: "https://github.com/radix-vue.png",
    industry: "Banking",
    offer: "Offering full sponsorship for Software Development Industry. Contact us for more details!",
    likeSponsor: true,
    sponsorBadge: true,

  },
  {
    img: "/Bootstrapping.png",
    sponsorName: "IBM",
    sponsorAvatar: "https://github.com/radix-vue.png",
    industry: "Technology",
    offer: "Providing cutting-edge technology solutions for businesses. Reach out to explore partnership opportunities!",
    likeSponsor: true,
    sponsorBadge: true
  },

  {
    img: "/Bootstrapping.png",
    sponsorName: "Nike",
    sponsorAvatar: "https://github.com/radix-vue.png",
    industry: "Retail",
    offer: "Empowering athletes and promoting active lifestyles. Partner with us for sports sponsorships and collaborations!",
    likeSponsor: true,
    sponsorBadge: true
  },

  {
    img: "/Bootstrapping.png",
    sponsorName: "McKinsey & Company",
    sponsorAvatar: "https://github.com/radix-vue.png",
    industry: "Consulting",
    offer: "Offering strategic consulting services for business transformation. Contact us to enhance your company's performance!",
    likeSponsor: true,
    sponsorBadge: true
  },

  {
    img: "/Bootstrapping.png",
    sponsorName: "Tesla",
    sponsorAvatar: "https://github.com/radix-vue.png",
    industry: "Automotive",
    offer: "Pioneering electric vehicle technology and sustainable energy solutions. Collaborate with us for a greener future!",
    likeSponsor: true,
    sponsorBadge: false
  },

  {
    img: "/Bootstrapping.png",
    sponsorName: "PepsiCo",
    sponsorAvatar: "https://github.com/radix-vue.png",
    industry: "Beverages",
    offer: "Leading the way in refreshing beverages and snacks. Connect with us for brand partnerships and sponsorships!",
    likeSponsor: true,
    sponsorBadge: true
  }
])
</script>

<template>
  <div class="flex flex-col space-y-4 p-6 dark:bg-black">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold dark:text-white">Find Sponsor</h1>
      <Button class="bg-blue-500 text-white dark:bg-blue-600 dark:text-white">Become a Sponsor</Button>

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
    <!-- Corporate Sponsors -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div v-for="sponsor in AllSponsors" class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <div class="relative">
          <img class="w-full h-64 object-cover" src="/placeholder.svg" alt="Corporate Sponsor image" />
          <Badge v-if="sponsor.sponsorBadge" variant="secondary" class="absolute top-3 right-3">Cash Sponsor</Badge>
        </div>
        <div class="px-6 py-4">
          <!-- <Avatar class="m-4 w-24 h-24">
            <AvatarImage :src="sponsor.sponsorAvatar" alt="Profile" />
            <AvatarFallback>XX</AvatarFallback>
          </Avatar> -->
          <div class="font-bold text-xl mb-2 dark:text-white">{{sponsor.sponsorName}}</div>
          <div class="font-bold text-xl mb-2 dark:text-white">{{sponsor.industry}}</div>

          <p class="text-gray-700 text-base dark:text-gray-300">
            {{sponsor.offer}}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <div class="flex items-center justify-between mt-3">
            <Button variant="ghost" class="flex items-center justify-center dark:text-white">
              <MessageCircle class="w-5 h-5 mr-2" />
              Contact
            </Button>
            <div class="flex items-center space-x-4">
              <Button variant="ghost" class="flex items-center justify-center dark:text-white">
                <Heart :fill="sponsor.likeSponsor ? 'red': 'none'" class="w-5 h-5 mr-1" />
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
      <div class="col-span-full">
        <Button variant="outline" class="mx-auto mt-4">Show more</Button>
      </div>
    </div>
    
  </div>
</template>
