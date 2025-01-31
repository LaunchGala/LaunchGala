<template>
  <section class="pt-12 pb-1 bg-orange-200 bg-opacity-50 p-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <header class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Find Volunteers</h1>
          <p class="text-lg text-gray-900">
            Finding professional volunteers to help you with your event
          </p>
        </div>
        <!-- <button 
          class="bg-white text-orange-500 border-2 border-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Become a volunteer
        </button> -->
      </header>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
        <div 
          v-for="(category, index) in categories" 
          :key="category.title"
          class="category-card group"
          :style="{ animationDelay: `${index * 100}ms` }"
          @mouseenter="activeCard = index"
          @mouseleave="activeCard = null"
        >
          <div 
            class="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden"
            :class="{ 'ring-2 ring-orange-500': activeCard === index }"
          >
            <!-- Background Pattern -->
            <div 
              class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
              :style="{
                backgroundImage: 'radial-gradient(circle at 20px 20px, orange 2px, transparent 0)',
                backgroundSize: '40px 40px'
              }"
            ></div>

            <!-- Icon -->
            <div class="relative z-10 mb-6">
              <div class="w-20 h-20 mx-auto bg-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <component 
                  :is="category.icon" 
                  class="w-12 h-12 text-orange-500 transform group-hover:rotate-12 transition-transform duration-500"
                />
              </div>
            </div>

            <!-- Content -->
            <div class="relative z-10 text-center">
              <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                {{ category.title }}
              </h3>
              <p v-if="category.description" class="text-gray-600 text-sm ">
                {{ category.description }}
              </p>
            </div>

            <!-- Hover Border Effect -->
            <div class="absolute inset-0 border-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <!-- <div class="text-left">
        <button class="inline-flex items-left text-orange-500 hover:text-orange-600 font-medium group ">
          <span class="bg-white text-orange-500 border-2 border-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">View All</span>
        </button>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { 
  ClipboardListIcon, 
  MonitorIcon, 
  TruckIcon, 
  UtensilsIcon, 
  MoreHorizontalIcon,
  ArrowRightIcon 
} from 'lucide-vue-next'

const activeCard = ref(null)

const categories = [
  {
    title: 'Administrative Support',
    icon: ClipboardListIcon,
    description: 'Help with planning, scheduling, and organization'
  },
  {
    title: 'Tech Support',
    icon: MonitorIcon,
    description: 'Provide technical assistance and IT solutions'
  },
  {
    title: 'Logistics & Coordination',
    icon: TruckIcon,
    description: 'Manage event logistics and coordination'
  },
  {
    title: 'Catering & Hospitality',
    icon: UtensilsIcon,
    description: 'Support with food service and guest relations'
  },
  {
    title: 'More...',
    icon: MoreHorizontalIcon,
    description: 'Discover additional volunteer opportunities'
  }
]
</script>

<style scoped>
.category-card {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover lift effect */
.category-card:hover {
  transform: translateY(-5px);
}

/* Smooth transitions */
.category-card > div {
  transition: all 0.3s ease;
}
</style>