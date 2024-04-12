
<script setup lang="ts">
import { ref } from 'vue';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const props = defineProps(['venueListing']);
console.log(props.venueListing);
</script>

<template>
  
  <div class="bg-white dark:bg-black min-h-screen py-10 flex justify-center items-center">
    <div class="w-full max-w-4xl mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Rental and Sponsorship Options</CardTitle>
          <CardDescription>Configure the rental payment settings and sponsorship option for your venue.</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 py-4">
            <div class="flex items-center space-x-3">
              <CardTitle>Enable Payment Option</CardTitle>
              <CardDescription>Allow users to rent the venue at an hourly rate.</CardDescription>
            </div>
            <Switch />
          </div>
          <div class="py-4">
            <Input placeholder="Hourly Price (e.g. $50/hour)" class="w-full border-gray-300 rounded-md dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"/>
          </div>
          <div class="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 py-4">
            <div class="flex items-center space-x-3">
              <CardTitle>Offer Venue for Sponsorship</CardTitle>
              <CardDescription>Provide the venue for events at no cost under sponsorship agreements.</CardDescription>
            </div>
            <Switch />
          </div>
        </CardContent>

        <div class="flex justify-between p-4">
          <Button @click="$emit('previousStep')" as-child variant="default">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="33" class="w-1/2" />
          <Button @click="$emit('nextStep')" as-child variant="default">
            <div  class="flex items-center">
              Next
              <ArrowRight class="w-4 h-4 ml-2" />
            </div>
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>
