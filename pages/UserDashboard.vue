<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  Bell, MessageCircle, Calendar, Users, Award, 
  Briefcase, Radio, ShoppingBag, Network, Settings,
  ChevronRight, MapPin, DollarSign, Star, Clock,
  CheckCircle, AlertCircle, Search, Menu, X,
  ChevronDown, Filter, Plus, MoreVertical,
  Sparkles, Heart, Globe, Mail, Rocket,
  Target, Trophy, Gift, Crown, Zap,
  PartyPopper, Music, Mic2, Camera, LightbulbIcon,
  Lightbulb
} from 'lucide-vue-next'

const user = ref({
  name: 'Rashid Rifai',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rashid',
  kudos: 2235,
  followers: 123,
  following: 56,
  verificationStatus: 'verified',
  role: 'Event Organizer',
  level: 'Event Master',
  nextLevelProgress: 75,
  achievements: [
    { icon: Trophy, label: 'Top Organizer', color: 'text-yellow-500' },
    { icon: Star, label: 'Rising Star', color: 'text-purple-500' },
    { icon: Crown, label: 'Community Leader', color: 'text-blue-500' }
  ],
  contributions: {
    volunteering: 12,
    venue: 8,
    expert: 5,
    sponsor: 2
  }
})

const quickActions = [
  { icon: Plus, label: 'Create Event', color: 'bg-orange-500', href: '/CreateEvent' },
  { icon: MapPin, label: 'Book Venue', color: 'bg-blue-500', href: '/AllVenuesNew' },
  { icon: Star, label: 'Find Vendors', color: 'bg-green-500', href: '/AllVendors' },
  { icon: LightbulbIcon, label: 'Find Experts', color: 'bg-yellow-500', href: '/AllExperts' },
  { icon: Users, label: 'Find Volunteers', color: 'bg-purple-500', href: '/AllVolunteers' },
  { icon: Gift, label: 'Find Sponsors', color: 'bg-indigo-500 ', href: '/AllSponsors' }

]

const navigationItems = [
  { icon: Calendar, label: 'Dashboard', id: 'dashboard', badge: null },
  { icon: MapPin, label: 'Venues', id: 'venues', badge: 3, href: '/AllVenuesNew' },
  { icon: Users, label: 'Volunteers', id: 'volunteers', badge: null },
  { icon: Radio, label: 'Events', id: 'events', badge: 2 },
  { icon: Award, label: 'Sponsors', id: 'sponsors', badge: null },
  { icon: Briefcase, label: 'Experts', id: 'experts', badge: null },
  { icon: Star, label: 'Influencers', id: 'influencers', badge: null },
  { icon: ShoppingBag, label: 'Vendors', id: 'vendors', badge: null },
  { icon: Network, label: 'Network', id: 'network', badge: 5 }
]

const stats = [
  { 
    label: 'Total Events', 
    value: '24', 
    icon: Calendar, 
    trend: '+12%', 
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    details: 'Includes both upcoming and past events',
    sparkline: [30, 45, 35, 50, 40, 60, 55]
  },
  { 
    label: 'Active Venues', 
    value: '8', 
    icon: MapPin, 
    trend: '+5%', 
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    details: 'Currently listed venues',
    sparkline: [20, 25, 22, 30, 28, 35, 32]
  },
  { 
    label: 'Total Earnings', 
    value: '$12.5k', 
    icon: DollarSign, 
    trend: '+18%', 
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    details: 'Revenue from venue bookings and events',
    sparkline: [1000, 1500, 1200, 2000, 1800, 2500, 2300]
  },
  { 
    label: 'Expert Sessions', 
    value: '56', 
    icon: Lightbulb, 
    trend: '+33%', 
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    details: 'Total hours contributed',
    sparkline: [40, 60, 50, 80, 70, 100, 90]
  },
  { 
    label: 'Volunteer Hours', 
    value: '156', 
    icon: Clock, 
    trend: '+25%', 
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    details: 'Total hours contributed',
    sparkline: [40, 60, 50, 80, 70, 100, 90]
  },
  { 
    label: 'Sponsors Value', 
    value: '$4.2K', 
    icon: Gift, 
    trend: '+25%', 
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
    details: 'Sponsors total value',
    sparkline: [40, 60, 50, 80, 70, 100, 90]
  }
]

