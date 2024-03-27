
<script setup lang="ts">
import { ref } from 'vue';
import { Search, X, ChevronDown, ChevronUp, Heart, Share2, MessageSquare, ArrowRight } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

import { Calendar as CalendarIcon } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';

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
const postExpanded = ref(new Array(5).fill(false));
const searchValue = ref('');
const showSearch = ref(false);
const searchFilter = ref('author');
</script>

<template>
  <div class="flex flex-col space-y-4 p-6 dark:bg-black">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold dark:text-white">Community Forum</h1>
      <Button class="bg-blue-500 text-white dark:bg-blue-600 dark:text-white">Create a Post</Button>

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
      <!-- Posts List -->
      <div v-for="(isExpanded, index) in postExpanded" :key="`post-${index}`" class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden transition-all duration-300">
        <Collapsible v-model:open="postExpanded[index]">
          <div class="p-4 flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User profile" />
              <AvatarFallback>UP</AvatarFallback>
            </Avatar>
            <div class="flex-1 min-w-0">
              <h5 class="text-lg font-bold text-gray-900 dark:text-white truncate">
                Post Title by Author Name
              </h5>
              <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
                Short description of the post...
              </p>
            </div>
            <CollapsibleTrigger class="dark:text-white">
              <ChevronDown v-if="!isExpanded" class="w-5 h-5 transition-transform" />
              <ChevronUp v-if="isExpanded" class="w-5 h-5 transition-transform" />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent class="px-4 pb-4 space-y-6">
            <p class="text-gray-700 dark:text-gray-300">
              Full post content that may contain multiple paragraphs...
            </p>
            <div class="flex items-center justify-between pt-4 border-t dark:border-gray-600">
              <button class="flex items-center space-x-1 text-gray-500 hover:text-blue-500 dark:hover:text-blue-400">
                <Heart class="w-5 h-5" />
                <span class="text-sm">Like</span>
              </button>
              <button class="flex items-center space-x-1 text-gray-500 hover:text-blue-500 dark:hover:text-blue-400">
                <Share2 class="w-5 h-5" />
                <span class="text-sm">Share</span>
              </button>
              <button class="flex items-center space-x-1 text-gray-500 hover:text-blue-500 dark:hover:text-blue-400">
                <MessageSquare class="w-5 h-5" />
                <span class="text-sm">Comments</span>
              </button>
            </div>
            <div class="pt-4 border-t dark:border-gray-600">
              <Textarea rows="3" class="w-full rounded-md dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200" placeholder="Add a comment..." />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>

</template>
