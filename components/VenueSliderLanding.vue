
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ArrowRight, Search } from 'lucide-vue-next'
const venues = ref([
  {
    img: "/Bootstrapping.png",
    title: "Chic Urban office",
    description: "A stylish venue for modern gatherings."
  },
  {
    img: "/Bootstrapping.png",
    title: "Elegant Ballroom",
    description: "A stylish venue ..........."
  },
  {
    img: "/Bootstrapping.png",
    title: "Cozy Conference Room",
    description: "A stylish venue for modern .........."
  }
])
</script>

<template>
  <div class="mx-8 my-8 bg-white dark:bg-black">
    <div class="flex justify-between">
    <div class=" text-2xl font-semibold mb-4  text-gray-700">Chose your Venue</div>
    <NuxtLink to="VenueListing">
    <Button variant="default" class="ButtonCol  hover:bg-gray-200 transition-colors">Provide your Venue</Button>
  </NuxtLink>
  </div>
  <p class="text-md mt-3 dark:text-gray-400">Finding speakers, media, influencer, vendors & more</p>

    <div class="carousel flex space-x-6 overflow-x-auto py-6">
      
      <div v-for="venue in venues" class="flex-none w-[500px] h-[540px] max-w-none rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <img :src="venue.img" alt="Venue" class="rounded-t-lg object-cover w-full h-[360px]" />
        <div class="p-8">
          <h5 class="text-2xl font-bold text-gray-900 dark:text-white">{{ venue.title }}</h5>
          <p class="text-base text-gray-700 dark:text-gray-300 mt-2">{{ venue.description }}</p>
          <Button class="mt-4 inline-flex items-center rounded-lg py-2 px-4 hover:bg-gray-200 transition-colors ButtonCol">
            Explore
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
      

    </div>
    <div class="py-8">
      <NuxtLink to="AllVenues">
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