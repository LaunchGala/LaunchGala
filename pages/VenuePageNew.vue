<template>
    <div class="min-h-screen bg-white">
      <!-- Header -->
      <header class="relative h-96 overflow-hidden">
        <img :src="venue.mainImage" alt="Venue main image" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <Button variant="ghost">
          <Share class="absolute top-8 right-8 text-xl font-bold text-white"/>Share

              <!-- <ShareButton @click="sharePage" class="w-5 h-5" /> Share -->
            </Button>
        <h1 class="absolute bottom-8 left-8 text-4xl font-bold text-white">{{ venue.name }}</h1>
        <h1 class="absolute bottom-8 right-8 text-xl font-bold text-white">[All Images]</h1>

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
                <div v-for="(feature, index) in venue.features" :key="index" class="flex items-center">
                  <CheckCircleIcon class="w-5 h-5 mr-2 text-orange-500" />
                  <span class="text-gray-600">{{ feature }}</span>
                </div>
              </div>
  
              <!-- Perfect For Section (styled like Amenities) -->
              <h3 class="text-2xl font-semibold mb-4 text-gray-800">Perfect For</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div v-for="(event, index) in venue.suitableEvents" :key="index" class="flex items-center">
                  <component :is="event.icon" class="w-5 h-5 mr-2 text-orange-500" />
                  <span class="text-gray-600">{{ event.name }}</span>
                </div>
              </div>
  
              <div class="grid grid-cols-2 gap-4">
                <img v-for="(image, index) in venue.images.slice(0, 4)" :key="index" :src="image" :alt="`Venue image ${index + 1}`" class="w-full h-48 object-cover rounded-lg shadow-md" />
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
                    <span>{{ venue.location }}</span>
                  </li>
                  <li class="flex items-center text-gray-600">
                    <ClockIcon class="w-5 h-5 mr-2 text-orange-500" />
                    <span>Available: {{ venue.hours }}</span>
                  </li>
                  <li class="flex items-center text-gray-600">
                    <DollarSignIcon class="w-5 h-5 mr-2 text-orange-500" />
                    <span>Starting from ${{ venue.price }} per hour</span>
                  </li>
                  <li class="flex items-center text-gray-600">
                    <GiftIcon class="w-5 h-5 mr-2 text-orange-500" />
                    <span>Sponsorship Option: {{ venue.SponsorshipOption }}</span>
                  </li>
                  <li class="flex items-center text-gray-600">
                    <HomeIcon class="w-5 h-5 mr-2 text-orange-500" />
                    <span>Venue Type: {{ venue.VenueType }}</span>
                  </li>
                </ul>
              </div>
              
              <!-- Booking and Contact Box -->
              <div class="bg-white rounded-lg shadow-lg border border-orange-200">
                <!-- <h3 class="text-2xl font-semibold mb-4 text-gray-800">Book this Venue</h3> -->
                <VenueBookingRequest1 :venueId="venueId"/>

                <!-- <form @submit.prevent="submitBooking" class="space-y-4">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
                    <input type="text" id="name" v-model="booking.name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200">
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" v-model="booking.email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200">
                  </div>
                  <div>
                    <label for="date" class="block text-sm font-medium text-gray-700">Event Date</label>
                    <input type="date" id="date" v-model="booking.date" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200">
                  </div>
                  <div>
                    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" v-model="booking.message" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"></textarea>
                  </div>
                  <button type="submit" class="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
                    Request Booking
                  </button>
                </form> -->
              </div>
            </div>
          </div>
        </section>
  
        <!-- Map -->
        <section class="mb-16">
          <h2 class="text-3xl font-semibold mb-6 text-gray-800">Location</h2>
          <div class="bg-orange-100 rounded-lg overflow-hidden shadow-lg">
            <img src="/placeholder.svg?height=400&width=800" alt="Map" class="w-full h-96 object-cover" />
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
  
  const venue = ref({
    name: 'Luxury Grand Ballroom',
    mainImage: '/eventLanding01.jpg?height=600&width=1200',
    description: 'Experience unparalleled elegance in our Luxury Grand Ballroom. This stunning venue offers a perfect blend of modern sophistication and timeless charm, ideal for weddings, galas, and corporate events.',
    features: [
      'Chandeliers',
      'State-of-the-art AV',
      'Gourmet Kitchen',
      'Outdoor Terrace',
      'Valet Parking',
      'On-site Catering',
      'Bridal Suite',
      'Customizable Lighting'
    ],
    images: [
      '/venueBG01.jpeg',
      '/eventLanding03.jpg',
      '/Bootstrapping.png',
      '/eventLanding04.jpg',
    ],
    capacity: 500,
    location: '123 Luxury Lane, Elegantville, EL 12345',
    hours: '08:00 AM - 02:00 AM',
    price: 5000,
    SponsorshipOption: 'Yes',
    VenueType: 'Historical building',

    reservationRules: [
      'Minimum 50% deposit required to secure booking',
      'Cancellations must be made 30 days prior to the event for a full refund',
      'Outside catering is not permitted, in-house catering options available',
      'Decorations must be approved by management',
      'Music and events must end by 2:00 AM',
    ],
    suitableEvents: [
      { name: 'Weddings', icon: CheckIcon },
      { name: 'Corporate Events', icon: CheckIcon },
      { name: 'Galas', icon: CheckIcon },
      { name: 'Concerts', icon: CheckIcon },
      { name: 'Birthday Parties', icon: CheckIcon },
      { name: 'Exhibitions', icon: CheckIcon },
    ]
  })
  
  const similarVenues = ref([
    {
      name: 'Seaside Pavilion',
      image: '/eventLanding02.jpg',
      description: 'A breathtaking oceanfront venue perfect for beach weddings and sunset receptions.',
      price: 4500,
    },
    {
      name: 'Historic Mansion',
      image: '/venueBG01.jpeg',
      description: 'An exquisite 19th-century mansion with manicured gardens for a touch of vintage glamour.',
      price: 5500,
    },
    {
      name: 'Skyline Lounge',
      image: '/eventLanding03.jpg',
      description: 'A modern, high-rise venue offering panoramic city views and a sleek atmosphere.',
      price: 6000,
    },
  ])
  
  const booking = ref({
    name: '',
    email: '',
    date: '',
    message: ''
  })
  
  const submitBooking = () => {
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', booking.value)
    // Reset form after submission
    booking.value = { name: '', email: '', date: '', message: '' }
    // You might want to show a success message to the user here
    alert('Booking request submitted successfully!')
  }
  </script>