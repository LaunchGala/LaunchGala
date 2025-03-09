<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button';

const isOpen = ref(false)
const date = ref<Date>()
const venues = ref([]);

const venueTypes = [
  "Office space",
  "Meeting room",
  "Gallery & Showroom",
  "Co-Working space",
  "Warehouse",
  "Auditorium",
  "Conference center",
  "Convention center",
  "Hotels & banquet halls",
  "Exhibition hall",
  "Theaters & performance space",
  "Museum",
  "University & college facility",
  "Library",
  "Historical building",
  "Restaurant & bar",
  "Sports arena and facility",
  "Outdoor event space"
]

const amenities = [
  "On-site parking",
  "Public transportation access",
  "Wi-Fi",
  "Audiovisual equipment",
  "Stage/Speaking platform",
  "Mic & Sound system",
  "Projectors & Screens",
  "Adjustable lighting",
  "Tables & chairs",
  "AC & heating controls",
  "Restrooms",
  "Disability access",
  "Security services",
  "Reception/Registration area",
  "Room/space divider options",
  "Private meeting rooms",
  "On-site accommodations",
  "Outdoor spaces",
  "Signage & branding option",
  "Cloakroom/Coat check",
  "Green room/VIP area",
  "Smoke alarm",
  "Refrigerator",
  "Microwave",
  "Private entrance",
  "Elevators",
  "Bar space",
  "Kitchen",
  "Coffee Machine",
  "Computer",
  "Games",
  "Waterfront"
]

const eventTypes = [
  "Hackathon",
  "Networking Event",
  "Pitching event",
  "Dinner event",
  "Sales & Trade show",
  "Conference",
  "Seminar & workshop",
  "Product launch",
  "Corporate events & retreats",
  "Panel & roundtables",
  "Award ceremony & Gala",
  "Job fair & career expo",
  "Academic conference",
  "Investor & funding meetup",
  "Startup accelerator & incubator",
  "Industry-specific summit",
  "Press conference",
  "Executive & leadership forum",
  "Publishing & signing event",
  "Art show & exhibition"
]

const venueFilters = ref({
  title: '',
  description: '',
  capacity: 0,
  price: 0,
  venueType: [],
  amenities: [],
  eventType: [],
  images: [],
  sponsorshipOption: null,
  nonSmoking: null,
  maskRequired: null,
  noPets: null,
  noCommercialPhotography: null,
  securityCameras: null,
  postEventCleaning: null,
  mustClimbStairs: null,
  additionalInsurance: null,
  openSpace: null,
  is_published: null
});
const venueFiltersEnabled = ref({
  title: false,
  description: false,
  capacity: false,
  price: false,
  venueType: false,
  amenities: false,
  eventType: false,
  sponsorshipOption: false,
  nonSmoking: false,
  maskRequired: false,
  noPets: false,
  noCommercialPhotography: false,
  securityCameras: false,
  postEventCleaning: false,
  mustClimbStairs: false,
  additionalInsurance: false,
  openSpace: false,
})
async function fetchFilteredVenueListings() {
  // Start the base query for the 'venue_listings' table
  let query = supabase.from('AllVenues').select('*, venue_owner:profiles!createdBy(*)').eq('is_published', true);

  // Apply filters based on `venueFilters` fields
  if (venueFilters.value.title) {
    query = query.ilike('title', `%${venueFilters.value.title}%`); // Case-insensitive search
  }

  if (venueFilters.value.capacity > 0) {
    query = query.gte('capacity', venueFilters.value.capacity);
  }

  if (venueFilters.value.price > 0) {
    query = query.lte('price', venueFilters.value.price);
  }

  if (venueFilters.value.venueType.length > 0) {
    query = query.in('venueType', venueFilters.value.venueType);
  }

  if (venueFilters.value.amenities.length > 0) {
    query = query.contains('amenities', venueFilters.value.amenities); // Array contains all items
  }

  if (venueFilters.value.eventType.length > 0) {
    query = query.contains('eventType', venueFilters.value.eventType); // Array contains all items
  }

  // Boolean filters
  if (venueFilters.value.sponsorshipOption !== null) {
    query = query.eq('sponsorshipOption', venueFilters.value.sponsorshipOption);
  }

  if (venueFilters.value.nonSmoking !== null) {
    query = query.eq('nonSmoking', venueFilters.value.nonSmoking);
  }

  if (venueFilters.value.maskRequired !== null) {
    query = query.eq('maskRequired', venueFilters.value.maskRequired);
  }

  if (venueFilters.value.noPets !== null) {
    query = query.eq('noPets', venueFilters.value.noPets);
  }

  if (venueFilters.value.noCommercialPhotography !== null) {
    query = query.eq('noCommercialPhotography', venueFilters.value.noCommercialPhotography);
  }

  if (venueFilters.value.securityCameras !== null) {
    query = query.eq('securityCameras', venueFilters.value.securityCameras);
  }

  if (venueFilters.value.postEventCleaning !== null) {
    query = query.eq('postEventCleaning', venueFilters.value.postEventCleaning);
  }

  if (venueFilters.value.mustClimbStairs !== null) {
    query = query.eq('mustClimbStairs', venueFilters.value.mustClimbStairs);
  }

  if (venueFilters.value.additionalInsurance !== null) {
    query = query.eq('additionalInsurance', venueFilters.value.additionalInsurance);
  }

  if (venueFilters.value.openSpace !== null) {
    query = query.eq('openSpace', venueFilters.value.openSpace);
  }

  if (venueFilters.value.is_published !== null) {
    query = query.eq('isPublished', venueFilters.value.is_published);
  }
  getAllVenues(query)
}
// Function to toggle selection of a venue type
const toggleVenueTypeSelection = (venueType) => {
  const index = venueFilters.value.venueType.indexOf(venueType);
  if (index === -1) {
    // Add to selected items
    venueFilters.value.venueType.push(venueType);
  } else {
    // Remove from selected items
    venueFilters.value.venueType.splice(index, 1);
  }
};
// Check if an item is selected
const isVenueTypeSelected = (venueType) => venueFilters.value.venueType.includes(venueType);

