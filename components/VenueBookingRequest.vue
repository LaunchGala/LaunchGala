
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

  const activity = {
    created_by: user.value?.id,
    object_owner: '5fc99cad-b05e-439b-8c24-9197251e9e6c',
    activity_content: {
      eventName: 'Mini Kitty',
      eventType: 'Product Launch',
      numberOfGuests: '350',
      tickets: 'Free',
      eventDate: '07/01/2024',
      eventTime: '17:00 - 23:00',
      eventDescription: 'Mini Kitty launch',
      eventMessages: [
        { userName: full_name.value, content: 'Love your venue and want to book it for this event' },
        { userName: full_name.value, content: 'Please confirm availability'}
      ],
      userAvatar: avatar_url.value,
      full_name: full_name.value,
      venuePayment: 'Paid',
      badges: ['Sponsor request', 'Paid request']
    },
    activity_object: {
      startDate: startDate.value,
      endDate: endDate.value,
      startTime: startTime.value,
      endTime: endTime.value,
      eventStyle: eventStyle.value,
      note: note.value,
      numberOfGuests: numberOfGuests.value,
    }

  }
  const { data, error } = await supabase
    .from('activity_feed') // Specify the table name
    .insert([
      activity // Object representing the new row
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
              <span class="flex-1">{{ startDate.value ? format(startDate.value, 'PPP') : 'Start Date' }}</span>
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
              <span class="flex-1">{{ endDate.value ? format(endDate.value, 'PPP') : 'End Date' }}</span>
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

      <Select v-model="eventStyle" class="border-gray-300 focus:border-indigo-500 rounded-md shadow-sm">
        <SelectTrigger class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm w-full">
          <SelectValue placeholder="Select event type" />
          <!-- <ChevronDown class="ml-2 h-5 w-5" /> -->
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="wedding">Wedding</SelectItem>
            <SelectItem value="corporate">Corporate Event</SelectItem>
            <SelectItem value="birthday">Birthday Party</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

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