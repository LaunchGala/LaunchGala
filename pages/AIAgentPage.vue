<template>
    <div class="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <!-- <header class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 class="text-2xl font-bold text-orange-600">AI Agent Marketplace</h1>
          <nav>
            <a href="#" class="text-orange-600 hover:text-orange-800 mx-2">Home</a>
            <a href="#" class="text-orange-600 hover:text-orange-800 mx-2">Agents</a>
            <a href="#" class="text-orange-600 hover:text-orange-800 mx-2">About</a>
          </nav>
        </div>
      </header> -->
  
      <main class="container mx-auto px-4 py-12">
        <div class="bg-white rounded-lg shadow-xl overflow-hidden">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img class="h-64 w-full object-cover" :src="agent.image" :alt="agent.name">
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-orange-600 font-semibold">{{ agent.category }}</div>
              <h2 class="mt-2 text-3xl leading-tight font-bold text-gray-900">{{ agent.name }}</h2>
              <p class="mt-4 text-gray-600">{{ agent.description }}</p>
            </div>
          </div>
  
          <div class="px-8 py-6 bg-orange-50">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Services</h3>
            <ul class="space-y-2">
              <li v-for="service in agent.services" :key="service" class="flex items-center">
                <CheckCircleIcon class="h-5 w-5 text-orange-600 mr-2" />
                <span>{{ service }}</span>
              </li>
            </ul>
          </div>
  
          <div class="px-8 py-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Creator Company</h3>
            <div class="flex items-center">
              <img :src="agent.creatorCompany.logo" :alt="agent.creatorCompany.name" class="h-16 w-16 object-contain mr-4 rounded-md">
              <div>
                <h4 class="text-lg font-semibold text-gray-900">{{ agent.creatorCompany.name }}</h4>
                <p class="text-gray-600">{{ agent.creatorCompany.description }}</p>
              </div>
            </div>
          </div>
  
          <div class="px-8 py-6 bg-orange-50">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h5 class="text-sm font-medium text-gray-500">Version</h5>
                <p>{{ agent.version }}</p>
              </div>
              <div>
                <h5 class="text-sm font-medium text-gray-500">Last Updated</h5>
                <p>{{ agent.lastUpdated }}</p>
              </div>
              <div>
                <h5 class="text-sm font-medium text-gray-500">Language</h5>
                <p>{{ agent.language }}</p>
              </div>
              <div>
                <h5 class="text-sm font-medium text-gray-500">Rating</h5>
                <div class="flex items-center">
                  <StarIcon v-for="i in 5" :key="i" :class="['h-5 w-5', i <= agent.rating ? 'text-yellow-400' : 'text-gray-300']" />
                  <span class="ml-2 text-gray-600">({{ agent.reviewCount }} reviews)</span>
                </div>
              </div>
            </div>
          </div>
  
          <div class="px-8 py-6 flex justify-center">
            <a :href="agent.pageUrl" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out">
              <ExternalLinkIcon class="h-5 w-5 mr-2" />
              Visit Agent Page
            </a>
          </div>
        </div>
      </main>
  
      <!-- <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-1/3 mb-6 md:mb-0">
              <h5 class="text-xl font-bold mb-4">AI Agent Marketplace</h5>
              <p class="text-gray-400">Discover and integrate cutting-edge AI agents for your projects.</p>
            </div>
            <div class="w-full md:w-1/3 mb-6 md:mb-0">
              <h5 class="text-xl font-bold mb-4">Quick Links</h5>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Agents</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div class="w-full md:w-1/3">
              <h5 class="text-xl font-bold mb-4">Newsletter</h5>
              <p class="text-gray-400 mb-2">Stay updated with the latest AI agents and features.</p>
              <form class="flex">
                <input type="email" placeholder="Your email" class="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                <button type="submit" class="bg-orange-600 text-white px-4 py-2 rounded-r-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer> -->
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { CheckCircleIcon, StarIcon, ExternalLinkIcon } from 'lucide-vue-next'
  
  const agent = ref({
    name: 'IntelliAssist Pro',
    category: 'Virtual Assistant',
    description: 'IntelliAssist Pro is a state-of-the-art AI agent designed to streamline your daily tasks and boost productivity. With advanced natural language processing and machine learning capabilities, it adapts to your unique needs and preferences.',
    image: '/placeholder.svg?height=300&width=300',
    services: [
      'Natural language task management',
      'Intelligent scheduling and reminders',
      'Email and message drafting',
      'Data analysis and reporting',
      'Voice-activated commands'
    ],
    creatorCompany: {
      name: 'NeuraTech Solutions',
      logo: '/placeholder.svg?height=100&width=100',
      description: 'NeuraTech Solutions is a leading AI research and development company, specializing in creating innovative AI agents for various industries.'
    },
    version: '2.5.1',
    lastUpdated: 'May 15, 2023',
    language: 'Multi-lingual (50+ languages)',
    rating: 4,
    reviewCount: 1289,
    pageUrl: '#'
  })
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  body {
    font-family: 'Poppins', sans-serif;
  }
  
  .container {
    max-width: 1200px;
  }
  </style>