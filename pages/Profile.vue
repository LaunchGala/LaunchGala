<!-- <script setup lang="ts">
const user = useSupabaseUser()
</script>

<template>
  <div >
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="user" />
    <div v-else>
      <h1 class="title">You need to be logged in to view this page</h1>
      <NuxtLink to="/login">Login</NuxtLink>
    </div>
  </div>
  </div>
</template>
 -->
<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  MapPin, Globe, Linkedin, UserPlus, Github, Twitter,
  Instagram, Facebook, Youtube, Twitch,
  Mail, Dribbble, Edit3, Building2, ChevronDown,
  Briefcase, Users, Star, Camera, Rocket, Phone,
  Eye, EyeOff, User, CheckCircle, Shield, BadgeCheck,
  Clock, XCircle,
  SaveAll,
  PlusCircle,
  Plus
} from 'lucide-vue-next'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  ScrollArea
} from '@/components/ui/scroll-area';
import Button from '~/components/ui/button/Button.vue';
import Input from '~/components/ui/input/Input.vue';
import { cibSnapchat } from '@coreui/icons';
import { DiscordLogoIcon } from '@radix-icons/vue';
import TiktokIcon from '~/components/TiktokIcon.vue';
import CIcon from '@coreui/icons-vue';

const supabase = useSupabaseClient();
const user = useSupabaseUser();
const loading = ref(true);
const editDisabled = ref(true);

const selectedCompany = ref({})
const newPosition = ref({
  job_title: '',
  company: selectedCompany,
  current: false
})
const companyDD = ref(null);

const searchIndustry = ref('');
const searchExpertCategory = ref('');
const searchVolunteerCategory = ref('');
const searchInfluencerCategory = ref('');
const searchEmploymentType = ref('');

const filteredIndustries = computed(() => {
  return Industries.filter(x => x.toLowerCase().includes(searchIndustry.value.toLowerCase()));
});
const filteredExpertCategories = computed((options) => {
  return options.filter(x => x.toLowerCase().includes(searchExpertCategory.value.toLowerCase()));
});
const filteredVolunteerCategories = computed((options) => {
  return options.filter(x => x.toLowerCase().includes(searchVolunteerCategory.value.toLowerCase()));
});
const filteredInfluencerCategories = computed((options) => {
  return options.filter(x => x.toLowerCase().includes(searchInfluencerCategory.value.toLowerCase()));
});
const filteredEmploymentTypes = computed((options) => {
  return options.filter(x => x.toLowerCase().includes(searchEmploymentType.value.toLowerCase()));
});
// Function to toggle selection of a venue type
const toggleIndustrySelection = (val) => {
  const index = profileData.value.industries.indexOf(val);
  if (index === -1) {
    // Add to selected items
    profileData.value.industries.push(val);
  } else {
    // Remove from selected items
    profileData.value.industries.splice(index, 1);
  }
};
// Function to toggle selection of a venue type
const toggleExpertCategorySelection = (expertType) => {
  const index = profileData.value.expert.categories.indexOf(expertType);
  if (index === -1) {
    // Add to selected items
    profileData.value.expert.categories.push(expertType);
  } else {
    // Remove from selected items
    profileData.value.expert.categories.splice(index, 1);
  }
};
// Function to toggle selection of a venue type
const toggleVolunteerCategorySelection = (val) => {
  const index = profileData.value.volunteer.categories.indexOf(val);
  if (index === -1) {
    // Add to selected items
    profileData.value.volunteer.categories.push(val);
  } else {
    // Remove from selected items
    profileData.value.volunteer.categories.splice(index, 1);
  }
};
// Function to toggle selection of a venue type
const toggleInfluencerCategorySelection = (val) => {
  const index = profileData.value.influencer.categories.indexOf(val);
  if (index === -1) {
    // Add to selected items
    profileData.value.influencer.categories.push(val);
  } else {
    // Remove from selected items
    profileData.value.influencer.categories.splice(index, 1);
  }
};
// Function to toggle selection of a venue type
const toggleEmploymentTypeSelection = (val) => {
  const index = profileData.value.talent.employment_type.indexOf(val);
  if (index === -1) {
    // Add to selected items
    profileData.value.talent.employment_type.push(val);
  } else {
    // Remove from selected items
    profileData.value.talent.employment_type.splice(index, 1);
  }
};

const formatArray = (arr, length) => arr.length > 3 ? `${arr.slice(0, length).join(", ")}...` : arr.join(", ");

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
interface ProfileSection {
  id: string
  title: string
  description: string
  icon: any
  isExpanded: boolean
  isVisible: boolean
  fields?: {
    name: string
    type: 'text' | 'toggle' | 'select' | 'textarea' | 'company'
    label: string
    placeholder?: string
    options?: string[]
    value: any
  }[]
}

const isPreviewMode = ref(false)
const showPrivacySettings = ref(false)
const showVerificationModal = ref(false)
const verificationStatus = ref<'none' | 'pending' | 'verified'>('none')
const verificationDocuments = ref<File[]>([])

