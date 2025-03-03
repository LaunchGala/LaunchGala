
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { useToast } from 'vue-toastification';
import { is } from 'date-fns/locale';

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
  is_published: false
});


const toast = useToast();

async function publishVenueListing(){
  var errors = validateVenueListing(newVenueListing.value);
  if(errors.length > 0){
    toast.error("Error: " + errors[0], {
        timeout: 5000,
      });
    return;
  }
  newVenueListing.value.is_published = !newVenueListing.value.is_published;
  var isPublished = newVenueListing.value.is_published;
  var toastText = isPublished ? "Venue Published" : "Venue Unpublished";
  console.log(newVenueListing.value)
  try {
    // Save venue to `AllVenues`
    const { data, error } = await supabase
      .from('AllVenues')
      .upsert([newVenueListing.value])
      .select(); // ✅ Ensure we retrieve the inserted/updated row(s)

    if (error) {
      throw error;
    }

    if (data && data.length > 0) {
      newVenueListing.value.id = data[0].id; // ✅ Store the Supabase ID back in the object
      console.log("New Venue ID:", newVenueListing.value.id);
    }

    toast.success(toastText, { timeout: 5000 });

  } catch (error) {
    console.error("Error:", error);
    newVenueListing.value.is_published = !isPublished;
    toast.error("Error: Venue Not Published", { timeout: 5000 });
  }
}

async function addVenueListing() {
  console.log(newVenueListing.value);

  try {
    // Save venue to `AllVenues`
    const { data, error } = await supabase
      .from('AllVenues')
      .upsert([newVenueListing.value])
      .select(); // ✅ Ensure we retrieve the inserted/updated row(s)

    if (error) {
      throw error;
    }

    if (data && data.length > 0) {
      newVenueListing.value.id = data[0].id; // ✅ Store the Supabase ID back in the object
      console.log("New Venue ID:", newVenueListing.value.id);
    }

    toast.success("Venue Saved", { timeout: 1000 });

  } catch (error) {
    console.error("Error:", error);
    toast.error("Error: Venue Not Saved", { timeout: 5000 });
  }
}
function validateVenueListing(venue: any) {
  const errors: string[] = [];

  if (!venue.title || venue.title.trim() === '') {
    errors.push("Title is required.");
  }

  if (!venue.address || venue.address.trim() === '') {
    errors.push("Address is required.");
  }

  if (!venue.description || venue.description.trim() === '') {
    errors.push("Description is required.");
  }

  if (!venue.venueType || venue.venueType.trim() === '') {
    errors.push("At least one venue type must be selected.");
  }

  if (!Array.isArray(venue.eventType) || venue.eventType.length === 0) {
    errors.push("At least one event type must be selected.");
  }

  if (!Array.isArray(venue.images) || venue.images.length < 4) {
    errors.push("At least 4 images are required.");
  }

  if (venue.capacity < 0) {
    errors.push("Capacity cannot be negative.");
  }

  if (venue.price < 0) {
    errors.push("Price cannot be negative.");
  }

  return errors; // Returns an array of errors (empty if valid)
}
function nextStep(item) {
  if(!!item){
    newVenueListing.value = item;
  }
  currentStep.value += 1;
  window.scrollTo(0, 0);
  addVenueListing()
}

function previousStep() {
  currentStep.value -= 1;
  window.scrollTo(0, 0);
}
// Reactive array to hold the list of rules
const rules = ref<string[]>([]);

</script>

<template>
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
    <VenueListing10 :venue-listing="newVenueListing" :rules="rules" v-show="currentStep === 10" @next-step="nextStep" @previous-step="previousStep"/>    
    <VenueListing11 :venue-listing="newVenueListing" v-show="currentStep === 11" :is-visible="currentStep === 11" @next-step="nextStep" @previous-step="previousStep" @publish="publishVenueListing"/>    
  </div>


</template>
