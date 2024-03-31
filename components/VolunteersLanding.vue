
<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

</script>

<template>
  <section class="py-16 bg-gray-100 dark:bg-black">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold mb-4">Find Volunteers</h2>
      <p class="text-gray-600 dark:text-gray-400">Explore our volunteer categories</p>
      <Button variant="default" class="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">Become a volunteer</Button>

    </div>
    <div class="flex justify-center gap-8 flex-wrap px-8">
      <div class="flex flex-col items-center justify-center w-72 h-72 bg-white rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 dark:bg-gray-800">
        <img src="/placeholder.svg" class="w-20 h-20 mb-4" alt="Admin Category"/>
        <span class="text-xl text-gray-800 dark:text-white">Admin</span>
      </div>
      <div class="flex flex-col items-center justify-center w-72 h-72 bg-white rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 dark:bg-gray-800">
        <img src="/placeholder.svg" class="w-20 h-20 mb-4" alt="Tech Category"/>
        <span class="text-xl text-gray-800 dark:text-white">Tech</span>
      </div>
      <div class="flex flex-col items-center justify-center w-72 h-72 bg-white rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 dark:bg-gray-800">
        <img src="/placeholder.svg" class="w-20 h-20 mb-4" alt="Building Category"/>
        <span class="text-xl text-gray-800 dark:text-white">Building</span>
      </div>
      <NuxtLink to="AllVolunteers">
      <div class="flex flex-col items-center justify-center w-72 h-72 bg-white rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 dark:bg-gray-800">
        <img src="/placeholder.svg" class="w-20 h-20 mb-4" alt="More Category"/>
        <span class="text-xl text-gray-800 dark:text-white">More...</span>
      </div>
    </NuxtLink>
    <div class="py-8">
      <NuxtLink to="AllVolunteers">
      <Button class="text-xl font-semibold bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition-colors">
        View All
        <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </NuxtLink>
    </div>
    </div>
    
  </section>

</template>
