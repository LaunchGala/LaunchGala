
<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-vue-next';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { Progress } from '@/components/ui/progress';

const props = defineProps(['venueListing']);

const mapConfig = 
console.log(props.venueListing);
function updateChecked(toggleState: boolean) {
  props.venueListing.addressExact = toggleState
}
const updateAddress = (newAddress: string) => {
  props.venueListing.address = newAddress
}
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Enter Venue Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="relative w-full mb-6">
            <div>
              <AddressSelection :address="props.venueListing.address" @update-address="updateAddress" class="travel-map"/>
            </div>
          </div>
        </CardContent>
        <div class="flex justify-between items-center p-4">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="50"  />
          <Button @click="$emit('nextStep')" :disabled="props.venueListing.address === null || props.venueListing.address === ''" variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
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
