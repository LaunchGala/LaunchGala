
<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Home, ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <section class="px-4 py-16 bg-white dark:bg-black">
    <div class="mx-8 my-8">
      <div class="mb-10 text-center">
        <!-- <Home class="mx-auto mb-4 h-8 w-8 text-gray-700 dark:text-gray-300" /> -->
        <h2 class="text-3xl font-bold tracking-tight text-gray-800 dark:text-white">Frequently asked questions</h2>
        <p class="mt-3 text-lg text-gray-500 dark:text-gray-400">
          Can't find the answer you're looking for? Reach out to our 
          <a href="#" class="font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">customer support</a> team.
        </p>
      </div>

      <Accordion type="single" collapsible class="divide-y divide-gray-200 dark:divide-gray-700">
        <AccordionItem value="item-1">
          <AccordionTrigger class="flex justify-between p-5 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
            What payment methods do you accept?
          </AccordionTrigger>
          <AccordionContent class="px-5 py-3 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
            We accept all major credit cards, as well as PayPal and bank transfers.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger class="flex justify-between p-5 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
            How secure is my personal information?
          </AccordionTrigger>
          <AccordionContent class="px-5 py-3 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
            We take your privacy very seriously and implement a variety of security measures to protect your personal information.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger class="flex justify-between p-5 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-800 dark:focus:bg-gray-800">
            Do you offer refunds?
          </AccordionTrigger>
          <AccordionContent class="px-5 py-3 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
            Yes, we have a 30-day refund policy. If you're not satisfied with your purchase, please contact us for a refund or exchange.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
</template>
