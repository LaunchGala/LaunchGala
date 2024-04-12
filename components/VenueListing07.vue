
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, X } from 'lucide-vue-next';
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Upload Venue Images</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg mb-6">
            <Upload class="w-10 h-10 text-gray-400" />
            <p class="mt-4 text-sm text-gray-600">Drag and drop your images here, or <span class="text-blue-600 cursor-pointer">browse</span></p>
            <input type="file" multiple class="hidden" accept="image/*" />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            <div v-for="n in 5" :key="`image-placeholder-${n}`">
              <div class="w-full aspect-w-1 aspect-h-1">
                <img src="/placeholder.svg" alt="Venue placeholder" class="rounded-md object-cover"/>
                <div class="absolute top-2 right-2">
                  <Button variant="icon" class="p-1 bg-white bg-opacity-75 rounded-full">
                    <X class="w-4 h-4 text-gray-500" />
                  </Button>
                </div>
              </div>
            </div>
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
