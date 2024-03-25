
<script setup lang="ts">
import { Home, Calendar, Users, BarChart2, Settings, Plus } from 'lucide-vue-next';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
</script>

<template>
  <TooltipProvider class="bg-gray-100 dark:bg-black min-h-screen">
    <div class="flex">
      <!-- Sidebar -->
      <aside class="w-64 p-6 space-y-6 bg-gray-200 dark:bg-gray-800">
        <div class="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="User image" />
            <AvatarFallback>EO</AvatarFallback>
          </Avatar>
          <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">Event Organizer</span>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem class="mb-2">
              <NavigationMenuLink>
                <Home class="inline w-6 h-6 mr-2" /> Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem class="mb-2">
              <NavigationMenuLink>
                <Calendar class="inline w-6 h-6 mr-2" /> Events
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem class="mb-2">
              <NavigationMenuLink>
                <Users class="inline w-6 h-6 mr-2" /> Participants
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem class="mb-2">      
              <NavigationMenuLink>
                <BarChart2 class="inline w-6 h-6 mr-2" /> Analytics
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Settings class="inline w-6 h-6 mr-2" /> Settings
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </aside>
      <!-- Main Content -->
      <main class="flex-1 p-8">
        <!-- Welcome Card -->
        <Card class="mb-8 bg-white dark:bg-gray-900">
          <CardHeader>
            <CardTitle class="text-2xl font-semibold text-gray-800 dark:text-gray-100">Welcome back, Event Organizer!</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="mb-6 text-gray-600 dark:text-gray-300">Here's a quick overview of your event management dashboard.</p>
            <Button class="bg-blue-600 text-white dark:bg-blue-500 dark:text-white hover:bg-blue-700">
              <Plus class="mr-2 w-5 h-5" /> Create New Event
            </Button>
          </CardContent>
        </Card>
        <!-- Progress Card -->
        <Card class="mb-8 bg-white dark:bg-gray-900">
          <CardHeader>
            <CardTitle class="text-xl font-semibold text-gray-800 dark:text-white">Event Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600 dark:text-gray-300">Event Preparation Progress</p>
            <Progress class="w-full bg-gray-300 dark:bg-gray-700" :model-value="50" />
          </CardContent>
        </Card>
        <!-- Recent Invoices -->
        <Card class="bg-white dark:bg-gray-900">
          <CardHeader>
            <CardTitle class="text-xl font-semibold text-gray-800 dark:text-gray-100">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption class="text-gray-600 dark:text-gray-300">A list of your upcoming events and details.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead class="text-gray-800 dark:text-gray-100">Event Name</TableHead>
                  <TableHead class="text-gray-800 dark:text-gray-100">Date</TableHead>
                  <TableHead class="text-gray-800 dark:text-gray-100">Participants</TableHead>
                  <TableHead class="text-gray-800 dark:text-gray-100">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Annual Tech Conference</TableCell>
                  <TableCell>May 28, 2023</TableCell>
                  <TableCell>150/200</TableCell>
                  <TableCell class="text-green-500 dark:text-green-400">Active</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Startup Pitch Fest</TableCell>
                  <TableCell>Jun 12, 2023</TableCell>
                  <TableCell>40/100</TableCell>
                  <TableCell class="text-yellow-500 dark:text-yellow-400">Enrollment</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Local Music Festival</TableCell>
                  <TableCell>Jul 05, 2023</TableCell>
                  <TableCell>100/300</TableCell>
                  <TableCell class="text-gray-500 dark:text-gray-400">Planning</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  </TooltipProvider>
</template>
