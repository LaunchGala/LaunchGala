
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ArrowRight, Search } from 'lucide-vue-next'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';


const venues = ref([
  {
    img: "/Bootstrapping.png",
    name: "Larry Page",
    company: "Google",
    industry: "IT",
    stage: "Pre-seed",
    description: "A stylish venue for modern gatherings.",
    location: "SF, CA",
    avatar: "https://conferences.law.stanford.edu/directorscollege2022/wp-content/uploads/sites/112/2022/05/Sundar-Pichai-Headshot-212x212.png",
  },
  {
    img: "/Bootstrapping.png",
    name: "Sergey Brin",
    company: "Google",
    industry: "IT",
    stage: "Round A",
    description: "A stylish venue for modern gatherings.",
    location: "SF, CA",
    avatar: "https://conferences.law.stanford.edu/directorscollege2022/wp-content/uploads/sites/112/2022/05/Sundar-Pichai-Headshot-212x212.png",
  },
  {
    img: "/Bootstrapping.png",
    name: "Steve Jobs",
    company: "Apple",
    industry: "IT",
    stage: "Round A",
    description: "A stylish venue for modern gatherings.",
    location: "SF, CA",
    avatar: "https://conferences.law.stanford.edu/directorscollege2022/wp-content/uploads/sites/112/2022/05/Sundar-Pichai-Headshot-212x212.png",
  }
])
</script>

<template>
  <div class="mx-8 my-8 bg-white dark:bg-black">
    <div class="flex justify-between">
    <div class=" text-2xl font-semibold mb-4  text-gray-700">Founders & Startups</div>
    <NuxtLink to="VenueListing">
    <Button variant="default" class="ButtonCol  hover:bg-gray-200 transition-colors">List your Startup</Button>
  </NuxtLink>
  </div>
  <p class="text-md mt-3 dark:text-gray-400">Finding founders and startups actively raising fund</p>

    <div class="carousel flex space-x-6 overflow-x-auto py-6">
      
      <div v-for="venue in venues" class="flex-none w-[500px]  max-w-none rounded-lg shadow-lg bg-white dark:bg-gray-800">
       <div class="flex">
        <img :src="venue.img" alt="Venue" class="rounded-t-lg object-cover w-full h-[300px]" />
        <Badge v-if="venue.sponsorshipOption" variant="secondary" class="absolute top-3 right-3">Sponsorship Available</Badge>

        <Avatar class=" mt-40 w-24 h-24  z-30">
            <AvatarImage :src="venues.avatar" alt="Profile" />
            <AvatarFallback>XX</AvatarFallback>
          </Avatar>
        </div>
        <div class="p-8">
          <h5 class="text-2xl font-bold text-gray-900 dark:text-white">{{ venue.name }}</h5>
          <p class="text-base text-gray-700 dark:text-gray-300 mt-2">Company: {{ venue.company }}</p>
          <p class="text-base text-gray-700 dark:text-gray-300 mt-2">Industry: {{ venue.industry }}</p>
          <p class="text-base text-gray-700 dark:text-gray-300 mt-2">Stage: {{ venue.stage }}</p>
          <p class="text-base text-gray-700 dark:text-gray-300 mt-2">Location: {{ venue.location }}</p>

          <p class="text-base text-gray-700 dark:text-gray-300 mt-2">Description: {{ venue.description }}</p>

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