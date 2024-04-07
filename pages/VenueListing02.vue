
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

const selectedStyle = ref('');

// Handlers for handling click events
const selectStyle = style => {
  selectedStyle.value = style;
};

const isSelected = style => {
  return selectedStyle.value === style;
};
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Select Venue Style</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button 
              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
              :class="{ 'shadow-lg': isSelected('office') }"
              @click="selectStyle('office')"
            >
              <img src="/placeholder.svg" alt="Office" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Office</span>
            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
              :class="{ 'shadow-lg': isSelected('museum') }"
              @click="selectStyle('museum')"
            >
              <img src="/placeholder.svg" alt="Museum" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Museum</span>
            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
              :class="{ 'shadow-lg': isSelected('gallery') }"
              @click="selectStyle('gallery')"
            >
              <img src="/placeholder.svg" alt="Gallery" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Gallery</span>
            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
              :class="{ 'shadow-lg': isSelected('office') }"
              @click="selectStyle('office')"
            >
              <img src="/placeholder.svg" alt="Office" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Office</span>
            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
              :class="{ 'shadow-lg': isSelected('office') }"
              @click="selectStyle('office')"
            >
              <img src="/placeholder.svg" alt="Office" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Office</span>
            </button>
            <button 
              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
              :class="{ 'shadow-lg': isSelected('office') }"
              @click="selectStyle('office')"
            >
              <img src="/placeholder.svg" alt="Office" class="w-20 h-20 mb-2">
              <span class="text-sm font-semibold">Office</span>
            </button>
            <!-- Additional categories would go here -->
          </div>
        </CardContent>
        <div class="flex justify-between p-4">
          <Button as-child variant="default">
            <a href="#" class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </a>
          </Button>
          <Progress :model-value="33" class="w-1/2" />
          <Button as-child variant="default">
            <a href="#" class="flex items-center">
              Next
              <ArrowRight class="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>
