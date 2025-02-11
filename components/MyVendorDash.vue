<script setup lang="ts">
import { Link2 } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue';
import Label from './ui/label/Label.vue';

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const venuesRequestedFromMe = ref([]);
const venuesIRequested = ref([]);
const venuesIRequestedAccepted = ref([]);
const venuesIRequestedRejected = ref([]);

function getContactInfo(profile) {
  if (!profile) return null;
  return { other_user_id: profile.id, other_user_name: profile.full_name }
}

function filterVenues(venues, open, approved, rejected){
    return venues.filter((venue) => (venue.status == 'open' && open) || (venue.status == 'rejected' && rejected) || (venue.status == 'approved' && approved) || (venue.status == 'cancelled' && rejected));
}
async function fetchVenuesRequestedFromMe() {
  const response = await supabase
  .from('VenueBookings')
  .select(`
    *,
    event:AllEvents!inner (
      *,
      event_owner:profiles!inner (*)
    ),
    venue:AllVenues!inner (
      *,
      venue_owner:profiles!inner (*)
    )
  `)
  .eq('AllVenues.venue_owner.id', user.value.id);
  if (response.error) {
    console.error(response.error);
    return;
  }
  Promise.all(response.data.map(async (ven) => {
    ven.event.event_owner.avatarSRC = await fetchImage(ven.event.event_owner.avatar_url, 'avatars')
  })).then(() => {
    venuesRequestedFromMe.value = response.data;
    console.log(response.data)
  })
}
async function fetchVenuesIRequested() {
  const response = await supabase
  .from('VenueBookings')
  .select(`
    *,
    event:AllEvents!inner (
      *,
      event_owner:profiles!inner (*)
    ),
    venue:AllVenues!inner (
      *,
      venue_owner:profiles!inner (*)
    )
  `)
  .eq('AllEvents.event_owner.id', user.value.id);
  if (response.error) {
    console.error(response.error);
    return;
  }
  Promise.all(response.data.map(async (ven) => {
    ven.venue.venue_owner.avatarSRC = await fetchImage(ven.venue.venue_owner.avatar_url, 'avatars')
  })).then(() => {
    venuesIRequested.value = response.data;
    console.log(response.data)
  })

}
const fetchImage = async (id, bucket) => {
  if (!!id) {
    if (id.includes('http')) {
      return id;
    }
    const urlData = await supabase.storage.from(bucket).createSignedUrl(id, 60);
    return urlData?.data?.signedUrl ?? "";
  }
}

onMounted(() => {
  fetchVenuesRequestedFromMe();
  fetchVenuesIRequested();
});

function formatDate(date) {
  if (!date) {
    return ''
  }
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(new Date(date));
}

async function acceptRequest(request) {
  const { data, error } = await supabase
    .from('VenueBookings')               // Specify the table name
    .update({ status: 'approved' }) // Specify the field to update
    .eq('id', request.id);            // Find the specific row by id

  if (error) {
    console.error('Error updating request status:', error);
  } else {
    console.log('Order status updated:', data);
    fetchVenuesRequestedFromMe()
  }
}
async function rejectRequest(request) {
  const { data, error } = await supabase
    .from('VenueBookings')               // Specify the table name
    .update({ status: 'rejected' }) // Specify the field to update
    .eq('id', request.id);            // Find the specific row by id

  if (error) {
    console.error('Error updating request status:', error);
  } else {
    console.log('Order status updated:', data);
    fetchVenuesRequestedFromMe()
  }
}
async function cancelRequest(request) {
  const { data, error } = await supabase
    .from('VenueBookings')               // Specify the table name
    .update({ status: 'cancelled' }) // Specify the field to update
    .eq('id', request.id);            // Find the specific row by id

  if (error) {
    console.error('Error updating request status:', error);
  } else {
    console.log('Order status updated:', data);
    fetchVenuesIRequested()
  }
}
async function reopenRequest(request) {
  const { data, error } = await supabase
    .from('VenueBookings')               // Specify the table name
    .update({ status: 'open' }) // Specify the field to update
    .eq('id', request.id);            // Find the specific row by id

  if (error) {
    console.error('Error updating request status:', error);
  } else {
    console.log('Order status updated:', data);
    fetchVenuesIRequested()
  }
}
async function confirmBooking(request) {
  const { data, error } = await supabase
    .from('VenueBookings')               // Specify the table name
    .update({ status: 'confirmed' }) // Specify the field to update
    .eq('id', request.id);            // Find the specific row by id

  if (error) {
    console.error('Error updating request status:', error);
  } else {
    fetchVenuesIRequested()
  }
}
const selectedBooking = ref({})
function selectBooking(booking) {
  selectedBooking.value = booking
}
const showOpen = ref(true)
const showApproved = ref(false)
const showRejected = ref(false)
function toggleShowOpen(){
  showOpen.value = !showOpen.value;
}
function toggleShowApproved(){
  showApproved.value = !showApproved.value;
}
function toggleShowRejected(){
  showRejected.value = !showRejected.value;
}
const newVenueOwnerConversationInfo = computed(() => {
  console.log("here")
  return getContactInfo(selectedBooking.value?.venue?.venue_owner);
});
const newEventOwnerConversationInfo = computed(() => {
  console.log("here2")
  return getContactInfo(selectedBooking.value?.event?.event_owner);
});
</script>

