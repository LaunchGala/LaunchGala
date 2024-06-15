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
const vendorTags = ref([]);



function addVendorTag(vendorTag: string) {
    if (props.vendorListing.vendorTags.includes(vendorTag)) {
        props.vendorListing.vendorTags = props.vendorListing.vendorTags.filter((item) => item !== vendorTag);
    } else {
        props.vendorListing.vendorTags.push(vendorTag);
    }
    console.log(props.vendorListing.vendorTags);


}


function openStateChange(state: boolean) {
    isOpen.value = state;
}

const props = defineProps(['vendorListing']);
console.log(props.vendorListing);

const mainSubSelectorVendors = [
    {
        main: 'Catering Services',
        icon: Theater,
        subs: [
            'Food & Beverage Catering',
            'Specialty Food Trucks',
            'Bartending Services',
        ],
    },
    {
        main: 'Event Rentals',
        icon: Theater,
        subs: [
            'AV Equipment (Audio-Visual Equipment)',
            'Lighting & Sound Systems',
            'Furniture & Decor',
            'Tents & Canopies',
            'Staging & Dance Floors',
        ],
    },
    {
        main: 'Entertainment',
        icon: Theater,
        subs: [
            'Live Bands & Musicians',
            'DJs & MCs',
            'Comedians',
            'Performers & Entertainers',
        ],
    },
    {
        main: 'Event Planning & Management',
        icon: Theater,
        subs: [
            'Event Planners',
            'Day-of Coordinators',
            'Event Staffing',
        ],
    },
    {
        main: 'Venue Rentals',
        icon: Theater,
        subs: [
            'Conference Centers',
            'Banquet Halls',
            'Outdoor Venues',
            'Unique Venues',
        ],
    },
    {
        main: 'Marketing & Promotion',
        icon: Theater,
        subs: [
            'Event Banners & Swag',
            'Promotional Materials',
            'Digital Marketing Services',
        ],
    },
    {
        main: 'Logistics',
        icon: Theater,
        subs: [
            'Transportation Services',
            'Parking Management',
            'Security Services',
        ],
    },
    {
        main: 'Photography & Videography',
        icon: Theater,
        subs: [
            'Event Photographers',
            'Videographers',
            'Photo Booth Rentals',
        ],
    },
    {
        main: 'Design Services',
        icon: Theater,
        subs: [
            'Graphic Design',
            'Interior & Event Design',
            'Floral Design & Arrangements',
        ],
    },
    {
        main: 'Tech Services',
        icon: Theater,
        subs: [
            'WiFi & Internet Services',
            'Event Apps & Software',
            'Tech Rentals',
        ],
    },
    {
        main: 'Business Services',
        icon: Theater,
        subs: [
            'Business Planning & Consulting',
            'Legal Services',
            'Accounting & Bookkeeping',
        ],
    },
    {
        main: 'Funding & Investments',
        icon: Theater,
        subs: [
            'Venture Capital',
            'Angel Investors',
            'Crowdfunding Platforms',
        ],
    },
    {
        main: 'Marketing & PR',
        icon: Theater,
        subs: [
            'Public Relations',
            'Digital Marketing',
            'Content Creation',
            'Social Media Management',
        ],
    },
    {
        main: 'Technology & Development',
        icon: Theater,
        subs: [
            'Software Development',
            'App Development',
            'IT Support',
            'Cybersecurity Services',
        ],
    },
    {
        main: 'HR & Recruitment',
        icon: Theater,
        subs: [
            'Staffing Agencies',
            'HR Consultants',
            'Talent Acquisition',
        ],
    },
    {
        main: 'Workspace Providers',
        icon: Theater,
        subs: [
            'Coworking Spaces',
            'Office Rentals',
            'Virtual Office Services',
        ],
    },
    {
        main: 'Product Development',
        icon: Theater,
        subs: [
            'Prototyping Services',
            'Industrial Design',
            'Manufacturing & Supply Chain',
        ],
    },
    {
        main: 'Education & Training',
        icon: Theater,
        subs: [
            'Workshops & Seminars',
            'Online Courses',
            'Mentorship & Coaching',
        ],
    },
    {
        main: 'Networking & Community',
        icon: Theater,
        subs: [
            'Startup Ecosystem Groups',
            'Innovation Hubs',
            'Professional Networks',
        ],
    },
    {
        main: 'Health & Wellness Services',
        icon: Theater,
        subs: [
            'Corporate Wellness Programs',
            'On-site Health Services',
            'Fitness Instructors',
        ],
    },
    {
        main: 'Insurance & Risk Management',
        icon: Theater,
        subs: [
            'Business Insurance',
            'Event Insurance',
        ],
    },
    {
        main: 'Environmental & Sustainability Services',
        icon: Theater,
        subs: [
            'Green Event Planning',
            'Sustainable Product Suppliers',
        ],
    },
    {
        main: 'Printing Services',
        icon: Theater,
        subs: [
            'Flyers & Brochures',
            'Business Cards',
            'Large Format Printing',
        ],
    },
    {
        main: 'Administrative Services',
        icon: Theater,
        subs: [
            'Virtual Assistants',
            'Office Support',
        ],
    },
    {
        main: 'Furniture & Office Supplies',
        icon: Theater,
        subs: [
            'Office Furniture',
            'Stationery Supplies',
        ],
    },
    {
        main: 'Translation & Interpretation Services',
        icon: Theater,
        subs: [
            'Language Translation',
            'On-site Interpretation',
        ],
    },
    {
        main: 'Legal & Compliance',
        icon: Theater,
        subs: [
            'Compliance Consulting',
            'Regulatory Services',
        ],
    },
]



