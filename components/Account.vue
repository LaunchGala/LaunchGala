<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, Edit2, Mail, MapPin, Check, Linkedin, Twitter, Youtube, Facebook } from 'lucide-vue-next';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  ScrollArea
} from '@/components/ui/scroll-area';
import { ChevronDown, XCircle } from 'lucide-vue-next';
import { Switch } from '@/components/ui/switch';

const supabase = useSupabaseClient();
const loading = ref(true);
const full_name = ref('');
const website = ref('');
const avatar_path = ref('');
const user_phone = ref('');
const job_title = ref('');
const user_company = ref('');
const user_location = ref('');
const user_about = ref('');
const user_linkedin = ref('');
const user_youtube = ref('');
const user_facebook = ref('');
const user_twitter = ref('');
const industries = ref([]);
const business_stage = ref('');
const expert_location = ref('');
const expert_will_travel = ref(false);
const expert_categories = ref([]);
const volunteer_location = ref('');
const volunteer_will_travel = ref(false);
const volunteer_categories = ref([]);
const influencer_location = ref('');
const influencer_will_travel = ref(false);
const influencer_categories = ref([]);
const employment_type = ref([]);
const tiktok = ref('');
const snapchat = ref('');
const instagram = ref('');
const twitch = ref('');
const discord = ref('');
const Industries = [
  'Software Development', 'Artificial Intelligence (AI)', 'Machine Learning (ML)', 'Internet of Things (IoT)', 
  'Augmented Reality (AR)', 'Virtual Reality (VR)', 'Cybersecurity', 'Blockchain', 'Cloud Computing', 
  'Big Data Analytics', 'Quantum Computing', 'Information Technology Services', 'Computer Hardware', 
  'Telecommunications', 'Consumer Electronics', 'Fintech', 'Insurtech', 'Cryptocurrency & NFT', 
  'Wealth Management', 'Crowdfunding', 'Banking', 'Insurance', 'Investment', 'Private Equity', 'Venture Capital', 'Stock Markets', 
  'Digital Health', 'Telemedicine', 'Biotechnology', 'Medical Devices', 'Healthcare IT', 'Personalized Medicine', 
  'Health and Wellness', 'Hospitals', 'Pharmaceuticals', 'Clinical Laboratories', 'Medical Practices', 
  'Renewable Energy', 'Clean Tech', 'Energy Storage', 'Smart Grids', 'Environmental Services', 
  'Oil and Gas', 'Coal', 'Nuclear Energy', 'Educational Technology (Edtech)', 'E-learning', 'Learning Management Systems (LMS)', 
  'Corporate Training', 'Primary Education', 'Secondary Education', 'Higher Education', 
  'Vocational Training', 'Agricultural Technology (Agtech)', 'Sustainable Agriculture', 'Food Technology', 
  'Precision Farming', 'Crop Production', 'Livestock Farming', 'Agricultural Equipment', 'E-commerce', 
  'Direct-to-Consumer (DTC)', 'Subscription Services', 'Health and Wellness Products', 'Personal Fitness Technology', 
  'Retail', 'Consumer Products', 'Apparel and Footwear', 'Gaming', 'Digital Media', 
  'Streaming', 'Content Creation', 'Television Broadcasting', 'Film Production', 'Radio Broadcasting', 
  'Autonomous Vehicles', 'Electric Vehicles (EV)', 'Ride-sharing', 'Logistics Technology', 'Supply Chain Innovation', 
  'Automotive', 'Aerospace', 'Railways', 'Property Technology (Proptech)', 'Real Estate Crowdfunding', 'Smart Home Technology', 
  'Residential Real Estate', 'Commercial Real Estate', 'Property Management', 'Travel Technology', 'Hotel Management', 
  'Online Travel Agencies', 'Event Planning', 'Hospitality', 'Restaurants', 'Travel Services', 
  '3D Printing', 'Robotics', 'Industrial IoT', 'Supply Chain Management', 'Textile Manufacturing', 'Metalworks', 
  'Chemical Processing', 'Legal Technology (Legal Tech)', 'Regulatory Technology (Regtech)', 'Compliance', 
  'Intellectual Property', 'Law', 'Corporate Law', 'Regulatory Affairs', 
  'Cybersecurity Services', 'Physical Security', 'Personal Safety', 'Home Automation', 
  'Lead Generation', 'Private Investigation', 'Human Resources Technology (HR Tech)', 'Talent Acquisition', 
  'Freelance Marketplaces', 'Remote Work', 'Staffing', 'Payroll Services', 
  'Digital Marketing', 'Customer Relationship Management (CRM)', 'Social Media Management', 
  'Branding and Design', 'Advertising', 'Public Relations', 'Market Research', 
  'Non-profit Management', 'Social Impact', 'Community Service', 'Charitable Organizations', 
  'Community Foundations', 'Social Services', 'Space Technology', 'Drone Technology', 'Wearable Technology', 
  'Urban Technology', 'Aviation', 'Urban Development', 'Other'
];
const businessStages = ['Bootstrapped Sole Proprietorship', 'Bootstrapped Small to Medium Enterprise (SME)', 'Angel-funded Startup', 'Seed-Stage Startup', 'Series A Startup (VC-funded)', 'Series B Startup (VC-funded)', 'Series C Startup (VC-funded)', 'Growth-Stage Startup (VC-funded)', 'Late-Stage Startup (VC-funded)', 'VC-funded Small to Medium Enterprise (SME)', 'Private Equity-backed SME', 'Private Equity-backed Large Enterprise', 'Corporate (Privately Held)', 'Corporate (Publicly Traded)', 'Conglomerate (Private Equity-backed)', 'Conglomerate (Publicly Traded)', 'Public Company', 'Non-Profit Organization', 'Research Institution', 'Government Organization', 'Other']

