
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ArrowRight, Search } from 'lucide-vue-next'
</script>

<template>
  <div class="mx-8 my-8 bg-white dark:bg-black">
    <div class="flex justify-between">
    <div class="text-xl font-bold text-gray-900 dark:text-white p-6">Our Venues</div>
    <Button variant="default" class="mt-5 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">Provide your Venue</Button>
  </div>
    <div class="carousel flex space-x-6 overflow-x-auto py-6">
      
      <div class="flex-none w-[500px] h-[540px] max-w-none rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <img src="/Bootstrapping.png" alt="Venue" class="rounded-t-lg object-cover w-full h-[360px]" />
        <div class="p-8">
          <h5 class="text-2xl font-bold text-gray-900 dark:text-white">Chic Urban Loft</h5>
          <p class="text-base text-gray-700 dark:text-gray-300 mt-2">A stylish venue for modern gatherings.</p>
          <Button class="mt-4 inline-flex items-center bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition-colors">
            Explore
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
      
      <div class="flex-none w-[500px] h-[540px] max-w-none rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <img src="/Bootstrapping.png" alt="Venue" class="rounded-t-lg object-cover w-full h-[360px]" />
        <div class="p-8">
          <h5 class="text-2xl font-bold text-gray-900 dark:text-white">Elegant Ballroom</h5>
          <p class="text-base text-gray-700 dark:text-gray-300 mt-2">Perfect for weddings and gala events.</p>
          <Button class="mt-4 inline-flex items-center bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition-colors">
            Explore
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
      
      <div class="flex-none w-[500px] h-[540px] max-w-none rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <img src="/Bootstrapping.png" alt="Venue" class="rounded-t-lg object-cover w-full h-[360px]" />
        <div class="p-8">
          <h5 class="text-2xl font-bold text-gray-900 dark:text-white">Cozy Conference Room</h5>
          <p class="text-base text-gray-700 dark:text-gray-300 mt-2">Ideal space for meetings and seminars.</p>
          <Button class="mt-4 inline-flex items-center bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition-colors">
            Explore
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

    </div>
    <div class="py-8">
      <NuxtLink to="AllVenues">
      <Button class="text-xl font-semibold bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition-colors">
        View All
        <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </NuxtLink>
    </div>
  </div>
</template>


