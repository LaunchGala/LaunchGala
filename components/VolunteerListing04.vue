
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight } from 'lucide-vue-next';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { Progress } from '@/components/ui/progress';


const props = defineProps(['volunteerListing']);
console.log(props.volunteerListing);
</script>

<template>
  <div class="dark:bg-black min-h-screen py-10 flex justify-center items-center">
    <div class="w-full max-w-4xl mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Tell us more about you</CardTitle>
          <CardDescription>Why are you volunteering or any additional skills and experiences </CardDescription>
        </CardHeader>
        <CardContent class="space-y-6">
          <!-- <Input v-model="props.volunteerListing.title" placeholder="Venue Name" class="w-full px-4 py-2 border rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500" /> -->
          <Textarea v-model="props.volunteerListing.volunteerDescription" placeholder="Write a short paragraph" rows="4" class="w-full px-4 py-2 border rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"></Textarea>
        </CardContent>
        <div class="flex justify-between items-center p-4">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="100" />
          <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
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
