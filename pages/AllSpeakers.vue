
<script setup lang="ts">
import {
  Heart,
  MessageCircle,
  ChevronDown,
  Filter,
  Plus
} from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Toggle } from '@/components/ui/toggle';
</script>

<template>
  <div class="dark:bg-black">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center px-6 py-4 bg-gray-100 dark:bg-gray-800">
      <div class="flex items-center gap-4">
        <h1 class="text-xl font-semibold mb-4 md:mb-0 dark:text-white">Explore Speakers & Experts</h1>
        <Button variant="outline" class="rounded">
          <Plus class="w-5 h-5" /> Offer your expertise
        </Button>
      </div>
      <div class="flex gap-4">
        <Input type="text" placeholder="Search by name..." class="rounded" />
        <Select>
          <SelectTrigger class="rounded-md">
            <SelectValue placeholder="Filter by" />
            <ChevronDown class="w-5 h-5" />
          </SelectTrigger>
          <SelectContent class="rounded-md">
            <SelectGroup>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="location">Location</SelectItem>
              <SelectItem value="industry">Industry</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="outline" class="rounded">
          <Filter class="w-4 h-4 mr-1" /> Advanced
        </Button>
      </div>
    </div>
    <div class="px-6 py-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card v-for="n in 6" :key="n" class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <Avatar class="m-4 w-24 h-24">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback>XX</AvatarFallback>
          </Avatar>
          <CardContent class="p-4">
            <h3 class="text-lg font-semibold dark:text-white">Name Surname</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">Title at Company</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Industry</p>
            <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae porta massa. Nulla tincidunt nisi ac purus posuere gravida.</p>
            <div class="flex items-center justify-between mt-4">
              <Button class="flex items-center text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 dark:border-white dark:text-white">
                <MessageCircle class="w-4 h-4 mr-2" /> Request
              </Button>
              <Toggle aria-label="Like">
                <Heart class="w-5 h-5" />
              </Toggle>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
