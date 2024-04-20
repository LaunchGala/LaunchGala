
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

const selectedType = ref('');
const isOpen = ref(false);
const volunteerTags = ref([])

const supabase = useSupabaseClient()

const user = useSupabaseUser()



function addVolunteerTag(volunteerTag: string) {
  if (volunteerTags.value.includes(volunteerTag)) {
    volunteerTags.value = volunteerTags.value.filter((item) => item !== volunteerTag);
  } else {
    volunteerTags.value.push(volunteerTag);
  }
  console.log(volunteerTags.value);


}

function saveDbVolunteers() {
  supabase.from('AllVolunteers').insert([
    {
      volunteerTags: volunteerTags.value,
      createdBy: user.value?.id
    }
  ]).then(response => {
    console.log(response)
  }).catch(error => {
    console.log(error)
  })
}

// Handlers for handling click events
function selectType(type: string) {
  selectedType.value = type;
  props.venueListing.venueType = type;
  console.log(selectedType.value);
};

function openStateChange(state: boolean) {
  isOpen.value = state;
}

const props = defineProps(['venueListing']);
console.log(props.venueListing);
</script>

<template>
    <Button @click="saveDbVolunteers" class=" text-l ml-14 mt-6 bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold" >Save</Button>

  <div v-if="isOpen" class="fixed w-screen h-screen top-0 bg-black bg-opacity-50 dark:bg-opacity-70" />
  <div class="bg-white  min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>

          <CardTitle>Select Volunteers Categories: (Select all categories you want to volunteer for)</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg "
              :class="{ 'bg-orange-200': volunteerTags.includes('Event Management and Coordination'), 'bg-lg': !volunteerTags.includes('Event Management and Coordination') }"

              @click="addVolunteerTag('Event Management and Coordination')"
            >
            <div class="m-3 cursor-pointer">
              <store class="w-10 h-10 text-orange-500 hover:text-orange-300 " />
            </div>
                          <span class="text-sm font-semibold">Event Management and Coordination</span>
              <!-- <span class="text-sm dark:text-gray-300">Organizing and facilitating event activities</span> -->

            </button>
          </PopoverTrigger>
          
      <PopoverContent 
        class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
        align="start"
        justify="center"
      >

      <div>
        <ul class="p-6 space-y-8">
          
          <div class="text-l font-bold text-orange-500">Event Management & Coordination:</div>
          <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
          <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>

            <li @click="addVolunteerTag('Event Planning and Scheduling')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Event Planning and Scheduling'), 'bg-lg': !volunteerTags.includes('Event Planning and Scheduling') }" 
            >
              
              <Plus class="w-5 h-5 text-orange-500 " />

              <label  class="flex-1 cursor-pointer text-sm font-semibold"               
             
