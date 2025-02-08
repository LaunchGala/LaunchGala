<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  MapPin, Globe, Linkedin, UserPlus, Github, Twitter, 
  Instagram, Facebook, Youtube, Twitch,
  Mail, Dribbble, Edit3, Building2, ChevronDown,
  Briefcase, Users, Star, Camera, Rocket, Phone,
  Eye, EyeOff, User
} from 'lucide-vue-next'

interface ProfileSection {
  id: string
  title: string
  description: string
  icon: any
  isExpanded: boolean
  isVisible: boolean
  fields?: {
    name: string
    type: 'text' | 'toggle' | 'select' | 'textarea'
    label: string
    placeholder?: string
    options?: string[]
    value: any
  }[]
}

interface Position {
  title: string
  company: string
  current: boolean
}

interface SocialMedia {
  linkedin?: string
  twitter?: string
  youtube?: string
  facebook?: string
  tiktok?: string
  instagram?: string
  snapchat?: string
  twitch?: string
  discord?: string
}

interface Profile {
  id: number
  name: string
  title: string
  location: string
  email: string
  phone: string
  website: string
  about: string
  positions: Position[]
  industries: string[]
  socialMedia: SocialMedia
  privacy: {
    email: boolean
    phone: boolean
    location: boolean
    about: boolean
    experience: boolean
    industries: boolean
    socialMedia: boolean
  }
}

const isPreviewMode = ref(false)
const showPrivacySettings = ref(false)

const sections = ref<ProfileSection[]>([
  {
    id: 'venue',
    title: 'Provide your Venue',
    description: 'List your venue for events and generate additional income',
    icon: Building2,
    isExpanded: false,
    isVisible: true,
    fields: [
      {
        name: 'venueName',
        type: 'text',
        label: 'Venue Name',
        placeholder: 'Enter your venue name',
        value: ''
      },
      {
        name: 'venueType',
        type: 'select',
        label: 'Venue Type',
        options: ['Conference Hall', 'Wedding Venue', 'Coworking Space', 'Restaurant', 'Other'],
        value: ''
      }
    ]
  },
  {
    id: 'expert',
    title: 'Become an Expert',
    description: 'Share your expertise and connect with event organizers',
    icon: Briefcase,
    isExpanded: false,
    isVisible: true,
    fields: [
      {
        name: 'expertise',
        type: 'select',
        label: 'Area of Expertise',
        options: ['Event Planning', 'Marketing', 'Technology', 'Finance', 'Other'],
        value: ''
      }
    ]
  },
  {
    id: 'volunteer',
    title: 'Become a Volunteer',
    description: 'Support events and gain valuable experience',
    icon: Users,
    isExpanded: false,
    isVisible: true,
    fields: [
      {
        name: 'availability',
        type: 'toggle',
        label: 'Available for Events',
        value: false
      }
    ]
  },
  {
    id: 'influencer',
    title: 'Become an Influencer',
    description: 'Promote events and connect with brands',
    icon: Star,
    isExpanded: false,
    isVisible: true,
    fields: [
      {
        name: 'influencerType',
        type: 'select',
        label: 'Influencer Type',
        options: ['Brand Ambassador', 'Speaker', 'Investor'],
        value: ''
      },
      {
        name: 'willTravel',
        type: 'toggle',
        label: 'Willing to Travel',
        value: false
      }
    ]
  },
  {
    id: 'talent',
    title: 'List your Talent',
    description: 'Showcase your skills and get discovered',
    icon: Camera,
    isExpanded: false,
    isVisible: true
  },
  {
    id: 'startup',
    title: 'List your Startup',
    description: 'Connect with investors and grow your business',
    icon: Rocket,
    isExpanded: false,
    isVisible: true
  }
])

