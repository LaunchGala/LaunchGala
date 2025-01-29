<template>
    <div class="min-h-screen bg-white">
      <!-- Header -->
      <header class="relative h-96 overflow-hidden">
        <TitleImagesBanner :imageNames="venue.images" :title="venue.title" :showButton="true"/>

      </header>
  
      <div class="container mx-auto px-4 py-12">
        <!-- Venue Details -->
        <section class="mb-16">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
              <h2 class="text-3xl font-semibold mb-6 text-gray-800">About the Venue</h2>
              <p class="text-gray-600 leading-relaxed mb-6">{{ venue.description }}</p>
              
              <!-- Amenities -->
              <h3 class="text-2xl font-semibold mb-4 text-gray-800">Amenities</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div v-for="(feature, index) in venue.amenities" :key="index" class="flex items-center">
                  <CheckCircleIcon class="w-5 h-5 mr-2 text-orange-500" />
                  <span class="text-gray-600">{{ feature }}</span>
                </div>
              </div>
  
              <!-- Perfect For Section (styled like Amenities) -->
              <h3 class="text-2xl font-semibold mb-4 text-gray-800">Perfect For</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div v-for="(event, index) in venue.eventType" :key="index" class="flex items-center">
                  <component :is="event.icon" class="w-5 h-5 mr-2 text-orange-500" />
                  <span class="text-gray-600">{{ event }}</span>
                </div>
              </div>
  
              <div class="grid grid-cols-2 gap-4">
                <img v-for="(image, index) in images.slice(0, 4)" :key="index" :src="image" :alt="`Venue image ${index + 1}`" class="w-full h-48 object-cover rounded-lg shadow-md" />
              </div>
            </div>
            <div class="w-full lg:w-1/3 px-4">
              <div class="bg-orange-50 rounded-lg shadow-lg p-6 mb-8">
                <h3 class="text-2xl font-semibold mb-4 text-gray-800">Quick Info</h3>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-600">
                    <UsersIcon class="w-5 h-5 mr-2 text-orange-500" />
                    <span>Capacity: {{ venue.capacity }} guests</span>
                  </li>
                  <li class="flex items-center text-gray-600">
                    <MapPinIcon class="w-5 h-5 mr-2 text-orange-500" />
                    <span>{{ venue.address }}</span>
                  </li>
                  <li class="flex items-center text-gray-600">
                    <ClockIcon class="w-5 h-5 mr-2 text-orange-500" />
                    <span>Available: {{ venue.operating_hours }}</span>
                  </li>
                  <li class="flex items-center text-gray-600">
                    <DollarSignIcon class="w-5 h-5 mr-2 text-orange-500" />
                    <span>Starting from ${{ venue.price }} per hour</span>
                  </li>
                  <li class="flex items-center text-gray-600">
                    <GiftIcon class="w-5 h-5 mr-2 text-orange-500" />
                    <span>Sponsorship Option: {{ venue.sponsorshipOption }}</span>
                  </li>
                  <li class="flex items-center text-gray-600">
                    <HomeIcon class="w-5 h-5 mr-2 text-orange-500" />
                    <span>Venue Type: {{ venue.venueType }}</span>
                  </li>
                </ul>
              </div>
              
              <!-- Booking and Contact Box -->
              <div class="bg-white rounded-lg shadow-lg border border-orange-200">
                <VenueBookingRequest1 :venueId="venueId"/>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Map -->
        <section class="mb-16">
          <h2 class="text-3xl font-semibold mb-6 text-gray-800">Location</h2>
          <div class="bg-orange-100 rounded-lg overflow-hidden shadow-lg">
            <MapViewer v-if="venue.address" :address="venue.address" class="rounded-md "/>
          </div>
        </section>
  
        <!-- Reservation Rules -->
        <section class="mb-16">
          <h2 class="text-3xl font-semibold mb-6 text-gray-800">Reservation Rules</h2>
          <div class="bg-white rounded-lg shadow-lg p-6 border border-orange-200">
            <ul class="space-y-4">
              <li v-for="(rule, index) in venue.reservationRules" :key="index" class="flex items-start">
                <InfoIcon class="w-6 h-6 mr-2 text-orange-500 flex-shrink-0" />
                <span class="text-gray-600">{{ rule }}</span>
              </li>
            </ul>
          </div>
        </section>
  
        <!-- Similar Venues -->
        <section>
          <h2 class="text-3xl font-semibold mb-6 text-gray-800">Venues You Might Like</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(similarVenue, index) in similarVenues" :key="index" class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img :src="similarVenue.image" :alt="similarVenue.name" class="w-full h-48 object-cover" />
              <div class="p-4">
                <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ similarVenue.name }}</h3>
                <p class="text-gray-600 mb-4">{{ similarVenue.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-orange-500 font-semibold">${{ similarVenue.price }}</span>
                  <button class="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="flex justify-center mt-4">
          <button class="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 mt-8">
            View more options
        </Button>
      </div>
      </div>
      
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { UsersIcon, MapPinIcon, ClockIcon, DollarSignIcon, CheckCircleIcon, GlassesIcon, HeartIcon, MusicIcon, BriefcaseIcon, CakeIcon, InfoIcon, CheckIcon, GiftIcon, BuildingIcon, Building2Icon, HomeIcon, Share } from 'lucide-vue-next'
import TitleImagesBanner from '~/components/TitleImagesBanner.vue';
  const route = useRoute();
const venueId = route.query.id;
const supabase = useSupabaseClient()
const venue = ref({
  createdBy: 0,
  title: '',
  address: '',
  addressExact: true,
  description: '',
  capacity: 0,
  price: 0,
  priceEnabled: false, 
  venueType: [],
  amenities: [],
  eventType: [],
  images: [],
  mainImage: '',
  sponsorshipOption: true,
  nonSmoking: true,
  maskRequired: false,
  noPets: true,
  noCommercialPhotography: false,
  securityCameras: true,
  postEventCleaning: false,
  mustClimbStairs: false,
  additionalInsurance: false,
  openSpace: false,
  venue_owner: {
    full_name: '',
    user_company: '',
    avatar_url: '',
    avatarSRC: ''
  },
  cancellation_policy: ''



});
const images = ref([])
const contactInfo = ref({})
const getVenueById = async (id) => {
  const { data, error } = await supabase
    .from('AllVenues') // Replace 'users' with your table name
    .select('*, venue_owner:profiles!createdBy(*)') // Fetch all columns
    .eq('id', id) // Filter by 'id'
    .single() // Ensures only one record is returned

  if (error) {
    console.error('Error fetching data:', error)
    return null
  }

  venue.value = data;
  fetchImages()
  contactInfo.value = {other_user_id: venueListing.value.venue_owner.id, other_user_name: venueListing.value.venue_owner.full_name}
}
onMounted(() => {
  getVenueById(venueId)
});

// Fetch images
const fetchImages = async () => {
  if (venue.value.images && venue.value.images.length > 0) {
    const fetchedImages = await Promise.all(
      venue.value.images.map(async (fileName) => {
        const { data } = await supabase.storage.from('images').createSignedUrl(fileName, 60);
        return data.signedUrl;
      })
    );

    images.value = fetchedImages ? fetchedImages : [];
  }
};

// Function to handle the "Share" button click
const sharePage = () => {
  const url = window.location.href;
  const title = venueListing.value.title;

  if (navigator.share) {
    // Use Web Share API if available
    navigator.share({
      title: title,
      text: `Check out this venue: ${title}`,
      url: url,
    })
    .then(() => console.log('Successfully shared'))
    .catch((error) => console.error('Error sharing', error));
  } else {
    // Fallback: Copy URL to clipboard
    copyToClipboard(url);
    alert('Page link copied to clipboard!');
  }
};

// Function to copy a URL to clipboard
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => console.log('Text copied to clipboard'),
    (error) => console.error('Could not copy text: ', error)
  );
};

  </script>