const professions = 
[
    'Software Engineer', 'Investor', 'Startup Founder', 'Academic', 
    'Consultant', 'Entrepreneur', 'Marketing Manager', 'Sales Executive', 
    'Product Manager', 'Project Manager', 'Financial Analyst', 'Data Scientist', 
    'Business Analyst', 'Human Resources Manager', 'Operations Manager', 
    'Accountant', 'Attorney', 'Doctor', 'Nurse', 'Pharmacist', 'Student',
    'Research Scientist', 'Architect', 'Civil Engineer', 'Mechanical Engineer', 
    'Electrical Engineer', 'Graphic Designer', 'UX/UI Designer', 'Web Developer', 
    'Mobile App Developer', 'Network Administrator', 'IT Support Specialist', 
    'Cybersecurity Specialist', 'Public Relations Specialist', 'Journalist', 
    'Content Writer', 'Copywriter', 'Editor', 'Publisher', 'Photographer', 
    'Videographer', 'Film Director', 'Actor', 'Musician', 'Artist', 'Model',
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
    'Urban Planner', 'Museum Curator', 'Librarian', 
    'Historian', 'Anthropologist', 'Archaeologist', 'Philosopher', 
    'Theologist', 'Clergy Member', 'Astrologer', 'Yoga Instructor', 
    'Life Coach', 'Career Coach', 'Financial Coach', 'Real Estate Developer', 
    'Banker', 'Chief Executive Officer (CEO)', 'Chief Financial Officer (CFO)', 
    'Chief Operating Officer (COO)', 'Chief Technology Officer (CTO)', 
    'Chief Marketing Officer (CMO)', 'Chief Human Resources Officer (CHRO)', 
    'Chief Information Officer (CIO)', 'Chief Compliance Officer (CCO)','Other'
]
const Expert_categories = ['Speaker', 'Mentor', 'Advisor', 'Panelist']
const Volunteer_categories = ['Setup', 'Clean Up', 'Tech Services', 'Security']
const Influencer_categories = ['Brand Ambassador', 'Speaker', 'Investor']
const Employment_type = ['Cofounder', 'Developer', 'Marketing', 'DevOps']

const user = useSupabaseUser();
const editDisabled = ref(true);

