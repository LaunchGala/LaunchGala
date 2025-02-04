
<style>
    .headerMain {
        background-color: white;
        color: black;
        font-weight: 600;
    }
    .colorOrange {
        color: #ff6900;
    }

    .colorOrangeBg {
        background-color: #ff6900;
    }
</style>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ChevronDown, Menu, Bell, Search } from 'lucide-vue-next'
import { ArrowLeft, ArrowLeftCircle, CrownIcon } from 'lucide-vue-next';
import MessagesButton from './MessagesButton.vue';
import { useRouter, useRoute } from 'vue-router';
import Button from './ui/button/Button.vue';

const router = useRouter();
const hasPreviousRoute = ref(false);

// Watch route changes and track navigation
router.beforeEach((to, from, next) => {
  if (from.name) {
    hasPreviousRoute.value = true; // There's a previous route if `from.name` exists
  } else {
    hasPreviousRoute.value = false; // No previous route
  }
  next();
});
const goBack = () => {
  router.go(-1); // Go back to the previous page
};

const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navigationItems = [
  { name: 'Venues', href: '/AllVenuesNew' },
  { name: 'Volunteers', href: '/AllVolunteers' },
  { name: 'Startups', href: '/FoundersAndStartups', new: true },
  { name: 'Experts/Investors', href: '/AllSpeakers' },
  { name: 'Vendors', href: '/AllVendors', new: true },
  { name: 'Influencers', href: '/AllMedia', new: true },
  { name: 'Talents', href: '/AllTalents' },
  { name: 'AI Lounge', href: '/ai-lounge', new: true },
  { name: 'Events', href: '/AllEvents' },
  { name: 'Contact us', href: '/contact' }
]

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})
</script>

<template>
  <header 
    :class="[
      'fixed w-full top-0 z-50 transition-all duration-300 mb-5',
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-lg'
    ]"
  >
    <div class=" mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo and Website Name -->
        <div class="flex items-center">
        <Button v-if="hasPreviousRoute" @click="goBack" class="flex-shrink bg-white hover:bg-gray-100 text-orange-500 font-bold rounded-full shadow-lg">
          <ArrowLeft class=" text-orange-500 text-xl "></ArrowLeft>
        </Button>
          <a href="/" class="group flex items-center space-x-3">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
              <span class="text-white text-xl font-bold">LG</span>
            </div>
            <div class="flex flex-col">
              <span class="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Launch Gala
              </span>
              <span class="text-sm text-gray-500">Event Planning Platform</span>
            </div>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <!-- Search Bar -->
          <!-- <div class="relative">
            <div class="flex items-center bg-gray-100 rounded-full pl-4 pr-6 py-2 focus-within:ring-2 focus-within:ring-orange-500 transition-all">
              <Search class="w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search events, venues..." 
                class="ml-2 bg-transparent border-none focus:outline-none text-gray-600 placeholder-gray-400 w-48"
              >
            </div>
          </div> -->

          <!-- Dropdown Menu -->
          <div class="relative">
            <button
              @click="toggleDropdown"
              class="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-orange-50 text-gray-700 hover:text-orange-500 transition-all"
            >
              <span>Explore</span>
              <ChevronDown 
                :class="{ 'transform rotate-180': isDropdownOpen }" 
                class="w-4 h-4 transition-transform duration-200" 
              />
            </button>

            <!-- Dropdown Panel -->
            <div
              v-show="isDropdownOpen"
              @mouseleave="closeDropdown"
              class="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform origin-top transition-all duration-200"
            >
              <div class="py-2">
                <NuxtLink
                  v-for="item in navigationItems"
                  :key="item.name"
                  :to="item.href"
                  class="flex items-center justify-between px-4 py-3 hover:bg-orange-50 group transition-colors"
                >
                  <span class="text-gray-600 group-hover:text-orange-500">{{ item.name }}</span>
                  <span 
                    v-if="item.new" 
                    class="px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded-full"
                  >
                    Soon
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Become a Host Button -->
          <NuxtLink
            to="VenueListing"
            class="px-6 py-2.5  text-gray-700 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Become a Host
          </NuxtLink>

          <!-- Notifications -->
          <button class="relative p-2 hover:bg-orange-50 rounded-full transition-colors">
            <Bell class="w-6 h-6 text-gray-600" />
            <span class="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></span>
          </button>

          <!-- User Avatar -->
          <a
            href="/dashboard"
            class="relative group"
          >
            <div class="w-10 h-10 rounded-full overflow-hidden ring-2 ring-orange-100 group-hover:ring-orange-500 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
                class="w-full h-full object-cover"
              >
            </div>
            <span class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 hover:bg-orange-50 rounded-lg transition-colors"
        >
          <Menu class="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-show="isMobileMenuOpen"
      class="lg:hidden bg-white border-t shadow-lg"
    >
      <!-- Mobile Search -->
      <div class="p-4">
        <div class="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <Search class="w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search events, venues..." 
            class="ml-2 bg-transparent border-none focus:outline-none text-gray-600 placeholder-gray-400 w-full"
          >
        </div>
      </div>

      <div class="px-4 py-2 space-y-1">
        <NuxtLink
          v-for="item in navigationItems"
          :key="item.name"
          :to="item.href"
          class="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-orange-50 group transition-colors"
        >
          <span class="text-gray-600 group-hover:text-orange-500">{{ item.name }}</span>
          <span 
            v-if="item.new" 
            class="px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded-full"
          >
            New
          </span>
        </NuxtLink>
        <NuxtLink
          href="VenueListing"
          class="block px-4 py-3 text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl mt-4"
        >
          Become a Host
        </NuxtLink>
      </div>
    </div>

  </header>

  <!-- Spacer to prevent content from hiding under fixed header -->
  <div class="h-20"></div>
  <ChatBot/>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

input::placeholder {
  color: #9CA3AF;
}

input:focus::placeholder {
  color: #D1D5DB;
}
</style>
