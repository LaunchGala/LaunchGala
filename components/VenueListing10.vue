
<script setup lang="ts">
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-vue-next';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { Progress } from '@/components/ui/progress';

 
function setNonSmoking(toggleState: boolean) {
  props.venueListing.nonSmoking = toggleState
}
function setMaskRequired(toggleState: boolean) {
  props.venueListing.maskRequired = toggleState
}
function setNoPets(toggleState: boolean) {
  props.venueListing.noPets = toggleState
}
function setNoCommercialPhotography(toggleState: boolean) {
  props.venueListing.noCommercialPhotography = toggleState
}
function setSecurityCameras(toggleState: boolean) {
  props.venueListing.securityCameras = toggleState
}
function setPostEventCleaning(toggleState: boolean) {
  props.venueListing.postEventCleaning = toggleState
}
function setMustClimbStairs(toggleState: boolean) {
  props.venueListing.mustClimbStairs = toggleState
}
function setOpenSpace(toggleState: boolean) {
  props.venueListing.openSpace = toggleState
}
function setAdditionalInsurance(toggleState: boolean) {
  props.venueListing.additionalInsurance = toggleState
}

const props = defineProps(['venueListing']);
console.log(props.venueListing);
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
            <div class="flex items-center justify-between p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <span class="text-lg font-semibold text-gray-900 dark:text-white">Non smoking</span>
              <Switch :default-checked="props.venueListing.nonSmoking" @update:checked="setNonSmoking" id="displayPrice" />

            </div>
            <div class="flex items-center justify-between p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <span class="text-lg font-semibold text-gray-900 dark:text-white">Mask required</span>
              <Switch :default-checked="props.venueListing.maskRequired" @update:checked="setMaskRequired" id="displayPrice" />

            </div>
            <div class="flex items-center justify-between p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <span class="text-lg font-semibold text-gray-900 dark:text-white">No pets</span>
              <Switch :default-checked="props.venueListing.noPets" @update:checked="setNoPets" id="displayPrice" />
            </div>
            <div class="flex items-center justify-between p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <span class="text-lg font-semibold text-gray-900 dark:text-white">No commercial photography</span>
              <Switch :default-checked="props.venueListing.noCommercialPhotography" @update:checked="setNoCommercialPhotography" id="displayPrice" />
            </div>
            <div class="flex items-center justify-between p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <span class="text-lg font-semibold text-gray-900 dark:text-white">Security cameras on property</span>
              <Switch :default-checked="props.venueListing.securityCameras" @update:checked="setSecurityCameras" id="displayPrice" />
            </div>
            <div class="flex items-center justify-between p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <span class="text-lg font-semibold text-gray-900 dark:text-white">Post event cleaning required</span>
              <Switch :default-checked="props.venueListing.postEventCleaning" @update:checked="setPostEventCleaning" id="displayPrice" />
            </div>
            <div class="flex items-center justify-between p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <span class="text-lg font-semibold text-gray-900 dark:text-white">Must climb stairs</span>
              <Switch :default-checked="props.venueListing.mustClimbStairs" @update:checked="setMustClimbStairs" id="displayPrice" />
            </div>
            <div class="flex items-center justify-between p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <span class="text-lg font-semibold text-gray-900 dark:text-white">Additional Insurance</span>
              <Switch :default-checked="props.venueListing.additionalInsurance" @update:checked="setAdditionalInsurance" id="displayPrice" />
            </div>
            <div class="flex items-center justify-between p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <span class="text-lg font-semibold text-gray-900 dark:text-white">Open space (No gate or lock)</span>
              <Switch :default-checked="props.venueListing.openSpace" @update:checked="setOpenSpace" id="displayPrice" />
            </div>
            <!-- <div class="flex items-center justify-between p-6 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <span class="text-lg font-semibold text-gray-900 dark:text-white">Others (Check with the host)</span>
              <Switch :default-checked="props.venueListing.priceEnabled" @update:checked="priceEnabled" id="displayPrice" />
            </div> -->
            <!-- Current switch sections omitted for brevity -->
          </div>
          <!-- Operating Days Section -->
          <!-- <div class="mt-8 border-t pt-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Operating Days and Hours</h3>
            <p> This is your business operating hours NOT the Venue availability</p>
            <div class="space-y-4">
              <div class="flex items-center">
                <Checkbox id="monday" />
                <label for="monday" class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200">Monday</label>
                <input type="time" class="ml-auto border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="From">
                <span class="mx-2 text-sm text-gray-500 dark:text-gray-400">to</span>
                <input type="time" class="border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="To">
              </div>
              <div class="flex items-center">
                <Checkbox id="monday" />
                <label for="monday" class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200">Monday</label>
                <input type="time" class="ml-auto border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="From">
                <span class="mx-2 text-sm text-gray-500 dark:text-gray-400">to</span>
                <input type="time" class="border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="To">
              </div>
              <div class="flex items-center">
                <Checkbox id="monday" />
                <label for="monday" class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200">Monday</label>
                <input type="time" class="ml-auto border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="From">
                <span class="mx-2 text-sm text-gray-500 dark:text-gray-400">to</span>
                <input type="time" class="border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="To">
              </div>
              <div class="flex items-center">
                <Checkbox id="monday" />
                <label for="monday" class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200">Monday</label>
                <input type="time" class="ml-auto border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="From">
                <span class="mx-2 text-sm text-gray-500 dark:text-gray-400">to</span>
                <input type="time" class="border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="To">
              </div>
              <div class="flex items-center">
                <Checkbox id="monday" />
                <label for="monday" class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200">Monday</label>
                <input type="time" class="ml-auto border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="From">
                <span class="mx-2 text-sm text-gray-500 dark:text-gray-400">to</span>
                <input type="time" class="border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="To">
              </div>
              <div class="flex items-center">
                <Checkbox id="monday" />
                <label for="monday" class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200">Monday</label>
                <input type="time" class="ml-auto border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="From">
                <span class="mx-2 text-sm text-gray-500 dark:text-gray-400">to</span>
                <input type="time" class="border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="To">
              </div>
              <div class="flex items-center">
                <Checkbox id="monday" />
                <label for="monday" class="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200">Monday</label>
                <input type="time" class="ml-auto border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="From">
                <span class="mx-2 text-sm text-gray-500 dark:text-gray-400">to</span>
                <input type="time" class="border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="To">
              </div> -->
              <!-- Other days omitted for brevity -->

        </CardContent>
        <!-- <div class="flex items-center justify-end gap-4 p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <Button variant="outline">Cancel</Button>
          <Button class="text-white bg-blue-600 hover:bg-blue-700">
            <ChevronRight class="w-4 h-4 mr-2" /> Save Changes
          </Button>
        </div> -->

        <div class="flex justify-between items-center p-4 ">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="90"  />
          <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2 ">
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
