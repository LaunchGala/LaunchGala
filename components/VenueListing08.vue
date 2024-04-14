
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight } from 'lucide-vue-next';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

const props = defineProps(['venueListing']);
console.log(props.venueListing);
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
          <Input v-model="props.venueListing.title" placeholder="Venue Name" class="w-full px-4 py-2 border rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500" />
          <Textarea v-model="props.venueListing.description" placeholder="Short description of the venue" rows="4" class="w-full px-4 py-2 border rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"></Textarea>
        </CardContent>
        <div class="flex justify-between p-4">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="33" class="w-1/2" />
          <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold">
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
