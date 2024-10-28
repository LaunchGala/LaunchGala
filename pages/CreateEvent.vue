
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

const newEvent = ref({
  created_by: user.value?.id,
  title: '',
  description: '',
  invite_only: false,
  ticket_price: 0,
  event_type: '',
  industries: [],
  images: [],
  event_start_date: '',
  event_end_date: '',
  event_start_time: '',
  event_end_time: '',
  location: '',
  agenda: '',
  link: '',
  non_smoking: true,
  mask_required: false,
  no_pets: true,
  no_commercial_photography: false,
  security_cameras: true,
  is_published: false




});




 function addEvent() {
   console.log(newEvent.value)
 supabase.from('AllEvents').insert([
 newEvent.value
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
  <Button class=" text-l ml-14 mt-6 bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold" @click="addEvent">Save</Button>
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
