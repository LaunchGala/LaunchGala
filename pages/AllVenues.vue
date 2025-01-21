
<script setup lang="ts">
import { Heart, Share2, Search, ArrowRight, Calendar as CalendarIcon } from 'lucide-vue-next';
import { supabase } from '../utils/supabase'
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
import Checkbox from '~/components/ui/checkbox/Checkbox.vue';



const isOpen = ref(false)
const date = ref<Date>()
const allVenues = ref<any[] | null>(null);

const venueTypes = [
  "Office space",
  "Meeting room",
  "Gallery & Showroom",
  "Co-Working space",
  "Warehouse",
  "Auditorium",
  "Conference center",
  "Convention center",
  "Hotels & banquet halls",
  "Exhibition hall",
  "Theaters & performance space",
  "Museum",
  "University & college facility",
  "Library",
  "Historical building",
  "Restaurant & bar",
  "Sports arena and facility",
  "Outdoor event space"
]

const amenities = [
  "On-site parking",
  "Public transportation access",
  "Wi-Fi",
  "Audiovisual equipment",
  "Stage/Speaking platform",
  "Mic & Sound system",
  "Projectors & Screens",
  "Adjustable lighting",
  "Tables & chairs",
  "AC & heating controls",
  "Restrooms",
  "Disability access",
  "Security services",
  "Reception/Registration area",
  "Room/space divider options",
  "Private meeting rooms",
  "On-site accommodations",
  "Outdoor spaces",
  "Signage & branding option",
  "Cloakroom/Coat check",
  "Green room/VIP area",
  "Smoke alarm",
  "Refrigerator",
  "Microwave",
  "Private entrance",
  "Elevators",
  "Bar space",
  "Kitchen",
  "Coffee Machine",
  "Computer",
  "Games",
  "Waterfront"
]

const eventTypes = [
  "Hackathon",
  "Networking Event",
  "Pitching event",
  "Dinner event",
  "Sales & Trade show",
  "Conference",
  "Seminar & workshop",
  "Product launch",
  "Corporate events & retreats",
  "Panel & roundtables",
  "Award ceremony & Gala",
  "Job fair & career expo",
  "Academic conference",
  "Investor & funding meetup",
  "Startup accelerator & incubator",
  "Industry-specific summit",
  "Press conference",
  "Executive & leadership forum",
  "Publishing & signing event",
  "Art show & exhibition"
]

const venueFilters = ref({
  title: '',
  description: '',
  capacity: 0,
  price: 0,
  venueType: [],
  amenities: [],
  eventType: [],
  images: [],
  sponsorshipOption: null,
  nonSmoking: null,
  maskRequired: null,
  noPets: null,
  noCommercialPhotography: null,
  securityCameras: null,
  postEventCleaning: null,
  mustClimbStairs: null,
  additionalInsurance: null,
  openSpace: null,
  is_published: null
});
const venueFiltersEnabled = ref({
  title: false,
  description: false,
  capacity: false,
  price: false,
  venueType: false,
  amenities: false,
  eventType: false,
  sponsorshipOption: false,
  nonSmoking: false,
  maskRequired: false,
  noPets: false,
  noCommercialPhotography: false,
  securityCameras: false,
  postEventCleaning: false,
  mustClimbStairs: false,
  additionalInsurance: false,
  openSpace: false,
})
async function fetchFilteredVenueListings() {
  // Start the base query for the 'venue_listings' table
  let query = supabase.from('AllVenues').select('*, venue_owner:profiles!createdBy(*)').eq('is_published', true);

  // Apply filters based on `venueFilters` fields
  if (venueFilters.value.title) {
    query = query.ilike('title', `%${venueFilters.value.title}%`); // Case-insensitive search
  }

  if (venueFilters.value.capacity > 0) {
    query = query.gte('capacity', venueFilters.value.capacity);
  }

  if (venueFilters.value.price > 0) {
    query = query.lte('price', venueFilters.value.price);
  }

  if (venueFilters.value.venueType.length > 0) {
    query = query.in('venueType', venueFilters.value.venueType);
  }

  if (venueFilters.value.amenities.length > 0) {
    query = query.contains('amenities', venueFilters.value.amenities); // Array contains all items
  }

  if (venueFilters.value.eventType.length > 0) {
    query = query.contains('eventType', venueFilters.value.eventType); // Array contains all items
  }

  // Boolean filters
  if (venueFilters.value.sponsorshipOption !== null) {
    query = query.eq('sponsorshipOption', venueFilters.value.sponsorshipOption);
  }

  if (venueFilters.value.nonSmoking !== null) {
    query = query.eq('nonSmoking', venueFilters.value.nonSmoking);
  }

  if (venueFilters.value.maskRequired !== null) {
    query = query.eq('maskRequired', venueFilters.value.maskRequired);
  }

  if (venueFilters.value.noPets !== null) {
    query = query.eq('noPets', venueFilters.value.noPets);
  }

  if (venueFilters.value.noCommercialPhotography !== null) {
    query = query.eq('noCommercialPhotography', venueFilters.value.noCommercialPhotography);
  }

  if (venueFilters.value.securityCameras !== null) {
    query = query.eq('securityCameras', venueFilters.value.securityCameras);
  }

  if (venueFilters.value.postEventCleaning !== null) {
    query = query.eq('postEventCleaning', venueFilters.value.postEventCleaning);
  }

  if (venueFilters.value.mustClimbStairs !== null) {
    query = query.eq('mustClimbStairs', venueFilters.value.mustClimbStairs);
  }

  if (venueFilters.value.additionalInsurance !== null) {
    query = query.eq('additionalInsurance', venueFilters.value.additionalInsurance);
  }

  if (venueFilters.value.openSpace !== null) {
    query = query.eq('openSpace', venueFilters.value.openSpace);
  }

  if (venueFilters.value.is_published !== null) {
    query = query.eq('isPublished', venueFilters.value.is_published);
  }
  getAllVenues(query)
}
// Function to toggle selection of a venue type
const toggleVenueTypeSelection = (venueType) => {
  const index = venueFilters.value.venueType.indexOf(venueType);
  if (index === -1) {
    // Add to selected items
    venueFilters.value.venueType.push(venueType);
  } else {
    // Remove from selected items
    venueFilters.value.venueType.splice(index, 1);
  }
};
// Check if an item is selected
const isVenueTypeSelected = (venueType) => venueFilters.value.venueType.includes(venueType);

