
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

const supabase = useSupabaseClient()

const user = useSupabaseUser()


const currentStep = ref(1);

const newVolunteerListing = ref({
  createdBy: user.value?.id,
  volunteerTags: [],
  location: "",
  travelOption: false,
  available: true,
  volunteerDescription: ""

});


function addVolunteerListing() {
  console.log(newVolunteerListing.value)
  supabase.from('AllVolunteers').insert([
    newVolunteerListing.value
  ]).then(response => {
    console.log(response)
  }).catch(error => {
    console.log(error)
  })
}

function nextStep() {
  currentStep.value += 1;
  window.scrollTo(0, 0);
}

function previousStep() {
  currentStep.value -= 1;
  window.scrollTo(0, 0);
}

</script>

<template>
  <Button class=" text-l ml-14 mt-6 bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold" @click="addVolunteerListing">Save</Button>
  <div>
    <VolunteerListing01 :volunteer-listing="newVolunteerListing" v-show="currentStep === 1" @next-step="nextStep" @previous-step="previousStep"/>
    <VolunteerListing02 :volunteer-listing="newVolunteerListing" v-show="currentStep === 2" @next-step="nextStep" @previous-step="previousStep"/>
    <VolunteerListing03 :volunteer-listing="newVolunteerListing" v-show="currentStep === 3" @next-step="nextStep" @previous-step="previousStep"/>
    <VolunteerListing04 :volunteer-listing="newVolunteerListing" v-show="currentStep === 4" @next-step="nextStep" @previous-step="previousStep"/>
    <VolunteerListing05 :volunteer-listing="newVolunteerListing" v-show="currentStep === 5" @next-step="nextStep" @previous-step="previousStep"/>

  </div>


</template>
