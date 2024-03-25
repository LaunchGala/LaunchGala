
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


const postExpanded = ref(new Array(5).fill(false));
const searchValue = ref('');
const showSearch = ref(false);
const searchFilter = ref('author');
</script>

<template>
  <div class="dark:bg-black">
    <div class="px-6 py-8">
      <!-- Header Bar -->
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-xl font-bold text-gray-900 dark:text-white">Community Talk</h1>
        <Button variant="default">
          Create a Post
        </Button>
      </div>

      <!-- Animated Search Bar -->
      <div class="mb-6 relative">
        <Input
          v-model="searchValue"
          @focus="showSearch = true"
          @blur="showSearch = false"
          class="w-full pr-10 transition-all duration-300 ease-in-out rounded-lg shadow dark:bg-gray-900"
          placeholder="Search by author name, topic, top trending, newest"
          type="text"
        />
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search class="w-5 h-5 text-gray-400" />
        </div>
        <button
          class="absolute inset-y-0 right-0 flex items-center pr-3"
          :class="{ 'text-gray-400 hover:text-gray-500': !searchValue, 'text-red-500 hover:text-red-600': searchValue }"
          @click="searchValue = ''"
        >
          <X v-if="searchValue" class="w-5 h-5" />
        </button>
      </div>

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
  </div>
</template>
