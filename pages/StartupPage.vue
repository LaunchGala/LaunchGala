<template>
    <div class="min-h-screen bg-white">
      <header class="bg-orange-500 text-white py-6">
        <div class="container mx-auto px-4 flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <img
              src="/public/Launch_Gala_Logo-removebgHD.png"
              alt="Company Logo"
              class="w-24 h-24 rounded-full bg-white"
            />
            <h1 class="text-3xl font-bold">TechNova</h1>
          </div>
          <!-- <nav>
            <ul class="flex space-x-4">
              <li><a href="#contact" class="hover:underline">Contact</a></li>
            </ul>
          </nav> -->
        </div>
      </header>
  
      <main class="container mx-auto px-4 py-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="md:col-span-2 space-y-6">
            <section id="about">
              <h2 class="text-2xl font-semibold text-orange-600 mb-4">About TechNova</h2>
              <p class="text-gray-700">
                TechNova is a cutting-edge startup focused on revolutionizing the way businesses handle data analytics. 
                Our AI-powered platform provides real-time insights and predictive analysis, helping companies make 
                data-driven decisions faster and more accurately than ever before.
              </p>
            </section>
  
            <section>
              <h2 class="text-2xl font-semibold text-orange-600 mb-4">Company Details</h2>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="(detail, index) in companyDetails" :key="index">
                  <h3 class="font-medium text-gray-900">{{ detail.label }}</h3>
                  <p class="text-gray-700">{{ detail.value }}</p>
                </div>
              </div>
            </section>
  
            <section id="contact">
              <h2 class="text-2xl font-semibold text-orange-600 mb-4">Contact Information</h2>
              <div class="space-y-2">
                <p v-for="(info, index) in contactInfo" :key="index" class="flex items-center text-gray-700">
                  <component :is="info.icon" class="mr-2 text-orange-500" />
                  {{ info.value }}
                </p>
              </div>
            </section>
          </div>
  
          <div class="md:col-span-1">
            <div class="bg-orange-100 p-6 rounded-lg shadow-md">
              <!-- <h2 class="text-2xl font-semibold text-orange-600 mb-4">Founder</h2> -->
              <div class="text-center">
                <img
                  src="/public/Launch_Gala_Logo-removebgHD.png"
                  alt="Founder"
                  class="w-36 h-36 rounded-full mx-auto mb-4"
                />
                <h3 class="text-xl font-medium text-gray-900">Jane Doe</h3>
                <p class="text-gray-700">CEO & Co-founder</p>
              </div>
              <div class="mt-4 text-gray-700">
                <p>
                  Jane is a visionary leader with over 15 years of experience in the tech industry. 
                  Her passion for data-driven decision making led her to found TechNova in 2021.
                </p>
              </div>
              <div class="flex mt-4 items-center text-gray-700 dark:text-gray-300">
            <LinkedinIcon class="w-5 h-5"/>
            <a href="https://linkedin.com/in/volunteername" class="ml-2 hover:underline">linkedin.com/in/volunteername</a>
          </div>
          <div class="flex justify-center items-center mt-8">
          <!-- <Button class="flex items-center justify-center px-8 py-3 rounded-md bg-orange-500 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500  text-white">
            Edit
          </Button> -->
          <MessagesButton v-if="Object.keys(contactInfo).length !== 0" :label="'Contact'" :isIcon="false" :newConversationInfo="contactInfo"></MessagesButton>
        </div>
            </div>
            
          </div>
          
        </div>
      </main>
  

    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { MapPin, Phone, Mail, Link } from 'lucide-vue-next'
  import { GlobeIcon, LinkedinIcon, MapPinIcon, UserIcon } from 'lucide-vue-next'

  
  const currentYear = new Date().getFullYear()
  
  const companyDetails = ref([
    { label: 'Industry', value: 'Data Analytics & AI' },
    { label: 'Funding Stage', value: 'Series A' },
    { label: 'Founded', value: '2021' },
    { label: 'Team Size', value: '25-50 employees' }
  ])
  
  const contactInfo = ref([
    { icon: MapPin, value: '123 Innovation Drive, San Francisco, CA 94105' },
    { icon: Phone, value: '(555) 123-4567' },
    { icon: Mail, value: 'info@technova.com' },
    { icon: Link, value: 'www.technova.com' }

  ])
  </script>