<script setup lang="ts">
const user = useSupabaseUser()
</script>

<template>
  <div >
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="user" />
    <div v-else>
      <h1 class="title">You need to be logged in to view this page</h1>
      <NuxtLink to="/login">Login</NuxtLink>
    </div>
  </div>
  </div>
</template>