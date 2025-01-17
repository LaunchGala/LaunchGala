<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import {
  GlobeIcon,
  MapPinIcon,
  Calendar as CalendarIcon,
  Clock,
  UserIcon,
  CheckCircle,
  Check
} from 'lucide-vue-next';
import { Button } from '@/components/ui/button';

const props = defineProps({
  event: {
    type: Object,
    required: true,
  }
});
const contactInfo = ref({})
async function getEvent() {
  const { data: AllEvents, error } = await supabase.from('AllEvents').select('*, event_owner:profiles!created_by(*)').eq('id', venueId)
  console.log(error)
  Promise.all(AllEvents.map(async (event) => {
    event.event_owner.avatarSRC = await fetchImage(event.event_owner.avatar_url)
  })).then(() => {
    props.event.value = AllEvents[0];
    contactInfo.value = {other_user_id: props.event.value.event_owner.id, other_user_name: props.event.value.event_owner.full_name}
    console.log(AllEvents)
  })
}
const fetchImage = async (id) => {
    if(!!id)
    {
            const urlData = await supabase.storage.from('avatars').createSignedUrl(id, 60);
            return urlData?.data?.signedUrl ?? "";
    }
    return "";
  }
onMounted(() => {
  getEvent()
});

// Function to handle the "Share" button click
const sharePage = () => {
  const url = window.location.href;
  const title = props.event.value.title;

  if (navigator.share) {
    // Use Web Share API if available
    navigator.share({
      title: title,
      text: `Check out this event: ${title}`,
      url: url,
    })
    .then(() => console.log('Successfully shared'))
    .catch((error) => console.error('Error sharing', error));
  } else {
    // Fallback: Copy URL to clipboard
    copyToClipboard(url);
    alert('Page link copied to clipboard!');
  }
};

// Function to copy a URL to clipboard
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => console.log('Text copied to clipboard'),
    (error) => console.error('Could not copy text: ', error)
  );
};
const date = ref<Date>()

const formatArray = (arr: string[]) =>
  arr.length > 3 ? `${arr.slice(0, 3).join(', ')}...` : arr.join(', ');

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const formatTime = (time: string) =>
  new Date(`1970-01-01T${time}:00Z`).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
</script>

<template>
  <Card class="max-w-4xl w-full bg-white dark:bg-gray-900 shadow-xl rounded-lg overflow-hidden">
    <CardHeader
      class="bg-gradient-to-r from-orange-600 to-orange-400 p-6 flex flex-col items-center text-white"
    >
      <Avatar class="mb-4 w-24 h-24 ring-4 ring-white">
        <AvatarImage :src="event.event_owner.avatarSRC" alt="Event Banner" />
        <AvatarFallback>EV</AvatarFallback>
      </Avatar>
      <h3 class="font-semibold text-center text-md mt-2">{{ event.event_owner.full_name }}</h3>
      <CardTitle class="text-2xl font-bold">{{ event.title }}</CardTitle>
      <span v-if="!!event.event_type" class="text-lg opacity-90">{{ event.event_type }}</span>
      <div v-if="!!event.location" class="flex items-center mt-2">
        <MapPinIcon class="w-5 h-5" />
        <span class="ml-2 font-semibold">{{ event.location }}</span>
      </div>
    </CardHeader>
    <CardContent class="p-6">
      <!-- Custom Buttons Slot -->
      <div class="flex justify-end mt-1 space-x-4 align-middle">
        <slot name="action-buttons">
        </slot>
      </div>
      <h3 v-if="!!event.description" class="font-semibold mt-6 mb-2">Description:</h3>
      <p v-if="!!event.description" class="text-gray-700 dark:text-gray-300 mb-6">{{ event.description }}</p>

      <!-- Event Details -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h3 class="font-semibold mb-2">Event Dates</h3>
          <div class="flex items-center">
            <CalendarIcon class="w-5 h-5 mr-2 text-orange-600" />
            <span>{{ formatDate(event.event_start_date) }}</span>
            <span v-if="event.event_end_date" class="mx-2">-</span>
            <span v-if="event.event_end_date">{{ formatDate(event.event_end_date) }}</span>
          </div>
        </div>
        <div>
          <h3 class="font-semibold mb-2">Event Time</h3>
          <div class="flex items-center">
            <Clock class="w-5 h-5 mr-2 text-orange-600" />
            <span>{{ formatTime(event.event_start_time) }}</span>
            <span v-if="event.event_end_time" class="mx-2">-</span>
            <span v-if="event.event_end_time">{{ formatTime(event.event_end_time) }}</span>
          </div>
        </div>
      </div>

      <!-- Industries -->
      <h3 v-if="!!event.industries" class="font-semibold mt-6 mb-2">Industries</h3>
      <div v-if="!!event.industries" class="flex gap-2 flex-wrap">
        <span
          v-for="industry in event.industries"
          :key="industry"
          class="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 text-sm font-medium px-2.5 py-0.5 rounded"
        >
          {{ industry }}
        </span>
      </div>

      <!-- Features -->
      <h3 class="font-semibold mt-6 mb-2">Event Features</h3>
      <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li v-if="event.invite_only">Invite Only</li>
        <li v-if="event.allow_volunteers_offering">Volunteer Opportunities</li>
        <li v-if="event.allow_sponsorship_offering">Sponsorship Opportunities</li>
        <li v-if="event.allow_expertise_offering">Expertise Opportunities</li>
        <li v-if="event.allow_vendors_offering">Vendor Opportunities</li>
        <li v-if="event.allow_registration_request">Registration Required</li>
        <li v-if="event.allow_venue_offering">Venue Offering</li>
      </ul>

      <!-- Ticket Info -->
      <h3 class="font-semibold mt-6 mb-2">Ticket Information</h3>
      <div class="flex items-center">
        <CheckCircle class="w-5 h-5 mr-2 text-green-600" />
        <span>{{ event.ticket_price > 0 ? `$${event.ticket_price}` : 'Free' }}</span>
      </div>

      <!-- Number of Guests -->
      <h3 v-if="!!event.number_of_guests" class="font-semibold mt-6 mb-2">Expected Guests</h3>
      <div v-if="!!event.number_of_guests" class="flex items-center">
        <UserIcon class="w-5 h-5 mr-2 text-blue-600" />
        <span>{{ event.number_of_guests }}</span>
      </div>

      <!-- External Link -->
      <h3 v-if="!!event.link" class="font-semibold mt-6 mb-2">Event Link</h3>
      <div v-if="event.link" class="flex items-center bg-gray-100 dark:bg-gray-800 rounded-md p-2">
        <GlobeIcon class="w-5 h-5 text-orange-600" />
        <a :href="event.link" target="_blank" class="ml-2 hover:underline">{{ event.link }}</a>
      </div>

    </CardContent>
      <CardFooter class="flex justify-between pt-4 border-t dark:border-gray-700">
        <div>
        </div>
        <div class="flex flex-col items-end space-y-2">
          
          <MessagesButton v-if="Object.keys(contactInfo).length !== 0" :label="'Contact Host'" :isIcon="false" :newConversationInfo="contactInfo"></MessagesButton>
        </div>
      </CardFooter>
  </Card>
</template>