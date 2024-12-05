<template>
    <div>
      <!-- Radix Dialog for Creating a Company -->
      <Dialog v-slot="{ }" v-model:open="open">
        <!-- Button to open the create company dialog -->
        <DialogTrigger asChild>
          <Button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            <PlusCircle></PlusCircle> <span class="ml-2">Add Company</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <div class="bg-white rounded-lg shadow-lg w-full max-w-m p-6">
            <h2 class="text-2xl font-bold mb-4 text-center">Create Company</h2>
  
            <!-- Display error message if there is any -->
            <div v-if="errorMessage" class="bg-red-100 text-red-700 p-2 rounded mb-4">
              {{ errorMessage }}
            </div>
  
            <form @submit.prevent="createCompany">
              <!-- Description input -->
              <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <Textarea
                  v-model="company.name"
                  id="name"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter company name"
                />
              <!-- Description input -->
              <div class="mb-4">
                <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                <Textarea
                  v-model="company.description"
                  id="description"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter company description"
                />
              </div>

              </div>
              <!-- Image URL input -->
              <div class="mb-4">
                <label for="image" class="block text-sm font-medium text-gray-700">Image URL</label>
                <ImageUploader
                    :allowMultiple="false"
                    :imageNames="company.image"
                    @update:images="handleImageUpdates"
                />
              </div>
  
              <!-- Industries input -->
              <div class="mb-4">
                <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="industry">Industry</label>
                <Popover>
                <PopoverTrigger class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
                    <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
                    <span>{{ company.industries.length ? company.industries.join(', ') : 'Select' }}</span>
                </PopoverTrigger>
                <PopoverContent class="border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg">
                    <div class="p-2">
                    <Input v-model="searchIndustry" placeholder="Search industries..." class="w-full mb-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
                    </div>
                    <ScrollArea class="h-80 w-full p-1">
                    <ul class="menu">
                        <li v-for="industry in filteredIndustries" :key="industry" class="flex items-center gap-2">
                        <input type="checkbox" :checked="company.industries.includes(industry)" @click="toggleIndustrySelection(industry)" />
                        <span>{{ industry }}</span>
                        </li>
                    </ul>
                    </ScrollArea>
                </PopoverContent>
                </Popover>
              </div>
  
              <!-- Stage input -->
              <div class="mb-4">
                <label for="stage" class="block text-sm font-medium text-gray-700">Stage</label>
                <DropdownMenu>
                <DropdownMenuTrigger class=" mb-4 w-full rounded-md border border-gray-300 dark:border-orange-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
                  <span>{{ company.value.stage || 'Select business stage' }}</span>
                  <ChevronDown class="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </DropdownMenuTrigger>
                <DropdownMenuContent class="rounded-md border border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg py-1">
                  <DropdownMenuItem v-for="stage in stages" :key="stage" @click="company.value.stage = stage">
                    {{ stage }}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <div class="hover:bg-orange-200 dark:hover:bg-orange-700">
                    <CreateCompanyDialog></CreateCompanyDialog>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              </div>
  
              <!-- Website input -->
              <div class="mb-4">
                <label for="website" class="block text-sm font-medium text-gray-700">Website</label>
                <input
                  v-model="company.website"
                  type="url"
                  id="website"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter website URL"
                />
              </div>
  
              <!-- Location input -->
              <div class="mb-4">
                <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                <DropdownMenu>
                <DropdownMenuTrigger class=" mb-4 w-full rounded-md border border-gray-300 dark:border-orange-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
                    <span>{{ company.value.location || 'Select your city' }}</span>
                    <ChevronDown class="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </DropdownMenuTrigger>
                <DropdownMenuContent class="rounded-md border border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg py-1">
                    <DropdownMenuItem v-for="city in cities" :key="city" @click="company.value.location = city">
                    {{ city }}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem @click="company.value.location = ''" class="hover:bg-orange-200 dark:hover:bg-orange-700">
                    <XCircle class="mr-2 text-orange-500 dark:text-orange-300" />Other
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
              </div>
  
              <!-- Seeking Funding checkbox -->
              <div class="mb-4">
                <label class="flex items-center">
                  <input
                    v-model="company.seeking_funding"
                    type="checkbox"
                    class="mr-2"
                  />
                  Seeking Funding
                </label>
              </div>
  
              <!-- Create Company button -->
              <button
                type="submit"
                class="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                :disabled="loading"
              >
                <span v-if="loading">Creating...</span>
                <span v-else>Add Company</span>
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { DialogClose, DialogContent, Dialog, DialogTrigger } from '@/components/ui/dialog';
  import { Button } from '@/components/ui/button';
  import { Textarea } from '@/components/ui/textarea';
  import { useToast } from 'vue-toastification';
import { PlusCircle } from 'lucide-vue-next';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  ScrollArea
} from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { ChevronDown, XCircle } from 'lucide-vue-next';
import ImageUploader from './ImageUploader.vue'

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
  'Urban Technology', 'Aviation', 'Urban Development', 'Other'];

  const stages = ['Bootstrapped Sole Proprietorship', 'Bootstrapped Small to Medium Enterprise (SME)', 'Angel-funded Startup', 'Seed-Stage Startup', 'Series A Startup (VC-funded)', 'Series B Startup (VC-funded)', 'Series C Startup (VC-funded)', 'Growth-Stage Startup (VC-funded)', 'Late-Stage Startup (VC-funded)', 'VC-funded Small to Medium Enterprise (SME)', 'Private Equity-backed SME', 'Private Equity-backed Large Enterprise', 'Corporate (Privately Held)', 'Corporate (Publicly Traded)', 'Conglomerate (Private Equity-backed)', 'Conglomerate (Publicly Traded)', 'Public Company', 'Non-Profit Organization', 'Research Institution', 'Government Organization', 'Other']

  const cities = ['San Francisco', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Austin']
  
const user = useSupabaseUser();
const open = ref(false)
  const company = ref({
    created_by: user.value.id,
    name: '',
    image: '',
    description: '',
    industries: [],
    stage: '',
    website: '',
    location: '',
    seeking_funding: false,
    verified: false
  });
  
  const loading = ref(false);
  const errorMessage = ref('');
  const toast = useToast();
  
  // Function to handle creating the company
  const createCompany = async () => {
    loading.value = true;
    errorMessage.value = '';
  
    try {
        const { error: error } = await supabase
        .from('Companies')
        .upsert(company.value, {
          returning: 'minimal',
        });
      if (error) throw error;
      console.log('Company created:', company.value);
      toast.success('Company created successfully!');
      open.value = false;
    } catch (error) {
      errorMessage.value = error.message || 'Error creating company.';
    } finally {
      loading.value = false;
    }
  };

  const searchIndustry = ref('');

  const filteredIndustries = computed(() => {
  return Industries.filter(x => x.toLowerCase().includes(searchIndustry.value.toLowerCase()));
});
// Function to toggle selection of a venue type
const toggleIndustrySelection = (val) => {
  const index = company.value.industries.indexOf(val);
  if (index === -1) {
    // Add to selected items
    company.value.industries.push(val);
  } else {
    // Remove from selected items
    company.value.industries.splice(index, 1);
  }
  console.log(company.value.industries)
};
function handleImageUpdates(images) {
  company.image = images.length ? images[0] : '';
}
  </script>
  
  <style scoped>
  /* Custom styling if needed */
  </style>
  