
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight } from 'lucide-vue-next';
</script>

<template>
  <div class="dark:bg-black min-h-screen py-10 flex justify-center items-center">
    <div class="w-full max-w-4xl mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Title and Description</CardTitle>
          <CardDescription>Add a name and short description for your venue.</CardDescription>
        </CardHeader>
        <CardContent class="space-y-6">
          <Input placeholder="Venue Name" class="w-full px-4 py-2 border rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500" />
          <Textarea placeholder="Short description of the venue" rows="4" class="w-full px-4 py-2 border rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"></Textarea>
        </CardContent>
        <div class="flex justify-end p-4 space-x-4">
          <Button variant="outline" class="border-gray-300 text-gray-700 hover:text-gray-500 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white">
            <span>Cancel</span>
            <ChevronRight class="w-4 h-4 ml-2" />
          </Button>
          <Button>
            <span>Save</span>
            <ChevronRight class="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>
