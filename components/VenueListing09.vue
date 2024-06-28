<script setup lang="ts">
import { ref } from 'vue';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { Progress } from '@/components/ui/progress';

const props = defineProps(['venueListing']);
console.log(props.venueListing);

function priceEnabled(toggleState: boolean) {
  props.venueListing.priceEnabled = toggleState
}

function sponsorshipOption(toggleState: boolean) {
  props.venueListing.sponsorshipOption = toggleState
}
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10 flex justify-center items-center">
    <div class="w-full max-w-4xl mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Rental and Sponsorship Options</CardTitle>
          <CardDescription>Configure the rental payment settings and sponsorship option for your venue.</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 py-4">
            <div class="flex items-center space-x-3">
              <CardTitle>Enable Payment Option</CardTitle>
              <CardDescription>Allow users to rent the venue at an hourly rate.</CardDescription>
            </div>
            <Switch :default-checked="props.venueListing.priceEnabled" @update:checked="priceEnabled" id="displayPrice" />
          </div>
          <div v-if="props.venueListing.priceEnabled" class="py-4">
            <Input v-model="props.venueListing.price" placeholder="Hourly Price (e.g. If the rent is $50/hour, please enter JUST the number 50)" class="w-full border-gray-300 rounded-md dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"/>
          </div>
          <div class="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 py-4">
            <div class="flex items-center space-x-3">
              <CardTitle>Offer Venue for Sponsorship</CardTitle>
              <CardDescription>Provide an option to accept partnership or free venue requests for selected events as sponsor (you will receive a request and you can review, accept or reject it).</CardDescription>
            </div>
            <Switch :default-checked="props.venueListing.sponsorshipOption" @update:checked="sponsorshipOption" id="displaySponsorship" />
          </div>
        </CardContent>

        <div class="flex justify-between items-center p-4">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="80"  />
          <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
            <div  class="flex items-center">
              Next
              <ArrowRight class="w-4 h-4 ml-2" />
            </div>
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>
