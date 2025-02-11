<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ChevronDown } from 'lucide-vue-next';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from 'vue-toastification';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

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
    .eq('created_by', user.value.id)
    .eq('is_published', true);

  if (data) {
    events.value = data;
  } else {
    console.error('Error fetching events:', error);
  }
}

// Check if the user has already booked this volunteer for an event
async function checkDisable() {
  try {
    if (!selectedEvent.value) {
      disabled.value = true;
      message.value = "Select an event";
      return;
    }

    const { count } = await supabase
      .from('ExpertBooking')
      .select('*', { count: 'exact' })
      .eq('profile_id', props.profileId)
      .eq('event_id', selectedEvent.value.id);

    if (count > 0) {
      disabled.value = true;
      message.value = "Booking Requested";
    } else {
      disabled.value = false;
      message.value = "Request Volunteer";
    }
  } catch (error) {
    console.error('Error checking booking status:', error.message);
  }
}

// Book the volunteer for the selected event
async function requestVolunteer() {
  if (!selectedEvent.value) return;

  const booking = {
    status: 'requested',
    profile_id: props.profileId,
    event_id: selectedEvent.value.id,
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

onMounted(async () => {
  await getEvents();
  checkDisable();
});
</script>

<template>
  <div class="bg-white dark:bg-black p-6 rounded-md shadow-lg w-full max-h-fit">
    <h3 class="font-semibold text-lg mb-4">Request a Expert</h3>

    <!-- Event Selection Dropdown -->
    <DropdownMenu>
      <DropdownMenuTrigger
        class="mb-2 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
        <span>{{ selectedEvent?.title || 'Select an event' }}</span>
        <ChevronDown class="w-5 h-5 text-orange-600 dark:text-orange-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent class="rounded-md border bg-white dark:bg-gray-800 shadow-lg py-1">
        <div class="overflow-y-scroll max-h-48">
          <DropdownMenuItem v-for="event in events" :key="event.id" @click="selectEvent(event)">
            {{ event.title }}
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="selectEvent(null)" class="hover:bg-gray-200 dark:hover:bg-gray-700">
          Clear Selection
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <!-- Note Field -->
    <Label for="note">Additional Note</Label>
    <Textarea id="note" v-model="note" placeholder="Additional Note" />

    <!-- Booking Button -->
    <Button @click="requestVolunteer" :disabled="disabled"
      class="w-full mt-4 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
      {{ message }}
    </Button>
  </div>
</template>

<style>
.bg-orange-500 {
  background-color: #ff6900;
}
</style>