loading.value = false;

async function updateProfile() {
  try {
    loading.value = true;

    // Step 1: Upsert the main profile information into the `profiles` table
    const profileUpdates = {
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
      industries: industries.value,
      business_stage: business_stage.value,
    };

    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .upsert(profileUpdates, {
        returning: 'representation', // Return the inserted/updated row
      });

    if (profileError) throw profileError;

    const profile_id = profileData[0].id; // Extract the `profile_id` for related tables

    // Step 2: Upsert `expert` information
    if (expert_location.value || expert_categories.value.length > 0) {
      const expertUpdates = {
        profile_id,
        location: expert_location.value,
        will_travel: expert_will_travel.value,
        categories: expert_categories.value,
      };
      const { error: expertError } = await supabase
        .from('expert')
        .upsert(expertUpdates, {
          returning: 'minimal',
        });
      if (expertError) throw expertError;
    }

    // Step 3: Upsert `volunteer` information
    if (volunteer_location.value || volunteer_categories.value.length > 0) {
      const volunteerUpdates = {
        profile_id,
        location: volunteer_location.value,
        will_travel: volunteer_will_travel.value,
        categories: volunteer_categories.value,
      };
      const { error: volunteerError } = await supabase
        .from('volunteer')
        .upsert(volunteerUpdates, {
          returning: 'minimal',
        });
      if (volunteerError) throw volunteerError;
    }

    // Step 4: Upsert `influencer` information
    if (influencer_location.value || influencer_categories.value.length > 0) {
      const influencerUpdates = {
        profile_id,
        location: influencer_location.value,
        will_travel: influencer_will_travel.value,
        categories: influencer_categories.value,
        tiktok: tiktok.value,
        instagram: instagram.value,
        snapchat: snapchat.value,
        twitch: twitch.value,
        discord: discord.value,
      };
      const { error: influencerError } = await supabase
        .from('influencer')
        .upsert(influencerUpdates, {
          returning: 'minimal',
        });
      if (influencerError) throw influencerError;
    }

    // Step 5: Upsert `talent` information
    if (employment_type.value.length > 0) {
      const talentUpdates = {
        profile_id,
        employment_type: employment_type.value,
      };
      const { error: talentError } = await supabase
        .from('talent')
        .upsert(talentUpdates, {
          returning: 'minimal',
        });
      if (talentError) throw talentError;
    }

  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
    editDisabled.value = true;
  }
}
watch(expert_will_travel, () =>{
  console.log(expert_will_travel)
})

function toggleEditDisabled() {
  editDisabled.value = !editDisabled.value;
}
function setExpertWillTravel(toggleState: boolean) {
  expert_will_travel.value = toggleState
}
function setVolunteerWillTravel(toggleState: boolean) {
  volunteer_will_travel.value = toggleState
}
function setInfluencerWillTravel(toggleState: boolean) {
  influencer_will_travel.value = toggleState
}
</script>

