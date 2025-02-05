<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-vue-next';
import AnimatedText from './AnimatedText.vue';
</script>

<template>
  <div class="flex items-center justify-between bg-[url('/eventLanding01.jpg')] bg-gray-100 dark:bg-black pb-6 h-auto ">
    <div class="space-y-4 w-1/4 z-20 mx-10 mb-6 ">

      <div class="flex dark:bg-black shadow-lg rounded-md max-w-md mx-auto my-3">
        <Card class=" dark:bg-gray-800 w-full max-w-md rounded-lg shadow-lg overflow-hidden ">
          <CardHeader class="px-6 py-8 bg-orange-500 mb-2">

            <CardTitle class="text-xl font-bold text-white  ml-2 mb-1 ">Create your Event or just pick a venue and more
              from down below</CardTitle>
            <CardDescription class="text-sm font-semibold text-gray-100 ml-2 mb-2 ">
              Tell us about your dream event and we will help you make it happen. It's Free.
            </CardDescription>
          </CardHeader>
          <CardContent class="px-6 py-4 p-6">
            <div class="text-md font-semibold text-gray-700">It takes 6 easy steps:</div>

            <div class="flex items-center mt-7 mb-7">
              <div
                class="flex-none rounded-full bg-orange-500 text-white w-5 h-5 flex items-center justify-center text-xs">
                1</div>
              <div class="flex-grow mx-1 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              <div class="flex-none rounded-full bg-gray-300 dark:bg-gray-700 w-5 h-5"></div>
              <div class="flex-grow mx-1 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              <div class="flex-none rounded-full bg-gray-300 dark:bg-gray-700 w-5 h-5"></div>
              <div class="flex-grow mx-1 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              <div class="flex-none rounded-full bg-gray-300 dark:bg-gray-700 w-5 h-5"></div>
              <div class="flex-grow mx-1 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              <div class="flex-none rounded-full bg-gray-300 dark:bg-gray-700 w-5 h-5"></div>
              <div class="flex-grow mx-1 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              <div class="flex-none rounded-full bg-gray-300 dark:bg-gray-700 w-5 h-5"></div>
            </div>
            <div class="space-y-8">

              <div class="text-md font-semibold text-gray-700">What do you want to call your event?</div>
              <Input type="text" placeholder="Event Name"
                class="w-full bg-gray-200 rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0" />
              <!-- <Input type="text" placeholder="Location" class="w-full bg-gray-200 dark:bg-gray-700 rounded-md border-transparent focus:border-orange-500 focus:bg-white focus:ring-0 dark:focus:bg-gray-600" /> -->
              <NuxtLink to="CreateEvent">
                <Button variant="default"
                  class="w-full flex justify-center items-center bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg px-4 py-2 transition duration-150 ease-in-out mt-6">
                  <span>Let's Go</span>
                  <Check class="w-4 h-4 ml-2" />
                </Button>
              </NuxtLink>
            </div>
            <div class="mt-4 text-sm text-center">
              <p class="text-gray-600 dark:text-gray-400">You can edit all your inputs, save, publish or delete it at
                anytime.</p>
              <button class="text-orange-500 hover:underline dark:text-orange-400 mt-1 mb-2">Skip this step</button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

    <div class="absolute top-2 right-6 z-20 m-8">
      <Button variant="default"
        class="mt-6  text-md text-white bg-orange-500 rounded-md hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
        Sign Up for Free
      </Button>


    </div>
    <div
      class="w-100 h-[90%] font-bold text-4xl text-center text-gray-700 bg-white p-8 rounded-md bg-opacity-70 items-center">
      <!-- <div class="mt-2">Find your Venue, Volunteers,</div> <div class="mt-2">Speakers, Sponsors, <div class="mt-2">Influencers,</div></div> <div class="mt-2">Co-Founders, Investors,</div><div class="mt-2"> AI Agents & Vendors </div> -->
      <div>Meet Gala</div>
      <div>Your Personal AI Event Planner</div>

      <AnimatedText/>
      <div class="mt-5 p-4 flex-col text-lg sm:flex-row justify-center items-center bottom-2">
        <!-- <input 
          type="text" 
          placeholder="Where are you looking for a venue?" 
          class="px-6 py-3 w-full sm:w-96 rounded-full border-2 border-orange-300 focus:border-orange-500 focus:outline-none text-black"
        >
        <button class="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition duration-300 w-full sm:w-auto">
          Find Venues
        </button> -->
        <div class="bg-white rounded-xl shadow-2xl p-4 max-w-3xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border-b md:border-b-0 md:border-r border-gray-200 p-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">What are you looking for?</label>
              <select class="w-full bg-transparent text-lg text-gray-900 focus:outline-none">
                <option>Venues</option>
                <option>Volunteers</option>
                <option>Speakers</option>
                <option>Sponsors</option>
                <option>Influencers</option>
                <option>Vendors</option>
                <option>All</option>


              </select>
            </div>
            <div class="border-b md:border-b-0 md:border-r border-gray-200 p-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Event City</label>
              <input type="text" class="w-full bg-transparent text-lg text-gray-900 focus:outline-none">
            </div>
            <div class="flex items-end p-2">
              <button class="w-full btn-primary py-4 bg-orange-500 rounded-md text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="mt-2">It is that easy!</div> -->
    </div>
  </div>
</template>
