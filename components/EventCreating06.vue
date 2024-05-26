
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

const industry = 
[
    'Software Development', 'Artificial Intelligence (AI)', 'Machine Learning (ML)', 'Internet of Things (IoT)', 
    'Augmented Reality (AR)/Virtual Reality (VR)', 'Cybersecurity', 'Blockchain', 'Cloud Computing', 
    'Big Data Analytics', 'Quantum Computing', 'Information Technology Services', 'Computer Hardware', 
    'Telecommunications', 'Consumer Electronics', 'Fintech', 'Insurtech', 'Cryptocurrency & NFT', 
    'Wealth Management', 'Crowdfunding', 'Banking', 'Insurance', 'Investment', 'Stock Markets', 
    'Digital Health', 'Telemedicine', 'Biotechnology', 'Medical Devices', 'Healthcare IT', 'Personalized Medicine', 
    'Health and Wellness', 'Hospitals', 'Pharmaceuticals', 'Clinical Laboratories', 'Medical Practices', 
    'Renewable Energy', 'Clean Tech', 'Energy Storage', 'Smart Grids', 'Environmental Services', 
    'Oil and Gas', 'Coal', 'Nuclear Energy', 'Educational Technology (Edtech)', 'E-learning', 'Learning Management Systems (LMS)', 
    'Corporate Training', 'Primary Education', 'Secondary Education', 'Higher Education', 
    'Vocational Training', 'Agricultural Technology (Agtech)', 'Sustainable Agriculture', 'Food Technology', 
    'Precision Farming', 'Crop Production', 'Livestock Farming', 'Agricultural Equipment', 'E-commerce', 
    'Direct-to-Consumer (DTC)', 'Subscription Services', 'Health and Wellness Products', 'Personal Fitness Technology', 
    'Retail', 'Consumer Products', 'Apparel and Footwear', 'Gaming', 'Digital Media', 
    'Streaming', 'Content Creation', 'Television Broadcasting', 'Film Production', 'Radio Broadcasting', 
    'Autonomous Vehicles', 'Electric Vehicles (EV)', 'Ride-sharing', 'Logistics Technology', 'Supply Chain Innovation', 
    'Automotive', 'Aerospace', 'Railways', 'Property Technology (Proptech)', 'Real Estate Crowdfunding', 'Smart Home Technology', 
    'Residential Real Estate', 'Commercial Real Estate', 'Property Management', 'Travel Technology', 'Hotel Management', 
    'Online Travel Agencies', 'Event Planning', 'Hospitality', 'Restaurants', 'Travel Services', 
    '3D Printing', 'Robotics', 'Industrial IoT', 'Supply Chain Management', 'Textile Manufacturing', 'Metalworks', 
    'Chemical Processing', 'Legal Technology (Legal Tech)', 'Regulatory Technology (Regtech)', 'Compliance', 
    'Intellectual Property', 'Law', 'Corporate Law', 'Regulatory Affairs', 
    'Cybersecurity Services', 'Physical Security', 'Personal Safety', 'Home Automation', 
    'Security Services', 'Private Investigation', 'Human Resources Technology (HR Tech)', 'Talent Acquisition', 
    'Freelance Marketplaces', 'Remote Work', 'Staffing', 'Payroll Services', 
    'Digital Marketing', 'Customer Relationship Management (CRM)', 'Social Media Management', 
    'Branding and Design', 'Advertising', 'Public Relations', 'Market Research', 
    'Non-profit Management', 'Social Impact', 'Community Service', 'Charitable Organizations', 
    'Community Foundations', 'Social Services', 'Space Technology', 'Drone Technology', 'Wearable Technology', 
    'Urban Technology', 'Aviation', 'Urban Development', 'Other'
]

</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <TooltipProvider>
      <div class="container mx-auto px-4 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>What best describes your event: (Select all applicable)</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Tooltip>
                <TooltipTrigger as-child>
                  <label @click="addEventTypes('Hackathon')" class="flex flex-col items-center p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md" 
                    :class="{ 'bg-orange-100': props.venueListing.eventType.includes('Hackathon'), 'bg-white': !props.venueListing.eventType.includes('Hackathon') }">
                    <Code class="w-6 h-6 mb-2 text-orange-500" />
                    <span class="text-lg font-semibold mb-1">Software Development</span>
                    <!-- <span class="text-sm dark:text-gray-300">On-site parking or valet service</span> -->
                  </label>
                </TooltipTrigger>
                <!-- <TooltipContent>
                  High-speed wireless internet connectivity.
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
