
<script setup lang="ts">
import { ref } from 'vue';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-vue-next';
const props = defineProps(['venueListing']);
console.log(props.venueListing);
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Enter Venue Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="mb-6">
            <Input v-model="props.venueListing.street" type="text" placeholder="Street address" class="w-full"/>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Input v-model="props.venueListing.city" type="text" placeholder="City" class="w-full"/>
            <Input v-model="props.venueListing.state" type="text" placeholder="State / Province / Region" class="w-full"/>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Input v-model="props.venueListing.zip" type="text" placeholder="ZIP / Postal Code" class="w-full"/>
            <Input v-model="props.venueListing.country" type="text" placeholder="Country" class="w-full"/>
          </div>
          <div class="mb-6">
            <label for="displayLocation" class="flex items-center gap-2">
              <span>Show exact location:</span>
              <Switch id="displayLocation" />
            </label>
          </div>
          <div class="relative h-72 w-full mb-6">
            <img src="/placeholder.svg" alt="Map placeholder" class="absolute inset-0 w-full h-full object-cover rounded-lg"/>
            <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <Button variant="default" class="flex items-center">
                <ChevronRight class="w-4 h-4 mr-2" />
                Select location on map
              </Button>
            </div>
          </div>
        </CardContent>
        <div class="flex justify-between p-4">
          <Button @click="$emit('previousStep')" as-child variant="default">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="33" class="w-1/2" />
          <Button @click="$emit('nextStep')" as-child variant="default">
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
