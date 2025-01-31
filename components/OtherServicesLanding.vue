<template>
  <section class="pb-16 pt-2 p-8 bg-orange-200 bg-opacity-50">
    <div class="max-w-7xl mx-auto">
      <header class="mb-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">We also help you with</h2>
        <p class="text-lg text-gray-600">
          Finding Speakers, Investors, Advisers, Talents, Media, Influencers, Vendors & more
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div 
          v-for="(service, index) in services" 
          :key="service.title"
          class="service-card"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
            <div class="icon-wrapper mb-6 relative h-32 flex items-center justify-center group">
              <component 
                :is="service.icon" 
                class="w-16 h-16 text-orange-500 z-10 transform group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-orange-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-900 mb-3 text-center">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 text-center mb-6">
              {{ service.description }}
            </p>
            
            <button class="flex items-center justify-center w-full text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300 group">
              Explore
              <ArrowRightIcon class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  UsersIcon, 
  RadioIcon, 
  ShoppingBagIcon, 
  UsersRoundIcon,
  SparklesIcon,
  ArrowRightIcon,
  LightbulbIcon 
} from 'lucide-vue-next'

const services = [
  {
    title: 'Speakers and Investors',
    description: 'Invite Experts and Advisers to your Event',
    icon: UsersIcon
  },
  {
    title: 'Media & Influencers',
    description: 'Partner and Collaborate to Boost your Event',
    icon: RadioIcon
  },
  {
    title: 'Vendors',
    description: 'Find the Perfect Vendors to Meet All your Event Needs',
    icon: ShoppingBagIcon
  },
  {
    title: 'Talents',
    description: 'Match with Co-founders and Find your Dream Team',
    icon: LightbulbIcon
  },
  {
    title: 'Sponsors',
    description: 'Plan your Event and Secure Various Sponsorships',
    icon: SparklesIcon
  }
]
</script>

<style scoped>
.service-card {
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

.icon-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: radial-gradient(
    circle at center,
    rgba(251, 146, 60, 0.2) 0%,
    rgba(251, 146, 60, 0) 70%
  );
  transform: scale(0.8);
  opacity: 0;
  transition: all 0.3s ease;
}

.icon-wrapper:hover::before {
  transform: scale(1.2);
  opacity: 1;
}

/* Custom animations for each icon on hover */
.service-card:nth-child(1) .icon-wrapper:hover svg {
  animation: shake 0.5s ease infinite;
}

.service-card:nth-child(2) .icon-wrapper:hover svg {
  animation: pulse 1s ease infinite;
}

.service-card:nth-child(3) .icon-wrapper:hover svg {
  animation: swing 1s ease infinite;
}

.service-card:nth-child(4) .icon-wrapper:hover svg {
  animation: bounce 0.5s ease infinite;
}

.service-card:nth-child(5) .icon-wrapper:hover svg {
  animation: sparkle 1s ease infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes swing {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(15deg); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

@keyframes sparkle {
  0%, 100% { 
    transform: scale(1) rotate(0deg); 
  }
  50% { 
    transform: scale(1.2) rotate(180deg); 
  }
}
</style>