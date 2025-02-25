<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Calendar as CalendarIcon, Check, ChevronDown, XCircle } from 'lucide-vue-next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { format } from 'date-fns';
import { useToast } from 'vue-toastification';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import EventCreationForm from './EventCreationForm.vue';

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const note = ref('');
const events = ref([]);
const selectedEvent = ref(null);
const disabled = ref(true);
const message = ref("Request Expert");
const toast = useToast();

const props = defineProps({
  profileId: String
});

// Fetch existing events
async function getEvents() {
  const { data, error } = await supabase
    .from('AllEvents')
    .select('*')
    .eq('created_by', user.value.id);

  if (data) {
    events.value = data;
  } else {
    console.error('Error fetching events:', error);
  }
}

// Check if the user has already booked this volunteer for an event
async function checkDisable() {
  try {
    const eventId = selectedEvent?.value?.id ?? null;
    let query = supabase
      .from("ExpertBooking")
      .select('*, event:AllEvents(profiles!AllEvents_created_by_fkey (id))', { count: 'exact' })
      .eq("profile_id", props.profileId)
      .eq("event.profiles.id", user.value.id);
    if (eventId === null) {
      query = query.is('event_id', null);
    } else {
      query = query.eq('event_id', eventId);
    }
    const { data, error, count } = await query;
    if (count > 0) {
      disabled.value = true
      message.value = "Booking Requested"
      return
    }
    // Handle errors
    if (error) throw error;
  } catch (error) {
    console.error('Error checking booking status:', error.message);
  }
  try {
    // Query the table for rows where the property is true
    const { data, error, count } = await supabase
      .from("ExpertBooking")
      .select('*, event:AllEvents(profiles!AllEvents_created_by_fkey (id))', { count: 'exact' })  // `count: 'exact'` is important to return the row count
      .eq("event.profiles.id", user.value.id)
      .eq("status", 'requested');        // Match the property set to true
    if (count > 5) {
      disabled.value = true
      message.value = "Exceeded Booking Request Limit"
      return
    }
    // Handle errors
    if (error) throw error;

  } catch (error) {
    console.error('Error checking true property count:', error.message);
  }
  disabled.value = false;
  message.value = "Request Expert"
}

// Book the volunteer for the selected event
async function requestVolunteer() {
  const toast = useToast();

  const booking = {
    status: 'requested',
    profile_id: props.profileId,
    event_id: selectedEvent?.value?.id,
    note: note.value,
  };

  const { error } = await supabase.from('ExpertBooking').insert([booking]);

  if (error) {
    console.error('Error inserting data:', error);
  } else {
    toast.success('Expert Request Sent', { timeout: 5000 });
    note.value = '';
    checkDisable();
  }
}

// Select an event and check if booking is allowed
function selectEvent(event) {
  selectedEvent.value = event;
  checkDisable();
}
const isDialogOpen = ref(false)
const isDropdownOpen = ref(false)
async function selectNewEventAndClose(id: any, addNote, request_sponsorship) {
  await getEvents();
  selectEvent(events.value.find(e => e.id == id));
  note.value = addNote;
  isDialogOpen.value = false;
  isDropdownOpen.value = false;
}

// Form Data
const formData = ref({
  event_start_date: '',
  event_end_date: '',
  event_start_time: '',
  event_end_time: '',
  created_by: user.value.id,
});
// Create shadow event for booking
const onSubmit = async (event: Event) => {
  event.preventDefault();

  const { data, error } = await supabase
    .from('AllEvents')
    .upsert(formData.value).select();

  if (error) {
    toast.error(`Error: ${error.message}`);
  } else {
    selectedEvent.value = data[0];
    requestVolunteer()
  }
};
onMounted(async () => {
  await getEvents();
  await checkDisable();
});
</script>

<template>
  <div class="bg-white dark:bg-black p-6 rounded-md shadow-lg w-full max-h-fit space-y-4">
    <h3 class="font-semibold text-lg mb-4">Request a Expert</h3>

    <DropdownMenu v-model:open="isDropdownOpen">
      <DropdownMenuTrigger
        class=" mb-2 w-full rounded-md border border-gray-300 dark:border-orange-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
        <span>{{ selectedEvent?.title || 'Select your event' }}</span>
        <ChevronDown class="w-5 h-5 text-orange-600 dark:text-orange-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        class="rounded-md border border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg py-1">
        <div class="overflow-y-scroll max-h-48">
          <DropdownMenuItem v-for="event in events" :key="event.id" @click="selectEvent(event)">
            {{ event.title }}
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="selectEvent(null)" class="hover:bg-orange-200 dark:hover:bg-orange-700">
          <XCircle class="mr-2 text-orange-500 dark:text-orange-300" />No event created.
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <Dialog v-slot="{ }" v-model:open="isDialogOpen" v-if="!selectedEvent">
          <DialogTrigger>
            <Button
              class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Create
              New Event</Button>
          </DialogTrigger>
          <DialogContent class="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg space-y-4 max-w-3xl"
            v-model:open="open">
            <DialogHeader>
              <DialogTitle class="text-lg">Create New Event</DialogTitle>
            </DialogHeader>
            <EventCreationForm @eventCreated="selectNewEventAndClose"></EventCreationForm>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>

    <div v-if="!selectedEvent">
      <h3 class="font-semibold text-md mb-4">No event created! Just enter date & time: </h3>

      <!-- Start Date & End Date -->
      <div class="grid grid-cols-2 gap-6">
        <div>
          <Label for="event_start_date">Start Date</Label>
          <Input id="event_start_date" type="date" v-model="formData.event_start_date" />
        </div>
        <div>
          <Label for="event_end_date">End Date</Label>
          <Input id="event_end_date" type="date" v-model="formData.event_end_date" />
        </div>
      </div>

      <!-- Start Time & End Time -->
      <div class="grid grid-cols-2 gap-6 mt-4">
        <div>
          <Label for="event_start_time">Start Time</Label>
          <Input id="event_start_time" type="time" v-model="formData.event_start_time" />
        </div>
        <div>
          <Label for="event_end_time">End Time</Label>
          <Input id="event_end_time" type="time" v-model="formData.event_end_time" />
        </div>
      </div>
      <!-- Note -->
      <div>
        <Label for="note">Additional Note</Label>
        <Textarea id="note" v-model="note" placeholder="Additional Note" />
      </div>
    </div>
    <!-- Note -->
    <div v-if="!!selectedEvent">
      <Label for="note">Additional Note</Label>
      <Textarea id="note" v-model="note" placeholder="Additional Note" />
    </div>
    <Button v-if="!!selectedEvent" @click="requestVolunteer" :disabled="disabled"
      class="w-full OrangeCol font-semibold text-white py-2 rounded-md transition ease-in-out duration-150 hover:bg-orange-400">
      {{ message }}
    </Button>
    <Button v-if="!selectedEvent" @click="onSubmit" :disabled="disabled"
      class="w-full OrangeCol font-semibold text-white py-2 rounded-md transition ease-in-out duration-150 hover:bg-orange-400">
      {{ message }}
    </Button>
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
