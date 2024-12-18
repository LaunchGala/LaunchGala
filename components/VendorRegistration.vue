
<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
  import { useToast } from 'vue-toastification';
import { User, Edit2, Mail, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-vue-next';

const uploading = ref(false); // Track upload status
const toast = useToast();
const route = useRoute();
const router = useRouter();
const user = useSupabaseUser();

// Handle File Upload
const handleFileUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (!file) return;

  uploading.value = true;

  // Generate a unique file name
  const fileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from('images') // Bucket name
    .upload(fileName, file);

  uploading.value = false;

  if (error) {
    toast({
      title: 'Error uploading image',
      description: error.message,
      status: 'error',
    });
    return;
  }

  // Save the file path in formData
  formData.value.business_logo = data.path;

  toast({
    title: 'Image Uploaded',
    description: 'Your business logo has been uploaded successfully.',
  });
};


const formData = ref({
    id: null,
  full_name: '',
  business_name: '',
  headline: '',
  headline: '',
  position: '',
  email_address: '',
  services_offered: '',
  website: '',
  industry: '',
  location: '',
  phone: '',
  business_logo: '',
  linkedin: '',
  twitter: '',
  youtube: '',
  facebook: '',
  instagram: '',
  created_by: user.value.id
});

const supabase = useSupabaseClient()

const onSubmit = async (event: Event) => {
  event.preventDefault();

  const { data, error } = await supabase
    .from('Vendors')
    .upsert(formData.value, {
          returning: 'minimal',
        });

  if (error) {
    console.error('Error:', error.message);
    toast.error('Error');
  } else {
    toast.success('Registration Successful');
    router.push('/AllVendors');
  }
};

// Load Data for Editing
const loadFormData = async (id: string) => {
  const { data, error } = await supabase.from('Vendors').select('*').eq('id', id).single();

  if (error) {
    toast({
      title: 'Error',
      description: error.message,
      status: 'error',
    });
    return;
  }

  if (data) {
    formData.value = {
      id: data.id,
      full_name: data.full_name,
      business_name: data.business_name,
      headline: data.headline,
      position: data.position,
      email_address: data.email_address,
      services_offered: data.services_offered,
      website: data.website,
      industry: data.industry,
      location: data.location,
      phone: data.phone,
      linkedin: data.linkedin,
      twitter: data.twitter,
      youtube: data.youtube,
      facebook: data.facebook,
      instagram: data.instagram,
      business_logo: data.business_logo || '',
      created_by: data.created_by
    };
  }
};

