


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
            Speakers
          </a>
        </NuxtLink>
        <NuxtLink to="AllMedia">
          <a class="text-m font-medium  hover:underline">
            Media/PR
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
        <NuxtLink to="AllCommunities">
          <a class="text-m font-medium  hover:underline">
            Communities
          </a>
        </NuxtLink>
        <NuxtLink to="AllResources">
          <a class="text-m  font-bold hover:underline">
            Resources
          </a>
        </NuxtLink>
      </nav>
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto">
        + Create Event
      </button>
      <span class="absolute top-4 right-4 -mt-1 -mr-1 colorOrangeBg text-white rounded-full text-xs px-1">
                        69
                    </span>
      <NuxtLink to="logIn">
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto">
        Login/Profile 
      </button>
    </NuxtLink>
  </div>
</template>

<style>
    .headerMain {
        background-color: rgb(28, 28, 28);
        color: #fff;
        font-weight: 600;
    }
    .colorOrange {
        color: #ff6900;
    }

    .colorOrangeBg {
        background-color: #ff6900;
    }
</style>