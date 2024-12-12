
<script setup lang="ts">
import { Link2 } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {Dialog, DialogContent, DialogTrigger, DialogClose} from '@/components/ui/dialog'

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const venuesRequestedFromMe = ref([]);
const venuesAcceptedFromMe = ref([]);
const venuesRejectedFromMe = ref([]);
const venuesIRequested = ref([]);
const venuesIRequestedAccepted = ref([]);
const venuesIRequestedRejected = ref([]);

function getContactInfo(profile){
  return {other_user_id: profile.id, other_user_name: profile.full_name}
}

async function fetchVenuesRequestedFromMe() {
  const response = await supabase
    .from('VenueBookings')
    .select('*, requesting_user:profiles!requesting_user_id(*), venue:AllVenues!venue_id(*)')
    .eq('venue_owner_id', user.value.id)
  if (response.error) {
    console.error(response.error);
    return;
  }
  venuesRequestedFromMe.value = response.data.filter((venue) => venue.is_request === true && venue.is_cancelled === false);
  venuesAcceptedFromMe.value = response.data.filter((venue) => venue.is_approved === true);
  venuesRejectedFromMe.value = response.data.filter((venue) => (venue.is_request === false && venue.is_approved === false) || venue.is_cancelled === true);
  fetchImage(venuesRequestedFromMe.value[0].requesting_user.avatar_url)
}
async function fetchVenuesIRequested() {
  const response = await supabase
    .from('VenueBookings')
    .select('*, venue_owner:profiles!venue_owner_id(*), venue:AllVenues!venue_id(*)')
    .eq('requesting_user_id', user.value.id)
  if (response.error) {
    console.error(response.error);
    return;
  }
  
  venuesIRequested.value = response.data.filter((venue) => venue.is_request === true && venue.is_cancelled === false);
  venuesIRequestedAccepted.value = response.data.filter((venue) => venue.is_approved === true);
  venuesIRequestedRejected.value = response.data.filter((venue) => (venue.is_request === false && venue.is_approved === false) || venue.is_cancelled === true);
}
const avatarSRC = ref("");
const fetchImage = async (id) => {
    if(!!id)
    {
            const urlData = await supabase.storage.from('avatars').createSignedUrl(id, 60);
            avatarSRC.value = urlData?.data?.signedUrl ?? "";
    }
  }

onMounted(() => {
  fetchVenuesRequestedFromMe();
  fetchVenuesIRequested();
});

function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}

async function acceptRequest(request){
  const { data, error } = await supabase
    .from('VenueBookings')               // Specify the table name
    .update({ is_request: false, is_approved: true }) // Specify the field to update
    .eq('id', request.id);            // Find the specific row by id

  if (error) {
    console.error('Error updating request status:', error);
  } else {
    console.log('Order status updated:', data);
    fetchVenuesRequestedFromMe()
  }
}
async function rejectRequest(request){
  const { data, error } = await supabase
    .from('VenueBookings')               // Specify the table name
    .update({ is_request: false, is_approved: false }) // Specify the field to update
    .eq('id', request.id);            // Find the specific row by id

  if (error) {
    console.error('Error updating request status:', error);
  } else {
    console.log('Order status updated:', data);
    fetchVenuesRequestedFromMe()
  }
}
async function cancelRequest(request){
  const { data, error } = await supabase
    .from('VenueBookings')               // Specify the table name
    .update({ is_cancelled: true }) // Specify the field to update
    .eq('id', request.id);            // Find the specific row by id

  if (error) {
    console.error('Error updating request status:', error);
  } else {
    console.log('Order status updated:', data);
    fetchVenuesIRequested()
  }
}
async function reopenRequest(request){
  const { data, error } = await supabase
    .from('VenueBookings')               // Specify the table name
    .update({ is_cancelled: false }) // Specify the field to update
    .eq('id', request.id);            // Find the specific row by id

  if (error) {
    console.error('Error updating request status:', error);
  } else {
    console.log('Order status updated:', data);
    fetchVenuesIRequested()
  }
}
async function confirmBooking(request){
  const { data, error } = await supabase
    .from('VenueBookings')               // Specify the table name
    .update({ is_confirmed: true }) // Specify the field to update
    .eq('id', request.id);            // Find the specific row by id

  if (error) {
    console.error('Error updating request status:', error);
  } else {
    const { data, error } = await supabase
      .from('VenueBookings')
      .update({ is_cancelled: true })
      .eq('event_id', request.event_id)     // Match the specified event_id
      .neq('id', request.id);
    fetchVenuesIRequested()
  }
}

</script>

