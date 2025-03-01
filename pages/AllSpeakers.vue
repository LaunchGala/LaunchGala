<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
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
  Star,
  Briefcase,
  Share2,
  X,
  Globe,
  Mail,
  Linkedin,
  Lightbulb
} from 'lucide-vue-next';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Toggle } from '@/components/ui/toggle';
import { Badge } from '@/components/ui/badge';

const searchQuery = ref('');
const selectedCategories = ref<string[]>([]);
const selectedIndustries = ref<string[]>([]);
const showFilters = ref(false);
const allExperts = ref([]);
const loading = ref(true);
const activeFilters = ref<string[]>([]);

const categories = [
  'Technical Mentor',
  'Business Advisor',
  'Industry Expert',
  'Startup Mentor',
  'Investment Advisor'
];

const industries = [
  'Technology',
  'Finance',
  'Healthcare',
  'Education',
  'Real Estate',
  'Marketing'
];

const toggleFilter = (filter: string, type: 'category' | 'industry') => {
  const targetArray = type === 'category' ? selectedCategories : selectedIndustries;
  const index = targetArray.value.indexOf(filter);
  if (index === -1) {
    targetArray.value.push(filter);
  } else {
    targetArray.value.splice(index, 1);
  }
  updateActiveFilters();
};

const updateActiveFilters = () => {
  activeFilters.value = [...selectedCategories.value, ...selectedIndustries.value];
};

const removeFilter = (filter: string) => {
  const categoryIndex = selectedCategories.value.indexOf(filter);
  const industryIndex = selectedIndustries.value.indexOf(filter);
  
  if (categoryIndex !== -1) {
    selectedCategories.value.splice(categoryIndex, 1);
  }
  if (industryIndex !== -1) {
    selectedIndustries.value.splice(industryIndex, 1);
  }
  updateActiveFilters();
};

const clearFilters = () => {
  selectedCategories.value = [];
  selectedIndustries.value = [];
  activeFilters.value = [];
  searchQuery.value = '';
};

async function getAllExperts(query) {
  loading.value = true;
  try {
    const { data: AllExperts, error } = !!query ? await query : await supabase
      .from('profiles')
      .select('*, expert:Experts(*)')
      .eq('is_expert', true);

    if (error) throw error;

    await Promise.all(AllExperts.map(async (profile) => {
      profile.avatarSRC = await fetchImage(profile.avatar_url, 'avatars');
      profile.bannerSRC = await fetchImage(profile.banner_url, 'images');
    }));

    allExperts.value = AllExperts;
  } catch (error) {
    console.error('Error fetching experts:', error);
  } finally {
    loading.value = false;
  }
}

const fetchImage = async (id, bucket) => {
  if (!!id) {
    try {
      const urlData = await supabase.storage.from(bucket).createSignedUrl(id, 60);
      return urlData?.data?.signedUrl ?? "";
    } catch (error) {
      console.error('Error fetching image:', error);
      return "";
    }
  }
  return "";
};

const filteredExperts = computed(() => {
  return allExperts.value.filter(expert => {
    const matchesSearch = searchQuery.value === '' || 
      expert.full_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      expert.expert?.headline?.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesCategories = selectedCategories.value.length === 0 ||
      expert.expert?.categories?.some(cat => selectedCategories.value.includes(cat));

    const matchesIndustries = selectedIndustries.value.length === 0 ||
      expert.industries?.some(ind => selectedIndustries.value.includes(ind));

    return matchesSearch && matchesCategories && matchesIndustries;
  });
});