>
                Event Planning and Scheduling
         <Check class="w-4 h-4 text-orange-500" />
              </label>
            </li>
            <li @click="addVolunteerTag('On-Site Event Coordination')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('On-Site Event Coordination'), 'bg-lg': !volunteerTags.includes('On-Site Event Coordination') }" 
            >              <Plus class="w-5 h-5 text-orange-500 " />

              <label  class="flex-1 cursor-pointer text-sm font-semibold">
                On-Site Event Coordination
        <Check class="w-4 h-4 text-orange-500" />
              </label>
            </li>
            <li @click="addVolunteerTag('Speaker & Participant Coordination')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Speaker & Participant Coordination'), 'bg-lg': !volunteerTags.includes('Speaker & Participant Coordination') }" 
            >              <Plus class="w-5 h-5 text-orange-500 " />

              <label  class="flex-1 cursor-pointer text-sm font-semibold">
                Speaker & Participant Coordination
        <Check class="w-4 h-4 text-orange-500" />
              </label>
            </li>
            <li @click="addVolunteerTag('Vendor Coordination')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Vendor Coordination'), 'bg-lg': !volunteerTags.includes('Vendor Coordination') }" 
            >              <Plus class="w-5 h-5 text-orange-500 " />

              <label  class="flex-1 cursor-pointer text-sm font-semibold">
                Vendor Coordination
         <Check class="w-4 h-4 text-orange-500" />
              </label>
            </li>
            <li @click="addVolunteerTag('Accounting and Bookkeeping')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Accounting and Bookkeeping'), 'bg-lg': !volunteerTags.includes('Accounting and Bookkeeping') }" 
            >              <Plus class="w-5 h-5 text-orange-500 " />

              <label  class="flex-1 cursor-pointer text-sm font-semibold">
                Accounting and Bookkeeping
         <Check class="w-4 h-4 text-orange-500" />
              </label>
            </li>

            <!-- <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
              <Plus class="w-5 h-5 text-orange-500 " />

              <label  class="flex-1 cursor-pointer text-sm font-semibold">
                Event Wrap-Up and Debriefing
         <Check class="w-4 h-4 text-orange-500" />
              </label>
            </li> -->
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
              :class="{ 'bg-orange-200': volunteerTags.includes('Technical Support and IT'), 'bg-lg': !volunteerTags.includes('Technical Support and IT') }"
              @click="addVolunteerTag('Technical Support and IT')"
            >
            <div class="m-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-orange-500 hover:text-orange-300 " width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
            </div>
                          <span class="text-sm font-semibold">Technical Support and IT</span>
                          <!-- <span class="text-sm dark:text-gray-300">Providing tech and audiovisual support</span> -->

            </button>


          </PopoverTrigger>
          
          <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
          >
    
          <div>
            <ul class="p-8 space-y-8">
              
              <div class="text-l font-semibold text-orange-500">Technical Support and IT:</div>
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
    
              <li @click="addVolunteerTag('Audio/Visual Equipment Operation')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Audio/Visual Equipment Operation'), 'bg-lg': !volunteerTags.includes('Audio/Visual Equipment Operation') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Audio/Visual Equipment Operation
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('IT Support and Troubleshooting')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('IT Support and Troubleshooting'), 'bg-lg': !volunteerTags.includes('IT Support and Troubleshooting') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    IT Support and Troubleshooting
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Live Streaming and Webinar Tech')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Live Streaming and Webinar Tech'), 'bg-lg': !volunteerTags.includes('Live Streaming and Webinar Tech') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Live Streaming and Webinar Tech
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Lighting and Sound Engineering')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Lighting and Sound Engineering'), 'bg-lg': !volunteerTags.includes('Lighting and Sound Engineering') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Lighting and Sound Engineering
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Software & Application Assistance')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Software & Application Assistance'), 'bg-lg': !volunteerTags.includes('Software & Application Assistance') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Software & Application Assistance
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Photography and Videography')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Photography and Videography'), 'bg-lg': !volunteerTags.includes('Photography and Videography') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Photography and Videography
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
              :class="{ 'bg-orange-200': volunteerTags.includes('Hospitality and Guest Services'), 'bg-lg': !volunteerTags.includes('Hospitality and Guest Services') }"
              @click="addVolunteerTag('Hospitality and Guest Services')"
            >
            <div class="m-3 cursor-pointer">
              <Palette class="w-10 h-10 text-orange-500 hover:text-orange-300" />
            </div>
                          <span class="text-sm font-semibold">Hospitality and Guest Services</span>
                          <!-- <span class="text-sm dark:text-gray-300">Food, drink, and accommodations services</span> -->

            </button>



          </PopoverTrigger>
          
          <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
          >
    
          <div>
            <ul class="p-8 space-y-8">
              
              <div class="text-l font-semibold text-orange-500">Hospitality and Guest Services:</div>
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
    
              <li @click="addVolunteerTag('Welcome Desk and Information')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Welcome Desk and Information'), 'bg-lg': !volunteerTags.includes('Welcome Desk and Information') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Welcome Desk and Information
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Mixologist & Barista')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Mixologist & Barista'), 'bg-lg': !volunteerTags.includes('Mixologist & Barista') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Mixologist & Barista
                                <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Culinary skills')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Culinary skills'), 'bg-lg': !volunteerTags.includes('Culinary skills') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Culinary skills
                                <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Lounge and VIP Area Management')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Lounge and VIP Area Management'), 'bg-lg': !volunteerTags.includes('Lounge and VIP Area Management') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Lounge and VIP Area Management
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Special Requests and Concierge Services')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Special Requests and Concierge Services'), 'bg-lg': !volunteerTags.includes('Special Requests and Concierge Services') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Special Requests and Concierge Services
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Coat Check and Cloakroom Management')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Coat Check and Cloakroom Management'), 'bg-lg': !volunteerTags.includes('Coat Check and Cloakroom Management') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Coat Check and Cloakroom Management
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
              :class="{ 'bg-orange-200': volunteerTags.includes('Logistics and Setup'), 'bg-lg': !volunteerTags.includes('Logistics and Setup') }"
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
            :class="{ 'bg-orange-200': volunteerTags.includes('Venue Layout and Design'), 'bg-lg': !volunteerTags.includes('Venue Layout and Design') }" 
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
            :class="{ 'bg-orange-200': volunteerTags.includes('Staging and Decoration'), 'bg-lg': !volunteerTags.includes('Staging and Decoration') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Staging and Decoration
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Equipment and Furniture Setup')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Equipment and Furniture Setup'), 'bg-lg': !volunteerTags.includes('Equipment and Furniture Setup') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Equipment and Furniture Setup
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Transport and Delivery Coordination')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Transport and Delivery Coordination'), 'bg-lg': !volunteerTags.includes('Transport and Delivery Coordination') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Transport and Delivery Coordination
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Post-Event Clean-Up and Teardown')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Post-Event Clean-Up and Teardown'), 'bg-lg': !volunteerTags.includes('Post-Event Clean-Up and Teardown') }" 
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
              :class="{ 'bg-orange-200': volunteerTags.includes('Security and Safety'), 'bg-lg': !volunteerTags.includes('Security and Safety') }"
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
            :class="{ 'bg-orange-200': volunteerTags.includes('Entrance and Exit Supervision'), 'bg-lg': !volunteerTags.includes('Entrance and Exit Supervision') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Entrance and Exit Supervision
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Bag and Luggage Checks')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Bag and Luggage Checks'), 'bg-lg': !volunteerTags.includes('Bag and Luggage Checks') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Bag and Luggage Checks
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Emergency Evacuation Support')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Emergency Evacuation Support'), 'bg-lg': !volunteerTags.includes('Emergency Evacuation Support') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Emergency Evacuation Support
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Crowd Control and Line Management')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Crowd Control and Line Management'), 'bg-lg': !volunteerTags.includes('Crowd Control and Line Management') }" 
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
              :class="{ 'bg-orange-200': volunteerTags.includes('Health and Medical Services'), 'bg-lg': !volunteerTags.includes('Health and Medical Services') }"
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
            :class="{ 'bg-orange-200': volunteerTags.includes('First Aid and Basic Health Care'), 'bg-lg': !volunteerTags.includes('First Aid and Basic Health Care') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    First Aid and Basic Health Care
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Medical Emergency Response')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Medical Emergency Response'), 'bg-lg': !volunteerTags.includes('Medical Emergency Response') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Medical Emergency Response
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Wellness and Relaxation services')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Wellness and Relaxation services'), 'bg-lg': !volunteerTags.includes('Wellness and Relaxation services') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Wellness and Relaxation services
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

                <li @click="addVolunteerTag('Hygiene and Sanitation services')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Hygiene and Sanitation services'), 'bg-lg': !volunteerTags.includes('Hygiene and Sanitation services') }" 
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
              :class="{ 'bg-orange-200': volunteerTags.includes('Media and Communication'), 'bg-lg': !volunteerTags.includes('Media and Communication') }"
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
            :class="{ 'bg-orange-200': volunteerTags.includes('Press and Media Relations'), 'bg-lg': !volunteerTags.includes('Press and Media Relations') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Press and Media Relations
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Social Media Coordination')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Social Media Coordination'), 'bg-lg': !volunteerTags.includes('Social Media Coordination') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Social Media Coordination
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Content Creation and Blogging')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Content Creation and Blogging'), 'bg-lg': !volunteerTags.includes('Content Creation and Blogging') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Content Creation and Blogging
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Public Relations and Outreach')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Public Relations and Outreach'), 'bg-lg': !volunteerTags.includes('Public Relations and Outreach') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Public Relations and Outreach
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

                <li @click="addVolunteerTag('Interview and Testimonial Gathering')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Interview and Testimonial Gathering'), 'bg-lg': !volunteerTags.includes('Interview and Testimonial Gathering') }" 
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
              :class="{ 'bg-orange-200': volunteerTags.includes('Language Interpretation and Translation'), 'bg-lg': !volunteerTags.includes('Language Interpretation and Translation') }"
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
            :class="{ 'bg-orange-200': volunteerTags.includes('Simultaneous Interpretation'), 'bg-lg': !volunteerTags.includes('Simultaneous Interpretation') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Simultaneous Interpretation
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

                <li @click="addVolunteerTag('Document and Material Translation')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Document and Material Translation'), 'bg-lg': !volunteerTags.includes('Document and Material Translation') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Document and Material Translation
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Sign Language Interpretation')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Sign Language Interpretation'), 'bg-lg': !volunteerTags.includes('Sign Language Interpretation') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Sign Language Interpretation
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Multilingual Assistance')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Multilingual Assistance'), 'bg-lg': !volunteerTags.includes('Multilingual Assistance') }" 
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
              :class="{ 'bg-orange-200': volunteerTags.includes('Entertainment and Performers'), 'bg-lg': !volunteerTags.includes('Entertainment and Performers') }"
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
            :class="{ 'bg-orange-200': volunteerTags.includes('Stage Performers and Artists'), 'bg-lg': !volunteerTags.includes('Stage Performers and Artists') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Stage Performers and Artists
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Composers & DJs')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Composers & DJs'), 'bg-lg': !volunteerTags.includes('Composers & DJs') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Composers & DJs 
                                <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Audience Engagement and Interaction')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Audience Engagement and Interaction'), 'bg-lg': !volunteerTags.includes('Audience Engagement and Interaction') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Audience Engagement and Interaction
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Workshop and Activity Leaders')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Workshop and Activity Leaders'), 'bg-lg': !volunteerTags.includes('Workshop and Activity Leaders') }" 
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
              :class="{ 'bg-orange-200': volunteerTags.includes('Educational and Speakers'), 'bg-lg': volunteerTags.includes('Educational and Speakers') }"
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
            :class="{ 'bg-orange-200': volunteerTags.includes('Educational Workshop Assistants'), 'bg-lg': !volunteerTags.includes('Educational Workshop Assistants') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Educational Workshop Assistants
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Guest Speaker Support')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Guest Speaker Support'), 'bg-lg': !volunteerTags.includes('Guest Speaker Support') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Guest Speaker Support
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Training Session Helpers')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Training Session Helpers'), 'bg-lg': !volunteerTags.includes('Training Session Helpers') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Training Session Helpers
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Educational Material Distribution')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Educational Material Distribution'), 'bg-lg': !volunteerTags.includes('Educational Material Distribution') }" 
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
              :class="{ 'bg-orange-200': volunteerTags.includes('Special Needs Assistance'), 'bg-lg': !volunteerTags.includes('Special Needs Assistance') }"
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
            :class="{ 'bg-orange-200': volunteerTags.includes('Accessibility Services'), 'bg-lg': !volunteerTags.includes('Accessibility Services') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Accessibility Services
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Personal Assistance for Disabled Attendees')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Personal Assistance for Disabled Attendees'), 'bg-lg': !volunteerTags.includes('Personal Assistance for Disabled Attendees') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Personal Assistance for Disabled Attendees
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Accessible Services Information')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Accessible Services Information'), 'bg-lg': !volunteerTags.includes('Accessible Services Information') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Accessible Services Information
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Special Equipment Handling')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Special Equipment Handling'), 'bg-lg': !volunteerTags.includes('Special Equipment Handling') }" 
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
              :class="{ 'bg-orange-200': volunteerTags.includes('Customer Service and Information'), 'bg-lg': !volunteerTags.includes('Customer Service and Information') }"
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
            :class="{ 'bg-orange-200': volunteerTags.includes('General Customer Service'), 'bg-lg': !volunteerTags.includes('General Customer Service') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    General Customer Service
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Lost and Found Services')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Lost and Found Services'), 'bg-lg': !volunteerTags.includes('Lost and Found Services') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Lost and Found Services
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('VIP and Special Guests Services')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('VIP and Special Guests Services'), 'bg-lg': !volunteerTags.includes('VIP and Special Guests Services') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    VIP and Special Guests Services
                                <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Transportation and Parking services')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Transportation and Parking services'), 'bg-lg': !volunteerTags.includes('Transportation and Parking services') }" 
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
              :class="{ 'bg-orange-200': volunteerTags.includes('Marketing and Promotion'), 'bg-lg': !volunteerTags.includes('Marketing and Promotion') }"
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
            :class="{ 'bg-orange-200': volunteerTags.includes('Promotional Material Distribution'), 'bg-lg': !volunteerTags.includes('Promotional Material Distribution') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Promotional Material Distribution
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Brand Ambassadors and Advocates')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Brand Ambassadors and Advocates'), 'bg-lg': !volunteerTags.includes('Brand Ambassadors and Advocates') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Brand Ambassadors and Advocates
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Survey and Feedback Collection')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Survey and Feedback Collection'), 'bg-lg': !volunteerTags.includes('Survey and Feedback Collection') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Survey and Feedback Collection
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

                <li @click="addVolunteerTag('Event Photography and Sharing')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Event Photography and Sharing'), 'bg-lg': !volunteerTags.includes('Event Photography and Sharing') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Event Photography and Sharing
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Social Media marketing')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Social Media marketing'), 'bg-lg': !volunteerTags.includes('Social Media marketing') }" 
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
              :class="{ 'bg-orange-200': volunteerTags.includes('Fundraising and Sponsorship'), 'bg-lg': !volunteerTags.includes('Fundraising and Sponsorship') }"
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
            :class="{ 'bg-orange-200': volunteerTags.includes('Donation Collection and Management'), 'bg-lg': !volunteerTags.includes('Donation Collection and Management') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Donation Collection and Management
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Sponsor Liaison and Support')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Sponsor Liaison and Support'), 'bg-lg': !volunteerTags.includes('Sponsor Liaison and Support') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Sponsor Liaison and Support
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Fundraising Event Assistants')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Fundraising Event Assistants'), 'bg-lg': !volunteerTags.includes('Fundraising Event Assistants') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Fundraising Event Assistants
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Grant Application & Management Assistance')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Grant Application & Management Assistance'), 'bg-lg': !volunteerTags.includes('Grant Application & Management Assistance') }" 
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
              :class="{ 'bg-orange-200': volunteerTags.includes('Legal and Compliance'), 'bg-lg': !volunteerTags.includes('Legal and Compliance') }"
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
            :class="{ 'bg-orange-200': volunteerTags.includes('Contract Review and Management'), 'bg-lg': !volunteerTags.includes('Contract Review and Management') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Contract Review and Management
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Risk Management and Safety Compliance')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Risk Management and Safety Compliance'), 'bg-lg': !volunteerTags.includes('Risk Management and Safety Compliance') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Risk Management and Safety Compliance
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Regulatory and Standards Monitoring')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Regulatory and Standards Monitoring'), 'bg-lg': !volunteerTags.includes('Regulatory and Standards Monitoring') }" 
            >                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Regulatory and Standards Monitoring
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li @click="addVolunteerTag('Legal Assistance and Advice')" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
            :class="{ 'bg-orange-200': volunteerTags.includes('Legal Assistance and Advice'), 'bg-lg': !volunteerTags.includes('Legal Assistance and Advice') }" 
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