const profileData = ref<Profile>({
  id: 1,
  name: 'Rashid Rifai',
  title: 'CEO at Meta Bang LLC',
  location: 'San Francisco, CA',
  email: 'rifairashid@gmail.com',
  phone: '+1 (555) 123-4567',
  website: 'https://knowtifyAI.com',
  about: 'Passionate tech entrepreneur and AI enthusiast with a focus on building innovative solutions that bridge the gap between complex technology and user-friendly applications. Leading the development of next-generation AI tools at KnowtifyAI.',
  positions: [
    {
      title: 'CEO',
      company: 'Meta Bang LLC - KnowtifyAI.com',
      current: true
    },
    {
      title: 'Sales Representative',
      company: 'Sciprolabs',
      current: false
    }
  ],
  industries: ['Software Development', 'Artificial Intelligence (AI)', 'Machine Learning', 'SaaS'],
  socialMedia: {
    linkedin: 'yfijyfjyfj',
    twitter: 'mmvmnvnm',
    youtube: 'bjbkjbk',
    facebook: 'mhvmjhvm',
    tiktok: '',
    instagram: '',
    snapchat: '',
    twitch: '',
    discord: ''
  },
  privacy: {
    email: true,
    phone: false,
    location: true,
    about: true,
    experience: true,
    industries: true,
    socialMedia: true
  }
})

const socialMedia = {
  website: { icon: Globe, bgColor: 'bg-orange-100', iconColor: 'text-orange-600', hoverBg: 'hover:bg-orange-200', textColor: 'text-orange-800' },
  linkedin: { icon: Linkedin, bgColor: 'bg-blue-100', iconColor: 'text-blue-600', hoverBg: 'hover:bg-blue-200', textColor: 'text-blue-800' },
  github: { icon: Github, bgColor: 'bg-gray-100', iconColor: 'text-gray-600', hoverBg: 'hover:bg-gray-200', textColor: 'text-gray-800' },
  twitter: { icon: Twitter, bgColor: 'bg-sky-100', iconColor: 'text-sky-600', hoverBg: 'hover:bg-sky-200', textColor: 'text-sky-800' },
  instagram: { icon: Instagram, bgColor: 'bg-pink-100', iconColor: 'text-pink-600', hoverBg: 'hover:bg-pink-200', textColor: 'text-pink-800' },
  facebook: { icon: Facebook, bgColor: 'bg-indigo-100', iconColor: 'text-indigo-600', hoverBg: 'hover:bg-indigo-200', textColor: 'text-indigo-800' },
  youtube: { icon: Youtube, bgColor: 'bg-red-100', iconColor: 'text-red-600', hoverBg: 'hover:bg-red-200', textColor: 'text-red-800' },
  twitch: { icon: Twitch, bgColor: 'bg-purple-100', iconColor: 'text-purple-600', hoverBg: 'hover:bg-purple-200', textColor: 'text-purple-800' },
  email: { icon: Mail, bgColor: 'bg-emerald-100', iconColor: 'text-emerald-600', hoverBg: 'hover:bg-emerald-200', textColor: 'text-emerald-800' },
  dribbble: { icon: Dribbble, bgColor: 'bg-pink-100', iconColor: 'text-pink-600', hoverBg: 'hover:bg-pink-200', textColor: 'text-pink-800' }
}

const toggleSection = (sectionId: string) => {
  const section = sections.value.find(s => s.id === sectionId)
  if (section) {
    section.isExpanded = !section.isExpanded
  }
}

const toggleSectionVisibility = (sectionId: string) => {
  const section = sections.value.find(s => s.id === sectionId)
  if (section) {
    section.isVisible = !section.isVisible
  }
}

const togglePrivacy = (field: keyof Profile['privacy']) => {
  profileData.value.privacy[field] = !profileData.value.privacy[field]
}

const formatUrl = (url: string) => !url?.startsWith('http') ? `https://${url}` : url

const togglePreviewMode = () => {
  isPreviewMode.value = !isPreviewMode.value
}

const hasProfile = computed(() => {
  return profileData.value && Object.keys(profileData.value).length > 0
})

const isVisible = (field: keyof Profile['privacy']) => {
  return !isPreviewMode.value || profileData.value.privacy[field]
}
</script>

