
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
import { useToast } from 'vue-toastification';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

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
const events = ref([])
const selectedEvent = ref(null)



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

const disabled = ref(true)
const message = ref("Request Booking")

async function getEvents() {
  const { data, error } = await supabase
    .from('AllEvents')
    .select('*')
    .eq('created_by', user.value.id)
  if (data) {
    loading.value = false
    events.value = data
  }
}

async function checkDisable(){
    try {
    const eventId = selectedEvent?.value?.id ?? null;
    // Query the table for rows where the property is true
    let query = supabase
      .from("VenueBookings")
      .select('*', { count: 'exact' })  // `count: 'exact'` is important to return the row count
      .eq("venue_id", props.venue.id)
      .eq("requesting_user_id", user.value.id);
      if (eventId === null) {
        query = query.is('event_id', null);
      } else {
        query = query.eq('event_id', eventId);
      }
    const { data, error, count } = await query;
    if(count > 0){
        disabled.value = true
        message.value = "Booking Requested"
        return
    }
    // Handle errors
    if (error) throw error;

    } catch (error) {
        console.error('Error checking true property count:', error.message);
    }
    try {
    // Query the table for rows where the property is true
    const { data, error, count } = await supabase
      .from("VenueBookings")
      .select('*', { count: 'exact' })  // `count: 'exact'` is important to return the row count
      .eq("requesting_user_id", user.value.id)
      .eq("is_cancelled", false)
      .eq("is_request", true);          // Match the property set to true
    if(count > 5){
        disabled.value = true
        message.value = "Exceeded Booking Request Limit"
        return
    }
    // Handle errors
    if (error) throw error;

    } catch (error) {
        console.error('Error checking true property count:', error.message);
    }
    try {
    // Query the table for rows where the property is true
    const { data, error, count } = await supabase
      .from("VenueBookings")
      .select('*', { count: 'exact' })  // `count: 'exact'` is important to return the row count
      .eq("venue_id", props.venue.id);          // Match the property set to true
    if(count > 5){
        disabled.value = true
        message.value = "Venue Requests Disabled"
        return
    }
    // Handle errors
    if (error) throw error;

    } catch (error) {
        console.error('Error checking true property count:', error.message);
    }
    disabled.value = false;
    message.value = "Request Booking"
}

async function bookingActivity() {

  const booking = {
    requesting_user_id: user.value?.id,
    venue_owner_id: props.venue.createdBy,
    event_start_date: startDate.value,
    event_end_date: endDate.value,
    event_start_time: startTime.value,
    event_end_time: endTime.value,
    event_type: eventStyle.value,
    number_of_guests: numberOfGuests.value,
    venue_id: props.venue.id,
    event_id: selectedEvent?.value?.id,
  }

  const toast = useToast();

  const { data, error } = await supabase
    .from('VenueBookings') // Specify the table name
    .insert([
      booking // Object representing the new row
    ])
    .select(); // Return the newly inserted row

  if (error) {
    console.error('Error inserting data:', error);
  } else {
    toast.success("Booking Request Sent", {
        timeout: 5000,
      });
    console.log('New row inserted:', data);
    checkDisable();
  }
}

function selectEvent(event) {
  selectedEvent.value = event
  startDate.value = new Date(event.event_start_date)
  endDate.value = new Date(event.event_end_date)
  startTime.value = event.event_start_time
  endTime.value = event.event_end_time
  eventStyle.value = event.event_type
  numberOfGuests.value = event.number_of_guests
  checkDisable()
}

onMounted(async () => {
    await checkDisable();
    await getEvents();
})
</script>

<template>
  <div class="bg-white dark:bg-black p-6 rounded-md shadow-lg w-1/3  ">
    <div class="space-y-4">

      <div class="grid grid-cols-1 gap-4">
        <h3 class="font-semibold text-lg mb-2">Book this venue: </h3>

        <DropdownMenu>
          <DropdownMenuTrigger class=" mb-4 w-full rounded-md border border-gray-300 dark:border-orange-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
            <span>{{ selectedEvent?.title || 'Select your event' }}</span>
            <ChevronDown class="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </DropdownMenuTrigger>
          <DropdownMenuContent class="rounded-md border border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg py-1">
            <DropdownMenuItem v-for="event in events" :key="event.id" @click="selectEvent(event)">
              {{ event.title }}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="selectedEvent = null" class="hover:bg-orange-200 dark:hover:bg-orange-700">
              <XCircle class="mr-2 text-orange-500 dark:text-orange-300" />No event created yet.
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Popover>
          <PopoverTrigger as-child>
            <Button :disabled="!!selectedEvent" variant="outline" class="w-full flex justify-between items-center">
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
            <Button :disabled="!!selectedEvent" variant="outline" class="w-full flex justify-between items-center">
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
        <Input :disabled="!!selectedEvent" v-model="startTime" type="time" class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" />
        <Input :disabled="!!selectedEvent" v-model="endTime" type="time" class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" />
      </div>

      <Input :disabled="!!selectedEvent" v-model="eventStyle" class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" placeholder="Event Type" />

      <Input :disabled="!!selectedEvent" v-model="numberOfGuests" type="number" class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" placeholder="Number of Guests" />

      <Textarea v-model="note" placeholder="Additional notes" class="border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm resize-none" />

      <Button @click="bookingActivity" :disabled="disabled" class="w-full OrangeCol font-semibold text-white py-2 rounded-md transition ease-in-out duration-150 hover:bg-orange-400">
        {{ message }}
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