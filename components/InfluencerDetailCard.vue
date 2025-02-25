<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MapPin, Globe, Linkedin, UserPlus, Github, Twitter, YoutubeIcon, FacebookIcon, InstagramIcon, Twitch } from 'lucide-vue-next'
import { SupabaseClient } from '@supabase/supabase-js'
import { cibSnapchat } from '@coreui/icons'
import { DiscordLogoIcon } from '@radix-icons/vue'

const props = defineProps(['id', 'profile'])
const supabase = useSupabaseClient()
const profile = ref({})
const contactInfo = ref({})

const formatArray = arr => arr.length > 3 ? `${arr.slice(0, 3).join(", ")}...` : arr.join(", ")
const formatUrl = url => !url?.startsWith('http') ? `https://${url}` : url

async function getAllExperts(query) {
  const { data: AllExperts, error } = !!query ? await query : await supabase
    .from('profiles')
    .select('*, influencer:Influencers(*)')
    .eq('is_influencer', true)
    .eq('id', props.id)

  console.log(error)
  Promise.all(AllExperts.map(async (profile) => {
    profile.avatarSRC = await fetchImage(profile.avatar_url, 'avatars')
    profile.bannerSRC = await fetchImage(profile.banner_url, 'images')
  })).then(() => {
    profile.value = AllExperts[0]
    contactInfo.value = {other_user_id: profile.value.id, other_user_name: profile.value.full_name}
  })
}

const fetchImage = async (id, bucket) => {
  if(!!id) {
    const urlData = await supabase.storage.from(bucket).createSignedUrl(id, 60)
    return urlData?.data?.signedUrl ?? ""
  }
}

const connect = () => {
  // Implement connection logic here
  console.log('Connecting with', profile.value?.full_name)
}

onMounted(() => {
  if(props.id != null){
    getAllExperts(null)
  } else {
    profile.value = props.profile
    fetchImage(profile.value.avatar_path, 'avatars')
      .then((avatar) => {
        profile.value.avatarSRC = avatar
      })
      .catch((error) => {
        console.error('Error fetching avatar image:', error)
      })
    fetchImage(profile.value.banner_path, 'images')
      .then((banner) => {
        profile.value.bannerSRC = banner
      })
      .catch((error) => {
        console.error('Error fetching banner image:', error)
      })
  }
})
</script>

<template>
  <div class="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <!-- Banner -->
      <div class="h-64 w-full bg-gradient-to-r  relative">
        <img 
          :src="profile?.bannerSRC || '/placeholder.svg?height=300&width=1200'" 
          alt="Profile banner" 
          class="w-full h-full object-cover "
        >
      </div>
      
      <!-- Avatar -->
      <div class="relative">
        <img 
          :src="profile?.avatarSRC || '/placeholder.svg?height=192&width=192'" 
          :alt="'Profile picture of ' + profile?.full_name"
          class="absolute left-8 -top-24 w-48 h-48 rounded-full border-4 border-white shadow-xl object-cover"
        >
      </div>

      <div class="p-8 pt-28">
        <div class="flex justify-between items-start">
          <div>
            <h1 class="text-4xl font-bold text-gray-900">{{ profile?.full_name }}</h1>
            <p class="mt-1 text-2xl text-orange-600">{{ profile?.influencer?.headline }}</p>
            <div class="mt-2 flex items-center text-gray-600">
              <MapPin class="h-5 w-5 mr-2" />
              <span>{{ profile?.location }}</span>
            </div>
            <div v-if="profile?.influencer?.will_travel" class="mt-2 inline-block px-4 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
              Available for Travel
            </div>
          </div>
          <button 
            v-if="Object.keys(contactInfo).length !== 0"
            @click="connect" 
            class="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 flex items-center shadow-md"
          >
            <UserPlus class="h-5 w-5 mr-2" />
            Connect
          </button>
        </div>
        
        <div class="flex flex-row mt-8 justify-between">
          <div>
            <h2 class="text-2xl font-semibold text-gray-900">About</h2>
            <p class="mt-2 text-gray-600 text-lg">{{ profile?.about }}</p>
          </div>
          <div class="w-2/5 shrink">
            <InfluencerBookingRequest :profile-id="profile.id" />
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
      </div>
    </div>
  </div>
</template>