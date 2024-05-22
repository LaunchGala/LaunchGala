
<script setup lang="ts">
import { ref } from 'vue';
import { Check, Wifi, Tv, Airplay, Sun, Coffee, Monitor, Speaker, Car, Bus, Shield, Network, Crown, Refrigerator, Microwave, ArrowUpDown, Martini, ChefHat, ShowerHead, Book, DoorClosed, Sofa, Code, DollarSign, GraduationCap, MicIcon, UserCircle2, DollarSignIcon , SmilePlus, Briefcase, Trophy, UsersRoundIcon, GitGraphIcon, Utensils, CameraIcon, SquareUser, Globe, Palette, TrendingUp, RocketIcon, BarChart3, PieChart } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { AudioLinesIcon } from 'lucide-vue-next';
import { Mic } from 'lucide-vue-next';
import { ResetIcon, SpeakerLoudIcon } from '@radix-icons/vue';
import { Mic2Icon } from 'lucide-vue-next';
import { TheaterIcon } from 'lucide-vue-next';
import { Tv2 } from 'lucide-vue-next';
import { LightbulbIcon } from 'lucide-vue-next';
import { RockingChairIcon } from 'lucide-vue-next';
import { AirVentIcon } from 'lucide-vue-next';
import { AccessibilityIcon } from 'lucide-vue-next';
import { WifiIcon } from 'lucide-vue-next';
import { DivideIcon } from 'lucide-vue-next';
import { Home } from 'lucide-vue-next';
import { BedIcon } from 'lucide-vue-next';
import { FlagIcon } from 'lucide-vue-next';
import { AlarmSmokeIcon } from 'lucide-vue-next';
import { DoorOpenIcon } from 'lucide-vue-next';
import { GamepadIcon } from 'lucide-vue-next';
import { Fish } from 'lucide-vue-next';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { Progress } from '@/components/ui/progress';
import { BookCheck } from 'lucide-vue-next';


const props = defineProps(['venueListing']);
console.log(props.venueListing);

function addEventTypes(eventTypes: string) {
  if (props.venueListing.eventType.includes(eventTypes)) {
    props.venueListing.eventType = props.venueListing.eventType.filter((item) => item !== eventTypes);
  } else {
    props.venueListing.eventType.push(eventTypes);
  }
  console.log(props.venueListing.eventType);
}


