
<script setup lang="ts">
import {
  Check,
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
  Cog,
  Bell,
  MessageSquare,
  CalendarIcon,
  DollarSignIcon,
  Trophy,
  BadgeCheck,
  
  

  
} from 'lucide-vue-next';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';


import { Calendar } from '@/components/ui/calendar'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
</script>

<template>
      <div class="bg-white dark:bg-gray-900 p-6 shadow-lg rounded-lg transition-colors">
    <div class="flex items-center justify-between">
      <!-- <div class="flex items-center space-x-4">
        <Avatar class="w-12 h-12 border-2 border-orange-500 dark:border-orange-400 rounded-full">
          <AvatarImage src="/placeholder.svg" alt="User avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div>
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">Welcome, User!</p>
        </div>
      </div> -->
      <div class="flex items-center space-x-4 ">
          <Avatar class="w-28 h-28 ">
            <AvatarImage src="/placeholder.svg" alt="Your Name" />
          </Avatar>
          <div>
            <div class="flex ">
            <h1 class="text-xl font-bold text-gray-900 dark:text-white">Welcome Back, User!</h1>
            <BadgeCheck class="w-6 h-6 ml-2 font-bold text-orange-500" />
            
          </div>
          <div class="flex items-baseline space-x-2">
              <p class="text-xl font-bold text-orange-500 dark:text-orange-400">2,235</p>
              <span class="text-lg font-medium text-gray-500 dark:text-gray-300">Kudos</span>
              <Trophy class="w-5 h-5 font-bold text-orange-500" />
          </div>
          <div class="flex justify-left gap-2">
        <Dialog v-slot="{ }">
          <DialogTrigger>
            <Badge class="cursor-pointer bg-orange-100 text-orange-800">
              <Users class="w-4 h-4 mr-1" /> Following you
              <span class="ml-1">123</span>
            </Badge>
          </DialogTrigger>
          <DialogContent class="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg space-y-4" v-model:open="open">
            <DialogHeader>
              <DialogTitle class="text-lg">People Following You</DialogTitle>
            </DialogHeader>
            <!-- Placeholder for user list -->
            <p>Here you will be able to see the list of people following you.</p>
            <button class="w-full p-2 text-center rounded-lg bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600" @click="close">Close</button>
          </DialogContent>
        </Dialog>
        
        <Dialog v-slot="{ }">
          <DialogTrigger>
            <Badge class="cursor-pointer bg-orange-100 text-orange-800">
              <Users class="w-4 h-4 mr-1" /> You follow
              <span class="ml-1">56</span>
            </Badge>
          </DialogTrigger>
          <DialogContent class="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg space-y-4" v-model:open="open">
            <DialogHeader>
              <DialogTitle class="text-lg">People You Follow</DialogTitle>
            </DialogHeader>
            <!-- Placeholder for user list -->
            <p>Here you will view all the people you follow.</p>
            <button class="w-full p-2 text-center rounded-lg bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600" @click="close">Close</button>
          </DialogContent>
        </Dialog>
      </div>

            <!-- <div class="flex items-baseline space-x-2">
              <p class="text-xl font-bold text-orange-500 dark:text-orange-400">2,235</p>
              <span class="text-lg font-medium text-gray-500 dark:text-gray-300">Kudos</span>
              <Trophy class="w-5 h-5 font-bold text-orange-500" />
          </div> -->
          <div class="flex space-x-2">
          <Badge class="bg-red-100 text-red-800 dark:bg-red-800 dark:text-orang-100 py-1 px-2 rounded-full text-sm flex items-center">
            <Check class="w-4 h-4 mr-1" /> 12x Volunteering Contribution
          </Badge>
          <Badge class="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-orang-100 py-1 px-2 rounded-full text-sm flex items-center">
            <Check class="w-4 h-4 mr-1" /> 8x Venue Contribution
          </Badge>
          <div class="flex space-x-2">
          <Badge class="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 py-1 px-2 rounded-full text-sm flex items-center">
            <Check class="w-4 h-4 mr-1" /> 5x Expert Contribution
          </Badge>
          <Badge class="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 py-1 px-2 rounded-full text-sm">
            <Check class="w-4 h-4 mr-1" /> 2x Sponsor Contribution
          </Badge>
        </div>
        </div>
        
          </div>
        </div>
      <div class="flex space-x-2 items-center">
        <div class="flex space-x-4">
            <button class="p-2 bg-gray-200 rounded-full dark:bg-gray-700">
              <Bell class="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button class="p-2 bg-gray-200 rounded-full dark:bg-gray-700">
              <MessageSquare class="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        <!-- <Badge class="bg-orange-200 text-orange-600 dark:bg-orange-800 dark:text-orange-100 py-1 px-3 rounded-full text-xs hover:bg-orange-500 hover:text-white">
          Pro
        </Badge> -->
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as="template">
                <NuxtLink to="Profile">

              <Button variant="outline" class="flex items-center border border-orange-500 dark:border-orange-400 text-orange-500 dark:text-orange-400 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-400 dark:hover:text-gray-900 font-semibold py-1.5 px-3 rounded-md focus:outline-none focus:ring focus:ring-orange-300 dark:focus:ring-orange-400 dark:ring-offset-gray-800">
                <User class="w-4 h-4 mr-1.5" /> Profile
              </Button>
              </NuxtLink>
            </TooltipTrigger>
            <!-- <TooltipContent>
              <p class="text-white dark:text-gray-900 bg-blue-500 dark:bg-blue-400 p-2 rounded-md">View Profile</p>
            </TooltipContent> -->
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  </div>
  <div class="flex min-h-screen bg-gray-50 dark:bg-black text-gray-800 dark:text-white">
    <aside class="w-80  p-8 bg-white dark:bg-gray-900 shadow-xl">
      <Card class="rounded-xl overflow-hidden border dark:border-transparent h-1/2 " >

        <CardHeader class="bg-orange-500 dark:bg-orange-500 p-6">
          <CardTitle class="text-xl font-semibold text-left text-white">Offers & Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <NuxtLink to="VenueDash">
            <li class="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer rounded mt-6">
              <List class="w-5 h-5 mr-2 text-indigo-500" />
              <span>Venues</span>
            </li>
          </NuxtLink>
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
              <Users class="w-5 h-5 mr-2 text-orange-500" />
              <span>Network</span>
            </li>
            <!-- <li class="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer rounded">
              <Volume2 class="w-5 h-5 mr-2 text-red-500" />
              <span>Media</span>
            </li>
            <li class="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer rounded">
              <Volume2 class="w-5 h-5 mr-2 text-red-500" />
              <span>Event AI</span>
            </li>
            <li class="flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer rounded">
              <Volume2 class="w-5 h-5 mr-2 text-red-500" />
              <span>Angel AI</span>
            </li> -->
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
    </aside>
    <main class="flex-1 p-8">
      <section class="mb-8">
        <!-- <Card class="bg-white dark:bg-gray-800 shadow rounded-lg p-5 mb-6">
          <CardHeader class="border-b pb-4">
            <CardTitle class="text-2xl font-bold leading-tight">New Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-4 text-md mt-4">
              <div class="flex items-center">
                <Calendar class="w-5 h-5 mr-2 text-blue-500" />
                <div>You have <Badge variant="success">2 event invites</Badge></div>
              </div>
              <div class="flex items-center">
                <Check class="w-5 h-5 mr-2 text-green-500" />
                <div>Your venue has been <Badge variant="success">approved</Badge></div>
              </div>
              <div class="flex items-center">
                <Users class="w-5 h-5 mr-2 text-yellow-500" />
                <div>You have <Badge variant="warning">3 speaker requests</Badge></div>
              </div>
              <div class="flex items-center">
                <UserPlus class="w-5 h-5 mr-2 text-purple-500" />
                <div>You have <Badge variant="indigo">8 volunteer applicants</Badge></div>
              </div>
              <div class="flex items-center">
                <Volume2 class="w-5 h-5 mr-2 text-pink-500" />
                <div>You have <Badge variant="pink">1 media interview request</Badge></div>
              </div>
              <div class="flex items-center">
                <Briefcase class="w-5 h-5 mr-2 text-indigo-500" />
                <div>You have <Badge variant="indigo">1 venue request</Badge></div>
              </div>
              <div class="flex items-center">
                <Award class="w-5 h-5 mr-2 text-red-500" />
                <div>You have <Badge variant="red">6 sponsorships requests</Badge></div>
              </div>
              <div class="flex items-center">
                <Check class="w-5 h-5 mr-2 text-green-500" />
                <div>You have <Badge variant="green">3 sponsors approved</Badge></div>
              </div>
              <div class="flex items-center">
                <UserCheck class="w-5 h-5 mr-2 text-teal-500" />
                <div>Your volunteer request <Badge variant="teal">approved</Badge></div>
              </div>
              <div class="flex items-center">
                <Inbox class="w-5 h-5 mr-2 text-orange-500" />
                <div>You have <Badge variant="orange">3 vendor requests</Badge></div>
              </div>
              <div class="flex items-center">
                <Mail class="w-5 h-5 mr-2 text-yellow-500" />
                <div>Vendors offering <Badge variant="yellow">5 new products</Badge></div>
              </div>
              <div class="flex items-center">
                <Volume2 class="w-5 h-5 mr-2 text-pink-500" />
                <div>Media request <Badge variant="pink">2 approved</Badge></div>
              </div>
              <div class="flex items-center">
                <Mail class="w-5 h-5 mr-2 text-yellow-500" />
                <div>your event has <Badge variant="yellow">15 new invite request</Badge></div>
              </div>
              <div class="flex items-center">
                <Volume2 class="w-5 h-5 mr-2 text-pink-500" />
                <div>your speaker request<Badge variant="pink">3 approved</Badge></div>
              </div>
              <div class="flex items-center">
                <Volume2 class="w-5 h-5 mr-2 text-pink-500" />
                <div>New Notifications<Badge variant="pink">3 new</Badge></div>
              </div>
            </div>
          </CardContent>
        </Card> -->
        <div class=" lg:grid-cols-3 gap-6 px-4">

      <!-- Large Box -->
      <div class="lg:col-span-2 bg-white dark:bg-gray-900 shadow rounded-lg p-6">
        <div class="flex space-x-96 mb-2">
        <p class="text-md font-semibold  text-gray-600 dark:text-gray-400">Here's what's happening with your events today:</p>
        <Button class="justify-center" variant="outline">
        <DollarSignIcon class="w-4 h-4 mr-2 font-semibold text-orange-500" />Earning
      </Button>
    </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <!-- Upcoming Events -->
          <Card class="transition hover:shadow-md">
            <CardHeader>
              <CardTitle>My Upcoming Events</CardTitle>
              <Badge class="mr-auto ">3 New</Badge>

            </CardHeader>
            <CardContent class="space-y-4">
              <div class="flex items-center space-x-4">
                <img src="/placeholder.svg" alt="Event Image" class="w-20 h-20 rounded-lg" />
                <div>
                  <p class="font-semibold text-lg">Event A</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Oct 24, 2023</p>
                </div>
                <Badge variant="primary" class="ml-auto ">New</Badge>
              </div>
              <div class="flex items-center space-x-4">
                <img src="/placeholder.svg" alt="Event Image" class="w-20 h-20 rounded-lg" />
                <div>
                  <p class="font-semibold text-lg">Event B</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Nov 11, 2023</p>
                </div>
                <Badge variant="primary" class="ml-auto">New</Badge>
              </div>
            </CardContent>
          </Card>
          <!-- Upcoming Reservations -->
          <Card class="transition hover:shadow-md">
            <CardHeader>
              <CardTitle>Venues Reservations</CardTitle>
              <Badge class="mr-auto">2 Pending</Badge>

            </CardHeader>
            <CardContent class="space-y-4">
              <div class="flex items-center space-x-4">
                <img src="/placeholder.svg" alt="Reservation" class="w-20 h-20 rounded-lg" />
                <p class="font-semibold">Conference Room A</p>
              </div>
              <div class="flex items-center space-x-4">
                <img src="/placeholder.svg" alt="Reservation" class="w-20 h-20 rounded-lg" />
                <p class="font-semibold">Hall B</p>
              </div>
            </CardContent>
          </Card>
          <Card class="transition hover:shadow-md">
            <CardHeader>
              <CardTitle>Speakers & Volunteers</CardTitle>
              <Badge class="mr-auto">3 Pending</Badge>

            </CardHeader>
            <CardContent class="space-y-4">
              <div class="flex items-center space-x-4">
                <img src="/placeholder.svg" alt="Reservation" class="w-20 h-20 rounded-full" />
                <p class="font-semibold">Conference Room A</p>
              </div>
              <div class="flex items-center space-x-4">
                <img src="/placeholder.svg" alt="Reservation" class="w-20 h-20 rounded-full" />
                <p class="font-semibold">Hall B</p>
              </div>
            </CardContent>
          </Card>
          <Card class="transition hover:shadow-md">
            <CardHeader>
              <CardTitle>New Messages</CardTitle>
              <Badge class="mr-auto">5 Unread</Badge>
            </CardHeader>

            <CardContent class="space-y-4">
              <div class="flex items-center space-x-4">
                <img src="/placeholder.svg" alt="Reservation" class="w-20 h-20 rounded-full " />
                <p class="font-semibold">Conference Room A</p>
              </div>
              <div class="flex items-center space-x-4">
                <img src="/placeholder.svg" alt="Reservation" class="w-20 h-20 rounded-full" />
                <p class="font-semibold">Hall B</p>
              </div>
            </CardContent>
          </Card>
          <!-- User Calendar -->
          <div class="lg:col-span-2">
            <Card class="transition hover:shadow-md">
              <CardHeader>
                <CardTitle>Your Calendar</CardTitle>
              </CardHeader>
              <CardContent class="p-4">
                <Calendar class="rounded-md border" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <!-- Smaller Boxes -->
      <div class="space-y-6">
        <!-- <Card class="transform hover:scale-105 transition bg-white dark:bg-gray-900 shadow rounded-lg p-6">
          <CardHeader>
            <CardTitle>New Messages</CardTitle>
          </CardHeader>
          <CardContent class="flex items-center space-x-4">
            <div class="flex -space-x-1 overflow-hidden">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/placeholder.svg" alt="" />
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/placeholder.svg" alt="" />
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/placeholder.svg" alt="" />
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/placeholder.svg" alt="" />
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/placeholder.svg" alt="" />
            </div>
            <Badge class="shrink-0">5 unread</Badge>
          </CardContent>
        </Card>
        <Card class="transform hover:scale-105 transition bg-white dark:bg-gray-900 shadow rounded-lg p-6">
          <CardHeader>
            <CardTitle>Speakers & Volunteers</CardTitle>
          </CardHeader>
          <CardContent class="flex items-center space-x-4">
            <div class="flex -space-x-1 overflow-hidden">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/placeholder.svg" alt="" />
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/placeholder.svg" alt="" />
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/placeholder.svg" alt="" />
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/placeholder.svg" alt="" />
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="/placeholder.svg" alt="" />
            </div>
            <Badge class="shrink-0">3 pending</Badge>
          </CardContent>
        </Card> -->
        <Card class="transition hover:shadow-md p-6">
            <CardHeader >
              <CardTitle>New Resources</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <div class="flex items-center space-x-4 ">
                <img src="/placeholder.svg" alt="Reservation" class="w-20 h-20 rounded-lg" />
                <p class="font-semibold">Launch AI</p>
              </div>
              <div class="flex items-center space-x-4">
                <img src="/placeholder.svg" alt="Reservation" class="w-20 h-20 rounded-lg" />
                <p class="font-semibold">AWS: $5000 Cloud storage credit</p>
              </div>
              <div class="flex items-center space-x-4">
                <img src="/placeholder.svg" alt="Reservation" class="w-20 h-20 rounded-lg" />
                <p class="font-semibold">Blog: How to create a grate event</p>
              </div>
            </CardContent>
          </Card>
      </div>
    </div>
      </section>
    </main>
  </div>
</template>
