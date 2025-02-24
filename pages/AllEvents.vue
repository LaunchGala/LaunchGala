<script setup lang="ts">
import { 
  Search, 
  Heart, 
  Share2, 
  Calendar, 
  MapPin, 
  User, 
  Tag, 
  Plus,
  ArrowRight,
  Filter,
  Users,
  Clock,
  Sparkles,
  PartyPopper,
  Ticket,
  Music,
  Mic2
} from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const searchQuery = ref('')
const selectedCategory = ref('')
const activeCategory = ref('All Events')

const categories = [
  { id: 'all', name: 'All Events', icon: PartyPopper },
  { id: 'conference', name: 'Conference', icon: Users },
  { id: 'workshop', name: 'Workshop', icon: Sparkles },
  { id: 'meetup', name: 'Meetup', icon: Users },
  { id: 'concert', name: 'Concert', icon: Music },
  { id: 'speaker', name: 'Speaker', icon: Mic2 },
  { id: 'exhibition', name: 'Exhibition', icon: Tag }
]

const allEvents = ref([])

async function getAllEvents() {
  const { data: AllEvents, error } = await supabase
    .from('AllEvents')
    .select('*, event_owner:profiles!created_by(*)')
    .eq('is_published', true)

  if (error) {
    console.error(error)
    return
  }

  await Promise.all(AllEvents.map(async (event) => {
    event.event_owner.avatarSRC = await fetchImage(event.event_owner.avatar_url)
  }))

  allEvents.value = AllEvents
}

const fetchImage = async (id) => {
  if (!!id) {
    const urlData = await supabase.storage.from('avatars').createSignedUrl(id, 60)
    return urlData?.data?.signedUrl ?? ""
  }
  return ""
}

const filteredEvents = computed(() => {
  return allEvents.value.filter(event => {
    const matchesSearch = !searchQuery.value || 
      event.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesCategory = activeCategory.value === 'All Events' ||
      event.event_type === activeCategory.value
    
    return matchesSearch && matchesCategory
  })
})

onMounted(() => {
  getAllEvents()
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
    <!-- Hero Section with Animated Background -->
    <div class="relative bg-gradient-to-r from-orange-600 to-orange-500 overflow-hidden">
      <div class="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px] animate-pulse"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="flex justify-between items-center">
          <div class="max-w-2xl">
            <div class="flex items-center space-x-3 mb-4">
              <PartyPopper class="w-8 h-8 text-white animate-bounce" />
              <h1 class="text-4xl font-bold text-white">Discover Amazing Events</h1>
            </div>
            <p class="text-xl text-white/90">
              Find and join exciting events happening around you
            </p>
          </div>
          <NuxtLink to="CreateEvent">
            <Button class="bg-white text-orange-600 hover:bg-orange-50 shadow-lg transform hover:scale-105 transition-all">
              <Sparkles class="w-5 h-5 mr-2" />
              Create Event
            </Button>
          </NuxtLink>
        </div>

        <!-- Enhanced Search Section -->
        <div class="mt-12 max-w-4xl mx-auto">
          <div class="relative">
            <div class="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl"></div>
            <div class="relative p-2">
              <div class="flex items-center bg-white rounded-xl shadow-lg">
                <div class="flex-1 relative">
                  <Search class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Search events by title, location, or type..."
                    class="w-full pl-12 pr-4 py-3 bg-transparent rounded-xl focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Category Pills -->
        <div class="mt-8 flex justify-center">
          <div class="flex gap-3 overflow-x-auto pb-4 max-w-full">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="activeCategory = category.name"
              :class="[
                'px-4 py-2 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105',
                activeCategory === category.name
                  ? 'bg-white text-orange-600 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              ]"
            >
              <component :is="category.icon" class="w-4 h-4" />
              <span>{{ category.name }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Events Grid -->
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="event in filteredEvents"
          :key="event.id"
          class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
        >
          <!-- Event Image -->
          <div class="relative h-48">
            <ImageCarousel 
              :image-names="event.images" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            
            <!-- Event Type Badge -->
            <div class="absolute top-4 left-4">
              <div class="flex items-center space-x-2 px-3 py-1.5 bg-white/90 text-orange-600 rounded-full">
                <component :is="categories.find(c => c.name === event.event_type)?.icon || PartyPopper" class="w-4 h-4" />
                <span class="text-sm font-medium">{{ event.event_type }}</span>
              </div>
            </div>

            <!-- Interactive Favorite Button -->
            <button class="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors transform hover:scale-110">
              <Heart class="w-5 h-5 text-orange-500" />
            </button>
          </div>

          <div class="p-6">
            <!-- Event Info with Enhanced Typography -->
            <div class="mb-4">
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                {{ event.title }}
              </h3>
              <p class="mt-2 text-gray-600 line-clamp-2">{{ event.description }}</p>
            </div>

            <!-- Event Details with Icons -->
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-gray-600 group/date">
                <div class="p-2 rounded-lg bg-orange-50 group-hover/date:bg-orange-100 transition-colors">
                  <Calendar class="w-4 h-4 text-orange-500" />
                </div>
                <span class="text-sm ml-3">{{ event.event_start_date }}</span>
              </div>
              <div class="flex items-center text-gray-600 group/location">
                <div class="p-2 rounded-lg bg-orange-50 group-hover/location:bg-orange-100 transition-colors">
                  <MapPin class="w-4 h-4 text-orange-500" />
                </div>
                <span class="text-sm ml-3">{{ event.location }}</span>
              </div>
              <div class="flex items-center">
                <Avatar class="w-8 h-8 ring-2 ring-orange-100">
                  <AvatarImage :src="event.event_owner?.avatarSRC" :alt="event.event_owner?.full_name" />
                  <AvatarFallback>{{ event.event_owner?.full_name.charAt(0) }}</AvatarFallback>
                </Avatar>
                <span class="text-sm text-gray-700 ml-3">{{ event.event_owner?.full_name }}</span>
              </div>
            </div>

            <!-- Interactive Action Buttons -->
            <div class="flex gap-3">
              <Button class="flex-1 bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-105 transition-all">
                <Ticket class="w-4 h-4 mr-2" />
                RSVP Now
              </Button>
              <NuxtLink 
                :to="{ name: 'EventCardNew', query: { id: event.id } }"
                class="flex-1"
              >
                <Button class="w-full bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50 transform hover:scale-105 transition-all">
                  View Details
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>