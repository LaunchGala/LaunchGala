
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
          <Input type="text" placeholder="Enter event name" class="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-4" />
        </div>
        <div>
          <Textarea placeholder="Add event description" class="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-4" rows="4" />
        </div>
        <div>
          <Textarea placeholder="Add event's agenda" class="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-4" rows="4" />
        </div>
        <div>
          <Input type="url" placeholder="Add event link (optional)" class="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 px-4" />
        </div>
        <div>
          <div class="flex items-center justify-center w-full">
            <label class="flex w-full flex-col rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-12 text-center cursor-pointer hover:border-orange-500 dark:hover:border-orange-400">
              <div class="flex flex-col items-center justify-center">
                <svg class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7l6 6m0 0l6-6m-6 6v13m0-13l6-6m-6 6H3"></path></svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Click to upload</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
              </div>
              <input type="file" class="hidden" />
            </label>
          </div>
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
