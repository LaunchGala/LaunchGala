<script setup lang="ts">

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, Edit2, Mail, MapPin, Phone, Twitter, Facebook, Instagram, Linkedin, } from 'lucide-vue-next';

const supabase = useSupabaseClient()

const loading = ref(true)
const full_name = ref('')
const website = ref('')
const avatar_path = ref('')

loading.value = true
const user = useSupabaseUser()

const { data } = await supabase
  .from('profiles')
  .select(`full_name, website, avatar_url`)
  .eq('id', user.value.id)
  .single()

if (data) {
  full_name.value = data.full_name
  website.value = data.website
  avatar_path.value = data.avatar_url
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
</script>

<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <ProfileAvatar v-model:path="avatar_path" @upload="updateProfile" />
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="user.email" disabled />
    </div>
    <div>
      <label for="full_name">Name</label>
      <input id="full_name" type="text" v-model="full_name" />
    </div>
    <div>
      <label for="website">Website</label>
      <input id="website" type="url" v-model="website" />
    </div>

    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>




  <div class="mx-auto max-w-4xl py-8 px-6 bg-white dark:bg-black rounded-lg shadow-md space-y-6">
    <div class="border-b dark:border-gray-700 pb-4">
      <div class="flex items-center space-x-4">
        <ProfileAvatar v-model:path="avatar_path" @upload="updateProfile" />

        <div class="flex-grow">
          <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ full_name }}</h1>
          <p class="text-gray-500 dark:text-gray-400">@pinky</p>
        </div>
        <Button variant="secondary" class="flex items-center gap-2">
          <Edit2 class="w-5 h-5" />
          Edit Profile
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
            <Input id="jobTitle" disabled value="UX/UI Designer" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="company">Company</label>
            <Input id="company" disabled value="Design Studio" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="location">Location</label>
            <Input id="location" disabled value="New York, NY" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
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
            <Input id="email" disabled :value="user.email" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="phone">Phone</label>
            <Input id="phone" disabled value="+1234567890" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-600 dark:text-gray-400" for="website">Website</label>
            <Input id="website" disabled value="+1234567890" class="mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 flex space-x-2">
        <a href="#" class="text-blue-600 hover:text-blue-700 dark:hover:text-blue-300">
          <Twitter class="w-6 h-6" />
        </a>
        <a href="#" class="text-blue-800 hover:text-blue-900 dark:hover:text-blue-500">
          <Facebook class="w-6 h-6" />
        </a>
        <a href="#" class="text-pink-600 hover:text-pink-700 dark:hover:text-pink-400">
          <Instagram class="w-6 h-6" />
        </a>
        <a href="#" class="text-blue-600 hover:text-blue-700 dark:hover:text-blue-300">
          <Linkedin class="w-6 h-6" />
        </a>
      </div>
    <div>
      <div class="flex items-center space-x-2">
        <MapPin class="w-6 h-6 text-gray-600 dark:text-gray-400" />
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">About Me</h3>
      </div>
      <Textarea disabled placeholder="A short bio goes here." value="I'm a UX/UI designer with a passion for creating elegant solutions that delight users. With over 5 years of industry experience, I have a proven track record of delivering successful projects." class="mt-4 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700" rows="4"></Textarea>
    </div>
    <div class="flex items-center justify-between">
      <Button class="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white">
        <BuildingSkyscraper class="w-5 h-5" />
        View Company Profile
      </Button>
      <Button class="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-300">
        <Phone class="w-5 h-5" />
        Call
      </Button>
    </div>
  </div>


</template>