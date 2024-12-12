
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

import { Share2, Search, ArrowRight, Calendar as CalendarIcon } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';


const isOpen = ref(false)
const date = ref<Date>()

const allInfluencers = ref([]);
const formatArray = arr => arr.length > 3 ? `${arr.slice(0, 3).join(", ")}...` : arr.join(", ");
async function getAllInfluencers(query) {
  const { data: data, error } = !!query ? await query : await supabase
    .from('profiles')
    .select('*, influencer:Influencers(*)') // Assuming the table is named 'experts'
    .eq('is_influencer', true);
  console.log(error)
  Promise.all(data.map(async (profile) => {
    profile.avatarSRC = await fetchImage(profile.avatar_url, 'avatars')
    profile.bannerSRC = await fetchImage(profile.banner_url, 'images')
  })).then(() => {
    allInfluencers.value = data;
    console.log(data)
  })
}
const fetchImage = async (id, bucket) => {
    if(!!id)
    {
            const urlData = await supabase.storage.from(bucket).createSignedUrl(id, 60);
            return urlData?.data?.signedUrl ?? "";
    }
  }
onMounted(() => {
  getAllInfluencers(null)
})
</script>

<template>
  <div class="flex flex-col space-y-4 p-6 dark:bg-black">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold dark:text-white">Find Influencers</h1>
      <NuxtLink to="CreateExpert">
      <Button class="bg-blue-500 text-white dark:bg-blue-600 dark:text-white">Become an Influencer</Button>
    </NuxtLink>

    </div>
    
    <Collapsible v-model:open="isOpen" class="px-6 py-4">
        <CollapsibleTrigger as="button" class="flex w-full justify-between px-4 py-3 mb-4 text-left bg-gray-100 dark:bg-gray-800 dark:text-white rounded-md shadow">
            <span>Search Filters</span>
            <ArrowRight class="w-5 h-5 transition-transform" :class="{ 'rotate-90': isOpen }"  />
        </CollapsibleTrigger>

      <CollapsibleContent class="space-y-4 pb-4">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Input placeholder="Location" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="1br">1 Bedroom</SelectItem>
              <SelectItem value="2br">2 Bedroom</SelectItem>
              <SelectItem value="3brplus">3+ Bedroom</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Venue Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Amenities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pool">Pool</SelectItem>
              <SelectItem value="gym">Gym</SelectItem>
              <SelectItem value="wifi">WiFi</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger as-child>
              <Button
                variant="outline"
                class="dark:text-white dark:bg-gray-700 dark:border-gray-700"
              >
                <CalendarIcon class="mr-2 h-4 w-4" />
                Pick a date
              </Button>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar v-model="date" />
            </PopoverContent>
          </Popover>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sponsor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sponsored">Sponsored</SelectItem>
              <SelectItem value="nonsponsored">Non-Sponsored</SelectItem>
            </SelectContent>
          </Select>
          <Button class="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-md">
            <Search class="w-5 h-5 mr-2" />
            Search
          </Button>
        </div>
      </CollapsibleContent>

    </Collapsible>
    <div class="px-6 py-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card v-for="influencer in allInfluencers"  class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div class="relative">
          <img class="w-full h-64 object-cover" :src="influencer.bannerSRC" alt="Apartment image" />
        </div>
          <Avatar class="m-4 w-24 h-24">
            <AvatarImage :src="influencer.avatarSRC" alt="Profile" />
            <AvatarFallback>XX</AvatarFallback>
          </Avatar>
          <CardContent class="p-4">
            <h3 class="text-lg font-semibold dark:text-white">{{influencer.full_name}}</h3>
            <!-- <p class="text-sm text-gray-500 dark:text-gray-400">{{expert.position}}</p>
            
            <p class="text-sm text-gray-500 dark:text-gray-400">{{expert.industry}}</p> -->
            <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">{{influencer.location}}</p>
            Main Categories:
            <div v-for="category in influencer.influencer?.categories" class="mb-2 flex gap-1 flex-wrap">
          <span class="bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{{ category }}</span>
        </div>            

            <div class="flex items-center justify-between mt-4">
              <NuxtLink :to="{ name: 'InfluencerCard', query: { id: influencer.id } }">
              <Button class="flex items-center bg-orange-500 text-white border hover:bg-gray-500 hover:text-white transition-colors duration-300">
                View
                <ArrowRight class="w-4 h-4 ml-2" /> 
              </Button>
            </NuxtLink>
              <Toggle aria-label="Like">
                <Heart :fill="influencer.likeExpert ? 'orange': 'none'" class="w-5 h-5" />
              </Toggle>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
