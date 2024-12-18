
<script setup lang="ts">
// import {
//   AspectRatio,
//   Button,
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
//   Calendar as CalendarIcon
// } from '@/components/ui'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger
// } from '@/components/ui/popover'
// import { Calendar } from '@/components/ui/calendar'
import { MapPin, Star, User, ArrowRight, Home, Check, Share2, Bookmark, Save, Clock, Info, Shield, XCircle } from 'lucide-vue-next'
import { ref, defineProps } from 'vue'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useRoute } from 'vue-router'
import ShareButton from '@/components/ShareButton.vue'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const route = useRoute();
const venueId = route.query.id;
const supabase = useSupabaseClient()
const venueListing = ref({
  createdBy: 0,
  title: '',
  address: '',
  addressExact: true,
  description: '',
  capacity: 0,
  price: 0,
  priceEnabled: false, 
  venueType: [],
  amenities: [],
  eventType: [],
  images: [],
  sponsorshipOption: true,
  nonSmoking: true,
  maskRequired: false,
  noPets: true,
  noCommercialPhotography: false,
  securityCameras: true,
  postEventCleaning: false,
  mustClimbStairs: false,
  additionalInsurance: false,
  openSpace: false,
  venue_owner: {
    full_name: '',
    user_company: '',
    avatar_url: '',
    avatarSRC: ''
  },
  cancellation_policy: ''



});
const images = ref([])
const contactInfo = ref({})
const getVenueById = async (id) => {
  const { data, error } = await supabase
    .from('AllVenues') // Replace 'users' with your table name
    .select('*, venue_owner:profiles!createdBy(*)') // Fetch all columns
    .eq('id', id) // Filter by 'id'
    .single() // Ensures only one record is returned

  if (error) {
    console.error('Error fetching data:', error)
    return null
  }

  venueListing.value = data;
  contactInfo.value = {other_user_id: venueListing.value.venue_owner.id, other_user_name: venueListing.value.venue_owner.full_name}
}
onMounted(() => {
  getVenueById(venueId)
});

// Function to handle the "Share" button click
const sharePage = () => {
  const url = window.location.href;
  const title = venueListing.value.title;

  if (navigator.share) {
    // Use Web Share API if available
    navigator.share({
      title: title,
      text: `Check out this venue: ${title}`,
      url: url,
    })
    .then(() => console.log('Successfully shared'))
    .catch((error) => console.error('Error sharing', error));
  } else {
    // Fallback: Copy URL to clipboard
    copyToClipboard(url);
    alert('Page link copied to clipboard!');
  }
};

// Function to copy a URL to clipboard
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => console.log('Text copied to clipboard'),
    (error) => console.error('Could not copy text: ', error)
  );
};

const date = ref<Date>()
</script>

