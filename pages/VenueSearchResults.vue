
<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <div class="flex space-x-4 p-4 bg-white dark:bg-black">
    <div class="w-1/4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
      <h3 class="font-bold text-lg mb-3">Suggestions</h3>
      <ul class="space-y-2">
        <li><Button as-child variant="link"><a href="#" class="block text-sm hover:underline dark:text-gray-200">Volunteers</a></Button></li>
        <li><Button as-child variant="link"><a href="#" class="block text-sm hover:underline dark:text-gray-200">Speakers</a></Button></li>
        <li><Button as-child variant="link"><a href="#" class="block text-sm hover:underline dark:text-gray-200">Sponsors</a></Button></li>
        <li><Button as-child variant="link"><a href="#" class="block text-sm hover:underline dark:text-gray-200">Media</a></Button></li>
        <li><Button as-child variant="link"><a href="#" class="block text-sm hover:underline dark:text-gray-200">PR</a></Button></li>
        <li><Button as-child variant="link"><a href="#" class="block text-sm hover:underline dark:text-gray-200">Vendors</a></Button></li>
      </ul>
    </div>
    <div class="flex-grow bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div
        v-for="n in 6"
        :key="n"
        class="flex items-start gap-4 p-4 border-b border-gray-100 dark:border-gray-700"
      >
        <div class="w-24 flex-shrink-0">
          <AspectRatio ratio="1 / 1">
            <img src="/placeholder.svg" alt="Venue" class="object-cover">
          </AspectRatio>
        </div>
        <div class="flex flex-col justify-between flex-grow">
          <div>
            <h3 class="font-bold text-lg">Venue Title</h3>
            <p class="text-gray-500 dark:text-gray-300 mt-2">
              This is a short description of the venue. An inviting and pleasant place to hold events.
            </p>
          </div>
          <div class="mt-4">
        
            <NuxtLink to="VenueDetailPage">
                <Button as-child>
                  <a
                    href="https://example.com"
                    target="_blank"
                    class="flex items-center space-x-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                  >
                    <span>Visit Site</span>
                    <ArrowRight class="w-4 h-4" />
                  </a>
                </Button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/4 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
      <div class="mb-6">
        <h3 class="font-bold text-lg mb-3">Filters</h3>
        <div class="space-y-2">
          <div>
            <Checkbox id="filter1" />
            <label for="filter1" class="text-sm ml-2 dark:text-gray-200">Option 1</label>
          </div>
          <div>
            <Checkbox id="filter2" />
            <label for="filter2" class="text-sm ml-2 dark:text-gray-200">Option 2</label>
          </div>
          <div>
            <Checkbox id="filter3" />
            <label for="filter3" class="text-sm ml-2 dark:text-gray-200">Option 3</label>
          </div>
        </div>
      </div>
      <div>
        <h3 class="font-bold text-lg mb-3">Event Details</h3>
        <ul class="list-disc space-y-1 pl-5 text-sm dark:text-gray-200">
          <li>Event 1: Sample Details</li>
          <li>Event 2: More Details</li>
          <li>Event 3: Additional Info</li>
        </ul>
      </div>
    </div>
  </div>
</template>
