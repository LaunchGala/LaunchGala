<script setup lang="ts">
import {
  Heart,
  MessageCircle,
  ChevronDown,
  Filter,
  Plus,
  Search,
  ArrowRight,
  Calendar as CalendarIcon,
  MapPin,
  Mail,
  Phone,
  Globe,
  Briefcase,
  Users
} from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Toggle } from '@/components/ui/toggle';
import { Badge } from '@/components/ui/badge';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { volunteerTagColors } from '@/utils/volunteerTagColors';
import VolunteerListing from './VolunteerListing.vue';

const supabase = useSupabaseClient()
const isOpen = ref(false)
const searchQuery = ref('')
const selectedCategory = ref('')

const categories = [
  'All Categories',
  'Event Planning',
  'Technical Support',
  'Marketing',
  'Photography',
  'Guest Relations',
  'Security'
]

const allVolunteers = ref([]);
async function getAllVolunteers(query) {
  const { data: AllExperts, error } = !!query ? await query : await supabase
    .from('profiles')
    .select('*, volunteer:Volunteers(*)')
    .eq('is_volunteer', true);
  
  if (error) {
    console.error(error);
    return;
  }

  await Promise.all(AllExperts.map(async (profile) => {
    profile.avatarSRC = await fetchImage(profile.avatar_url, 'avatars')
    profile.bannerSRC = await fetchImage(profile.banner_url, 'images')
  }));
  
  allVolunteers.value = AllExperts;
}

const fetchImage = async (id, bucket) => {
  if (!!id) {
    const urlData = await supabase.storage.from(bucket).createSignedUrl(id, 60);
    return urlData?.data?.signedUrl ?? "";
  }
  return "";
}

const filteredVolunteers = computed(() => {
  return allVolunteers.value.filter(volunteer => {
    const matchesSearch = !searchQuery.value || 
      volunteer.full_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      volunteer.location.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    const matchesCategory = !selectedCategory.value || 
      selectedCategory.value === 'All Categories' ||
      volunteer.volunteer?.categories?.includes(selectedCategory.value);
    
    return matchesSearch && matchesCategory;
  });
});

onMounted(() => {
  getAllVolunteers(null)
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
            <h1 class="text-4xl font-bold text-white mb-4">Connect with Volunteers</h1>
            <p class="text-xl text-white/90">
              Find passionate individuals ready to contribute to your event's success
            </p>
          </div>
          <NuxtLink to="VolunteerListing">
            <Button class="bg-white text-orange-600 hover:bg-orange-50 shadow-lg">
              <Users class="w-5 h-5 mr-2" />
              Become a Volunteer
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
                placeholder="Search by name, location, or skills..."
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

    <!-- Volunteers Grid -->
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="volunteer in filteredVolunteers"
          :key="volunteer.id"
          class="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <!-- Business Card Design -->
          <div class="relative h-48 bg-gradient-to-r from-orange-500 to-orange-600">
            <div class="absolute inset-0 bg-grid-white/[0.1] bg-[size:16px_16px]"></div>
            <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            <!-- Logo/Avatar -->
            <div class="absolute -bottom-14 left-6">
              <Avatar class="w-28 h-28 rounded-full border-4 border-white shadow-lg">
                <AvatarImage :src="volunteer.avatarSRC" :alt="volunteer.full_name" />
                <AvatarFallback>{{ volunteer.full_name.charAt(0) }}</AvatarFallback>
              </Avatar>
            </div>

            <!-- Favorite Button -->
            <button class="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors">
              <Heart class="w-5 h-5 text-orange-500" />
            </button>
          </div>

          <div class="p-6 pt-16">
            <!-- Name and Title -->
            <div class="mb-4">
              <h3 class="text-xl font-bold text-gray-900">{{ volunteer.full_name }}</h3>
              <p class="text-orange-600 font-medium">{{ volunteer.volunteer?.headline }}</p>
            </div>

            <!-- Contact Info -->
            <div class="space-y-2 mb-4">
              <div class="flex items-center text-gray-600">
                <MapPin class="w-4 h-4 mr-2" />
                <span class="text-sm">{{ volunteer.location }}</span>
              </div>
            </div>

            <!-- Skills/Categories -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="category in volunteer.volunteer?.categories?.slice(0, 2)"
                :key="category"
                :class="[
                  'px-3 py-1 rounded-full text-sm font-medium',
                  volunteerTagColors[category] || 'bg-gray-100 text-gray-700'
                ]"
              >
                {{ category }}
              </span>
              <span 
                v-if="volunteer.volunteer?.categories?.length > 3"
                class="text-sm text-gray-500"
              >
                +{{ volunteer.volunteer.categories.length - 3 }} more
              </span>
            </div>

            <!-- Actions -->
            <div class="flex gap-3">
              <Button class="flex-1 bg-orange-500 text-white hover:bg-orange-600">
                Message
                <MessageCircle class="w-4 h-4 ml-2" />
              </Button>
              <NuxtLink 
                :to="{ name: 'VolunteerCardPage', query: { id: volunteer.id } }"
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