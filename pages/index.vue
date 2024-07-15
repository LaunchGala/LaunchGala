<template>
  <div>
    <div v-if="!isLoggedIn">
      <Login />
    </div>
    <div v-else>
      <CreateEventBox />
      <VenueSliderLanding />
      <VolunteersLanding />
      <SponsorsLanding />
      <!-- <OtherServicesLanding/> -->
      <!-- <CompanyFundingLanding/> -->
      <UpcomingEventLanding />
      <!-- <CreateEventLanding/> -->
      <!-- <RequestServiceLanding /> -->
      <FAQlanding />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useSupabaseClient, useSupabaseUser } from '@supabase/supabase-js';
import Login from '@/components/login/Signup.vue';
import CreateEventBox from '@/components/CreateEventBox.vue';
import VenueSliderLanding from '@/components/VenueSliderLanding.vue';
import VolunteersLanding from '@/components/VolunteersLanding.vue';
import SponsorsLanding from '@/components/SponsorsLanding.vue';
import UpcomingEventLanding from '@/components/UpcomingEventLanding.vue';
import FAQlanding from '@/components/FAQlanding.vue';

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const isLoggedIn = computed(() => !!user.value);

onMounted(() => {
  if (!user.value) {
    // Logic to handle unauthenticated state if needed
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>
