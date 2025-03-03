<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="relative h-96 overflow-hidden">
      <TitleImagesBanner :imageNames="venue.images" :title="venue.title" :showButton="true" />

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
                <component :is="CheckIcon" class="w-5 h-5 mr-2 text-orange-500" />
                <span class="text-gray-600">{{ event }}</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <img v-for="(image, index) in images.slice(0, 4)" :key="index" :src="image"
                :alt="`Venue image ${index + 1}`" class="w-full h-48 object-cover rounded-lg shadow-md" />
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
            <div v-if="!isPreview" class="bg-white rounded-lg shadow-lg border border-orange-200">
              <VenueBookingRequest1 :venueId="venueId" />
            </div>
          </div>
        </div>
      </section>

      <!-- Map -->
      <section class="mb-16">
        <h2 class="text-3xl font-semibold mb-6 text-gray-800">Location</h2>
        <div class="bg-orange-100 rounded-lg overflow-hidden shadow-lg">
          <MapViewer v-if="venue.address" :address="venue.address" class="rounded-md " />
        </div>
      </section>

      <!-- Reservation Rules -->
      <section class="mb-16">
        <h2 class="text-3xl font-semibold mb-6 text-gray-800">Reservation Rules</h2>
        <div class="bg-white rounded-lg shadow-lg p-6 border border-orange-200">
          <ul class="space-y-4">
            <li v-if="venue.nonSmoking" class="flex">
              <InfoIcon class="w-6 h-6 mr-2 text-orange-500 flex-shrink-0" />
              <span class="text-gray-600">No Smoking</span>
            </li>
            <li v-if="venue.maskRequired" class="flex">
              <InfoIcon class="w-6 h-6 mr-2 text-orange-500 flex-shrink-0" />
              <span class="text-gray-600">Masks Required</span>
            </li>
            <li v-if="venue.noPets" class="flex">
              <InfoIcon class="w-6 h-6 mr-2 text-orange-500 flex-shrink-0" />
              <span class="text-gray-600">No Pets</span>
            </li>
            <li v-if="venue.noCommercialPhotography" class="flex">
              <InfoIcon class="w-6 h-6 mr-2 text-orange-500 flex-shrink-0" />
              <span class="text-gray-600">No Commercial Photography</span>
            </li>
            <li v-if="venue.securityCameras" class="flex">
              <InfoIcon class="w-6 h-6 mr-2 text-orange-500 flex-shrink-0" />
              <span class="text-gray-600">Security cameras on property</span>
            </li>
            <li v-if="venue.postEventCleaning" class="flex">
              <InfoIcon class="w-6 h-6 mr-2 text-orange-500 flex-shrink-0" />
              <span class="text-gray-600">Post event cleaning required</span>
            </li>
            <li v-if="venue.mustClimbStairs" class="flex">
              <InfoIcon class="w-6 h-6 mr-2 text-orange-500 flex-shrink-0" />
              <span class="text-gray-600">Must climb stairs</span>
            </li>
            <li v-if="venue.additionalInsurance" class="flex">
              <InfoIcon class="w-6 h-6 mr-2 text-orange-500 flex-shrink-0" />
              <span class="text-gray-600">Additional Insurance</span>
            </li>
            <li v-if="venue.openSpace" class="flex">
              <InfoIcon class="w-6 h-6 mr-2 text-orange-500 flex-shrink-0" />
              <span class="text-gray-600">Open space (No gate or lock)</span>
            </li>
            <li v-for="(rule, index) in venue.rules" :key="index" class="flex items-start">
              <InfoIcon class="w-6 h-6 mr-2 text-orange-500 flex-shrink-0" />
              <span class="text-gray-600">{{ rule }}</span>
            </li>
          </ul>
        </div>
      </section>
      <!-- Reservation Rules -->
      <section class="mb-16">
        <h2 class="text-3xl font-semibold mb-6 text-gray-800">Cancellation Policy</h2>
        <div class="bg-white rounded-lg shadow-lg p-6 border border-orange-200">
          <p class="text-gray-600 leading-relaxed mb-6">{{ venue.cancellation_policy ? venue.cancellation_policy : 'No cancellation policy provided.' }}</p>
        </div>
      </section>
      <!-- Similar Venues -->
      <section v-if="!isPreview" class="mb-16">
        <h2 class="text-3xl font-semibold mb-6 text-gray-800">Venues You Might Like</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="venue in similarVenues" :key="venue.id"
            class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div class="relative aspect-[4/3] rounded-t-2xl overflow-hidden">
              <ImageCarousel class="w-full h-64 object-cover" :image-names="venue.images" />
              <button @click="toggleFavorite(venue.id)"
                class="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                  :class="venue.isFavorite ? 'text-orange-500' : 'text-gray-600'" fill="currentColor"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-orange-500" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
                  <path fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd" />
                </svg>
                {{ venue.address }}
              </div>
              <div class="flex items-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd" />
                </svg>
                {{ venue.capacity }} guests
              </div>
              <div class="flex items-center justify-between pt-4 border-t">
                <div>
                  <span class="text-lg font-bold text-gray-900">${{ venue.price }}</span>
                  <span class="text-gray-500">/hour</span>
                </div>


                <button
                  class="px-6 py-3  text-orange-500 rounded-xl hover:bg-orange-500 hover:text-white transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="flex justify-center mt-4" v-if="!isPreview">
        <NuxtLink to="AllVenues">
          <button
            class="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 mt-8">
            View more options
          </Button>
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { UsersIcon, MapPinIcon, ClockIcon, DollarSignIcon, CheckCircleIcon, GlassesIcon, HeartIcon, MusicIcon, BriefcaseIcon, CakeIcon, InfoIcon, CheckIcon, GiftIcon, BuildingIcon, Building2Icon, HomeIcon, Share } from 'lucide-vue-next'
import TitleImagesBanner from '~/components/TitleImagesBanner.vue';

const props = defineProps(['venueId', 'isVisible', 'isPreview'])
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

const similarVenues = ref([])
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
  contactInfo.value = { other_user_id: venue.value.venue_owner.id, other_user_name: venue.value.venue_owner.full_name }
}

onMounted(() => {
  if (venueId != 0) {
    getVenueById(venueId)
  }
  getSimilarVenues(null)
});
watch(() => props.isVisible, (newValue) => {
  if (newValue) {
    getVenueById(props.venueId)
  }
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

async function getSimilarVenues(query) {
  const { data: AllVenues, error } = await supabase.from('AllVenues').select('*, venue_owner:profiles!createdBy(*)').eq('is_published', true).limit(3)
  console.log(error)
  Promise.all(AllVenues.map(async (venue) => {
    venue.venue_owner.avatarSRC = await fetchImage(venue.venue_owner.avatar_url)
  })).then(() => {
    similarVenues.value = AllVenues;
    console.log(AllVenues)
  })
}
const fetchImage = async (id) => {
  if (!!id) {
    const urlData = await supabase.storage.from('avatars').createSignedUrl(id, 60);
    return urlData?.data?.signedUrl ?? "";
  }
}

// Function to handle the "Share" button click
const sharePage = () => {
  const url = window.location.href;
  const title = venue.value.title;

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