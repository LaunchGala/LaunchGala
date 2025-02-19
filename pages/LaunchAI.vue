<script setup lang="ts">
import {
  Search,
  ArrowRight,
  Sparkles,
  Bot,
  Brain,
  Zap,
  Star,
  Heart,
  Share2,
  ExternalLink,
  MessageCircle
} from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

const searchQuery = ref('')
const selectedCategory = ref('All Categories')

const categories = [
  { title: 'Pitchy AI', creator: 'Launch Gala', name: 'Pitch deck creator & evaluator', description: 'Create or evolute your pitch deck with our advanced AI agent', image: "/placeholder.svg" },
  { title: 'Tech Support AI', creator: 'Launch Gala', name: 'Tech support', description: 'Provide technical assistance.', image: "/placeholder.svg" },
  { title: 'DJ AI', creator: 'Launch Gala', name: 'DJ', description: 'Create musical ambiance.', image: "/placeholder.svg" },
  { title: 'Lighting AI', creator: 'Launch Gala', name: 'Lighting', description: 'Handle lighting and effects.', image: "/placeholder.svg" },
  { title: 'Entertainment AI', creator: 'Launch Gala', name: 'Entertainment', description: 'Perform and entertain guests.', image: "/placeholder.svg" },
  { title: 'Host AI', creator: 'Launch Gala', name: 'Hosting', description: 'Greet and accommodate guests.', image: "/placeholder.svg" },
  { title: 'Finance AI', creator: 'Launch Gala', name: 'Finance', description: 'Manage financial operations.', image: "/placeholder.svg" },
  { title: 'Legal AI', creator: 'Launch Gala', name: 'Legal', description: 'Advise on legal matters.', image: "/placeholder.svg" },
  { title: 'Chef AI', creator: 'Launch Gala', name: 'Cooking', description: 'Prepare and cook meals.', image: "/placeholder.svg" },
  { title: 'Bartender AI', creator: 'Launch Gala', name: 'Bartending', description: 'Serve drinks and cocktails.', image: "/placeholder.svg" },
  { title: 'Marketing AI', creator: 'Launch Gala', name: 'Marketing', description: 'Promote events and activities.', image: "/placeholder.svg" },
  { title: 'Builder AI', creator: 'Launch Gala', name: 'Building', description: 'Construct and repair structures.', image: "/placeholder.svg" }
];

const categoryFilters = [
  'All Categories',
  'Business',
  'Creative',
  'Technical',
  'Event Planning',
  'Marketing',
  'Finance'
]

const filteredAgents = computed(() => {
  return categories.filter(agent => {
    const matchesSearch = !searchQuery.value || 
      agent.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      agent.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    return matchesSearch;
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
              <Bot class="w-8 h-8 text-white animate-bounce" />
              <h1 class="text-4xl font-bold text-white">AI Agents Marketplace</h1>
            </div>
            <p class="text-xl text-white/90">
              Discover powerful AI agents to enhance your event planning experience
            </p>
          </div>
          <Button class="bg-white text-orange-600 hover:bg-orange-50 shadow-lg transform hover:scale-105 transition-all">
            <Sparkles class="w-5 h-5 mr-2" />
            Submit Your Agent
          </Button>
        </div>

        <!-- Search Section -->
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
                      placeholder="Search AI agents by name or capability..."
                      class="w-full pl-12 pr-4 py-3 bg-transparent rounded-xl focus:outline-none"
                    />
                  </div>
                </div>
                <select
                  v-model="selectedCategory"
                  class="px-4 py-3 bg-white rounded-xl shadow-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
                >
                  <option v-for="category in categoryFilters" :key="category" :value="category">
                    {{ category }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- AI Agents Grid -->
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="agent in filteredAgents"
          :key="agent.title"
          class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
        >
          <!-- Agent Header -->
          <div class="relative h-48 bg-gradient-to-br from-orange-500 to-orange-600 p-8">
            <div class="absolute inset-0 bg-grid-white/[0.1] bg-[size:16px_16px]"></div>
            
            <!-- Agent Icon -->
            <div class="relative h-full flex items-center justify-center">
              <Brain class="w-24 h-24 text-white/90 group-hover:scale-110 transition-transform duration-500" />
            </div>

            <!-- Like Button -->
            <button class="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white transition-colors">
              <Heart class="w-5 h-5 text-orange-500" />
            </button>
          </div>

          <!-- Agent Content -->
          <div class="p-6 space-y-6">
            <div>
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xl font-bold text-gray-900">{{ agent.title }}</h3>
                <div class="flex items-center bg-orange-50 px-3 py-1.5 rounded-full">
                  <Star class="w-4 h-4 text-orange-500 mr-1" />
                  <span class="font-medium text-orange-600">4.9</span>
                </div>
              </div>
              <p class="text-orange-600 font-medium">{{ agent.name }}</p>
              <div class="flex items-center mt-2 text-gray-600">
                <Zap class="w-4 h-4 mr-2" />
                <span class="text-sm">By {{ agent.creator }}</span>
              </div>
            </div>

            <p class="text-gray-600">{{ agent.description }}</p>

            <!-- Actions -->
            <div class="flex gap-3">
              <Button class="flex-1 bg-orange-500 text-white hover:bg-orange-600">
                Try Now
                <Sparkles class="w-4 h-4 ml-2" />
              </Button>
              <NuxtLink to="AiAgentPage" class="flex-1">
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