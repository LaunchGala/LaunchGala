
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
  <div v-if="isOpen" class="fixed w-screen h-screen top-0 bg-black bg-opacity-50 dark:bg-opacity-70" />
  <div class="bg-white dark:bg-red min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>

          <CardTitle>Select Volunteers Categories: (Select all applicable)</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg "
              :class="{ 'shadow-orange-500': selectedType == 'Office', 'shadow-lg': selectedType != 'Office' }"

              @click="selectType('Office')"
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
        <ul class="p-8 space-y-8">
          
          <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
          <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
          <div class="text-l font-semibold text-gray-600">Event Management & Coordination:</div>

            <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
              <Plus class="w-5 h-5 text-orange-500 " />

              <label  class="flex-1 cursor-pointer text-sm font-semibold">
                Event Planning and Scheduling
         <Check class="w-4 h-4 text-orange-500" />
              </label>
            </li>
            <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
              <Plus class="w-5 h-5 text-orange-500 " />

              <label  class="flex-1 cursor-pointer text-sm font-semibold">
                On-Site Event Coordination
        <Check class="w-4 h-4 text-orange-500" />
              </label>
            </li>
            <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
              <Plus class="w-5 h-5 text-orange-500 " />

              <label  class="flex-1 cursor-pointer text-sm font-semibold">
                Speaker & Participant Coordination
        <Check class="w-4 h-4 text-orange-500" />
              </label>
            </li>
            <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
              <Plus class="w-5 h-5 text-orange-500 " />

              <label  class="flex-1 cursor-pointer text-sm font-semibold">
                Vendor Coordination
         <Check class="w-4 h-4 text-orange-500" />
              </label>
            </li>
            <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
              <Plus class="w-5 h-5 text-orange-500 " />

              <label  class="flex-1 cursor-pointer text-sm font-semibold">
                Accounting and Bookkeeping
         <Check class="w-4 h-4 text-orange-500" />
              </label>
            </li>
            <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
              <Plus class="w-5 h-5 text-orange-500 " />

              <label  class="flex-1 cursor-pointer text-sm font-semibold">
                VIP and Special Guests Services
         <Check class="w-4 h-4 text-orange-500" />
              </label>
            </li>
            <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
              <Plus class="w-5 h-5 text-orange-500 " />

              <label  class="flex-1 cursor-pointer text-sm font-semibold">
                Event Wrap-Up and Debriefing
         <Check class="w-4 h-4 text-orange-500" />
              </label>
            </li>
          </ul>
      </div>
    </PopoverContent>

    </Popover>

    <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Meeting room', 'shadow-lg': selectedType != 'Meeting room' }"
              @click="selectType('Meeting room')"
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
              
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
              <div class="text-l font-semibold text-gray-600">Technical Support and IT:</div>
    
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Audio/Visual Equipment Operation
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    IT Support and Troubleshooting
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Live Streaming and Webinar Tech
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Lighting and Sound Engineering
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Software and Application Assistance
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Photography and Videography Support
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Gallery', 'shadow-lg': selectedType != 'Gallery' }"
              @click="selectType('Gallery')"
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
              
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
              <div class="text-l font-semibold text-gray-600">Hospitality and Guest Services:</div>
    
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Welcome Desk and Information
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Mixologist & Barista
                                <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Culinary skills
                                <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Lounge and VIP Area Management
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Special Requests and Concierge Services
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Coat Check and Cloakroom Management
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
              class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Co-Working space', 'shadow-lg': selectedType != 'Co-Working space' }"
              @click="selectType('Co-Working space')"
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
              
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
              <div class="text-l font-semibold text-gray-600">Logistics and Setup:</div>
    
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Venue Layout and Design
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Signage and Directions Setup
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Staging and Decoration
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Equipment and Furniture Setup
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Transport and Delivery Coordination
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Post-Event Clean-Up and Teardown
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Private room', 'shadow-lg': selectedType != 'Private room' }"
              @click="selectType('Private room')"
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
              
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
              <div class="text-l font-semibold text-gray-600">Security and Safety:</div>
    
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Entrance and Exit Supervision
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Bag and Luggage Checks
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Emergency Evacuation Support
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Crowd Control and Line Management
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

                
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Auditorium', 'shadow-lg': selectedType != 'Auditorium' }"
              @click="selectType('Auditorium')"
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
              
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
              <div class="text-l font-semibold text-gray-600">Health and Medical Services:</div>
    
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    First Aid and Basic Health Care
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Medical Emergency Response
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Wellness and Relaxation services
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Health Screening and Precautions
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Hygiene and Sanitation Stations
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Conference center', 'shadow-lg': selectedType != 'Conference center' }"
              @click="selectType('Conference center')"
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
              
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
              <div class="text-l font-semibold text-gray-600">Media and Communication:</div>
    
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Press and Media Relations
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Social Media Coordination
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Content Creation and Blogging
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Public Relations and Outreach
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    VIP and Special Guests Services
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Interview and Testimonial Gathering
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Convention center', 'shadow-lg': selectedType != 'Convention center' }"
              @click="selectType('Convention center')"
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
              
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
              <div class="text-l font-semibold text-gray-600">Language Interpretation and Translation:</div>
    

                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Simultaneous Interpretation Services
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Document and Material Translation
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Sign Language Interpretation
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Bilingual or Multilingual Information Assistance
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Exhibition hall', 'shadow-lg': selectedType != 'Exhibition hall' }"
              @click="selectType('Exhibition hall')"
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
              
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
              <div class="text-l font-semibold text-gray-600">Entertainment and Performers:</div>
    
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Stage Performers and Artists
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Composers & DJs 
                                <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Audience Engagement and Interaction
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Workshop and Activity Leaders
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Theaters & performance space', 'shadow-lg': selectedType != 'Theaters & performance space' }"
              @click="selectType('Theaters & performance space')"
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
              
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
              <div class="text-l font-semibold text-gray-600">Educational and Speakers:</div>
    
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Event Planning and Scheduling
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Educational Workshop Assistants
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Guest Speaker Support
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Training Session Helpers
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Educational Material Distribution
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Museum', 'shadow-lg': selectedType != 'Museum' }"
              @click="selectType('Museum')"
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
              
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
              <div class="text-l font-semibold text-gray-600">Special Needs Assistance:</div>
    
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Accessibility Services
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Personal Assistance for Disabled Attendees
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Signage and Information about Accessible Services
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Special Equipment Handling
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'University & college facility', 'shadow-lg': selectedType != 'University & college facility' }"
              @click="selectType('University & college facility')"
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
              
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
              <div class="text-l font-semibold text-gray-600">Customer Service and Information:</div>
    
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Query Resolution and Assistance
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Lost and Found Services
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Speaker & Participant Coordination
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Transportation and Parking services
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    General Customer Support
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Library', 'shadow-lg': selectedType != 'Library' }"
              @click="selectType('Library')"
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
              
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
              <div class="text-l font-semibold text-gray-600">Marketing and Promotion:</div>
    
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Promotional Material Distribution
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Brand Ambassadors and Advocates
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Survey and Feedback Collection
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Vendor Coordination
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Event Photography and Sharing
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Social Media services
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Historical building', 'shadow-lg': selectedType != 'Historical building' }"
              @click="selectType('Historical building')"
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
              
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
              <div class="text-l font-semibold text-gray-600">Fundraising and Sponsorship:</div>
    
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Donation Collection and Management
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Sponsor Liaison and Support
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Fundraising Event Assistants
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Grant Application and Management Assistance
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

              </ul>
          </div>
        </PopoverContent>
    
        </Popover>

            <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">

            <button 
            class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
              :class="{ 'shadow-orange-500': selectedType == 'Restaurant & bar', 'shadow-lg': selectedType != 'Restaurant & bar' }"
              @click="selectType('Restaurant & bar')"
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
              
              <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
              <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
              <div class="text-l font-semibold text-gray-600">Legal and Compliance:</div>
    
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Contract Review and Management
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Risk Management and Safety Compliance
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Regulatory and Standards Monitoring
            <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>
                <li  class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  ">
                  <Plus class="w-5 h-5 text-orange-500 " />
    
                  <label  class="flex-1 cursor-pointer text-sm font-semibold">
                    Legal Assistance and Advice
             <Check class="w-4 h-4 text-orange-500" />
                  </label>
                </li>

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
