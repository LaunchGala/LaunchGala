
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

const newExpert = ref({
  created_by: user.value?.id,
  profile_id: user.value?.id,
  expert_types: [],
  is_published: false,
});


const toast = useToast();

function publishExpert(isPublished: boolean){
  newExpert.value.is_published = isPublished;
  var toastText = isPublished ? "Expert Published" : "Expert Unpublished";
  console.log(newExpert.value)
  supabase.from('AllExperts').upsert([
  newExpert.value
  ]).then(response => {
    console.log(response)
    toast.success(toastText, {
        timeout: 5000,
      });
  }).catch(error => {
    console.log(error)
    toast.error("Error: Expert Not Updated", {
        timeout: 5000,
      });
  })
}

function addExpert() {
  console.log(newExpert.value)
  supabase.from('AllExperts').upsert([
  newExpert.value
  ]).then(response => {
    console.log(response)
    toast.success("Expert Saved", {
        timeout: 5000,
      });
  }).catch(error => {
    console.log(error)
    toast.error("Error: Expert Not Saved", {
        timeout: 5000,
      });
  })
}

function nextStep(item) {
  if(!!item){
    newExpert.value = item;
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
  <Button class=" text-l ml-14 mt-6 bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold" @click="addExpert">Save</Button>
  <Button v-show="currentStep > 1 && !newExpert.is_published" @click="publishExpert(true)">
    Publish
  </Button>
  <Button v-show="currentStep > 1 && newExpert.is_published" @click="publishExpert(false)">
    Unpublish
  </Button>
  <div>
    <ExpertCreating01 :event="newExpert" v-show="currentStep === 1" @next-step="nextStep" @previous-step="previousStep"/>
    <ExpertCreating02 :event="newExpert" v-show="currentStep === 2" @next-step="nextStep" @previous-step="previousStep"/>  
  </div>


</template>
