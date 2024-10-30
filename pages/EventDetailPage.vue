
<script setup lang="ts">

 import {
   Popover,
   PopoverContent,
   PopoverTrigger
 } from '@/components/ui/popover'
// import { Calendar } from '@/components/ui/calendar'
import { MapPin, Star, User, ArrowRight, Home, Check, Share2, Bookmark, Save, Clock, Info, Shield, XCircle } from 'lucide-vue-next'
import { ref, defineProps } from 'vue'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useRoute } from 'vue-router'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const route = useRoute();
const venueId = route.query.id;
const event = ref({
  created_by: 1,
  title: '',
  description: '',
  invite_only: false,
  ticket_price: 0,
  event_type: '',
  industries: [],
  images: [],
  event_start_date: new Date(),
  event_end_date: new Date(),
  event_start_time: '12:00',
  event_end_time: '14:00',
  location: '',
  agenda: '',
  link: '',
  allow_venue_offering: true,
  allow_volunteers_offering: true,
  allow_sponsorship_offering: true,
  allow_expertise_offering: true,
  allow_vendors_offering: true,
  allow_registration_request: true,
  is_published: false




});
async function getEvent() {
  const { data: AllEvents, error } = await supabase.from('AllEvents').select('*, event_owner:profiles!created_by(*)').eq('id', venueId)
  console.log(error)
  Promise.all(AllEvents.map(async (event) => {
    event.event_owner.avatarSRC = await fetchImage(event.event_owner.avatar_url)
  })).then(() => {
    event.value = AllEvents[0];
    console.log(AllEvents)
  })
}
const fetchImage = async (id) => {
    if(!!id)
    {
            const urlData = await supabase.storage.from('avatars').createSignedUrl(id, 60);
            return urlData?.data?.signedUrl ?? "";
    }
    return "";
  }
onMounted(() => {
  getEvent()
});
const date = ref<Date>()
</script>

<template>
  <div class="dark:bg-black m-8">
    <Card class="max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg dark:border-gray-700">
      <CardHeader class="relative bg-white dark:bg-gray-800">
        <div class="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <CardTitle class="text-lg font-bold dark:text-white">
            Elegant Venue in the City Center
          </CardTitle>
          <div class="flex space-x-2">
            <Button variant="ghost" class="OrangeText">
              <Save class="w-5 h-5" /> Save
            </Button>
            <Button variant="ghost" class="OrangeText">
              <Share2 class="w-5 h-5" /> Share
            </Button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 ">
          <ImageCarousel :image-names="event.images" />
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
          <span>Hosted by <strong>{{event.event_owner?.full_name}}</strong></span>
        </div>
        <div class="flex items-center space-x-2 space-y-4">
          <User class="w-5 h-5" />
          <span>Company <strong>{{event.event_owner?.user_company}}</strong></span>
        </div>
        <div class="flex items-center space-x-2 space-y-4">
          <User class="w-5 h-5" />
          <span>Tickets: <strong>{{event.ticket_price == 0 ? 'Free' : '$' + event.ticket_price}} / {{event.invite_only ? 'Invite only' : 'Open to all'}}</strong></span>
        </div>
        <div class="flex items-center space-x-2 space-y-4">
          <User class="w-5 h-5" />
          <span>Event type: <strong>{{event.event_type}}</strong></span>
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
          <span>{{event.location}}</span>
        </div>
      </div>
      </div>
      <h3 class="font-semibold text-lg mb-2">Description:</h3>
        <p class="leading-relaxed">
          {{event.description}}
        </p>
        <div>
          <h3 class="font-semibold text-lg mb-2">Industries:</h3>
          <div v-for="eventType in event.industries" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              {{eventType}}
            </span>
          </div>
        </div>

      </CardContent>
      
      <CardFooter class="flex justify-between pt-4 border-t dark:border-gray-700">
        <div>
        </div>
        <div class="flex flex-col items-end space-y-2">
          <Button class="inline-flex items-center px-4 py-2 text-sm font-semibold text-white OrangeCol hover:bg-orange-400 rounded-md">
            <span>Contact Host</span>
            <ArrowRight class="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardFooter>
      <div class="px-4 py-2 dark:bg-gray-800">
        
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
          <span class="font-medium">Reservation Rules and Details</span>
          <!-- <Info class="w-5 h-5 text-gray-500 dark:text-gray-400" /> -->
        </AccordionTrigger>
        <AccordionContent>
          <div v-show="event.allow_venue_offering" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Allow Venue Offering
            </span>
          </div>
          <div v-show="event.allow_sponsorship_offering" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Allow Sponsorship Offering
            </span>
          </div>
          <div v-show="event.allow_volunteers_offering" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Allow Volunteers Offering
            </span>
          </div>
          <div v-show="event.allow_expertise_offering" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Allow Expertise Offering
            </span>
          </div>
          <div v-show="event.allow_vendors_offering" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Allow Vendors Offering
            </span>
          </div>
          <div v-show="event.allow_registration_request" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Registration Requests Allowed
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>

        <div class="px-4 py-4 dark:bg-gray-800">
      <h3 class="text-lg font-semibold mb-4 text-black">Events you might like</h3>
      <div class="flex space-x-4 overflow-x-auto pb-4">
        <div v-for="index in 20" :key="`item-${index}`" class="min-w-80 inline-block rounded-md shadow-lg bg-white dark:bg-gray-700">
          <img src="/placeholder.svg" alt="Venue image" class="h-60 w-full object-cover rounded-t-md">
          <div class="p-4">
            <h4 class="text-lg font-bold mb-2 dark:text-white">Event Name</h4>
            <p class="text-sm text-gray-500 dark:text-gray-300">Location</p>
            <p class="text-sm font-semibold dark:text-white">$500 / Ticket</p>
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
</style>


