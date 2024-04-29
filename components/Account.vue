<script setup lang="ts">

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, Edit2, Mail, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-vue-next';

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




loading.value = true
const user = useSupabaseUser()

const { data } = await supabase
  .from('profiles')
  .select(`full_name, website, avatar_url, user_phone, job_title, user_company, user_location, user_about, user_linkedin, user_youtube, user_facebook, user_twitter`)
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
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="jobTitle">Job Title</label>
            <Input id="jobTitle" :disabled="editDisabled" v-model="job_title" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="company">Company</label>
            <Input id="company" :disabled="editDisabled" v-model="user_company" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="location">Location</label>
            <Input id="location" :disabled="editDisabled" v-model="user_location" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
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
      <Textarea :disabled="editDisabled" v-model="user_about" class="mt-4 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" rows="4"></Textarea>
    </div>

  </div>


</template>