const verificationStatusConfig = {
  none: {
    icon: Shield,
    text: 'Not Verified',
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-700',
    iconColor: 'text-gray-500',
    description: 'Verify your profile to build trust and credibility'
  },
  pending: {
    icon: Clock,
    text: 'Verification Pending',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-800',
    iconColor: 'text-yellow-600',
    description: 'Your verification request is being reviewed'
  },
  verified: {
    icon: BadgeCheck,
    text: 'Verified Profile',
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
    iconColor: 'text-green-600',
    description: 'Your profile is verified and trusted'
  }
}

const profileData = ref({
  id: 1,
  full_name: 'Rashid Rifai',
  title: 'CEO at Meta Bang LLC',
  location: 'San Francisco, CA',
  avatar_path: '',
  avatarSRC: '',
  bannerSRC: '',
  banner_path: '',
  email: 'rifairashid@gmail.com',
  phone: '+1 (555) 123-4567',
  about: 'Passionate tech entrepreneur and AI enthusiast with a focus on building innovative solutions that bridge the gap between complex technology and user-friendly applications. Leading the development of next-generation AI tools at KnowtifyAI.',
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
  positions: [
    {
      job_title: 'CEO',
      company_name: 'Meta Bang LLC - KnowtifyAI.com',
      current: true
    },
    {
      title: 'Sales Representative',
      company_name: 'Sciprolabs',
      current: false
    }
  ],
  industries: ['Software Development', 'Artificial Intelligence (AI)', 'Machine Learning', 'SaaS'],
  socialMedia: {
    website: 'https://knowtifyAI.com',
    linkedin: 'yfijyfjyfj',
    twitter: 'mmvmnvnm',
    youtube: 'bjbkjbk',
    facebook: 'mhvmjhvm',
    tiktok: '',
    instagram: '',
    snapchat: '',
    twitch: '',
    discord: '',
  },
  privacy: {
    email: true,
    phone: false,
    location: true,
    about: true,
    experience: true,
    industries: true,
    socialMedia: true
  },
  companies: [],
  vendors: [],
  is_expert: false,
  is_influencer: false,
  is_volunteer: false,
  is_talent: false,
})
const sections = ref<ProfileSection[]>([
  {
    id: 'expert',
    title: 'Become an Expert',
    description: 'Share your expertise and connect with event organizers',
    icon: Briefcase,
    isExpanded: false,
    isVisible: true,
    fields: [
      {
        name: 'headline',
        type: 'text',
        label: 'Headline',
        value: computed({
                get: () => profileData.value.expert.headline, // Get value from nested object
                set: (newValue) => profileData.value.expert.headline = newValue, // Update original object
              })
      },
      {
        name: 'category',
        type: 'select',
        label: 'Expert Type',
        options: ['Speaker', 'Mentor', 'Advisor', 'Panelist'],
        value: computed({
                get: () => profileData.value.expert.categories, // Get value from nested object
                set: (newValue) => profileData.value.expert.categories = newValue, // Update original object
              })
      },
      {
        name: 'availability',
        type: 'toggle',
        label: 'Available for Events',
        value: computed({
                get: () => profileData.value.is_expert, // Get value from nested object
                set: (newValue) => profileData.value.is_expert = newValue, // Update original object
              })
      },
      {
        name: 'willTravel',
        type: 'toggle',
        label: 'Willing to Travel',
        value: computed({
                get: () => profileData.value.expert.will_travel, // Get value from nested object
                set: (newValue) => profileData.value.expert.will_travel = newValue, // Update original object
              })
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
        name: 'headline',
        type: 'text',
        label: 'Headline',
        value: computed({
                get: () => profileData.value.volunteer.headline, // Get value from nested object
                set: (newValue) => profileData.value.volunteer.headline = newValue, // Update original object
              })
      },
      {
        name: 'category',
        type: 'select',
        label: 'Volunteer Type',
        options: [
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
        ],
        value: computed({
                get: () => profileData.value.volunteer.categories, // Get value from nested object
                set: (newValue) => profileData.value.volunteer.categories = newValue, // Update original object
              })
      },
      {
        name: 'availability',
        type: 'toggle',
        label: 'Available for Events',
        value: computed({
                get: () => profileData.value.is_volunteer, // Get value from nested object
                set: (newValue) => profileData.value.is_volunteer = newValue, // Update original object
              })
      },
      {
        name: 'willTravel',
        type: 'toggle',
        label: 'Willing to Travel',
        value: computed({
                get: () => profileData.value.expert.will_travel, // Get value from nested object
                set: (newValue) => profileData.value.expert.will_travel = newValue, // Update original object
              })
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
        name: 'headline',
        type: 'text',
        label: 'Headline',
        value: computed({
                get: () => profileData.value.influencer.headline, // Get value from nested object
                set: (newValue) => profileData.value.influencer.headline = newValue, // Update original object
              })
      },
      {
        name: 'influencerType',
        type: 'select',
        label: 'Influencer Type',
        options: ['Brand Ambassador', 'Speaker', 'Investor'],
        value: computed({
                get: () => profileData.value.influencer.categories, // Get value from nested object
                set: (newValue) => profileData.value.influencer.categories = newValue, // Update original object
              })
      },
      {
        name: 'availability',
        type: 'toggle',
        label: 'Available for Events',
        value: computed({
                get: () => profileData.value.is_influencer, // Get value from nested object
                set: (newValue) => profileData.value.is_influencer = newValue, // Update original object
              })
      },
      {
        name: 'willTravel',
        type: 'toggle',
        label: 'Willing to Travel',
        value: computed({
                get: () => profileData.value.influencer.will_travel, // Get value from nested object
                set: (newValue) => profileData.value.influencer.will_travel = newValue, // Update original object
              })
      }
    ]
  },
  {
    id: 'talent',
    title: 'List your Talent',
    description: 'Showcase your skills and get discovered',
    icon: Camera,
    isExpanded: false,
    isVisible: true,
    fields: [
      {
        name: 'headline',
        type: 'text',
        label: 'Headline',
        value: computed({
                get: () => profileData.value.talent.headline, // Get value from nested object
                set: (newValue) => profileData.value.talent.headline = newValue, // Update original object
              })
      },
      {
        name: 'employmentType',
        type: 'select',
        label: 'Employment Type',
        options: ['Cofounder', 'Developer', 'Marketing', 'DevOps'],
        value: computed({
                get: () => profileData.value.talent.employment_type, // Get value from nested object
                set: (newValue) => profileData.value.talent.employment_type = newValue, // Update original object
              })
      },
      {
        name: 'availability',
        type: 'toggle',
        label: 'Seeking Opportunities',
        value: computed({
                get: () => profileData.value.is_talent, // Get value from nested object
                set: (newValue) => profileData.value.is_talent = newValue, // Update original object
              })
      }
    ]
  },
  {
    id: 'startup',
    title: 'List your Startup',
    description: 'Connect with investors and grow your business',
    icon: Rocket,
    isExpanded: false,
    isVisible: true,
    fields: [
      {
        name: 'company',
        type: 'company',
        label: 'Manage Companies',
        value: ''
      }
    ]
  }
])


