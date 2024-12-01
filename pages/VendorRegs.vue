
<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/toast'
import { User, Edit2, Mail, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-vue-next';


const formSubmitted = ref(false)
const toast = useToast()

const onSubmit = (event) => {
  event.preventDefault()
  formSubmitted.value = true
  toast({
    title: 'Registration Successful',
    description: 'Thanks for registering your business with Launch Gala.',
  })
}
</script>

<template>
  <div class="bg-orange-200 p-8">
  <div class="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto dark:bg-black">
    <form @submit="onSubmit" class="space-y-6 m-4">
      <h3 class="text-3xl font-bold text-center text-orange-600 dark:text-white">Vendor Registration</h3>

      <div>
        <Label for="fullName" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Full Name</Label>
        <Input id="fullName" placeholder="Your Full Name" class="mt-1 block w-full rounded-md border-orange-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 dark:border-gray-600"/>
      </div>

      <div>
        <Label for="businessName" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Business Name</Label>
        <Input id="businessName" placeholder="Your Business Name" class="mt-1 block w-full rounded-md border-orange-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 dark:border-gray-600"/>
      </div>

      <div>
        <Label for="yourPosition" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Position</Label>
        <Input id="yourPosition" placeholder="Your Position" class="mt-1 block w-full rounded-md border-orange-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 dark:border-gray-600"/>
      </div>

      <div>
        <Label for="emailAddress" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Email Address</Label>
        <Input id="emailAddress" type="email" placeholder="example@domain.com" class="mt-1 block w-full rounded-md border-orange-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 dark:border-gray-600"/>
      </div>

      <div>
        <Label for="servicesOffered" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Services/Products</Label>
        <Textarea id="servicesOffered" placeholder="What services/products do you offer?" class="mt-1 block w-full rounded-md border-orange-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 dark:border-gray-600"/>
      </div>

      <div>
        <Label for="businessWebsite" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Business Website</Label>
        <Input id="businessWebsite" type="url" placeholder="https://www.yourbusinesssite.com" class="mt-1 block w-full rounded-md border-orange-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 dark:border-gray-600"/>
      </div>

      <div>
        <Label for="businessImage" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Business Image</Label>
        <Input id="businessImage" type="file" class="mt-1 block w-full rounded-md border-orange-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 dark:border-gray-600"/>
      </div>

      <div>
        <Label for="industry" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Industry</Label>
        <Input id="industry" type="text" placeholder="Industry your business belongs to" class="mt-1 block w-full rounded-md border-orange-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 dark:border-gray-600"/>
      </div>

      <div>
        <Label for="location" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Location</Label>
        <Input id="location" type="text" placeholder="Business Location" class="mt-1 block w-full rounded-md border-orange-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 dark:border-gray-600"/>
      </div>

      <div>
        <Label for="phone" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" class="mt-1 block w-full rounded-md border-orange-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 dark:border-gray-600"/>
      </div>

      
      <div>
        <Label for="businessLogo" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Business Logo</Label>
        <Input id="businessLogo" type="file" class="mt-1 block w-full rounded-md border-orange-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 dark:border-gray-600"/>
      </div>
      
      <div>
        <Label for="socialLinks" class="block text-sm font-medium text-orange-700 dark:text-gray-300">Social Media Links</Label>
        <!-- <Textarea id="socialLinks" placeholder="Social media links (one per line)" class="mt-1 block w-full rounded-md border-orange-300 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 dark:border-gray-600"/> -->
      </div>
      <div class=" flex space-x-2">
        <div class="flex items-center flex-1 bg-gray-100  rounded-md">
          <Linkedin class="w-6 h-6 ml-3 text-blue-500 mr-1"/>
          <Input type="text" :disabled="editDisabled" placeholder="LinkedIn URL" v-model="user_linkedin" class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
        </div>
        <div class="flex items-center flex-1 bg-gray-100 rounded-md">
          <Twitter class="w-6 h-6 ml-3 text-black-500 mr-1"/>
          <Input type="text" :disabled="editDisabled" placeholder="Twitter URL" v-model="user_twitter" class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
        </div>
        <div class="flex items-center flex-1 bg-gray-100  rounded-md">
          <Youtube class="w-6 h-6 ml-3 text-red-500 mr-1"/>
          <Input type="text" :disabled="editDisabled" placeholder="YouTube URL" v-model="user_youtube" class="flex-1 border-0 focus:ring-2 focus:ring-pink-500" />
        </div>
        <div class="flex items-center flex-1 bg-gray-100  rounded-md">
          <Facebook class="w-6 h-6 ml-3 text-blue-600 mr-1"/>
          <Input type="text" :disabled="editDisabled" placeholder="Facebook URL" v-model="user_facebook" class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
        </div>
        <div class="flex items-center flex-1 bg-gray-100  rounded-md">
          <Instagram class="w-6 h-6 ml-3 text-orange-600 mr-1"/>
          <Input type="text" :disabled="editDisabled" placeholder="Instagram URL" v-model="user_instagram" class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
        </div>
        <!-- <div class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md">
          <TikTok class="w-6 h-6 ml-3 text-blue-600"/>
          <Input type="text" :disabled="editDisabled" placeholder="TikTok URL" v-model="user_tiktok" class="flex-1 border-0 focus:ring-2 focus:ring-blue-500" />
        </div> -->


      </div>

      <div class="flex items-center">
        <Checkbox id="terms" class="w-4 h-4 text-orange-600 focus:ring-orange-400 dark:border-gray-600"/>
        <Label for="terms" class="ml-2 block text-sm text-orange-700 dark:text-gray-300">I agree to the <a href="#" class="text-orange-600 hover:underline dark:hover:text-orange-500">Terms and Conditions</a>.</Label>
      </div>

      <Button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 focus:ring-4 dark:focus:ring-orange-700 focus:ring-orange-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white">Register</Button>
    </form>
  </div>
</div>
</template>
