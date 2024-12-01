<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, Edit2, Mail, MapPin, Check, Linkedin, Twitter, Youtube, Facebook, PlusCircle } from 'lucide-vue-next';
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
import Checkbox from '~/components/ui/checkbox/Checkbox.vue';

const supabase = useSupabaseClient();
const loading = ref(true);
import { ref } from 'vue';

const userProfile = {
  full_name: ref(''),
  website: ref(''),
  avatar_path: ref(''),
  phone: ref(''),
  job_title: ref(''),
  company: ref(''),
  location: ref(''),
  about: ref(''),
  linkedin: ref(''),
  youtube: ref(''),
  facebook: ref(''),
  twitter: ref(''),
  tiktok: ref(''),
  snapchat: ref(''),
  instagram: ref(''),
  twitch: ref(''),
  discord: ref(''),
  industries: ref([]),
  expert: {
    location: ref(''),
    will_travel: ref(false),
    categories: ref([]),
  },
  volunteer: {
    location: ref(''),
    will_travel: ref(false),
    categories: ref([]),
  },
  influencer: {
    location: ref(''),
    will_travel: ref(false),
    categories: ref([]),
  },
  employment_type: ref([])
};

const full_name = ref('');
const website = ref('');
const avatar_path = ref('');
const phone = ref('');
const job_title = ref('');
const company = ref('');
const location = ref('');
const about = ref('');
const linkedin = ref('');
const youtube = ref('');
const facebook = ref('');
const twitter = ref('');
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
const searchIndustry = ref('');
const searchExpertCategory = ref('');
const searchVolunteerCategory = ref('');
const searchInfluencerCategory = ref('');
const searchEmploymentType = ref('');

