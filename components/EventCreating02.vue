
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


const props = defineProps(['event']);
console.log(props.event);

function addevent_types(event_types: string) {
  props.event.event_type = event_types;
  console.log(props.event.event_type);
}


</script>

<template>
  <div class="bg-orange-200 dark:bg-black min-h-screen py-10">
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
                  <label @click="addevent_types('Hackathon')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md" 
                    :class="{ 'bg-orange-100': props.event?.event_type == 'Hackathon', 'bg-white': props.event?.event_type != 'Hackathon' }">
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
                  <label @click="addevent_types('Networking Event')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Networking Event', 'bg-white': props.event.event_type != 'Networking Event' }">
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
                  <label @click="addevent_types('Pitching event')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Pitching event', 'bg-white': props.event.event_type != 'Pitching event' }">
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
                  <label @click="addevent_types('Dinner event')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Dinner event', 'bg-white': props.event.event_type != 'Dinner event' }">
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
                  <label @click="addevent_types('Sales expo')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Sales expo', 'bg-white': props.event.event_type != 'Sales expo' }">
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
                  <label @click="addevent_types('Trade show')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Trade show'), 'bg-white': props.event.event_type != 'Trade show') }">
                    <UsersRoundIcon class="w-6 h-6 mb-2 text-yellow-500" />
                    <span class="text-lg font-semibold mb-1">Trade show</span>
                    <span class="text-sm dark:text-gray-300">High-speed internet</span>
                  </label>
                </TooltipTrigger>

              </Tooltip> -->
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addevent_types('Conference')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Conference', 'bg-white': props.event.event_type != 'Conference' }">
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
                  <label @click="addevent_types('Seminar & workshop')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Seminar & workshop', 'bg-white': props.event.event_type != 'Seminar & workshop' }">
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
                  <label @click="addevent_types('Product launch')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Product launch', 'bg-white': props.event.event_type != 'Product launch' }">
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
                  <label @click="addevent_types('Corporate meetings & retreats')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Corporate meetings & retreats', 'bg-white': props.event.event_type != 'Corporate meetings & retreats' }">
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
                  <label @click="addevent_types('Training session')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Training session'), 'bg-white': props.event.event_type != 'Training session') }">
                    <shower-head class="w-6 h-6 mb-2 text-blue-500" />
                    <span class="text-lg font-semibold mb-1">Training session</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>
   
              </Tooltip> -->
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addevent_types('Panel discussions & roundtables')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Panel discussions & roundtables', 'bg-white': props.event.event_type != 'Panel discussions & roundtables' }">
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
                  <label @click="addevent_types('Award ceremony & Gala')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Award ceremony & Gala', 'bg-white': props.event.event_type != 'Award ceremony & Gala' }">
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
                  <label @click="addevent_types('Job fair & career expo')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Job fair & career expo', 'bg-white': props.event.event_type != 'Job fair & career expo' }">
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
                  <label @click="addevent_types('Academic conference')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Academic conference', 'bg-white': props.event.event_type != 'Academic conference' }">
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
                  <label @click="addevent_types('Investor & funding meetup')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Investor & funding meetup', 'bg-white': props.event.event_type != 'Investor & funding meetup' }">
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
                  <label @click="addevent_types('Startup accelerator & incubator')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Startup accelerator & incubator', 'bg-white': props.event.event_type != 'Startup accelerator & incubator' }">
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
                  <label @click="addevent_types('Corporate event')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Corporate event'), 'bg-white': props.event.event_type != 'Corporate event') }">
                    <Sun class="w-6 h-6 mb-2 text-yellow-500" />
                    <span class="text-lg font-semibold mb-1">Corporate event</span>
                    <span class="text-sm dark:text-gray-300">(e.g., gardens, terraces)</span>
                  </label>
                </TooltipTrigger>

              </Tooltip> -->
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addevent_types('Industry-specific summit')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Industry-specific summit', 'bg-white': props.event.event_type != 'Industry-specific summit' }">
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
                  <label @click="addevent_types('Press conference')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Press conference', 'bg-white': props.event.event_type != 'Press conference' }">
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
                  <label @click="addevent_types('Executive & leadership forum')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Executive & leadership forum', 'bg-white': props.event.event_type != 'Executive & leadership forum' }">
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
                  <label @click="addevent_types('Symposium')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Symposium'), 'bg-white': props.event.event_type != 'Symposium') }">
                    <AlarmSmokeIcon class="w-6 h-6 mb-2 text-red-500" />
                    <span class="text-lg font-semibold mb-1">Symposium</span>
                    <span class="text-sm dark:text-gray-300">Satellite channels</span>
                  </label>
                </TooltipTrigger>

              </Tooltip> -->
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addevent_types('Publishing & signing event')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Publishing & signing event', 'bg-white': props.event.event_type != 'Publishing & signing event' }">
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
                  <label @click="addevent_types('Art show & exhibition')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer  hover:shadow-md focus-within:shadow-md focus-within:border-orange-500"
                  :class="{ 'bg-orange-100': props.event.event_type == 'Art show & exhibition', 'bg-white': props.event.event_type != 'Art show & exhibition' }">
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
          </CardContent>
          <div class="flex justify-between items-center p-4">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="12" class=" text-white "  />
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
