<script setup lang="ts">
import { ref, computed } from 'vue'

interface Venue {
  id: number
  name: string
  location: string
  price: number
  capacity: number
  style: string
  rating: number
  reviews: number
  images: string[]
  amenities: string[]
  distance: string
  isFavorite: boolean
  description: string
  instantBook: boolean
  availability: string[]
}

const venues = ref<Venue[]>([
  {
    id: 1,
    name: "Grand Ballroom",
    location: "San Francisco, CA",
    price: 250,
    capacity: 500,
    style: "Modern",
    rating: 4.92,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Parking", "Catering", "Sound System", "Stage"],
    distance: "2.5 miles away",
    isFavorite: false,
    description: "Elegant ballroom with modern amenities, perfect for large corporate events and weddings.",
    instantBook: true,
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  {
    id: 2,
    name: "Waterfront Plaza",
    location: "Seattle, WA",
    price: 50,
    capacity: 100,
    style: "Contemporary",
    rating: 4.97,
    reviews: 85,
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Waterfront View", "Kitchen", "WiFi", "Outdoor Space"],
    distance: "5 miles away",
    isFavorite: true,
    description: "Stunning waterfront venue with panoramic views of the bay. Indoor and outdoor spaces available.",
    instantBook: false,
    availability: ["Fri", "Sat", "Sun"]
  },
  {
    id: 3,
    name: "Historic Theatre",
    location: "Portland, OR",
    price: 0,
    capacity: 200,
    style: "Vintage",
    rating: 4.89,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Stage", "Lighting", "Dressing Rooms", "Box Office"],
    distance: "1.8 miles away",
    isFavorite: false,
    description: "Beautifully restored historic theatre with state-of-the-art lighting and sound systems.",
    instantBook: true,
    availability: ["Mon", "Tue", "Wed", "Thu"]
  },
  {
    id: 4,
    name: "Skyline Loft",
    location: "Los Angeles, CA",
    price: 420,
    capacity: 150,
    style: "Industrial",
    rating: 4.95,
    reviews: 92,
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["City View", "Full Kitchen", "Elevator", "Security"],
    distance: "3.2 miles away",
    isFavorite: true,
    description: "Modern loft space with stunning city views, perfect for intimate gatherings and photo shoots.",
    instantBook: false,
    availability: ["Wed", "Thu", "Fri", "Sat"]
  }
])

const filters = ref({
  location: '',
  minCapacity: '',
  maxCapacity: '',
  style: '',
  minPrice: '',
  maxPrice: '',
  amenities: [] as string[],
  instantBook: false,
  availability: [] as string[]
})

const styles = [
  'Modern',
  'Contemporary',
  'Vintage',
  'Industrial',
  'Classic',
  'Rustic'
]

const allAmenities = [
  'Parking',
  'Catering',
  'Sound System',
  'Stage',
  'Kitchen',
  'WiFi',
  'Outdoor Space',
  'Security'
]

const days = [
  'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
]

const showFilters = ref(false)
const activeImageIndex = ref<{ [key: number]: number }>({})
const showMap = ref(false)
const sortBy = ref('recommended')

const sortOptions = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'capacity', label: 'Capacity' }
]

const toggleFavorite = (venueId: number) => {
  const venue = venues.value.find(v => v.id === venueId)
  if (venue) {
    venue.isFavorite = !venue.isFavorite
  }
}

const resetFilters = () => {
  filters.value = {
    location: '',
    minCapacity: '',
    maxCapacity: '',
    style: '',
    minPrice: '',
    maxPrice: '',
    amenities: [],
    instantBook: false,
    availability: []
  }
}

const nextImage = (venueId: number, totalImages: number) => {
  activeImageIndex.value[venueId] = ((activeImageIndex.value[venueId] || 0) + 1) % totalImages
}

const prevImage = (venueId: number, totalImages: number) => {
  activeImageIndex.value[venueId] = ((activeImageIndex.value[venueId] || 0) - 1 + totalImages) % totalImages
}

const sortedVenues = computed(() => {
  let sorted = [...venues.value]
  switch (sortBy.value) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating)
      break
    case 'capacity':
      sorted.sort((a, b) => b.capacity - a.capacity)
      break
  }
  return sorted
})

