
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

const supabase = useSupabaseClient()


const selectedStyle = ref('');
const currentStep = ref(1);

const newVenueListing = ref({
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

});


// Handlers for handling click events
const selectStyle = style => {
  selectedStyle.value = style;
};

const isSelected = style => {
  return selectedStyle.value === style;
};

function addVenueListing() {
  console.log(newVenueListing.value)
  supabase.from('AllVenues').insert([
    newVenueListing.value
  ]).then(response => {
    console.log(response)
  }).catch(error => {
    console.log(error)
  })
}
</script>

<template>
  <Button class="text-4xl font-bold" @click="addVenueListing">Big Button</Button>
  <div>
    <VenueListing01 :venue-listing="newVenueListing" v-show="currentStep === 1" @next-step="currentStep += 1" @previous-step="currentStep -= 1"/>
    <VenueListing02 :venue-listing="newVenueListing" v-show="currentStep === 2" @next-step="currentStep += 1" @previous-step="currentStep -= 1"/>
    <VenueListing03 :venue-listing="newVenueListing" v-show="currentStep === 3" @next-step="currentStep += 1" @previous-step="currentStep -= 1"/>
    <VenueListing04 :venue-listing="newVenueListing" v-show="currentStep === 4" @next-step="currentStep += 1" @previous-step="currentStep -= 1"/>
    <VenueListing05 :venue-listing="newVenueListing" v-show="currentStep === 5" @next-step="currentStep += 1" @previous-step="currentStep -= 1"/>
    <VenueListing06 :venue-listing="newVenueListing" v-show="currentStep === 6" @next-step="currentStep += 1" @previous-step="currentStep -= 1"/>
    <VenueListing07 :venue-listing="newVenueListing" v-show="currentStep === 7" @next-step="currentStep += 1" @previous-step="currentStep -= 1"/>
    <VenueListing08 :venue-listing="newVenueListing" v-show="currentStep === 8" @next-step="currentStep += 1" @previous-ste@p="currentStep -= 1"/>
    <VenueListing09 :venue-listing="newVenueListing" v-show="currentStep === 9" @next-step="currentStep += 1" @previous-ste@p="currentStep -= 1"/>    
    <VenueListing10 :venue-listing="newVenueListing" v-show="currentStep === 10" @next-step="currentStep += 1" @previous-ste@p="currentStep -= 1"/>    
    <VenueListing11 :venue-listing="newVenueListing" v-show="currentStep === 11" @next-step="currentStep += 1" @previous-ste@p="currentStep -= 1"/>    
  </div>


</template>
