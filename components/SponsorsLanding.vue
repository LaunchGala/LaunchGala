
<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

</script>

<template>


  <section class="py-16 bg-white dark:bg-black">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold mb-4">Securing Sponsorship</h2>
      <p class="text-gray-600 dark:text-gray-400">Learn how to get companies to sponsor your events</p>
      <Button variant="default" class="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700">Become a sponsor</Button>

    </div>

    
    <div class="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Startups</CardTitle>
          <CardDescription>Sponsor new and innovative ideas.</CardDescription>
        </CardHeader>
        <CardContent>
          New tech startups tend to support grassroots efforts in exchange for exposure.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Local Businesses</CardTitle>
          <CardDescription>Strengthen community ties.</CardDescription>
        </CardHeader>
        <CardContent>
          Local companies may be interested in events that contribute to local growth and presence.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Major Corporations</CardTitle>
          <CardDescription>Large scale support.</CardDescription>
        </CardHeader>
        <CardContent>
          Big names can provide significant funds and added prestige to your event.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Alumni Networks</CardTitle>
          <CardDescription>Foster loyalty.</CardDescription>
        </CardHeader>
        <CardContent>
          Tap into the goodwill of successful alumni who want to give back to their community.
        </CardContent>
      </Card>
    </div>
    <div class="py-8">
      <NuxtLink to="AllSponsors">
      <Button class="text-xl font-semibold bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition-colors">
        View All
        <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </NuxtLink>
    </div>

  </section>
</template>