onMounted(() => {
  getAllExperts(null);
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-orange-600 to-orange-500 overflow-hidden">
      <div class="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- <NuxtLink to="ExpertListing">
            <Button class="bg-white text-orange-600 hover:bg-orange-50 shadow-lg absolute ">
              <Users class="w-5 h-5 mr-2" />
              Provide your Expertise
            </Button>
          </NuxtLink>
        <div class="text-center">
          <h1 class="text-4xl font-bold text-white mb-4">Connect with Industry Experts</h1>
          <p class="text-xl text-white/90 max-w-2xl mx-auto">
            Find and collaborate with experienced professionals who can help guide your journey
          </p>
        </div> -->
        <div class="flex justify-between items-center">
          <div class="max-w-2xl">
            <div class="flex items-center space-x-3 mb-4">
              <Lightbulb class="w-8 h-8 text-white animate-float" />
              <h1 class="text-4xl font-bold text-white">Connect with Industry Experts</h1>
            </div>
            <p class="text-xl text-white/90">
              Find and collaborate with experienced professionals who can help guide your journey            </p>
          </div>
          <NuxtLink to="ExpertListing">
          <Button class="bg-white text-orange-600 hover:bg-orange-50 shadow-lg transform hover:scale-105 transition-all">
            <Sparkles class="w-5 h-5 mr-2" />
            Provide your Expertise
          </Button>
        </NuxtLink>
      </div>

        <!-- Search and Filters -->
        <div class="mt-8 max-w-2xl mx-auto">
          <div class="flex gap-4">
            <div class="flex-1 relative">
              <Search class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search by name, expertise, or industry..."
                class="w-full pl-12 pr-4 py-3 bg-white rounded-xl shadow-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
              />
            </div>
            <Button
              @click="showFilters = !showFilters"
              class="px-6 bg-white/90 backdrop-blur-sm text-orange-600 hover:bg-white rounded-xl shadow-lg"
            >
              <Filter class="w-5 h-5 mr-2" />
              Filters
              <span v-if="activeFilters.length" class="ml-2 px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-sm">
                {{ activeFilters.length }}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters Panel -->
    <div v-if="showFilters" class="bg-white border-b shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-lg font-semibold text-gray-900">Refine your search</h3>
          <Button @click="clearFilters" variant="ghost" class="text-gray-500 hover:text-gray-700">
            Clear all filters
          </Button>
        </div>

        <!-- Active Filters -->
        <div v-if="activeFilters.length" class="flex flex-wrap gap-2 mb-6">
          <Badge
            v-for="filter in activeFilters"
            :key="filter"
            variant="secondary"
            class="px-3 py-1 bg-orange-50 text-orange-600 hover:bg-orange-100"
          >
            {{ filter }}
            <button @click="removeFilter(filter)" class="ml-2 hover:text-orange-800">
              <X class="w-4 h-4" />
            </button>
          </Badge>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Categories -->
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-3">Expert Categories</h4>
            <div class="grid grid-cols-2 gap-2">
              <button
                v-for="category in categories"
                :key="category"
                @click="toggleFilter(category, 'category')"
                :class="[
                  'px-4 py-2 rounded-lg text-left transition-all duration-200',
                  selectedCategories.includes(category)
                    ? 'bg-orange-100 text-orange-600 shadow-inner'
                    : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                ]"
              >
                {{ category }}
              </button>
            </div>
          </div>

          <!-- Industries -->
          <div>
            <h4 class="text-sm font-medium text-gray-700 mb-3">Industries</h4>
            <div class="grid grid-cols-2 gap-2">
              <button
                v-for="industry in industries"
                :key="industry"
                @click="toggleFilter(industry, 'industry')"
                :class="[
                  'px-4 py-2 rounded-lg text-left transition-all duration-200',
                  selectedIndustries.includes(industry)
                    ? 'bg-orange-100 text-orange-600 shadow-inner'
                    : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                ]"
              >
                {{ industry }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Experts Grid -->
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
      </div>

      <!-- Empty State -->
      <div v-else-if="filteredExperts.length === 0" class="text-center py-12">
        <div class="mx-auto w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-4">
          <Search class="w-12 h-12 text-orange-500" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">No experts found</h3>
        <p class="text-gray-600">Try adjusting your search criteria or filters</p>
      </div>

      <!-- Experts Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="expert in filteredExperts"
          :key="expert.id"
          class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <!-- Banner Image -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="expert.bannerSRC || 'https://via.placeholder.com/800x400'"
              :alt="`${expert.full_name}'s banner`"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <!-- Profile Content -->
          <div class="relative px-6">
            <!-- Avatar -->
            <div class="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <Avatar class="w-32 h-32 border-4 border-white shadow-lg rounded-full ">
                <AvatarImage 
                  :src="expert.avatarSRC" 
                  :alt="expert.full_name"
                  class="rounded-full"
                />
                <AvatarFallback class="text-2xl">
                  {{ expert.full_name.charAt(0) }}
                </AvatarFallback>
              </Avatar>
            </div>

            <!-- Expert Info -->
            <div class="pt-20 pb-6 text-center">
              <h3 class="text-xl font-bold text-gray-900">{{ expert.full_name }}</h3>
              <p class="text-orange-600 font-medium mt-1">{{ expert.expert?.headline }}</p>

              <!-- Location -->
              <div class="flex items-center justify-center text-gray-600 mt-2">
                <MapPin class="w-4 h-4 mr-1" />
                <span class="text-sm">{{ expert.location }}</span>
              </div>

              <!-- Categories -->
              <div class="mt-4 flex flex-wrap justify-center gap-2">
                <Badge
                  v-for="category in expert.expert?.categories?.slice(0, 2)"
                  :key="category"
                  class="bg-orange-50 text-orange-600"
                >
                  {{ category }}
                </Badge>
              </div>

              <!-- Industries -->
              <div class="mt-2 flex flex-wrap justify-center gap-2">
                <Badge
                  v-for="industry in expert.industries?.slice(0, 2)"
                  :key="industry"
                  variant="secondary"
                  class="bg-gray-100 text-gray-600"
                >
                  {{ industry }}
                </Badge>
              </div>

              <!-- Social Links -->
              <div class="flex justify-center space-x-4 mt-4">
                <button class="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Mail class="w-5 h-5 text-gray-600" />
                </button>
                <button class="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Linkedin class="w-5 h-5 text-gray-600" />
                </button>
                <button class="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Globe class="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <!-- View Profile Button -->
              <div class="mt-6">
                <NuxtLink 
                  :to="{ name: 'ExpertCardPage', query: { id: expert.id } }"
                  class="block"
                >
                  <Button 
                    class="w-full bg-orange-500 text-white hover:bg-orange-600"
                  >
                    View Full Profile
                    <ArrowRight class="w-4 h-4 ml-2" />
                  </Button>
                </NuxtLink>
              </div>
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

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>