<template>
  <div class="bg-white dark:bg-gray-900 p-6 shadow-lg rounded-lg transition-colors">
  <div class="flex min-h-screen bg-[#FFFAF0] dark:bg-black text-gray-900">
    <main class="flex-1 p-8">
      <Tabs default-value="requested-from-me" class="w-full">
        <TabsList class="flex w-full justify-around border-b-2 border-orange-300">
          <TabsTrigger value="requested-from-me" class="py-2">Venues requested from me</TabsTrigger>
          <TabsTrigger value="requested" class="py-2">Venues I requested or offered to me</TabsTrigger>
        </TabsList>

        <TabsContent value="requested-from-me" class="space-y-6">
          <Tabs default-value="Open" class="w-full">
        <TabsList class="flex w-full justify-around border-b-2 border-orange-300">
          <TabsTrigger value="Open" class="py-2">Open Venues requests</TabsTrigger>
          <TabsTrigger value="Accepted" class="py-2">Approved Venues requests</TabsTrigger>
          <TabsTrigger value="Rejected" class="py-2">Cancelled/Rejected requests</TabsTrigger>

        </TabsList>
        <TabsContent value="Open" class="space-y-6">
  <p class="text-gray-800 p-2 font-semibold">
    View the venues that others have requested from you:
  </p>
  <div v-for="item in venuesRequestedFromMe" class="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl dark:bg-[#1A1A1A]">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-6">
        <div class="flex flex-col items-center">
          <h2 class="text-center text-md mt-2 mb-3">Event Host:</h2>
          <Avatar class="w-24 h-24">
            <AvatarImage :src="avatarSRC" alt="User's Name" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <h3 class="font-semibold text-center text-md mt-2">{{ item.requesting_user.full_name }}</h3>
        </div>
        <div>
          <h3 class="font-semibold text-2xl">{{ item.event_name }}</h3>
          <h4 class="font-semibold text-2xl">Venue: {{ item.venue.title }}</h4>
          <div class="mt-4 space-y-2">
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event type:</p>
              <p class="text-md">{{ item.event_type }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Number of guests:</p>
              <p class="text-md">{{ item.number_of_guests }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Tickets:</p>
              <p class="text-md">{{ 0 }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event date:</p>
              <p class="text-md">{{ item.event_start_date }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event end date:</p>
              <p class="text-md">{{ item.event_end_date }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event time:</p>
              <p class="text-md">{{ item.event_start_time }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event time:</p>
              <p class="text-md">{{ item.event_end_time }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event description:</p>
              <p class="text-md">{{ item.event_description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-between h-full">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="icon" variant="ghost">
              <Link2 class="w-5 h-5 text-orange-500" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Go to event page
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div class="flex flex-col gap-2 items-center justify-between">
        <MessagesButton :label="'Contact'" :isIcon="false" :newConversationInfo="getContactInfo(item.requesting_user)"></MessagesButton>
        <Button @click="acceptRequest(item)" class="bg-green-500 text-white">Accept</Button>
        <Button @click="rejectRequest(item)" class="bg-red-500 text-white">Reject</Button>
      </div>
      </div>
    </div>
  </div>
</TabsContent>
  <TabsContent value="Accepted" class="space-y-6">
  <p class="text-gray-800 p-2 font-semibold">
    View the venues that others have requested from you:
  </p>
  <div v-for="item in venuesAcceptedFromMe" class="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl dark:bg-[#1A1A1A]">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-6">
        <div class="flex flex-col items-center">
          <h2 class="text-center text-md mt-2 mb-3">Event Host:</h2>
          <Avatar class="w-24 h-24">
            <AvatarImage :src="avatarSRC" alt="User's Name" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <h3 class="font-semibold text-center text-md mt-2">{{ item.requesting_user.full_name }}</h3>
        </div>
        <div>
          <h3 class="font-semibold text-2xl">{{ item.event_name }}</h3>
          <h4 class="font-semibold text-2xl">Venue: {{ item.venue.title }}</h4>
          <div class="mt-4 space-y-2">
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event type:</p>
              <p class="text-md">{{ item.event_type }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Number of guests:</p>
              <p class="text-md">{{ item.number_of_guests }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Tickets:</p>
              <p class="text-md">{{ 0 }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event date:</p>
              <p class="text-md">{{ item.event_start_date }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event end date:</p>
              <p class="text-md">{{ item.event_end_date }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event time:</p>
              <p class="text-md">{{ item.event_start_time }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event time:</p>
              <p class="text-md">{{ item.event_end_time }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event description:</p>
              <p class="text-md">{{ item.event_description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-between h-full">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="icon" variant="ghost">
              <Link2 class="w-5 h-5 text-orange-500" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Go to event page
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div class="flex flex-col gap-2 items-center justify-between">
        <MessagesButton :label="'Contact'" :isIcon="false" :newConversationInfo="getContactInfo(item.requesting_user)"></MessagesButton>
        <Button @click="rejectRequest(item)" class="bg-red-500 text-white">Reject</Button>
      </div>
      </div>
    </div>
  </div>
</TabsContent>
  <TabsContent value="Rejected" class="space-y-6">
  <p class="text-gray-800 p-2 font-semibold">
    View the venues that others have requested from you:
  </p>
  <div v-for="item in venuesRejectedFromMe" class="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl dark:bg-[#1A1A1A]">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-6">
        <div class="flex flex-col items-center">
          <h2 class="text-center text-md mt-2 mb-3">Event Host:</h2>
          <Avatar class="w-24 h-24">
            <AvatarImage :src="avatarSRC" alt="User's Name" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <h3 class="font-semibold text-center text-md mt-2">{{ item.requesting_user.full_name }}</h3>
        </div>
        <div>
          <h3 class="font-semibold text-2xl">{{ item.event_name }}</h3>
          <h4 class="font-semibold text-2xl">Venue: {{ item.venue.title }}</h4>
          <div class="mt-4 space-y-2">
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event type:</p>
              <p class="text-md">{{ item.event_type }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Number of guests:</p>
              <p class="text-md">{{ item.number_of_guests }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Tickets:</p>
              <p class="text-md">{{ 0 }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event date:</p>
              <p class="text-md">{{ item.event_start_date }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event end date:</p>
              <p class="text-md">{{ item.event_end_date }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event time:</p>
              <p class="text-md">{{ item.event_start_time }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event time:</p>
              <p class="text-md">{{ item.event_end_time }}</p>
            </div>
            <div class="flex items-center">
              <p class="text-md font-semibold text-gray-700 mr-2">Event description:</p>
              <p class="text-md">{{ item.event_description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-between h-full">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button size="icon" variant="ghost">
              <Link2 class="w-5 h-5 text-orange-500" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            Go to event page
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div class="flex flex-col gap-2 items-center justify-between">
        <MessagesButton :label="'Contact'" :isIcon="false" :newConversationInfo="getContactInfo(item.requesting_user)"></MessagesButton>
        <h3 class="text-red-500">{{ item.is_cancelled ? "Cancelled" : "Rejected" }}</h3>
        <Button v-if="!item.is_cancelled" @click="acceptRequest(item)" class="bg-green-500 text-white">Accept</Button>
      </div>
      </div>
    </div>
  </div>
</TabsContent>
</Tabs>
</TabsContent>

<TabsContent value="requested" class="space-y-6">
  <Tabs default-value="Open" class="w-full">
        <TabsList class="flex w-full justify-around border-b-2 border-orange-300">
          <TabsTrigger value="Open" class="py-2">Open Venues requests</TabsTrigger>
          <TabsTrigger value="Accepted" class="py-2">Approved Venues requests</TabsTrigger>
          <TabsTrigger value="Rejected" class="py-2">Cancelled/Rejected requests</TabsTrigger>

        </TabsList>
        <TabsContent value="Open" class="space-y-6">
          <div v-for="item in venuesIRequested" class="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl dark:bg-[#1A1A1A]">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-6">
                <div class="flex flex-col items-center">
                  <h2 class="text-center text-md mt-2 mb-3">Venue Owner:</h2>
                  <Avatar class="w-24 h-24">
                    <AvatarImage :src="avatarSRC" alt="User's Name" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <h3 class="font-semibold text-center text-md mt-2">{{ item.venue_owner.full_name }}</h3>
                </div>
                <div>
                  <h3 class="font-semibold text-2xl">{{ item.event_name }}</h3>
                  <h4 class="font-semibold text-2xl">Venue: {{ item.venue.title }}</h4>
                  <div class="mt-4 space-y-2">
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event type:</p>
                      <p class="text-md">{{ item.event_type }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Number of guests:</p>
                      <p class="text-md">{{ item.number_of_guests }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Tickets:</p>
                      <p class="text-md">{{ 0 }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event date:</p>
                      <p class="text-md">{{ item.event_start_date }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event end date:</p>
                      <p class="text-md">{{ item.event_end_date }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event time:</p>
                      <p class="text-md">{{ item.event_start_time }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event time:</p>
                      <p class="text-md">{{ item.event_end_time }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event description:</p>
                      <p class="text-md">{{ item.event_description }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center justify-between h-full">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button size="icon" variant="ghost">
                      <Link2 class="w-5 h-5 text-orange-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Go to event page
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div class="flex flex-col gap-2 items-center justify-between">
                <MessagesButton :label="'Contact'" :isIcon="false" :newConversationInfo="getContactInfo(item.venue_owner)"></MessagesButton>
                <Button @click="cancelRequest(item)" class="bg-red-500 text-white">Cancel</Button>
              </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Accepted" class="space-y-6">
          <div v-for="item in venuesIRequestedAccepted" class="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl dark:bg-[#1A1A1A]">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-6">
                <div class="flex flex-col items-center">
                  <h2 class="text-center text-md mt-2 mb-3">Venue Owner:</h2>
                  <Avatar class="w-24 h-24">
                    <AvatarImage :src="avatarSRC" alt="User's Name" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <h3 class="font-semibold text-center text-md mt-2">{{ item.venue_owner.full_name }}</h3>
                </div>
                <div>
                  <h3 class="font-semibold text-2xl">{{ item.event_name }}</h3>
                  <h4 class="font-semibold text-2xl">Venue: {{ item.venue.title }}</h4>
                  <div class="mt-4 space-y-2">
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event type:</p>
                      <p class="text-md">{{ item.event_type }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Number of guests:</p>
                      <p class="text-md">{{ item.number_of_guests }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Tickets:</p>
                      <p class="text-md">{{ 0 }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event date:</p>
                      <p class="text-md">{{ item.event_start_date }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event end date:</p>
                      <p class="text-md">{{ item.event_end_date }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event time:</p>
                      <p class="text-md">{{ item.event_start_time }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event time:</p>
                      <p class="text-md">{{ item.event_end_time }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event description:</p>
                      <p class="text-md">{{ item.event_description }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center justify-between h-full">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button size="icon" variant="ghost">
                      <Link2 class="w-5 h-5 text-orange-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Go to event page
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div class="flex flex-col gap-2 items-center justify-between">
                <MessagesButton :label="'Contact'" :isIcon="false" :newConversationInfo="getContactInfo(item.venue_owner)"></MessagesButton>
                <Dialog>
                  <DialogTrigger :hidden="!item.event_id || item.is_confirmed">
                    <Button class="bg-green-500 text-white">Confirm Booking</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <p class="text-center">Are you sure you want to confirm this booking?</p>
                    <div class="grid grid-cols-2 gap-4">
                    <DialogClose>
                      <Button @click="confirmBooking(item)" class="bg-green-500 text-white">Confirm Booking</Button>
                    </DialogClose>
                    <DialogClose>
                      <Button @click="cancelRequest(item)" class="bg-red-500 text-white">Cancel</Button>
                    </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button @click="cancelRequest(item)" class="bg-red-500 text-white">Cancel</Button>
              </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Rejected" class="space-y-6">
          <div v-for="item in venuesIRequestedRejected" class="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl dark:bg-[#1A1A1A]">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-6">
                <div class="flex flex-col items-center">
                  <h2 class="text-center text-md mt-2 mb-3">Venue Owner:</h2>
                  <Avatar class="w-24 h-24">
                    <AvatarImage :src="avatarSRC" alt="User's Name" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <h3 class="font-semibold text-center text-md mt-2">{{ item.venue_owner.full_name }}</h3>
                </div>
                <div>
                  <h3 class="font-semibold text-2xl">{{ item.event_name }}</h3>
                  <h4 class="font-semibold text-2xl">Venue: {{ item.venue.title }}</h4>
                  <div class="mt-4 space-y-2">
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event type:</p>
                      <p class="text-md">{{ item.event_type }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Number of guests:</p>
                      <p class="text-md">{{ item.number_of_guests }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Tickets:</p>
                      <p class="text-md">{{ 0 }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event date:</p>
                      <p class="text-md">{{ item.event_start_date }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event end date:</p>
                      <p class="text-md">{{ item.event_end_date }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event time:</p>
                      <p class="text-md">{{ item.event_start_time }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event time:</p>
                      <p class="text-md">{{ item.event_end_time }}</p>
                    </div>
                    <div class="flex items-center">
                      <p class="text-md font-semibold text-gray-700 mr-2">Event description:</p>
                      <p class="text-md">{{ item.event_description }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center justify-between h-full">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button size="icon" variant="ghost">
                      <Link2 class="w-5 h-5 text-orange-500" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Go to event page
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div class="flex flex-col gap-2 items-center justify-between">
                <MessagesButton :label="'Contact'" :isIcon="false" :newConversationInfo="getContactInfo(item.venue_owner)"></MessagesButton>
                <h3 class="text-red-500">{{ item.is_cancelled ? "Cancelled" : "Rejected" }}</h3>
                <Button v-if="item.is_cancelled" @click="reopenRequest(item)" class="bg-green-500 text-white">Reopen</Button>
              </div>
              </div>
            </div>
          </div>
        </TabsContent>
    </Tabs>
  </TabsContent>
      </Tabs>
    </main>
  </div>
  </div>
</template>
