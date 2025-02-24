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
  Briefcase,
  Award,
  Users,
  Sparkles
} from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Toggle } from '@/components/ui/toggle';
import { Badge } from '@/components/ui/badge';

const supabase = useSupabaseClient()
const searchQuery = ref('')
const selectedCategory = ref('')

const categories = [
  'All Categories',
  'Performer',
  'Speaker',
  'Host',
  'Artist',
  'Musician',
  'Designer',
  'Technical Expert'
]

const talents = ref([]);

async function getAllTalent(query) {
  const { data: AllTalents, error } = !!query ? await query : await supabase
    .from('profiles')
    .select('*, talent:Talent(*)')
    .eq('is_talent', true);

  if (error) {
    console.error(error);
    return;
  }

  await Promise.all(AllTalents.map(async (profile) => {
    profile.avatarSRC = await fetchImage(profile.avatar_url, 'avatars')
    profile.bannerSRC = await fetchImage(profile.banner_url, 'images')
  }));

  talents.value = AllTalents;
}

const fetchImage = async (id, bucket) => {
  if (!!id) {
    const urlData = await supabase.storage.from(bucket).createSignedUrl(id, 60);
    return urlData?.data?.signedUrl ?? "";
  }
  return "";
}

const filteredTalents = computed(() => {
  return talents.value.filter(talent => {
    const matchesSearch = !searchQuery.value || 
      talent.full_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      talent.location?.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    const matchesCategory = !selectedCategory.value || 
      selectedCategory.value === 'All Categories' ||
      talent.talent?.categories?.includes(selectedCategory.value);
    
    return matchesSearch && matchesCategory;
  });
});

onMounted(() => {
  getAllTalent(null)
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
            <h1 class="text-4xl font-bold text-white mb-4">Discover Amazing Talent</h1>
            <p class="text-xl text-white/90">
              Connect with skilled professionals to make your event extraordinary
            </p>
          </div>
          <NuxtLink to="TalentListing">
            <Button class="bg-white text-orange-600 hover:bg-orange-50 shadow-lg">
              <Sparkles class="w-5 h-5 mr-2" />
              Showcase Your Talent
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
                placeholder="Search by name, skills, or location..."
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

    <!-- Talents Grid -->
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="talent in filteredTalents"
          :key="talent.id"
          class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <!-- Talent Card Header -->
          <div class="relative h-48">
            <div class="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600">
              <div class="absolute inset-0 bg-grid-white/[0.1] bg-[size:16px_16px]"></div>
            </div>
            <div class="absolute inset-0 bg-black/20"></div>
          
            <!-- Avatar -->
            <div class="absolute -bottom-12 left-6">
              <Avatar class="w-24 h-24 rounded-full border-4 border-white shadow-lg">
                <AvatarImage :src="talent.avatarSRC" :alt="talent.full_name" />
                <AvatarFallback>{{ talent.full_name.charAt(0) }}</AvatarFallback>
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
              <h3 class="text-xl font-bold text-gray-900">{{ talent.full_name }}</h3>
              <p class="text-orange-600 font-medium">{{ talent.talent?.headline }}</p>
              <div class="flex items-center mt-2 text-gray-600">
                <MapPin class="w-4 h-4 mr-2" />
                <span class="text-sm">{{ talent.location }}</span>
              </div>
            </div>

            <!-- Employment Types -->
            <div class="mb-4">
              <h4 class="text-sm font-medium text-gray-700 mb-2">Employment Types</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="type in talent.talent?.employment_type?.slice(0, 3)"
                  :key="type"
                  class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                >
                  {{ type }}
                </span>
                <span 
                  v-if="talent.talent?.employment_type?.length > 3"
                  class="text-sm text-gray-500"
                >
                  +{{ talent.talent.employment_type.length - 3 }} more
                </span>
              </div>
            </div>

            <!-- Industries -->
            <div class="mb-6">
              <h4 class="text-sm font-medium text-gray-700 mb-2">Industries</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="industry in talent.industries?.slice(0, 3)"
                  :key="industry"
                  class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                >
                  {{ industry }}
                </span>
                <span 
                  v-if="talent.industries?.length > 3"
                  class="text-sm text-gray-500"
                >
                  +{{ talent.industries.length - 3 }} more
                </span>
              </div>
            </div>

            <!-- Experience Badge -->
            <div class="mb-6">
              <div class="p-3 bg-orange-50 rounded-lg">
                <div class="flex items-center">
                  <Award class="w-5 h-5 text-orange-500 mr-2" />
                  <span class="text-sm text-gray-700">5 Years Experience</span>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex gap-3">
              <Button class="flex-1 bg-orange-500 text-white hover:bg-orange-600">
                Contact
                <MessageCircle class="w-4 h-4 ml-2" />
              </Button>
              <NuxtLink 
                :to="{ name: 'TalentCardPage', query: { id: talent.id } }"
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