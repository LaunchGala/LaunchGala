
<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Search } from 'lucide-vue-next'


</script>

<template>
  <section class="py-16 bg-gray-100 dark:bg-black">
    <div class="mx-8 text-center mb-12 flex justify-between">
      <h2 class=" text-2xl font-semibold mb-4  text-gray-700">Find Volunteers</h2>
      <Button variant="default" class="ButtonCol rounded-lg px-6 py-3 hover:bg-gray-300 transition-colors">Become a volunteer</Button>
      <!-- <p class="text-gray-600 dark:text-gray-400">Explore our volunteer categories</p> -->

    </div>
    <div class="flex justify-center gap-8 flex-wrap px-8">
      <div class="flex flex-col items-center justify-center w-60 h-60 bg-white rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 dark:bg-gray-800">
        <img src="/placeholder.svg" class="w-20 h-20 mb-4" alt="Admin Category"/>
        <span class="text-xl text-gray-800 dark:text-white">Administrative Support</span>
      </div>
      <div class="flex flex-col items-center justify-center w-60 h-60 bg-white rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 dark:bg-gray-800">
        <img src="/placeholder.svg" class="w-20 h-20 mb-4" alt="Tech Category"/>
        <span class="text-xl text-gray-800 dark:text-white">Tech Support</span>
      </div>
      <div class="flex flex-col items-center justify-center w-60 h-60 bg-white rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 dark:bg-gray-800">
        <img src="/placeholder.svg" class="w-20 h-20 mb-4" alt="Building Category"/>
        <span class="text-xl text-gray-800 dark:text-white">Logistics & Coordination</span>
      </div>
      <div class="flex flex-col items-center justify-center w-60 h-60 bg-white rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 dark:bg-gray-800">
        <img src="/placeholder.svg" class="w-20 h-20 mb-4" alt="Building Category"/>
        <span class="text-xl text-gray-800 dark:text-white">Catering & Hospitality</span>
      </div>
      <NuxtLink to="AllVolunteers">
      <div class="flex flex-col items-center justify-center w-60 h-60 bg-white rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2 dark:bg-gray-800">
        <img src="/placeholder.svg" class="w-20 h-20 mb-4" alt="More Category"/>
        <span class="text-xl text-gray-800 dark:text-white">More...</span>
      </div>
    </NuxtLink>
  </div>
  <div class="py-8 ml-10 mt-10">
    <NuxtLink to="AllVolunteers">
      <Button class="ButtonCol rounded-lg px-6 py-3 hover:bg-gray-300 transition-colors">
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
