<template>
    <div>
  
      <!-- Radix Dialog for Sign Up -->
      <Dialog v-slot="{ }">
      <!-- Button to open the sign-up dialog -->
      <DialogTrigger asChild>
        <Button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create New Account
        </button>
      </DialogTrigger>
        <DialogContent>
          <div class="bg-white rounded-lg shadow-lg w-full max-w-m p-6">
            <h2 class="text-2xl font-bold mb-4 text-center">Sign Up</h2>
  
            <!-- Display error message if there is any -->
            <div v-if="errorMessage" class="bg-red-100 text-red-700 p-2 rounded mb-4">
              {{ errorMessage }}
            </div>
  
            <form @submit.prevent="signUp">
              <!-- Email input -->
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                  v-model="email"
                  type="email"
                  id="email"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
  
              <!-- Password input -->
              <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input
                  v-model="password"
                  type="password"
                  id="password"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
  
              <!-- Sign up button -->
              <button
                type="submit"
                class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                :disabled="loading"
              >
                <span v-if="loading">Signing Up...</span>
                <span v-else>Sign Up</span>
              </button>
            </form>
          </div>
        </DialogContent>
    </Dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useNuxtApp } from '#app'; // For accessing Supabase in Nuxt 3
import { DialogClose, DialogContent, Dialog,DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from 'vue-toastification';
  
  // Reactive state for email, password, and form loading status
  const email = ref('');
  const password = ref('');
  const loading = ref(false);
  const errorMessage = ref('');
  
  // Access Supabase from Nuxt
  const supabase = useSupabaseClient();
  
  const toast = useToast();
  // Sign up function
  const signUp = async () => {
    loading.value = true;
    errorMessage.value = '';
  
    // Attempt to sign up the user with Supabase
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
  
    if (error) {
      // Show error message if sign-up fails
      errorMessage.value = error.message;
    } else {
      // Reset the form on successful sign-up
      email.value = '';
      password.value = '';
      toast.success("Sign up successful! Please check your email to confirm your account.", {
        timeout: 5000,
      });
    }
  
    loading.value = false;
  };
  </script>
  
  <style scoped>
  /* Custom styling if needed */
  </style>
  