// Load form data on component mount if `id` is present
onMounted(() => {
  const id = route.query.id;
  if (id) {
    loadFormData(id);
  }
});
</script>
<template>
    <div class="bg-orange-200 p-8">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto dark:bg-black">
        <form @submit="onSubmit" class="space-y-6 m-4">
          <h3 class="text-3xl font-bold text-center text-orange-600 dark:text-white">Vendor Registration</h3>
  
          <!-- Full Name -->
          <div>
            <Label for="fullName" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Full Name</Label>
            <Input 
              id="fullName" 
              placeholder="Your Full Name" 
              v-model="formData.full_name"
              class="mt-1 block w-full rounded-md border-orange-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 dark:border-gray-600" 
            />
          </div>
  
          <!-- Business Name -->
          <div>
            <Label for="businessName" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Business Name</Label>
            <Input 
              id="businessName" 
              placeholder="Your Business Name" 
              v-model="formData.business_name"
              class="mt-1 block w-full rounded-md" 
            />
          </div>

          <!-- Headline -->
          <div>
            <Label for="businessName" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Headline</Label>
            <Input 
              id="businessName" 
              placeholder="Your Business Name" 
              v-model="formData.headline"
              class="mt-1 block w-full rounded-md" 
            />
          </div>
  
          <!-- Position -->
          <div>
            <Label for="yourPosition" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Position</Label>
            <Input 
              id="yourPosition" 
              placeholder="Your Position" 
              v-model="formData.position"
              class="mt-1 block w-full rounded-md" 
            />
          </div>
  
          <!-- Email Address -->
          <div>
            <Label for="emailAddress" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Email Address</Label>
            <Input 
              id="emailAddress" 
              type="email" 
              placeholder="example@domain.com" 
              v-model="formData.email_address"
              class="mt-1 block w-full rounded-md" 
            />
          </div>
  
          <!-- Services Offered -->
          <div>
            <Label for="servicesOffered" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Services/Products</Label>
            <Textarea 
              id="servicesOffered" 
              placeholder="What services/products do you offer?" 
              v-model="formData.services_offered"
              class="mt-1 block w-full rounded-md" 
            />
          </div>
  
          <!-- Business Website -->
          <div>
            <Label for="businessWebsite" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Business Website</Label>
            <Input 
              id="businessWebsite" 
              type="url" 
              placeholder="https://www.yourbusinesssite.com" 
              v-model="formData.website"
              class="mt-1 block w-full rounded-md" 
            />
          </div>
  
          <!-- Industry -->
          <div>
            <Label for="industry" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Vendor Categories</Label>
            <Input 
              id="industry" 
              type="text" 
              placeholder="Industries your business belongs to" 
              v-model="formData.industry"
              class="mt-1 block w-full rounded-md" 
            />
          </div>
  
          <!-- Location -->
          <div>
            <Label for="location" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Location</Label>
            <Input 
              id="location" 
              type="text" 
              placeholder="Business Location" 
              v-model="formData.location"
              class="mt-1 block w-full rounded-md" 
            />
          </div>
  
          <!-- Phone Number -->
          <div>
            <Label for="phone" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Phone Number</Label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="+1 (555) 123-4567" 
              v-model="formData.phone"
              class="mt-1 block w-full rounded-md" 
            />
          </div>

        <!-- Business Logo -->
        <div>
        <Label for="businessLogo" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Business Logo</Label>
        <Input 
            id="businessLogo" 
            type="file" 
            @change="handleFileUpload"
            class="mt-1 block w-full rounded-md" 
        />
        <p v-if="uploading" class="text-sm text-orange-600">Uploading...</p>
        </div>
  
          <!-- Social Media Links -->
          <div>
            <Label class="block text-sm font-medium text-orange-700 dark:text-gray-300">Social Media Links</Label>
            <div class="flex space-x-2">
              <div class="flex items-center flex-1 bg-gray-100 rounded-md">
                <Linkedin class="w-6 h-6 ml-3 text-blue-500 mr-1" />
                <Input 
                  type="text" 
                  placeholder="LinkedIn URL" 
                  v-model="formData.linkedin" 
                  class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div class="flex items-center flex-1 bg-gray-100 rounded-md">
                <Twitter class="w-6 h-6 ml-3 text-black-500 mr-1" />
                <Input 
                  type="text" 
                  placeholder="Twitter URL" 
                  v-model="formData.twitter" 
                  class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div class="flex items-center flex-1 bg-gray-100 rounded-md">
                <Youtube class="w-6 h-6 ml-3 text-red-500 mr-1" />
                <Input 
                  type="text" 
                  placeholder="YouTube URL" 
                  v-model="formData.youtube" 
                  class="flex-1 border-0 focus:ring-2 focus:ring-pink-500" 
                />
              </div>
              <div class="flex items-center flex-1 bg-gray-100 rounded-md">
                <Facebook class="w-6 h-6 ml-3 text-blue-600 mr-1" />
                <Input 
                  type="text" 
                  placeholder="Facebook URL" 
                  v-model="formData.facebook" 
                  class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div class="flex items-center flex-1 bg-gray-100 rounded-md">
                <Instagram class="w-6 h-6 ml-3 text-orange-600 mr-1" />
                <Input 
                  type="text" 
                  placeholder="Instagram URL" 
                  v-model="formData.instagram" 
                  class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>
          </div>
  
          <!-- Terms Agreement -->
          <div class="flex items-center">
            <Checkbox 
              id="terms" 
              class="w-4 h-4 text-orange-600 focus:ring-orange-400 dark:border-gray-600" 
            />
            <Label for="terms" class="ml-2 block text-sm text-orange-700 dark:text-gray-300">
              I agree to the 
              <a href="#" class="text-orange-600 hover:underline dark:hover:text-orange-500">Terms and Conditions</a>.
            </Label>
          </div>
  
          <!-- Submit Button -->
          <Button 
            type="submit" 
            class="w-full bg-orange-500 hover:bg-orange-600 focus:ring-4 dark:focus:ring-orange-700 focus:ring-orange-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
          >
            {{ formData.id ? "Update" : "Register"}}
          </Button>
        </form>
      </div>
    </div>
  </template>