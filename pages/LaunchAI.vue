
<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
const categories = [
  { title: 'Pitchy AI', creator: 'Launch Gala', name: 'Pitch deck creator & evaluator', description: 'Create or evolute your pitch deck with our advanced AI agent', image: "/placeholder.svg" },
  { title: 'Pitchy', creator: 'Launch Gala', name: 'Tech support', description: 'Provide technical assistance.', image: "/placeholder.svg" },
  { title: 'Pitchy', creator: 'Launch Gala', name: 'DJ', description: 'Create musical ambiance.', image: "/placeholder.svg" },
  { title: 'Pitchy', creator: 'Launch Gala', name: 'Lighting', description: 'Handle lighting and effects.', image: "/placeholder.svg" },
  { title: 'Pitchy', creator: 'Launch Gala', name: 'Entertainment', description: 'Perform and entertain guests.', image: "/placeholder.svg" },
  { title: 'Pitchy', creator: 'Launch Gala', name: 'Hosting', description: 'Greet and accommodate guests.', image: "/placeholder.svg" },
  { title: 'Pitchy', creator: 'Launch Gala', name: 'Finance', description: 'Manage financial operations.', image: "/placeholder.svg" },
  { title: 'Pitchy', creator: 'Launch Gala', name: 'Legal', description: 'Advise on legal matters.', image: "/placeholder.svg" },
  { title: 'Pitchy', creator: 'Launch Gala', name: 'Cooking', description: 'Prepare and cook meals.', image: "/placeholder.svg" },
  { title: 'Pitchy', creator: 'Launch Gala', name: 'Bartending', description: 'Serve drinks and cocktails.', image: "/placeholder.svg" },
  { title: 'Pitchy', creator: 'Launch Gala', name: 'Marketing', description: 'Promote events and activities.', image: "/placeholder.svg" },
  { title: 'Pitchy', creator: 'Launch Gala', name: 'Building', description: 'Construct and repair structures.', image: "/placeholder.svg" },
];

import { Heart, Share2, Search, ArrowRight, Calendar as CalendarIcon } from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const isOpen = ref(false)
const date = ref<Date>()
</script>

<template>
  <div class="flex flex-col space-y-4 p-6 dark:bg-black">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold dark:text-white">AI Agents Marketplace</h1>
      <Button class="bg-orange-500 text-white dark:bg-orange-500 dark:text-white hover:bg-gray-100 hover:text-orange-500 border-orange-500">Submit your Agent</Button>

    </div>
    
    <Collapsible v-model:open="isOpen" class="px-6 py-4">
        <CollapsibleTrigger as="button" class="flex w-full justify-between px-4 py-3 mb-4 text-left bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow">
            <span>Search Filters</span>
            <ArrowRight class="w-5 h-5 transition-transform" :class="{ 'rotate-90': isOpen }"  />
        </CollapsibleTrigger>

      <CollapsibleContent class="space-y-4 pb-4">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Input placeholder="Location" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="1br">1 Bedroom</SelectItem>
              <SelectItem value="2br">2 Bedroom</SelectItem>
              <SelectItem value="3brplus">3+ Bedroom</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Venue Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Amenities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pool">Pool</SelectItem>
              <SelectItem value="gym">Gym</SelectItem>
              <SelectItem value="wifi">WiFi</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger as-child>
              <Button
                variant="outline"
                class="dark:text-white dark:bg-gray-700 dark:border-gray-700"
              >
                <CalendarIcon class="mr-2 h-4 w-4" />
                Pick a date
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="date" />
            </PopoverContent>
          </Popover>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sponsor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sponsored">Sponsored</SelectItem>
              <SelectItem value="nonsponsored">Non-Sponsored</SelectItem>
            </SelectContent>
          </Select>
          <Button class="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-md">
            <Search class="w-5 h-5 mr-2" />
            Search
          </Button>
        </div>
      </CollapsibleContent>

    </Collapsible>
    <div class="px-8 py-10">
      <div class="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        <Card v-for="category in categories" :key="category.name" class="border-0 overflow-hidden shadow-xl rounded-2xl dark:shadow-none transition-transform transform hover:-translate-y-1 dark:hover:shadow-2xl">
            <CardHeader class="p-6 flex flex-col items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">{{ category.title }}</CardTitle>
            </div>
            <div>
            <CardTitle class="text-md font-normal text-gray-900 dark:text-white">By {{ category.creator }}</CardTitle>

          </div>

          <img src="public/Launch_Gala_Logo-removebgHD.png" alt="Amazon" class="w-32 h-32">

        </CardHeader>
          <CardContent class="flex flex-col items-start p-8 dark:bg-gray-900 mb-6">
            <h3 class="text-xl font-semibold mb-2 dark:text-gray-100">{{ category.name }}</h3>
            <p class="text-gray-600 dark:text-gray-400 flex-grow">{{ category.description }}</p>
          </CardContent>
          <CardFooter class="mr-12 ml-12 dark:bg-gray-900">
            <NuxtLink :to="'AiAgentPage'">

            <Button variant="default" class="w-3/4 bg-gray-100 text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white rounded-half transition-colors duration-300">
              Learn More
            </Button>
          </NuxtLink>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
</template>


