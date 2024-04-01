
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ArrowRight, Search } from 'lucide-vue-next'
</script>

<template>
  <div class="mx-8 my-8 bg-white dark:bg-black">
    <div class="flex justify-between">
    <div class=" text-2xl font-semibold mb-4  text-gray-700">Upcoming Events</div>
    <Button variant="default" class="ButtonCol  hover:bg-gray-200 transition-colors">Provide your Venue</Button>
  </div>
    <div class="carousel flex space-x-6 overflow-x-auto py-6">
      
      <div class="flex-none w-[500px] h-[540px] max-w-none rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <img src="/Bootstrapping.png" alt="Venue" class="rounded-t-lg object-cover w-full h-[360px]" />
        <div class="p-8">
          <h5 class="text-2xl font-bold text-gray-900 dark:text-white">Chic Urban Loft</h5>
          <p class="text-base text-gray-700 dark:text-gray-300 mt-2">A stylish venue for modern gatherings.</p>
          <Button class="mt-4 inline-flex items-center rounded-lg py-2 px-4 hover:bg-gray-200 transition-colors ButtonCol">
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
          <Button class="mt-4 inline-flex items-center rounded-lg py-2 px-4 hover:bg-gray-200 transition-colors ButtonCol">
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
          <Button class="mt-4 inline-flex items-center rounded-lg py-2 px-4 hover:bg-gray-200 transition-colors ButtonCol">
            Explore
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

    </div>
    <div class="py-8">
      <NuxtLink to="AllEvents">
        <Button class="ButtonCol rounded-lg px-6 py-3 hover:bg-gray-200 transition-colors">
        View All
        <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </NuxtLink>
    </div>
  </div>
</template>



<style>
 .OrangeCol {   
  border-color: #ff6900;
 }

 .ButtonCol {
  background-color: white;
  color:#ff6900;
  border-color: #ff6900;
  border-radius: solid 15px;
  border-width: 1px;
  text-align: center;
  justify-content: center;
  align-items: center;
  
 }
</style>