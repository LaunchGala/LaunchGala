
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Home, Building, Image, BookOpen, Globe, Search, Users, GraduationCap, Camera, HotelIcon, Palette, Castle, Landmark, Theater, Wine, Sun, Medal, Briefcase, Store, Plus } from 'lucide-vue-next';
import { Hotel } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const isOpen = ref(false);
const volunteerTags = ref([])



function addVolunteerTag(volunteerTag: string) {
  if (props.volunteerListing.volunteerTags.includes(volunteerTag)) {
    props.volunteerListing.volunteerTags = props.volunteerListing.volunteerTags.filter((item) => item !== volunteerTag);
  } else {
    props.volunteerListing.volunteerTags.push(volunteerTag);
  }
  console.log(props.volunteerListing.volunteerTags);


}


function openStateChange(state: boolean) {
  isOpen.value = state;
}

const props = defineProps(['volunteerListing']);
console.log(props.volunteerListing);

const mainSubSelectors = [
  {
    main: 'Event Management and Coordination',
    icon: Building,
    subs: [
      'Event Planning and Scheduling',
      'On-Site Event Coordination',
      'Speaker & Participant Coordination',
      'Vendor Coordination',
      'Accounting and Bookkeeping',
      'Event Wrap-Up and Debriefing',
    ],
  },
  {
    main: 'Technical Support and IT',
    icon: Building,
    subs: [
      'Audio/Visual Equipment Operation',
      'IT Support and Troubleshooting',
      'Live Streaming and Webinar Tech',
      'Lighting and Sound Engineering',
      'Software & Application Assistance',
      'Photography and Videography',
    ],
  },
  {
    main: 'Hospitality and Guest Services',
    icon: Building,
    subs: [
      'Welcome & Information Desk',
      'Mixologist & Barista',
      'Culinary skills',
      'Lounge and VIP Area Management',
      'Special Requests and Concierge Services',
      'Coat Check and Cloakroom Management',
    ],
  },  
  {
    main: 'Technical Support and IT',
    icon: Building,
    subs: [
      'Event Planning and Scheduling',
      'On-Site Event Coordination',
      'Speaker & Participant Coordination',
      'Vendor Coordination',
      'Accounting and Bookkeeping',
      'Event Wrap-Up and Debriefing',
    ],
  },
  {
    main: 'Technical Support and IT',
    icon: Building,
    subs: [
      'Event Planning and Scheduling',
      'On-Site Event Coordination',
      'Speaker & Participant Coordination',
      'Vendor Coordination',
      'Accounting and Bookkeeping',
      'Event Wrap-Up and Debriefing',
    ],
  },
]

</script>