const filteredIndustries = computed(() => {
  return Industries.filter(x => x.toLowerCase().includes(searchIndustry.value.toLowerCase()));
});
const filteredExpertCategories = computed(() => {
  return Expert_categories.filter(x => x.toLowerCase().includes(searchExpertCategory.value.toLowerCase()));
});
const filteredVolunteerCategories = computed(() => {
  return Volunteer_categories.filter(x => x.toLowerCase().includes(searchVolunteerCategory.value.toLowerCase()));
});
const filteredInfluencerCategories = computed(() => {
  return Influencer_categories.filter(x => x.toLowerCase().includes(searchInfluencerCategory.value.toLowerCase()));
});
const filteredEmploymentTypes = computed(() => {
  return Employment_type.filter(x => x.toLowerCase().includes(searchEmploymentType.value.toLowerCase()));
});
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
      phone: phone.value,
      job_title: job_title.value,
      company: company.value,
      location: location.value,
      about: about.value,
      linkedin: linkedin.value,
      youtube: youtube.value,
      facebook: facebook.value,
      twitter: twitter.value,
      industries: industries.value,
    };

    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .upsert(profileUpdates, {
        returning: 'representation', // Return the inserted/updated row
      });

    if (profileError) throw profileError;

    const profile_id = user.value.id; // Extract the `profile_id` for related tables

    // Step 2: Upsert `expert` information
    if (expert_location.value || expert_categories.value.length > 0) {
      const expertUpdates = {
        profile_id,
        location: expert_location.value,
        will_travel: expert_will_travel.value,
        categories: expert_categories.value,
      };
      const { error: expertError } = await supabase
        .from('Experts')
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
        .from('Volunteers')
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
        .from('Influencers')
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
        .from('Talent')
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

// Function to toggle selection of a venue type
const toggleIndustrySelection = (val) => {
  const index = industries.value.indexOf(val);
  if (index === -1) {
    // Add to selected items
    industries.value.push(val);
  } else {
    // Remove from selected items
    industries.value.splice(index, 1);
  }
  console.log(industries)
};
// Function to toggle selection of a venue type
const toggleExpertCategorySelection = (expertType) => {
  const index = expert_categories.value.indexOf(expertType);
  if (index === -1) {
    // Add to selected items
    expert_categories.value.push(expertType);
  } else {
    // Remove from selected items
    expert_categories.value.splice(index, 1);
  }
};
// Function to toggle selection of a venue type
const toggleVolunteerCategorySelection = (val) => {
  const index = volunteer_categories.value.indexOf(val);
  if (index === -1) {
    // Add to selected items
    volunteer_categories.value.push(val);
  } else {
    // Remove from selected items
    volunteer_categories.value.splice(index, 1);
  }
};
// Function to toggle selection of a venue type
const toggleInfluencerCategorySelection = (val) => {
  const index = influencer_categories.value.indexOf(val);
  if (index === -1) {
    // Add to selected items
    influencer_categories.value.push(val);
  } else {
    // Remove from selected items
    influencer_categories.value.splice(index, 1);
  }
};
// Function to toggle selection of a venue type
const toggleEmploymentTypeSelection = (val) => {
  const index = employment_type.value.indexOf(val);
  if (index === -1) {
    // Add to selected items
    employment_type.value.push(val);
  } else {
    // Remove from selected items
    employment_type.value.splice(index, 1);
  }
};
async function getProfileWithDetails() {

  loading.value = true;
  try {
    // Fetch profile by id along with the related data from other tables
    const { data, error } = await supabase
      .from('profiles')
      .select(`
        *,
        Experts(*),
        Volunteers(*),
        Influencers!Influencer_profile_id_fkey(*),
        Talent(*)
      `)
      .eq('id', user.value?.id);

    if (error) {
      throw error;
    }
    if (data && data.length > 0) {
        const profile = data[0];
        // Copy profile data to userProfile object
        full_name.value = profile.full_name || '';
        website.value = profile.website || '';
        avatar_path.value = profile.avatar_path || '';
        phone.value = profile.phone || '';
        job_title.value = profile.job_title || '';
        company.value = profile.company || '';
        location.value = profile.location || '';
        about.value = profile.about || '';
        linkedin.value = profile.linkedin || '';
        youtube.value = profile.youtube || '';
        facebook.value = profile.facebook || '';
        twitter.value = profile.twitter || '';
        tiktok.value = profile.tiktok || '';
        snapchat.value = profile.snapchat || '';
        instagram.value = profile.instagram || '';
        twitch.value = profile.twitch || '';
        discord.value = profile.discord || '';
        industries.value = profile.industries || [];

        // Copy expert data if not null
        if (profile.Experts) {
          expert_location.value = profile.Experts.location || '';
          expert_will_travel.value = profile.Experts.will_travel || false;
          expert_categories.value = profile.Experts.categories || [];
        }

        // Copy volunteer data if not null
        if (profile.Volunteers) {
          volunteer_location.value = profile.Volunteers.location || '';
          volunteer_will_travel.value = profile.Volunteers.will_travel || false;
          volunteer_categories.value = profile.Volunteers.categories || [];
        }

        // Copy influencer data if not null
        if (profile.Influencers) {
          influencer_location.value = profile.Influencers.location || '';
          influencer_will_travel.value = profile.Influencers.will_travel || false;
          influencer_categories.value = profile.Influencers.categories || [];
        }

        // Copy employment type from Talent if not null
        if (profile.Talent) {
          employment_type.value = profile.Talent.employment_type || [];
        }
      }
      console.log(data)
      loading.value = false;
    return data;
  } catch (err) {
    console.error('Error fetching profile details:', err);
    loading.value = false;
    return null;
  }

}

onMounted(() => {
  getProfileWithDetails()
});
</script>

<template>
<div>
  <div v-if="loading" class="loading-overlay">
    <div class="loading-spinner">Loading...</div>
  </div>
  <div v-else>
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
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="industry">Industry</label>
            <Popover>
              <PopoverTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                <span>{{ industries.length ? industries.join(', ') : 'Select' }}</span>
              </PopoverTrigger>
              <PopoverContent class="border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg">
                <div class="p-2">
                  <Input v-model="searchIndustry" placeholder="Search industries..." class="w-full mb-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                </div>
                <ScrollArea class="h-80 w-full p-1">
                  <ul class="menu">
                    <li v-for="industry in filteredIndustries" :key="industry" class="flex items-center gap-2">
                      <input type="checkbox" :checked="industries.includes(industry)" @click="toggleIndustrySelection(industry)" />
                      <span>{{ industry }}</span>
                    </li>
                  </ul>
                </ScrollArea>
              </PopoverContent>
            </Popover>
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
            <Input id="phone" :disabled="editDisabled" v-model="phone" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="location">Location</label>
            <Input id="location" :disabled="editDisabled" v-model="location" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
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
        <Input type="text" :disabled="editDisabled" placeholder="LinkedIn URL" v-model="linkedin" class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
      </div>
      <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
        <Twitter class="w-6 h-6 ml-3 text-black-500" />
        <Input type="text" :disabled="editDisabled" placeholder="Twitter URL" v-model="twitter" class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
      </div>
      <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
        <Youtube class="w-6 h-6 ml-3 text-red-500" />
        <Input type="text" :disabled="editDisabled" placeholder="YouTube URL" v-model="youtube" class="flex-1 border-0 focus:ring-2 focus:ring-pink-500" />
      </div>
      <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
        <Facebook class="w-6 h-6 ml-3 text-blue-600" />
        <Input type="text" :disabled="editDisabled" placeholder="Facebook URL" v-model="facebook" class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
      </div>
    </div>
    <div>
      <div class="flex items-center space-x-2">
        <MapPin class="w-6 h-6 text-gray-600 dark:text-gray-400" />
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">About Me</h3>
      </div>
      <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400 mt-4" for="about">Introduction/Objective</label>
      <Textarea :disabled="editDisabled" v-model="about" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" rows="4"></Textarea>
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
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="expert_category">Expert Type</label>
            <Popover>
              <PopoverTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                <span>{{ expert_categories.length ? expert_categories.join(', ') : 'Select' }}</span>
              </PopoverTrigger>
              <PopoverContent class="border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg">
                <div class="p-2">
                  <Input v-model="searchExpertCategory" placeholder="Search expert categories..." class="w-full mb-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                </div>
                <ScrollArea class="h-80 w-full p-1">
                  <ul class="menu">
                    <li v-for="expert_category in filteredExpertCategories" :key="expert_category" class="flex items-center gap-2">
                      <Checkbox :checked="expert_categories.includes(expert_category)" @click="toggleExpertCategorySelection(expert_category)" />
                      <span>{{ expert_category }}</span>
                    </li>
                  </ul>
                </ScrollArea>
              </PopoverContent>
            </Popover>
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
              <Switch :default-checked="volunteer_will_travel" @update:checked="setVolunteerWillTravel" id="displayPrice" />
            </div>
            <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="volunteer">Volunteer Type</label>
            <Popover>
              <PopoverTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                <span>{{ volunteer_categories.length ? volunteer_categories.join(', ') : 'Select one' }}</span>
              </PopoverTrigger>
              <PopoverContent class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
                <div class="p-2">
                  <Input v-model="searchVolunteerCategory" placeholder="Search volunteer categories..." class="w-full mb-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                </div>
                <ScrollArea class="h-80 w-full p-1">
                  <ul class="menu">
                    <li v-for="volunteer_category in filteredVolunteerCategories" :key="volunteer_category" class="flex items-center gap-2">
                      <input type="checkbox" :checked="volunteer_categories.includes(volunteer_category)" @click="toggleVolunteerCategorySelection(volunteer_category)" />
                      {{ volunteer_category }}
                    </li>
                  </ul>
                </ScrollArea>
              </PopoverContent>
            </Popover>
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
              <Switch :default-checked="influencer_will_travel" @update:checked="setInfluencerWillTravel" id="displayPrice" /></div>
            <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="influencer">Influencer Type</label>
            <Popover>
              <PopoverTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                <span>{{ influencer_categories.length ? influencer_categories.join(', ') : 'Select one' }}</span>
              </PopoverTrigger>
              <PopoverContent class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
                <div class="p-2">
                  <Input v-model="searchInfluencerCategory" placeholder="Search influencer categories..." class="w-full mb-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                </div>
                <ScrollArea class="h-80 w-full p-1">
                  <ul class="menu">
                    <li v-for="influencer_category in filteredInfluencerCategories" :key="influencer_category" class="flex items-center gap-2">
                      <input type="checkbox" :checked="influencer_categories.includes(influencer_category)" @click="toggleInfluencerCategorySelection(influencer_category)" />
                      {{ influencer_category }}
                    </li>
                  </ul>
                </ScrollArea>
              </PopoverContent>
            </Popover>
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
            <Popover>
              <PopoverTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                <span>{{ employment_type.length ? employment_type.join(', ') : 'Select one' }}</span>
              </PopoverTrigger>
              <PopoverContent class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
                <div class="p-2">
                  <Input v-model="searchEmploymentType" placeholder="Search employment types..." class="w-full mb-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                </div>
                <ScrollArea class="h-80 w-full p-1">
                  <ul class="menu">
                    <li v-for="emp_type in filteredEmploymentTypes" :key="emp_type" class="flex items-center gap-2">
                      <input type="checkbox" :checked="employment_type.includes(emp_type)" @click="toggleEmploymentTypeSelection(emp_type)" />
                      {{ emp_type }}
                    </li>
                  </ul>
                </ScrollArea>
              </PopoverContent>
            </Popover>
          </div>
            <Button variant="secondary" class="text-white bg-orange-500 hover:bg-orange-400 focus:ring-orange-400">Preview Talent Listing</Button>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="positions">
        <AccordionTrigger class="flex items-center justify-between">
          <span class="font-medium">Positions</span>
        </AccordionTrigger>
        <AccordionContent>
          <div class="mt-3 flex space-x-2">
            <div>
              <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="jobTitle">Job Title (Student: Major)</label>
              <Input id="jobTitle" :disabled="editDisabled" v-model="job_title" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="comapany">Company</label>
              <DropdownMenu>
                <DropdownMenuTrigger class=" mb-4 w-full rounded-md border border-gray-300 dark:border-orange-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
                  <span>{{ company || 'Select company' }}</span>
                  <ChevronDown class="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </DropdownMenuTrigger>
                <DropdownMenuContent class="rounded-md border border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg py-1">
                  <DropdownMenuItem v-for="comp in companies" :key="company" @click="company = comp">
                    {{ comp }}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <div class="hover:bg-orange-200 dark:hover:bg-orange-700">
                    <CreateCompanyDialog></CreateCompanyDialog>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
  </div>
  </div>
</template>
<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.loading-spinner {
  color: #fff;
  font-size: 1.5em;
}
</style>
