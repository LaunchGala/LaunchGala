
<script setup lang="ts">
import { ref } from 'vue';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Check, MapPin, User, Mail, ChevronDown } from 'lucide-vue-next';
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
} from '@/components/ui/select';

const selectedCity = ref(null);
const selectedRegion = ref(null);
const name = ref('');
const email = ref('');
</script>

<template>
    <!-- Background image -->
 <section class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
    <div class="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900">
      <div class="space-y-4">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Finding the Right Fit? We've Got Your Back!</h2>
        <p class="text-sm text-gray-600 dark:text-gray-400">Get personalized assistance from our team to identify the ideal choice for your business.</p>
        
        <div class="space-y-2">
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
          <div class="flex items-center px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
            <User class="mr-3 w-5 h-5 text-gray-500 dark:text-gray-400"/>
            <Input id="name" v-model="name" type="text" placeholder="John Doe" class="block w-full bg-transparent text-gray-900 placeholder-gray-400 border-none dark:text-white dark:placeholder-gray-500" />
          </div>
        </div>
        
        <div class="space-y-2">
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
          <div class="flex items-center px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
            <Mail class="mr-3 w-5 h-5 text-gray-500 dark:text-gray-400"/>
            <Input id="email" v-model="email" type="email" placeholder="john@example.com" class="block w-full bg-transparent text-gray-900 placeholder-gray-400 border-none dark:text-white dark:placeholder-gray-500" />
          </div>
        </div>

        <!-- <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Location</h2> -->
        <p class="text-sm text-gray-600 dark:text-gray-400">Select your city from the dropdown menu.</p>
        <Select v-model="selectedCity" class="w-full">
          <SelectTrigger class="flex items-center justify-between px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
            <SelectValue placeholder="Select a city" class="block truncate dark:text-gray-200"/>
            <ChevronDown class="w-5 h-5 text-gray-500 dark:text-gray-400"/>
          </SelectTrigger>
          <SelectContent class="rounded-lg bg-white dark:bg-gray-800 shadow-lg">
            <SelectItem value="New York">New York</SelectItem>
            <SelectItem value="Los Angeles">Los Angeles</SelectItem>
            <!-- ... other cities ... -->
          </SelectContent>
        </Select>

        <!-- <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Request</h2> -->
        <p class="text-sm text-gray-600 dark:text-gray-400">How can we help?</p>
        <Select v-model="selectedRegion" class="w-full">
          <SelectTrigger class="flex items-center justify-between px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
            <SelectValue placeholder="Select a region" class="block truncate dark:text-gray-200"/>
            <ChevronDown class="w-5 h-5 text-gray-500 dark:text-gray-400"/>
          </SelectTrigger>
          <SelectContent class="rounded-lg bg-white dark:bg-gray-800 shadow-lg">
            <SelectItem value="Northwest">Venue provider</SelectItem>
            <SelectItem value="Midwest">Requesting Service/product</SelectItem>
            <SelectItem value="Northeast">Offering Service/product</SelectItem>
            <SelectItem value="South">Partnership</SelectItem>
            <SelectItem value="West">Other</SelectItem>
            <!-- ... other regions ... -->
          </SelectContent>
        </Select>

        <!-- Existing Location and Region dropdowns omitted for brevity -->

        <p class="text-sm text-gray-600 dark:text-gray-400 mt-4">By clicking the button below, you agree to our <a href="#" class="text-blue-600 dark:text-blue-400">Terms of Service</a> and acknowledge our <a href="#" class="text-blue-600 dark:text-blue-400">Global Privacy Policy</a>.</p>
        <Button class="mt-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 text-white rounded-lg px-4 py-2 text-center inline-flex items-center">
          <Check class="w-4 h-4 mr-2"/> Submit
        </Button>
      </div>
    </div>
    <!-- <img src="/venueBG01.jpeg" alt="Landing Page" class="z-10 absolute right-10 rounded-xl"> -->

  </section>
</template>