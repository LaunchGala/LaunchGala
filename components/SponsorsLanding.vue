
<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Search } from 'lucide-vue-next'


</script>

<template>


  <section class="mx-8 my-8 bg-white dark:bg-black">
    <div class="text-center mb-8 flex justify-between">
      <h2 class="text-2xl font-semibold   text-gray-700">Securing Sponsorship</h2>
      <!-- <p class="text-gray-600 dark:text-gray-400">Learn how to get companies to sponsor your events</p> -->
      <Button variant="default" class="ButtonCol  hover:bg-gray-300 transition-colors">Become a sponsor</Button>

    </div>
    <p class="text-md  dark:text-gray-400">Finding speakers, media, influencer, vendors & more</p>

    
    <div class="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
      <Card class="OrangeCol text-white">
        <CardHeader>
          <CardTitle class="font-bold">Startups</CardTitle>
          <CardDescription class="font-semibold text-gray-300">Sponsor new and innovative ideas.</CardDescription>
        </CardHeader>
        <CardContent>
          New tech startups tend to support grassroots efforts in exchange for exposure.
        </CardContent>
      </Card>
      <Card class="OrangeCol text-white">
        <CardHeader>
          <CardTitle class="font-bold">Local Businesses</CardTitle>
          <CardDescription class="font-semibold text-gray-300">Strengthen community ties.</CardDescription>
        </CardHeader>
        <CardContent>
          Local companies may be interested in events that contribute to local growth and presence.
        </CardContent>
      </Card>
      <Card class="OrangeCol text-white">
        <CardHeader>
          <CardTitle class="font-bold">Major Corporations</CardTitle>
          <CardDescription class="font-semibold text-gray-300">Large scale support.</CardDescription>
        </CardHeader>
        <CardContent>
          Big names can provide significant funds and added prestige to your event.
        </CardContent>
      </Card>
      <Card class="OrangeCol text-white">
        <CardHeader>
          <CardTitle class="font-bold">Alumni Networks</CardTitle>
          <CardDescription class="font-semibold text-gray-300">Foster loyalty.</CardDescription>
        </CardHeader>
        <CardContent>
          Tap into the goodwill of successful alumni who want to give back to their community.
        </CardContent>
      </Card>
    </div>
    <div class="py-8">
      <NuxtLink to="AllSponsors">
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
