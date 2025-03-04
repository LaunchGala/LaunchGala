
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

const newEvent = ref({
  created_by: user.value?.id,
  title: '',
  description: '',
  invite_only: false,
  ticket_price: 0,
  event_type: '',
  industries: [],
  images: [],
  event_start_date: new Date(),
  event_end_date: new Date(),
  event_start_time: '12:00',
  event_end_time: '14:00',
  location: '',
  agenda: '',
  link: '',
  allow_venue_offering: true,
  allow_volunteers_offering: true,
  allow_sponsorship_offering: true,
  allow_expertise_offering: true,
  allow_vendors_offering: true,
  allow_registration_request: true,
  is_published: false,
  is_tbd: false,




});


const toast = useToast();

async function publishEvent(isPublished: boolean){
  var errors = validateEventListing(newEvent.value);
  if(errors.length > 0){
    toast.error("Error: " + errors[0], {
        timeout: 5000,
      });
    return;
  }
  newEvent.value.is_published = !newEvent.value.is_published;
  var isPublished = newEvent.value.is_published;
  var toastText = isPublished ? "Venue Published" : "Venue Unpublished";
  console.log(newEvent.value)
  try {
    // Save venue to `AllVenues`
    const { data, error } = await supabase
      .from('AllEvents')
      .upsert([newEvent.value])
      .select(); // ✅ Ensure we retrieve the inserted/updated row(s)

    if (error) {
      throw error;
    }

    if (data && data.length > 0) {
      newEvent.value.id = data[0].id; // ✅ Store the Supabase ID back in the object
      console.log("New Event ID:", newEvent.value.id);
    }

    toast.success(toastText, { timeout: 5000 });

  } catch (error) {
    console.error("Error:", error);
    newEvent.value.is_published = !isPublished;
    toast.error("Error: Event Not Published", { timeout: 5000 });
  }
}

async function addEvent() {
  console.log(newEvent.value);

  try {
    // Save venue to `AllVenues`
    const { data, error } = await supabase
      .from('AllEvents')
      .upsert([newEvent.value])
      .select(); // ✅ Ensure we retrieve the inserted/updated row(s)

    if (error) {
      throw error;
    }

    if (data && data.length > 0) {
      newEvent.value.id = data[0].id; // ✅ Store the Supabase ID back in the object
      console.log("New Event ID:", newEvent.value.id);
    }

    toast.success("Event Saved", { timeout: 1000 });

  } catch (error) {
    console.error("Error:", error);
    toast.error("Error: Event Not Saved", { timeout: 5000 });
  }
}

function validateEventListing(event: any) {
  const errors: string[] = [];

  if (!event.title || event.title.trim() === '') {
    errors.push("Title is required.");
  }

  if (!event.location || event.location.trim() === '') {
    errors.push("Location is required.");
  }

  if (!event.event_type || event.event_type.trim() === '') {
    errors.push("Event type must be selected.");
  }

  if (!Array.isArray(event.industries) || event.industries.length < 1) {
    errors.push("At least 1 industry must be selected.");
  }

  if (!event.event_start_date || !event.event_end_date) {
    errors.push("Start and end dates are required.");
  }
  if (event.event_start_date >= event.event_end_date) {
    errors.push("Start date must be before end date.");
  }
  if (!event.event_start_time || !event.event_end_time) {
    errors.push("Start and end times are required.");
  }
  if (event.event_start_time >= event.event_end_time) {
    errors.push("Start time must be before end time.");
  }

  return errors; // Returns an array of errors (empty if valid)
}
function nextStep(item) {
  if(!!item){
    newEvent.value = item;
    newEvent.value.event_start_date = new Date(item.event_start_date + 'T00:00:00');
    newEvent.value.event_end_date = new Date(item.event_end_date + 'T00:00:00');
  }
  currentStep.value += 1;
  window.scrollTo(0, 0);
  addEvent()
}

function previousStep() {
  currentStep.value -= 1;
  window.scrollTo(0, 0);
}

</script>

<template>
  <div>
    <EventCreating01 :event="newEvent" v-show="currentStep === 1" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating02 :event="newEvent" v-show="currentStep === 2" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating03 :event="newEvent" v-show="currentStep === 3" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating04 :event="newEvent" v-show="currentStep === 4" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating05 :event="newEvent" v-show="currentStep === 5" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating06 :event="newEvent" v-show="currentStep === 6" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating07 :event="newEvent" v-show="currentStep === 7" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating08 :event="newEvent" v-show="currentStep === 8" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating09 :event="newEvent" v-show="currentStep === 9" :is-visible="currentStep === 9" @next-step="nextStep" @previous-step="previousStep" @publish="publishEvent"/>     
  </div>


</template>
