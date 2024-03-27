
<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
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
const categories = [
  { name: 'Admin', description: 'Manage administrative tasks.', image: "/placeholder.svg" },
  { name: 'Tech support', description: 'Provide technical assistance.', image: "/placeholder.svg" },
  { name: 'DJ', description: 'Create musical ambiance.', image: "/placeholder.svg" },
  { name: 'Lighting', description: 'Handle lighting and effects.', image: "/placeholder.svg" },
  { name: 'Entertainment', description: 'Perform and entertain guests.', image: "/placeholder.svg" },
  { name: 'Hosting', description: 'Greet and accommodate guests.', image: "/placeholder.svg" },
  { name: 'Finance', description: 'Manage financial operations.', image: "/placeholder.svg" },
  { name: 'Legal', description: 'Advise on legal matters.', image: "/placeholder.svg" },
  { name: 'Cooking', description: 'Prepare and cook meals.', image: "/placeholder.svg" },
  { name: 'Bartending', description: 'Serve drinks and cocktails.', image: "/placeholder.svg" },
  { name: 'Marketing', description: 'Promote events and activities.', image: "/placeholder.svg" },
  { name: 'Building', description: 'Construct and repair structures.', image: "/placeholder.svg" },
  { name: 'Others', description: 'Various other volunteer opportunities.', image: "/placeholder.svg" },
];
</script>

<template>
  <div class="flex flex-col space-y-4 p-6 dark:bg-black">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold dark:text-white">Find Expert Volunteers</h1>
      <Button class="bg-blue-500 text-white dark:bg-blue-600 dark:text-white">Become a Volunteer</Button>

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
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card v-for="category in categories" :key="category.name" class="border-0 overflow-hidden shadow-xl rounded-2xl dark:shadow-none transition-transform transform hover:-translate-y-1 dark:hover:shadow-2xl">
          <CardHeader class="p-0">
            <img :src="category.image" alt="category.name" class="w-full h-44 object-cover rounded-t-2xl transition-opacity duration-200 hover:opacity-80">
          </CardHeader>
          <CardContent class="flex flex-col items-start p-6 dark:bg-gray-900">
            <h3 class="text-xl font-semibold mb-2 dark:text-gray-100">{{ category.name }}</h3>
            <p class="text-gray-600 dark:text-gray-400 flex-grow">{{ category.description }}</p>
          </CardContent>
          <CardFooter class="p-6 dark:bg-gray-900">
            <Button variant="default" class="w-full text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-300">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
</template>


