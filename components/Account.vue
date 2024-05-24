<script setup lang="ts">

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, Edit2, Mail, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-vue-next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  
} from '@/components/ui/dropdown-menu'

import {
ScrollArea,
} from '@/components/ui/scroll-area';
import { ChevronDown, XCircle } from 'lucide-vue-next'


const supabase = useSupabaseClient()

const loading = ref(true)
const full_name = ref('')
const website = ref('')
const avatar_path = ref('')
const user_phone = ref('')
const job_title = ref('')
const user_company = ref('')
const user_location = ref('')
const user_about = ref('')
const user_linkedin = ref('')
const user_youtube = ref('')
const user_facebook = ref('')
const user_twitter = ref('')
const industry = ref('')
const business_stage = ref('')




loading.value = true
const user = useSupabaseUser()

const { data } = await supabase
  .from('profiles')
  .select()
  .eq('id', user.value.id)
  .single()

if (data) {
  full_name.value = data.full_name
  website.value = data.website
  avatar_path.value = data.avatar_url
  user_phone.value = data.user_phone
  job_title.value = data.job_title
  user_company.value = data.user_company
  user_location.value = data.user_location
  user_about.value = data.user_about
  user_linkedin.value = data.user_linkedin
  user_youtube.value = data.user_youtube
  user_facebook.value = data.user_facebook
  user_twitter.value = data.user_twitter
  industry.value = data.industry
  business_stage.value = data.business_stage

  
  
}

loading.value = false

async function updateProfile() {
  try {
    loading.value = true
    const user = useSupabaseUser()

    const updates = {
        id: user.value.id,
        full_name: full_name.value,
        website: website.value,
        avatar_url: avatar_path.value,
        user_phone: user_phone.value,
        job_title: job_title.value,
        user_company: user_company.value,
        user_location: user_location.value,
        user_about: user_about.value,
        user_linkedin: user_linkedin.value,
        user_youtube: user_youtube.value,
        user_facebook: user_facebook.value,
        user_twitter: user_twitter.value,
        industry: industry.value,
        business_stage: business_stage.value,

        updated_at: new Date(),
    }

    const { error } = await supabase.from('profiles').upsert(updates, {
      returning: 'minimal', // Don't return the value after inserting
    })

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
    editDisabled.value = true
  }
}

