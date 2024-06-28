<script setup lang="ts">
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { Progress } from '@/components/ui/progress';

const props = defineProps(['venueListing']);
console.log(props.venueListing);

const rules = [
  { label: 'Non smoking', prop: 'nonSmoking', handler: setNonSmoking },
  { label: 'Mask required', prop: 'maskRequired', handler: setMaskRequired },
  { label: 'No pets', prop: 'noPets', handler: setNoPets },
  { label: 'No commercial photography', prop: 'noCommercialPhotography', handler: setNoCommercialPhotography },
  { label: 'Security cameras on property', prop: 'securityCameras', handler: setSecurityCameras },
  { label: 'Post event cleaning required', prop: 'postEventCleaning', handler: setPostEventCleaning },
  { label: 'Must climb stairs', prop: 'mustClimbStairs', handler: setMustClimbStairs },
  { label: 'Open space (No gate or lock)', prop: 'openSpace', handler: setOpenSpace },
  { label: 'Additional Insurance', prop: 'additionalInsurance', handler: setAdditionalInsurance },
];

function setNonSmoking(toggleState: boolean) {
  props.venueListing.nonSmoking = toggleState;
}

function setMaskRequired(toggleState: boolean) {
  props.venueListing.maskRequired = toggleState;
}

function setNoPets(toggleState: boolean) {
  props.venueListing.noPets = toggleState;
}

function setNoCommercialPhotography(toggleState: boolean) {
  props.venueListing.noCommercialPhotography = toggleState;
}

function setSecurityCameras(toggleState: boolean) {
  props.venueListing.securityCameras = toggleState;
}

function setPostEventCleaning(toggleState: boolean) {
  props.venueListing.postEventCleaning = toggleState;
}

function setMustClimbStairs(toggleState: boolean) {
  props.venueListing.mustClimbStairs = toggleState;
}

function setOpenSpace(toggleState: boolean) {
  props.venueListing.openSpace = toggleState;
}

function setAdditionalInsurance(toggleState: boolean) {
  props.venueListing.additionalInsurance = toggleState;
}
</script>

<template>
  <div class="bg-gray-100 dark:bg-black min-h-screen py-10 flex justify-center items-center">
    <div class="w-full max-w-4xl mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle class="text-2xl font-bold text-gray-900 dark:text-white">Reservation Rules</CardTitle>
          <CardDescription class="text-sm text-gray-500 dark:text-gray-300">Select the rules that apply to reservations at your venue.</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-6">
            <div v-for="rule in rules" :key="rule.prop" class="flex items-center justify-between p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <span class="text-lg font-semibold text-gray-900 dark:text-white">{{ rule.label }}</span>
              <Switch :default-checked="props.venueListing[rule.prop]" @update:checked="rule.handler" />
            </div>
          </div>
        </CardContent>
        <div class="flex justify-between items-center p-4">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="90" />
          <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
            <div class="flex items-center">
              Next
              <ArrowRight class="w-4 h-4 ml-2" />
            </div>
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>
