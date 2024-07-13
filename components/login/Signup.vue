<template>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="signup">
        <div>
          <label for="email">Email</label>
          <input id="email" v-model="email" type="email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password" required />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  const supabase = useSupabaseClient();
  
  const signup = async () => {
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) {
      alert(error.message);
    } else {
      alert('Account created! Check your email for the confirmation link.');
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  