<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { 
  MapPin, Users, Calendar, Clock,
  MessageCircle, CheckCircle, XCircle,
  Search, Filter, Star, Book,
  Briefcase, GraduationCap, Award,
  Sparkles, Heart, Globe,
  ArrowUpRight
} from 'lucide-vue-next';

const supabase = useSupabaseClient();
const user = useSupabaseUser();

// State
const influencersRequestedFromMe = ref([]);
const influencersIRequested = ref([]);
const selectedBooking = ref({});
const activeTab = ref('requested-from-me');
const searchQuery = ref('');

// Filters
const filters = ref({
  requested: true,
  offered: true,
  approved: false,
  rejected: false,
  cancelled: false
});

// Stats
const stats = computed(() => [
  {
    label: 'Total Requests',
    value: influencersRequestedFromMe.value.length,
    icon: Book,
    trend: '+12%',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    label: 'Pending Approval',
    value: influencersRequestedFromMe.value.filter(e => e.status === 'requested').length,
    icon: Clock,
    trend: '+5%',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50'
  },
  {
    label: 'Approved',
    value: influencersRequestedFromMe.value.filter(e => e.status === 'approved').length,
    icon: CheckCircle,
    trend: '+18%',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    label: 'Rejected/Cancelled',
    value: influencersRequestedFromMe.value.filter(e => e.status === 'rejected' || v.status === 'cancelled').length,
    icon: XCircle,
    trend: '-2%',
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  }
]);

function getContactInfo(profile) {
  if (!profile) return null;
  return { other_user_id: profile.id, other_user_name: profile.full_name };
}

function filterRequests(requests, requested, offered, approved, rejected, cancelled) {
  return requests.filter(req => {
    const matchesSearch = searchQuery.value === '' || 
      req.event?.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      req.influencer?.full_name.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesStatus = 
      (req.status === 'requested' && requested) ||
      (req.status === 'offered' && offered) ||
      (req.status === 'approved' && approved) ||
      (req.status === 'rejected' && rejected) ||
      (req.status === 'cancelled' && cancelled);

    return matchesSearch && matchesStatus;
  });
}

async function fetchInfluencersRequestedFromMe() {
  const { data, error } = await supabase
    .from('InfluencerBooking')
    .select(`
      *,
      event:AllEvents!inner(*,
        event_owner:profiles!inner(*)
      ),
      influencer:profiles!inner(*,
        influencer:Influencers!inner(*)
      )
    `)
    .eq('influencer.id', user.value.id);

  if (error) {
    console.error(error);
    return;
  }

  Promise.all(
    data.map(async (influencer) => {
      influencer.event.event_owner.avatarSRC = await fetchImage(
        influencer.event.event_owner.avatar_url,
        'avatars'
      );
      return influencer;
    })
  ).then((influencers) => {
    influencersRequestedFromMe.value = influencers;
  });
}

async function fetchInfluencersIRequested() {
  const { data, error } = await supabase
    .from('InfluencerBooking')
    .select(`
      *,
      event:AllEvents!inner(*,
        event_owner:profiles!inner(*)
      ),
      influencer:profiles!inner(*,
        influencer:Influencers!inner(*)
      )
    `)
    .eq('event.event_owner.id', user.value.id);

  if (error) {
    console.error(error);
    return;
  }

  Promise.all(
    data.map(async (influencer) => {
      influencer.influencer.avatarSRC = await fetchImage(
        influencer.influencer.avatar_url,
        'avatars'
      );
      influencer.influencer.bannerSRC = await fetchImage(
        influencer.influencer.banner_url,
        'images'
      );
      return influencer;
    })
  ).then((influencers) => {
    influencersIRequested.value = influencers;
  });
}

async function fetchImage(id, bucket) {
  if (!id) return '';
  if (id.includes('http')) return id;
  
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUrl(id, 60);
    
  return error ? '' : data.signedUrl;
}

async function updateRequestStatus(request, status) {
  const { error } = await supabase
    .from('InfluencerBooking')
    .update({ status })
    .eq('id', request.id);

  if (error) {
    console.error('Error updating request status:', error);
    return;
  }

  await Promise.all([
    fetchInfluencersRequestedFromMe(),
    fetchInfluencersIRequested()
  ]);
}

