<script setup lang="ts">
import { ref, computed } from 'vue'


async function getAllVenues(query) {
  const { data: AllVenues, error } = await supabase.from('AllVenues').select('*, venue_owner:profiles!createdBy(*)').eq('is_published', true).limit(3)
  console.log(error)
  Promise.all(AllVenues.map(async (venue) => {
    venue.venue_owner.avatarSRC = await fetchImage(venue.venue_owner.avatar_url)
  })).then(() => {
    venues.value = AllVenues;
    console.log(AllVenues)
  })
}
const fetchImage = async (id) => {
    if(!!id)
    {
            const urlData = await supabase.storage.from('avatars').createSignedUrl(id, 60);
            return urlData?.data?.signedUrl ?? "";
    }
  }
onMounted(() => {
  getAllVenues(null)
})
const venues = ref([])

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
  <div class="pb-4 pt-8  p-8 bg-gray-50 ">
    <!-- Hero Section -->


    <header class="flex justify-between items-center ">
        <div class="m-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Venue</h1>
          <p class="text-lg text-gray-600">
            Discover unique spaces for any event, anywhere
          </p>
        </div>
        <NuxtLink to="VenueListing">

        <button 
          class="m-10 bg-orange-500 text-white border-2 border-orange-500 px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-orange-500 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
        >
        Provide your Venue
        </button>
    </NuxtLink>

      </header>
    <!-- Main Content -->
    <div class=" mx-auto px-4 sm:px-6 lg:px-8 py-2 ">
      <div class="flex gap-8">
        <!-- Venues Grid -->
        <div class="flex-1">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="venue in sortedVenues" :key="venue.id" 
                 class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div class="relative aspect-[4/3] rounded-t-2xl overflow-hidden">
                <ImageCarousel class="w-full h-64 object-cover" :image-names="venue.images"/>
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
                
                <!-- Instant Book Badge -->
                <div v-if="venue.sponsorshipOption" 
                     class="absolute top-4 left-4 px-3 py-1.5 bg-orange-500 text-white text-sm font-medium rounded-full shadow-lg">
                  Sponsorship Available
                </div>
              </div>
              <div class="p-4 space-y-4">
                <div class="flex justify-between items-start">
                  <h3 class="text-xl font-semibold text-gray-900">{{ venue.title }}</h3>
                  <div class="flex items-center bg-orange-50 px-2 py-1 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="ml-1 font-medium">{{ venue.rating }}</span>
                    <!-- <span class="ml-1 text-gray-500">({{ venue.reviews }})</span> -->
                  </div>
                </div>
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
                  {{ venue.address }} 
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

                    <span class="text-md font-bold text-gray-900">${{ venue.price }}</span>
                    <span class="text-gray-500">/hour</span>
                  </div>
                  <button class="px-6 py-3  text-orange-500 rounded-xl hover:bg-orange-500 hover:text-white transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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
      <div class="py-8 ">
      <NuxtLink to="AllVenues">
      <Button class="bg-orange-500 text-white border-2 border-orange-500 font-medium hover:bg-white hover:text-orange-500 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 rounded-lg px-6 py-3">
        View All
        <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </NuxtLink>
    </div>
    </div>
  </div>
</template>