<!-- pages/login.vue -->
<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input type="text" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useAuthStore } from '~/stores/auth'
  import { useSupabaseClient } from '@supabase/supabase-js'
  
  export default {
    setup() {
      const email = ref('')
      const password = ref('')
      const authStore = useAuthStore()
      const supabase = useSupabaseClient()
  
      const login = async () => {
        try {
          const { user, error } = await supabase.auth.signIn({
            email: email.value,
            password: password.value
          })
          if (error) throw error
          authStore.login()
          navigateTo('/')
        } catch (error) {
          console.error('Error logging in:', error.message)
        }
      }
  
      return { email, password, login }
    }
  }
  </script>
  