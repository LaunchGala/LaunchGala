<script setup lang="ts">
import {
  Heart,
  MessageCircle,
  Search,
  ArrowRight,
  MapPin,
  Rocket,
  Building2,
  Users,
  Target,
  Briefcase,
  Globe,
  TrendingUp,
  DollarSign,
  Sparkles,
  Link
} from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const searchQuery = ref('')
const selectedIndustry = ref('All Industries')
const selectedStage = ref('All Stages')

const industries = [
  'All Industries',
  'Technology',
  'Healthcare',
  'Finance',
  'E-commerce',
  'Education',
  'AI/ML',
  'Blockchain'
]

const stages = [
  'All Stages',
  'Pre-seed',
  'Seed',
  'Series A',
  'Series B',
  'Series C+'
]

const allStartups = ref([
  {
    img: "/Bootstrapping.png",
    name: "Larry Page",
    position: "Co-Founder",
    company: "Google",
    industry: "Technology",
    industries: ["Search Engine", "Cloud Computing", "AI/ML", "Digital Advertising"],
    stage: "Series A",
    location: "Mountain View, CA",
    avatar: "/LarryPage.jpeg",
    likeExpert: false,
    metrics: {
      team: 150,
      raised: "12M",
      growth: "125%"
    }
  },
  {
    img: "/Bootstrapping.png",
    name: "Tim Cook",
    position: "CEO",
    company: "Apple",
    industry: "Technology",
    industries: ["Consumer Electronics", "Software", "Services", "AI/ML"],
    stage: "Series B",
    location: "Cupertino, CA",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/7/77/Tim_Cook.jpg",
    likeExpert: true,
    metrics: {
      team: 250,
      raised: "25M",
      growth: "200%"
    }
  }
])

const filteredStartups = computed(() => {
  return allStartups.value.filter(startup => {
    const matchesSearch = !searchQuery.value || 
      startup.company.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      startup.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      startup.industry.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    const matchesIndustry = selectedIndustry.value === 'All Industries' ||
      startup.industry === selectedIndustry.value;
    
    const matchesStage = selectedStage.value === 'All Stages' ||
      startup.stage === selectedStage.value;
    
    return matchesSearch && matchesIndustry && matchesStage;
  });
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-orange-600 to-orange-500 overflow-hidden">
      <div class="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="flex justify-between items-center">
          <div class="max-w-2xl">
            <div class="flex items-center space-x-3 mb-4">
              <Rocket class="w-8 h-8 text-white animate-float" />
              <h1 class="text-4xl font-bold text-white">Founders & Startups</h1>
            </div>
            <p class="text-xl text-white/90">
              Connect with innovative startups and visionary founders
            </p>
          </div>
          <Button class="bg-white text-orange-600 hover:bg-orange-50 shadow-lg transform hover:scale-105 transition-all">
            <Sparkles class="w-5 h-5 mr-2" />
            List Your Startup
          </Button>
        </div>

        <!-- Search and Filters -->
        <div class="mt-12 max-w-4xl mx-auto">
          <div class="relative">
            <div class="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl"></div>
            <div class="relative p-2">
              <div class="flex items-center gap-4">
                <div class="flex-1 bg-white rounded-xl shadow-lg">
                  <div class="relative">
                    <Search class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      v-model="searchQuery"
                      type="text"
                      placeholder="Search startups by name, industry, or location..."
                      class="w-full pl-12 pr-4 py-3 bg-transparent rounded-xl focus:outline-none"
                    />
                  </div>
                </div>
                <select
                  v-model="selectedIndustry"
                  class="px-4 py-3 bg-white rounded-xl shadow-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
                >
                  <option v-for="industry in industries" :key="industry" :value="industry">
                    {{ industry }}
                  </option>
                </select>
                <select
                  v-model="selectedStage"
                  class="px-4 py-3 bg-white rounded-xl shadow-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
                >
                  <option v-for="stage in stages" :key="stage" :value="stage">
                    {{ stage }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Startups Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="startup in filteredStartups"
          :key="startup.company"
          class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <!-- Company Banner -->
          <div class="relative h-32 bg-gradient-to-r from-orange-500 to-orange-600">
            <div class="absolute inset-0 bg-grid-white/[0.1] bg-[size:16px_16px]"></div>
            
            <!-- Company Logo/Avatar -->
            <div class="absolute -bottom-10 left-6">
              <Avatar class="w-20 h-20 rounded-xl border-4 border-white shadow-lg">
                <AvatarImage :src="startup.avatar" :alt="startup.company" />
                <AvatarFallback>{{ startup.company[0] }}</AvatarFallback>
              </Avatar>
            </div>

            <!-- Funding Stage Badge -->
            <div class="absolute top-4 right-4">
              <Badge class="bg-white/90 text-orange-600 font-medium">
                {{ startup.stage }}
              </Badge>
            </div>
          </div>

          <div class="p-6 pt-12">
            <!-- Company Info -->
            <div class="mb-6">
              <h3 class="text-xl font-bold text-gray-900">{{ startup.company }}</h3>
              <div class="flex items-center mt-1 text-gray-600">
                <MapPin class="w-4 h-4 mr-2" />
                <span class="text-sm">{{ startup.location }}</span>
              </div>
              <!-- Industries Tags (replacing description) -->
              <div class="flex flex-wrap gap-2 mt-3">
                <span
                  v-for="industry in startup.industries?.slice(0, 3)"
                  :key="industry"
                  class="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium"
                >
                  {{ industry }}
                </span>
                <span 
                  v-if="startup.industries?.length > 3"
                  class="text-sm text-gray-500 px-2 py-1"
                >
                  +{{ startup.industries.length - 3 }}
                </span>
              </div>
            </div>

            <!-- Metrics Grid -->
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="p-3 bg-orange-50 rounded-lg text-center">
                <Users class="w-5 h-5 text-orange-500 mx-auto mb-1" />
                <span class="block text-sm font-medium text-gray-900">{{ startup.metrics.team }}</span>
                <span class="text-xs text-gray-600">Team Size</span>
              </div>
              <div class="p-3 bg-orange-50 rounded-lg text-center">
                <DollarSign class="w-5 h-5 text-orange-500 mx-auto mb-1" />
                <span class="block text-sm font-medium text-gray-900">${{ startup.metrics.raised }}</span>
                <span class="text-xs text-gray-600">Raised</span>
              </div>
              <div class="p-3 bg-orange-50 rounded-lg text-center">
                <TrendingUp class="w-5 h-5 text-orange-500 mx-auto mb-1" />
                <span class="block text-sm font-medium text-gray-900">{{ startup.metrics.growth }}</span>
                <span class="text-xs text-gray-600">Growth</span>
              </div>
            </div>

            <!-- Founder Info -->
            <div class="flex items-center mb-6">
              <Avatar class="w-10 h-10 rounded-full ring-2 ring-orange-100">
                <AvatarImage :src="startup.avatar" :alt="startup.name" />
                <AvatarFallback>{{ startup.name[0] }}</AvatarFallback>
              </Avatar>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">{{ startup.name }}</p>
                <p class="text-sm text-gray-600">{{ startup.position }}</p>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex gap-3">
              <Button class="flex-1 bg-orange-500 text-white hover:bg-orange-600">
                Connect
                <MessageCircle class="w-4 h-4 ml-2" />
              </Button>
              <NuxtLink :to="{ name: 'StartupPage' }" class="flex-1">
                <Button class="w-full bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50">
                  Learn More
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

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>