const socialMedia = {
  website: { icon: Globe, bgColor: 'bg-orange-100', iconColor: 'text-orange-600', hoverBg: 'hover:bg-orange-200', textColor: 'text-orange-800' },
  linkedin: { icon: Linkedin, bgColor: 'bg-blue-100', iconColor: 'text-blue-600', hoverBg: 'hover:bg-blue-200', textColor: 'text-blue-800' },
  //github: { icon: Github, bgColor: 'bg-gray-100', iconColor: 'text-gray-600', hoverBg: 'hover:bg-gray-200', textColor: 'text-gray-800' },
  twitter: { icon: Twitter, bgColor: 'bg-sky-100', iconColor: 'text-sky-600', hoverBg: 'hover:bg-sky-200', textColor: 'text-sky-800' },
  instagram: { icon: Instagram, bgColor: 'bg-pink-100', iconColor: 'text-pink-600', hoverBg: 'hover:bg-pink-200', textColor: 'text-pink-800' },
  facebook: { icon: Facebook, bgColor: 'bg-indigo-100', iconColor: 'text-indigo-600', hoverBg: 'hover:bg-indigo-200', textColor: 'text-indigo-800' },
  youtube: { icon: Youtube, bgColor: 'bg-red-100', iconColor: 'text-red-600', hoverBg: 'hover:bg-red-200', textColor: 'text-red-800' },
  twitch: { icon: Twitch, bgColor: 'bg-purple-100', iconColor: 'text-purple-600', hoverBg: 'hover:bg-purple-200', textColor: 'text-purple-800' },
  snapchat: { icon: cibSnapchat, bgColor: 'bg-yellow-100', iconColor: 'fill-yellow-200', hoverBg: 'hover:bg-yellow-200', textColor: 'text-yellow-800'},
  discord: { icon: DiscordLogoIcon, bgColor: 'bg-gray-100', iconColor: 'text-blue-600', hoverBg: 'hover:bg-gray-200', textColor: 'text-blue-800'},
  tiktok: { icon: TiktokIcon, bgColor: 'bg-gray-200', iconColor: 'text-red-600', hoverBg: 'hover:bg-gray-400', textColor: 'text-red-800'}
  //email: { icon: Mail, bgColor: 'bg-emerald-100', iconColor: 'text-emerald-600', hoverBg: 'hover:bg-emerald-200', textColor: 'text-emerald-800' },
  //dribbble: { icon: Dribbble, bgColor: 'bg-pink-100', iconColor: 'text-pink-600', hoverBg: 'hover:bg-pink-200', textColor: 'text-pink-800' }
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

const togglePrivacy = (field: keyof typeof profileData.value.privacy) => {
  profileData.value.privacy[field] = !profileData.value.privacy[field]
}

const formatUrl = (url: string) => !url?.startsWith('http') ? `https://${url}` : url

const togglePreviewMode = () => {
  isPreviewMode.value = !isPreviewMode.value
}

const hasProfile = computed(() => {
  return profileData.value && Object.keys(profileData.value).length > 0
})

const isVisible = (field: keyof typeof profileData.value.privacy) => {
  return !isPreviewMode.value || profileData.value.privacy[field]
}

const handleVerificationRequest = () => {
  verificationStatus.value = 'pending'
  showVerificationModal.value = false
}

const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files) {
    verificationDocuments.value = Array.from(input.files)
  }
}

