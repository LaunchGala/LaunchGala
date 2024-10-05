
<script setup lang="ts">
import { ref } from 'vue';
import { Calendar as CalendarIcon, Check, ChevronDown } from 'lucide-vue-next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { format } from 'date-fns';

const startDate = ref<Date | null>(new Date());
const endDate = ref<Date | null>(new Date());
const startTime = ref('12:00');
const endTime = ref('14:00');
const eventStyle = ref('');
const note = ref('');
const numberOfGuests = ref('');
const supabase = useSupabaseClient()

const user = useSupabaseUser()

const props = defineProps(['venue'])
const loading = ref(true)
const full_name = ref('')
const avatar_url = ref('')



loading.value = true

const { data } = await supabase
  .from('profiles')
  .select()
  .eq('id', user.value.id)
  .single()

if (data) {
  full_name.value = data.full_name
  avatar_url.value = data.avatar_url
}

async function bookingActivity() {

  const booking = {
    requesting_user_id: user.value?.id,
    venue_owner_id: props.venue.user_id,
    event_start_date: startDate.value,
    event_end_date: endDate.value,
    event_start_time: startTime.value,
    event_end_time: endTime.value,
    event_type: eventStyle.value,
    number_of_guests: numberOfGuests.value,
  }
  const { data, error } = await supabase
    .from('VenueBookings') // Specify the table name
    .insert([
      booking // Object representing the new row
    ])
    .select(); // Return the newly inserted row

  if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('New row inserted:', data);
  }
}

</script>

<template>
  <div class="bg-white dark:bg-black p-6 rounded-md shadow-lg w-1/3  ">
    <div class="space-y-4">

      <!-- <div class="grid grid-cols-2 gap-4 font-medium text-gray-700 dark:text-gray-200">
        <div class="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
          <span>Start:</span>
          <span>{{ startDate.value ? format(startDate.value, 'PP') : '-' }}</span>
        </div>
        <div class="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
          <span>End:</span>
          <span>{{ endDate.value ? format(endDate.value, 'PP') : '-' }}</span>
        </div>
      </div> -->

      <div class="grid grid-cols-1 gap-4">
        <h3 class="font-semibold text-lg mb-2">Book this venue: </h3>

        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline" class="w-full flex justify-between items-center">
              <CalendarIcon class="mr-2 h-5 w-5" />
              <span class="flex-1">{{ startDate ? format(startDate, 'PPP') : 'Start Date' }}</span>
              <ChevronDown class="ml-2 h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="p-4">
            <Calendar v-model="startDate" />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline" class="w-full flex justify-between items-center">
              <CalendarIcon class="mr-2 h-5 w-5" />
              <span class="flex-1">{{ endDate ? format(endDate, 'PPP') : 'End Date' }}</span>
              <ChevronDown class="ml-2 h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="p-4">
            <Calendar v-model="endDate" />
          </PopoverContent>
        </Popover>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <Input v-model="startTime" type="time" class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" />
        <Input v-model="endTime" type="time" class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" />
      </div>

      <!-- <Input v-model="numberOfGuests" type="number" class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" placeholder="Number of Guests" /> -->

      <Input v-model="eventStyle" class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" placeholder="Event Type" />

      <Input v-model="numberOfGuests" type="number" class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" placeholder="Number of Guests" />

      <Textarea v-model="note" placeholder="Additional notes" class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm resize-none" />

      <Button @click="bookingActivity" class="w-full OrangeCol font-semibold text-white py-2 rounded-md transition ease-in-out duration-150 hover:bg-orange-400">
        Booking Request
      </Button>

    </div>
  </div>
</template>
<style>
 .OrangeCol {   
  background-color: #ff6900;
 }

 .OrangeText {
  color: #ff6900;
 }

 
</style>