</script>

<template>

    <div class="bg-white  min-h-screen py-10">
        <div class="container mx-auto px-4 lg:px-8">
            <Card>
                <CardHeader>

                    <CardTitle>Select Vendors Categories: (Select all categories you want to offer)</CardTitle>
                </CardHeader>
                <CardContent>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <MainSubSelectorVendor v-for="mainSubSelectorVendor in mainSubSelectorVendors" :mainSubSelectorVendor="mainSubSelectorVendor" :key="mainSubSelectorVendor.main" :vendor-listing="props.vendorListing"/>

                    </div>
                    
                </CardContent>
                <div class="flex justify-between items-center p-4">
                    <Button @click="$emit('previousStep')" as-child variant="default"
                        class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
                        <div class="flex items-center">
                            <ArrowLeft class="w-4 h-4 mr-2" />
                            Back
                        </div>
                    </Button>
                    <Progress :model-value="33" />
                    <Button @click="$emit('nextStep')" as-child variant="default"
                        class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
                        <div class="flex items-center">
                            Next
                            <ArrowRight class="w-4 h-4 ml-2" />
                        </div>
                    </Button>
                </div>
            </Card>
        </div>
    </div>
</template>



<!-- 
 <script setup lang="ts">
 import { ref } from 'vue';
 import { Button } from '@/components/ui/button';
 import { Progress } from '@/components/ui/progress';
 import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
 import { ArrowLeft, ArrowRight, Theater, Plus, Check } from 'lucide-vue-next';
 
 import {
   Popover,
   PopoverContent,
   PopoverTrigger,
 } from '@/components/ui/popover';
 
 const isOpen = ref(false);
 
 function addVendorTag(vendorTag: string) {
   if (props.vendorListing.vendorTags.includes(vendorTag)) {
     props.vendorListing.vendorTags = props.vendorListing.vendorTags.filter((item) => item !== vendorTag);
   } else {
     props.vendorListing.vendorTags.push(vendorTag);
   }
   console.log(props.vendorListing.vendorTags);
 }
 
 function openStateChange(state: boolean) {
   isOpen.value = state;
 }
 
 const props = defineProps(['vendorListing']);
 console.log(props.vendorListing);
 
 const mainSubSelectorVendors = [
   {
     main: 'Catering Services',
     icon: Theater,
     subs: [
       'Food & Beverage Catering',
       'Specialty Food Trucks',
       'Bartending Services',
     ],
   },
   {
     main: 'Event Rentals',
     icon: Theater,
     subs: [
       'AV Equipment (Audio-Visual Equipment)',
       'Lighting & Sound Systems',
       'Furniture & Decor',
       'Tents & Canopies',
       'Staging & Dance Floors',
     ],
   },
   {
     main: 'Entertainment',
     icon: Theater,
     subs: [
       'Live Bands & Musicians',
       'DJs & MCs',
       'Comedians',
       'Performers & Entertainers',
     ],
   },
   {
     main: 'Event Planning & Management',
     icon: Theater,
     subs: [
       'Event Planners',
       'Day-of Coordinators',
       'Event Staffing',
     ],
   },
   {
     main: 'Venue Rentals',
     icon: Theater,
     subs: [
       'Conference Centers',
       'Banquet Halls',
       'Outdoor Venues',
       'Unique Venues',
     ],
   },
   {
     main: 'Marketing & Promotion',
     icon: Theater,
     subs: [
       'Event Banners & Swag',
       'Promotional Materials',
       'Digital Marketing Services',
     ],
   },
   {
     main: 'Logistics',
     icon: Theater,
     subs: [
       'Transportation Services',
       'Parking Management',
       'Security Services',
     ],
   },
   {
     main: 'Photography & Videography',
     icon: Theater,
     subs: [
       'Event Photographers',
       'Videographers',
       'Photo Booth Rentals',
     ],
   },
   {
     main: 'Design Services',
     icon: Theater,
     subs: [
       'Graphic Design',
       'Interior & Event Design',
       'Floral Design & Arrangements',
     ],
   },
   {
     main: 'Tech Services',
     icon: Theater,
     subs: [
       'WiFi & Internet Services',
       'Event Apps & Software',
       'Tech Rentals',
     ],
   },
   {
     main: 'Business Services',
     icon: Theater,
     subs: [
       'Business Planning & Consulting',
       'Legal Services',
       'Accounting & Bookkeeping',
     ],
   },
   {
     main: 'Funding & Investments',
     icon: Theater,
     subs: [
       'Venture Capital',
       'Angel Investors',
       'Crowdfunding Platforms',
     ],
   },
   {
     main: 'Marketing & PR',
     icon: Theater,
     subs: [
       'Public Relations',
       'Digital Marketing',
       'Content Creation',
       'Social Media Management',
     ],
   },
   {
     main: 'Technology & Development',
     icon: Theater,
     subs: [
       'Software Development',
       'App Development',
       'IT Support',
       'Cybersecurity Services',
     ],
   },
   {
     main: 'HR & Recruitment',
     icon: Theater,
     subs: [
       'Staffing Agencies',
       'HR Consultants',
       'Talent Acquisition',
     ],
   },
   {
     main: 'Workspace Providers',
     icon: Theater,
     subs: [
       'Coworking Spaces',
       'Office Rentals',
       'Virtual Office Services',
     ],
   },
   {
     main: 'Product Development',
     icon: Theater,
     subs: [
       'Prototyping Services',
       'Industrial Design',
       'Manufacturing & Supply Chain',
     ],
   },
   {
     main: 'Education & Training',
     icon: Theater,
     subs: [
       'Workshops & Seminars',
       'Online Courses',
       'Mentorship & Coaching',
     ],
   },
   {
     main: 'Networking & Community',
     icon: Theater,
     subs: [
       'Startup Ecosystem Groups',
       'Innovation Hubs',
       'Professional Networks',
     ],
   },
   {
     main: 'Health & Wellness Services',
     icon: Theater,
     subs: [
       'Corporate Wellness Programs',
       'On-site Health Services',
       'Fitness Instructors',
     ],
   },
   {
     main: 'Insurance & Risk Management',
     icon: Theater,
     subs: [
       'Business Insurance',
       'Event Insurance',
     ],
   },
   {
     main: 'Environmental & Sustainability Services',
     icon: Theater,
     subs: [
       'Green Event Planning',
       'Sustainable Product Suppliers',
     ],
   },
   {
     main: 'Printing Services',
     icon: Theater,
     subs: [
       'Flyers & Brochures',
       'Business Cards',
       'Large Format Printing',
     ],
   },
   {
     main: 'Administrative Services',
     icon: Theater,
     subs: [
       'Virtual Assistants',
       'Office Support',
     ],
   },
   {
     main: 'Furniture & Office Supplies',
     icon: Theater,
     subs: [
       'Office Furniture',
       'Stationery Supplies',
     ],
   },
   {
     main: 'Translation & Interpretation Services',
     icon: Theater,
     subs: [
       'Language Translation',
       'On-site Interpretation',
     ],
   },
   {
     main: 'Legal & Compliance',
     icon: Theater,
     subs: [
       'Compliance Consulting',
       'Regulatory Services',
     ],
   },
 ];
 </script>
 
 <template>
   <div v-if="props.vendorListing && props.vendorListing.vendorTags">
     <div class="bg-white min-h-screen py-10">
       <div class="container mx-auto px-4 lg:px-8">
         <Card>
           <CardHeader>
             <CardTitle>Select Vendors Categories: (Select all categories you want to offer)</CardTitle>
           </CardHeader>
           <CardContent>
             <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               <MainSubSelectorVendor
                 v-for="mainSubSelectorVendor in mainSubSelectorVendors"
                 :mainSubSelectorVendor="mainSubSelectorVendor"
                 :key="mainSubSelectorVendor.main"
                 :vendor-listing="props.vendorListing"
               />
             </div>
           </CardContent>
           <div class="flex justify-between items-center p-4">
             <Button
               @click="$emit('previousStep')"
               as-child
               variant="default"
               class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2"
             >
               <div class="flex items-center">
                 <ArrowLeft class="w-4 h-4 mr-2" />
                 Back
               </div>
             </Button>
             <Progress :model-value="33" />
             <Button
               @click="$emit('nextStep')"
               as-child
               variant="default"
               class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2"
             >
               <div class="flex items-center">
                 Next
                 <ArrowRight class="w-4 h-4 ml-2" />
               </div>
             </Button>
           </div>
         </Card>
       </div>
     </div>
   </div>
 </template> -->