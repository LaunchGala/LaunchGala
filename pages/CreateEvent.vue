
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
  is_published: false




});


const toast = useToast();

function publishEvent(isPublished: boolean){
  newEvent.value.is_published = isPublished;
  var toastText = isPublished ? "Event Published" : "Event Unpublished";
  console.log(newEvent.value)
  supabase.from('AllEvents').upsert([
  newEvent.value
  ]).then(response => {
    console.log(response)
    toast.success(toastText, {
        timeout: 5000,
      });
  }).catch(error => {
    console.log(error)
    toast.error("Error: Event Not Updated", {
        timeout: 5000,
      });
  })
}

function addEvent() {
  console.log(newEvent.value)
  supabase.from('AllEvents').upsert([
  newEvent.value
  ]).then(response => {
    console.log(response)
    toast.success("Event Saved", {
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
    newEvent.value = item;
    newEvent.value.event_start_date = new Date(item.event_start_date + 'T00:00:00');
    newEvent.value.event_end_date = new Date(item.event_end_date + 'T00:00:00');
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
  <Button class=" text-l ml-14 mt-6 bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold" @click="addEvent">Save</Button>
  <Button v-show="currentStep > 1 && !newEvent.is_published" @click="publishEvent(true)">
    Publish
  </Button>
  <Button v-show="currentStep > 1 && newEvent.is_published" @click="publishEvent(false)">
    Unpublish
  </Button>
  <div>
    <EventCreating01 :event="newEvent" v-show="currentStep === 1" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating02 :event="newEvent" v-show="currentStep === 2" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating03 :event="newEvent" v-show="currentStep === 3" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating04 :event="newEvent" v-show="currentStep === 4" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating05 :event="newEvent" v-show="currentStep === 5" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating06 :event="newEvent" v-show="currentStep === 6" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating07 :event="newEvent" v-show="currentStep === 7" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating08 :event="newEvent" v-show="currentStep === 8" @next-step="nextStep" @previous-step="previousStep"/>
    <EventCreating09 :event="newEvent" v-show="currentStep === 9" @next-step="nextStep" @previous-step="previousStep"/>     
  </div>


</template>
