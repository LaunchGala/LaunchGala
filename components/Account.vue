<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, Edit2, Mail, MapPin, Check, Linkedin, Twitter, Youtube, Facebook, PlusCircle, TwitchIcon, GhostIcon, InstagramIcon, Users } from 'lucide-vue-next';
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
import { ref, unref } from 'vue';
import TableDropdownSingle from './TableDropdownSingle.vue';
import { DiscordLogoIcon } from '@radix-icons/vue';
import { CIcon } from '@coreui/icons-vue';
import { cibTiktok, cibSnapchat } from '@coreui/icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const selectedCompany = ref({})
const newPosition = ref({
  job_title: '',
  company: selectedCompany
})

const userProfile = ref({
  full_name: '',
  email: '',
  website: '',
  avatar_path: '',
  banner_path: '',
  phone: '',
  job_title: '',
  company: '',
  location: '',
  about: '',
  linkedin: '',
  youtube: '',
  facebook: '',
  twitter: '',
  tiktok: '',
  snapchat: '',
  instagram: '',
  twitch: '',
  discord: '',
  industries: [],
  is_expert: false,
  is_influencer: false,
  is_volunteer: false,
  is_talent: false,
  expert: {
    headline: '',
    will_travel: false,
    categories: [],
  },
  volunteer: {
    headline: '',
    will_travel: false,
    categories: [],
  },
  influencer: {
    headline: '',
    will_travel: false,
    categories: [],
  },
  talent: {
    headline: '',
    employment_type: [],
  },
  positions: [],
  companies: [],
  vendors: []
});

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

const cities = ['San Francisco', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Austin']

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
    'Chief Information Officer (CIO)', 'Chief Compliance Officer (CCO)', 'Other'
  ]
