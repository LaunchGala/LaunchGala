<template>
    <div class="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <!-- Banner -->
        <div class="h-64 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 relative">
          <img src="/placeholder.svg?height=300&width=1200" alt="Profile banner" class="w-full h-full object-cover mix-blend-overlay">
        </div>
        
        <!-- Avatar -->
        <div class="relative">
          <img src="/placeholder.svg?height=192&width=192" alt="Profile picture of Jacob Rakestraw" class="absolute left-8 -top-24 w-48 h-48 rounded-full border-4 border-white shadow-xl">
        </div>
  
        <div class="p-8 pt-28">
          <div class="flex justify-between items-start">
            <div>
              <h1 class="text-4xl font-bold text-gray-900">Jacob Rakestraw</h1>
              <p class="mt-1 text-2xl text-orange-600">Dev at Launch Gala</p>
              <div class="mt-2 flex items-center text-gray-600">
                <MapPin class="h-5 w-5 mr-2" />
                <span>San Francisco</span>
              </div>
            </div>
            <button @click="connect" class="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 flex items-center shadow-md">
              <UserPlus class="h-5 w-5 mr-2" />
              Connect
            </button>
          </div>
          
          <div class="mt-8">
            <h2 class="text-2xl font-semibold text-gray-900">About</h2>
            <p class="mt-2 text-gray-600 text-lg">I am a dev at launch gala, passionate about creating innovative solutions and driving technological advancements.</p>
          </div>
          
          <div class="mt-8">
            <h2 class="text-2xl font-semibold text-gray-900">Volunteer Categories</h2>
            <div class="mt-3 flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Event Planning and Scheduling</span>
              <span class="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">On-Site Event Coordination</span>
            </div>
          </div>
          
          <div class="mt-8">
            <h2 class="text-2xl font-semibold text-gray-900">Industries</h2>
            <div class="mt-3 flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Software Development</span>
              <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Artificial Intelligence (AI)</span>
              <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Internet of Things (IoT)</span>
              <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Augmented Reality (AR)</span>
            </div>
          </div>
          
          <div class="mt-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Links</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://www.launchgala.com" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-orange-100 rounded-lg hover:bg-orange-200 transition-colors duration-300">
                <Globe class="h-6 w-6 text-orange-600 mr-3" />
                <span class="text-orange-800 font-medium">Launch Gala Website</span>
              </a>
              <a href="https://linkedin.com/in/jacob-rakestraw" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-300">
                <Linkedin class="h-6 w-6 text-blue-600 mr-3" />
                <span class="text-blue-800 font-medium">LinkedIn Profile</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                <Github class="h-6 w-6 text-gray-600 mr-3" />
                <span class="text-gray-800 font-medium">GitHub Profile</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-300">
                <Twitter class="h-6 w-6 text-blue-400 mr-3" />
                <span class="text-blue-800 font-medium">Twitter Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { MapPin, Globe, Linkedin, UserPlus, Github, Twitter } from 'lucide-vue-next'
  
  const connect = () => {
    // Implement connection logic here
    console.log('Connecting with Jacob Rakestraw')
  }
  </script>