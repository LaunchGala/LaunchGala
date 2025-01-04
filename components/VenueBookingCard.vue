<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  GlobeIcon,
  MapPinIcon,
  Calendar as CalendarIcon,
  Clock,
  UserIcon,
  CheckCircle,
} from 'lucide-vue-next';
import { Button } from '@/components/ui/button';

const props = defineProps({
  venue: {
    type: Object,
    required: true,
  },
  eventName: {
    type: String,
    required: true
  }
});

const formatArray = (arr: string[]) =>
  arr.length > 3 ? `${arr.slice(0, 3).join(', ')}...` : arr.join(', ');

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const formatTime = (time: string) =>
  new Date(`1970-01-01T${time}:00Z`).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
</script>

<template>
  <Card class="max-w-4xl w-full bg-white dark:bg-gray-900 shadow-xl rounded-lg overflow-hidden">
    <CardHeader
      class="bg-gradient-to-r from-orange-600 to-orange-400 p-6 flex flex-col items-center text-white"
    >
    <span class="text-xl opacity-90">Event: {{ eventName }}</span>
      <Avatar class="mb-4 w-24 h-24 ring-4 ring-white">
        <AvatarImage :src="venue.venue_owner.avatarSRC" alt="Event Banner" />
        <AvatarFallback>EV</AvatarFallback>
      </Avatar>
      <h3 class="font-semibold text-center text-md mt-2">{{ venue.venue_owner.full_name }}</h3>
      <CardTitle class="text-2xl font-bold">{{ venue.title }}</CardTitle>
      <span class="text-lg opacity-90">{{ venue.venueType }}</span>
      <div class="flex items-center mt-2">
        <MapPinIcon class="w-5 h-5" />
        <span class="ml-2 font-semibold">{{ venue.address }}</span>
      </div>
    </CardHeader>
    <CardContent class="p-6">
      <!-- Custom Buttons Slot -->
      <div class="flex justify-end mt-1 space-x-4 align-middle">
        <slot name="action-buttons">
        </slot>
      </div>
      <p class="text-gray-700 dark:text-gray-300 mb-6">{{ venue.description }}</p>


      <!-- Amenities -->
      <h3 class="font-semibold mt-6 mb-2">Amenities</h3>
      <div class="flex gap-2 flex-wrap">
        <span
          v-for="amenity in venue.amenities"
          :key="amenity"
          class="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 text-sm font-medium px-2.5 py-0.5 rounded"
        >
          {{ amenity }}
        </span>
      </div>

      <!-- Features -->
      <h3 class="font-semibold mt-6 mb-2">Venue Information</h3>
      <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li v-if="venue.nonSmoking">No Smoking</li>
        <li v-if="venue.maskRequired">Masks Required</li>
        <li v-if="venue.noPets">No Pets</li>
        <li v-if="venue.noCommercialPhotography">No Commercial Photography</li>
        <li v-if="venue.postEventCleaning">Has Post Event Cleaning</li>
        <li v-if="venue.securityCameras">Has Security Cameras</li>
        <li v-if="venue.mustClimbStairs">Must Climb Stairs</li>
        <li v-if="venue.openSpace">Has Open Space</li>
      </ul>

      <!-- Ticket Info -->
      <h3 class="font-semibold mt-6 mb-2">Venue Pricing</h3>
      <div class="flex items-center">
        <CheckCircle class="w-5 h-5 mr-2 text-green-600" />
        <span>{{ venue.price > 0 ? `$${venue.price}` : 'Free' }}</span>
      </div>

      <!-- Number of Guests -->
      <h3 class="font-semibold mt-6 mb-2">Capacity</h3>
      <div class="flex items-center">
        <UserIcon class="w-5 h-5 mr-2 text-blue-600" />
        <span>{{ venue.capacity }}</span>
      </div>

    </CardContent>
  </Card>
</template>