<template>
  <div class="dark:bg-black m-8">
    <Card class="max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg dark:border-gray-700">
      <CardHeader class="relative bg-white dark:bg-gray-800">
        <div class="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <CardTitle class="text-lg font-bold dark:text-white">
            {{ venueListing.title }}
          </CardTitle>
          <div class="flex space-x-2">
            <Button variant="ghost" class="OrangeText">
              <Save class="w-5 h-5" /> Save
            </Button>
            <Button variant="ghost" class="OrangeText">
              <!-- <ShareButton @click="sharePage" class="w-5 h-5" />--> Share
            </Button>
          </div>
        </div>
        <div class=" rounded-md  gap-2 p-2 ">
          <ImageCarousel :image-names="venueListing.images" class="rounded-md " />
        </div>
      </CardHeader>
      
      <CardContent class="p-4 space-y-4  dark:bg-gray-800 dark:text-white">
        <div class="flex justify-between ">
          
          <div>
            
        <div class="flex items-center space-x-2 space-y-4">
          <Star class="w-5 h-5 text-yellow-400" />
          <span class="text-lg font-semibold">421 Likes</span>
        </div>
        
        <div class="flex items-center space-x-2 space-y-4">
          <User class="w-5 h-5" />
          <span>Hosted by <strong>{{venueListing.venue_owner.full_name}}</strong></span>
        </div>
        <div class="flex items-center space-x-2 space-y-4">
          <User class="w-5 h-5" />
          <span>Company <strong>{{venueListing.venue_owner.user_company}}</strong></span>
        </div>
        <div class="flex items-center space-x-2 space-y-4">
          <User class="w-5 h-5" />
          <span>Price <strong>${{venueListing.price}}/hr</strong></span>
        </div>
        <div class="flex items-center space-x-2 space-y-4">
          <User class="w-5 h-5" />
          <span>Sponsor option: <strong>{{venueListing.sponsorshipOption}}</strong></span>
        </div>
        <div class="flex items-center space-x-2 space-y-4">
          <User class="w-5 h-5" />
          <span>Venue type: <strong>{{venueListing.venueType}}</strong></span>
        </div>
        <div class="flex items-center space-x-2 space-y-4">
          <User class="w-5 h-5" />
          <span>Total capacity/Venue size: <strong>{{venueListing.capacity}}</strong></span>
        </div>
        <!-- <div class="flex items-center space-x-2 space-y-2">
          <User class="w-5 h-5" />
          <span>Multiple rooms: <strong>Yes</strong></span>
        </div> -->
        <!-- <div class="flex items-center space-x-2 space-y-4">
          <User class="w-5 h-5" />
          <span>Additional Insurance required: <strong>No</strong></span>
        </div>
        <div class="flex items-center space-x-2 space-y-4">
          <User class="w-5 h-5" />
          <span>Cleaning Fees: <strong>No</strong></span>
        </div> -->
        <div class="flex items-center space-x-2 space-y-4">
          <MapPin class="w-5 h-5" />
          <span>{{venueListing.address}}</span>
        </div>
      </div>
      
        <!-- <VenueSearchLanding/> -->
      <VenueBookingRequest1 :venue="venueListing"/>
      </div>
      <!-- <AspectRatio class="rounded-lg overflow-hidden shadow-sm">
          <MapViewer :address="venueListing.address"/>
        </AspectRatio> -->
      <h3 class="font-semibold text-lg mb-2">Description:</h3>
        <p class="leading-relaxed">
          {{venueListing.description}}
        </p>
        <div>
          <h3 class="font-semibold text-lg mb-2">Venue good for:</h3>
          <div v-for="eventType in venueListing.eventType" class="flex flex-col-4   mt-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              {{eventType}}
            </span>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-lg mb-2">Amenities</h3>
          <div v-for="amenity in venueListing.amenities" class="flex flex-wrap gap-2 mt-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              {{amenity}}
            </span>
          </div>
        </div>

      </CardContent>
      
      <CardFooter class="flex justify-between pt-4 border-t dark:border-gray-700">
        <div>
        </div>
        <div class="flex flex-col items-end space-y-2">
          
          <MessagesButton v-if="Object.keys(contactInfo).length !== 0" :label="'Contact Host'" :isIcon="false" :newConversationInfo="contactInfo"></MessagesButton>
        </div>
      </CardFooter>
      <div class="px-4 py-2 dark:bg-gray-800">
        <AspectRatio class="rounded-md overflow-hidden shadow-sm ">
          <MapViewer v-if="venueListing.address" :address="venueListing.address" class="rounded-md "/>
        </AspectRatio>
        
        <div class="bg-white dark:bg-black p-6 shadow-lg rounded-lg  mx-auto my-8">
    <h2 class="text-2xl font-semibold mb-4">Reservation Rules</h2>

    <Accordion type="single" collapsible class="space-y-2">
      <!--<AccordionItem value="operating-hours">
        <AccordionTrigger class="flex items-center justify-between">
          <span class="font-medium">Operating Hours</span>
           <Clock class="w-5 h-5 text-gray-500 dark:text-gray-400" /> 
        </AccordionTrigger>
        <AccordionContent>
          <p class="mt-2">Mon-Fri: 9am to 10pm</p>
          <p>Sat-Sun: 10am to 11pm</p>
        </AccordionContent>
      </AccordionItem>-->

      <!--<AccordionItem value="safety-rules">
        <AccordionTrigger class="flex items-center justify-between">
          <span class="font-medium">Safety Rules</span>
           <Shield class="w-5 h-5 text-gray-500 dark:text-gray-400" /> 
        </AccordionTrigger>
        <AccordionContent>
          <ul class="list-disc ml-5 mt-2">
            <li>Face masks required</li>
            <li>Hand sanitizer provided</li>
            <li>Outdoor seating available</li>
          </ul>
          </AccordionContent>
      </AccordionItem>-->

      <AccordionItem value="reservation-rules">
        <AccordionTrigger class="flex items-center justify-between">
          <span class="font-medium">Reservation Rules and Venue Details</span>
          <!-- <Info class="w-5 h-5 text-gray-500 dark:text-gray-400" /> -->
        </AccordionTrigger>
        <AccordionContent>
          <div v-show="venueListing.nonSmoking" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              No Smoking
            </span>
          </div>
          <div v-show="venueListing.maskRequired" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Masks Required
            </span>
          </div>
          <div v-show="venueListing.noPets" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              No Pets
            </span>
          </div>
          <div v-show="venueListing.noCommercialPhotography" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              No Commercial Photography
            </span>
          </div>
          <div v-show="venueListing.securityCameras" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Has Security Cameras
            </span>
          </div>
          <div v-show="venueListing.postEventCleaning" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Has Post Event Cleaning
            </span>
          </div>
          <div v-show="venueListing.mustClimbStairs" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Must Climb Stairs
            </span>
          </div>
          <div v-show="venueListing.openSpace" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Has Open Space
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="cancelation-policy">
        <AccordionTrigger class="flex items-center justify-between">
          <span class="font-medium">Cancellation Policy</span>
          <!-- <XCircle class="w-5 h-5 text-gray-500 dark:text-gray-400" /> -->
        </AccordionTrigger>
        <AccordionContent>
          <p class="mt-2">{{ venueListing.cancellation_policy }}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>

        <div class="px-4 py-4 dark:bg-gray-800">
      <h3 class="text-lg font-semibold mb-4 text-black">Venues you might like</h3>
      <div class="flex space-x-4 overflow-x-auto pb-4">
        <div v-for="index in 20" :key="`item-${index}`" class="min-w-80 inline-block rounded-md shadow-lg bg-white dark:bg-gray-700">
          <img src="/placeholder.svg" alt="Venue image" class="h-60 w-full object-cover rounded-t-md">
          <div class="p-4">
            <h4 class="text-lg font-bold mb-2 dark:text-white">Venue Name</h4>
            <p class="text-sm text-gray-500 dark:text-gray-300">Location</p>
            <p class="text-sm text-gray-500 dark:text-gray-300">Size: Large</p>
            <p class="text-sm font-semibold dark:text-white">$500 / event</p>
            <p class="text-sm text-gray-500 mb-2 dark:text-gray-300">Sponsored</p>
            <!-- <Button class="w-full bg-white rounded-md shadow-lg hover:bg-gray-400 text-orange-500 border-orange-500 font-semibold" variant="default">
              View
            </Button> -->
          </div>
        </div>
      </div>
      <!-- "View more options" button -->
      <div class="flex justify-center mt-4">
        <Button variant="outline" class="p-6 mt-6 w-1/6 OrangeCol rounded-md shadow-lg hover:bg-orange-400 text-white font-semibold hover:text-white" >
          View more options
        </Button>
      </div>
      </div>
      </div>
    </Card>
  </div>
</template>

<style>
 .OrangeCol {   
  background-color: #ff6900;
 }

 .OrangeText {
  color: #ff6900;
 }
 .images{
 }
</style>