<template>
  <div class="bg-white dark:bg-gray-900 p-6 shadow-lg rounded-lg transition-colors">
    <div class="flex min-h-screen bg-[#FFFAF0] dark:bg-black text-gray-900">
      <main class="flex-1 p-8">
        <Tabs default-value="requested-from-me" class="w-full">
          <TabsList class="flex w-full justify-around border-b-2 border-orange-300 bg-orange-500 text-white ">
            <TabsTrigger @click="selectedBooking = {}" value="requested-from-me" class="py-2 font-semibold text-md">Venues requested from me
            </TabsTrigger>
            <TabsTrigger @click="selectedBooking = {}" value="requested" class="py-2 font-semibold text-md">Venues I requested or offered to me
            </TabsTrigger>
          </TabsList>
          <div class="flex w-full justify-between mt-2">
            <div class="flex">
              <Checkbox :checked="showOpen" @click="toggleShowOpen()" />
              <Label class="ml-2">Show Open Requests</Label>
            </div>
            <div class="flex">
              <Checkbox :checked="showApproved" @click="toggleShowApproved()" />
              <Label class="ml-2">Show Approved Requests</Label>
            </div>
            <div class="flex">
              <Checkbox :checked="showRejected" @click="toggleShowRejected()" />
              <Label class="ml-2">Show Rejected/Cancelled Requests</Label>
            </div>
          </div>

          <TabsContent value="requested-from-me" class="space-y-6">
            <p class="text-gray-800 p-2 font-semibold">
              View the venues that others have requested from you:
            </p>
            <div class="flex">
              <div class="w-1/3">
                <div v-for="item in filterVenues(venuesRequestedFromMe, showOpen, showApproved, showRejected)"
                  :class="{ 'flex flex-col w-full border border-black-300 space-y-0 p-2 rounded-lg shadow-lg transition-transform transform hover:shadow-2xl dark:bg-[#1A1A1A]border-2 border-orange-500 bg-orange-100': selectedBooking.id == item.id,
                    'flex flex-col w-full border border-black-300 space-y-0 bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:shadow-2xl dark:bg-[#1A1A1A]': selectedBooking.id != item.id
                   }"
                  @click="selectBooking(item)">
                  <div class="flex">
                    <div class="flex flex-1 flex-col items-center">
                      <Avatar class="w-16 h-16">
                        <AvatarImage :src="item.event?.event_owner.avatarSRC" alt="User's Name" />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>
                      <h3 class="font-semibold text-center text-md mt-2">{{ item.event?.event_owner.full_name }}</h3>
                    </div>
                    <div class="flex grow flex-col items-center">
                      <h3 class="font-semibold text-2xl">{{ item.venue?.title }}</h3>
                      <h6 class="font-semibold text-large text-gray-500">{{ item.event?.title }}</h6>
                    </div>
                    <div v-if="item.status == 'open'" class="p-1 rounded-lg border-2 border-orange-300 h-min">Open</div>
                    <div v-if="item.status == 'approved'" class="p-1 rounded-lg bg-green-300 text-white-300 h-min">Approved</div>
                    <div v-if="item.status == 'cancelled'" class="p-1 rounded-lg bg-red-300 text-white-300 h-min">Cancelled</div>
                    <div v-if="item.status == 'rejected'" class="p-1 rounded-lg bg-red-300 text-white-300 h-min">Rejected</div>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-6">
                      <div>
                        <div class="space-y-0">
                          <div class="flex items-center">
                            <p class="text-sm font-semibold text-gray-700 mr-2">Event type:</p>
                            <p class="text-sm">{{ item.event?.event_type }}</p>
                          </div>
                          <div class="flex items-center">
                            <p class="text-sm font-semibold text-gray-700 mr-2">Number of guests:</p>
                            <p class="text-sm">{{ item.event?.number_of_guests }}</p>
                          </div>
                          <div class="flex items-center">
                            <p class="text-sm font-semibold text-gray-700 mr-2">Event date:</p>
                            <p class="text-sm">{{ formatDate(item.event?.event_start_date) }} - {{
                              formatDate(item.event?.event_end_date) }}</p>
                          </div>
                          <div class="flex items-center">
                            <p class="text-sm font-semibold text-gray-700 mr-2">Requested on:</p>
                            <p class="text-sm">{{ formatDate(item.created_at) }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="w-2/3">
                <EventBookingCard v-if="Object.keys(selectedBooking).length !== 0" :event="selectedBooking?.event" :venue-name="selectedBooking?.venue?.title" :requesting_sponsorship="selectedBooking?.requesting_sponsorship">
                  <template #action-buttons>
                    <MessagesButton :label="'Contact'" :isIcon="false"
                          :newConversationInfo="newEventOwnerConversationInfo"></MessagesButton>
                        <Button v-if="selectedBooking.status == 'open'" @click="acceptRequest(selectedBooking)" class="bg-green-500 text-white m-2">Accept</Button>
                        <Button v-if="selectedBooking.status == 'open'" @click="rejectRequest(selectedBooking)" class="bg-red-500 text-white m-2">Reject</Button>
                        <Button v-if="selectedBooking.status == 'rejected' || selectedBooking.status == 'approved'" @click="rejectRequest(selectedBooking)" class="bg-white-500 text-orange m-2">Reopen</Button>
                  </template>
                </EventBookingCard>
                
              </div>
            </div>
          </TabsContent>

          <TabsContent value="requested" class="space-y-6">
            <p class="text-gray-800 p-2 font-semibold">
              View the venues that you have requested from others:
            </p>
            <div class="flex">
              <div class="w-1/3">
                <div v-for="item in filterVenues(venuesIRequested, showOpen, showApproved, showRejected)"
                  :class="{ 'flex flex-col w-full border border-black-300 space-y-0 p-2 rounded-lg shadow-lg transition-transform transform hover:shadow-2xl dark:bg-[#1A1A1A]border-2 border-orange-500 bg-orange-100': selectedBooking.id == item.id,
                    'flex flex-col w-full border border-black-300 space-y-0 bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:shadow-2xl dark:bg-[#1A1A1A]': selectedBooking.id != item.id
                   }"
                  @click="selectBooking(item)">
                  <div class="flex">
                    <div class="flex flex-1 flex-col items-center">
                      <Avatar class="w-16 h-16">
                        <AvatarImage :src="item.venue.venue_owner.avatarSRC" alt="User's Name" />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>
                      <h3 class="font-semibold text-center text-md mt-2">{{ item.venue.venue_owner.full_name }}</h3>
                    </div>
                    <div class="flex grow flex-col items-center">
                      <h3 class="font-semibold text-2xl">{{ item?.venue?.title }}</h3>
                      <h6 class="font-semibold text-large text-gray-500">{{ item?.event?.title }}</h6>
                    </div>
                    <div v-if="item.status == 'open'" class="p-1 rounded-lg border-2 border-orange-300 h-min">Open</div>
                    <div v-if="item.status == 'approved'" class="p-1 rounded-lg bg-green-300 text-white-300 h-min">Approved</div>
                    <div v-if="item.status == 'cancelled'" class="p-1 rounded-lg bg-red-300 text-white-300 h-min">Cancelled</div>
                    <div v-if="item.status == 'rejected'" class="p-1 rounded-lg bg-red-300 text-white-300 h-min">Rejected</div>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-6">
                      <div>
                        <div class="space-y-0">
                          <div class="flex items-center">
                            <p class="text-sm font-semibold text-gray-700 mr-2">Event type:</p>
                            <p class="text-sm">{{ item.event?.event_type }}</p>
                          </div>
                          <div class="flex items-center">
                            <p class="text-sm font-semibold text-gray-700 mr-2">Number of guests:</p>
                            <p class="text-sm">{{ item.event?.number_of_guests }}</p>
                          </div>
                          <div class="flex items-center">
                            <p class="text-sm font-semibold text-gray-700 mr-2">Event date:</p>
                            <p class="text-sm">{{ formatDate(item.event?.event_start_date) }} - {{
                              formatDate(item.event?.event_end_date) }}</p>
                          </div>
                          <div class="flex items-center">
                            <p class="text-sm font-semibold text-gray-700 mr-2">Requested on:</p>
                            <p class="text-sm">{{ formatDate(item.created_at) }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="w-2/3">
                <VenueBookingCard v-if="Object.keys(selectedBooking).length !== 0" :venue="selectedBooking?.venue" :event-name="selectedBooking?.event?.title"
                :requesting_sponsorship="selectedBooking?.requesting_sponsorship" :note="selectedBooking?.note">
                  <template #action-buttons>
                    <MessagesButton :label="'Contact'" :isIcon="false"
                          :newConversationInfo="newVenueOwnerConversationInfo"></MessagesButton>
                    <Button v-if="selectedBooking.status == 'cancelled'" @click="reopenRequest(selectedBooking)" class="bg-green-500 text-white m-2">Reopen</Button>
                    <Button v-if="selectedBooking.status == 'open' || selectedBooking.status == 'approved'" @click="cancelRequest(selectedBooking)" class="bg-green-500 text-white m-2">Cancel</Button>
                  </template>
                </VenueBookingCard>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  </div>
</template>
