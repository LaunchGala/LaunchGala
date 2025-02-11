<template>
    <div class="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div class="relative h-96 overflow-hidden">
          <TitleImagesBanner :imageNames="event.images" :showButton="true" />
        </div>
        <div class="relative">
          <img :src="event?.event_owner?.avatarSRC" alt="Event logo" class="absolute left-8 -top-24 w-48 h-48 rounded-full border-4 border-white shadow-xl object-cover">
        </div>
  
  
        <div class="p-8 pt-28">
          <div class="flex justify-between items-start">
            <div>
              <h1 class="text-4xl font-bold text-gray-900">{{event.title}}</h1>
              <p class="mt-1 text-2xl text-orange-600">{{event.event_type}}</p>
              <div class="mt-2 flex items-center text-gray-600">
                <MapPin class="h-5 w-5 mr-2" />
                <span>{{event.location}}</span>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <h2 class="text-2xl font-semibold text-gray-900">About the Event</h2>
            <p class="mt-2 text-gray-600 text-lg">{{ event.description }}</p>
          </div>
          
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 class="text-2xl font-semibold text-gray-900">Date & Time</h2>
              <div class="mt-3 flex items-center text-gray-600">
                <Calendar class="h-5 w-5 mr-2 text-orange-500" />
                <span>{{ formatDateRange(event.event_start_date, event.event_end_date) }}</span>
              </div>
              <div class="mt-2 flex items-center text-gray-600">
                <Clock class="h-5 w-5 mr-2 text-orange-500" />
                <span>{{ formatTimeRange(event.event_start_time, event.event_end_time)}}</span>
              </div>
            </div>
            
            <div>
              <h2 class="text-2xl font-semibold text-gray-900">Ticket Information</h2>
              <div class="mt-3 flex items-center text-gray-600">
                <DollarSign class="h-5 w-5 mr-2 text-orange-500" />
                <span>Price: {{event.ticket_price}}</span>
              </div>
            </div>
          </div>
          
          <div v-if="event?.featured_speakers?.length" class="mt-8">
            <h2 class="text-2xl font-semibold text-gray-900">Featured Speakers</h2>
            <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div v-for="speaker in speakers" :key="speaker.name" class="flex items-center p-3 bg-orange-100 rounded-lg">
                <img :src="speaker.avatar" :alt="speaker.name" class="w-12 h-12 rounded-full mr-3 object-cover">
                <div>
                  <h3 class="font-medium text-gray-900">{{ speaker.name }}</h3>
                  <p class="text-sm text-gray-600">{{ speaker.role }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Event Industries</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="highlight in event.industries" :key="highlight" class="flex items-center p-4 bg-gray-100 rounded-lg">
                <component :is="Network" class="h-6 w-6 text-orange-600 mr-3" />
                <span class="text-gray-800 font-medium">{{ highlight }}</span>
              </div>
            </div>
          </div>
          
          <div class="mt-12">
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">Ready to join us?</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <button @click="registerNow" class="w-full px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center shadow-md">
                <Ticket class="h-5 w-5 mr-2" />
                Register Now
              </button>
              <button @click="offerVenue" class="w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center shadow-md">
                <Building class="h-5 w-5 mr-2" />
                Offer Venue
              </button>
              <button @click="offerSponsorship" class="w-full px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300 flex items-center justify-center shadow-md">
                <DollarSign class="h-5 w-5 mr-2" />
                Offer Sponsorship
              </button>
              <button @click="offerVolunteering" class="w-full px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center shadow-md">
                <Heart class="h-5 w-5 mr-2" />
                Offer Volunteering
              </button>
              <button @click="offerExpertise" class="w-full px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 flex items-center justify-center shadow-md">
                <Briefcase class="h-5 w-5 mr-2" />
                Offer Expertise
              </button>
              <button @click="vendorsOffering" class="w-full px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-300 flex items-center justify-center shadow-md">
                <ShoppingBag class="h-5 w-5 mr-2" />
                Vendors Offering
              </button>
            </div>
          </div>
          
          <div class="mt-12">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Contact & Social Media</h2>
            <div class="flex flex-wrap gap-4">
              <a href="mailto:info@techconf2023.com" class="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                <Mail class="h-5 w-5 text-orange-600 mr-2" />
                <span class="text-gray-800">Email Us</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" class="flex items-center p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-300">
                <Twitter class="h-5 w-5 text-blue-600 mr-2" />
                <span class="text-blue-800">Twitter</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" class="flex items-center p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-300">
                <Linkedin class="h-5 w-5 text-blue-600 mr-2" />
                <span class="text-blue-800">LinkedIn</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" class="flex items-center p-3 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors duration-300">
                <Instagram class="h-5 w-5 text-pink-600 mr-2" />
                <span class="text-pink-800">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { format } from 'date-fns';
import { formatInTimeZone, fromZonedTime } from 'date-fns-tz';
  import { MapPin, Ticket, Calendar, Clock, DollarSign, Mail, Twitter, Linkedin, Instagram, Users, Lightbulb, Mic, Network, Building, Heart, Briefcase, ShoppingBag } from 'lucide-vue-next'
  const route = useRoute();
const venueId = route.query.id;
const event = ref({
  created_by: 1,
  title: '',
  description: '',
  invite_only: false,
  ticket_price: 0,
  event_type: '',
  industries: [],
  images: [],
  event_start_date: new Date(),
  event_end_date: new Date(),
  event_start_time: '12:00:00',
  event_end_time: '14:00:00',
  location: '',
  agenda: '',
  link: '',
  allow_venue_offering: true,
  allow_volunteers_offering: true,
  allow_sponsorship_offering: true,
  allow_expertise_offering: true,
  allow_vendors_offering: true,
  allow_registration_request: true,
  is_published: false




});
const contactInfo = ref({})
async function getEvent() {
  const { data: AllEvents, error } = await supabase.from('AllEvents').select('*, event_owner:profiles!created_by(*)').eq('id', venueId)
  console.log(error)
  Promise.all(AllEvents.map(async (event) => {
    event.event_owner.avatarSRC = await fetchImage(event.event_owner.avatar_url)
  })).then(() => {
    event.value = AllEvents[0];
    contactInfo.value = {other_user_id: event.value.event_owner.id, other_user_name: event.value.event_owner.full_name}
    console.log(AllEvents)
  })
}
const fetchImage = async (id) => {
    if(!!id)
    {
            const urlData = await supabase.storage.from('avatars').createSignedUrl(id, 60);
            return urlData?.data?.signedUrl ?? "";
    }
    return "";
  }
onMounted(() => {
  getEvent()
});

// Function to handle the "Share" button click
const sharePage = () => {
  const url = window.location.href;
  const title = event.value.title;

  if (navigator.share) {
    // Use Web Share API if available
    navigator.share({
      title: title,
      text: `Check out this event: ${title}`,
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
function formatDateRange(start, end) {
  if (!start || !end) return '';

  const startMonth = format(start, 'MMMM');
  const endMonth = format(end, 'MMMM');
  const startYear = format(start, 'yyyy');
  const endYear = format(end, 'yyyy');
  const startDay = format(start, 'd');
  const endDay = format(end, 'd');
  const days = startDay == endDay ? `${startDay}` : `${startDay}-${endDay}`
  if (startYear === endYear) {
    if (startMonth === endMonth) {
      return `${startMonth} ${days}, ${startYear}`;
    }
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`;
  }
  
  return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;
}
function formatTimeRange(startTime, endTime) {
  if (!startTime || !endTime) return '';

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Detect user's local timezone

  // Convert input time (HH:mm) to UTC, then format it for the user's timezone
  const startUtc = fromZonedTime(`1970-01-01T${startTime}`, 'UTC');
  const endUtc = fromZonedTime(`1970-01-01T${endTime}`, 'UTC');

  const startFormatted = formatInTimeZone(startUtc, timeZone, 'h:mm a');
  const endFormatted = formatInTimeZone(endUtc, timeZone, 'h:mm a');
  const timeZoneAbbr = formatInTimeZone(new Date(), timeZone, 'zzz'); // Get local timezone abbreviation

  return `${startFormatted} - ${endFormatted} (${timeZoneAbbr})`;
}
  </script>