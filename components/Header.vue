<script setup lang="ts">

const user = useSupabaseUser()

const isLoggedIn = computed(() => user.value !== null)

import { Badge } from '@/components/ui/badge'


</script>


<template>
        <div class=" w-full h-16 flex items-center justify-between px-4 headerMain shadow-md">
      <a class="flex items-center gap-2 font-semibold text-lg" href="/" rel="ugc">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span class="mr-10 colorOrange">Launch Gala</span>
      </a>
      <nav class="hidden lg:flex gap-6">
        <NuxtLink to="AllVenues">
          <a class="text-m font-medium  hover:underline">
            Venues
          </a>
        </NuxtLink>
        <NuxtLink to="AllVolunteers">
          <a class="text-m font-medium  hover:underline">
            Volunteers
          </a>
        </NuxtLink>
        <NuxtLink to="AllSponsors">
          <a class="text-m font-medium  hover:underline">
            Sponsors
          </a>
        </NuxtLink>
        <NuxtLink to="AllSpeakers">
          <a class="text-m font-medium  hover:underline">
            Experts
          </a>
        </NuxtLink>
        <NuxtLink to="AllVendors">

<a class="text-m font-medium  hover:underline">
  Vendors
</a>

</NuxtLink>
        <NuxtLink to="AllEvents">
          <a class="text-m font-medium  hover:underline">
            Events
          </a>
        </NuxtLink>
        <NuxtLink to="AllMedia">
          <a class="text-m font-medium  hover:underline">
            Media
          </a>

        </NuxtLink>
<!-- 

        <NuxtLink to="AllCommunities">
          <a class="text-m font-medium  hover:underline">
            Talents 
          </a>
          <Badge class="transform  text-xs py-0.5 px-2 bg-orange-500 text-white dark:bg-black">
            Coming Soon!
          </Badge>
        </NuxtLink>

        <NuxtLink to="AllCommunities">
          <a class="text-m font-medium  hover:underline">
            Communities
          </a>
          <Badge class="transform  text-xs py-0.5 px-2 bg-orange-500 text-white dark:bg-black">
            Coming Soon!
          </Badge>
        </NuxtLink> -->
        <NuxtLink to="AllResources">
          <!-- <Badge class="transform absolute rotate-45 text-xs py-0.5 px-2 bg-orange-500  text-white dark:bg-black">
            Coming Soon!
          </Badge> -->
          <a class="text-m  font-medium hover:underline">
            Resources
          </a>
        </NuxtLink>
        <!-- <NuxtLink to="AllCommunities">
          <a class="text-m font-medium  hover:underline">
            EventAI
          </a>
          <Badge class="transform  text-xs py-0.5 px-2 bg-orange-500 text-white dark:bg-black">
            Coming soon
          </Badge>
        </NuxtLink> -->
        <NuxtLink to="AllCommunities">
          <a class="text-m font-medium  hover:underline ml-8 mr-2">
            Angel AI
          </a>
          <Badge class="  text-xs border-orange-500 bg-white text-orange-500 ">
            $13,777
          </Badge>
        </NuxtLink>
      </nav>
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-m font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:underline h-10 px-4 py-2 ml-auto mr-8 ">
        + Create Event
      </button>
      <span class="absolute top-5 right-24 -mt-3 mr-6 bg-white text-orange-500 rounded-full text-xs px-1">
                        11
                    </span>
    <NuxtLink v-if="!isLoggedIn" to="logIn">
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-m font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-500 text-primary-foreground hover:bg-orange-400 h-10 px-4 py-2 ml-auto">
        Login
      </button>
    </NuxtLink>
      <NuxtLink v-else to="UserDashboard">
      <button class="inline-flex items-center justify-center border whitespace-nowrap rounded-md text-m font-medium disabled:pointer-events-none  border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white h-10 px-4 py-2 ml-auto">
        Dashboard 
      </button>
    </NuxtLink>
  </div>
</template>

<style>
    .headerMain {
        background-color: white;
        color: black;
        font-weight: 600;
    }
    .colorOrange {
        color: #ff6900;
    }

    .colorOrangeBg {
        background-color: #ff6900;
    }
</style>