<template>

  <div v-if="isOpen" class="fixed w-screen h-screen top-0 bg-black bg-opacity-50 dark:bg-opacity-70" />
  <div class="bg-white  min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>

          <CardTitle>Select Volunteers Categories: (Select all categories you want to volunteer for)</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <MainSubSelector v-for="mainSubSelector in mainSubSelectors" :mainSubSelector="mainSubSelector" :key="mainSubSelector.main" :volunteer-listing="props.volunteerListing"/>



            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Logistics and Setup'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Logistics and Setup') }"
              @click="addVolunteerTag('Logistics and Setup')"
            >
            <div class="m-3 cursor-pointer">
              <Building class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>             
             <span class="text-sm font-semibold">Logistics and Setup</span>
             <!-- <span class="text-sm dark:text-gray-300">Handling event setup and logistics</span> -->

            </button>


          </PopoverTrigger>
          
          <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
          >
    
          <div>
            <ul class="p-8 space-y-8">
              
              <div class="text-l font-semibold text-orange-500">Logistics and Setup:</div>
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
    
              <li @click="addVolunteerTag('Venue Layout and Design')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Venue Layout and Design'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Venue Layout and Design') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Venue Layout and Design
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <!-- <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Signage and Directions Setup
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li> -->
                <li @click="addVolunteerTag('Staging and Decoration')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Staging and Decoration'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Staging and Decoration') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Staging and Decoration
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Equipment and Furniture Setup')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Equipment and Furniture Setup'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Equipment and Furniture Setup') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Equipment and Furniture Setup
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Transport and Delivery Coordination')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Transport and Delivery Coordination'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Transport and Delivery Coordination') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Transport and Delivery Coordination
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Post-Event Clean-Up and Teardown')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Post-Event Clean-Up and Teardown'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Post-Event Clean-Up and Teardown') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Post-Event Clean-Up and Teardown
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold items-center justify-items-center align-item-center content-center ">
              <div  class="flex items-center">
                Save
                <ArrowRight class="w-4 h-4 ml-2" />
              </div>
            </Button>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Security and Safety'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Security and Safety') }"
              @click="addVolunteerTag('Security and Safety')"
            >
            <div class="m-3 cursor-pointer">
              <Home class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Security and Safety</span>
                          <!-- <span class="text-sm dark:text-gray-300">Maintaining event security and safety</span> -->

            </button>


          </PopoverTrigger>
          
          <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
          >
    
          <div>
            <ul class="p-8 space-y-8">
              
              <div class="text-l font-semibold text-orange-500">Security and Safety:</div>
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
    
              <li @click="addVolunteerTag('Entrance and Exit Supervision')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Entrance and Exit Supervision'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Entrance and Exit Supervision') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Entrance and Exit Supervision
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Bag and Luggage Checks')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Bag and Luggage Checks'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Bag and Luggage Checks') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Bag and Luggage Checks
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Emergency Evacuation Support')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Emergency Evacuation Support'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Emergency Evacuation Support') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Emergency Evacuation Support
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Crowd Control and Line Management')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Crowd Control and Line Management'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Crowd Control and Line Management') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Crowd Control and Line Management
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold items-center justify-items-center align-item-center content-center ">
              <div  class="flex items-center">
                Save
                <ArrowRight class="w-4 h-4 ml-2" />
              </div>
            </Button>
                
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Health and Medical Services'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Health and Medical Services') }"
              @click="addVolunteerTag('Health and Medical Services')"
            >
            <div class="m-3 cursor-pointer">
              <Search class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Health and Medical Services</span>
                          <!-- <span class="text-sm dark:text-gray-300">Offering health care and first aid</span> -->

            </button>


          </PopoverTrigger>
          
          <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
          >
    
          <div>
            <ul class="p-8 space-y-8">
              
              <div class="text-l font-semibold text-orange-500">Health and Medical Services:</div>
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
    
              <li @click="addVolunteerTag('First Aid and Basic Health Care')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('First Aid and Basic Health Care'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('First Aid and Basic Health Care') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    First Aid and Basic Health Care
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Medical Emergency Response')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Medical Emergency Response'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Medical Emergency Response') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Medical Emergency Response
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Wellness and Relaxation services')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Wellness and Relaxation services'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Wellness and Relaxation services') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Wellness and Relaxation services
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

                <li @click="addVolunteerTag('Hygiene and Sanitation services')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Hygiene and Sanitation services'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Hygiene and Sanitation services') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Hygiene and Sanitation services
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold items-center justify-items-center align-item-center content-center ">
              <div  class="flex items-center">
                Save
                <ArrowRight class="w-4 h-4 ml-2" />
              </div>
            </Button>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Media and Communication'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Media and Communication') }"
              @click="addVolunteerTag('Media and Communication')"
            >
            <div class="m-3 cursor-pointer">
              <Users class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Media and Communication</span>
                          <!-- <span class="text-sm dark:text-gray-300">Handling press and event communications</span> -->

            </button>


          </PopoverTrigger>
          
          <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
          >
    
          <div>
            <ul class="p-8 space-y-8">
              
              <div class="text-l font-semibold text-orange-500">Media and Communication:</div>
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
    
              <li @click="addVolunteerTag('Press and Media Relations')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Press and Media Relations'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Press and Media Relations') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Press and Media Relations
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Social Media Coordination')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Social Media Coordination'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Social Media Coordination') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Social Media Coordination
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Content Creation and Blogging')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Content Creation and Blogging'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Content Creation and Blogging') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Content Creation and Blogging
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Public Relations and Outreach')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Public Relations and Outreach'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Public Relations and Outreach') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Public Relations and Outreach
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

                <li @click="addVolunteerTag('Interview and Testimonial Gathering')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Interview and Testimonial Gathering'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Interview and Testimonial Gathering') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Interview and Testimonial Gathering
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold items-center justify-items-center align-item-center content-center ">
              <div  class="flex items-center">
                Save
                <ArrowRight class="w-4 h-4 ml-2" />
              </div>
            </Button>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Language Interpretation and Translation'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Language Interpretation and Translation') }"
              @click="addVolunteerTag('Language Interpretation and Translation')"
            >
            <div class="m-3 cursor-pointer">
              <Briefcase class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Language Interpretation and Translation</span>
                          <!-- <span class="text-sm dark:text-gray-300">Interpretation and translation services</span> -->

            </button>


          </PopoverTrigger>
          
          <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
          >
    
          <div>
            <ul class="p-8 space-y-8">
              
              <div class="text-l font-semibold text-orange-500">Language Interpretation and Translation:</div>
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
    

              <li @click="addVolunteerTag('Simultaneous Interpretation')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Simultaneous Interpretation'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Simultaneous Interpretation') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Simultaneous Interpretation
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

                <li @click="addVolunteerTag('Document and Material Translation')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Document and Material Translation'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Document and Material Translation') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Document and Material Translation
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Sign Language Interpretation')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Sign Language Interpretation'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Sign Language Interpretation') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Sign Language Interpretation
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Multilingual Assistance')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Multilingual Assistance'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Multilingual Assistance') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Multilingual Assistance
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold items-center justify-items-center align-item-center content-center ">
              <div  class="flex items-center">
                Save
                <ArrowRight class="w-4 h-4 ml-2" />
              </div>
            </Button>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Entertainment and Performers'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Entertainment and Performers') }"
              @click="addVolunteerTag('Entertainment and Performers')"
            >
            <div class="m-3 cursor-pointer">
              <Globe class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Entertainment and Performers</span>
                          <!-- <span class="text-sm dark:text-gray-300">Providing entertainment and engaging attendees</span> -->

            </button>


          </PopoverTrigger>
          
          <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
          >
    
          <div>
            <ul class="p-8 space-y-8">
              
              <div class="text-l font-semibold text-orange-500">Entertainment and Performers:</div>
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
    
              <li @click="addVolunteerTag('Stage Performers and Artists')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Stage Performers and Artists'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Stage Performers and Artists') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Stage Performers and Artists
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Composers & DJs')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Composers & DJs'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Composers & DJs') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Composers & DJs 
                                <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Audience Engagement and Interaction')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Audience Engagement and Interaction'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Audience Engagement and Interaction') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Audience Engagement and Interaction
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Workshop and Activity Leaders')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Workshop and Activity Leaders'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Workshop and Activity Leaders') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Workshop and Activity Leaders
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold items-center justify-items-center align-item-center content-center ">
              <div  class="flex items-center">
                Save
                <ArrowRight class="w-4 h-4 ml-2" />
              </div>
            </Button>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Educational and Speakers'), 'bg-lg': props.volunteerListing.volunteerTags.includes('Educational and Speakers') }"
              @click="addVolunteerTag('Educational and Speakers')"
            >
            <div class="m-3 cursor-pointer">
              <theater class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Educational and Speakers</span>
                          <!-- <span class="text-sm dark:text-gray-300">Supporting educational speakers and content</span> -->

            </button>


          </PopoverTrigger>
          
          <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
          >
    
          <div>
            <ul class="p-8 space-y-8">
              
              <div class="text-l font-semibold text-orange-500">Educational and Speakers:</div>
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
    

              <li @click="addVolunteerTag('Educational Workshop Assistants')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Educational Workshop Assistants'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Educational Workshop Assistants') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Educational Workshop Assistants
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Guest Speaker Support')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Guest Speaker Support'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Guest Speaker Support') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Guest Speaker Support
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Training Session Helpers')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Training Session Helpers'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Training Session Helpers') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Training Session Helpers
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Educational Material Distribution')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Educational Material Distribution'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Educational Material Distribution') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Educational Material Distribution
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold items-center justify-items-center align-item-center content-center ">
              <div  class="flex items-center">
                Save
                <ArrowRight class="w-4 h-4 ml-2" />
              </div>
            </Button>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Special Needs Assistance'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Special Needs Assistance') }"
              @click="addVolunteerTag('Special Needs Assistance')"
            >
            <div class="m-3 cursor-pointer">
              <Landmark class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Special Needs Assistance</span>
                          <!-- <span class="text-sm dark:text-gray-300">Supporting attendees with special needs</span> -->

            </button>


          </PopoverTrigger>
          
          <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
          >
    
          <div>
            <ul class="p-8 space-y-8">
              
              <div class="text-l font-semibold text-orange-500">Special Needs Assistance:</div>
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
    
              <li @click="addVolunteerTag('Accessibility Services')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Accessibility Services'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Accessibility Services') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Accessibility Services
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Personal Assistance for Disabled Attendees')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Personal Assistance for Disabled Attendees'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Personal Assistance for Disabled Attendees') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Personal Assistance for Disabled Attendees
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Accessible Services Information')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Accessible Services Information'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Accessible Services Information') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Accessible Services Information
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Special Equipment Handling')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Special Equipment Handling'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Special Equipment Handling') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Special Equipment Handling
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold items-center justify-items-center align-item-center content-center ">
              <div  class="flex items-center">
                Save
                <ArrowRight class="w-4 h-4 ml-2" />
              </div>
            </Button>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Customer Service and Information'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Customer Service and Information') }"
              @click="addVolunteerTag('Customer Service and Information')"
            >
            <div class="m-3 cursor-pointer">
              <graduation-cap class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Customer Service and Information</span>
                          <!-- <span class="text-sm dark:text-gray-300">Providing information and customer support</span> -->

            </button>


          </PopoverTrigger>
          
          <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
          >
    
          <div>
            <ul class="p-8 space-y-8">
              
              <div class="text-l font-semibold text-orange-500">Customer Service and Information:</div>
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
    
              <li @click="addVolunteerTag('General Customer Service')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('General Customer Service'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('General Customer Service') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    General Customer Service
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Lost and Found Services')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Lost and Found Services'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Lost and Found Services') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Lost and Found Services
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('VIP and Special Guests Services')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('VIP and Special Guests Services'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('VIP and Special Guests Services') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    VIP and Special Guests Services
                                <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Transportation and Parking services')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Transportation and Parking services'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Transportation and Parking services') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Transportation and Parking services
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold items-center justify-items-center align-item-center content-center ">
              <div  class="flex items-center">
                Save
                <ArrowRight class="w-4 h-4 ml-2" />
              </div>
            </Button>

              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Marketing and Promotion'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Marketing and Promotion') }"
              @click="addVolunteerTag('Marketing and Promotion')"
            >
            <div class="m-3 cursor-pointer">
              <BookOpen class="w-10 h-10 text-orange-500 hover:text-orange-300 " />
            </div>
                          <span class="text-sm font-semibold">Marketing and Promotion</span>
                          <!-- <span class="text-sm dark:text-gray-300">Promoting and marketing the event</span> -->

            </button>


          </PopoverTrigger>
          
          <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
          >
    
          <div>
            <ul class="p-8 space-y-8">
              
              <div class="text-l font-semibold text-orange-500">Marketing and Promotion:</div>
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
    
              <li @click="addVolunteerTag('Promotional Material Distribution')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Promotional Material Distribution'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Promotional Material Distribution') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Promotional Material Distribution
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Brand Ambassadors and Advocates')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Brand Ambassadors and Advocates'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Brand Ambassadors and Advocates') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Brand Ambassadors and Advocates
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Survey and Feedback Collection')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Survey and Feedback Collection'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Survey and Feedback Collection') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Survey and Feedback Collection
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

                <li @click="addVolunteerTag('Event Photography and Sharing')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Event Photography and Sharing'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Event Photography and Sharing') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Event Photography and Sharing
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Social Media marketing')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Social Media marketing'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Social Media marketing') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Social Media marketing
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold items-center justify-items-center align-item-center content-center ">
              <div  class="flex items-center">
                Save
                <ArrowRight class="w-4 h-4 ml-2" />
              </div>
            </Button>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Fundraising and Sponsorship'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Fundraising and Sponsorship') }"
              @click="addVolunteerTag('Fundraising and Sponsorship')"
            >
            <div class="m-3 cursor-pointer">
              <Castle class="w-10 h-10 text-orange-500 hover:text-orange-300 "/>
            </div>
                          <span class="text-sm font-semibold">Fundraising and Sponsorship</span>
                          <!-- <span class="text-sm dark:text-gray-300">Raising funds and managing sponsorships</span> -->

            </button>


          </PopoverTrigger>
          
          <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
          >
    
          <div>
            <ul class="p-8 space-y-8">
              
              <div class="text-l font-semibold text-orange-500">Fundraising and Sponsorship:</div>
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
    
              <li @click="addVolunteerTag('Donation Collection and Management')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Donation Collection and Management'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Donation Collection and Management') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Donation Collection and Management
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Sponsor Liaison and Support')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Sponsor Liaison and Support'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Sponsor Liaison and Support') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Sponsor Liaison and Support
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Fundraising Event Assistants')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Fundraising Event Assistants'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Fundraising Event Assistants') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Fundraising Event Assistants
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Grant Application & Management Assistance')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Grant Application & Management Assistance'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Grant Application & Management Assistance') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Grant Application & Management Assistance
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold items-center justify-items-center align-item-center content-center ">
              <div  class="flex items-center">
                Save
                <ArrowRight class="w-4 h-4 ml-2" />
              </div>
            </Button>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Legal and Compliance'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Legal and Compliance') }"
              @click="addVolunteerTag('Legal and Compliance')"
            >
            <div class="m-3 cursor-pointer">
              <wine class="w-10 h-10 text-orange-500 hover:text-orange-300"/>
            </div>
                          <span class="text-sm font-semibold">Legal and Compliance</span>
                          <!-- <span class="text-sm dark:text-gray-300">Ensuring legal compliance and risk management</span> -->

            </button>

          </PopoverTrigger>
          
          <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
          >
    
          <div>
            <ul class="p-8 space-y-8">
              
              <div class="text-l font-semibold text-orange-500">Legal and Compliance:</div>
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
    
              <li @click="addVolunteerTag('Contract Review and Management')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Contract Review and Management'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Contract Review and Management') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Contract Review and Management
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Risk Management and Safety Compliance')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Risk Management and Safety Compliance'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Risk Management and Safety Compliance') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Risk Management and Safety Compliance
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Regulatory and Standards Monitoring')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Regulatory and Standards Monitoring'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Regulatory and Standards Monitoring') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Regulatory and Standards Monitoring
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Legal Assistance and Advice')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes('Legal Assistance and Advice'), 'bg-lg': !props.volunteerListing.volunteerTags.includes('Legal Assistance and Advice') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Legal Assistance and Advice
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold items-center justify-items-center align-item-center content-center ">
              <div  class="flex items-center">
                Save
                <ArrowRight class="w-4 h-4 ml-2" />
              </div>
            </Button>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>
           
            <!-- Additional categories would go here -->
          </div>
        </CardContent>
        <div class="flex justify-between items-center p-4">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="10"  />
          <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
            <div  class="flex items-center">
              Next
              <ArrowRight class="w-4 h-4 ml-2" />
            </div>
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>
