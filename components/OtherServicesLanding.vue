
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
  <section class="py-16 bg-gray-100 dark:bg-black">
    <!-- Header and Description -->
    <div class="mb-10 text-center">
      <h2 class="text-2xl font-bold dark:text-white">We also help you with</h2>
      <p class="text-md mt-3 dark:text-gray-400">Finding speakers, media, influencers and vendors</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Home Party Card -->
      <Card as-child>
        <NuxtLink to="AllSpeakers">
        <a href="/home-party" class="block">
          <AspectRatio :ratio="16 / 9" class="rounded-t-lg overflow-hidden">
            <img src="/Launch_Gala_Logo-removebgHD.png" alt="Home Party" class="w-full h-full object-cover">
          </AspectRatio>
          <CardHeader>
            <Home class="w-5 h-5 dark:text-white" />
            <CardTitle class="text-lg dark:text-white">Speakers</CardTitle>
          </CardHeader>
          <CardContent class="dark:text-gray-400">
            Create an intimate event at your home.
          </CardContent>
        </a>
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
            <Check class="w-5 h-5 dark:text-white" />
            <CardTitle class="text-lg dark:text-white">Media & influencers</CardTitle>
          </CardHeader>
          <CardContent class="dark:text-gray-400">
            Organize your business conferences.
          </CardContent>
        </a>
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
            <User class="w-5 h-5 dark:text-white" />
            <CardTitle class="text-lg dark:text-white">Vendors</CardTitle>
          </CardHeader>
          <CardContent class="dark:text-gray-400">
            Plan confidential discussions.
          </CardContent>
        </a>
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
            <ArrowRight class="w-5 h-5 dark:text-white" />
            <CardTitle class="text-lg dark:text-white">Resources</CardTitle>
          </CardHeader>
          <CardContent class="dark:text-gray-400">
            Design and conduct workshops.
          </CardContent>
        </a>
      </NuxtLink>
      </Card>
    </div>
    <!-- <div class="mt-8 flex justify-center">
      <Button class="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">Explore events</Button>
    </div> -->
  </section>
</template>