// Function to toggle selection of a venue type
const toggleAmenitySelection = (amenity) => {
  const index = venueFilters.value.amenities.indexOf(amenity);
  if (index === -1) {
    // Add to selected items
    venueFilters.value.amenities.push(amenity);
  } else {
    // Remove from selected items
    venueFilters.value.amenities.splice(index, 1);
  }
};
// Check if an item is selected
const isAmenitySelected = (amenity) => venueFilters.value.amenities.includes(amenity);

// Function to toggle selection of a venue type
const toggleEventTypeSelection = (eventType) => {
  const index = venueFilters.value.eventType.indexOf(eventType);
  if (index === -1) {
    // Add to selected items
    venueFilters.value.eventType.push(eventType);
  } else {
    // Remove from selected items
    venueFilters.value.eventType.splice(index, 1);
  }
};
// Check if an item is selected
const isEventTypeSelected = (eventType) => venueFilters.value.eventType.includes(eventType);

async function getAllVenues(query) {
  const { data: AllVenues, error } = !!query ? await query : await supabase.from('AllVenues').select('*, venue_owner:profiles!createdBy(*)').eq('is_published', true)
  console.log(error)
  Promise.all(AllVenues.map(async (venue) => {
    venue.venue_owner.avatarSRC = await fetchImage(venue.venue_owner.avatar_url)
  })).then(() => {
    allVenues.value = AllVenues;
    console.log(AllVenues)
  })
}
const fetchImage = async (id) => {
    if(!!id)
    {
            const urlData = await supabase.storage.from('avatars').createSignedUrl(id, 60);
            return urlData?.data?.signedUrl ?? "";
    }
  }
onMounted(() => {
  getAllVenues(null)
})
 
</script>

