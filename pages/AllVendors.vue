
<script setup lang="ts">
import { MapPin, Search, ShoppingCart, Tag, Star } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
</script>

<template>
  <div class="flex flex-col dark:bg-black">
    <div class="flex justify-between items-center p-6 bg-gray-100 dark:bg-gray-900">
      <h1 class="text-xl font-bold dark:text-white">Vendors & Services</h1>
      <div>
        <Button class="bg-blue-500 text-white dark:bg-blue-600 dark:text-white">Become a Vendor</Button>
      </div>
      <div class="flex space-x-4">
        <Select class="dark:bg-gray-800 dark:text-white">
          <SelectTrigger>
            <SelectValue placeholder="Service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="catering">
                Catering
              </SelectItem>
              <SelectItem value="cleaning">
                Cleaning
              </SelectItem>
              <!-- Add other services as SelectItem elements -->
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder="Search by Name" class="flex-1 dark:bg-gray-800 dark:text-white" />
        <Input placeholder="Location" class="dark:bg-gray-800 dark:text-white" />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div v-for="i in 12" :key="'vendor-service-' + i" class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <div class="relative">
          <img class="w-full h-64 object-cover" src="/placeholder.svg" alt="Vendor Service image" />
          <div class="absolute top-4 right-4">
            <Badge v-if="Math.random() < 0.5" variant="secondary" class="text-xs">Offer available</Badge>
          </div>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 dark:text-white">Service Name</div>
          <p class="text-gray-700 text-base dark:text-gray-300">
            Learn more about our service offerings in the domains of Catering, Cleaning, etc. We operate in various locations!
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <div class="flex items-center justify-between mt-3">
            <Button class="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">
              <Tag class="w-4 h-4 mr-2"/>
              Learn More
            </Button>
            <div class="flex items-center space-x-4">
              <span class="flex items-center justify-center dark:text-white">
                <ShoppingCart class="w-5 h-5 mr-1" />
              </span>
              <span class="flex items-center justify-center dark:text-white">
                <MapPin class="w-5 h-5 mr-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
