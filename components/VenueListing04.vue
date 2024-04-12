
<script setup lang="ts">
import { ref } from 'vue';
import { Check, Wifi, Tv, Airplay, Sun, Coffee, Monitor, Speaker } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
const props = defineProps(['venueListing']);
console.log(props.venueListing);
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <TooltipProvider>
      <div class="container mx-auto px-4 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Select Amenities</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Tooltip>
                <TooltipTrigger as-child>
                  <label class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md">
                    <Checkbox id="wifi" class="sr-only" />
                    <Wifi class="w-6 h-6 mb-2 text-blue-500" />
                    <span class="text-lg font-semibold mb-1">Wi-Fi</span>
                    <span class="text-sm dark:text-gray-300">High-speed internet</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md">
                    <Checkbox id="tv" class="sr-only" />
                    <Tv class="w-6 h-6 mb-2 text-green-500" />
                    <span class="text-lg font-semibold mb-1">TV</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md">
                    <Checkbox id="ac" class="sr-only" />
                    <Airplay class="w-6 h-6 mb-2 text-blue-500" />
                    <span class="text-lg font-semibold mb-1">Projector</span>
                    <span class="text-sm dark:text-gray-300">HD Projector</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-definition projector for presentations.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md">
                    <Checkbox id="heat" class="sr-only" />
                    <Sun class="w-6 h-6 mb-2 text-yellow-500" />
                    <span class="text-lg font-semibold mb-1">Heating</span>
                    <span class="text-sm dark:text-gray-300">Adjustable thermostat</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Adjustable heating controls for your comfort.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md">
                    <Checkbox id="coffee" class="sr-only" />
                    <Coffee class="w-6 h-6 mb-2 text-brown-500" />
                    <span class="text-lg font-semibold mb-1">Coffee Machine</span>
                    <span class="text-sm dark:text-gray-300">Complimentary coffee</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  In-room coffee machine with complimentary coffee.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md">
                    <Checkbox id="monitor" class="sr-only" />
                    <Monitor class="w-6 h-6 mb-2 text-purple-500" />
                    <span class="text-lg font-semibold mb-1">Computer</span>
                    <span class="text-sm dark:text-gray-300">PC with internet access</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  Personal computer with internet access available.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger as-child>
                  <label class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer dark:border-gray-700 hover:shadow-md focus-within:shadow-md">
                    <Checkbox id="audio" class="sr-only" />
                    <Speaker class="w-6 h-6 mb-2 text-red-500" />
                    <span class="text-lg font-semibold mb-1">Sound System</span>
                    <span class="text-sm dark:text-gray-300">High-quality audio</span>
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  High-quality sound system for entertainment or presentations.
                </TooltipContent>
              </Tooltip>
            </div>
          </CardContent>
          <div class="flex justify-between p-4">
          <Button @click="$emit('previousStep')" as-child variant="default">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="33" class="w-1/2" />
          <Button @click="$emit('nextStep')" as-child variant="default">
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