<template>
  <div class="mx-auto max-w-4xl py-8 px-6 bg-white dark:bg-black rounded-lg shadow-md space-y-6">
    <div class="border-b dark:border-gray-700 pb-4">
      <div class="flex items-center space-x-4">
        <div class="flex-grow">
          <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ full_name }}</h1>
        </div>
        <Button v-if="editDisabled" @click="toggleEditDisabled" variant="secondary" class="flex items-center gap-2 text-white bg-orange-500  hover:bg-orange-400 focus:ring-orange-400">
          <Edit2 class="w-5 h-5" /> Edit Profile
        </Button>
        <Button v-else @click="updateProfile" variant="secondary" class="flex items-center gap-2  text-white bg-orange-500  hover:bg-orange-400 focus:ring-orange-400">
          <Edit2 class="w-5 h-5" /> Update Profile
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
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="company">Company (Student: College)</label>
            <Input id="company" :disabled="editDisabled" v-model="user_company" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="industry">Industry</label>
            <Popover>
              <PopoverTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                <span>{{ industries.length ? industries.join(', ') : 'Select one' }}</span>
              </PopoverTrigger>
              <PopoverContent class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
                <ScrollArea class="h-80 w-full p-1">
                  <ul class="menu">
                    <li v-for="industry in Industries" :key="industry" @click="industries.push(industry)">
                      <Checkbox
                        :checked="isVenueTypeSelected(industry)"
                        @click="toggleVenueTypeSelection(industry)">
                      </Checkbox>
                      <span>{{ industry }}</span>
                    </li>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem @click="industries = []" class="hover:bg-orange-200 dark:hover:bg-orange-700">
                      <XCircle class="mr-2 text-orange-500 dark:text-orange-300" /> N/A
                    </DropdownMenuItem>
                  </ul>
                </ScrollArea>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="businessStage">Stage</label>
            <DropdownMenu>
              <DropdownMenuTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                <span>{{ business_stage || 'Select one' }}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
                <ScrollArea class="h-80 w-full p-1">
                  <ul class="menu">
                    <DropdownMenuItem v-for="stage in businessStages" :key="stage" @click="business_stage = stage">
                      {{ stage }}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem @click="business_stage = ''" class="hover:bg-orange-200 dark:hover:bg-orange-700">
                      <XCircle class="mr-2 text-orange-500 dark:text-orange-300" /> N/A
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
            <Input id="phone" :disabled="editDisabled" v-model="user_phone" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
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
        <Linkedin class="w-6 h-6 ml-3 text-blue-500" />
        <Input type="text" :disabled="editDisabled" placeholder="LinkedIn URL" v-model="user_linkedin" class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
      </div>
      <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
        <Twitter class="w-6 h-6 ml-3 text-black-500" />
        <Input type="text" :disabled="editDisabled" placeholder="Twitter URL" v-model="user_twitter" class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
      </div>
      <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
        <Youtube class="w-6 h-6 ml-3 text-red-500" />
        <Input type="text" :disabled="editDisabled" placeholder="YouTube URL" v-model="user_youtube" class="flex-1 border-0 focus:ring-2 focus:ring-pink-500" />
      </div>
      <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
        <Facebook class="w-6 h-6 ml-3 text-blue-600" />
        <Input type="text" :disabled="editDisabled" placeholder="Facebook URL" v-model="user_facebook" class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
      </div>
    </div>
    <div>
      <div class="flex items-center space-x-2">
        <MapPin class="w-6 h-6 text-gray-600 dark:text-gray-400" />
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">About Me</h3>
      </div>
      <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400 mt-4" for="user_about">Introduction/Objective</label>
      <Textarea :disabled="editDisabled" v-model="user_about" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" rows="4"></Textarea>
    </div>
    <!-- Accordion Section -->
    <Accordion type="single" collapsible class="space-y-2">
      <AccordionItem value="expert">
        <AccordionTrigger class="flex items-center justify-between">
          <span class="font-medium">Become an Expert</span>
        </AccordionTrigger>
        <AccordionContent>
          <div class="mt-4 space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="expertLocation">Location</label>
              <Input id="expertLocation" :disabled="editDisabled" v-model="expert_location" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
            </div>
            <div class="flex items-center justify-between p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <span class="text-lg font-semibold text-gray-900 dark:text-white">Willing to Travel</span>
              <Switch :default-checked="expert_will_travel" @update:checked="setExpertWillTravel" id="displayPrice" />

            </div>
            <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="industry">Expert Type</label>
            <DropdownMenu>
              <DropdownMenuTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                <span>{{ expert_categories.length ? expert_categories.join(', ') : 'Select one' }}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
                <ScrollArea class="h-80 w-full p-1">
                  <ul class="menu">
                    <DropdownMenuItem v-for="expert_category in Expert_categories" :key="expert_category" @click="expert_categories.push(expert_category)">
                      {{ expert_category }}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem @click="expert_categories = []" class="hover:bg-orange-200 dark:hover:bg-orange-700">
                      <XCircle class="mr-2 text-orange-500 dark:text-orange-300" /> N/A
                    </DropdownMenuItem>
                  </ul>
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
            <Button variant="secondary" class="text-white bg-orange-500 hover:bg-orange-400 focus:ring-orange-400">Preview Expert Listing</Button>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="volunteer">
        <AccordionTrigger class="flex items-center justify-between">
          <span class="font-medium">Become a Volunteer</span>
        </AccordionTrigger>
        <AccordionContent>
          <div class="mt-4 space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="volunteerLocation">Location</label>
              <Input id="volunteerLocation" :disabled="editDisabled" v-model="volunteer_location" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="volunteerWillTravel">Willing to Travel</label>
              <Input id="volunteerWillTravel" :disabled="editDisabled" v-model="volunteer_will_travel" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
            </div>
            <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="volunteer">Volunteer Type</label>
            <DropdownMenu>
              <DropdownMenuTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                <span>{{ volunteer_categories.length ? volunteer_categories.join(', ') : 'Select one' }}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
                <ScrollArea class="h-80 w-full p-1">
                  <ul class="menu">
                    <DropdownMenuItem v-for="volunteer_category in Volunteer_categories" :key="volunteer_category" @click="volunteer_categories.push(volunteer_category)">
                      {{ volunteer_category }}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem @click="volunteer_categories = []" class="hover:bg-orange-200 dark:hover:bg-orange-700">
                      <XCircle class="mr-2 text-orange-500 dark:text-orange-300" /> N/A
                    </DropdownMenuItem>
                  </ul>
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
            <Button variant="secondary" class="text-white bg-orange-500 hover:bg-orange-400 focus:ring-orange-400">Preview Volunteer Listing</Button>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="influencer">
        <AccordionTrigger class="flex items-center justify-between">
          <span class="font-medium">Become an Influencer</span>
        </AccordionTrigger>
        <AccordionContent>
          <div class="mt-4 space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="influencerLocation">Location</label>
              <Input id="influencerLocation" :disabled="editDisabled" v-model="influencer_location" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="influencerWillTravel">Willing to Travel</label>
              <Input id="influencerWillTravel" :disabled="editDisabled" v-model="influencer_will_travel" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
            </div>
            <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="influencer">Influencer Type</label>
            <DropdownMenu>
              <DropdownMenuTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                <span>{{ influencer_categories.length ? influencer_categories.join(', ') : 'Select one' }}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
                <ScrollArea class="h-80 w-full p-1">
                  <ul class="menu">
                    <DropdownMenuItem v-for="influencer_category in Influencer_categories" :key="influencer_category" @click="influencer_categories.push(influencer_category)">
                      {{ influencer_category }}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem @click="influencer_categories = []" class="hover:bg-orange-200 dark:hover:bg-orange-700">
                      <XCircle class="mr-2 text-orange-500 dark:text-orange-300" /> N/A
                    </DropdownMenuItem>
                  </ul>
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
            <Button variant="secondary" class="text-white bg-orange-500 hover:bg-orange-400 focus:ring-orange-400">Preview Influencer Listing</Button>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="talent">
        <AccordionTrigger class="flex items-center justify-between">
          <span class="font-medium">Talent</span>
        </AccordionTrigger>
        <AccordionContent>
          <div class="mt-4 space-y-4">
            <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="talent">Employment Type</label>
            <DropdownMenu>
              <DropdownMenuTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                <span>{{ employment_type.length ? employment_type.join(', ') : 'Select one' }}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
                <ScrollArea class="h-80 w-full p-1">
                  <ul class="menu">
                    <DropdownMenuItem v-for="emp_type in Employment_type" :key="emp_type" @click="employment_type.push(emp_type)">
                      {{ emp_type }}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem @click="employment_type = []" class="hover:bg-orange-200 dark:hover:bg-orange-700">
                      <XCircle class="mr-2 text-orange-500 dark:text-orange-300" /> N/A
                    </DropdownMenuItem>
                  </ul>
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
            <Button variant="secondary" class="text-white bg-orange-500 hover:bg-orange-400 focus:ring-orange-400">Preview Talent Listing</Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
