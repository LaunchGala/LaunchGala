
<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Progress } from '@/components/ui/progress';
import { Ticket, UserCheck, Users } from 'lucide-vue-next'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';


const props = defineProps(['event']);
</script>

<template>
    <div class="bg-white dark:bg-orange-200 min-h-screen py-10">
    <TooltipProvider>
      <div class="container mx-auto px-4 lg:px-8 dark:bg-orange-200 ">
        <Card>

  <Card class="dark:bg-black bg-orange-100 text-gray-800 dark:text-white p-12 space-y-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-8">
    <CardContent>
      <h2 class="text-2xl font-bold text-center  text-orange-600 dark:text-orange-400">Event's Description</h2>
      <div class="text-md text-center mb-6 text-orange-600 dark:text-orange-400">Tell us about your Event</div>

      <div class="grid gap-6">
        <div>
            <Label class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300" for="event-title">Event Title</Label>

          <Input v-model="props.event.title" type="text" placeholder="Enter event name" class="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-4" />
        </div>
        <div>
            <Label class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300" for="event-description">Description</Label>

          <Textarea v-model="props.event.description" placeholder="Add event description" class="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-4" rows="4" />
        </div>
        <div>
            <Label class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300" for="event-agenda">Agenda</Label>

          <Textarea v-model="props.event.agenda" placeholder="Add event's agenda" class="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-4" rows="4" />
        </div>
        <div>
            <Label class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300" for="event-link">Event Link</Label>

          <Input v-model="props.event.link" type="url" placeholder="Add event link (optional)" class="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-4" />
        </div>
        <div>
            <Label class="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300" for="event-link">Event Images</Label>

            <ImageUploader :image-names="props.event?.images"/>
        </div>
      </div>
    </CardContent>
    <CardFooter class="flex justify-center space-x-4">
      <Button variant="ghost" class="text-orange-500 hover:underline hover:bg-transparent hover:text-orange-700">Not sure yet? You can add/edit all information later. Skip this step</Button>
      <!-- <Button class="bg-orange-500 hover:bg-orange-600 text-white dark:hover:bg-orange-700 dark:bg-orange-600">Create Event</Button> -->
    </CardFooter>
  </Card>


  <div class="flex justify-between items-center p-4">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="30" class=" text-white "  />
          <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
            <div  class="flex items-center">
              Next
              <ArrowRight class="w-4 h-4 ml-2" />
            </div>
          </Button>
        </div>
        </Card>
      </div>
    </TooltipProvider>
  </div>
</template>
