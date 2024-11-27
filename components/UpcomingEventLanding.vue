
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Heart, Share2, ArrowRight, Search } from 'lucide-vue-next'

const allEvents = ref([])

async function getAllEvents() {
  const { data: AllEvents, error } = await supabase.from('AllEvents').select('*, event_owner:profiles!created_by(*)').eq('is_published', true).limit(3)
  console.log(error)
  Promise.all(AllEvents.map(async (event) => {
    event.event_owner.avatarSRC = await fetchImage(event.event_owner.avatar_url)
  })).then(() => {
    allEvents.value = AllEvents;
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
  getAllEvents()
});
</script>

<template>
  <div class="mx-8 my-8 bg-white dark:bg-black">
    <div class="flex justify-between">
    <div class=" text-2xl font-semibold mb-4  text-gray-700">Upcoming Events</div>
    <Button variant="default" class="ButtonCol  hover:bg-gray-200 transition-colors">Provide your Venue</Button>
  </div>
  <p class="text-md mb-4 mr-8 dark:text-gray-400">Finding speakers, media, influencer, vendors & more</p>

    <div class="carousel flex space-x-6 overflow-x-auto py-6">
      
      <div v-for="event in allEvents" class="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
        <div class="relative">
          <ImageCarousel class="w-full h-64 object-cover" :image-names="event.images" alt="Apartment image" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 dark:text-white">{{event.title}}</div>
          <div class="text-gray-700 text-base dark:text-gray-300">
            <div class="flex items-center mb-1">
              <Avatar class="bg-gray-200 dark:bg-gray-700 mr-4">
              <AvatarImage :src="event?.event_owner?.avatarSRC" alt="@radix-vue" />
              <AvatarFallback class="dark:text-white">CN</AvatarFallback>
            </Avatar>
              {{event.event_owner?.full_name}}
            </div>
            <div class="flex items-center mt-2 mb-2">
              <Tag class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"/>
              {{event.event_type}}
            </div>
            <!--<div class="flex items-center mb-1">
              <Tag class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"/>
              {{event.industry}}
            </div>-->
            <div class="flex items-center mt-2 mb-2">
              <Calendar class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"/>
              {{event.event_start_date}}
            </div>
            <div class="flex items-center mt-2 mb-2">
              <MapPin class="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2"/>
              {{event.location}}
            </div>
            <p class="mt-2">
              {{event.description}}
            </p>
          </div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <div class="flex items-center justify-between mb-4">
            <NuxtLink :to="{ name: 'EventDetailPage', query: { id: event.id } }">

              <Button class="mt-4 inline-flex items-center rounded-lg py-2 px-4 hover:bg-gray-200 transition-colors ButtonCol">
                Check it out
                <ArrowRight class="w-5 h-5 ml-2" />
              </Button>
            </NuxtLink>
          </div>
          <div class="flex items-center justify-between">
            <Button variant="ghost" class="flex items-center justify-center dark:text-white">
              <Heart :fill="event.likeEvent ? 'red': 'none'" class="w-5 h-5 mr-1" />
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
      <NuxtLink to="AllEvents">
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