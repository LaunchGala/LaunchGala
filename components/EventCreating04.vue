
<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select'
import { format } from 'date-fns'
import { Globe } from 'lucide-vue-next'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Ticket, UserCheck, Users } from 'lucide-vue-next'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

const dateRange = ref({ start: null, end: null })
const startTime = ref('')
const endTime = ref('')
const timeZones = [
    { value: 'UTC', label: 'UTC - Coordinated Universal Time' },
    { value: 'EST', label: 'EST - Eastern Standard Time (New York)' },
    { value: 'CST', label: 'CST - Central Standard Time (Chicago)' },
    { value: 'MST', label: 'MST - Mountain Standard Time (Denver)' },
    { value: 'PST', label: 'PST - Pacific Standard Time (Los Angeles)' },
    // Add all other time zones with their cities here
]
const selectedTimeZone = ref('')
</script>

<template>

<div class="bg-orange-200 min-h-screen py-10">
    <TooltipProvider>
      <div class="container mx-auto px-4 lg:px-8 dark:bg-orange-200 ">
          <Card>
            <h2 class="text-2xl font-bold text-center mb-4 mt-2">When is the Event?</h2>
            <span class="text-md text-center block">Select the date and time for your event</span>
  <div class="dark:bg-black bg-orange-100 text-gray-800 dark:text-white p-8 space-y-4 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
    <div class="grid gap-4 sm:grid-cols-2">
      <div>
        <span class="text-md font-semibold">Start Date & Time</span>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline" class="w-full justify-between bg-white">
              <span>{{ dateRange.start ? format(dateRange.start, "PPP") : "Choose" }}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <Calendar v-model="dateRange.start" />
          </PopoverContent>
        </Popover>
        <div class="mt-2 flex items-center rounded border border-gray-300 bg-white">
          <Input type="time" v-model="startTime" placeholder="HH:MM" class="w-full border-none bg-transparent pl-3 pr-2 text-gray-800 dark:text-white focus:ring-0" />
        </div>
      </div>
      <div>
        <span class="text-md font-semibold">End Date & Time</span>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline" class="w-full justify-between bg-white">
              <span>{{ dateRange.end ? format(dateRange.end, "PPP") : "Choose" }}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <Calendar v-model="dateRange.end" />
          </PopoverContent>
        </Popover>
        <div class="mt-2 flex items-center rounded border border-gray-300 bg-white">
          <Input type="time" v-model="endTime" placeholder="HH:MM" class="w-full border-none bg-transparent pl-3 pr-2 text-gray-800 dark:text-white focus:ring-0" />
        </div>
      </div>
    </div>
    <div class="mt-6">
      <span class="text-md font-semibold">Time Zone</span>
      <Select v-model="selectedTimeZone" class="mt-2 mb-4">
        <SelectTrigger class="w-full justify-between rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
          <SelectValue class="pl-3 pr-10 py-2 text-left">
            {{ selectedTimeZone || "Select time zone" }}
          </SelectValue>
          <Globe class="w-5 h-5 mr-2" />
        </SelectTrigger>
        <SelectContent>
          <template v-for="zone in timeZones" :key="zone.value">
            <SelectItem :value="zone.value">
              {{ zone.label }}
            </SelectItem>
          </template>
        </SelectContent>
      </Select>
    </div>
    <div class="grid grid-cols-1 gap-4">
      <!-- <Button class="w-full text-white bg-orange-500 hover:bg-orange-600">Confirm</Button> -->
      <Button variant="link" class="text-orange-600 hover:text-orange-700 dark:text-orange-500 dark:hover:text-orange-400">Not sure yet? You can add/edit date later. 
        <div >Skip this step</div></Button>
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
