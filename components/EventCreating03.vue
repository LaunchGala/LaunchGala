
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Ticket, UserCheck, Users } from 'lucide-vue-next'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { Progress } from '@/components/ui/progress';
import { BookCheck } from 'lucide-vue-next';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

</script>

<template>

<div class="bg-white dark:bg-orange-200 min-h-screen py-10">
    <TooltipProvider>
      <div class="container mx-auto px-4 lg:px-8 dark:bg-orange-200">
        <Card>
          <!-- <CardHeader>
            <CardTitle>What best describes your event: (Select one)</CardTitle>
          </CardHeader> -->
  <div class="bg-white dark:bg-orange-200 text-gray-800 dark:text-white p-8  rounded-lg shadow-lg max-w-lg mx-auto my-12 relative">
    <h2 class="text-2xl font-bold text-center mb-2">Are you selling tickets?</h2>
    <h3 class="text-md  text-center mb-8">This helps us match you with best options</h3>

    <div class="flex flex-col items-center space-y-8 dark:bg-orange-200 mt-8">
        <Button variant="default" class="w-full bg-orange-200 text-white flex justify-center items-center space-x-3 py-4 px-6 transition-transform transform hover:scale-105 z-20 relative -mt-4">
        <Ticket class="w-6 h-6 text-purple-500"/>
        <span>Sell Tickets</span>
      </Button>
      <Button variant="default" class="w-full bg-orange-200 text-white flex justify-center items-center space-x-3 py-4 px-6 transition-transform transform hover:scale-105 z-20 relative -mt-4">
        <UserCheck class="w-6 h-6 text-green-500"/>
        <span>Free Invite only 
            Event</span>
      </Button>
      <Button variant="default" class="w-full bg-orange-200 text-white flex justify-center items-center space-x-3 py-4 px-6 transition-transform transform hover:scale-105 z-20 relative -mt-4">
        <Users class="w-6 h-6 text-orange-500"/>
        <span>Free Public Event</span>
      </Button>
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

