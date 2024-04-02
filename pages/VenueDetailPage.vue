
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';


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
          <img src="/venueBG01.jpeg" alt="Main place" class="w-full h-120 object-cover col-span-2 rounded-lg dark:bg-gray-700"/>
          <div class="flex flex-col space-y-2">
            <img src="/Bootstrapping.png" alt="Place image" class="w-full h-70 object-cover rounded-lg dark:bg-gray-700"/>
            <img src="/Bootstrapping.png" alt="Place image" class="w-full h-70 object-cover rounded-lg dark:bg-gray-700"/>
          </div>
        </div>
        <div class="flex justify-between p-2">
          <Button variant="outline" class="border dark:border-gray-500 hover:border-indigo-600 dark:text-indigo-300 dark:hover:text-indigo-500">
            Show more images
          </Button>
          <!-- <Popover>
            <PopoverTrigger as-child>
              <Button
                variant="outline"
                class="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-300 px-4 py-2 rounded">
                <CalendarIcon class="w-5 h-5"/>
                <span>{{ date ? format(date, "PPP") : "Select date & time" }}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="date" class="p-4" />
            </PopoverContent>
          </Popover> -->
        </div>
      </CardHeader>
      
      <CardContent class="p-4 space-y-4 dark:bg-gray-800 dark:text-white">
        
        <div class="flex items-center space-x-2">
          <Star class="w-5 h-5 text-yellow-400" />
          <span class="text-lg font-semibold">421 Endorsement</span>
        </div>
        <div class="flex items-center space-x-2">
          <User class="w-5 h-5" />
          <span>Hosted by <strong>Kevin</strong></span>
        </div>
        <div class="flex items-center space-x-2">
          <User class="w-5 h-5" />
          <span>Company <strong>Google</strong></span>
        </div>
        <div class="flex items-center space-x-2">
          <User class="w-5 h-5" />
          <span>Price <strong>$100/hr</strong></span>
        </div>
        <div class="flex items-center space-x-2">
          <User class="w-5 h-5" />
          <span>Sponsor option: <strong>Yes</strong></span>
        </div>
        <div class="flex items-center space-x-2">
          <User class="w-5 h-5" />
          <span>Venue type: <strong>Office room</strong></span>
        </div>
        <div class="flex items-center space-x-2">
          <User class="w-5 h-5" />
          <span>Total capacity/Venue size: <strong>180</strong></span>
        </div>
        <div class="flex items-center space-x-2">
          <User class="w-5 h-5" />
          <span>Multiple rooms: <strong>Yes</strong></span>
        </div>
        <div class="flex items-center space-x-2">
          <User class="w-5 h-5" />
          <span>Additional Insurance required: <strong>No</strong></span>
        </div>
        <div class="flex items-center space-x-2">
          <User class="w-5 h-5" />
          <span>Cleaning Fees: <strong>No</strong></span>
        </div>

        
        <div class="flex items-center space-x-2">
          <MapPin class="w-5 h-5" />
          <span>San Francisco, United States</span>
        </div>
        <div>
          <h3 class="font-semibold text-lg mb-2">Venue good for:</h3>
          <div class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Conferences
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Seminars and Workshops
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Trade Shows and Expos
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Business Meetings
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Networking Events
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Team Building & Training
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Product Launches
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Board Meetings
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Investor Relations Meetings
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Press Conferences
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Pitch Events
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Hackathons
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Symposiums
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Panel Discussions
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Round Table Discussions
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Lectures and Public Speaking Events
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Dinner Party
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Corporate Anniversaries
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Job Fairs and Career Expos
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Signings and Publishing Events
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Gala Event
            </span>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-lg mb-2">Amenities</h3>
          <div class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Wi-Fi
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Air Conditioning
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Outdoor Area
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Kitchen
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Bar Area
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Restrooms
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Parking
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Presentation Equipment
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Private entrance
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Accessibility features
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Seating Furniture
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Audiovisual Equipment
            </span>
          </div>
        </div>
        <h3 class="font-semibold text-lg mb-2">Description:</h3>
        <p class="leading-relaxed">
          Discover the charms of the city in this exclusive apartment with fine finishes, thoughtful design, and a peaceful terrace views. After exploring the city, relax in the serene bedroom or enjoy the local restaurants within walking distance.
        </p>
      </CardContent>
      <CardFooter class="flex justify-between pt-4 border-t dark:border-gray-700">
        <div>
          <div class="flex items-center space-x-2 mb-2">
            <Home class="w-5 h-5" />
            <span class="text-sm">Picture may not be of actual place</span>
          </div>
          <Button variant="outline" class="border dark:border-gray-500 hover:border-indigo-600 dark:text-indigo-300 dark:hover:text-indigo-500">
            View on map
          </Button>
        </div>
        <div class="flex flex-col items-end space-y-2">
          <Button class="inline-flex items-center px-4 py-2 text-sm font-semibold text-white OrangeCol hover:bg-gray-400 dark:hover:bg-gray-400">
            <span>Contact Host</span>
            <ArrowRight class="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardFooter>
      <div class="px-4 py-2 dark:bg-gray-800">
        <AspectRatio class="rounded-lg overflow-hidden shadow-sm">
          <iframe 
            src="https://maps.google.com/maps?q=San%20Francisco,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" 
            class="w-full min-h-screen rounded-md" 
            allowfullscreen 
            aria-hidden="false" 
            tabindex="0">
          </iframe>
        </AspectRatio>
        
        <div class="bg-white dark:bg-black p-6 shadow-lg rounded-lg  mx-auto my-8">
    <h2 class="text-2xl font-semibold mb-4">Reservation Rules</h2>

    <Accordion type="single" collapsible class="space-y-2">
      <AccordionItem value="operating-hours">
        <AccordionTrigger class="flex items-center justify-between">
          <span class="font-medium">Operating Hours</span>
          <!-- <Clock class="w-5 h-5 text-gray-500 dark:text-gray-400" /> -->
        </AccordionTrigger>
        <AccordionContent>
          <p class="mt-2">Mon-Fri: 9am to 10pm</p>
          <p>Sat-Sun: 10am to 11pm</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="safety-rules">
        <AccordionTrigger class="flex items-center justify-between">
          <span class="font-medium">Safety Rules</span>
          <!-- <Shield class="w-5 h-5 text-gray-500 dark:text-gray-400" /> -->
        </AccordionTrigger>
        <AccordionContent>
          <ul class="list-disc ml-5 mt-2">
            <li>Face masks required</li>
            <li>Hand sanitizer provided</li>
            <li>Outdoor seating available</li>
          </ul>
          </AccordionContent>
      </AccordionItem>

      <AccordionItem value="reservation-rules">
        <AccordionTrigger class="flex items-center justify-between">
          <span class="font-medium">Reservation Rules</span>
          <!-- <Info class="w-5 h-5 text-gray-500 dark:text-gray-400" /> -->
        </AccordionTrigger>
        <AccordionContent>
          <p class="mt-2">Please arrive 10 minutes before your reservation. No outside food or drinks allowed.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="cancelation-policy">
        <AccordionTrigger class="flex items-center justify-between">
          <span class="font-medium">Cancellation Policy</span>
          <!-- <XCircle class="w-5 h-5 text-gray-500 dark:text-gray-400" /> -->
        </AccordionTrigger>
        <AccordionContent>
          <p class="mt-2">Free cancellation within 24 hours. Late cancellations incur a fee.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>

        <div class="px-4 py-4 dark:bg-gray-800">
      <h3 class="text-lg font-semibold mb-4 text-black">Venues you might like</h3>
      <div class="flex space-x-4 overflow-x-auto pb-4">
        <div v-for="index in 6" :key="`item-${index}`" class="min-w-60 inline-block rounded shadow-lg bg-white dark:bg-gray-700">
          <img src="/placeholder.svg" alt="Venue image" class="h-40 w-full object-cover rounded-t">
          <div class="p-4">
            <h4 class="text-lg font-bold mb-2 dark:text-white">Venue Name</h4>
            <p class="text-sm text-gray-500 dark:text-gray-300">Location</p>
            <p class="text-sm text-gray-500 dark:text-gray-300">Size: Large</p>
            <p class="text-sm font-semibold dark:text-white">$500 / event</p>
            <p class="text-sm text-gray-500 mb-2 dark:text-gray-300">Sponsored</p>
            <Button class="w-full" variant="default">
              View
            </Button>
          </div>
        </div>
      </div>
      <!-- "View more options" button -->
      <div class="flex justify-center mt-4">
        <Button variant="outline" class="text-white border-black hover:text-black hover:bg-white bg-black">
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


