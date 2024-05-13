
<script setup lang="ts">
import { Check, X, MessageCircle, Link2, Calendar, Edit2 } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import {

  Clock,
  Inbox,
  Mail,
  Users,
  UserCheck,
  UserPlus,
  Volume2,
  Briefcase,
  Award,
  List,
  Power,
  User,
  Heart,
  Cog
  
} from 'lucide-vue-next';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const feedItems = ref([]);

// Fetch feed items from the activity_feed table
async function fetchFeedItems() {
  const response = await supabase
    .from('activity_feed')
    .select('*')
    .eq('object_owner', user.value.id)
  
  if (response.error) {
    console.error(response.error);
    return;
  }
  
  feedItems.value = response.data;
}

onMounted(() => {
  fetchFeedItems();
});

function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}

</script>

<template>
          <div class="bg-white dark:bg-gray-900 p-6 shadow-lg rounded-lg transition-colors">
    <!-- <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <Avatar class="w-12 h-12 border-2 border-orange-500 dark:border-orange-400 rounded-full">
          <AvatarImage src="/placeholder.svg" alt="User avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">Welcome, User!</p>
        </div>
      </div>
      <div class="flex space-x-2 items-center">
        <Badge class="bg-orange-200 text-orange-600 dark:bg-orange-800 dark:text-orange-100 py-1 px-3 rounded-full text-xs hover:bg-orange-500 hover:text-white">
          Pro
        </Badge>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as="template">
                <NuxtLink to="Profile">

              <Button variant="outline" class="flex items-center border border-orange-500 dark:border-orange-400 text-orange-500 dark:text-orange-400 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-400 dark:hover:text-gray-900 font-semibold py-1.5 px-3 rounded-md focus:outline-none focus:ring focus:ring-orange-300 dark:focus:ring-orange-400 dark:ring-offset-gray-800">
                <User class="w-4 h-4 mr-1.5" /> Profile
              </Button>
              </NuxtLink>
            </TooltipTrigger>
            <TooltipContent>
              <p class="text-white dark:text-gray-900 bg-blue-500 dark:bg-blue-400 p-2 rounded-md">View Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  </div>
  <div class="flex min-h-screen bg-gray-50 dark:bg-black text-gray-800 dark:text-white">
    <aside class="w-80  p-8 bg-white dark:bg-gray-900 shadow-xl">
      <Card class="rounded-xl overflow-hidden border dark:border-transparent h-1/2 " >

        <CardHeader class="bg-orange-500 dark:bg-orange-500 p-6">
          <CardTitle class="text-xl font-semibold text-center text-white">Offers & Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li class="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer rounded">
              <List class="w-5 h-5 mr-2 text-indigo-500" />
              <span>Venues</span>
            </li>
            <li class="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer rounded">
              <List class="w-5 h-5 mr-2 text-blue-300" />
              <span>Volunteers</span>
            </li>
            <li class="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer rounded">
              <Volume2 class="w-5 h-5 mr-2 text-orange-500" />
              <span>Events</span>
            </li>
            <li class="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer rounded">
              <UserPlus class="w-5 h-5 mr-2 text-green-500" />
              <span>Sponsors</span>
            </li>
            <li class="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer rounded">
              <Award class="w-5 h-5 mr-2 text-purple-500" />
              <span>Experts</span>
            </li>
            <li class="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer rounded">
              <Award class="w-5 h-5 mr-2 text-yellow-500" />
              <span>Vendors</span>
            </li>
            <li class="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer rounded">
              <Volume2 class="w-5 h-5 mr-2 text-red-500" />
              <span>Media</span>
            </li>
            <li class="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer rounded">
              <Mail class="w-5 h-5 mr-2 text-red-500" />
              <span>Notifications</span>
            </li>
            <li class="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer rounded">
              <Cog class="w-5 h-5 mr-2 text-gray-500" />
              <span>Settings</span>
            </li>
          </ul>

          
        </CardContent>

        
      </Card>
      <div class="mt-auto">
        <Button variant="default" class="flex text-sm rounded-md items-center justify-center space-x-2 w-full py-1 bg-orange-500 text-white  hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-400">
          <Power class="w-5 h-5" />
          <span>Sign Out</span>
        </Button>
        <p class="mt-4 text-xs text-center text-gray-600 dark:text-gray-400">
          Platform Version 1.0.0
        </p>
      </div>
    </aside> -->

 

  <div class="flex min-h-screen bg-[#FFFAF0] dark:bg-black text-gray-900">
    <main class="flex-1 p-8">
      <Tabs default-value="requested-from-me" class="w-full">
        <TabsList class="flex w-full justify-around border-b-2 border-orange-300">
          <TabsTrigger value="requested-from-me" class="py-2">Venues requested from me</TabsTrigger>
          <TabsTrigger value="requested" class="py-2">Venues I requested or offered to me</TabsTrigger>
          <TabsTrigger value="offered-to-me" class="py-2">Add & Manage my Venues</TabsTrigger>
        </TabsList>

        <TabsContent value="requested-from-me" class="space-y-6">
          <!-- Repeat this section for each post with different venue details -->
          <div v-for="item in feedItems" class="flex flex-col space-y-4 bg-white p-4 rounded-md shadow-xl transition-all ease-in-out duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-[#1A1A1A]">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <div class="mr-6">
                <Avatar class="w-24 h-24">
                  <AvatarImage :src="item.activity_content.userAvatar" alt="User's Name" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                <h3 class="font-semibold text-center text-md mt-1">{{ item.activity_content.full_name }}</h3>
            </div>
                <div >
                  <h3 class="font-semibold text-lg">{{ item.activity_content.eventName }}</h3>
                  <div class="mb-2 mt-1">
                    <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                  <Badge v-for="badge in item.activity_content.badges" in class="text-sm bg-orange-100 text-orange-700">{{ badge }}</Badge>
                </TooltipTrigger>
                  <TooltipContent>
                    Venue request options: Sponsorship or Paid
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
                </div>
                  <!-- <Badge class="text-xs bg-orange-100 text-orange-800">Networking Event</Badge> -->
                 <div class="flex space-x-16">
                  <div class="flex mt-2"><p class="text-sm font-semibold mr-1 text-gray-700">Event type: </p><p class="text-sm">{{ item.activity_content.eventType }}</p></div>
                  <div class="flex mt-2"><p class="text-sm font-semibold mr-1 text-gray-700">Number of guests: </p><p class="text-sm"> {{ item.activity_content.numberOfGuests }}</p></div>
                  <div class="flex mt-2"><p class="text-sm font-semibold mr-1 text-gray-700">Tickets: </p><p class="text-sm"> {{ item.activity_content.tickets }}</p></div>

                  <div class="flex mt-2"><p class="text-sm font-semibold mr-1 text-gray-700">Event date: </p><p class="text-sm">  {{ item.activity_content.eventDate }}</p></div>
                  <div class="flex mt-2 mb-2"><p class="text-sm font-semibold mr-1 text-gray-700">Event time: </p><p class="text-sm"> {{ item.activity_content.eventTime }}</p></div>
                </div>
                  <div class="flex mt-2 mb-2"><p class="text-sm font-semibold mr-1 text-gray-700">Event description: </p><p class="text-sm"> {{ item.activity_content.eventDescription }}</p></div>

