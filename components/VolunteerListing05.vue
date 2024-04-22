
<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GlobeIcon, LinkedinIcon, MapPinIcon, UserIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="min-h-screen bg-gray-200 dark:bg-black flex items-center justify-center p-4">
    <Card class="max-w-4xl w-full bg-white dark:bg-gray-900 shadow-xl rounded-lg overflow-hidden">
      <CardHeader class="bg-gradient-to-r from-orange-600 to-orange-400 p-6 flex flex-col items-center text-white">
        <button>
        <Avatar class="mb-4 w-24 h-24 ring-4 ring-white">
          <AvatarImage src="/placeholder.svg" alt="Volunteer Name" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <CardTitle class="text-2xl font-bold">Volunteer Name</CardTitle>
        <span class="text-m opacity-90">Software Engineer</span>
    </button>
        <div class="flex items-center mt-2">
          <MapPinIcon class="w-5 h-5" />
          <span class="ml-2 font-semibold">San Francisco, CA</span>
        </div>
        <div variant="light" class="mt-3 px-4 py-1 rounded text-white text-s font-normal bg-opacity-20">Available for Travel</div>
      </CardHeader>
      <CardContent class="p-6">
        <p class="text-gray-700 dark:text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, velit semper laoreet dictum, quam diam dictum urna, nec placerat elit nisl in quam.
        </p>
        <div class="mb-6 flex gap-2 flex-wrap">
          <span class="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Community</span>
          <span class="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Mentorship</span>
          <span class="bg-pink-100 dark:bg-pink-800 text-pink-800 dark:text-pink-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Development</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex items-center text-gray-700 dark:text-gray-300">
            <GlobeIcon class="w-5 h-5"/>
            <a href="https://portfolio.example.com" class="ml-2 hover:underline">portfolio.example.com</a>
          </div>
          <div class="flex items-center text-gray-700 dark:text-gray-300">
            <LinkedinIcon class="w-5 h-5"/>
            <a href="https://linkedin.com/in/volunteername" class="ml-2 hover:underline">linkedin.com/in/volunteername</a>
          </div>
        </div>
        <div class="flex justify-between mt-8">
          <Button class="flex items-center justify-center px-8 py-3 rounded-md bg-orange-500 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500  text-white">
            Edit
          </Button>
          <Button class="flex items-center justify-center px-8 py-3 rounded-md bg-orange-500 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500  text-white">
            Publish
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
