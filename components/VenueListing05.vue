
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
const props = defineProps(['venueListing']);
console.log(props.venueListing);

function addEventType(eventType: string) {
  if (props.venueListing.eventType.includes(eventType)) {
    console.log('eventType already exists');
  } else {
    props.venueListing.eventType = [...props.venueListing.eventType, eventType];
    console.log(props.venueListing.eventType);
  }
}
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Type of Events to host at this venue:</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div 
            @click="addEventType('Hackathon')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Hackathon</span>
              <span class="text-sm">Up to 50 guests</span>
            </div>
            <div 
            @click="addEventType('Networking')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4">Networking Event</span>
              <span class="text-sm">Up to 200 guests</span>
            </div>
            <div 
            @click="addEventType('Conference')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Pitching event</span>
              <span class="text-sm">Up to 500 guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Dinner event</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Sales expo</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">trade show</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Conference</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Seminar & workshop</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Product launch</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Corporate meetings & retreats</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Training session</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Panel discussions & roundtables</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Award ceremony & gala</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Job fair & career expo</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Academic conference</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Investor & funding meetup</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Startup accelerator & incubator</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Corporate event</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Industry-specific summit</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Press conference</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Executive & leadership forum</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Symposium</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Publishing & signing event</span>
              <span class="text-sm">500+ guests</span>
            </div>
            <div 
            @click="addEventType('Dinner')"

              class="flex flex-col items-center p-4 border rounded-lg hover:shadow-md focus:shadow-md focus:outline-none"
            >
              <span class="text-l font-semibold mb-4 ">Art show & exhibition</span>
              <span class="text-sm">500+ guests</span>
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
