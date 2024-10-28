
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { useToast } from 'vue-toastification';

const supabase = useSupabaseClient()

const user = useSupabaseUser()


const selectedStyle = ref('');
const currentStep = ref(1);

const newVenueListing = ref({
  createdBy: user.value?.id,
  title: '',
  address: '',
  addressExact: true,
  description: '',
  capacity: 0,
  price: 0,
  priceEnabled: false, 
  venueType: [],
  amenities: [],
  eventType: [],
  images: [],
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
  is_published: true
});


const toast = useToast();

function publishVenueListing(isPublished: boolean){
  newVenueListing.value.is_published = isPublished;
  var toastText = isPublished ? "Venue Published" : "Venue Unpublished";
  console.log(newVenueListing.value)
  supabase.from('AllVenues').upsert([
    newVenueListing.value
  ]).then(response => {
    console.log(response)
    toast.success(toastText, {
        timeout: 5000,
      });
  }).catch(error => {
    console.log(error)
    toast.error("Error: Venue Not Updated", {
        timeout: 5000,
      });
  })
}

function addVenueListing() {
  console.log(newVenueListing.value)
  supabase.from('AllVenues').upsert([
    newVenueListing.value
  ]).then(response => {
    console.log(response)
    toast.success("Venue Saved", {
        timeout: 5000,
      });
  }).catch(error => {
    console.log(error)
    toast.error("Error: Venue Not Saved", {
        timeout: 5000,
      });
  })
}

function nextStep(item) {
  if(!!item){
    newVenueListing.value = item;
  }
  currentStep.value += 1;
  window.scrollTo(0, 0);
}

function previousStep() {
  currentStep.value -= 1;
  window.scrollTo(0, 0);
}

</script>

<template>
  <Button v-show="currentStep > 1" class=" text-l ml-14 mt-6 bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold" @click="addVenueListing">Save</Button>
          <Button v-show="currentStep > 1 && !newVenueListing.is_published" @click="publishVenueListing(true)">
            Publish
          </Button>
          <Button v-show="currentStep > 1 && newVenueListing.is_published" @click="publishVenueListing(false)">
            Unpublish
          </Button>
  <div>
    <VenueListing01 :venue-listing="newVenueListing" v-show="currentStep === 1" @next-step="nextStep" @previous-step="previousStep"/>
    <VenueListing02 :venue-listing="newVenueListing" v-show="currentStep === 2" @next-step="nextStep" @previous-step="previousStep"/>
    <VenueListing03 :venue-listing="newVenueListing" v-show="currentStep === 3" @next-step="nextStep" @previous-step="previousStep"/>
    <VenueListing04 :venue-listing="newVenueListing" v-show="currentStep === 4" @next-step="nextStep" @previous-step="previousStep"/>
    <VenueListing05 :venue-listing="newVenueListing" v-show="currentStep === 5" @next-step="nextStep" @previous-step="previousStep"/>
    <VenueListing06 :venue-listing="newVenueListing" v-show="currentStep === 6" @next-step="nextStep" @previous-step="previousStep"/>
    <VenueListing07 :venue-listing="newVenueListing" v-show="currentStep === 7" @next-step="nextStep" @previous-step="previousStep"/>
    <VenueListing08 :venue-listing="newVenueListing" v-show="currentStep === 8" @next-step="nextStep" @previous-step="previousStep"/>
    <VenueListing09 :venue-listing="newVenueListing" v-show="currentStep === 9" @next-step="nextStep" @previous-step="previousStep"/>    
    <VenueListing10 :venue-listing="newVenueListing" v-show="currentStep === 10" @next-step="nextStep" @previous-step="previousStep"/>    
    <VenueListing11 :venue-listing="newVenueListing" v-show="currentStep === 11" @next-step="nextStep" @previous-step="previousStep"/>    
  </div>


</template>
