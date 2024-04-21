
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Home, Scale, SwitchCamera, BadgeDollarSign, Smile, Accessibility, Mic2, PartyPopper, HeartPulseIcon, Speech, Building, Image, Milestone, ShieldCheckIcon, BookOpen, Globe, Search, Users, GraduationCap, Camera, HotelIcon, Palette, Castle, Landmark, Theater, Wine, Sun, Medal, Briefcase, Store, Plus, Router, LucideHeartHandshake } from 'lucide-vue-next';
import { Hotel } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tv } from 'lucide-vue-next';

const isOpen = ref(false);
const volunteerTags = ref([])



function addVolunteerTag(volunteerTag: string) {
  if (props.volunteerListing.volunteerTags.includes(volunteerTag)) {
    props.volunteerListing.volunteerTags = props.volunteerListing.volunteerTags.filter((item) => item !== volunteerTag);
  } else {
    props.volunteerListing.volunteerTags.push(volunteerTag);
  }
  console.log(props.volunteerListing.volunteerTags);


}


function openStateChange(state: boolean) {
  isOpen.value = state;
}

const props = defineProps(['volunteerListing']);
console.log(props.volunteerListing);

const mainSubSelectors = [
  {
    main: 'Event Management and Coordination',
    icon: Theater,
    subs: [
      'Event Planning and Scheduling',
      'On-Site Event Coordination',
      'Speaker & Participant Coordination',
      'Vendor Coordination',
      'Accounting and Bookkeeping',
      'Event Wrap-Up and Debriefing',
    ],
  },
  {
    main: 'Technical Support and IT',
    icon: Router,
    subs: [
      'Audio/Visual Equipment Operation',
      'IT Support and Troubleshooting',
      'Live Streaming and Webinar Tech',
      'Lighting and Sound Engineering',
      'Software & Application Assistance',
      'Photography and Videography',
    ],
  },
  {
    main: 'Hospitality and Guest Services',
    icon: LucideHeartHandshake,
    subs: [
      'Welcome & Information Desk',
      'Mixologist & Barista',
      'Culinary skills',
      'Lounge and VIP Area Management',
      'Special Requests and Concierge Services',
      'Coat Check and Cloakroom Management',
    ],
  },  
  {
    main: 'Logistics and Setup',
    icon: Milestone,
    subs: [
      'Venue Layout and Design',
      'Staging and Decoration',
      'Equipment and Furniture Setup',
      'Transport and Delivery Coordination',
      'Post-Event Clean-Up and Teardown',
    ],
  },
  {
    main: 'Security and Safety',
    icon: ShieldCheckIcon,
    subs: [
      'Entrance and Exit Supervision',
      'Bag and Luggage Checks',
      'Emergency Evacuation Support',
      'Crowd Control and Line Management',

    ],
  },
  {
    main: 'Health and Medical Services',
    icon: HeartPulseIcon,
    subs: [
      'First Aid and Basic Health Care',
      'Medical Emergency Response',
      'Wellness and Relaxation services',
      'Hygiene and Sanitation services',

    ],
  },
  {
    main: 'Media and Communication',
    icon: Tv,
    subs: [
      'Social Media Coordination',
      'Content Creation and Blogging',
      'Public Relations and Outreach',
      'Interview and Testimonial Gathering',
    ],
  },
  {
    main: 'Language Interpretation and Translation',
    icon: Speech,
    subs: [
      'Simultaneous Interpretation',
      'Sign Language Interpretation',
      'Document and Material Translation',
      'Multilingual Assistance',

    ],
  },
  {
    main: 'Entertainment and Performers',
    icon: PartyPopper,
    subs: [
      'Stage Performers and Artists',
      'Composers & DJs',
      'Audience Engagement and Interaction',
      'Workshop and Activity Leaders',
 
    ],
  },
  {
    main: 'Workshop and Speakers',
    icon: Mic2,
    subs: [
      'Workshop Assistants',
      'Guest Speaker Support',
      'Training Session Helpers',
      'Educational Material Distribution',

    ],
  },
  {
    main: 'Special Needs Assistance',
    icon: Accessibility,
    subs: [
      'Disabled Attendees Assistance',
      'Accessibility Services',
      'Special Equipment Handling',

    ],
  },
  {
    main: 'Customer Service and Information',
    icon: Smile,
    subs: [
      'General Customer Service',
      'Lost and Found Services',
      'VIP and Special Guests Services',
      'Transportation and Parking services',

    ],
  },
  {
    main: 'Marketing and Promotion',
    icon: SwitchCamera,
    subs: [
      'Social Media marketing',
      'Promotional Material Distribution',
      'Brand Ambassadors and Advocates',
      'Survey and Feedback Collection',
      'Event Photography and Sharing',
      
    ],
  },
  {
    main: 'Fundraising and Sponsorship',
    icon: BadgeDollarSign,
    subs: [
      'Donation Collection and Management',
      'Sponsor Liaison and Support',
      'Fundraising Event Assistants',
      'Grant Application Assistance',

    ],
  },
  {
    main: 'Legal and Compliance',
    icon: Scale,
    subs: [
      'Contract Review and Management',
      'Risk Management and Compliance',
      'Regulatory and Standards Monitoring',
      'Legal Assistance and Advice',

    ],
  },
]

</script>

<template>

  <div v-if="isOpen" class="fixed w-screen h-screen top-0 bg-black bg-opacity-50 dark:bg-opacity-70" />
  <div class="bg-white  min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>

          <CardTitle>Select Volunteers Categories: (Select all categories you want to volunteer for)</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <MainSubSelector v-for="mainSubSelector in mainSubSelectors" :mainSubSelector="mainSubSelector" :key="mainSubSelector.main" :volunteer-listing="props.volunteerListing"/>










           
            <!-- Additional categories would go here -->
          </div>
        </CardContent>
        <div class="flex justify-between items-center p-4">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="10"  />
          <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
            <div  class="flex items-center">
              Next
              <ArrowRight class="w-4 h-4 ml-2" />
            </div>
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>
