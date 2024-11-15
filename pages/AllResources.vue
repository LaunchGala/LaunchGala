
<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Heart, Share2, Search, ArrowRight, Calendar as CalendarIcon } from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
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
      <h1 class="text-2xl font-bold dark:text-white">Resources Center</h1>
      <Button class="bg-blue-500 text-white dark:bg-blue-600 dark:text-white">Provide a Resource</Button>

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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 dark:hover:shadow-2xl">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">AWS Credit</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Amazon</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Amazon" class="w-32 h-32">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $100,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Get up to $100,000 in free credit for your cloud services needs.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>
      
      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Tax Prep Discount</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Tax Advisor</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Tax Advisor" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">50% Off Tax Preparation</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Save 50% on professional tax preparation services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>
      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>
      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
