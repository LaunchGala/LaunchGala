
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Ticket, UserCheck, Users } from 'lucide-vue-next'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { BookCheck } from 'lucide-vue-next';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const props = defineProps(['event']);

function setInviteOnly(value: boolean) {
  props.event.invite_only = value;
}
</script>

<template>

<div class="bg-orange-200 dark:bg-orange-200 min-h-screen py-10">
    <TooltipProvider>
      <div class="container mx-auto px-4 lg:px-8 dark:bg-orange-200">
        <Card>
          <!-- <CardHeader>
            <CardTitle>What best describes your event: (Select one)</CardTitle>
          </CardHeader> -->
  <div class="bg-orange-200 dark:bg-orange-200 text-gray-800 dark:text-white p-8  rounded-lg shadow-lg max-w-lg mx-auto my-12 relative">
    <h2 class="text-2xl font-bold text-center mb-2">Are you selling tickets?</h2>
    <h3 class="text-md  text-center mb-8">This helps us match you with best options</h3>

    <div class="flex flex-col items-center space-y-6 dark:bg-orange-200 mt-8">
      <div class="w-full items-center justify-between p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
        <h3 class="text-lg font-semibold">Ticket Price</h3>
        <div class="flex flex-row items-center">
          <span>$</span>
          <Input v-model="props.event.ticket_price" :preText="$" placeholder="Ticket Price (If the tickets are free, please enter 0)" class="w-full border-gray-300 rounded-md dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"/>
        </div>
      </div>
      <div class=" items-center justify-between p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <span class="text-lg font-semibold text-gray-900 dark:text-white mr-72 ">Invite Only</span>
              <Switch :default-checked="props.event.nonSmoking" @update:checked="setInviteOnly" id="displayPrice" />
              <div class=" text-sm text-gray-500 dark:text-gray-300">Event is invite only </div>
              
            </div>
    </div>
  </div>
  

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