const Expert_categories = ['Speaker', 'Mentor', 'Advisor', 'Panelist']
const Volunteer_categories = [
  "Event Planning and Scheduling",
  "On-Site Event Coordination",
  "Speaker & Participant Coordination",
  "Vendor Coordination",
  "Accounting and Bookkeeping",
  "Event Wrap-Up and Debriefing",
  "Audio/Visual Equipment Operation",
  "IT Support and Troubleshooting",
  "Live Streaming and Webinar Tech",
  "Lighting and Sound Engineering",
  "Software & Application Assistance",
  "Photography and Videography",
  "Welcome & Information Desk",
  "Mixologist & Barista",
  "Culinary skills",
  "Lounge and VIP Area Management",
  "Special Requests and Concierge Services",
  "Coat Check and Cloakroom Management",
  "Venue Layout and Design",
  "Staging and Decoration",
  "Equipment and Furniture Setup",
  "Transport and Delivery Coordination",
  "Post-Event Clean-Up and Teardown",
  "Entrance and Exit Supervision",
  "Bag and Luggage Checks",
  "Emergency Evacuation Support",
  "Crowd Control and Line Management",
  "First Aid and Basic Health Care",
  "Medical Emergency Response",
  "Wellness and Relaxation services",
  "Hygiene and Sanitation services",
  "Social Media Coordination",
  "Content Creation and Blogging",
  "Public Relations and Outreach",
  "Interview and Testimonial Gathering",
  "Simultaneous Interpretation",
  "Sign Language Interpretation",
  "Document and Material Translation",
  "Multilingual Assistance",
  "Stage Performers and Artists",
  "Composers & DJs",
  "Audience Engagement and Interaction",
  "Workshop and Activity Leaders",
  "Workshop Assistants",
  "Guest Speaker Support",
  "Training Session Helpers",
  "Educational Material Distribution",
  "Disabled Attendees Assistance",
  "Accessibility Services",
  "Special Equipment Handling",
  "General Customer Service",
  "Lost and Found Services",
  "VIP and Special Guests Services",
  "Transportation and Parking services",
  "Social Media marketing",
  "Promotional Material Distribution",
  "Brand Ambassadors and Advocates",
  "Survey and Feedback Collection",
  "Event Photography and Sharing",
  "Donation Collection and Management",
  "Sponsor Liaison and Support",
  "Fundraising Event Assistants",
  "Grant Application Assistance",
  "Contract Review and Management",
  "Risk Management and Compliance",
  "Regulatory and Standards Monitoring",
  "Legal Assistance and Advice",
];
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
      full_name: userProfile.value.full_name,
      email: userProfile.value.email,
      website: userProfile.value.website,
      avatar_url: userProfile.value.avatar_path,
      banner_url: userProfile.value.banner_path,
      phone: userProfile.value.phone,
      job_title: userProfile.value.job_title,
      company: userProfile.value.company,
      location: userProfile.value.location,
      about: userProfile.value.about,
      linkedin: userProfile.value.linkedin,
      youtube: userProfile.value.youtube,
      facebook: userProfile.value.facebook,
      twitter: userProfile.value.twitter,
      tiktok: userProfile.value.tiktok,
      instagram: userProfile.value.instagram,
      snapchat: userProfile.value.snapchat,
      twitch: userProfile.value.twitch,
      discord: userProfile.value.discord,
      industries: userProfile.value.industries,
      is_expert: userProfile.value.is_expert,
      is_influencer: userProfile.value.is_influencer,
      is_volunteer: userProfile.value.is_volunteer,
      is_talent: userProfile.value.is_talent,
    };

    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .upsert(profileUpdates, {
        returning: 'representation', // Return the inserted/updated row
      });

    if (profileError) throw profileError;

    const profile_id = user.value.id; // Extract the `profile_id` for related tables

    // Step 2: Upsert `expert` information
    if (userProfile.value.expert.categories.length > 0) {
      const expertUpdates = {
        profile_id,
        headline: userProfile.value.expert.headline,
        will_travel: userProfile.value.expert.will_travel,
        categories: userProfile.value.expert.categories,
      };
      const { error: expertError } = await supabase
        .from('Experts')
        .upsert(expertUpdates, {
          returning: 'minimal',
        });
      if (expertError) throw expertError;
    }

    // Step 3: Upsert `volunteer` information
    if (userProfile.value.volunteer.categories.length > 0) {
      const volunteerUpdates = {
        profile_id,
        headline: userProfile.value.volunteer.headline,
        will_travel: userProfile.value.volunteer.will_travel,
        categories: userProfile.value.volunteer.categories,
      };
      const { error: volunteerError } = await supabase
        .from('Volunteers')
        .upsert(volunteerUpdates, {
          returning: 'minimal',
        });
      if (volunteerError) throw volunteerError;
    }

    // Step 4: Upsert `influencer` information
    if (userProfile.value.influencer.categories.length > 0) {
      const influencerUpdates = {
        profile_id,
        headline: userProfile.value.influencer.headline,
        will_travel: userProfile.value.influencer.will_travel,
        categories: userProfile.value.influencer.categories,
      };
      const { error: influencerError } = await supabase
        .from('Influencers')
        .upsert(influencerUpdates, {
          returning: 'minimal',
        });
      if (influencerError) throw influencerError;
    }

    // Step 5: Upsert `talent` information
    if (userProfile.value.talent.employment_type.length > 0) {
      const talentUpdates = {
        profile_id,
        headline: userProfile.value.talent.headline,
        employment_type: userProfile.value.talent.employment_type,
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

function toggleEditDisabled() {
  editDisabled.value = !editDisabled.value;
}
function setExpertWillTravel(toggleState: boolean) {
  userProfile.value.expert.will_travel = toggleState
}
function setIsExpert(toggleState: boolean) {
  userProfile.value.is_expert = toggleState
}
function setVolunteerWillTravel(toggleState: boolean) {
  userProfile.value.volunteer.will_travel = toggleState
}
function setIsVolunteer(toggleState: boolean) {
  userProfile.value.is_volunteer = toggleState
}
function setInfluencerWillTravel(toggleState: boolean) {
  userProfile.value.influencer.will_travel = toggleState
}
function setIsInfluencer(toggleState: boolean) {
  userProfile.value.is_influencer = toggleState
}
function setIsTalen(toggleState: boolean) {
  userProfile.value.is_talent = toggleState
}

// Function to toggle selection of a venue type
const toggleIndustrySelection = (val) => {
  const index = userProfile.value.industries.indexOf(val);
  if (index === -1) {
    // Add to selected items
    userProfile.value.industries.push(val);
  } else {
    // Remove from selected items
    userProfile.value.industries.splice(index, 1);
  }
};
// Function to toggle selection of a venue type
const toggleExpertCategorySelection = (expertType) => {
  const index = userProfile.value.expert.categories.indexOf(expertType);
  if (index === -1) {
    // Add to selected items
    userProfile.value.expert.categories.push(expertType);
  } else {
    // Remove from selected items
    userProfile.value.expert.categories.splice(index, 1);
  }
};
// Function to toggle selection of a venue type
const toggleVolunteerCategorySelection = (val) => {
  const index = userProfile.value.volunteer.categories.indexOf(val);
  if (index === -1) {
    // Add to selected items
    userProfile.value.volunteer.categories.push(val);
  } else {
    // Remove from selected items
    userProfile.value.volunteer.categories.splice(index, 1);
  }
};
// Function to toggle selection of a venue type
const toggleInfluencerCategorySelection = (val) => {
  const index = userProfile.value.influencer.categories.indexOf(val);
  if (index === -1) {
    // Add to selected items
    userProfile.value.influencer.categories.push(val);
  } else {
    // Remove from selected items
    userProfile.value.influencer.categories.splice(index, 1);
  }
};
// Function to toggle selection of a venue type
const toggleEmploymentTypeSelection = (val) => {
  const index = userProfile.value.talent.employment_type.indexOf(val);
  if (index === -1) {
    // Add to selected items
    userProfile.value.talent.employment_type.push(val);
  } else {
    // Remove from selected items
    userProfile.value.talent.employment_type.splice(index, 1);
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
        Talent(*),
        positions:profile_company(
          job_title,
          company_name,
          company:Companies(
            name
          )
        ),
        companies:Companies!Companies_created_by_fkey(*),
        vendors:Vendors!Vendors_created_by_fkey(*)
      `)
      .eq('id', user.value?.id);

    if (error) {
      throw error;
    }
    if (data && data.length > 0) {
      const profile = data[0];
      // Copy profile data to userProfile object
      userProfile.value.full_name = profile.full_name || '';
      userProfile.value.email = profile.email || user.value.email;
      userProfile.value.website = profile.website || '';
      userProfile.value.avatar_path = profile.avatar_url || '';
      userProfile.value.banner_path = profile.banner_url || '';
      userProfile.value.phone = profile.phone || '';
      userProfile.value.job_title = profile.job_title || '';
      userProfile.value.company = profile.company || '';
      userProfile.value.location = profile.location || '';
      userProfile.value.about = profile.about || '';
      userProfile.value.linkedin = profile.linkedin || '';
      userProfile.value.youtube = profile.youtube || '';
      userProfile.value.facebook = profile.facebook || '';
      userProfile.value.twitter = profile.twitter || '';
      userProfile.value.industries = profile.industries || [];
      userProfile.value.positions = profile.positions || [];
      userProfile.value.companies = profile.companies || [];
      userProfile.value.vendors = profile.vendors || [];
      userProfile.value.is_expert = profile.is_expert || false;
      userProfile.value.is_influencer = profile.is_influencer || false;
      userProfile.value.is_volunteer = profile.is_volunteer || false;
      userProfile.value.is_talent = profile.is_talent || false;

      // Copy expert data if not null
      if (profile.Experts) {
        userProfile.value.expert.will_travel = profile.Experts.will_travel || false;
        userProfile.value.expert.headline = profile.Experts.headline || '';
        userProfile.value.expert.categories = profile.Experts.categories || [];
      }

      // Copy volunteer data if not null
      if (profile.Volunteers) {
        userProfile.value.volunteer.headline = profile.Volunteers.headline || '';
        userProfile.value.volunteer.will_travel = profile.Volunteers.will_travel || false;
        userProfile.value.volunteer.categories = profile.Volunteers.categories || [];
      }

      // Copy influencer data if not null
      if (profile.Influencers) {
        userProfile.value.influencer.headline = profile.Influencers.headline || '';
        userProfile.value.influencer.will_travel = profile.Influencers.will_travel || false;
        userProfile.value.influencer.categories = profile.Influencers.categories || [];
        userProfile.value.influencer.tiktok = profile.Influencers.tiktok || '';
        userProfile.value.influencer.snapchat = profile.Influencers.snapchat || '';
        userProfile.value.influencer.instagram = profile.Influencers.instagram || '';
        userProfile.value.influencer.twitch = profile.Influencers.twitch || '';
        userProfile.value.influencer.discord = profile.Influencers.discord || '';
      }

      // Copy employment type from Talent if not null
      if (profile.Talent) {
        userProfile.value.talent.headline = profile.Talent.headline || '';
        userProfile.value.talent.employment_type = profile.Talent.employment_type || [];
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
async function addNewPosition() {
  loading.value = true;
  console.log(newPosition.value)
  // Prepare data for insertion
  const positionsPayload = {
    profile_id: user.value.id, // Profile ID
    company_id: newPosition.value.company?.id, // Company ID
    job_title: newPosition.value.job_title, // Job title
    is_owner: newPosition.value.company?.createdBy === user.value.id, // Check ownership
    company_name: newPosition.value.company?.name
  };
  console.log(positionsPayload)

  try {
    // Upsert positions into profile_company table
    const { data, error } = await supabase
      .from('profile_company')
      .insert(positionsPayload); // Specify the conflict keys

    if (error) {
      throw error;
    } else {
      console.log('Positions upserted successfully:', data);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }

  selectedCompany.value = {}
  newPosition.value = {
    job_title: '',
    company: selectedCompany
  }
  await getProfileWithDetails()
}
function removePosition(ind) {
  userProfile.value.positions.splice(ind, 1)
}

const formatArray = (arr, length) => arr.length > 3 ? `${arr.slice(0, length).join(", ")}...` : arr.join(", ");

onMounted(() => {
  getProfileWithDetails()
});

async function refreshCompanies() {

  loading.value = true;
  try {
    const { data, error } = await supabase
      .from('Companies')
      .select('*')
      .eq('created_by', user.value?.id);
    if (error) {
      throw error;
    }
    userProfile.value.companies = data;
    loading.value = false;
  } catch (err) {
    console.error('Error fetching companies:', err);
    loading.value = false;
    return null;
  }
}
</script>

<template>
  <div class="bg-orange-100 rounded-lg  pt-16 pb-16">
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner">Loading...</div>
    </div>
    <div v-else>
      <div class="mx-auto max-w-4xl py-8 px-6 bg-white dark:bg-black rounded-lg shadow-md space-y-6">
        <div class="border-b dark:border-gray-700 pb-4">
          <div class="justify-items-end mb-2">
            <Button v-if="editDisabled" @click="toggleEditDisabled" variant="secondary"
              class="flex items-center gap-2 text-white bg-orange-500  hover:bg-orange-400 focus:ring-orange-400">
              <Edit2 class="w-5 h-5" /> Edit Profile
            </Button>
            <Button v-else @click="updateProfile" variant="secondary"
              class="flex items-center gap-2  text-white bg-orange-500  hover:bg-orange-400 focus:ring-orange-400">
              <Edit2 class="w-5 h-5" /> Update Profile
            </Button>
          </div>
          <div class="flex items-center space-x-4">
            <div class="flex-grow">
              <ProfileAvatar v-model:path="userProfile.avatar_path" v-model:bannerPath="userProfile.banner_path"
                @upload="updateProfile" :hide-upload="editDisabled" />
              <h1 class="text-2xl font-semibold text-gray-900 mt-3 dark:text-white">{{ userProfile.full_name }}</h1>
            </div>
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
                <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400"
                  for="industry">Industry</label>
                <Popover>
                  <PopoverTrigger :disabled="editDisabled"
                    class="mb-4 w-full rounded-md text-sm border border-gray-300 dark:border-orange-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
                    <span>{{ userProfile.industries.length ? formatArray(userProfile.industries, 2) : 'Select' }}</span>
                    <ChevronDown class="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </PopoverTrigger>
                  <PopoverContent
                    class="border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg">
                    <div class="p-2">
                      <Input v-model="searchIndustry" placeholder="Search industries..."
                        class="w-full mb-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                    </div>
                    <ScrollArea class="h-80 w-full p-1">
                      <ul class="menu">
                        <li v-for="industry in filteredIndustries" :key="industry" class="flex items-center gap-2">
                          <input type="checkbox" :checked="userProfile.industries.includes(industry)"
                            @click="toggleIndustrySelection(industry)" />
                          <span>{{ industry }}</span>
                        </li>
                      </ul>
                    </ScrollArea>
                  </PopoverContent>
                </Popover>
              </div>
              <div class="w-full">
                <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400"
                  for="positions">Positions</label>
                <div v-for="position, ind in userProfile.positions">
                  <div class="flex">
                    <div class="flex-grow flex items-center flex-row">
                      <component :is="Users" class="h-3 w-3 text-orange-600 ml-3 mr-1" />
                      <span class="text-md font-medium px-1 py-0.5 rounded">{{ position.job_title }}</span>
                      <span class="text-sm font-small"> at</span>
                      <span class="text-md font-medium mr-2 px-1 py-0.5 rounded">{{ position.company_name }}</span>
                    </div>
                    <XCircle v-if="!editDisabled" class="flex-shrink-0" @click="removePosition(ind)"></XCircle>
                  </div>
                </div>
                <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="positions">Add New
                  Position</label>
                <div class="flex space-x-4">
                  <Input v-model="newPosition.job_title" placeholder="Job Title..."
                    class="mt-1 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 max-w-48" />
                  <TableInputSearch v-model:selectedValue="selectedCompany" :table="'Companies'" :column="'name'"
                    :allow-string="true" class="mt-1 align-left">

                  </TableInputSearch>
                </div>
              </div>
              <Button
                :disabled="!newPosition || !newPosition.job_title || !selectedCompany || Object.keys(selectedCompany).length == 0"
                @click="addNewPosition" variant="secondary"
                class="flex items-center gap-2 text-white bg-orange-500  hover:bg-orange-400 focus:ring-orange-400">
                <PlusCircle class="w-5 h-5" /> Add Position
              </Button>
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
                <Input id="email" :disabled="editDisabled" v-model="userProfile.email"
                  class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="phone">Phone</label>
                <Input id="phone" :disabled="editDisabled" v-model="userProfile.phone"
                  class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger :disabled="editDisabled"
                    class="mb-4 w-full rounded-md border border-gray-300 dark:border-orange-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
                    <span>{{ userProfile.location || 'Select your city' }}</span>
                    <ChevronDown class="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    class="rounded-md border border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg py-1">
                    <DropdownMenuItem v-for="city in cities" :key="city" @click="userProfile.location = city">
                      {{ city }}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem @click="userProfile.location = ''"
                      class="hover:bg-orange-200 dark:hover:bg-orange-700">
                      <XCircle class="mr-2 text-orange-500 dark:text-orange-300" />Other
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400"
                  for="website">Website</label>
                <Input id="website" :disabled="editDisabled" v-model="userProfile.website"
                  class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 flex space-x-2">
          <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
            <Linkedin class="w-6 h-6 ml-3 text-blue-500" />
            <Input type="text" :disabled="editDisabled" placeholder="LinkedIn URL" v-model="userProfile.linkedin"
              class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
            <Twitter class="w-6 h-6 ml-3 text-black-500" />
            <Input type="text" :disabled="editDisabled" placeholder="Twitter URL" v-model="userProfile.twitter"
              class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
            <Youtube class="w-6 h-6 ml-3 text-red-500" />
            <Input type="text" :disabled="editDisabled" placeholder="YouTube URL" v-model="userProfile.youtube"
              class="flex-1 border-0 focus:ring-2 focus:ring-pink-500" />
          </div>
          <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
            <Facebook class="w-6 h-6 ml-3 text-blue-600" />
            <Input type="text" :disabled="editDisabled" placeholder="Facebook URL" v-model="userProfile.facebook"
              class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div class="mt-4 flex space-x-2">
          <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
            <CIcon :icon="cibTiktok" class="w-6 h-6 ml-3 text-blue-500" />
            <Input type="text" :disabled="editDisabled" placeholder="TikTok URL" v-model="userProfile.tiktok"
              class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
            <InstagramIcon class="w-6 h-6 ml-3 text-black-500" />
            <Input type="text" :disabled="editDisabled" placeholder="Instagram URL" v-model="userProfile.instagram"
              class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
            <CIcon :icon="cibSnapchat" class="w-6 h-6 ml-3 text-blue-500" />
            <Input type="text" :disabled="editDisabled" placeholder="Snapchat URL" v-model="userProfile.snapchat"
              class="flex-1 border-0 focus:ring-2 focus:ring-pink-500" />
          </div>
          <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
            <TwitchIcon class="w-6 h-6 ml-3 text-blue-600" />
            <Input type="text" :disabled="editDisabled" placeholder="Twitch URL" v-model="userProfile.twitch"
              class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
            <DiscordLogoIcon class="w-6 h-6 ml-3 text-blue-600" />
            <Input type="text" :disabled="editDisabled" placeholder="Discord URL" v-model="userProfile.discord"
              class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div>
          <div class="flex items-center space-x-2">
            <MapPin class="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">About Me</h3>
          </div>
          <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400 mt-4"
            for="about">Introduction/Objective</label>
          <Textarea :disabled="editDisabled" v-model="userProfile.about"
            class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700"
            rows="4"></Textarea>
        </div>
        <!-- Accordion Section -->
        <Accordion type="single" collapsible class="space-y-2">
          <AccordionItem value="expert">
            <AccordionTrigger class="flex items-center justify-between">
              <span
                class="flex p-2 items-center gap-2 text-white bg-orange-500  hover:bg-orange-400 focus:ring-orange-400 border-solid rounded-sm">Become
                an Expert
                <span class="tooltip flex">ⓘ
                  <span class="tooltiptext">The legal name of your company</span>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div class="mt-4 space-y-4">
                <div class="grid grid-cols-2">
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400"
                      for="expertWillTravel">List as Expert</label>
                    <Switch :disabled="editDisabled" :default-checked="userProfile.is_expert"
                      @update:checked="setIsExpert" id="expertWillTravel" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400"
                      for="expertHeadline">Headline</label>
                    <Input id="expertHeadline" :disabled="editDisabled" v-model="userProfile.expert.headline"
                      class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400"
                      for="expertWillTravel">Willing to Travel</label>
                    <Switch :disabled="editDisabled" :default-checked="userProfile.expert.will_travel"
                      @update:checked="setExpertWillTravel" id="expertWillTravel" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400"
                      for="expert_category">Expert Type</label>
                    <Popover>
                      <PopoverTrigger :disabled="editDisabled"
                        class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                        <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                        <span>{{ userProfile.expert.categories.length ? userProfile.expert.categories.join(', ') :
                          'Select' }}</span>
                      </PopoverTrigger>
                      <PopoverContent
                        class="border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg">
                        <div class="p-2">
                          <Input v-model="searchExpertCategory" placeholder="Search expert categories..."
                            class="w-full mb-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                        </div>
                        <ScrollArea class="h-80 w-full p-1">
                          <ul class="menu">
                            <li v-for="expert_category in filteredExpertCategories" :key="expert_category"
                              class="flex items-center gap-2">
                              <Checkbox :checked="userProfile.expert.categories.includes(expert_category)"
                                @click="toggleExpertCategorySelection(expert_category)" />
                              <span>{{ expert_category }}</span>
                            </li>
                          </ul>
                        </ScrollArea>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <PreviewExpertDialog :profile="userProfile"></PreviewExpertDialog>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="volunteer">
            <AccordionTrigger class="flex items-center justify-between">
              <span
                class="flex p-2 items-center gap-2 text-white bg-orange-500  hover:bg-orange-400 focus:ring-orange-400 border-solid rounded-sm ">Become
                a Volunteer
                <span class="tooltip flex">ⓘ
                  <span class="tooltiptext">The legal name of your company</span>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div class="mt-4 space-y-4">
                <div class="grid grid-cols-2">
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="isVolunteer">List
                      as Volunteer</label>
                    <Switch :disabled="editDisabled" :default-checked="userProfile.is_volunteer"
                      @update:checked="setIsVolunteer" id="isVolunteer" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400"
                      for="expertVolunteer">Headline</label>
                    <Input id="expertVolunteer" :disabled="editDisabled" v-model="userProfile.volunteer.headline"
                      class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400"
                      for="volunteerWillTravel">Willing to Travel</label>
                    <Switch :disabled="editDisabled" :default-checked="userProfile.volunteer.will_travel"
                      @update:checked="setVolunteerWillTravel" id="displayPrice" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400"
                      for="volunteer">Volunteer Type</label>
                    <Popover>
                      <PopoverTrigger :disabled="editDisabled"
                        class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                        <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                        <span>{{ userProfile.volunteer.categories.length ? userProfile.volunteer.categories.join(', ') :
                          'Select one' }}</span>
                      </PopoverTrigger>
                      <PopoverContent
                        class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
                        <div class="p-2">
                          <Input v-model="searchVolunteerCategory" placeholder="Search volunteer categories..."
                            class="w-full mb-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                        </div>
                        <ScrollArea class="h-80 w-full p-1">
                          <ul class="menu">
                            <li v-for="volunteer_category in filteredVolunteerCategories" :key="volunteer_category"
                              class="flex items-center gap-2">
                              <input type="checkbox"
                                :checked="userProfile.volunteer.categories.includes(volunteer_category)"
                                @click="toggleVolunteerCategorySelection(volunteer_category)" />
                              {{ volunteer_category }}
                            </li>
                          </ul>
                        </ScrollArea>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <PreviewVolunteerDialog :profile="userProfile"></PreviewVolunteerDialog>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="influencer">
            <AccordionTrigger class="flex items-center justify-between">
              <span
                class="flex p-2 items-center gap-2 text-white bg-orange-500  hover:bg-orange-400 focus:ring-orange-400 border-solid rounded-sm">Become
                an Influencer
                <span class="tooltip flex">ⓘ
                  <span class="tooltiptext">The legal name of your company</span>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div class="mt-4 space-y-4">
                <div class="grid grid-cols-2">
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="isInfluencer">List
                      as Influencer</label>
                    <Switch :disabled="editDisabled" :default-checked="userProfile.is_influencer"
                      @update:checked="setIsInfluencer" id="isInfluencer" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400"
                      for="influencerHeadline">Headline</label>
                    <Input id="influencerHeadline" :disabled="editDisabled" v-model="userProfile.influencer.headline"
                      class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400"
                      for="influencerWillTravel">Willing to Travel</label>
                    <Switch :disabled="editDisabled" :default-checked="userProfile.influencer.will_travel"
                      @update:checked="setInfluencerWillTravel" id="displayPrice" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400"
                      for="influencer">Influencer Type</label>
                    <Popover>
                      <PopoverTrigger :disabled="editDisabled"
                        class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                        <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                        <span>{{ userProfile.influencer.categories.length ? userProfile.influencer.categories.join(', ')
                          : 'Select one' }}</span>
                      </PopoverTrigger>
                      <PopoverContent
                        class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
                        <div class="p-2">
                          <Input v-model="searchInfluencerCategory" placeholder="Search influencer categories..."
                            class="w-full mb-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                        </div>
                        <ScrollArea class="h-80 w-full p-1">
                          <ul class="menu">
                            <li v-for="influencer_category in filteredInfluencerCategories" :key="influencer_category"
                              class="flex items-center gap-2">
                              <input type="checkbox"
                                :checked="userProfile.influencer.categories.includes(influencer_category)"
                                @click="toggleInfluencerCategorySelection(influencer_category)" />
                              {{ influencer_category }}
                            </li>
                          </ul>
                        </ScrollArea>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <PreviewInfluencerDialog :influencerPreview="userProfile"></PreviewInfluencerDialog>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="talent">
            <AccordionTrigger class="flex items-center justify-between">
              <span
                class="flex p-2 items-center gap-2 text-white bg-orange-500  hover:bg-orange-400 focus:ring-orange-400 border-solid rounded-sm">List
                your Talent
                <span class="tooltip flex ">ⓘ
                  <span class="tooltiptext">The legal name of your company</span>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div class="mt-4 space-y-4">
                <div class="grid grid-cols-2">
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="isTalent">List as
                      Talent</label>
                    <Switch :disabled="editDisabled" :default-checked="userProfile.is_talent"
                      @update:checked="setIsTalen" id="isTalent" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400"
                      for="talentHeadline">Headline</label>
                    <Input id="talentHeadline" :disabled="editDisabled" v-model="userProfile.talent.headline"
                      class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="talent">Employment
                      Type</label>
                    <Popover>
                      <PopoverTrigger :disabled="editDisabled"
                        class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                        <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                        <span>{{ userProfile.talent.employment_type.length ?
                          userProfile.talent.employment_type.join(',') : 'Select one' }}</span>
                      </PopoverTrigger>
                      <PopoverContent
                        class=" border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg ">
                        <div class="p-2">
                          <Input v-model="searchEmploymentType" placeholder="Search employment types..."
                            class="w-full mb-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                        </div>
                        <ScrollArea class="h-80 w-full p-1">
                          <ul class="menu">
                            <li v-for="emp_type in filteredEmploymentTypes" :key="emp_type"
                              class="flex items-center gap-2">
                              <input type="checkbox" :checked="userProfile.talent.employment_type.includes(emp_type)"
                                @click="toggleEmploymentTypeSelection(emp_type)" />
                              {{ emp_type }}
                            </li>
                          </ul>
                        </ScrollArea>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <PreviewTalentDialog :profile="userProfile"></PreviewTalentDialog>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="startup">
            <AccordionTrigger class="flex items-center justify-between">
              <span
                class="flex p-2 items-center gap-2 text-white bg-orange-500  hover:bg-orange-400 focus:ring-orange-400 border-solid rounded-sm">List
                your Startup
                <span class="tooltip flex ">ⓘ
                  <span class="tooltiptext">The legal name of your company</span>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div class="mt-4 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage your Startups</CardTitle>
                    <CardDescription>
                      Create and edit companies.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div class="flex flex-wrap items-center justify-start gap-4 mb-6">
                      <CreateCompanyDialog @added="refreshCompanies"></CreateCompanyDialog>

                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead class="text-left">Company Name</TableHead>
                          <TableHead class="text-left">Description</TableHead>
                          <TableHead class="text-left">Website</TableHead>
                        </TableRow>
                      </TableHeader>

                      <TableBody>
                        <!-- Loop through the 'venues' array to create table rows -->
                        <TableRow v-for="(company, index) in userProfile.companies" :key="index">
                          <TableCell>{{ company.name }}</TableCell>
                          <TableCell>{{ company.description }}</TableCell>
                          <TableCell>{{ company.website }}</TableCell>
                          <!-- <TableCell class="text-right">
                              <Button class="flex items-center gap-2" variant="ghost" @click="editEvent(event)">
                                <Copy class="w-4 h-4" />
                                Edit
                              </Button>
                            </TableCell> -->
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="vendor">
            <AccordionTrigger class="flex items-center justify-between">
              <span
                class="flex p-2 items-center gap-2 text-white bg-orange-500  hover:bg-orange-400 focus:ring-orange-400 border-solid rounded-sm">Become
                a Vendor
                <span class="tooltip flex ">ⓘ
                  <span class="tooltiptext">The legal name of your company</span>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div class="mt-4 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage your listings</CardTitle>
                    <CardDescription>
                      Create new listing or duplicate and edit an existing one.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div class="flex flex-wrap items-center justify-start gap-4 mb-6">
                      <NuxtLink :to="{ name: 'VendorRegs', query: { routeBack: 'true'} }">
                        <Button class="flex items-center gap-2 bg-orange-500 hover:bg-orange-300">
                          <PlusCircle class="w-5 h-5" />
                          Create New Listing
                        </Button>
                      </NuxtLink>

                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead class="text-left">
                            Business Name
                          </TableHead>
                          <TableHead class="text-left">
                            Location
                          </TableHead>
                          <TableHead class="text-left">
                            Actions
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow v-for="(vendor, index) in userProfile.vendors" :key="index">
                          <TableCell>
                            {{ vendor.business_name }}
                          </TableCell>
                          <TableCell>
                            {{ vendor.location }}
                          </TableCell>
                          <TableCell class="text-right">
                            <NuxtLink :to="{ name: 'VendorRegs', query: { id: vendor.id, routeBack: 'true'} }">
                              <Button class="flex items-center gap-2" variant="ghost">
                                <Copy class="w-4 h-4" />
                                Edit
                              </Button>
                            </NuxtLink>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
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

.tooltip {
  position: relative;
  display: inline-block;
  cursor: help;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 200px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -100px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
