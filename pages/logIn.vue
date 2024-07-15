
<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Apple, Linkedin, Mail } from 'lucide-vue-next';

const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')

const signInWithEmail = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/confirm',
    }
  })
  if (error) console.log(error)
  if (data) console.log(data)
}

const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
  if (error) console.log(error)
  if (data) console.log(data)
}

</script>

<template>
      <div class="relative min-h-screen bg-center bg-cover"
       style="background-image: url('/Bootstrapping.png')">
  <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black transition duration-500 ease-in-out">
    <div class="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-xl transform transition duration-500 ease-in-out hover:scale-105 dark:bg-gray-800">
      <div class="text-center">
        <h2 class="font-bold text-3xl text-gray-900 dark:text-white">Sign in to your account</h2>
      </div>
      <div class="mt-8 space-y-6 animate-fade-in-up">
        <Button class="flex items-center justify-center w-full px-4 py-2 space-x-2 transition duration-200 ease-in bg-white border border-transparent rounded-md shadow-sm text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-black dark:text-white dark:hover:bg-gray-700">
          <Google class="w-4 h-4" /> <span>Sign-in with Google</span>
        </Button>
        <Button class="flex items-center justify-center w-full px-4 py-2 space-x-2 transition duration-200 ease-in bg-white border border-transparent rounded-md shadow-sm text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-black dark:text-white dark:hover:bg-gray-700">
          <Apple /> <span>Sign-in with Apple</span>
        </Button>
        <Button class="flex items-center justify-center w-full px-4 py-2 space-x-2 transition duration-200 ease-in bg-white border border-transparent rounded-md shadow-sm text-base font-medium text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-black dark:text-blue-400 dark:hover:bg-gray-700">
          <Linkedin class="w-4 h-4" /> <span>Sign-in with LinkedIn</span>
        </Button>
        <div class="my-6 border-t border-gray-300 dark:border-gray-700"></div>
        <div class="flex flex-col space-y-4">
          <Input v-model="email" type="email" class="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:border-gray-700 dark:focus:ring-indigo-500 dark:bg-gray-900" placeholder="Email Address" />
          <Input v-model="password" type="password" class="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:border-gray-700 dark:focus:ring-indigo-500 dark:bg-gray-900" placeholder="Password" />

          <Button @click="signInWithEmail" class="flex items-center justify-center w-full px-4 py-2 space-x-2 text-white transition duration-200 ease-in bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span>Continue</span> <Mail class="w-4 h-4"/>
          </Button>
          <Button @click="signInWithGoogle" class="flex items-center justify-center w-full px-4 py-2 space-x-2 text-white transition duration-200 ease-in bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span>Google!</span> <Mail class="w-4 h-4"/>
          </Button>
        </div>
      </div>
      <div class="text-center">
        <a href="#signup" class="font-medium text-indigo-600 dark:text-indigo-300 hover:text-indigo-500">Or create a new account</a>
      </div>
    </div>
  </div>
  </div>
</template>
