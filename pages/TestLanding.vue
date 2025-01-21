<template>
    <div class="min-h-screen bg-white text-gray-800">
      <!-- Header -->
      <header class="bg-white shadow-sm">
        <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
          <div class="text-2xl font-bold text-orange-500">Launch Gala</div>
          <ul class="hidden md:flex space-x-6">
            <li><a href="#" class="hover:text-orange-500 transition-colors">How it works</a></li>
            <li><a href="#" class="hover:text-orange-500 transition-colors">Resources</a></li>
            <li><a href="#" class="hover:text-orange-500 transition-colors">Pricing</a></li>
          </ul>
          <button class="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
            Sign Up
          </button>
        </nav>
      </header>
  
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">Find Everything You Need for Your Next Event</h1>
          <p class="text-xl mb-8">Discover venues, volunteers, speakers, sponsors, and more - all in one place.</p>
          <div class="max-w-3xl mx-auto bg-white rounded-full shadow-lg flex items-center p-2">
            <SearchIcon class="text-gray-400 ml-3" />
            <input type="text" placeholder="What are you looking for?" class="flex-grow px-4 py-2 focus:outline-none text-gray-800" />
            <button class="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>
  
      <!-- Categories Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Find What You Need</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CategoryCard v-for="category in categories" :key="category.name" :category="category" />
          </div>
        </div>
      </section>
  
      <!-- Testimonial Section -->
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div class="max-w-2xl mx-auto bg-orange-100 rounded-lg p-8">
            <p class="text-xl italic mb-4">"Launch Gala made organizing our tech conference a breeze. We found amazing speakers and sponsors in no time!"</p>
            <p class="font-bold">- Sarah Johnson, TechConf Organizer</p>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mb-4">Company</h3>
              <ul class="space-y-2">
                <li><a href="#" class="hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#" class="hover:text-orange-500 transition-colors">Careers</a></li>
                <li><a href="#" class="hover:text-orange-500 transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-4">Resources</h3>
              <ul class="space-y-2">
                <li><a href="#" class="hover:text-orange-500 transition-colors">Blog</a></li>
                <li><a href="#" class="hover:text-orange-500 transition-colors">Help Center</a></li>
                <li><a href="#" class="hover:text-orange-500 transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-4">Legal</h3>
              <ul class="space-y-2">
                <li><a href="#" class="hover:text-orange-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" class="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" class="hover:text-orange-500 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-4">Connect</h3>
              <div class="flex space-x-4">
                <a href="#" class="hover:text-orange-500 transition-colors"><FacebookIcon /></a>
                <a href="#" class="hover:text-orange-500 transition-colors"><TwitterIcon /></a>
                <a href="#" class="hover:text-orange-500 transition-colors"><InstagramIcon /></a>
                <a href="#" class="hover:text-orange-500 transition-colors"><LinkedinIcon /></a>
              </div>
            </div>
          </div>
          <div class="mt-8 text-center text-gray-400">
            &copy; {{ new Date().getFullYear() }} Launch Gala. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { SearchIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from 'lucide-vue-next'
  
  const categories = ref([
    { name: 'Venues', icon: 'MapPinIcon' },
    { name: 'Volunteers', icon: 'UsersIcon' },
    { name: 'Speakers', icon: 'MicIcon' },
    { name: 'Sponsors', icon: 'HeartHandshakeIcon' },
    { name: 'Influencers', icon: 'TrendingUpIcon' },
    { name: 'Co-Founders', icon: 'UsersIcon' },
    { name: 'Investors', icon: 'PiggyBankIcon' },
    { name: 'AI Agents & Vendors', icon: 'BotIcon' },
  ])
  </script>
  
  <script>
  import { defineComponent } from 'vue'
  import { MapPinIcon, UsersIcon, MicIcon, HeartHandshakeIcon, TrendingUpIcon, PiggyBankIcon, BotIcon } from 'lucide-vue-next'
  
  export default defineComponent({
    name: 'CategoryCard',
    props: {
      category: {
        type: Object,
        required: true
      }
    },
    components: {
      MapPinIcon,
      UsersIcon,
      MicIcon,
      HeartHandshakeIcon,
      TrendingUpIcon,
      PiggyBankIcon,
      BotIcon
    },
    setup(props) {
      const getIcon = () => {
        const iconMap = {
          MapPinIcon,
          UsersIcon,
          MicIcon,
          HeartHandshakeIcon,
          TrendingUpIcon,
          PiggyBankIcon,
          BotIcon
        }
        return iconMap[props.category.icon]
      }
  
      return { getIcon }
    },
    template: `
      <div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105">
        <component :is="getIcon()" class="w-12 h-12 text-orange-500 mb-4" />
        <h3 class="text-lg font-semibold">{{ category.name }}</h3>
      </div>
    `
  })
  </script>
  
  <style>
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
  
  body {
    font-family: 'Arial', sans-serif;
  }
  </style>