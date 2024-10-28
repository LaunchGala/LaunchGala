
<script setup lang="ts">
import { ref } from 'vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ChevronDown, XCircle } from 'lucide-vue-next'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Ticket, UserCheck, Users } from 'lucide-vue-next'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

const props = defineProps(['event']);
const cities = ['San Francisco', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Austin']
const selectedCity = ref('')
</script>

<template>
    <div class=" dark:bg-orange-200 min-h-screen py-10 bg-orange-200">
    <TooltipProvider>
      <div class="container mx-auto px-4 lg:px-8 dark:bg-orange-200 ">
        <Card>
            <h2 class="text-2xl font-bold text-center mb-4  text-black mt-2">Event's Location</h2>
            <div class="text-md text-center mb-6 text-black ">In which city is your event taking place?</div>
  <div class="dark:bg-black bg-orange-100 text-gray-800 dark:text-white p-8 space-y-4 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
    <h2 class="text-xl font-bold text-left mb-2  text-black ">City</h2>

    <div class="space-y-6">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger class=" mb-4 w-full rounded-md border border-gray-300 dark:border-orange-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
            <span>{{ selectedCity || 'Select your city' }}</span>
            <ChevronDown class="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </DropdownMenuTrigger>
          <DropdownMenuContent class="rounded-md border border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg py-1">
            <DropdownMenuItem v-for="city in cities" :key="city" @click="props.event.location = city">
              {{ city }}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="selectedCity = ''" class="hover:bg-orange-200 dark:hover:bg-orange-700">
              <XCircle class="mr-2 text-orange-500 dark:text-orange-300" />Other
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <!-- <Button class="w-full bg-orange-500 hover:bg-orange-600 text-white dark:hover:bg-orange-700 dark:bg-orange-600">Create Event</Button> -->
      <Button variant="ghost" class="w-full text-orange-500 hover:underline hover:bg-transparent hover:text-orange-700">Not sure yet? You can add/edit location later. Skip this step</Button>
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
