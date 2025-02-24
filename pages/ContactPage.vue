<script setup lang="ts">
import {
  MessageSquare,
  Star,
  Trophy,
  Target,
  Send,
  Sparkles,
  Gift,
  Medal,
  Crown,
  Rocket,
  Building2,
  Users,
  MapPin,
  Megaphone
} from 'lucide-vue-next';

const form = ref({
  name: '',
  email: '',
  message: '',
  category: ''
});

const categories = [
  { 
    id: 'venue', 
    label: 'Provide Venue', 
    icon: Building2, 
    points: 150,
    description: 'List your venue and earn points for each booking'
  },
  { 
    id: 'ambassador', 
    label: 'Ambassador Program', 
    icon: Megaphone, 
    points: 200,
    description: 'Join our ambassador program and earn points for referrals'
  },
  { 
    id: 'event', 
    label: 'Plan an Event', 
    icon: Target, 
    points: 50,
    description: 'Get help planning your next event'
  },
  { 
    id: 'partner', 
    label: 'Business Partnership', 
    icon: Trophy, 
    points: 100,
    description: 'Explore partnership opportunities'
  },
  { 
    id: 'feedback', 
    label: 'Share Feedback', 
    icon: Star, 
    points: 30,
    description: 'Help us improve our platform'
  },
  { 
    id: 'support', 
    label: 'Get Support', 
    icon: MessageSquare, 
    points: 20,
    description: 'Get help with any issues'
  }
];

const userPoints = ref(0);
const currentLevel = ref(1);
const showReward = ref(false);
const selectedCategory = ref('');
const isSubmitting = ref(false);

const levels = [
  { level: 1, title: 'Event Rookie', icon: Medal, required: 0, perks: ['Basic Support', 'Community Access'] },
  { level: 2, title: 'Party Planner', icon: Gift, required: 100, perks: ['Priority Support', '5% Venue Discount', 'Event Templates'] },
  { level: 3, title: 'Event Master', icon: Crown, required: 250, perks: ['VIP Support', '10% Venue Discount', 'Early Access to Features'] },
  { level: 4, title: 'Gala Legend', icon: Rocket, required: 500, perks: ['Dedicated Manager', '15% Venue Discount', 'Exclusive Events'] }
];

const currentLevelInfo = computed(() => {
  return levels.find(l => l.level === currentLevel.value);
});

const nextLevelInfo = computed(() => {
  return levels.find(l => l.level === currentLevel.value + 1);
});

const progressToNextLevel = computed(() => {
  if (!nextLevelInfo.value) return 100;
  const current = userPoints.value - (currentLevelInfo.value?.required || 0);
  const required = nextLevelInfo.value.required - (currentLevelInfo.value?.required || 0);
  return (current / required) * 100;
});

const selectCategory = (category) => {
  selectedCategory.value = category.id;
  form.value.category = category.id;
};

const handleSubmit = async () => {
  isSubmitting.value = true;
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Add points based on selected category
  const category = categories.find(c => c.id === selectedCategory.value);
  if (category) {
    userPoints.value += category.points;
    
    // Check for level up
    const newLevel = levels.findIndex(l => userPoints.value < l.required);
    if (newLevel > currentLevel.value) {
      currentLevel.value = newLevel;
      showReward.value = true;
      setTimeout(() => {
        showReward.value = false;
      }, 3000);
    }
  }
  
  isSubmitting.value = false;
  form.value = { name: '', email: '', message: '', category: '' };
  selectedCategory.value = '';
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
    <!-- Level Up Reward Animation -->
    <div
      v-if="showReward"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
    >
      <div class="bg-white rounded-2xl p-8 text-center transform animate-bounce-in">
        <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
          <component :is="currentLevelInfo?.icon" class="w-10 h-10 text-white" />
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Level Up!</h3>
        <p class="text-gray-600 mb-4">You've reached {{ currentLevelInfo?.title }}!</p>
        <div class="space-y-2">
          <p class="text-sm font-medium text-gray-900">New Perks Unlocked:</p>
          <ul class="text-sm text-gray-600">
            <li v-for="perk in currentLevelInfo?.perks" :key="perk" class="flex items-center justify-center">
              <Sparkles class="w-4 h-4 text-orange-500 mr-2" />
              {{ perk }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-orange-600 to-orange-500 overflow-hidden">
      <div class="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
      <div class="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div class="inline-flex items-center space-x-3 mb-6">
          <div class="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
            <MessageSquare class="w-8 h-8 text-white animate-bounce" />
          </div>
          <h1 class="text-4xl font-bold text-white">Get in Touch</h1>
        </div>
        
        <!-- Level Progress -->
        <div class="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-3">
              <component 
                :is="currentLevelInfo?.icon" 
                class="w-8 h-8 text-white"
              />
              <div class="text-left">
                <p class="text-white/90 text-sm">Current Level</p>
                <p class="text-white font-bold">{{ currentLevelInfo?.title }}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-white/90 text-sm">Points</p>
              <p class="text-white font-bold">{{ userPoints }}</p>
            </div>
          </div>
          
          <div class="relative h-4 bg-white/20 rounded-full overflow-hidden">
            <div 
              class="absolute top-0 left-0 h-full bg-white/40 transition-all duration-1000"
              :style="{ width: `${progressToNextLevel}%` }"
            ></div>
          </div>
          
          <div v-if="nextLevelInfo" class="mt-2 text-white/90 text-sm text-right">
            {{ nextLevelInfo.required - userPoints }} points to {{ nextLevelInfo.title }}
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-16">
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div class="p-8">
          <!-- Categories -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="selectCategory(category)"
              :class="[
                'p-6 rounded-xl border-2 transition-all duration-300 text-left group hover:scale-105 transform',
                selectedCategory === category.id
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-orange-200'
              ]"
            >
              <div class="flex items-center justify-between mb-3">
                <div :class="[
                  'p-3 rounded-lg transition-colors',
                  selectedCategory === category.id 
                    ? 'bg-orange-100' 
                    : 'bg-gray-100 group-hover:bg-orange-50'
                ]">
                  <component 
                    :is="category.icon"
                    :class="[
                      'w-6 h-6',
                      selectedCategory === category.id ? 'text-orange-500' : 'text-gray-400 group-hover:text-orange-400'
                    ]"
                  />
                </div>
                <div class="flex items-center space-x-1 text-sm">
                  <Star 
                    :class="[
                      'w-4 h-4',
                      selectedCategory === category.id ? 'text-orange-500' : 'text-gray-400 group-hover:text-orange-400'
                    ]"
                  />
                  <span :class="selectedCategory === category.id ? 'text-orange-500' : 'text-gray-400 group-hover:text-orange-400'">
                    +{{ category.points }}
                  </span>
                </div>
              </div>
              <h3 class="font-medium mb-1" :class="selectedCategory === category.id ? 'text-orange-500' : 'text-gray-700'">
                {{ category.label }}
              </h3>
              <p class="text-sm text-gray-500">{{ category.description }}</p>
            </button>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="space-y-4">
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your name"
              />
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your email"
              />
              <textarea
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="!selectedCategory || isSubmitting"
              class="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
              <Send class="w-4 h-4" :class="{ 'animate-spin': isSubmitting }" />
            </button>
          </form>
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

@keyframes bounce-in {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.05); opacity: 0.8; }
  70% { transform: scale(0.9); opacity: 0.9; }
  100% { transform: scale(1); opacity: 1; }
}

.animate-bounce-in {
  animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
</style>