
<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { Home, Calendar, MapPin, Clock, Check } from 'lucide-vue-next';
import { Progress } from '@/components/ui/progress';


const props = defineProps(['venueListing']);
console.log(props.venueListing);
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10 flex flex-col items-center">
    <div class="w-full max-w-4xl mx-auto px-4 lg:px-8">
      <AspectRatio :ratio="16 / 9" class="mb-6 rounded-md overflow-hidden shadow-lg">
        <ImageCarousel :image-names="props.venueListing.images"/>
      </AspectRatio>
      <Card>
        <CardHeader>
          <CardTitle class="text-2xl">Venue Listing Details</CardTitle>
          <CardDescription>Extensive view for your venue listing details.</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <Home class="h-5 w-5 text-gray-500 dark:text-gray-200"/>
                <h2 class="text-lg font-semibold">{{props.venueListing.title}}</h2>
              </div>
              <p class="text-gray-600 dark:text-gray-200">{{ props.venueListing.address }}</p>
            </div>
            <p class="text-gray-600 dark:text-gray-200">
              {{ props.venueListing.description }}
            </p>
        
            <div class="bg-white dark:bg-black p-6 shadow-lg rounded-lg  mx-auto my-8">

        <div>
          <h3 class="font-semibold text-lg mb-2">Venue good for:</h3>
          <div v-for="eventType in venueListing.eventType" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              {{eventType}}
            </span>
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-lg mb-2">Amenities</h3>
          <div v-for="amenity in venueListing.amenities" class="flex flex-wrap gap-2">
            <span class="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
              <Check class="w-4 h-4 text-green-500" />
              {{amenity}}
            </span>
          </div>
        </div>

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
          </div>
        </CardContent>
        <div class="flex justify-end gap-4 p-4 items-center">
          <Button @click="$emit('previousStep')" variant="outline" class="border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-200">
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