<template>
  <div v-if="hasProfile" class="min-h-screen bg-gray-50">
    <!-- Preview Mode Banner -->
    <div v-if="isPreviewMode" class="bg-blue-500 text-white py-2 px-4 fixed top-0 left-0 right-0 z-50 flex items-center justify-center">
      <User class="w-5 h-5 mr-2" />
      <span>Viewing profile as other users see it</span>
      <button 
        @click="togglePreviewMode"
        class="ml-4 px-4 py-1 bg-white text-blue-500 rounded-full text-sm hover:bg-blue-50 transition-colors"
      >
        Exit Preview
      </button>
    </div>

    <!-- Banner -->
    <div class="h-80 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 relative">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Profile Header -->
      <div class="relative -mt-32 pb-12">
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <!-- Avatar and Actions -->
          <div class="flex justify-between items-start mb-8">
            <div class="flex items-end">
              <div class="relative">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rashid"
                  alt="Profile picture"
                  class="w-40 h-40 rounded-2xl border-4 border-white shadow-lg"
                >
                <div class="absolute -bottom-3 -right-3 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              <div class="ml-8">
                <h1 class="text-4xl font-bold text-gray-900">{{ profileData.name }}</h1>
                <p class="text-xl text-orange-600 mt-1">{{ profileData.title }}</p>
                <div v-if="isVisible('location')" class="flex items-center mt-2 text-gray-600">
                  <MapPin class="w-5 h-5 mr-2" />
                  <span>{{ profileData.location }}</span>
                </div>
              </div>
            </div>
            <div class="flex space-x-4" v-if="!isPreviewMode">
              <button 
                @click="showPrivacySettings = !showPrivacySettings"
                class="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center space-x-2"
              >
                <Eye class="w-5 h-5" />
                <span>Privacy Settings</span>
              </button>
              <button 
                @click="togglePreviewMode"
                class="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center space-x-2"
              >
                <User class="w-5 h-5" />
                <span>Preview Profile</span>
              </button>
              <button class="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors flex items-center space-x-2">
                <Edit3 class="w-5 h-5" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          <!-- Privacy Settings Panel -->
          <div v-if="showPrivacySettings && !isPreviewMode" class="mb-8 bg-gray-50 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Privacy Settings</h3>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(value, key) in profileData.privacy" :key="key" class="flex items-center justify-between">
                <span class="text-gray-700 capitalize">Show {{ key }}</span>
                <button
                  @click="togglePrivacy(key)"
                  :class="[
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
                    value ? 'bg-orange-500' : 'bg-gray-200'
                  ]"
                >
                  <span
                    :class="[
                      'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                      value ? 'translate-x-5' : 'translate-x-0'
                    ]"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Main Content -->
          <div class="grid grid-cols-3 gap-8">
            <!-- Left Column -->
            <div class="col-span-2 space-y-8">
              <!-- About -->
              <div v-if="isVisible('about')">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">About</h2>
                <p class="text-gray-600 text-lg leading-relaxed">
                  {{ profileData.about }}
                </p>
              </div>

              <!-- Experience -->
              <div v-if="isVisible('experience')">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">Experience</h2>
                <div class="space-y-6">
                  <div v-for="(position, index) in profileData.positions" :key="index" class="flex items-start">
                    <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Building2 class="w-6 h-6 text-orange-600" />
                    </div>
                    <div class="ml-4">
                      <h3 class="text-lg font-semibold text-gray-900">{{ position.title }}</h3>
                      <p class="text-gray-600">{{ position.company }}</p>
                      <span v-if="position.current" class="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mt-2">
                        Current Position
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Industries -->
              <div v-if="isVisible('industries')">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">Industries</h2>
                <div class="flex flex-wrap gap-3">
                  <span 
                    v-for="industry in profileData.industries" 
                    :key="industry"
                    class="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {{ industry }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div class="space-y-8">
              <!-- Contact Information -->
              <div class="bg-gray-50 rounded-xl p-6">
                <h2 class="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <div class="space-y-4">
                  <div v-if="isVisible('email')" class="flex items-center">
                    <Mail class="w-5 h-5 text-gray-500 mr-3" />
                    <a :href="`mailto:${profileData.email}`" class="text-orange-600 hover:text-orange-700">
                      {{ profileData.email }}
                    </a>
                  </div>
                  <div v-if="isVisible('phone')" class="flex items-center">
                    <Phone class="w-5 h-5 text-gray-500 mr-3" />
                    <a :href="`tel:${profileData.phone}`" class="text-orange-600 hover:text-orange-700">
                      {{ profileData.phone }}
                    </a>
                  </div>
                  <div class="flex items-center">
                    <Globe class="w-5 h-5 text-gray-500 mr-3" />
                    <a :href="profileData.website" target="_blank" class="text-orange-600 hover:text-orange-700">
                      {{ profileData.website }}
                    </a>
                  </div>
                </div>
              </div>

              <!-- Social Media -->
              <div v-if="isVisible('socialMedia')">
                <h2 class="text-xl font-semibold text-gray-900 mb-4">Connect & Follow</h2>
                <div class="grid grid-cols-1 gap-3">
                  <template v-for="(config, platform) in socialMedia" :key="platform">
                    <a 
                      v-if="profileData.socialMedia[platform]"
                      :href="formatUrl(profileData.socialMedia[platform])" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      :class="[
                        'flex items-center p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1',
                        config.bgColor,
                        config.hoverBg
                      ]"
                    >
                      <component 
                        :is="config.icon" 
                        :class="['h-5 w-5 mr-3', config.iconColor]"
                      />
                      <span :class="['font-medium', config.textColor]">
                        {{ platform.charAt(0).toUpperCase() + platform.slice(1) }}
                      </span>
                    </a>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Sections -->
      <div class="mt-8 space-y-6">
        <div v-for="section in sections" :key="section.id" 
             v-show="!isPreviewMode || section.isVisible"
             class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
          <div class="px-8 py-6 flex items-center justify-between">
            <button 
              @click="toggleSection(section.id)"
              class="flex-1 flex items-center space-x-4"
            >
              <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <component :is="section.icon" class="w-6 h-6 text-orange-600" />
              </div>
              <div class="text-left">
                <h3 class="text-lg font-semibold text-gray-900">{{ section.title }}</h3>
                <p class="text-gray-600">{{ section.description }}</p>
              </div>
            </button>
            
            <div class="flex items-center space-x-4">
              <button 
                v-if="!isPreviewMode"
                @click="toggleSectionVisibility(section.id)"
                class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                :title="section.isVisible ? 'Hide from public' : 'Show to public'"
              >
                <component 
                  :is="section.isVisible ? Eye : EyeOff"
                  class="w-5 h-5 text-gray-500"
                />
              </button>
              <ChevronDown 
                :class="[
                  'w-5 h-5 text-gray-400 transition-transform duration-200',
                  section.isExpanded ? 'transform rotate-180' : ''
                ]"
              />
            </div>
          </div>

          <!-- Expanded Section Content -->
          <div v-if="section.isExpanded && !isPreviewMode" class="px-8 pb-6 border-t">
            <div class="mt-6 space-y-6">
              <div v-for="field in section.fields" :key="field.name" class="space-y-2">
                <label :for="field.name" class="block text-sm font-medium text-gray-700">
                  {{ field.label }}
                </label>

                <!-- Text Input -->
                <input
                  v-if="field.type === 'text'"
                  v-model="field.value"
                  :type="field.type"
                  :id="field.name"
                  :placeholder="field.placeholder"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >

                <!-- Select Input -->
                <select
                  v-if="field.type === 'select'"
                  v-model="field.value"
                  :id="field.name"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select an option</option>
                  <option v-for="option in field.options" :key="option" :value="option">
                    {{ option }}
                  </option>
                </select>

                <!-- Toggle Input -->
                <div v-if="field.type === 'toggle'" class="flex items-center">
                  <button
                    @click="field.value = !field.value"
                    :class="[
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
                      field.value ? 'bg-orange-500' : 'bg-gray-200'
                    ]"
                  >
                    <span
                      :class="[
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                        field.value ? 'translate-x-5' : 'translate-x-0'
                      ]"
                    />
                  </button>
                  <span class="ml-3 text-sm text-gray-600">{{ field.label }}</span>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex justify-end space-x-4 mt-8">
                <button 
                  class="px-4 py-2 text-gray-600 hover:text-gray-900"
                  @click="toggleSection(section.id)"
                >
                  Cancel
                </button>
                <button class="px-6 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors shadow-md">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600;
}
</style>