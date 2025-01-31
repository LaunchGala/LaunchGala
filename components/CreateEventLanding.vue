<template>
  <section class="pb-2 pt-12  p-8">
    <div class="max-w-7xl mx-auto">
      <header class="flex justify-between items-center mb-8">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Create your Event</h2>
          <p class="text-lg text-gray-600">
            From Conferences to Concerts, Access Venues, Talent and Resources for Any Occasion
          </p>
        </div>
        <button class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
          Create Event
        </button>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(event, index) in events" 
          :key="event.title"
          class="event-card group"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="relative h-full overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <!-- Background Image with Gradient Overlay -->
            <div class="absolute inset-0">
              <img 
                :src="event.image" 
                :alt="event.title"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
            </div>

            <!-- Content -->
            <div class="relative h-full p-6 flex flex-col">
              <div class="network-icon mb-6 transform group-hover:scale-110 transition-all duration-300">
                <svg width="80" height="80" viewBox="0 0 120 120" class="mx-auto">
                  <!-- Central circle -->
                  <circle cx="60" cy="60" r="8" class="fill-orange-500" />
                  
                  <!-- Connecting lines and nodes -->
                  <g class="nodes-group">
                    <template v-for="(_, i) in 8" :key="i">
                      <line
                        :x1="60"
                        :y1="60"
                        :x2="60 + 40 * Math.cos(i * Math.PI / 4)"
                        :y2="60 + 40 * Math.sin(i * Math.PI / 4)"
                        class="stroke-orange-300 stroke-2"
                      />
                      <circle
                        :cx="60 + 40 * Math.cos(i * Math.PI / 4)"
                        :cy="60 + 40 * Math.sin(i * Math.PI / 4)"
                        r="6"
                        class="fill-orange-500"
                      />
                    </template>
                  </g>
                  
                  <!-- Rocket -->
                  <path
                    d="M60 30 L65 45 L60 40 L55 45 Z"
                    class="fill-orange-500 transform origin-center rocket"
                  />
                </svg>
              </div>

              <h3 class="text-2xl font-semibold text-white mb-3">
                {{ event.title }}
              </h3>
              <p class="text-gray-200 mb-6 flex-grow">
                {{ event.description }}
              </p>
              
              <button class="flex items-center text-orange-400 hover:text-orange-300 font-medium transition-colors duration-300 group/btn mt-auto">
                Create
                <ArrowRightIcon class="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRightIcon } from 'lucide-vue-next'

const events = [
  {
    title: 'Launch Event',
    description: 'Launch your Startup or promote new service/product',
    image: '/eventLanding01.jpg'
  },
  {
    title: 'Corporate Event',
    description: 'Organize your business conferences.',
    image: '/eventLanding03.jpg'
  },
  {
    title: 'Pop-up Shop',
    description: 'Influencers & live streamers connecting with audience in real life',
    image: '/eventLanding04.jpg'
  },
  {
    title: 'House Party',
    description: 'Create an intimate event at your home.',
    image: '/venueBG01.jpeg'
  }
]
</script>

<style scoped>
.event-card {
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

.network-icon:hover .nodes-group {
  animation: rotate 10s linear infinite;
}

.network-icon:hover .rocket {
  animation: pulse 1s ease-in-out infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>