const cancelVerification = () => {
  verificationStatus.value = 'none'
  verificationDocuments.value = []
}

const downloadBanner = async (bannerPath) => {
  if (bannerPath == null || bannerPath == '') return;
  if (bannerPath.includes('http')) {
    profileData.value.bannerSRC.value = bannerPath;
  } else {
    try {
      const { data, error } = await supabase.storage.from('images').download(bannerPath)
      if (error) throw error
      profileData.value.bannerSRC = URL.createObjectURL(data)
    } catch (error) {
      console.error('Error downloading image: ', error.message)
    }
  }
}
const downloadAvatar = async (path) => {
  if (path == null || path == '') return;
  if (path.includes('http')) {
    profileData.value.avatarSRC = path;
  } else {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path)
      if (error) throw error
      profileData.value.avatarSRC = URL.createObjectURL(data)
      console.log(data)
    } catch (error) {
      console.error('Error downloading image: ', error.message)
    }
  }
}

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
        id,
        job_title,
        company_name,
        current,
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
      const prof = data[0];
      // Copy profile data to profileData object
      profileData.value.full_name = prof.full_name || '';
      profileData.value.email = prof.email || user.value.email;
      profileData.value.socialMedia.website = prof.website || '';
      profileData.value.avatar_path = prof.avatar_url || '';
      profileData.value.banner_path = prof.banner_url || '';
      profileData.value.phone = prof.phone || '';
      profileData.value.title = prof.title || '';
      profileData.value.location = prof.location || '';
      profileData.value.about = prof.about || '';
      profileData.value.socialMedia.linkedin = prof.linkedin || '';
      profileData.value.socialMedia.youtube = prof.youtube || '';
      profileData.value.socialMedia.facebook = prof.facebook || '';
      profileData.value.socialMedia.twitter = prof.twitter || '';
      profileData.value.socialMedia.tiktok = prof.tiktok || '';
      profileData.value.socialMedia.snapchat = prof.snapchat || '';
      profileData.value.socialMedia.instagram = prof.instagram || '';
      profileData.value.socialMedia.twitch = prof.twitch || '';
      profileData.value.socialMedia.discord = prof.discord || '';
      profileData.value.industries = prof.industries || [];
      profileData.value.positions = prof.positions?.sort((a, b) => (b.current ? 1 : 0) - (a.current ? 1 : 0)) || [];
      profileData.value.companies = prof.companies || [];
      profileData.value.vendors = prof.vendors || [];
      profileData.value.is_expert = prof.is_expert || false;
      profileData.value.is_influencer = prof.is_influencer || false;
      profileData.value.is_volunteer = prof.is_volunteer || false;
      profileData.value.is_talent = prof.is_talent || false;
      profileData.value.privacy.email = prof.show_email || false;
      profileData.value.privacy.phone = prof.show_phone || false;
      profileData.value.privacy.location = prof.show_location || false;
      profileData.value.privacy.about = prof.show_about || false;
      profileData.value.privacy.experience = prof.show_experience || false;
      profileData.value.privacy.industries = prof.show_industries || false;
      profileData.value.privacy.socialMedia = prof.show_social_media || false;

      // Copy expert data if not null
      if (prof.Experts) {
        profileData.value.expert.will_travel = prof.Experts.will_travel || false;
        profileData.value.expert.headline = prof.Experts.headline || '';
        profileData.value.expert.categories = prof.Experts.categories || [];
      }

      // Copy volunteer data if not null
      if (prof.Volunteers) {
        profileData.value.volunteer.headline = prof.Volunteers.headline || '';
        profileData.value.volunteer.will_travel = prof.Volunteers.will_travel || false;
        profileData.value.volunteer.categories = prof.Volunteers.categories || [];
      }

      // Copy influencer data if not null
      if (prof.Influencers) {
        profileData.value.influencer.headline = prof.Influencers.headline || '';
        profileData.value.influencer.will_travel = prof.Influencers.will_travel || false;
        profileData.value.influencer.categories = prof.Influencers.categories || [];
      }

      // Copy employment type from Talent if not null
      if (prof.Talent) {
        profileData.value.talent.headline = prof.Talent.headline || '';
        profileData.value.talent.employment_type = prof.Talent.employment_type || [];
      }
    }
    await downloadBanner(profileData.value.banner_path)
    await downloadAvatar(profileData.value.avatar_path)
    console.log(profileData)
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
    current: newPosition.value.current,
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
  companyDD.value.clearSelection();
  newPosition.value = {
    job_title: '',
    company: selectedCompany
  }
  await getProfileWithDetails()
}
async function removePosition(ind) {
  try {
    const { data, error } = await supabase
      .from('profile_company')
      .delete()
      .in('id', [profileData.value.positions[ind].id]); // Delete positions where ID matches

    if (error) {
      throw error;
    } else {
      profileData.value.positions.splice(ind, 1)
      console.log('Positions deleted successfully:', data);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}
async function updateProfile() {
  try {
    loading.value = true;

    // Step 1: Upsert the main profile information into the `profiles` table
    const profileUpdates = {
      id: user.value.id,
      full_name: profileData.value.full_name,
      email: profileData.value.email,
      website: profileData.value.website,
      avatar_url: profileData.value.avatar_path,
      banner_url: profileData.value.banner_path,
      phone: profileData.value.phone,
      title: profileData.value.title,
      location: profileData.value.location,
      about: profileData.value.about,
      linkedin: profileData.value.socialMedia.linkedin,
      youtube: profileData.value.socialMedia.youtube,
      facebook: profileData.value.socialMedia.facebook,
      twitter: profileData.value.socialMedia.twitter,
      tiktok: profileData.value.socialMedia.tiktok,
      instagram: profileData.value.socialMedia.instagram,
      snapchat: profileData.value.socialMedia.snapchat,
      twitch: profileData.value.socialMedia.twitch,
      discord: profileData.value.socialMedia.discord,
      industries: profileData.value.industries,
      is_expert: profileData.value.is_expert,
      is_influencer: profileData.value.is_influencer,
      is_volunteer: profileData.value.is_volunteer,
      is_talent: profileData.value.is_talent,
      show_email: profileData.value.privacy.email,
      show_phone: profileData.value.privacy.phone,
      show_location: profileData.value.privacy.location,
      show_about: profileData.value.privacy.about,
      show_experience: profileData.value.privacy.experience,
      show_industries: profileData.value.privacy.industries,
      show_social_media: profileData.value.privacy.socialMedia,
    };

    const { data: profData, error: profileError } = await supabase
      .from('profiles')
      .upsert(profileUpdates, {
        returning: 'representation', // Return the inserted/updated row
      });

    if (profileError) throw profileError;

    const profile_id = user.value.id; // Extract the `profile_id` for related tables

    // Step 2: Upsert `expert` information
    if (profileData.value.expert.categories.length > 0) {
      const expertUpdates = {
        profile_id,
        headline: profileData.value.expert.headline,
        will_travel: profileData.value.expert.will_travel,
        categories: profileData.value.expert.categories,
      };
      const { error: expertError } = await supabase
        .from('Experts')
        .upsert(expertUpdates, {
          returning: 'minimal',
        });
      if (expertError) throw expertError;
    }

    // Step 3: Upsert `volunteer` information
    if (profileData.value.volunteer.categories.length > 0) {
      const volunteerUpdates = {
        profile_id,
        headline: profileData.value.volunteer.headline,
        will_travel: profileData.value.volunteer.will_travel,
        categories: profileData.value.volunteer.categories,
      };
      const { error: volunteerError } = await supabase
        .from('Volunteers')
        .upsert(volunteerUpdates, {
          returning: 'minimal',
        });
      if (volunteerError) throw volunteerError;
    }

    // Step 4: Upsert `influencer` information
    if (profileData.value.influencer.categories.length > 0) {
      const influencerUpdates = {
        profile_id,
        headline: profileData.value.influencer.headline,
        will_travel: profileData.value.influencer.will_travel,
        categories: profileData.value.influencer.categories,
      };
      const { error: influencerError } = await supabase
        .from('Influencers')
        .upsert(influencerUpdates, {
          returning: 'minimal',
        });
      if (influencerError) throw influencerError;
    }

    // Step 5: Upsert `talent` information
    if (profileData.value.talent.employment_type.length > 0) {
      const talentUpdates = {
        profile_id,
        headline: profileData.value.talent.headline,
        employment_type: profileData.value.talent.employment_type,
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
onMounted(() => {
  getProfileWithDetails()
});
</script>

<template>
  <div v-if="hasProfile" class="min-h-screen bg-gray-50">
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner">Loading...</div>
    </div>
    <!-- Verification Modal -->
    <div v-if="showVerificationModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-8 max-w-lg w-full mx-4">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h3 class="text-2xl font-bold text-gray-900">Request Verification</h3>
            <p class="text-gray-600 mt-1">Verify your account to build trust with other users</p>
          </div>
          <button @click="showVerificationModal = false" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <XCircle class="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <div class="space-y-6">
          <div>
            <h4 class="font-medium text-gray-900 mb-2">Required Documents</h4>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li>Government-issued ID (Passport or Driver's License)</li>
              <li>Professional certification (if applicable)</li>
              <li>Business registration (for companies)</li>
            </ul>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Upload Documents
            </label>
            <div class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
              <input type="file" multiple @change="handleFileUpload" class="hidden" id="file-upload"
                accept=".pdf,.jpg,.jpeg,.png">
              <label for="file-upload"
                class="cursor-pointer inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Choose Files
              </label>
              <p class="mt-2 text-sm text-gray-500">
                or drag and drop files here
              </p>
            </div>
            <div v-if="verificationDocuments.length" class="mt-4">
              <h4 class="font-medium text-gray-900 mb-2">Selected Files:</h4>
              <ul class="space-y-2">
                <li v-for="doc in verificationDocuments" :key="doc.name"
                  class="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                  <span class="text-sm text-gray-600">{{ doc.name }}</span>
                  <span class="text-xs text-gray-500">{{ (doc.size / 1024 / 1024).toFixed(2) }} MB</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex justify-end space-x-4">
            <button @click="showVerificationModal = false"
              class="px-6 py-3 text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors w-32">
              Cancel
            </button>
            <button @click="handleVerificationRequest"
              class="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center w-32">
              <Shield class="w-5 h-5 mr-2" />
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview Mode Banner -->
    <div v-if="isPreviewMode"
      class="bg-blue-500 text-white py-2 px-4 fixed top-0 left-0 right-0 z-50 flex items-center justify-center">
      <Eye class="w-5 h-5 mr-2" />
      <span>Viewing profile as other users see it</span>
      <button @click="togglePreviewMode"
        class="ml-4 px-6 py-2 bg-white text-blue-500 rounded-full text-sm hover:bg-blue-50 transition-colors w-32">
        Exit Preview
      </button>
    </div>

    <!-- Banner -->
    <div :style="profileData.bannerSRC
      ? { backgroundImage: `url(${profileData.bannerSRC})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }
      : null" class="h-80 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 relative">
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
                <img :src="profileData.avatarSRC" alt="Profile picture"
                  class="w-40 h-40 rounded-2xl border-4 border-white shadow-lg">
                <div class="absolute -bottom-3 -right-3 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
              <div class="ml-8">
                <div class="flex items-center space-x-3">
                  <h1 v-if="editDisabled" class="text-4xl font-bold text-gray-900">{{ profileData.full_name }}</h1>
                  <input v-if="!editDisabled" v-model="profileData.full_name" placeholder="Full Name"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">

                  <!-- Verification Status Badge -->
                  <div :class="[
                    'px-4 py-2 rounded-xl text-sm font-medium flex items-center space-x-2 transition-all duration-300',
                    verificationStatusConfig[verificationStatus].bgColor,
                    verificationStatusConfig[verificationStatus].textColor
                  ]">
                    <component :is="verificationStatusConfig[verificationStatus].icon"
                      :class="['w-5 h-5', verificationStatusConfig[verificationStatus].iconColor]" />
                    <span>{{ verificationStatusConfig[verificationStatus].text }}</span>
                  </div>
                </div>
                <p v-if="editDisabled" class="text-xl text-orange-600 mt-1">{{ profileData.title }}</p>
                <input v-if="!editDisabled" v-model="profileData.title" placeholder="Title"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">

                <div v-if="isVisible('location')" class="flex items-center mt-2 text-gray-600">
                  <MapPin class="w-5 h-5 mr-2" />
                  <span v-if="editDisabled">{{ profileData.location }}</span>
                  <input v-if="!editDisabled" v-model="profileData.location" placeholder="Location"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">

                </div>
                <p class="mt-2 text-sm text-gray-500">
                  {{ verificationStatusConfig[verificationStatus].description }}
                </p>
              </div>
            </div>
            <div class="flex space-x-4" v-if="!isPreviewMode">
              <!-- Verification Actions -->
              <div v-if="verificationStatus === 'none'">
                <button @click="showVerificationModal = true"
                  class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center w-32">
                  <Shield class="w-5 h-5 mr-2" />
                  Verify
                </button>
              </div>
              <div v-else-if="verificationStatus === 'pending'">
                <button @click="cancelVerification"
                  class="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center w-32">
                  <XCircle class="w-5 h-5 mr-2" />
                  Cancel
                </button>
              </div>

              <button @click="showPrivacySettings = !showPrivacySettings"
                class="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center w-32">
                <Eye class="w-5 h-5 mr-2" />
                Privacy
              </button>
              <button v-if="editDisabled" @click="togglePreviewMode"
                class="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center w-32">
                <User class="w-5 h-5 mr-2" />
                Preview
              </button>
              <button v-if="editDisabled" v-on:click="editDisabled = false"
                class="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center w-32">
                <Edit3 class="w-5 h-5 mr-2" />
                Edit
              </button>
              <button v-if="!editDisabled" v-on:click="editDisabled = true; updateProfile()"
                class="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center w-32">
                <SaveAll class="w-5 h-5 mr-2" />
                Save
              </button>
            </div>
          </div>

          <!-- Privacy Settings Panel -->
          <div v-if="showPrivacySettings && !isPreviewMode" class="mb-8 bg-gray-50 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Privacy Settings</h3>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(value, key) in profileData.privacy" :key="key" class="flex items-center justify-between">
                <span class="text-gray-700 capitalize">Show {{ key }}</span>
                <button @click="togglePrivacy(key)" :class="[
                  'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
                  value ? 'bg-orange-500' : 'bg-gray-200'
                ]">
                  <span :class="[
                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                    value ? 'translate-x-5' : 'translate-x-0'
                  ]" />
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
                <p v-if="editDisabled" class="text-gray-600 text-lg leading-relaxed">
                  {{ profileData.about }}
                </p>
                <textarea v-if="!editDisabled" v-model="profileData.about" placeholder="About"
                  class="w-full px-4 py-2 h-24 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none">
</textarea>
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
                      <h3 class="text-lg font-semibold text-gray-900">{{ position.job_title }}</h3>
                      <p class="text-gray-600">{{ position.company_name }}</p>
                      <span v-if="position.current"
                        class="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mt-2">
                        Current
                      </span>
                    </div>
                    <div class="flex-grow w-full flex items-end">
                      <XCircle v-if="!editDisabled" class="ml-auto text-orange-500 flex-shrink-0" @click="removePosition(index)"></XCircle>
                    </div>
                  </div>
                  <div v-if="!isPreviewMode" class="flex space-x-4">
                    <Input v-model="newPosition.job_title" placeholder="Job Title..."
                      class="mt-1 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 max-w-48" />
                    <TableInputSearch v-model:selectedValue="selectedCompany" :table="'Companies'" :column="'name'"
                      ref="companyDD" :allow-string="true" class="mt-1 align-left">

                    </TableInputSearch>
                    <div class="flex space-x-2 mt-1 items-center">
                      <span class="text-gray-600">Current:</span>
                      <button v-on:click="newPosition.current = !newPosition.current" :class="[
                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
                        newPosition.current ? 'bg-orange-500' : 'bg-gray-200'
                      ]">
                        <span :class="[
                          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                          newPosition.current ? 'translate-x-5' : 'translate-x-0'
                        ]" />
                      </button>
                    </div>
                    <Button
                      :disabled="!newPosition || !newPosition.job_title || !selectedCompany || Object.keys(selectedCompany).length == 0"
                      @click="addNewPosition" variant="secondary"
                      class="flex mt-1 items-center gap-2 text-white bg-orange-500  hover:bg-orange-400 focus:ring-orange-400">
                      <Plus class="w-5 h-5" /> Add
                    </Button>
                  </div>
                </div>
              </div>

              <!-- Industries -->
              <div v-if="isVisible('industries')">
                <h2 class="text-2xl font-semibold text-gray-900 mb-4">Industries</h2>
                <div class="flex flex-wrap gap-3" v-if="editDisabled">
                  <span v-for="industry in profileData.industries" :key="industry"
                    class="px-4 py-2 bg-gray-100 text-gray-800 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                    {{ industry }}
                  </span>
                </div>
                <div v-if="!editDisabled">
                <Popover>
                  <PopoverTrigger :disabled="editDisabled"
                    class="mb-4 w-full rounded-md text-sm border border-gray-300 dark:border-orange-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
                    <span>{{ profileData.industries.length ? formatArray(profileData.industries, 2) : 'Select' }}</span>
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
                          <input type="checkbox" :checked="profileData.industries.includes(industry)"
                            @click="toggleIndustrySelection(industry)" />
                          <span>{{ industry }}</span>
                        </li>
                      </ul>
                    </ScrollArea>
                  </PopoverContent>
                </Popover>
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
                    <a v-if="editDisabled" :href="`mailto:${profileData.email}`" class="text-orange-600 hover:text-orange-700">
                      {{ profileData.email }}
                    </a>
                    <input v-if="!editDisabled" v-model="profileData.email" placeholder="Email" type="email"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">

                  </div>
                  <div v-if="isVisible('phone')" class="flex items-center">
                    <Phone class="w-5 h-5 text-gray-500 mr-3" />
                    <a v-if="editDisabled" :href="`tel:${profileData.phone}`" class="text-orange-600 hover:text-orange-700">
                      {{ profileData.phone }}
                    </a>
                    <input v-if="!editDisabled" v-model="profileData.phone" placeholder="Phone" type="tel"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">

                  </div>
                  <div class="flex items-center">
                    <Globe class="w-5 h-5 text-gray-500 mr-3" />
                    <a v-if="editDisabled" :href="profileData?.socialMedia.website" target="_blank"
                      class="text-orange-600 hover:text-orange-700">
                      {{ profileData?.socialMedia.website }}
                    </a>
                    <input v-if="!editDisabled" v-model="profileData.socialMedia.website" placeholder="Website" type="url"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">

                  </div>
                </div>
              </div>

              <!-- Social Media -->
              <div v-if="isVisible('socialMedia')">
                <h2 class="text-xl font-semibold text-gray-900 mb-4">Connect & Follow</h2>
                <div class="grid grid-cols-1 gap-3">
                  <template v-for="(config, platform) in socialMedia" :key="platform">
                    <a v-if="profileData.socialMedia[platform] && editDisabled" :href="formatUrl(profileData.socialMedia[platform])"
                      target="_blank" rel="noopener noreferrer" :class="[
                        'flex items-center p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1',
                        config.bgColor,
                        config.hoverBg
                      ]">
                      <component v-if="platform != 'snapchat'" :is="config.icon" :class="['h-5 w-5 mr-3', config.iconColor]" />
                      <CIcon v-if="platform == 'snapchat'" :icon="config.icon" :class="['h-5 w-5 mr-3', config.iconColor]" />
                      <span :class="['font-medium', config.textColor]">
                        {{ platform.charAt(0).toUpperCase() + platform.slice(1) }}
                      </span>
                    </a>
                    <div class="flex flex-row items-center" v-if="!editDisabled" >
                      <component v-if="platform != 'snapchat'" :is="config.icon" :class="['h-5 w-5 mr-3', config.iconColor]" />
                      <CIcon v-if="platform == 'snapchat'" :icon="config.icon" :class="['h-5 w-5 mr-3', config.iconColor]" />
                      <input v-model="profileData.socialMedia[platform]" :placeholder="platform.charAt(0).toUpperCase() + platform.slice(1)" type="url"
                      class="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Sections (only shown when not in preview mode) -->
      <div v-if="!isPreviewMode" class="mt-8 space-y-6">
        <div v-for="section in sections" :key="section.id"
          class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
          <div class="px-8 py-6 flex items-center justify-between">
            <button @click="toggleSection(section.id)" class="flex-1 flex items-center space-x-4">
              <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <component :is="section.icon" class="w-6 h-6 text-orange-600" />
              </div>
              <div class="text-left">
                <h3 class="text-lg font-semibold text-gray-900">{{ section.title }}</h3>
                <p class="text-gray-600">{{ section.description }}</p>
              </div>
            </button>

            <div class="flex items-center space-x-4">

              <button v-if="section.isExpanded" v-on:click="editDisabled = true; updateProfile()"
                class="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center w-32">
                <SaveAll class="w-5 h-5 mr-2" />
                Save
              </button>
              <button @click="toggleSectionVisibility(section.id)"
                class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                :title="section.isVisible ? 'Hide from public' : 'Show to public'">
                <component :is="section.isVisible ? Eye : EyeOff" class="w-5 h-5 text-gray-500" />
              </button>
              <ChevronDown :class="[
                'w-5 h-5 text-gray-400 transition-transform duration-200',
                section.isExpanded ? 'transform rotate-180' : ''
              ]" />
            </div>
          </div>

          <!-- Expanded Section Content -->
          <div v-if="section.isExpanded" class="px-8 pb-6 border-t">
            <div class="mt-6 space-y-6">
              <div v-for="field in section.fields" :key="field.name" class="space-y-2">
                <label :for="field.name" class="block text-sm font-medium text-gray-700">
                  {{ field.label }}
                </label>

                <!-- Text Input -->
                <input v-if="field.type === 'text'" v-model="field.value" :type="field.type" :id="field.name"
                  :placeholder="field.placeholder"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">

                <!-- Select Input -->
                <Popover v-if="field.type === 'select'">
                  <PopoverTrigger
                    class="mb-4 w-full rounded-md text-sm border border-gray-300 dark:border-orange-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
                    <span>{{ field.value.length ? formatArray(field.value, 2) : 'Select' }}</span>
                    <ChevronDown class="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </PopoverTrigger>
                  <PopoverContent
                    class="border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg">
                    <ScrollArea class="h-80 w-full p-1">
                      <ul class="menu">
                        <li v-for="option, ind in field.options" :key="option" class="flex items-center gap-2">
                          <input type="checkbox" :checked="field.value.includes(option)"
                            @click="field.value.includes(option) ? field.value.splice(ind, 1) : field.value.push(option)" />
                          <span>{{ option }}</span>
                        </li>
                      </ul>
                    </ScrollArea>
                  </PopoverContent>
                </Popover>

                <!-- Toggle Input -->
                <div v-if="field.type === 'toggle'" class="flex items-center">
                  <button @click="field.value = !field.value" :class="[
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
                    field.value ? 'bg-orange-500' : 'bg-gray-200'
                  ]">
                    <span :class="[
                      'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                      field.value ? 'translate-x-5' : 'translate-x-0'
                    ]" />
                  </button>
                </div>
                <div v-if="field.type === 'company'" class="flex items-center">
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
                          <TableRow v-for="(company, index) in profileData.companies" :key="index">
                            <TableCell>{{ company.name }}</TableCell>
                            <TableCell>{{ company.description }}</TableCell>
                            <TableCell>{{ company?.website }}</TableCell>
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