function formatDate(date) {
  if (!date) return '';
  return new Intl.DateTimeFormat('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date(date));
}

function getStatusColor(status) {
  const colors = {
    requested: 'bg-orange-100 text-orange-600',
    offered: 'bg-blue-100 text-blue-600',
    approved: 'bg-green-100 text-green-600',
    rejected: 'bg-red-100 text-red-600',
    cancelled: 'bg-gray-100 text-gray-600'
  };
  return colors[status] || 'bg-gray-100 text-gray-600';
}

onMounted(() => {
  fetchInfluencersRequestedFromMe();
  fetchInfluencersIRequested();
});

const newInfluencerConversationInfo = computed(() => 
  getContactInfo(selectedBooking.value?.influencer)
);

const newEventOwnerConversationInfo = computed(() => 
  getContactInfo(selectedBooking.value?.event?.event_owner)
);
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Section -->
    <div class="bg-white rounded-2xl shadow-sm mb-6">
      <div class="p-6">
        <h1 class="text-2xl font-bold text-gray-900">Influencer Management</h1>
        <p class="text-gray-600 mt-1">Manage your influencer bookings and requests</p>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div 
            v-for="stat in stats" 
            :key="stat.label"
            class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-600">{{ stat.label }}</p>
                <p class="text-2xl font-bold text-gray-900 mt-1">{{ stat.value }}</p>
              </div>
              <div :class="['p-3 rounded-xl', stat.bgColor]">
                <component :is="stat.icon" :class="['w-6 h-6', stat.color]" />
              </div>
            </div>
            <div class="mt-4 flex items-center text-sm">
              <span :class="stat.color">{{ stat.trend }}</span>
              <span class="text-gray-600 ml-2">vs last month</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs and Filters -->
      <div class="border-t border-gray-100">
        <div class="p-4 flex items-center justify-between">
          <div class="flex space-x-4">
            <button 
              v-for="tab in ['requested-from-me', 'requested']"
              :key="tab"
              @click="activeTab = tab"
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-colors',
                activeTab === tab 
                  ? 'bg-orange-100 text-orange-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              ]"
            >
              {{ tab === 'requested-from-me' ? 'Requests Received' : 'My Requests' }}
            </button>
          </div>

          <div class="flex items-center space-x-4">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search influencers or events..."
                class="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
              <Search class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <button 
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              @click="$refs.filterDialog.showModal()"
            >
              <Filter class="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <!-- Filter Tags -->
        <div class="px-4 pb-4 flex flex-wrap gap-2">
          <button
            v-for="(value, status) in filters"
            :key="status"
            @click="filters[status] = !filters[status]"
            :class="[
              'px-3 py-1 rounded-full text-sm font-medium transition-colors',
              value ? getStatusColor(status) : 'bg-gray-100 text-gray-600'
            ]"
          >
            {{ status.charAt(0).toUpperCase() + status.slice(1) }}
          </button>
        </div>
      </div>
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Requests List -->
      <div class="lg:col-span-1 space-y-4">
        <div 
          v-for="booking in activeTab === 'requested-from-me' 
            ? filterRequests(influencersRequestedFromMe, ...Object.values(filters))
            : filterRequests(influencersIRequested, ...Object.values(filters))"
          :key="booking.id"
          @click="selectedBooking = booking"
          :class="[
            'bg-white rounded-xl p-4 shadow-sm border transition-all cursor-pointer',
            selectedBooking.id === booking.id 
              ? 'border-orange-500 ring-2 ring-orange-200'
              : 'border-gray-100 hover:shadow-md'
          ]"
        >
          <div class="flex items-start space-x-4">
            <img 
              :src="activeTab === 'requested-from-me' 
                ? booking.event.event_owner.avatarSRC 
                : booking.influencer.avatarSRC"
              :alt="activeTab === 'requested-from-me'
                ? booking.event.event_owner.full_name
                : booking.influencer.full_name"
              class="w-12 h-12 rounded-full object-cover"
            >
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="font-medium text-gray-900 truncate">
                    {{ activeTab === 'requested-from-me'
                      ? booking.event.event_owner.full_name
                      : booking.influencer.full_name }}
                  </h3>
                  <p class="text-sm text-gray-600 mt-1">
                    {{ booking.event.title }}
                  </p>
                </div>
                <span :class="['px-2 py-1 text-xs rounded-full', getStatusColor(booking.status)]">
                  {{ booking.status.charAt(0).toUpperCase() + booking.status.slice(1) }}
                </span>
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <Calendar class="w-4 h-4 mr-1" />
                {{ formatDate(booking.event.event_start_date) }}
              </div>
              <div class="mt-1 flex items-center text-sm text-gray-500">
                <Users class="w-4 h-4 mr-1" />
                {{ booking.event.number_of_guests }} guests
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Booking Details -->
      <div class="lg:col-span-2">
        <div v-if="selectedBooking.id" class="bg-white rounded-xl shadow-sm border border-gray-100">
          <div class="p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-gray-900">Influencer Booking Details</h2>
              <span :class="['px-3 py-1 rounded-full text-sm font-medium', getStatusColor(selectedBooking.status)]">
                {{ selectedBooking.status.charAt(0).toUpperCase() + selectedBooking.status.slice(1) }}
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Influencer Details -->
              <div class="space-y-4">
                <div class="flex"><h3 class="font-medium text-gray-900">Influencer Information</h3>
                  <NuxtLink :to="{ name: 'InfluencerCard', query: { id: selectedBooking.influencer.id } }">
                    <ArrowUpRight class="ml-2 text-orange-500 border-1 rounded-md transform hover:translate-x-1 hover:bg-orange-100 transition-transform duration-300"></ArrowUpRight>
                  </NuxtLink>
                </div>
                <div class="space-y-2">
                  <p class="text-sm">
                    <span class="font-medium text-gray-700">Name:</span>
                    {{ activeTab === 'requested-from-me'
                      ? selectedBooking.influencer.full_name
                      : selectedBooking.influencer.full_name }}
                  </p>
                  <p class="text-sm">
                    <span class="font-medium text-gray-700">Influencerise:</span>
                    {{ selectedBooking.influencer.influencer.headline }}
                  </p>
                  <p class="text-sm">
                    <span class="font-medium text-gray-700">Categories:</span>
                    {{ selectedBooking.influencer.influencer.categories?.join(', ') }}
                  </p>
                </div>
              </div>

              <!-- Event Details -->
              <div class="space-y-4">
                <div class="flex"><h3 class="font-medium text-gray-900">Event Information</h3>
                  <NuxtLink :to="{ name: 'EventCardNew', query: { id: selectedBooking.event.id } }">
                    <ArrowUpRight class="ml-2 text-orange-500 border-1 rounded-md transform hover:translate-x-1 hover:bg-orange-100 transition-transform duration-300"></ArrowUpRight>
                  </NuxtLink>
                </div>
                <div class="space-y-2">
                  <p class="text-sm">
                    <span class="font-medium text-gray-700">Event:</span>
                    {{ selectedBooking.event.title }}
                  </p>
                  <p class="text-sm">
                    <span class="font-medium text-gray-700">Type:</span>
                    {{ selectedBooking.event.event_type }}
                  </p>
                  <p class="text-sm">
                    <span class="font-medium text-gray-700">Guests:</span>
                    {{ selectedBooking.event.number_of_guests }}
                  </p>
                  <p class="text-sm">
                    <span class="font-medium text-gray-700">Dates:</span>
                    {{ formatDate(selectedBooking.event.event_start_date) }} - 
                    {{ formatDate(selectedBooking.event.event_end_date) }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="mt-6 flex items-center justify-end space-x-3">
              <button
                class="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <MessageCircle class="w-5 h-5" />
              </button>
              
              <!-- Buttons for influencer -->
              <template v-if="activeTab === 'requested-from-me'">
                <button
                  v-if="selectedBooking.status === 'requested'"
                  @click="updateRequestStatus(selectedBooking, 'rejected')"
                  class="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  Reject
                </button>
                <button
                  v-if="selectedBooking.status === 'requested'"
                  @click="updateRequestStatus(selectedBooking, 'approved')"
                  class="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                >
                  Accept
                </button>
              </template>

              <!-- Buttons for requester -->
              <template v-else>
                <button
                  v-if="['requested', 'approved'].includes(selectedBooking.status)"
                  @click="updateRequestStatus(selectedBooking, 'cancelled')"
                  class="px-4 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  v-if="selectedBooking.status === 'cancelled'"
                  @click="updateRequestStatus(selectedBooking, 'requested')"
                  class="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                >
                  Reopen
                </button>
              </template>
            </div>
          </div>
        </div>

        <div 
          v-else 
          class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center text-center"
        >
          <GraduationCap class="w-12 h-12 text-gray-400 mb-4" />
          <h3 class="text-lg font-medium text-gray-900">No Influencer Selected</h3>
          <p class="text-gray-600 mt-2">Select an influencer booking from the list to view its details</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>