</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <TooltipProvider>
      <div class="container mx-auto px-4 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>What best describes your event: (Select one)</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Hackathon')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md" 
                    :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Hackathon'), 'bg-white': !props.venueListing.eventType.includes('Hackathon') }">
                    <Code class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Hackathon</span>
                    <!-- <span class="text-sm dark:text-gray-300">On-site parking or valet service</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Networking Event')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Networking Event'), 'bg-white': !props.venueListing.eventType.includes('Networking Event') }">
                    <!-- <Checkbox id="wifi" class="sr-only" /> -->
                    <smile-plus class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Networking Event</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Pitching event')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Pitching event'), 'bg-white': !props.venueListing.eventType.includes('Pitching event') }">
                    <!-- <Checkbox id="wifi" class="sr-only" /> -->
                    <trending-up class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Pitching event</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Dinner event')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Dinner event'), 'bg-white': !props.venueListing.eventType.includes('Dinner event') }">
                    <ChefHat class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Dinner event</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Sales expo')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Sales expo'), 'bg-white': !props.venueListing.eventType.includes('Sales expo') }">
                    <Briefcase class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Sales & Trade show</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <!-- <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Trade show')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Trade show'), 'bg-white': !props.venueListing.eventType.includes('Trade show') }">
                    <UsersRoundIcon class="w-6 h-6 mb-2 text-yellow-500" />
                    <span class="text-lg font-semibold mb-1">Trade show</span>
                    <span class="text-sm dark:text-gray-300">High-speed internet</span>
                  </label>
                </TooltipTrigger>

              </Tooltip> -->
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Conference')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Conference'), 'bg-white': !props.venueListing.eventType.includes('Conference') }">
                    <MicIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Conference</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Seminar & workshop')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Seminar & workshop'), 'bg-white': !props.venueListing.eventType.includes('Seminar & workshop') }">
                    <LightbulbIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Seminar & workshop</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Product launch')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Product launch'), 'bg-white': !props.venueListing.eventType.includes('Product launch') }">
                    <RocketIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Product launch</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Corporate meetings & retreats')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Corporate meetings & retreats'), 'bg-white': !props.venueListing.eventType.includes('Corporate meetings & retreats') }">
                    <pie-chart class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Corporate events & retreats</span>
                    <!-- <span class="text-sm dark:text-gray-300">High-speed internet</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
                </TooltipContent> -->
              </Tooltip>

              <!-- <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Training session')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Training session'), 'bg-white': !props.venueListing.eventType.includes('Training session') }">
                    <shower-head class="w-6 h-6 mb-2 text-blue-500" />
                    <span class="text-lg font-semibold mb-1">Training session</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
   
              </Tooltip> -->
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Panel discussions & roundtables')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Panel discussions & roundtables'), 'bg-white': !props.venueListing.eventType.includes('Panel discussions & roundtables') }">
                    <TheaterIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1 ">Panel & roundtables</span>
                    <!-- <span class="text-sm dark:text-gray-300">ramps or elevators</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Award ceremony & Gala')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Award ceremony & Gala'), 'bg-white': !props.venueListing.eventType.includes('Award ceremony & Gala') }">
                    <trophy class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Award ceremony & Gala</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Job fair & career expo')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Job fair & career expo'), 'bg-white': !props.venueListing.eventType.includes('Job fair & career expo') }">
                    <square-user class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Job fair & career expo</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Academic conference')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Academic conference'), 'bg-white': !props.venueListing.eventType.includes('Academic conference') }">
                    <GraduationCap class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Academic conference</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Investor & funding meetup')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Investor & funding meetup'), 'bg-white': !props.venueListing.eventType.includes('Investor & funding meetup') }">
                    <DollarSignIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Investor & funding meetup</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Startup accelerator & incubator')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Startup accelerator & incubator'), 'bg-white': !props.venueListing.eventType.includes('Startup accelerator & incubator') }">
                    <BarChart3 class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Startup accelerator & incubator</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <!-- <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Corporate event')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Corporate event'), 'bg-white': !props.venueListing.eventType.includes('Corporate event') }">
                    <Sun class="w-6 h-6 mb-2 text-yellow-500" />
                    <span class="text-lg font-semibold mb-1">Corporate event</span>
                    <span class="text-sm dark:text-gray-300">(e.g., gardens, terraces)</span>
                  </label>
                </TooltipTrigger>

              </Tooltip> -->
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Industry-specific summit')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Industry-specific summit'), 'bg-white': !props.venueListing.eventType.includes('Industry-specific summit') }">
                    <Globe class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Summit & Symposium</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Press conference')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Press conference'), 'bg-white': !props.venueListing.eventType.includes('Press conference') }">
                    <CameraIcon class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Press conference</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Executive & leadership forum')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Executive & leadership forum'), 'bg-white': !props.venueListing.eventType.includes('Executive & leadership forum') }">
                    <Crown class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Executive & leadership forum</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <!-- <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Symposium')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Symposium'), 'bg-white': !props.venueListing.eventType.includes('Symposium') }">
                    <AlarmSmokeIcon class="w-6 h-6 mb-2 text-red-500" />
                    <span class="text-lg font-semibold mb-1">Symposium</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>

              </Tooltip> -->
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Publishing & signing event')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Publishing & signing event'), 'bg-white': !props.venueListing.eventType.includes('Publishing & signing event') }">
                    <BookCheck class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Publishing & signing event</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
              </Tooltip>
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Art show & exhibition')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Art show & exhibition'), 'bg-white': !props.venueListing.eventType.includes('Art show & exhibition') }">
                    <Palette class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Art show & exhibition</span>
                    <!-- <span class="text-sm dark:text-gray-300">Satellite channels</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  Flat-screen TV with satellite channels.
                </TooltipContent> -->
             
                <!-- <TooltipContent>
                  High-quality sound system for entertainment or presentations.
                </TooltipContent> -->
              </Tooltip>
            </div>
            <CardFooter class="flex justify-center space-x-4 mt-8">
      <Button variant="ghost" class="text-orange-500 hover:underline hover:bg-transparent hover:text-orange-700">Not sure yet? You can add/edit all information later. Skip this step</Button>
      <!-- <Button class="bg-orange-500 hover:bg-orange-600 text-white dark:hover:bg-orange-700 dark:bg-orange-600">Create Event</Button> -->
    </CardFooter>
          </CardContent>
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
