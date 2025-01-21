<template>
    <div class="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <!-- Event Banner -->
        <div class="h-64 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 relative">
          <img src="/placeholder.svg?height=300&width=1200" alt="Event banner" class="w-full h-full object-cover mix-blend-overlay">
        </div>
        
        <!-- Event Logo -->
        <div class="relative">
          <img src="/placeholder.svg?height=192&width=192" alt="Event logo" class="absolute left-8 -top-24 w-48 h-48 rounded-full border-4 border-white shadow-xl object-cover">
        </div>
  
        <div class="p-8 pt-28">
          <div class="flex justify-between items-start">
            <div>
              <h1 class="text-4xl font-bold text-gray-900">TechConf 2023</h1>
              <p class="mt-1 text-2xl text-orange-600">The Future of Technology</p>
              <div class="mt-2 flex items-center text-gray-600">
                <MapPin class="h-5 w-5 mr-2" />
                <span>San Francisco Convention Center</span>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <h2 class="text-2xl font-semibold text-gray-900">About the Event</h2>
            <p class="mt-2 text-gray-600 text-lg">Join us for TechConf 2023, where industry leaders and innovators come together to explore the cutting-edge technologies shaping our future. From AI to blockchain, we've got it all covered!</p>
          </div>
          
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 class="text-2xl font-semibold text-gray-900">Date & Time</h2>
              <div class="mt-3 flex items-center text-gray-600">
                <Calendar class="h-5 w-5 mr-2 text-orange-500" />
                <span>September 15-17, 2023</span>
              </div>
              <div class="mt-2 flex items-center text-gray-600">
                <Clock class="h-5 w-5 mr-2 text-orange-500" />
                <span>9:00 AM - 6:00 PM (PDT)</span>
              </div>
            </div>
            
            <div>
              <h2 class="text-2xl font-semibold text-gray-900">Ticket Information</h2>
              <div class="mt-3 flex items-center text-gray-600">
                <DollarSign class="h-5 w-5 mr-2 text-orange-500" />
                <span>Early Bird: $499 (until July 31)</span>
              </div>
              <div class="mt-2 flex items-center text-gray-600">
                <DollarSign class="h-5 w-5 mr-2 text-orange-500" />
                <span>Regular: $699</span>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
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
              <div v-for="highlight in highlights" :key="highlight.title" class="flex items-center p-4 bg-gray-100 rounded-lg">
                <component :is="highlight.icon" class="h-6 w-6 text-orange-600 mr-3" />
                <span class="text-gray-800 font-medium">{{ highlight.title }}</span>
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
  import { MapPin, Ticket, Calendar, Clock, DollarSign, Mail, Twitter, Linkedin, Instagram, Users, Lightbulb, Mic, Network, Building, Heart, Briefcase, ShoppingBag } from 'lucide-vue-next'
  
  const speakers = ref([
    { name: 'Jane Doe', role: 'AI Research Lead', avatar: '/placeholder.svg?height=100&width=100' },
    { name: 'John Smith', role: 'Blockchain Expert', avatar: '/placeholder.svg?height=100&width=100' },
    { name: 'Emily Johnson', role: 'IoT Innovator', avatar: '/placeholder.svg?height=100&width=100' },
  ])
  
  const highlights = ref([
    { title: 'AI', icon: Mic },
    { title: 'Pharma', icon: Users },
    { title: 'Blockchain', icon: Lightbulb },
    { title: 'Energy', icon: Network },
  ])
  
  const registerNow = () => {
    console.log('Registering for TechConf 2023')
  }
  
  const offerVenue = () => {
    console.log('Offering venue for TechConf 2023')
  }
  
  const offerSponsorship = () => {
    console.log('Offering sponsorship for TechConf 2023')
  }
  
  const offerVolunteering = () => {
    console.log('Offering to volunteer for TechConf 2023')
  }
  
  const offerExpertise = () => {
    console.log('Offering expertise for TechConf 2023')
  }
  
  const vendorsOffering = () => {
    console.log('Vendor offering for TechConf 2023')
  }
  </script>