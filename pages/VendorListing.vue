
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

const newVendorListing = ref({
  createdBy: user.value?.id,
  business_name: '',
  street: '',
  city: '',
  state: '',
  country: '',
  zip: '',
  addressExact: true,
  description: '',
  starting_price: 0,
  price_enabled: false,
  offer_available: true, 
  vendor_industry: [],
  vendor_offering: '',
  images: "/Bootstrapping.png",
  sponsorship_option: true,

});




function addVendorListing() {
  console.log(newVendorListing.value)
  supabase.from('AllVendors').insert([
    newVendorListing.value
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
  <Button class=" text-l ml-14 mt-6 bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold" @click="addVendorListing">Save</Button>
  <div>
    <VendorListing01 :vendor-listing="newVendorListing" v-show="currentStep === 1" @next-step="nextStep" @previous-step="previousStep"/>
    <VendorListing02 :vendor-listing="newVendorListing" v-show="currentStep === 2" @next-step="nextStep" @previous-step="previousStep"/>
    <!-- <VendorListing03 :Vendor-listing="newVendorListing" v-show="currentStep === 3" @next-step="nextStep" @previous-step="previousStep"/>
    <VendorListing04 :Vendor-listing="newVendorListing" v-show="currentStep === 4" @next-step="nextStep" @previous-step="previousStep"/>
    <VendorListing05 :Vendor-listing="newVendorListing" v-show="currentStep === 5" @next-step="nextStep" @previous-step="previousStep"/>
    <VendorListing06 :Vendor-listing="newVendorListing" v-show="currentStep === 6" @next-step="nextStep" @previous-step="previousStep"/>
    <VendorListing07 :Vendor-listing="newVendorListing" v-show="currentStep === 7" @next-step="nextStep" @previous-step="previousStep"/>
    <VendorListing08 :Vendor-listing="newVendorListing" v-show="currentStep === 8" @next-step="nextStep" @previous-step="previousStep"/>
    <VendorListing09 :Vendor-listing="newVendorListing" v-show="currentStep === 9" @next-step="nextStep" @previous-step="previousStep"/>    
    <VendorListing10 :Vendor-listing="newVendorListing" v-show="currentStep === 10" @next-step="nextStep" @previous-step="previousStep"/>    
    <VendorListing11 :Vendor-listing="newVendorListing" v-show="currentStep === 11" @next-step="nextStep" @previous-step="previousStep"/>     -->
  </div>


</template>