// Function to toggle selection of a venue type
const toggleAmenitySelection = (amenity) => {
  const index = venueFilters.value.amenities.indexOf(amenity);
  if (index === -1) {
    // Add to selected items
    venueFilters.value.amenities.push(amenity);
  } else {
    // Remove from selected items
    venueFilters.value.amenities.splice(index, 1);
  }
};
// Check if an item is selected
const isAmenitySelected = (amenity) => venueFilters.value.amenities.includes(amenity);

// Function to toggle selection of a venue type
const toggleEventTypeSelection = (eventType) => {
  const index = venueFilters.value.eventType.indexOf(eventType);
  if (index === -1) {
    // Add to selected items
    venueFilters.value.eventType.push(eventType);
  } else {
    // Remove from selected items
    venueFilters.value.eventType.splice(index, 1);
  }
};
// Check if an item is selected
const isEventTypeSelected = (eventType) => venueFilters.value.eventType.includes(eventType);

async function getAllVenues(query) {
  const { data: AllVenues, error } = !!query ? await query : await supabase.from('AllVenues').select('*, venue_owner:profiles!createdBy(*)').eq('is_published', true)
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
    <div class="bg-grey-100 text-orange-600 py-6 flex">
      <div class=" mx-auto  sm:px-6 lg:px-8 flex-grow">
        <h1 class="text-4xl font-bold ">Find Your Perfect Venue</h1>
        <p class="text-xl text-black/90">Discover unique spaces for any event, anywhere</p>
      </div>
      <NuxtLink to="VenueListing" class="m-6 items-center">
      <Button @click="console.log(allVenues)" class="bg-orange-500 text-white dark:bg-orange-600 dark:text-white hover:bg-gray-100 hover:text-orange-500">Provide your Venue</Button>
    </NuxtLink>
    </div>

    <!-- Search Bar -->
    <div class="sticky top-0 z-40 bg-white shadow-lg border-b border-gray-200">
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
              @click="isOpen = !isOpen"
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
        <div v-if="isOpen" class="mt-4 p-8 bg-white rounded-xl shadow-xl border border-gray-100">
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
                v-model="filters.sponsorshipOption"
                class="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              >
              <span class="ml-2 text-sm text-gray-700">Sponsorship Available</span>
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
                 class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              <div class="relative aspect-[4/3] rounded-t-2xl overflow-hidden">
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
                <ImageCarousel class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" :image-names="venue.images"/>
                <!-- Instant Book Badge -->
                <div v-if="venue.sponsorshipOption" 
                     class="absolute top-4 left-4 px-3 py-1.5 bg-orange-500 text-white text-sm font-medium rounded-full shadow-lg">
                  Sponsorship Available
                </div>
              </div>
              <div class="p-6 space-y-4 flex-grow flex flex-col">
                <div class="space-y-4 flex-grow">
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
                  {{ venue.address }} {{!!venue.distance ? " · " + venue.distance : '' }}
                </div>
                <div class="flex items-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                  {{ venue.capacity }} guests
                </div>
              </div>
                <div class="flex items-center justify-between pt-4 border-t mt-auto">
                  <div>
                    <span class="text-gray-500">From </span>

                    <span class="text-lg font-bold text-gray-900">${{ venue.price }}</span>
                    <span class="text-gray-500">/hour</span>
                  </div>
                  <NuxtLink :to="{ name: 'VenuePageNew', query: { id: venue.id } }">
                  <button class="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    View Details
                  </button></NuxtLink>
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