async function signOut() {
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

const editDisabled = ref(true)

function toggleEditDisabled() {
  editDisabled.value = !editDisabled.value
}

const Industries = [
    'Software Development', 'Artificial Intelligence (AI)', 'Machine Learning (ML)', 'Internet of Things (IoT)', 
    'Augmented Reality (AR)/Virtual Reality (VR)', 'Cybersecurity', 'Blockchain', 'Cloud Computing', 
    'Big Data Analytics', 'Quantum Computing', 'Information Technology Services', 'Computer Hardware Manufacturing', 
    'Telecommunications', 'Consumer Electronics', 'Fintech', 'Insurtech', 'Cryptocurrency and Blockchain Technologies', 
    'Wealthtech', 'Crowdfunding Platforms', 'Banking', 'Insurance', 'Investment Banking', 'Stock Brokerage', 
    'Digital Health', 'Telemedicine', 'Biotechnology', 'Medical Devices', 'Healthcare IT', 'Personalized Medicine', 
    'Health and Wellness Apps', 'Hospitals', 'Pharmaceuticals', 'Clinical Laboratories', 'Medical Practices', 
    'Renewable Energy (Solar, Wind, etc.)', 'Clean Tech', 'Energy Storage', 'Smart Grids', 'Environmental Services', 
    'Oil and Gas', 'Coal Mining', 'Nuclear Energy', 'Edtech', 'E-learning Platforms', 'Learning Management Systems (LMS)', 
    'Corporate Training Solutions', 'Primary and Secondary Schools', 'Higher Education Institutions', 
    'Vocational Training Centers', 'Agtech', 'Sustainable Agriculture', 'Food Tech (Alternative Proteins, Lab-grown Meat)', 
    'Precision Farming', 'Crop Production', 'Livestock Farming', 'Agricultural Equipment', 'E-commerce', 
    'Direct-to-Consumer (DTC)', 'Subscription Boxes', 'Health and Wellness Products', 'Personal Fitness Tech', 
    'Retail Stores', 'Consumer Product Manufacturing', 'Apparel and Footwear', 'Gaming', 'Digital Media', 
    'Streaming Services', 'Content Creation Platforms', 'Television Broadcasting', 'Film Production', 'Radio Broadcasting', 
    'Autonomous Vehicles', 'Electric Vehicles (EV)', 'Ride-sharing Platforms', 'Logistics Tech', 'Supply Chain Innovation', 
    'Automotive Manufacturing', 'Aerospace', 'Railways', 'Proptech', 'Real Estate Crowdfunding', 'Smart Home Technologies', 
    'Residential Real Estate', 'Commercial Real Estate', 'Property Management', 'Travel Tech', 'Hotel Management Systems', 
    'Online Travel Agencies', 'Event Planning Tech', 'Hotels and Resorts', 'Restaurants', 'Travel Agencies', 
    '3D Printing', 'Robotics', 'Industrial IoT', 'Supply Chain Management', 'Textile Manufacturing', 'Metalworks', 
    'Chemical Processing', 'Legal Tech', 'Regtech (Regulatory Technology)', 'Compliance Solutions', 
    'Intellectual Property Management', 'Law Firms', 'Cybersecurity Services', 'Physical Security Technology', 'Personal Safety Devices', 'Home Automation Security', 'Private Investigation', 'HR Tech', 'Talent Acquisition Platforms', 
    'Freelance Marketplaces', 'Remote Work Solutions', 'Staffing Agencies', 'Corporate HR Departments', 'Payroll Services', 
    'Digital Marketing Platforms', 'Customer Relationship Management (CRM)', 'Social Media Management Tools', 
    'Branding and Design Services', 'Advertising Agencies', 'Public Relations Firms', 'Market Research Firms', 
    'Non-profit Solutions', 'Social Impact Platforms', 'Community Service Tech', 'Charitable Organizations', 
    'Community Foundations', 'Social Service Agencies', 'Space Tech', 'Drone Technology', 'Wearable Tech', 'Urban Tech (Smart Cities)', 
    'Aerospace', 'Aviation', 'Urban Development', 'Venture Capital (VC) Firm', 'Private Equity Firm', 'Accelerator & Incubator', 'Family Office', 'Angel Network', 'Sovereign Wealth Fund', "Other",
]
const selectedIndustry = ref('')

const businessStages = ['Bootstrapped Sole Proprietorship', 'Bootstrapped Small to Medium Enterprise (SME)', 'Angel-funded Startup', 'Seed-Stage Startup (Angel-funded)', 'Series A Startup (VC-funded)', 'Series B Startup (VC-funded)', 'Series C Startup (VC-funded)', 'Growth-Stage Startup (VC-funded)', 'Late-Stage Startup (VC-funded)', 'VC-funded Small to Medium Enterprise (SME)', 'Private Equity-backed SME', 'Private Equity-backed Large Enterprise', 'Corporate (Privately Held)', 'Corporate (Publicly Traded)', 'Conglomerate (Private Equity-backed)', 'Conglomerate (Publicly Traded)', 'Public Company', 'Non-Profit Organization', 'Research Institution', 'Government Organization', 'Other']
const selectedBusinessStage = ref('')

const professions = 
[
    'Software Engineer', 'Investor', 'Startup Founder', 'Banker', 
    'Consultant', 'Entrepreneur', 'Marketing Manager', 'Sales Executive', 
    'Product Manager', 'Project Manager', 'Financial Analyst', 'Data Scientist', 
    'Business Analyst', 'Human Resources Manager', 'Operations Manager', 
    'Accountant', 'Attorney', 'Doctor', 'Nurse', 'Pharmacist', 
    'Research Scientist', 'Architect', 'Civil Engineer', 'Mechanical Engineer', 
    'Electrical Engineer', 'Graphic Designer', 'UX/UI Designer', 'Web Developer', 
    'Mobile App Developer', 'Network Administrator', 'IT Support Specialist', 
    'Cybersecurity Specialist', 'Public Relations Specialist', 'Journalist', 
    'Content Writer', 'Copywriter', 'Editor', 'Publisher', 'Photographer', 
    'Videographer', 'Film Director', 'Actor', 'Musician', 'Artist', 
    'Interior Designer', 'Real Estate Agent', 'Property Manager', 'Construction Manager', 
    'Logistics Manager', 'Supply Chain Manager', 'Quality Assurance Specialist', 
    'Environmental Scientist', 'Health and Safety Officer', 'Nutritionist', 
    'Personal Trainer', 'Fitness Coach', 'Physical Therapist', 'Occupational Therapist', 
    'Speech Therapist', 'Veterinarian', 'Animal Trainer', 'Chef', 'Baker', 
    'Event Planner', 'Wedding Planner', 'Tour Guide', 'Travel Agent', 
    'Customer Service Representative', 'Retail Manager', 'Store Assistant', 
    'Bartender', 'Barista', 'Waiter/Waitress', 'Hotel Manager', 
    'Flight Attendant', 'Pilot', 'Marine Biologist', 'Astronomer', 
    'Chemist', 'Physicist', 'Mathematician', 'Economist', 
    'Sociologist', 'Psychologist', 'Therapist/Counselor', 'Social Worker', 
    'Humanitarian Aid Worker', 'Non-profit Manager', 'Policy Analyst', 
    'Lobbyist', 'Urban Planner', 'Museum Curator', 'Librarian', 
    'Historian', 'Anthropologist', 'Archaeologist', 'Philosopher', 
    'Theologist', 'Clergy Member', 'Astrologer', 'Yoga Instructor', 
    'Life Coach', 'Career Coach', 'Financial Coach', 'Real Estate Developer', 
    'Faculty Professor', 'Chief Executive Officer (CEO)', 'Chief Financial Officer (CFO)', 
    'Chief Operating Officer (COO)', 'Chief Technology Officer (CTO)', 
    'Chief Marketing Officer (CMO)', 'Chief Human Resources Officer (CHRO)', 
    'Chief Information Officer (CIO)', 'Chief Compliance Officer (CCO)'
]
const selectedProfession = ref('')
</script>

<template>
    <div>
      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
    </div>


  <div class="mx-auto max-w-4xl py-8 px-6 bg-white dark:bg-black rounded-lg shadow-md space-y-6">
    <div class="border-b dark:border-gray-700 pb-4">
      <div class="flex items-center space-x-4">
        <ProfileAvatar v-model:path="avatar_path" @upload="updateProfile" :hide-upload="editDisabled"/>

        <div class="flex-grow">
          <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ full_name }}</h1>
          <p class="text-gray-500 dark:text-gray-400">@pinky</p>
        </div>
        <Button v-if="editDisabled" @click="toggleEditDisabled" variant="secondary" class="flex items-center gap-2 text-white bg-orange-500  hover:bg-orange-400 focus:ring-orange-400">
          <Edit2 class="w-5 h-5" />
          Edit Profile
        </Button>
        <Button v-else @click="updateProfile" variant="secondary" class="flex items-center gap-2  text-white bg-orange-500  hover:bg-orange-400 focus:ring-orange-400">
          <Edit2 class="w-5 h-5" />
          Update Profile
        </Button>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <div class="flex items-center space-x-2">
          <User class="w-6 h-6 text-gray-600 dark:text-gray-400" />
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Overview</h3>
        </div>
        <div class="mt-4 space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="jobTitle">Job Title (Student: Major)</label>
            <Input id="jobTitle" :disabled="editDisabled" v-model="job_title" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="company">Company (Student: Collage)</label>
            <Input id="company" :disabled="editDisabled" v-model="user_company" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="industry">Industry</label>
            <!-- <Input id="industry" :disabled="editDisabled" v-model="industry" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" /> -->
            <DropdownMenu>
          <DropdownMenuTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
            <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
            <span>{{ selectedIndustry || 'Select one' }}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
            <ScrollArea class="h-80 w-full p-1">
          <ul class="menu">
            <DropdownMenuItem v-for="Industry in Industries" :key="Industry" @click="selectedIndustry = Industry">
              {{ Industry }}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="selectedIndustry = ''" class="hover:bg-orange-200 dark:hover:bg-orange-700">
              <XCircle class="mr-2 text-orange-500 dark:text-orange-300" />N/A
            </DropdownMenuItem>
          </ul>
        </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
          </div>


          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="businessStage">Business Stage</label>

        <DropdownMenu>
          <DropdownMenuTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
            <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
            <span>{{ selectedBusinessStage || 'Select one' }}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
            <ScrollArea class="h-80 w-full p-1">
          <ul class="menu">
            <DropdownMenuItem v-for="businessStage in businessStages" :key="businessStage" @click="selectedBusinessStage = businessStage">
              {{ businessStage }}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="selectedBusinessStage = ''" class="hover:bg-orange-200 dark:hover:bg-orange-700">
              <XCircle class="mr-2 text-orange-500 dark:text-orange-300" />N/A
            </DropdownMenuItem>
          </ul>
        </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

        </div>
      </div>
      <div>
        <div class="flex items-center space-x-2">
          <Mail class="w-6 h-6 text-gray-600 dark:text-gray-400" />
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Contact Info</h3>
        </div>
        <div class="mt-4 space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="email">Email</label>
            <Input id="email" disabled v-model="user.email" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="phone">Phone</label>
            <Input id="phone" :disabled="editDisabled"  v-model="user_phone" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="location">Location</label>
            <Input id="location" :disabled="editDisabled" v-model="user_location" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="website">Website</label>
            <Input id="website" :disabled="editDisabled" v-model="website" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 flex space-x-2">
        <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
          <Linkedin class="w-6 h-6 ml-3 text-blue-500"/>
          <Input type="text" :disabled="editDisabled" placeholder="LinkedIn URL" v-model="user_linkedin" class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
        </div>
        <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
          <Twitter class="w-6 h-6 ml-3 text-black-500"/>
          <Input type="text" :disabled="editDisabled" placeholder="Twitter URL" v-model="user_twitter" class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
        </div>
        <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
          <Youtube class="w-6 h-6 ml-3 text-red-500"/>
          <Input type="text" :disabled="editDisabled" placeholder="YouTube URL" v-model="user_youtube" class="flex-1 border-0 focus:ring-2 focus:ring-pink-500" />
        </div>
        <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
          <Facebook class="w-6 h-6 ml-3 text-blue-600"/>
          <Input type="text" :disabled="editDisabled" placeholder="Facebook URL" v-model="user_facebook" class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
        </div>


      </div>
    <div>
      <div class="flex items-center space-x-2">
        <MapPin class="w-6 h-6 text-gray-600 dark:text-gray-400" />
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">About Me</h3>
      </div>

      <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400 mt-4" for="profession">Main Profession</label>

        <DropdownMenu>
          <DropdownMenuTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
            <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
            <span>{{ selectedProfession || 'Select one' }}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
            <ScrollArea class="h-80 w-full p-1">
          <ul class="menu">
            <DropdownMenuItem v-for="profession in professions" :key="profession" @click="selectedProfession = profession">
              {{ profession }}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="selectedProfession = ''" class="hover:bg-orange-200 dark:hover:bg-orange-700">
              <XCircle class="mr-2 text-orange-500 dark:text-orange-300" />N/A
            </DropdownMenuItem>
          </ul>
        </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400 mt-4" for="user_about">Introduction/Objective</label>

      <Textarea :disabled="editDisabled" v-model="user_about" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" rows="4"></Textarea>
    </div>

  </div>


</template>