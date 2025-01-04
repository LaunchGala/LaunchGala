
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const startDate = ref<Date | null>(new Date());
const endDate = ref<Date | null>(new Date());
const startTime = ref('12:00');
const endTime = ref('14:00');
const eventStyle = ref('');
const note = ref('');
const numberOfGuests = ref('');
const supabase = useSupabaseClient()

const user = useSupabaseUser()

const props = defineProps(['venueId'])
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
    if(!eventId){
      disabled.value = true
      message.value = "Venue Requests Disabled"
      return;
    }
    // Query the table for rows where the property is true
    let query = supabase
      .from("VenueBookings")
      .select('*, event:AllEvents(profiles!AllEvents_created_by_fkey (id))', { count: 'exact' })  // `count: 'exact'` is important to return the row count
      .eq("venue_id", props.venueId)
      .eq("event.profiles.id", user.value.id);
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
      .select('*, event:AllEvents(profiles!AllEvents_created_by_fkey (id))', { count: 'exact' })  // `count: 'exact'` is important to return the row count
      .eq("event.profiles.id", user.value.id)
      .eq("status", 'open');        // Match the property set to true
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
    status: 'open',
    venue_id: props.venueId,
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
  checkDisable()
}
const isDialogOpen = ref(false)

async function selectNewEventAndClose(id: any){
  await getEvents();
  selectEvent(events.value.find(e => e.id == id));
  isDialogOpen.value = false;
}

onMounted(async () => {
    await checkDisable();
    await getEvents();
})
</script>

<template>
  <div class="bg-white dark:bg-black p-6 rounded-md shadow-lg w-1/3 max-h-fit">
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
            <DropdownMenuItem @click="selectEvent(null)" class="hover:bg-orange-200 dark:hover:bg-orange-700">
              <XCircle class="mr-2 text-orange-500 dark:text-orange-300" />No event created yet.
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Dialog v-slot="{ }" v-model:open="isDialogOpen" v-if="!selectedEvent">
          <DialogTrigger>
            <Button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Create New Event</Button>
          </DialogTrigger>
          <DialogContent class="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg space-y-4 max-w-3xl" v-model:open="open">
            <DialogHeader>
              <DialogTitle class="text-lg">Create New Event</DialogTitle>
            </DialogHeader>
            <EventCreationForm @eventCreated="selectNewEventAndClose"></EventCreationForm>
          </DialogContent>
        </Dialog>
      <Button @click="bookingActivity" :disabled="disabled" class="w-full OrangeCol font-semibold text-white py-2 rounded-md transition ease-in-out duration-150 hover:bg-orange-400">
        {{ message }}
      </Button>

    </div>
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