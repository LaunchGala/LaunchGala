<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Checkbox from '@/components/ui/checkbox/Checkbox.vue';
import Label from './ui/label/Label.vue';

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const influencersRequestedFromMe = ref([]);
const influencersIRequested = ref([]);

function getContactInfo(profile) {
  if (!profile) return null;
  return { other_user_id: profile.id, other_user_name: profile.full_name };
}

// Filtering influencers based on status
function filterRequests(requests, requested, offered, approved, rejected, cancelled) {
  return requests.filter(
    (req) =>
      (req.status == 'requested' && requested) ||
      (req.status == 'offered' && offered) ||
      (req.status == 'approved' && approved) ||
      (req.status == 'rejected' && rejected) ||
      (req.status == 'cancelled' && cancelled)
  );
}

// Fetch influencers requested FROM ME
async function fetchInfluencersRequestedFromMe() {
  const response = await supabase
    .from('InfluencerBooking')
    .select(`
      *,
      event:AllEvents!inner (
        *,
        event_owner:profiles!inner (*)
      ),
      influencer:profiles!inner (
        *,
        influencer:Influencers!inner (*)
      )
    `)
    .eq('influencer.id', user.value.id);

  if (response.error) {
    console.error(response.error);
    return;
  }

  Promise.all(response.data.map(async (ven) => {
    ven.event.event_owner.avatarSRC = await fetchImage(ven.event.event_owner.avatar_url, 'avatars')
  })).then(() => {
    influencersRequestedFromMe.value = response.data;
    console.log(response.data)
  })
}

// Fetch influencers I requested
async function fetchInfluencersIRequested() {
  const response = await supabase
    .from('InfluencerBooking')
    .select(`
      *,
      event:AllEvents!inner (
        *,
        event_owner:profiles!inner (*)
      ),
      influencer:profiles!inner (
        *,
        influencer:Influencers!inner (*)
      )
    `)
    .eq('event.event_owner.id', user.value.id);

  if (response.error) {
    console.error(response.error);
    return;
  }

  Promise.all(response.data.map(async (ven) => {
    ven.influencer.avatarSRC = await fetchImage(ven.influencer.avatar_url, 'avatars')
    ven.influencer.bannerSRC = await fetchImage(ven.influencer.banner_url, 'images')
  })).then(() => {
    influencersIRequested.value = response.data;
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
  fetchInfluencersRequestedFromMe();
  fetchInfluencersIRequested();
});

function formatDate(date) {
  if (!date) return '';
  return new Intl.DateTimeFormat('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' }).format(new Date(date));
}

// Updating request status
async function updateRequestStatus(request, status) {
  const { error } = await supabase.from('InfluencerBooking').update({ status }).eq('id', request.id);

  if (error) {
    console.error('Error updating request status:', error);
  } else {
    fetchInfluencersRequestedFromMe();
    fetchInfluencersIRequested();
  }
}

const selectedBooking = ref({});
function selectBooking(booking) {
  selectedBooking.value = booking;
}

// Filters - both `requested` and `offered` are checked by default
const showRequested = ref(true);
const showOffered = ref(true);
const showApproved = ref(false);
const showRejected = ref(false);
const showCancelled = ref(false);

const newInfluencerConversationInfo = computed(() => getContactInfo(selectedBooking.value?.influencer));
const newEventOwnerConversationInfo = computed(() => getContactInfo(selectedBooking.value?.event?.event_owner));
</script>

