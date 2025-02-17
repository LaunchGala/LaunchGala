<script setup lang="ts">
import {
  Heart,
  MessageCircle,
  ChevronDown,
  Filter,
  Plus,
  Search,
  ArrowRight,
  Star,
  MapPin,
  Users,
  Instagram,
  Youtube,
  Twitter,
  Globe,
  Link2
} from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Toggle } from '@/components/ui/toggle';
import { Badge } from '@/components/ui/badge';

const searchQuery = ref('')
const selectedCategory = ref('')
const allInfluencers = ref([]);

const categories = [
  'All Categories',
  'Brand Ambassador',
  'Content Creator',
  'Social Media',
  'Event Host',
  'Industry Expert',
  'Public Speaker'
]

const formatArray = arr => arr?.length > 3 ? `${arr.slice(0, 3).join(", ")}...` : arr?.join(", ");

async function getAllInfluencers(query) {
  const { data, error } = !!query ? await query : await supabase
    .from('profiles')
    .select('*, influencer:Influencers(*)')
    .eq('is_influencer', true);

  if (error) {
    console.error(error);
    return;
  }

  await Promise.all(data.map(async (profile) => {
    profile.avatarSRC = await fetchImage(profile.avatar_url, 'avatars')
    profile.bannerSRC = await fetchImage(profile.banner_url, 'images')
  }));

  allInfluencers.value = data;
}

const fetchImage = async (id, bucket) => {
  if (!!id) {
    const urlData = await supabase.storage.from(bucket).createSignedUrl(id, 60);
    return urlData?.data?.signedUrl ?? "";
  }
  return "";
}

const filteredInfluencers = computed(() => {
  return allInfluencers.value.filter(influencer => {
    const matchesSearch = !searchQuery.value || 
      influencer.full_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      influencer.location?.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    const matchesCategory = !selectedCategory.value || 
      selectedCategory.value === 'All Categories' ||
      influencer.influencer?.categories?.includes(selectedCategory.value);
    
    return matchesSearch && matchesCategory;
  });
});

onMounted(() => {
  getAllInfluencers(null)
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-orange-600 to-orange-500 overflow-hidden">
      <div class="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="flex justify-between items-center">
          <div class="max-w-2xl">
            <h1 class="text-4xl font-bold text-white mb-4">Connect with Influencers</h1>
            <p class="text-xl text-white/90">
              Collaborate with influential voices to amplify your event's reach
            </p>
          </div>
          <NuxtLink to="CreateExpert">
            <Button class="bg-white text-orange-600 hover:bg-orange-50 shadow-lg">
              <Star class="w-5 h-5 mr-2" />
              Become an Influencer
            </Button>
          </NuxtLink>
        </div>

        <!-- Search Section -->
        <div class="mt-12 max-w-4xl mx-auto">
          <div class="flex gap-4">
            <div class="flex-1 relative">
              <Search class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search by name, location, or category..."
                class="w-full pl-12 pr-4 py-3 bg-white rounded-xl shadow-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
              />
            </div>
            <select
              v-model="selectedCategory"
              class="px-4 py-3 bg-white rounded-xl shadow-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
            >
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Influencers Grid -->
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="influencer in filteredInfluencers"
          :key="influencer.id"
          class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <!-- Banner Image -->
          <div class="relative h-48">
            <img 
              :src="influencer.bannerSRC || 'https://via.placeholder.com/800x400'" 
              :alt="influencer.full_name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            
            <!-- Avatar -->
            <div class="absolute -bottom-12 left-6">
              <Avatar class="w-24 h-24 rounded-full border-4 border-white shadow-lg">
                <AvatarImage :src="influencer.avatarSRC" :alt="influencer.full_name" />
                <AvatarFallback>{{ influencer.full_name.charAt(0) }}</AvatarFallback>
              </Avatar>
            </div>

            <!-- Favorite Button -->
            <button class="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors">
              <Heart class="w-5 h-5 text-orange-500" />
            </button>
          </div>

          <div class="p-6 pt-14">
            <!-- Profile Info -->
            <div class="mb-4">
              <h3 class="text-xl font-bold text-gray-900">{{ influencer.full_name }}</h3>
              <p class="text-orange-600 font-medium">{{ influencer.influencer?.headline }}</p>
              <div class="flex items-center mt-2 text-gray-600">
                <MapPin class="w-4 h-4 mr-2" />
                <span class="text-sm">{{ influencer.location }}</span>
              </div>
            </div>

            <!-- Categories -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="category in influencer.influencer?.categories?.slice(0, 3)"
                :key="category"
                class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
              >
                {{ category }}
              </span>
              <span 
                v-if="influencer.influencer?.categories?.length > 3"
                class="text-sm text-gray-500"
              >
                +{{ influencer.influencer.categories.length - 3 }} more
              </span>
            </div>

            <!-- Social Media Links -->
            <div class="flex items-center justify-center space-x-4 mb-6">
              <a href="#" class="group/social flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 hover:from-orange-200 hover:to-orange-300 transition-all duration-300">
                <Instagram class="w-5 h-5 text-orange-600 group-hover/social:scale-110 transition-transform" />
              </a>
              <a href="#" class="group/social flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 hover:from-orange-200 hover:to-orange-300 transition-all duration-300">
                <Youtube class="w-5 h-5 text-orange-600 group-hover/social:scale-110 transition-transform" />
              </a>
              <a href="#" class="group/social flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 hover:from-orange-200 hover:to-orange-300 transition-all duration-300">
                <Twitter class="w-5 h-5 text-orange-600 group-hover/social:scale-110 transition-transform" />
              </a>
              <a href="#" class="group/social flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 hover:from-orange-200 hover:to-orange-300 transition-all duration-300">
                <Globe class="w-5 h-5 text-orange-600 group-hover/social:scale-110 transition-transform" />
              </a>
            </div>

            <!-- Actions -->
            <div class="flex gap-3">
              <Button class="flex-1 bg-orange-500 text-white hover:bg-orange-600">
                Message
                <MessageCircle class="w-4 h-4 ml-2" />
              </Button>
              <NuxtLink 
                :to="{ name: 'InfluencerCard', query: { id: influencer.id } }"
                class="flex-1"
              >
                <Button class="w-full bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50">
                  View Profile
                  <ArrowRight class="w-4 h-4 ml-2" />
                </Button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-grid-white {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>