
<script setup lang="ts">
import { Heart, PhoneOutgoing, Share2 } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
</script>

<template>
  <div class="flex flex-col dark:bg-black">
    <!-- Top bar with header and Become a Sponsor Button -->
    <div class="flex justify-between items-center p-6 bg-gray-100 dark:bg-gray-900">
      <h1 class="text-xl font-bold dark:text-white">Sponsors & Partnerships</h1>
      <div class="flex space-x-4">
        <Input placeholder="Search by Name" class="flex-1 dark:bg-gray-700 dark:text-white" />
        <Select class="dark:bg-gray-700 dark:text-white">
          <SelectTrigger>
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="tech">
                Technology
              </SelectItem>
              <SelectItem value="finance">
                Finance
              </SelectItem>
              <SelectItem value="healthcare">
                Healthcare
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select class="dark:bg-gray-700 dark:text-white">
          <SelectTrigger>
            <SelectValue placeholder="Sponsor Option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="full">
                Full Sponsorship
              </SelectItem>
              <SelectItem value="partial">
                Partial Sponsorship
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button class="dark:bg-gray-700 dark:text-white dark:border-gray-700">Become a Sponsor</Button>
    </div>
    <!-- Corporate Sponsors -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div v-for="i in 6" :key="'corporate-sponsor-' + i" class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <div class="relative">
          <img class="w-full h-64 object-cover" src="/placeholder.svg" alt="Corporate Sponsor image" />
          <Badge v-if="i % 2 === 0" variant="secondary" class="absolute top-3 right-3">Sponsored</Badge>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 dark:text-white">Sponsor Name</div>
          <p class="text-gray-700 text-base dark:text-gray-300">
            Offering full sponsorship for Software Development Industry. Contact us for more details!
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <div class="flex items-center justify-between mt-3">
            <Button variant="ghost" class="flex items-center justify-center dark:text-white">
              <PhoneOutgoing class="w-5 h-5 mr-2" />
              Contact
            </Button>
            <div class="flex items-center space-x-4">
              <Button variant="ghost" class="flex items-center justify-center dark:text-white">
                <Heart class="w-5 h-5 mr-1" />
                Like
              </Button>
              <Button variant="ghost" class="flex items-center justify-center dark:text-white">
                <Share2 class="w-5 h-5 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-full">
        <Button variant="outline" class="mx-auto mt-4">Show more</Button>
      </div>
    </div>
    
  </div>
</template>