<template>
  <div class="flex flex-col space-y-4 p-6 dark:bg-black">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold dark:text-white">Explore all Venues</h1>
      <NuxtLink to="VenueListing">
      <Button @click="console.log(allVenues)" class="bg-orange-500 text-white dark:bg-orange-600 dark:text-white hover:bg-gray-100 hover:text-orange-500">Provide your Venue</Button>
    </NuxtLink>
    </div>
    
    <Collapsible v-model:open="isOpen" class="px-6 py-4">
        <CollapsibleTrigger as="button" class="flex w-full justify-between px-4 py-3 mb-4 text-left bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow">
            <span>Search Filters</span>
            <ArrowRight class="w-5 h-5 transition-transform" :class="{ 'rotate-90': isOpen }"  />
        </CollapsibleTrigger>

      <CollapsibleContent class="space-y-4 pb-4">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-2">
          <Input placeholder="Location" />        
          <Popover class="h-9 text-sm">
          <PopoverTrigger class="h-9 text-sm border-input mb-4 w-full rounded-md border border-gray-300 dark:border-orange-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
            <span>Venue Types{{ venueFilters.venueType.length > 0 ? "(" + venueFilters.venueType.length + " selected)" : '' }}</span>
            <ChevronDown class="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </PopoverTrigger>
          <PopoverContent class="rounded-md border border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg py-1">
            <ul>
              <li v-for="venueType in venueTypes" :key="venueType" class="flex items-center gap-2">
                <Checkbox
                  :checked="isVenueTypeSelected(venueType)"
                  @click="toggleVenueTypeSelection(venueType)">
                </Checkbox>
                <span>{{ venueType }}</span>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
          <Popover class="h-9 text-sm">
          <PopoverTrigger class="h-9 text-sm border-input mb-4 w-full rounded-md border border-gray-300 dark:border-orange-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
            <span>Event Types{{ venueFilters.eventType.length > 0 ? "(" + venueFilters.eventType.length + " selected)" : '' }}</span>
            <ChevronDown class="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </PopoverTrigger>
          <PopoverContent class="rounded-md border border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg py-1">
            <ul>
              <li v-for="eventType in eventTypes" :key="eventType" class="flex items-center gap-2">
                <Checkbox
                  :checked="isEventTypeSelected(eventType)"
                  @click="toggleEventTypeSelection(eventType)">
                </Checkbox>
                <span>{{ eventType }}</span>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
          <Popover class="h-9 text-sm">
          <PopoverTrigger class="h-9 text-sm border-input mb-4 w-full rounded-md border border-gray-300 dark:border-orange-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
            <span>Amenities{{ venueFilters.amenities.length > 0 ? "(" + venueFilters.amenities.length + " selected)" : '' }}</span>
            <ChevronDown class="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </PopoverTrigger>
          <PopoverContent class="rounded-md border border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg py-1">
            <ul>
              <li v-for="amenity in amenities" :key="amenity" class="flex items-center gap-2">
                <Checkbox
                  :checked="isAmenitySelected(amenity)"
                  @click="toggleAmenitySelection(amenity)">
                </Checkbox>
                <span>{{ amenity }}</span>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
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
          <Button class="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-md" @click="fetchFilteredVenueListings">
            <Search class="w-5 h-5 mr-2" />
            Search
          </Button>
        </div>
      </CollapsibleContent>

    </Collapsible>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div v-for="venue in allVenues" :key="venue.id" class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <div class="relative">
          <ImageCarousel class="w-full h-64 object-cover" :image-names="venue.images" alt="Apartment image" />
          <Badge v-if="venue.sponsorshipOption" variant="secondary" class="absolute top-3 right-3">Sponsorship Available</Badge>
        </div>
        <div class="px-6 py-4">          
          <!-- <div class="flex items-center mt-4 mb-4">
            <Avatar class="bg-gray-200 dark:bg-gray-700">
              <AvatarImage :src="venue.venue_owner.avatarSRC" alt="@radix-vue" />
              <AvatarFallback class="dark:text-white">CN</AvatarFallback>
            </Avatar>
            <span class="ml-2 font-semibold text-l text-gray-600 dark:text-gray-400">Host: {{ venue.venue_owner.full_name}}</span>
            
          </div> -->
          <h5 class="text-2xl font-bold text-gray-900 dark:text-white">{{ venue.title }}</h5>

          <span class="  text-l mt-4 text-gray-600 dark:text-gray-400">{{ venue.address }}</span>
          <div class=" text-l mt-2 mb-2 text-gray-600 dark:text-gray-400">Price: ${{ venue.price }}/hr</div>
          <!-- Hide Price here and on all detailed and listing for this venue if Price = 0 Null -->
          <div class="text-l mt-2 mb-2 text-gray-600 dark:text-gray-400"> Sponsorship option: {{ venue.sponsorshipOption ? 'Yes' : 'No' }}</div>
          <div class="text-l mt-2 mb-2 text-gray-600 dark:text-gray-400">Capacity: {{ venue.capacity }}</div>
          <div class="text-l mt-2 mb-2 text-gray-600 dark:text-gray-400">Venue type: {{ venue.venueType }}</div>
          <div v-for="amenity in venue.Amenities" :key="amenity">
            <div class="text-l mt-2 mb-2 text-gray-600 dark:text-gray-400">{{ amenity }}</div>
          </div>

          <!-- <p class="text-gray-700 text-base mt-4 dark:text-gray-300">
            {{ venue.description }}
          </p> -->
        </div>
        <div class="px-6 pt-4 pb-2">
          <!-- <div class="flex items-center">
            <Avatar class="bg-gray-200 dark:bg-gray-700">
              <AvatarImage :src="venue.avatar" alt="@radix-vue" />
              <AvatarFallback class="dark:text-white">CN</AvatarFallback>
            </Avatar>
            <span class="ml-2 font-semibold text-l text-gray-600 dark:text-gray-400">{{ venue.hostName}}</span>
            
          </div> -->

          <div class="flex items-center justify-between mt-3 align-middle">
          <NuxtLink :to="{ name: 'VenuePageNew', query: { id: venue.id } }">

          <Button class="inline-flex items-center rounded-lg py-2 px-4 bg-orange-500 text-white dark:bg-orange-600 dark:text-white hover:bg-gray-100 hover:text-orange-500 transition-colors ButtonCol">
            Explore
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </NuxtLink>
            <Button variant="ghost" class="flex items-center justify-center dark:text-white">
              <Heart :fill="venue.likeVenue ? 'orange' : 'none'" class="w-5 h-5 mr-1" />
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
