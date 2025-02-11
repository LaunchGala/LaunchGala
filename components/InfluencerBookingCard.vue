<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Globe, Linkedin, UserPlus, Github, Twitter, YoutubeIcon, FacebookIcon, InstagramIcon, Twitch } from 'lucide-vue-next'
import { cibSnapchat } from '@coreui/icons'
import { DiscordLogoIcon } from '@radix-icons/vue'
import { Button } from '@/components/ui/button';

const props = defineProps({
  profile: {
    type: Object,
    required: true,
  },
  eventName: {
    type: String,
    required: true
  },
  note: {
    type: String,
    required: true
  }
});

const formatUrl = url => !url?.startsWith('http') ? `https://${url}` : url
</script>

<template>
  <Card class="max-w-4xl w-full bg-white dark:bg-gray-900 shadow-xl rounded-lg overflow-hidden">
    <CardHeader
      :class="profile.bannerSRC ? '' : 'bg-gradient-to-r from-orange-600 to-orange-400'" 
      class="p-6 flex flex-col items-center text-white relative"
      :style="profile.bannerSRC ? { backgroundImage: `url(${profile.bannerSRC})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', } : ''"
    >
    <span v-if="!!eventName" class="text-xl opacity-90 bg-orange-600 p-2 rounded">Event: {{ eventName }}</span>
      <Avatar class="mb-4 w-24 h-24 ring-4 ring-white">
        <AvatarImage :src="profile.avatarSRC" alt="Event Banner" />
        <AvatarFallback>EV</AvatarFallback>
      </Avatar>
      <CardTitle class="text-2xl font-bold bg-orange-600 p-2 rounded">{{ profile.full_name }}</CardTitle>
      <span class="text-lg opacity-90 bg-orange-600 p-2 rounded">{{ profile.influencer?.headline }}</span>
      <div class="flex items-center mt-2 bg-orange-600 p-2 rounded">
        <MapPin class="w-5 h-5" />
        <span class="ml-2 font-semibold">{{ profile.location }}</span>
      </div>
    </CardHeader>
    <CardContent class="p-6">

      <!-- Custom Buttons Slot -->
      <div class="flex justify-end mt-1 space-x-4 align-middle">
        <slot name="action-buttons">
        </slot>
      </div>
        <div class="flex flex-row mt-8 justify-between">
          <div>
            <h2 class="text-2xl font-semibold text-gray-900">About</h2>
            <p class="mt-2 text-gray-600 text-lg">{{ profile?.about }}</p>
          </div>
        </div>
        <div class="mt-8">
          <h2 class="text-2xl font-semibold text-gray-900">Influencer Categories</h2>
          <div class="mt-3 flex flex-wrap gap-3">
            <span 
              v-for="category in profile?.influencer?.categories" 
              :key="category"
              class="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
            >
              {{ category }}
            </span>
          </div>
        </div>
        
        <div class="mt-8">
          <h2 class="text-2xl font-semibold text-gray-900">Industries</h2>
          <div class="mt-3 flex flex-wrap gap-3">
            <span 
              v-for="industry in profile?.industries" 
              :key="industry"
              class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
            >
              {{ industry }}
            </span>
          </div>
        </div>
        
        <div class="mt-8">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Links</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              v-if="profile?.website"
              :href="formatUrl(profile?.website)" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center p-4 bg-orange-100 rounded-lg hover:bg-orange-200 transition-colors duration-300"
            >
              <Globe class="h-6 w-6 text-orange-600 mr-3" />
              <span class="text-orange-800 font-medium">{{profile?.website}}</span>
            </a>
            <a 
              v-if="profile?.linkedin"
              :href="formatUrl(profile?.linkedin)" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-300"
            >
              <Linkedin class="h-6 w-6 text-blue-600 mr-3" />
              <span class="text-blue-800 font-medium">{{profile?.linkedin}}</span>
            </a>
            <a 
              v-if="profile?.youtube"
              :href="formatUrl(profile?.youtube)" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center p-4 bg-red-300 rounded-lg hover:bg-red-400 transition-colors duration-300"
            >
              <YoutubeIcon class="h-6 w-6 text-neutral-50 mr-3" />
              <span class="text-neutral-50 font-medium">{{profile?.youtube}}</span>
            </a>
            <a 
              v-if="profile?.facebook"
              :href="formatUrl(profile?.facebook)" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center p-4 bg-blue-300 rounded-lg hover:bg-blue-400 transition-colors duration-300"
            >
              <FacebookIcon class="h-6 w-6 text-neutral-50 mr-3" />
              <span class="text-neutral-50 font-medium">{{profile?.facebook}}</span>
            </a>
            
            <a 
              v-if="profile?.instagram"
              :href="formatUrl(profile?.instagram)" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center p-4 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors duration-300"
            >
              <InstagramIcon class="h-6 w-6 text-orange-600 mr-3" />
              <span class="text-white-800 font-medium">{{profile?.instagram}}</span>
            </a>
            <a 
              v-if="profile?.tiktok"
              :href="formatUrl(profile?.tiktok)" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center p-4 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition-colors duration-300"
            >
              <TiktokIcon class="h-6 w-6 text-red-600 mr-3" />
              <span class="text-sky-800 font-medium">{{profile?.tiktok}}</span>
            </a>
            <a 
              v-if="profile?.snapchat"
              :href="formatUrl(profile?.snapchat)" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center p-4 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors duration-300"
            >
              <cibSnapchat class="h-6 w-6 text-yellow-600 mr-3" />
              <span class="text-yellow-800 font-medium">{{profile?.snapchat}}</span>
            </a>
            <a 
              v-if="profile?.twitch"
              :href="formatUrl(profile?.twitch)" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center p-4 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors duration-300"
            >
              <Twitch class="h-6 w-6 text-purple-600 mr-3" />
              <span class="text-purple-800 font-medium">{{profile?.twitch}}</span>
            </a>
            <a 
              v-if="profile?.discord"
              :href="formatUrl(profile?.discord)" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center p-4 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition-colors duration-300"
            >
              <DiscordLogoIcon class="h-6 w-6 text-indigo-600 mr-3" />
              <span class="text-indigo-800 font-medium">{{profile?.discord}}</span>
            </a>
          </div>
        </div>
    </CardContent>
  </Card>
</template>