
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
import { MapPin, Star, User, ArrowRight, Home, Check, Share2, Bookmark, Save } from 'lucide-vue-next'
import { ref, defineProps } from 'vue'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'


const date = ref<Date>()
</script>

<template>
  <div class="dark:bg-black">
    <Card class="max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg dark:border-gray-700">
      <CardHeader class="relative bg-white dark:bg-gray-800">
        <div class="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <CardTitle class="text-lg font-bold dark:text-white">
            Elegant Venue in the City Center
          </CardTitle>
          <div class="flex space-x-2">
            <Button variant="ghost" class="text-indigo-600 dark:text-indigo-400">
              <Save class="w-5 h-5" /> Save
            </Button>
            <Button variant="ghost" class="text-indigo-600 dark:text-indigo-400">
              <Share2 class="w-5 h-5" /> Share
            </Button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
          <img src="/placeholder.svg" alt="Main place" class="w-full h-48 object-cover col-span-2 rounded-lg dark:bg-gray-700"/>
          <div class="flex flex-col space-y-2">
            <img src="/placeholder.svg" alt="Place image" class="w-full h-24 object-cover rounded-lg dark:bg-gray-700"/>
            <img src="/placeholder.svg" alt="Place image" class="w-full h-24 object-cover rounded-lg dark:bg-gray-700"/>
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
          <span class="text-lg font-semibold">4.98 (421 reviews)</span>
        </div>
        <div class="flex items-center space-x-2">
          <User class="w-5 h-5" />
          <span>Hosted by <strong>Kevin</strong></span>
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
          <MapPin class="w-5 h-5" />
          <span>San Francisco, United States</span>
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
              Washer
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Iron
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              TV
            </span>
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              Private entrance
            </span>
          </div>
        </div>
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
          <Button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
            <span>Book now</span>
            <ArrowRight class="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardFooter>
      <div class="px-4 py-2 dark:bg-gray-800">
        <AspectRatio :ratio="16 / 9" class="rounded-lg overflow-hidden shadow-sm">
          <iframe 
            src="https://maps.google.com/maps?q=San%20Francisco,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" 
            class="w-full h-full" 
            allowfullscreen 
            aria-hidden="false" 
            tabindex="0">
          </iframe>
        </AspectRatio>
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