const upcomingEvents = ref([
  {
    id: 1,
    title: 'Tech Conference 2025',
    date: 'Oct 24, 2023',
    time: '9:00 AM - 5:00 PM',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    isNew: true,
    status: 'upcoming',
    location: 'San Francisco, CA',
    attendees: 250,
    budget: '$25,000',
    tasks: { completed: 8, total: 12 },
    organizer: {
      name: 'Sarah Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      role: 'Lead Organizer'
    },
    team: [
      { avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike', name: 'Mike Johnson' },
      { avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma', name: 'Emma Wilson' },
      { avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex', name: 'Alex Lee' }
    ]
  },
  {
    id: 2,
    title: 'Startup Meetup',
    date: 'Nov 11, 2023',
    time: '6:00 PM - 9:00 PM',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    isNew: true,
    status: 'upcoming',
    location: 'New York, NY',
    attendees: 150,
    budget: '$15,000',
    tasks: { completed: 5, total: 10 },
    organizer: {
      name: 'Mike Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      role: 'Event Coordinator'
    },
    team: [
      { avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', name: 'Sarah Chen' },
      { avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', name: 'David Kim' }
    ]
  }
])

const messages = ref([
  {
    id: 1,
    sender: 'Sarah Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    message: 'Hi, Im interested in your venue for our upcoming event...',
    time: '2 min ago',
    unread: true,
    type: 'venue'
  },
  {
    id: 2,
    sender: 'Mike Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    message: 'Thanks for volunteering at our last event!',
    time: '1 hour ago',
    unread: true,
    type: 'volunteer'
  }
])

const notifications = ref([
  {
    id: 1,
    title: 'New Venue Request',
    message: 'Tech Startup Inc. requested to book Conference Room A',
    time: '5 min ago',
    type: 'info',
    icon: MapPin,
    color: 'text-blue-500',
    read: false
  },
  {
    id: 2,
    title: 'Event Reminder',
    message: 'Tech Conference 2025 starts in 2 days',
    time: '1 hour ago',
    type: 'warning',
    icon: Calendar,
    color: 'text-yellow-500',
    read: false
  },
  {
    id: 3,
    title: 'Achievement Unlocked',
    message: 'You\'ve earned the "Event Master" badge!',
    time: '2 hours ago',
    type: 'success',
    icon: Trophy,
    color: 'text-green-500',
    read: false
  }
])

const recentActivity = ref([
  {
    id: 1,
    type: 'event',
    icon: Calendar,
    color: 'bg-orange-100 text-orange-600',
    message: 'Created new event "Tech Conference 2025"',
    time: '2 hours ago'
  },
  {
    id: 2,
    type: 'venue',
    icon: MapPin,
    color: 'bg-blue-100 text-blue-600',
    message: 'Booked "Grand Hall" for Startup Meetup',
    time: '3 hours ago'
  },
  {
    id: 3,
    type: 'volunteer',
    icon: Users,
    color: 'bg-purple-100 text-purple-600',
    message: 'Added 3 new volunteers to the team',
    time: '5 hours ago'
  }
])

// State
const isSidebarCollapsed = ref(false)
const isMobileMenuOpen = ref(false)
const showNotifications = ref(false)
const showUserMenu = ref(false)
const activeSection = ref('dashboard')
const searchQuery = ref('')

// Computed
const unreadMessages = computed(() => messages.value.filter(m => m.unread).length)
const unreadNotifications = computed(() => notifications.value.filter(n => !n.read).length)

// Methods
const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

const markMessageAsRead = (messageId: number) => {
  const message = messages.value.find(m => m.id === messageId)
  if (message) {
    message.unread = false
  }
}

const markNotificationAsRead = (notificationId: number) => {
  const notification = notifications.value.find(n => n.id === notificationId)
  if (notification) {
    notification.read = true
  }
}

const handleSearch = () => {
  console.log('Searching for:', searchQuery.value)
}

const getMessageIcon = (type: string) => {
  switch (type) {
    case 'venue': return MapPin
    case 'volunteer': return Users
    case 'event': return Calendar
    default: return MessageCircle
  }
}

const getMessageIconColor = (type: string) => {
  switch (type) {
    case 'venue': return 'text-blue-500'
    case 'volunteer': return 'text-green-500'
    case 'event': return 'text-purple-500'
    default: return 'text-gray-500'
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      @click="isMobileMenuOpen = false"
    ></div>

    <!-- Sidebar -->
    <aside 
      :class="[
        'fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-30 transition-all duration-300',
        isSidebarCollapsed ? 'w-20' : 'w-64',
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      ]"
    >
      <div class="flex flex-col h-full">
        <!-- Logo -->
        <div class="p-6 flex items-center justify-between">
          <a href="/" class="group flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all">
              <span class="text-white text-xl font-bold">LG</span>
            </div>
            <span v-if="!isSidebarCollapsed" class="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Launch Gala
            </span>
          </a>
          <button 
            @click="toggleSidebar"
            class="p-2 hover:bg-gray-100 rounded-lg lg:block hidden"
          >
            <Menu v-if="isSidebarCollapsed" class="w-5 h-5 text-gray-600" />
            <X v-else class="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <!-- User Profile -->
        <div v-if="!isSidebarCollapsed" class="px-6 py-4 border-b border-gray-200">
          <div class="flex items-center space-x-3">
            <img 
              :src="user.avatar" 
              alt="Your avatar" 
              class="w-10 h-10 rounded-full ring-2 ring-orange-100"
            >
            <div>
              <h3 class="font-medium text-gray-900">{{ user.name }}</h3>
              <div class="flex items-center space-x-1 text-sm">
                <span class="text-orange-500">{{ user.level }}</span>
                <span class="text-gray-500">•</span>
                <span class="text-gray-500">{{ user.kudos }} Kudos</span>
              </div>
            </div>
          </div>

          <!-- Level Progress -->
          <div class="mt-4">
            <div class="flex justify-between items-center text-sm mb-2">
              <span class="text-gray-500">Level Progress</span>
              <span class="text-orange-500 font-medium">{{ user.nextLevelProgress }}%</span>
            </div>
            <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                class="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500"
                :style="{ width: `${user.nextLevelProgress}%` }"
              ></div>
            </div>
          </div>

          <!-- Achievements -->
          <div class="mt-4 flex space-x-2">
            <div 
              v-for="achievement in user.achievements"
              :key="achievement.label"
              class="p-2 bg-gray-100 rounded-lg"
              :title="achievement.label"
            >
              <component 
                :is="achievement.icon" 
                :class="['w-4 h-4', achievement.color]"
              />
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <a 
            v-for="item in navigationItems" 
            :key="item.id"
            href="#"
            @click="activeSection = item.id"
            :class="[
              'flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:bg-orange-50 transition-all duration-200',
              activeSection === item.id ? 'bg-orange-50 text-orange-600 shadow-sm' : ''
            ]"
          >
            <div class="flex items-center space-x-3">
              <component 
                :is="item.icon" 
                :class="['w-5 h-5 transition-transform group-hover:scale-110', 
                  activeSection === item.id ? 'text-orange-500' : 'text-gray-400']"
              />
              <span 
                v-if="!isSidebarCollapsed"
                :class="activeSection === item.id ? 'font-medium' : ''"
              >
                {{ item.label }}
              </span>
            </div>
            <span 
              v-if="item.badge && !isSidebarCollapsed" 
              class="px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded-full"
            >
              {{ item.badge }}
            </span>
          </a>
        </nav>

        <!-- Settings -->
        <div class="p-4 border-t">
          <a 
            href="/settings"
            class="flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <div class="flex items-center space-x-3">
              <Settings class="w-5 h-5 text-gray-400" />
              <span v-if="!isSidebarCollapsed">Settings</span>
            </div>
          </a>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main :class="['transition-all duration-300', isSidebarCollapsed ? 'ml-20' : 'ml-64', 'lg:ml-64']">
      <!-- Top Bar -->
      <div class="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div class="flex items-center justify-between px-8 py-4">
          <!-- Left: Search -->
          <div class="flex items-center flex-1">
            <button 
              @click="isMobileMenuOpen = true"
              class="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
            >
              <Menu class="w-6 h-6 text-gray-600" />
            </button>
            <div class="relative max-w-md w-full ml-4">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search events, venues, or people..."
                class="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                @keyup.enter="handleSearch"
              >
              <Search class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <!-- Right: Actions -->
          <div class="flex items-center space-x-4">
            <!-- Notifications -->
            <div class="relative">
              <button 
                @click="showNotifications = !showNotifications"
                class="relative p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <Bell class="w-6 h-6 text-gray-600" />
                <span 
                  v-if="unreadNotifications"
                  class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center animate-bounce"
                >
                  {{ unreadNotifications }}
                </span>
              </button>

              <!-- Notifications Dropdown -->
              <div 
                v-if="showNotifications"
                class="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div class="p-4 border-b border-gray-100">
                  <h3 class="font-semibold text-gray-900">Notifications</h3>
                </div>
                <div class="max-h-96 overflow-y-auto">
                  <div 
                    v-for="notification in notifications"
                    :key="notification.id"
                    class="p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                    :class="{ 'bg-orange-50': !notification.read }"
                  >
                    <div class="flex items-start space-x-3">
                      <div :class="['p-2 rounded-xl', notification.read ? 'bg-gray-100' : 'bg-orange-100']">
                        <component 
                          :is="notification.icon" 
                          :class="['w-5 h-5', notification.color]"
                        />
                      </div>
                      <div class="flex-1">
                        <div class="flex items-start justify-between">
                          <div>
                            <h4 class="font-medium text-gray-900">{{ notification.title }}</h4>
                            <p class="text-sm text-gray-600 mt-1">{{ notification.message }}</p>
                            <span class="text-xs text-gray-500 mt-2 block">{{ notification.time }}</span>
                          </div>
                          <button 
                            v-if="!notification.read"
                            @click="markNotificationAsRead(notification.id)"
                            class="text-orange-500 hover:text-orange-600 text-sm"
                          >
                            Mark as read
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Messages -->
            <button class="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <MessageCircle class="w-6 h-6 text-gray-600" />
              <span 
                v-if="unreadMessages" 
                class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center animate-bounce"
              >
                {{ unreadMessages }}
              </span>
            </button>

            <!-- User Menu -->
            <div class="relative">
              <button 
                @click="showUserMenu = !showUserMenu"
                class="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <img 
                  :src="user.avatar" 
                  alt="Your avatar" 
                  class="w-8 h-8 rounded-full ring-2 ring-orange-100"
                >
                <ChevronDown 
                  :class="['w-5 h-5 text-gray-400 transition-transform', showUserMenu ? 'rotate-180' : '']"
                />
              </button>

              <!-- User Dropdown -->
              <div 
                v-if="showUserMenu"
                class="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div class="p-4 border-b border-gray-100">
                  <div class="flex items-center space-x-3">
                    <img 
                      :src="user.avatar" 
                      alt="Your avatar" 
                      class="w-12 h-12 rounded-full ring-2 ring-orange-100"
                    >
                    <div>
                      <h3 class="font-semibold text-gray-900">{{ user.name }}</h3>
                      <p class="text-sm text-gray-600">{{ user.role }}</p>
                    </div>
                  </div>
                  <div class="mt-3 pt-3 border-t border-gray-100">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-500">Level Progress</span>
                      <span class="text-orange-500 font-medium">{{ user.nextLevelProgress }}%</span>
                    </div>
                    <div class="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        class="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-500"
                        :style="{ width: `${user.nextLevelProgress}%` }"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="py-2">
                  <a 
                    v-for="(item, index) in [
                      { label: 'Profile', href: '/profile' },
                      { label: 'Settings', href: '/settings' },
                      { label: 'Help', href: '/help' },
                      { label: 'Sign out', href: '/logout' }
                    ]"
                    :key="index"
                    :href="item.href"
                    class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {{ item.label }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Page Content -->
      <div class="p-8" v-if="activeSection == 'dashboard'">
        <!-- Welcome Section -->
        <div class="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Welcome back, {{ user.name }}! 👋</h1>
              <p class="text-gray-600 mt-1">Here's what's happening with your events today.</p>
            </div>
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-500">Level:</span>
                <span class="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                  {{ user.level }}
                </span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-500">Kudos:</span>
                <span class="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                  {{ user.kudos }}
                </span>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            <button
              v-for="action in quickActions"
              :key="action.label"
              :class="[
                'flex items-center space-x-3 p-4 rounded-xl text-white transition-all duration-200 transform hover:scale-105',
                action.color
              ]"
            >
              <component :is="action.icon" class="w-5 h-5" />
              <span>{{ action.label }}</span>
            </button>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group cursor-pointer"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-600">{{ stat.label }}</p>
                <p class="text-2xl font-bold text-gray-900 mt-1">{{ stat.value }}</p>
              </div>
              <div :class="['p-3 rounded-xl transition-all group-hover:scale-110', stat.bgColor]">
                <component :is="stat.icon" :class="['w-6 h-6', stat.color]" />
              </div>
            </div>
            <div class="mt-4 flex items-center text-sm">
              <span :class="stat.color">{{ stat.trend }}</span>
              <span class="text-gray-600 ml-2">vs last month</span>
            </div>
            <!-- Mini Sparkline -->
            <div class="mt-4 h-10 flex items-end space-x-1">
              <div
                v-for="(value, index) in stat.sparkline"
                :key="index"
                :style="{ height: `${(value / Math.max(...stat.sparkline)) * 100}%` }"
                :class="[
                  'w-2 rounded-t transition-all duration-200 group-hover:opacity-100',
                  index === stat.sparkline.length - 1 ? stat.color.replace('text', 'bg') : 'bg-gray-200 group-hover:bg-gray-300'
                ]"
              ></div>
            </div>
          </div>
        </div>

        <!-- Main Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Upcoming Events -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Events List -->
            <div class="bg-white rounded-2xl shadow-sm">
              <div class="p-6 border-b border-gray-100">
                <div class="flex justify-between items-center">
                  <h2 class="text-lg font-semibold text-gray-900">Upcoming Events</h2>
                  <button class="text-orange-500 hover:text-orange-600 font-medium">View all</button>
                </div>
              </div>
              
              <div class="divide-y divide-gray-100">
                <div 
                  v-for="event in upcomingEvents" 
                  :key="event.id"
                  class="p-6 hover:bg-gray-50 transition-all duration-200"
                >
                  <div class="flex items-start space-x-4">
                    <img 
                      :src="event.image" 
                      :alt="event.title"
                      class="w-24 h-24 rounded-xl object-cover"
                    >
                    <div class="flex-1">
                      <div class="flex items-center justify-between">
                        <div>
                          <h3 class="text-lg font-semibold text-gray-900 group-hover:text-orange-500">
                            {{ event.title }}
                          </h3 Continuing exactly where we left off in the Dashboard.vue template:

                          </h3>
                          <div class="flex items-center space-x-4 mt-2">
                            <span class="flex items-center text-gray-600">
                              <Calendar class="w-4 h-4 mr-1" />
                              {{ event.date }}
                            </span>
                            <span class="flex items-center text-gray-600">
                              <Clock class="w-4 h-4 mr-1" />
                              {{ event.time }}
                            </span>
                            <span class="flex items-center text-gray-600">
                              <MapPin class="w-4 h-4 mr-1" />
                              {{ event.location }}
                            </span>
                          </div>
                        </div>
                        <div class="flex items-center space-x-2">
                          <span class="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                            {{ event.attendees }} Attendees
                          </span>
                          <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                            {{ event.budget }}
                          </span>
                        </div>
                      </div>

                      <!-- Progress and Team -->
                      <div class="mt-4 flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                          <div class="flex items-center space-x-2">
                            <div class="relative">
                              <img 
                                :src="event.organizer.avatar" 
                                :alt="event.organizer.name"
                                class="w-8 h-8 rounded-full ring-2 ring-white"
                              >
                              <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div class="text-sm">
                              <p class="font-medium text-gray-900">{{ event.organizer.name }}</p>
                              <p class="text-gray-500">{{ event.organizer.role }}</p>
                            </div>
                          </div>
                          <div class="flex -space-x-2">
                            <img 
                              v-for="member in event.team"
                              :key="member.name"
                              :src="member.avatar"
                              :alt="member.name"
                              :title="member.name"
                              class="w-8 h-8 rounded-full ring-2 ring-white"
                            >
                          </div>
                        </div>
                        <div class="flex items-center space-x-2">
                          <div class="text-sm text-gray-500">
                            {{ event.tasks.completed }}/{{ event.tasks.total }} Tasks
                          </div>
                          <div class="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              class="h-full bg-green-500 transition-all duration-500"
                              :style="{ width: `${(event.tasks.completed / event.tasks.total) * 100}%` }"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="bg-white rounded-2xl shadow-sm">
              <div class="p-6 border-b border-gray-100">
                <h2 class="text-lg font-semibold text-gray-900">Recent Activity</h2>
              </div>
              <div class="p-6">
                <div class="space-y-6">
                  <div 
                    v-for="activity in recentActivity"
                    :key="activity.id"
                    class="flex items-start space-x-4"
                  >
                    <div :class="['p-2 rounded-xl', activity.color]">
                      <component :is="activity.icon" class="w-5 h-5" />
                    </div>
                    <div class="flex-1">
                      <p class="text-gray-900">{{ activity.message }}</p>
                      <p class="text-sm text-gray-500 mt-1">{{ activity.time }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-6">
            <!-- Messages -->
            <div class="bg-white rounded-2xl shadow-sm">
              <div class="p-6 border-b border-gray-100">
                <div class="flex justify-between items-center">
                  <h2 class="text-lg font-semibold text-gray-900">Recent Messages</h2>
                  <span class="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                    {{ unreadMessages }} New
                  </span>
                </div>
              </div>
              
              <div class="divide-y divide-gray-100">
                <div 
                  v-for="message in messages" 
                  :key="message.id"
                  class="p-6 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                  @click="markMessageAsRead(message.id)"
                >
                  <div class="flex items-start space-x-4">
                    <div class="relative">
                      <img 
                        :src="message.avatar" 
                        :alt="message.sender"
                        class="w-10 h-10 rounded-full"
                      >
                      <div 
                        v-if="message.unread"
                        class="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                      ></div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center justify-between">
                        <h3 class="font-medium text-gray-900 truncate">{{ message.sender }}</h3>
                        <span class="text-sm text-gray-500">{{ message.time }}</span>
                      </div>
                      <p class="text-sm text-gray-600 mt-1 truncate">{{ message.message }}</p>
                      <div class="mt-2 flex items-center space-x-2">
                        <component 
                          :is="getMessageIcon(message.type)"
                          :class="['w-4 h-4', getMessageIconColor(message.type)]"
                        />
                        <span class="text-xs text-gray-500 capitalize">{{ message.type }}</span>
                      </div>
                    </div>
                    <span 
                      v-if="message.unread"
                      class="w-2 h-2 bg-orange-500 rounded-full"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="mb-8" v-if="activeSection == 'venues'">
        <MyVenueDash></MyVenueDash>
      </section>
      <section class="mb-8" v-if="activeSection == 'volunteers'">
        <MyVolunteerDash></MyVolunteerDash>
      </section>
      <section class="mb-8" v-if="activeSection == 'experts'">
        <MyExpertDash></MyExpertDash>
      </section>

      <section class="mb-8" v-if="activeSection == 'influencers'">
        <MyInfluencerDash></MyInfluencerDash>
      </section> 
      <section class="mb-8" v-if="activeSection == 'vendors'">
        <MyVendorDash></MyVendorDash>
      </section>
    </main>
  </div>
</template>

<style scoped>
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #D1D5DB;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9CA3AF;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>

The enhanced dashboard now includes:

1. Interactive stats cards with mini sparkline charts
2. Detailed event cards with progress tracking
3. Team member avatars and status indicators
4. Activity feed with colorful icons
5. Enhanced message cards with type indicators
6. Improved notifications with custom icons
7. Quick action buttons for common tasks
8. Level progress visualization
9. Achievement badges
10. Animated elements and smooth transitions
11. Better organized layout with clear hierarchy
12. More detailed user profile information
13. Enhanced visual feedback on interactions
14. Improved mobile responsiveness

Would you like me to explain any specific part in