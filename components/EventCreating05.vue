
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
import AddressSelection from './AddressSelection.vue'

const props = defineProps(['event']);
const cities = ['San Francisco', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Austin']
const selectedCity = ref('')
const updateAddress = (newAddress: string) => {
  props.event.location = newAddress
}
</script>

<template>
    <div class=" dark:bg-orange-200 min-h-screen py-10 bg-orange-200">
    <TooltipProvider>
      <div class="container mx-auto px-4 lg:px-8 dark:bg-orange-200 ">
        <Card>
            <h2 class="text-2xl font-bold text-center mb-4  text-black mt-2">Event's Location</h2>
            <div class="text-md text-center mb-6 text-black ">Address or city is your event taking place?</div>
  <div class="dark:bg-black bg-orange-100 text-gray-800 dark:text-white p-8 space-y-4 rounded-lg shadow-lg ml-8 mr-8 mx-auto mt-8">
    <h2 class="text-xl font-bold text-left mb-2  text-black ">Address or City</h2>

    <div class="space-y-6">
      <div>
        <AddressSelection v-model:address="props.event.location" @update-address="updateAddress"/>
      </div>
      <!-- <Button class="w-full bg-orange-500 hover:bg-orange-600 text-white dark:hover:bg-orange-700 dark:bg-orange-600">Create Event</Button> -->
    </div>
  </div>

  <div class="flex justify-between items-center p-4">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="50" class=" text-white "  />
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
