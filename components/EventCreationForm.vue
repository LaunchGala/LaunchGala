<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification';
import { useRouter, useRoute } from 'vue-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

const uploading = ref(false); // Track upload status
const toast = useToast();
const user = useSupabaseUser();
// Emit event to notify parent
const emit = defineEmits(['eventCreated'])

const industries = [
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
const eventTypes = [
  'Hackathon',
  'Networking Event',
  'Pitching event',
  'Dinner event',
  'Sales expo',
  'Conference',
  'Seminar & workshop',
  'Product launch',
  'Corporate meetings & retreats',
  'Panel discussions & roundtables',
  'Award ceremony & Gala',
  'Job fair & career expo',
  'Academic conference',
  'Investor & funding meetup',
  'Startup accelerator & incubator',
  'Industry-specific summit',
  'Press conference',
  'Executive & leadership forum',
  'Publishing & signing event',
  'Art show & exhibition',
];
// Form Data
const formData = ref({
  title: '',
  description: '',
  agenda: '',
  link: '',
  event_type: '',
  industries: [],
  invite_only: false,
  ticket_price: 0,
  event_start_date: '',
  event_end_date: '',
  event_start_time: '',
  event_end_time: '',
  location: '',
  allow_volunteers_offering: false,
  allow_sponsorship_offering: false,
  allow_expertise_offering: false,
  allow_vendors_offering: false,
  allow_registration_request: false,
  is_published: false,
  images: [],
  created_by: user.value.id,
  allow_venue_offering: false,
  number_of_guests: 0,
});

const supabase = useSupabaseClient();

// File Upload
const handleFileUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;

  uploading.value = true;

  const fileName = `${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage
    .from('images')
    .upload(fileName, file);

  uploading.value = false;

  if (error) {
    toast.error(`Error uploading image: ${error.message}`);
    return;
  }

  formData.value.images = data.path;
  toast.success('Image uploaded successfully');
};

// Form Submit
const onSubmit = async (event: Event) => {
  event.preventDefault();

  const { data, error } = await supabase
    .from('AllEvents')
    .upsert(formData.value).select();

  if (error) {
    toast.error(`Error: ${error.message}`);
  } else {
    toast.success('Event created successfully');
    emit('eventCreated', data[0].id)
  }
};

// Load form data on component mount if `id` is present
onMounted(() => {
});
</script>

<template>
  <div class="bg-orange-200 p-8 h-[70vh]">
    <div class="bg-white p-8 rounded-lg max-h-full shadow-lg max-w-full mx-auto dark:bg-black overflow-scroll">
      <form @submit="onSubmit" class="space-y-6 m-4 max-h-full">
        <h3 class="text-3xl font-bold text-center text-orange-600 dark:text-white">Event Creation</h3>

        <!-- Title -->
        <div>
          <Label for="title">Title</Label>
          <Input id="title" v-model="formData.title" placeholder="Event Title" />
        </div>

        <!-- Description -->
        <div>
          <Label for="description">Description</Label>
          <Textarea id="description" v-model="formData.description" placeholder="Event Description" />
        </div>

        <!-- Agenda -->
        <div>
          <Label for="agenda">Agenda</Label>
          <Textarea id="agenda" v-model="formData.agenda" placeholder="Event Agenda" />
        </div>

        <!-- Link -->
        <div>
          <Label for="link">Link</Label>
          <Input id="link" v-model="formData.link" placeholder="Event Link" />
        </div>

        <!-- Event Type -->
        <div>
          <Label for="event_type">Event Type</Label>
          <SearchableDropdownSingle id="event_types" v-model:selectedValue="formData.event_type" :label="'Event Type'" :values="eventTypes" placeholder="Industries"></SearchableDropdownSingle>
        </div>

        <!-- Industries -->
        <div>
          <Label for="industries">Industries</Label>
          <SearchableDropdownMulti id="industries" v-model:selectedValues="formData.industries" :label="'Industries'" :values="industries" placeholder="Industries"></SearchableDropdownMulti>
        </div>

        <!-- Invite Only -->
        <div>
          <Checkbox id="invite_only" v-model="formData.invite_only" />
          <Label for="invite_only">Invite Only</Label>
        </div>

        <!-- Ticket Price -->
        <div>
          <Label for="ticket_price">Ticket Price</Label>
          <Input id="ticket_price" type="number" v-model="formData.ticket_price" />
        </div>

        <!-- Start Date & End Date -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <Label for="event_start_date">Start Date</Label>
            <Input id="event_start_date" type="date" v-model="formData.event_start_date" />
          </div>
          <div>
            <Label for="event_end_date">End Date</Label>
            <Input id="event_end_date" type="date" v-model="formData.event_end_date" />
          </div>
        </div>

        <!-- Start Time & End Time -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <Label for="event_start_time">Start Time</Label>
            <Input id="event_start_time" type="time" v-model="formData.event_start_time" />
          </div>
          <div>
            <Label for="event_end_time">End Time</Label>
            <Input id="event_end_time" type="time" v-model="formData.event_end_time" />
          </div>
        </div>

        <!-- Location -->
        <div>
          <Label for="location">Location</Label>
          <Input id="location" v-model="formData.location" placeholder="Event Location" />
        </div>

        <!-- Images -->
        <div>
          <Label for="images">Images</Label>
          <ImageUploader :image-names="formData.images"/>
        </div>

        <!-- Boolean Toggles -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <Checkbox id="allow_volunteers_offering" v-model="formData.allow_volunteers_offering" />
            <Label for="allow_volunteers_offering">Allow Volunteers Offering</Label>
          </div>
          <div>
            <Checkbox id="allow_sponsorship_offering" v-model="formData.allow_sponsorship_offering" />
            <Label for="allow_sponsorship_offering">Allow Sponsorship Offering</Label>
          </div>
          <div>
            <Checkbox id="allow_expertise_offering" v-model="formData.allow_expertise_offering" />
            <Label for="allow_expertise_offering">Allow Expertise Offering</Label>
          </div>
          <div>
            <Checkbox id="allow_vendors_offering" v-model="formData.allow_vendors_offering" />
            <Label for="allow_vendors_offering">Allow Vendors Offering</Label>
          </div>
          <div>
            <Checkbox id="allow_registration_request" v-model="formData.allow_registration_request" />
            <Label for="allow_registration_request">Allow Registration Request</Label>
          </div>
          <div>
            <Checkbox id="allow_venue_offering" v-model="formData.allow_venue_offering" />
            <Label for="allow_venue_offering">Allow Venue Offering</Label>
          </div>
          <div>
            <Checkbox id="is_published" v-model="formData.is_published" />
            <Label for="is_published">Is Published</Label>
          </div>
        </div>

        <!-- Number of Guests -->
        <div>
          <Label for="number_of_guests">Number of Guests</Label>
          <Input id="number_of_guests" type="number" v-model="formData.number_of_guests" />
        </div>

        <!-- Submit Button -->
        <Button type="submit" class="w-full bg-orange-500 text-white">
          {{ formData.id ? 'Update Event' : 'Create Event' }}
        </Button>
      </form>
    </div>
  </div>
</template>