<!-- 
                  <Badge class="text-xs bg-orange-100 text-orange-800 mr-2">Sponsor request</Badge>
                  <Badge class="text-xs bg-orange-100 text-orange-800">Paid request</Badge> -->

                  <!-- <p href="#" class="text-sm text-orange-600 hover:underline">Link to event page</p> -->
                </div>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button size="icon" variant="ghost">
                      <Link2 class="w-5 h-5 text-orange-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Go to event page
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <blockquote v-for="message in item.activity_content.eventMessages" class="p-4 italic border-l-4 border-orange-200 bg-neutral-50 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">
              {{ message.userName }}: {{ message.content }}
            </blockquote>
            <div class="flex space-x-2">
              <Button class="bg-green-500" variant="default"><Check class="w-4 h-4 mr-1" /> Accept</Button>
              <Button variant="destructive"><X class="w-4 h-4 mr-1" /> Reject</Button>
              <Button variant="secondary"><Edit2 class="w-4 h-4 mr-1" /> Suggest another date</Button>
            </div>
            <Textarea class="mt-2" rows="3" placeholder="Write a reply..."></Textarea>
            <div class="mt-2">
              <Button class="bg-orange-500 text-white hover:bg-orange-600">Submit reply</Button>
            </div>
            <div class="flex items-center space-x-2 text-sm text-gray-400">
              <Calendar class="w-4 h-4 text-orange-500" />
              <span>{{ formatDate(item.created_at) }}</span>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="requested" class="space-y-6">
          <!-- Repeat for each venue requested by user -->
          <div class="flex flex-col space-y-4 bg-white p-4 rounded-md shadow-xl transition-all ease-in-out duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-[#1A1A1A]">
            <div class="flex justify-between">
              <h3 class="font-semibold text-lg">My Request</h3>
              <a href="#" class="text-sm text-orange-600 hover:underline">
                Link to event page
              </a>
            </div>
            <p class="text-sm">Number of guests: 200</p>
            <p class="text-sm">Event date: Sep 15, 2023</p>
            <blockquote class="p-4 italic border-l-4 border-orange-200 bg-neutral-50 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">
              "Details of the venue I requested."
            </blockquote>
            <div class="flex space-x-2">
              <Button variant="secondary"><MessageCircle class="w-4 h-4 mr-1" /> Follow up</Button>
              <Button variant="destructive"><X class="w-4 h-4 mr-1" /> Cancel request</Button>
            </div>
            <Textarea class="mt-2" rows="2" placeholder="Write a follow-up message..."></Textarea>
            <div class="mt-2">
              <Button class="bg-orange-500 text-white hover:bg-orange-600">Submit follow-up</Button>
            </div>
            <div class="flex items-center space-x-2 text-sm text-gray-400">
              <Calendar class="w-4 h-4 text-orange-500" />
              <span>Requested on Jan 12, 2023</span>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="offered-to-me" class="space-y-6">
          <!-- Repeat for each venue offered to the user -->
          <div class="flex flex-col space-y-4 bg-white p-4 rounded-md shadow-xl transition-all ease-in-out duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-[#1A1A1A]">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="Venue Offerer Name" />
                  <AvatarFallback>VO</AvatarFallback>
                </Avatar>
                <div>
                  <h3 class="font-semibold text-lg">Venue Offerer Name</h3>
                  <p class="text-sm mt-1">Number of guests: 80</p>
                  <p class="text-sm">Event date: Oct 10, 2023</p>
                  
                  <a href="#" class="text-sm text-orange-600 hover:underline">Link to event page</a>
                </div>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button size="icon" variant="ghost">
                      <Link2 class="w-5 h-5 text-orange-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Go to event page
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <blockquote class="p-4 italic border-l-4 border-orange-200 bg-neutral-50 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">
              "Message of the venue offered to you, with details and terms."
            </blockquote>
            <div class="flex space-x-2">
              <Button variant="default"><Check class="w-4 h-4 mr-1" /> Accept offer</Button>
              <Button variant="secondary"><Edit2 class="w-4 h-4 mr-1" /> Negotiate terms</Button>
              <Button variant="destructive"><X class="w-4 h-4 mr-1" /> Decline</Button>
            </div>
            <Textarea class="mt-2" rows="2" placeholder="Write a negotiation message or accept..."></Textarea>
            <div class="mt-2">
              <Button class="bg-orange-500 text-white hover:bg-orange-600">Submit response</Button>
            </div>
            <div class="flex items-center space-x-2 text-sm text-gray-400">
              <Calendar class="w-4 h-4 text-orange-500" />
              <span>Offer received on Feb 05, 2023</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  </div>
  </div>
</template>
