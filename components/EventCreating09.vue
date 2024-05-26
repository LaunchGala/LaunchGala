
<script setup lang="ts">
import { Calendar, MapPin, Clock, Tag, ArrowRight, Ticket, User } from 'lucide-vue-next';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Share1Icon } from '@radix-icons/vue';
import { Share2Icon } from 'lucide-vue-next';
import { Share } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-orange-100 via-orange-300 to-orange-500 dark:bg-black">

    <div class="pt-12 pb-24 container mx-auto px-4">
      <Card class="max-w-4xl mx-auto mb-8 bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden border-t-8 border-orange-400">
        <AspectRatio :ratio="16/9">
          <img src="/Bootstrapping.png" alt="Event Image" class="w-full h-full object-cover" />
        </AspectRatio>

        <div class="flex flex-col justify-between p-6">
          <CardContent>
            <div class="text-center mb-8">
                <CardHeader>
                  <div class="flex justify-center text-center content-center">
                  <CardTitle class="text-3xl text-center content-center font-extrabold text-orange-800 dark:text-white mb-2 mr-2">
                    Your Event Name Here
                  </CardTitle>

                  <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <p class="text-sm text-orange-600 dark:text-orange-200">
                      <Share class="w-5 h-5 text-orange-600 dark:text-orange-300 mr-2" />
                    </p>
                  </TooltipTrigger>
                  <TooltipContent class="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                    Share your event page
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

                </div>
                  <CardTitle class="text-md font-extrabold text-orange-800 dark:text-white mb-2">
                    Event Style: Networking Event
                  </CardTitle>
                </CardHeader>
              <Avatar class="w-32 h-32 mb-6 inline-block bg-orange-400">
                <AvatarImage src="/PinkPavatar Background Removed Background Removed.png" alt="Host Avatar" />
              </Avatar>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <p class="text-sm text-orange-600 dark:text-orange-200">
                      <User class="w-4 h-4 inline mr-1 align-text-bottom" />
                      Hosted by Host Name
                    </p>
                  </TooltipTrigger>
                  <TooltipContent class="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                    Click for more about the host
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <ul class="space-y-4">
              <li class="flex items-center justify-center">
                <MapPin class="w-5 h-5 text-orange-600 dark:text-orange-300 mr-2" />
                <span class="text-gray-700 dark:text-gray-300">Location Name, City, Country</span>
              </li>
              <li class="flex items-center justify-center">
                <Calendar class="w-5 h-5 text-orange-600 dark:text-orange-300 mr-2" />
                <span class="text-gray-700 dark:text-gray-300">Date</span>
              </li>
              <li class="flex items-center justify-center">
                <Clock class="w-5 h-5 text-orange-600 dark:text-orange-300 mr-2" />
                <span class="text-gray-700 dark:text-gray-300">Time</span>
              </li>
              <li class="flex items-center justify-center">
                <Tag class="w-5 h-5 text-orange-600 dark:text-orange-300 mr-1 align-text-bottom" />
                <span class="text-gray-700 dark:text-gray-300">Tickets: Free / Invite only</span>
              </li>
              <li class="flex items-center justify-center flex-wrap">
                <Badge variant="outline" class="border-orange-500 text-orange-500 dark:border-orange-300 dark:text-orange-300 mr-2">Industry 1</Badge>
                <Badge class="bg-orange-100 text-orange-700 dark:bg-orange-700 dark:text-orange-100">Industry 2</Badge>
              </li>
              <li class="flex items-center justify-center">
                <a href="#" class="text-orange-700 hover:underline dark:text-orange-200">
                  <!-- <ArrowRight class="w-5 h-5 mr-2" /> -->
                  event-link.com
                </a>
              </li>
            </ul>
            
            <div class="mt-8 text-center text-gray-600 dark:text-gray-300">
              <p>This is your event description. Make sure it captures your audience's attention and gives them a reason to attend!</p>
              <div class="mt-4">
                <h3 class="font-semibold text-orange-800 dark:text-orange-200">Agenda:</h3>
                <ul class="list-disc pl-5 space-y-1">
                  <li>Welcome and Introductions</li>
                  <li>Keynote Speech</li>
                  <li>Workshops and Breakout Sessions</li>
                </ul>
              </div>
            </div>
          </CardContent>

          <CardFooter class="pt-4 pb-6 bg-orange-100 dark:bg-gray-700">
            <div class="text-center">
              <p class="text-lg font-bold text-orange-800 dark:text-orange-200 mb-2">Ready to join us?</p>
              
              <Button variant="filled" class="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white rounded-lg px-3 py-3 transition-all mr-4 mt-2">
                <Ticket class="mr-2" /> Offer Venue
              </Button>
              <Button variant="filled" class="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white rounded-lg px-3 py-3 transition-all mr-4 mt-2">
                <Ticket class="mr-2" /> Offer Sponsorship
              </Button>
              <Button variant="filled" class="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white rounded-lg px-3 py-3 transition-all mr-4 mt-2">
                <Ticket class="mr-2" /> Offer volunteering
              </Button>
              <Button variant="filled" class="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white rounded-lg px-3 py-3 transition-all mr-4 mt-2">
                <Ticket class="mr-2" /> Offer Expertise
              </Button>
              <Button variant="filled" class="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-700 text-white rounded-lg px-3 py-3 transition-all mr-4 mt-2">
                <Ticket class="mr-2" /> Register Now
              </Button>
            </div>
          </CardFooter>
        </div>
      </Card>
    </div>
  </div>
</template>
