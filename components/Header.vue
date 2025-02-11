<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ChevronDown, Menu, Bell, Search } from 'lucide-vue-next'
import { ArrowLeft, ArrowLeftCircle, CrownIcon } from 'lucide-vue-next';
import MessagesButton from './MessagesButton.vue';
import { useRouter, useRoute } from 'vue-router';
import Button from './ui/button/Button.vue';

const router = useRouter();
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const hasPreviousRoute = ref(false);
const profile = ref({})

const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Logout error:', error);
  } else {
    router.push('/'); // Redirect to login or home page
  }
};
const messagesDialog = ref(null);
const openMessages = () => { 
  messagesDialog.value.openManager = true;
  console.log(messagesDialog.value.openManager)
}

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

const isExploreDropdownOpen = ref(false)
const isUserDropdownOpen = ref(false)
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
  { name: 'AI Lounge', href: '/LaunchAI', new: true },
  { name: 'Events', href: '/AllEvents' },
  { name: 'Contact us', href: '/contact' }
]

const menuItems = [
  { label: 'Messages', icon: 'message-circle', messages: true, badge: 1 },
  { label: 'Dashboard', icon: 'map-pin', href: '/UserDashboard' },
  { label: 'Likelists', icon: 'heart', href: '/likelists' },
  { divider: true },
  { label: 'Provide your Venue', icon: 'home', href: '/VenueListing' },
  { label: 'Create an event', icon: 'user-plus', href: '/CreateEvent' },
  { label: 'Refer a Host', icon: 'user-plus', href: '/refer' },
  { label: 'Account', icon: 'user', href: '/profile' },
  { divider: true },
  { label: 'Gift cards', icon: 'gift', href: '/gift' },
  { label: 'Help Center', icon: 'help-circle', href: '/help' },
  { label: 'Log out', icon: 'log-out', method: logout }
]

const toggleExploreDropdown = () => {
  isExploreDropdownOpen.value = !isExploreDropdownOpen.value
  if (isExploreDropdownOpen.value) isUserDropdownOpen.value = false
}

const toggleUserDropdown = () => {
  isUserDropdownOpen.value = !isUserDropdownOpen.value
  if (isUserDropdownOpen.value) isExploreDropdownOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeExploreDropdown = () => {
  isExploreDropdownOpen.value = false
}

const closeUserDropdown = () => {
  isUserDropdownOpen.value = false
}

const loadProfile = async () => {
  const { data: profiles, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.value.id)
  profile.value = profiles[0]
  profile.value.avatarSRC = await fetchImage(profile.value.avatar_url, 'avatars')
}
const fetchImage = async (id, bucket) => {
  if(!!id) {
    const urlData = await supabase.storage.from(bucket).createSignedUrl(id, 60)
    return urlData?.data?.signedUrl ?? ""
  }
}
onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
  loadProfile()
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

          <!-- Explore Dropdown -->
          <div class="relative">
            <button
              @click="toggleExploreDropdown"
              class="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-orange-50 text-gray-700 hover:text-orange-500 transition-all"
            >
              <span>Explore</span>
              <ChevronDown 
                :class="{ 'transform rotate-180': isExploreDropdownOpen }" 
                class="w-4 h-4 transition-transform duration-200" 
              />
            </button>

            <!-- Explore Dropdown Panel -->
            <div
              v-show="isExploreDropdownOpen"
              @mouseleave="closeExploreDropdown"
              class="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
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
                    New
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

          <!-- User Menu -->
          <div v-if="user" class="relative">
            <button
              @click="toggleUserDropdown"
              class="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full transition-colors border border-gray-200"
            >
              <Menu class="w-5 h-5 text-gray-600" />
              <div class="relative">
                <img
                  :src="profile?.avatarSRC || '/placeholder.svg?height=192&width=192'" 
                  alt="User avatar"
                  class="w-8 h-8 rounded-full"
                >
                <span class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  1
                </span>
              </div>
            </button>

            <!-- User Dropdown Menu -->
            <div
              v-show="isUserDropdownOpen"
              @mouseleave="closeUserDropdown"
              class="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden  "
            >

              <div class="py-2">
                <div v-for="(item, index) in menuItems" :key="index">
                  <div 
                    v-if="item.divider" 
                    class="border-t border-gray-100 my-2"
                  ></div>
                  <NuxtLink
                    v-if="item.href"
                    :to="item.href"
                    class="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div class="flex items-center space-x-3">
                      <i :class="['w-5 h-5 text-gray-500', `lucide-${item.icon}`]"></i>
                      <span class="text-gray-700">{{ item.label }}</span>
                    </div>
                    <span 
                      v-if="item.badge"
                      class="px-2 py-1 bg-red-500 text-white text-xs rounded-full"
                    >
                      {{ item.badge }}
                    </span>
                  </NuxtLink>
                <NuxtLink v-if="item.method" class="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors" @click="item.method"
                  >
                    <div class="flex items-center space-x-3">
                      <i :class="['w-5 h-5 text-gray-500', `lucide-${item.icon}`]"></i>
                      <span class="text-gray-700">{{ item.label }}</span>
                    </div>
                    <span 
                      v-if="item.badge"
                      class="px-2 py-1 bg-red-500 text-white text-xs rounded-full"
                    >
                      {{ item.badge }}
                    </span>

                </NuxtLink>
                <MessagesButton :hidden="true" v-if="item.messages" class="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors" 
                  >
                    <div class="flex items-center space-x-3">
                      <i :class="['w-5 h-5 text-gray-500', `lucide-${item.icon}`]"></i>
                      <span class="text-gray-700">{{ item.label }}</span>
                    </div>
                    <span 
                      v-if="item.badge"
                      class="px-2 py-1 bg-red-500 text-white text-xs rounded-full"
                    >
                      {{ item.badge }}
                    </span>

                </MessagesButton>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!user" class="relative">
            <NuxtLink to="login" class="px-6 py-2.5 bg-orange-500 text-white rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Sign in
            </NuxtLink>
          </div>
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
  <!-- <ChatBot/> -->
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