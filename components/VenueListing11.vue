
<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { Home, Calendar, MapPin, Clock } from 'lucide-vue-next';
import { Progress } from '@/components/ui/progress';


const props = defineProps(['venueListing']);
console.log(props.venueListing);
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10 flex flex-col items-center">
    <div class="w-full max-w-4xl mx-auto px-4 lg:px-8">
      <AspectRatio :ratio="16 / 9" class="mb-6 rounded-md overflow-hidden shadow-lg">
        <img src="/placeholder.svg" alt="Venue Image" class="object-cover w-full h-full"/>
      </AspectRatio>
      <Card>
        <CardHeader>
          <CardTitle class="text-2xl">Venue Listing Preview</CardTitle>
          <CardDescription>Extensive view and settings for your venue listing details.</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <Home class="h-5 w-5 text-gray-500 dark:text-gray-200"/>
                <h2 class="text-lg font-semibold">The Grand Hall</h2>
              </div>
              <p class="text-gray-600 dark:text-gray-200">San Francisco, USA</p>
            </div>
            <p class="text-gray-600 dark:text-gray-200">
              The Grand Hall is a spacious and elegant venue, perfect for hosting weddings, conferences, and gala events. With state-of-the-art facilities and a centralized location, it offers convenience and an exceptional experience for your guests.
            </p>
            <div class="flex flex-col border-b border-gray-200 dark:border-gray-700 py-4">
              <div class="flex items-center space-x-3 mb-2">
                <Calendar class="h-5 w-5 text-gray-500 dark:text-gray-200"/>
                <CardTitle>Availability</CardTitle>
              </div>
              <p class="text-gray-600 dark:text-gray-200">
                Available for booking 7 days a week, with special arrangements for public holidays.
              </p>
            </div>
            <div class="flex flex-col border-t border-gray-200 dark:border-gray-700 py-4">
              <div class="flex items-center space-x-3 mb-2">
                <MapPin class="h-5 w-5 text-gray-500 dark:text-gray-200"/>
                <CardTitle>Location Accessibility</CardTitle>
              </div>
              <p class="text-gray-600 dark:text-gray-200">
                Situated in the heart of the city with ample parking space and well-connected by public transport.
              </p>
            </div>
            <div class="flex flex-col border-t border-gray-200 dark:border-gray-700 py-4">
              <div class="flex items-center space-x-3 mb-2">
                <Clock class="h-5 w-5 text-gray-500 dark:text-gray-200"/>
                <CardTitle>Operating Hours</CardTitle>
              </div>
              <p class="text-gray-600 dark:text-gray-200">
                Open from 9AM to 11PM. Special requests for extended hours can be accommodated.
              </p>
            </div>
            <div class="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 py-4">
              <div class="flex items-center space-x-3">
                <CurrencyDollar class="h-5 w-5 text-gray-500 dark:text-gray-200"/>
                <CardTitle>Pricing Options</CardTitle>
                <CardDescription>Competitive rates with discounts available for long-term bookings.</CardDescription>
              </div>
              <Toggle aria-label="Toggle pricing option"/>
            </div>
            <div class="flex flex-col space-y-3">
              <h4 class="text-lg font-semibold">Next Steps</h4>
              <ol class="list-decimal list-inside space-y-1">
                <li>Finalize and approve the details of your venue.</li>
                <li>Add venue availabilities to the calender</li>
                <li>Confirm & Publish</li>
              </ol>
            </div>
          </div>
        </CardContent>
        <div class="flex justify-end gap-4 p-4 items-center">
          <Button variant="outline" class="border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-200">
            Edit Details
          </Button>
          <Progress :model-value="100"   />

          <Button>
            Publish Listing
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>