const applyFilters = () => {
  // Here you would typically filter the venues based on the selected criteria
  console.log('Applying filters:', filters.value)
  showFilters.value = false
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="bg-grey-100 text-orange-600 py-6">
      <div class=" mx-auto  sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold ">Find Your Perfect Venue</h1>
        <p class="text-xl text-black/90">Discover unique spaces for any event, anywhere</p>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div class=" mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <div class="flex-1 w-full flex items-center gap-4">
            <div class="relative flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
              <input
                type="text"
                placeholder="Search venues by location or name"
                class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
              >
            </div>
            <button
              @click="showFilters = !showFilters"
              class="px-6 py-3 rounded-xl border border-gray-300 hover:border-orange-500 flex items-center space-x-2 whitespace-nowrap bg-white hover:bg-orange-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
              </svg>
              <span>Filters</span>
            </button>
            <button
              @click="showMap = !showMap"
              :class="[
                'px-6 py-3 rounded-xl flex items-center space-x-2 transition-colors',
                showMap 
                  ? 'bg-orange-500 text-white hover:bg-orange-600 border border-orange-500'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-300 hover:border-orange-500'
              ]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd" />
              </svg>
              <span>{{ showMap ? 'Hide Map' : 'Show Map' }}</span>
            </button>
          </div>
          <select
            v-model="sortBy"
            class="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
          >
            <option v-for="option in sortOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>

        <!-- Filters Panel -->
        <div v-if="showFilters" class="mt-4 p-8 bg-white rounded-xl shadow-xl border border-gray-100">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
              <div class="flex space-x-2">
                <input
                  v-model="filters.minCapacity"
                  type="number"
                  placeholder="Min"
                  class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                <input
                  v-model="filters.maxCapacity"
                  type="number"
                  placeholder="Max"
                  class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <div class="flex space-x-2">
                <input
                  v-model="filters.minPrice"
                  type="number"
                  placeholder="Min"
                  class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                <input
                  v-model="filters.maxPrice"
                  type="number"
                  placeholder="Max"
                  class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Style</label>
              <select
                v-model="filters.style"
                class="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Any Style</option>
                <option v-for="style in styles" :key="style" :value="style">
                  {{ style }}
                </option>
              </select>
            </div>
          </div>

          <div class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div v-for="amenity in allAmenities" :key="amenity" class="flex items-center">
                <input
                  type="checkbox"
                  :id="amenity"
                  v-model="filters.amenities"
                  :value="amenity"
                  class="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                >
                <label :for="amenity" class="ml-2 text-sm text-gray-700">{{ amenity }}</label>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Availability</label>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="day in days"
                :key="day"
                @click="filters.availability.includes(day) 
                  ? filters.availability = filters.availability.filter(d => d !== day)
                  : filters.availability.push(day)"
                :class="[
                  'px-3 py-1 rounded-full text-sm font-medium transition-colors',
                  filters.availability.includes(day)
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                {{ day }}
              </button>
            </div>
          </div>

          <div class="mt-6">
            <label class="flex items-center">
              <input
                type="checkbox"
                v-model="filters.instantBook"
                class="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              >
              <span class="ml-2 text-sm text-gray-700">Instant Book available (change to Sponsorship available)</span>
            </label>
          </div>

          <div class="mt-6 flex justify-end space-x-4">
            <button
              @click="resetFilters"
              class="px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Clear all
            </button>
            <button
              @click="applyFilters"
              class="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Show results
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex gap-8">
        <!-- Venues Grid -->
        <div class="flex-1">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="venue in sortedVenues" :key="venue.id" 
                 class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div class="relative aspect-[4/3] rounded-t-2xl overflow-hidden">
                <img 
                  :src="venue.images[activeImageIndex[venue.id] || 0]" 
                  :alt="venue.name"
                  class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                >
                <button 
                  @click="toggleFavorite(venue.id)"
                  class="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-5 w-5" 
                    :class="venue.isFavorite ? 'text-orange-500' : 'text-gray-600'"
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                    />
                  </svg>
                </button>
                <!-- Image Navigation -->
                <div class="absolute inset-y-0 left-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    @click.stop="prevImage(venue.id, venue.images.length)"
                    class="p-2 bg-white/90 hover:bg-white rounded-r-xl shadow-lg transform transition-transform hover:scale-105 ml-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    @click.stop="nextImage(venue.id, venue.images.length)"
                    class="p-2 bg-white/90 hover:bg-white rounded-l-xl shadow-lg transform transition-transform hover:scale-105 mr-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                <!-- Instant Book Badge -->
                <div v-if="venue.instantBook" 
                     class="absolute top-4 left-4 px-3 py-1.5 bg-orange-500 text-white text-sm font-medium rounded-full shadow-lg">
                  Instant Book (change Sponsorship Available)
                </div>
              </div>
              <div class="p-6 space-y-4">
                <div class="flex justify-between items-start">
                  <h3 class="text-xl font-semibold text-gray-900">{{ venue.name }}</h3>
                  <div class="flex items-center bg-orange-50 px-2 py-1 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="ml-1 font-medium">{{ venue.rating }}</span>
                    <!-- <span class="ml-1 text-gray-500">({{ venue.reviews }})</span> -->
                  </div>
                </div>
                <p class="text-gray-600">{{ venue.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="amenity in venue.amenities.slice(0, 3)" :key="amenity" 
                        class="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg">
                    {{ amenity }}
                  </span>
                  <span v-if="venue.amenities.length > 3" class="px-3 py-1.5 text-gray-500 text-sm">
                    +{{ venue.amenities.length - 3 }} more
                  </span>
                </div>
                <div class="flex items-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  {{ venue.location }} · {{ venue.distance }}
                </div>
                <div class="flex items-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                  {{ venue.capacity }} guests
                </div>
                <div class="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span class="text-gray-500">From </span>

                    <span class="text-lg font-bold text-gray-900">${{ venue.price }}</span>
                    <span class="text-gray-500">/hour</span>
                  </div>
                  <button class="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Map (if shown) -->
        <div v-if="showMap" class="w-1/3 sticky top-24 h-[calc(100vh-6rem)] bg-gray-100 rounded-xl">
          <!-- Map placeholder -->
          <div class="w-full h-full flex items-center justify-center text-gray-500">
            Map View Coming Soon
          </div>
        </div>
      </div>
    </div>
  </div>
</template>