<template>
  <div class="bg-white dark:bg-gray-900 p-6 shadow-lg rounded-lg transition-colors">
    <div class="flex min-h-screen bg-[#FFFAF0] dark:bg-black text-gray-900">
      <main class="flex-1 p-8">
        <Tabs default-value="requested-from-me" class="w-full">
          <TabsList class="flex w-full justify-around border-b-2 border-orange-300 bg-orange-500 text-white">
            <TabsTrigger @click="selectedBooking = {}" value="requested-from-me" class="py-2 font-semibold text-md">
              My Influencer Opportunities
            </TabsTrigger>
            <TabsTrigger @click="selectedBooking = {}" value="requested" class="py-2 font-semibold text-md">
              Influencers I requested
            </TabsTrigger>
          </TabsList>

          <!-- Filters -->
          <div class="flex w-full justify-between mt-2">
            <div class="flex">
              <Checkbox :checked="showRequested" @click="showRequested = !showRequested" />
              <Label class="ml-2">Show Requested</Label>
            </div>
            <div class="flex">
              <Checkbox :checked="showOffered" @click="showOffered = !showOffered" />
              <Label class="ml-2">Show Offered</Label>
            </div>
            <div class="flex">
              <Checkbox :checked="showApproved" @click="showApproved = !showApproved" />
              <Label class="ml-2">Show Approved</Label>
            </div>
            <div class="flex">
              <Checkbox :checked="showRejected" @click="showRejected = !showRejected" />
              <Label class="ml-2">Show Rejected</Label>
            </div>
            <div class="flex">
              <Checkbox :checked="showCancelled" @click="showCancelled = !showCancelled" />
              <Label class="ml-2">Show Cancelled</Label>
            </div>
          </div>

          <!-- Venues Requested from Me -->
          <TabsContent value="requested-from-me" class="space-y-6">
            <p class="text-gray-800 p-2 font-semibold">
              View the venues that others have requested from you:
            </p>
            <div class="flex">
              <div class="w-1/3">
                <div v-for="item in filterRequests(influencersRequestedFromMe, showRequested, showOffered, showApproved, showRejected, showCancelled)"
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
                      <h6 class="font-semibold text-large text-gray-500">{{ item.event?.title }}</h6>
                    </div>
                    <div v-if="item.status == 'requested'" class="p-1 rounded-lg border-2 border-orange-300 h-min">Requested</div>
                    <div v-if="item.status == 'Offered'" class="p-1 rounded-lg border-2 border-orange-300 h-min">Offered</div>
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
                        <Button v-if="selectedBooking.status == 'requested'" @click="updateRequestStatus(selectedBooking, 'approved')" class="bg-green-500 text-white m-2 rounded-full">Accept</Button>
                        <Button v-if="selectedBooking.status == 'requested'" @click="updateRequestStatus(selectedBooking, 'rejected')" class="bg-red-500 text-white m-2 rounded-full">Reject</Button>
                        <Button v-if="selectedBooking.status == 'offered'" @click="updateRequestStatus(selectedBooking, 'approved')" class="bg-slate-500 text-white m-2 rounded-full">Cancel</Button>
                        <Button v-if="selectedBooking.status == 'rejected' || selectedBooking.status == 'approved'" @click="updateRequestStatus(selectedBooking, 'requested')" class="bg-white-500 text-orange m-2 rounded-full">Reopen</Button>
                        <Button v-if="selectedBooking.status == 'cancelled'" @click="updateRequestStatus(selectedBooking, 'offered')" class="bg-green-500 text-white m-2 rounded-full">Reopen</Button>
                  </template>
                </EventBookingCard>
                
              </div>
            </div>
          </TabsContent>

          <!-- Venues I Requested -->
          <TabsContent value="requested" class="space-y-6">
            <p class="text-gray-800 p-2 font-semibold">
              View the influencers that you have requested or been offered:
            </p>
            <div class="flex">
              <div class="w-1/3">
                <div v-for="item in filterRequests(influencersIRequested, showRequested, showOffered, showApproved, showRejected, showCancelled)"
                  :class="{ 'flex flex-col w-full border border-black-300 space-y-0 p-2 rounded-lg shadow-lg transition-transform transform hover:shadow-2xl dark:bg-[#1A1A1A]border-2 border-orange-500 bg-orange-100': selectedBooking.id == item.id,
                    'flex flex-col w-full border border-black-300 space-y-0 bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:shadow-2xl dark:bg-[#1A1A1A]': selectedBooking.id != item.id
                   }"
                  @click="selectBooking(item)">
                  <div class="flex">
                    <div class="flex flex-1 flex-col items-center">
                      <Avatar class="w-16 h-16">
                        <AvatarImage :src="item.influencer.avatarSRC" alt="User's Name" />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>
                      <h3 class="font-semibold text-center text-md mt-2">{{ item.influencer.full_name }}</h3>
                    </div>
                    <div class="flex grow flex-col items-center">
                      <h6 class="font-semibold text-large text-gray-500">{{ item?.event?.title }}</h6>
                    </div>
                    <div v-if="item.status == 'requested'" class="p-1 rounded-lg border-2 border-orange-300 h-min">Requested</div>
                    <div v-if="item.status == 'Offered'" class="p-1 rounded-lg border-2 border-orange-300 h-min">Offered</div>
                    <div v-if="item.status == 'approved'" class="p-1 rounded-lg bg-green-300 text-white-300 h-min">Approved</div>
                    <div v-if="item.status == 'cancelled'" class="p-1 rounded-lg bg-red-300 text-white-300 h-min">Cancelled</div>
                    <div v-if="item.status == 'rejected'" class="p-1 rounded-lg bg-red-300 text-white-300 h-min">Rejected</div>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-6">
                      <div>
                        <div class="space-y-0">
                          <div class="flex items-center">
                            <p class="text-sm font-semibold text-gray-700 mr-2">Note:</p>
                            <p class="text-sm">{{ item.note }}</p>
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
                <InfluencerBookingCard v-if="Object.keys(selectedBooking).length !== 0" :profile="selectedBooking?.influencer" :event-name="selectedBooking?.event?.title" :note="selectedBooking?.note">
                  <template #action-buttons>
                    <MessagesButton :label="'Contact'" :isIcon="false"
                          :newConversationInfo="newInfluencerConversationInfo"></MessagesButton>
                    <Button v-if="selectedBooking.status == 'cancelled'" @click="updateRequestStatus(selectedBooking, 'requested')" class="bg-green-500 text-white m-2 rounded-full">Reopen</Button>
                    <Button v-if="selectedBooking.status == 'requested' || selectedBooking.status == 'approved'" @click="updateRequestStatus(selectedBooking, 'cancelled')" class="bg-slate-500 text-white m-2 rounded-full">Cancel</Button>
                    <Button v-if="selectedBooking.status == 'offered'" @click="updateRequestStatus(selectedBooking, 'rejected')" class="bg-red-500 text-white m-2 rounded-full">Reject</Button>
                  </template>
                </InfluencerBookingCard>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  </div>
</template>