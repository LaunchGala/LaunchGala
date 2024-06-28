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

const eventTypes = [
  { name: 'Hackathon', icon: Code },
  { name: 'Networking Event', icon: SmilePlus },
  { name: 'Pitching event', icon: TrendingUp },
  { name: 'Dinner event', icon: ChefHat },
  { name: 'Sales expo', icon: Briefcase },
  { name: 'Conference', icon: MicIcon },
  { name: 'Seminar & workshop', icon: LightbulbIcon },
  { name: 'Product launch', icon: RocketIcon },
  { name: 'Corporate meetings & retreats', icon: PieChart },
  { name: 'Panel discussions & roundtables', icon: TheaterIcon },
  { name: 'Award ceremony & Gala', icon: Trophy },
  { name: 'Job fair & career expo', icon: SquareUser },
  { name: 'Academic conference', icon: GraduationCap },
  { name: 'Investor & funding meetup', icon: DollarSignIcon },
  { name: 'Startup accelerator & incubator', icon: BarChart3 },
  { name: 'Industry-specific summit', icon: Globe },
  { name: 'Press conference', icon: CameraIcon },
  { name: 'Executive & leadership forum', icon: Crown },
  { name: 'Publishing & signing event', icon: BookCheck },
  { name: 'Art show & exhibition', icon: Palette },
];
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <TooltipProvider>
      <div class="container mx-auto px-4 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Type of Events to host at this venue: (Select all applicable)</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Tooltip v-for="event in eventTypes" :key="event.name">
                <TooltipTrigger as-child>
                  <label 
                    @click="addEventTypes(event.name)" 
                    class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md" 
                    :class="{ 'bg-orange-100': props.venueListing.eventType.includes(event.name), 'bg-white': !props.venueListing.eventType.includes(event.name) }"
                  >
                    <component :is="event.icon" class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">{{ event.name }}</span>
                  </label>
                </TooltipTrigger>
              </Tooltip>
            </div>
          </CardContent>
          <div class="flex justify-between items-center p-4">
            <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
              <div class="flex items-center">
                <ArrowLeft class="w-4 h-4 mr-2" />
                Back
              </div>
            </Button>
            <Progress :model-value="30" class="text-white" />
            <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
              <div class="flex items-center">
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
