
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Heart, Share2, ArrowRight, Search } from 'lucide-vue-next'
import Badge from './ui/badge/Badge.vue';
const allVenues = ref([])

async function getAllVenues(query) {
  const { data: AllVenues, error } = await supabase.from('AllVenues').select('*, venue_owner:profiles!createdBy(*)').eq('is_published', true).limit(3)
  console.log(error)
  Promise.all(AllVenues.map(async (venue) => {
    venue.venue_owner.avatarSRC = await fetchImage(venue.venue_owner.avatar_url)
  })).then(() => {
    allVenues.value = AllVenues;
    console.log(AllVenues)
  })
}
const fetchImage = async (id) => {
    if(!!id)
    {
            const urlData = await supabase.storage.from('avatars').createSignedUrl(id, 60);
            return urlData?.data?.signedUrl ?? "";
    }
  }
onMounted(() => {
  getAllVenues(null)
})
</script>

<template>
  <div class="mx-8 my-8 bg-white dark:bg-black">
    <div class="flex justify-between">
    <div class=" text-2xl font-semibold mb-4  text-gray-700">Choose your Venue</div>
    <NuxtLink to="VenueListing">
    <Button variant="default" class="ButtonCol  hover:bg-gray-200 transition-colors">Provide your Venue</Button>
  </NuxtLink>
  </div>
  <p class="text-md mt-3 dark:text-gray-400">Finding speakers, media, influencer, vendors & more</p>

    <div class="carousel flex space-x-6 overflow-x-auto py-6">
      
      <div v-for="venue in allVenues" :key="venue.id" class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <div class="relative">
          <ImageCarousel class="w-full h-64 object-cover" :image-names="venue.images" alt="Apartment image" />
          <Badge v-if="venue.sponsorshipOption" variant="secondary" class="absolute top-3 right-3">Sponsorship Available</Badge>
        </div>
        <div class="px-6 py-4">          
          <!-- <div class="flex items-center mt-4 mb-4">
            <Avatar class="bg-gray-200 dark:bg-gray-700">
              <AvatarImage :src="venue.venue_owner.avatarSRC" alt="@radix-vue" />
              <AvatarFallback class="dark:text-white">CN</AvatarFallback>
            </Avatar>
            <span class="ml-2 font-semibold text-l text-gray-600 dark:text-gray-400">Host: {{ venue.venue_owner.full_name}}</span>
            
          </div> -->
          <h5 class="text-2xl font-bold text-gray-900 dark:text-white">{{ venue.title }}</h5>

          <span class="  text-l mt-4 text-gray-600 dark:text-gray-400">{{ venue.city }}, {{ venue.country }}</span>
          <div class=" text-l mt-2 mb-2 text-gray-600 dark:text-gray-400">Price: ${{ venue.price }}/hr</div>
          <!-- Hide Price here and on all detailed and listing for this venue if Price = 0 Null -->
          <div class="text-l mt-2 mb-2 text-gray-600 dark:text-gray-400"> Sponsorship option: {{ venue.sponsorshipOption ? 'Yes' : 'No' }}</div>
          <div class="text-l mt-2 mb-2 text-gray-600 dark:text-gray-400">Capacity: {{ venue.capacity }}</div>
          <div class="text-l mt-2 mb-2 text-gray-600 dark:text-gray-400">Venue type: {{ venue.venueType }}</div>
          <div v-for="amenity in venue.Amenities" :key="amenity">
            <div class="text-l mt-2 mb-2 text-gray-600 dark:text-gray-400">{{ amenity }}</div>
          </div>
        </div>

        <div class="px-6 pt-4 pb-2">
          <NuxtLink :to="{ name: 'VenuePageNew', query: { id: venue.id } }">
          <Button class="mt-4 inline-flex items-center rounded-lg py-2 px-4 hover:bg-gray-200 transition-colors ButtonCol">
            Explore
            <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </NuxtLink>
          <div class="flex items-center justify-between mt-3">
            <Button variant="ghost" class="flex items-center justify-center dark:text-white">
              <Heart :fill="venue.likeVenue ? 'orange' : 'none'" class="w-5 h-5 mr-1" />
              Like
            </Button>
            <Button variant="ghost" class="flex items-center justify-center dark:text-white">
              <Share2 class="w-5 h-5 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </div>
      

    </div>
    <div class="py-8">
      <NuxtLink to="AllVenues">
      <Button class="ButtonCol rounded-lg px-6 py-3 hover:bg-gray-200 transition-colors">
        View All
        <ArrowRight class="w-5 h-5 ml-2" />
          </Button>
        </NuxtLink>
    </div>
  </div>
</template>


<style>
 .OrangeCol {   
  border-color: #ff6900;
 }

 .ButtonCol {
  background-color: white;
  color:#ff6900;
  border-color: #ff6900;
  border-radius: solid 15px;
  border-width: 1px;
  text-align: center;
  justify-content: center;
  align-items: center;
  
 }
</style>