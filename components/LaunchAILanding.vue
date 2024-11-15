
<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Home, Check, User, ArrowRight } from 'lucide-vue-next';
import { AspectRatio } from '@/components/ui/aspect-ratio';
</script>

<template>
  <section class="py-16  bg-gray-100 dark:bg-black">
    
    <!-- Header and Description -->
    <div class=" mx-8 mb-16 text-left">
      <h2 class="text-2xl font-semibold mb-4  text-gray-700">AI Agents Marketplace</h2>
      <p class="text-md mt-3 dark:text-gray-400">Find the best AI agents to help your startup</p>
    </div>

    <div class="grid mx-8 my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Home Party Card -->
      <Card as-child>
        <NuxtLink to="AllSpeakers">
        <a href="/home-party" class="block">
          <AspectRatio :ratio="16 / 9" class="rounded-t-lg overflow-hidden">
            <img src="/Launch_Gala_Logo-removebgHD.png" alt="Home Party" class="w-full h-full object-cover">
          </AspectRatio>
          <CardHeader>
            <!-- <Home class="w-5 h-5 dark:text-white" /> -->
            <CardTitle class="text-lg dark:text-white">Pitch deck creator & evaluator</CardTitle>
          </CardHeader>
          <CardContent class="dark:text-gray-400">
            Create or evolute your pitch deck with our advanced AI agent
                  </CardContent>
          
        </a>
        <Button class=" mt-2 ml-6 mr-12 mb-8 inline-flex items-center ButtonCol rounded-lg py-2 px-4 hover:bg-gray-200 transition-colors">
            Explore
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
      </NuxtLink>
      </Card>

      <!-- Corporate Event Card -->
      <Card as-child>
        <NuxtLink to="AllMedia">
        <a href="/corporate-event" class="block">
          <AspectRatio :ratio="16 / 9" class="rounded-t-lg overflow-hidden">
            <img src="/Launch_Gala_Logo-removebgHD.png" alt="Corporate Event" class="w-full h-full object-cover">
          </AspectRatio>
          <CardHeader>
            <!-- <Check class="w-5 h-5 dark:text-white" /> -->
            <CardTitle class="text-lg dark:text-white">Grants AI</CardTitle>
          </CardHeader>
          <CardContent class="dark:text-gray-400">
            AI to match and negotiate the best grants and loan for your startup
          </CardContent>
        </a>
        <Button class=" mt-2 ml-6 mr-12 mb-8 inline-flex items-center ButtonCol rounded-lg py-2 px-4 hover:bg-gray-200 transition-colors">
            Explore
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
      </NuxtLink>
      </Card>

      <!-- Private Meeting Card -->
      <Card as-child>
        <NuxtLink to="AllVendors">
        <a href="/private-meeting" class="block">
          <AspectRatio :ratio="16 / 9" class="rounded-t-lg overflow-hidden">
            <img src="/Launch_Gala_Logo-removebgHD.png" alt="Private Meeting" class="w-full h-full object-cover">
          </AspectRatio>
          <CardHeader>
            <!-- <User class="w-5 h-5 dark:text-white" /> -->
            <CardTitle class="text-lg dark:text-white">Vendors</CardTitle>
          </CardHeader>
          <CardContent class="dark:text-gray-400">
            Plan confidential discussions...................
          </CardContent>
        </a>
        <Button class=" mt-2 ml-6 mr-12 mb-8 inline-flex items-center ButtonCol rounded-lg py-2 px-4 hover:bg-gray-200 transition-colors">
            Explore
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
      </NuxtLink>
      </Card>

      <!-- Workshops Card -->
      <Card as-child>
        <NuxtLink to="AllResources">
        <a href="/workshops" class="block">
          <AspectRatio :ratio="16 / 9" class="rounded-t-lg overflow-hidden">
            <img src="/Launch_Gala_Logo-removebgHD.png" alt="Workshops" class="w-full h-full object-cover">
          </AspectRatio>
          <CardHeader>
            <!-- <ArrowRight class="w-5 h-5 dark:text-white" /> -->
            <CardTitle class="text-lg dark:text-white">Resources</CardTitle>
          </CardHeader>
          <CardContent class="dark:text-gray-400">
            Design and conduct workshops....................
          </CardContent>
        </a>
        <Button class=" mt-2 ml-6 mr-12 mb-8 inline-flex items-center ButtonCol rounded-lg py-2 px-4 hover:bg-gray-200 transition-colors">
            Explore
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
      </NuxtLink>
      </Card>
    </div>
    <div class="pl-8">
      <NuxtLink to="AllEvents">
        <Button class="ButtonCol rounded-lg px-6 py-3 hover:bg-gray-200 transition-colors">
        View All
        <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </NuxtLink>
    </div>
  </section>
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