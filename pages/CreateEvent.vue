
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

const supabase = useSupabaseClient()

const user = useSupabaseUser()


const selectedStyle = ref('');
const currentStep = ref(1);

const newVenueListing = ref({
  createdBy: user.value?.id,
  title: '',
  street: '',
  city: '',
  state: '',
  country: '',
  zip: '',
  addressExact: true,
  description: '',
  capacity: 0,
  price: 0,
  priceEnabled: false, 
  venueType: [],
  amenities: [],
  eventType: [],
  images: "/Bootstrapping.png",
  sponsorshipOption: true,
  nonSmoking: true,
  maskRequired: false,
  noPets: true,
  noCommercialPhotography: false,
  securityCameras: true,
  postEventCleaning: false,
  mustClimbStairs: false,
  additionalInsurance: false,
  openSpace: false,




});




// function addVenueListing() {
//   console.log(newVenueListing.value)
//   supabase.from('AllVenues').insert([
//     newVenueListing.value
//   ]).then(response => {
//     console.log(response)
//   }).catch(error => {
//     console.log(error)
//   })
// }

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
  <Button class=" text-l ml-14 mt-6 bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold" @click="addVenueListing">Save</Button>
  <div>
    <EventCreating01 :venue-listing="newVenueListing" v-show="currentStep === 1" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating02 :venue-listing="newVenueListing" v-show="currentStep === 2" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating03 :venue-listing="newVenueListing" v-show="currentStep === 3" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating04 :venue-listing="newVenueListing" v-show="currentStep === 4" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating05 :venue-listing="newVenueListing" v-show="currentStep === 5" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating06 :venue-listing="newVenueListing" v-show="currentStep === 6" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating07 :venue-listing="newVenueListing" v-show="currentStep === 7" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating08 :venue-listing="newVenueListing" v-show="currentStep === 8" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating09 :venue-listing="newVenueListing" v-show="currentStep === 9" @next-step="nextStep" @previous-step="previousStep"/>    
    <VenueListing10 :venue-listing="newVenueListing" v-show="currentStep === 10" @next-step="nextStep" @previous-step="previousStep"/>    
    <VenueListing11 :venue-listing="newVenueListing" v-show="currentStep === 11" @next-step="nextStep" @previous-step="previousStep"/>    
  </div>


</template>
