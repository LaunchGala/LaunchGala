<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FacebookIcon, GlobeIcon, InstagramIcon, LinkedinIcon, MapPinIcon, TwitchIcon, TwitterIcon, UserIcon, YoutubeIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { DiscordLogoIcon } from '@radix-icons/vue';
import { CIcon } from '@coreui/icons-vue';
import { cibTiktok, cibSnapchat } from '@coreui/icons';

const props = defineProps(['id', 'influencer']);
const supabase = useSupabaseClient()
const contactInfo = ref({})

const influencer = ref({});
const formatArray = arr => arr.length > 3 ? `${arr.slice(0, 3).join(", ")}...` : arr.join(", ");
async function getAllInfluencers(query) {
  const { data: data, error } = !!query ? await query : await supabase
    .from('profiles')
    .select('*, influencer:Influencers(*)') // Assuming the table is named 'experts'
    .eq('is_influencer', true)
    .eq('id', props.id);;
  console.log(error)
  Promise.all(data.map(async (profile) => {
    profile.avatarSRC = await fetchImage(profile.avatar_url, 'avatars')
    profile.bannerSRC = await fetchImage(profile.banner_url, 'images')
  })).then(() => {
    influencer.value = data[0];
    contactInfo.value = {other_user_id: influencer.value.id, other_user_name: influencer.value.full_name}
    console.log(data)
  })
}
const fetchImage = async (id, bucket) => {
    if(!!id)
    {
            const urlData = await supabase.storage.from(bucket).createSignedUrl(id, 60);
            return urlData?.data?.signedUrl ?? "";
    }
  }
const formatUrl = url => !url?.startsWith('http') ? `https://${url}` : url;
onMounted(() => {
    if(props.id != null){
        getAllInfluencers(null)
    }else{
        influencer.value = props.influencer
        fetchImage(influencer.value.avatar_path, 'avatars')
        .then((avatar) => {
            influencer.value.avatarSRC = avatar;
        })
        .catch((error) => {
          console.error('Error fetching avatar image:', error);
        });
        fetchImage(influencer.value.banner_path, 'images')
        .then((banner) => {
            influencer.value.bannerSRC = banner;
        })
        .catch((error) => {
          console.error('Error fetching banner image:', error);
        });
    }
})
</script>

<template>
    <Card class="max-w-4xl w-full bg-white dark:bg-gray-900 shadow-xl rounded-lg overflow-hidden">
      <CardHeader :style="influencer?.bannerSRC 
    ? { backgroundImage: `url(${influencer?.bannerSRC})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : null"
  class="bg-gradient-to-r from-orange-600 to-orange-400 p-6 flex flex-col items-center text-white">
        <button>
        <Avatar class="mb-4 w-24 h-24 ring-4 ring-white">
          <AvatarImage :src="influencer?.avatarSRC" alt="Volunteer Name" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <CardTitle class="text-2xl font-bold">{{influencer?.full_name}}</CardTitle>
        <span class="text-m opacity-90">{{influencer?.headline}}</span>
    </button>
        <div class="flex items-center mt-2">
          <MapPinIcon class="w-5 h-5" />
          <span class="ml-2 font-semibold">{{influencer?.location}}</span>
        </div>
        <div v-if="influencer?.influencer?.will_travel" variant="light" class="mt-3 px-4 py-1 rounded text-white text-s font-normal bg-opacity-20">Available for Travel</div>
      </CardHeader>
      <CardContent class="p-6">
        <p class="text-gray-700 dark:text-gray-300 mb-6">
          {{influencer?.about}}
        </p>
        <h2 class="font-semibold mb-4">Influencer Categories:</h2>
        <div v-for="category in influencer?.influencer?.categories" class="mb-6 flex gap-2 flex-wrap">
          <span class="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{{category}}</span>
        </div>
        <h2 class="font-semibold mb-4">Links:</h2>

        <!-- <div class="flex  space-x-48">
          <div class="flex items-center text-gray-700 dark:text-gray-300">
            <GlobeIcon class="w-5 h-5"/>
            <a :href="influencer.website" class="ml-2 hover:underline">{{influencer.website}}</a>
          </div>
          <div class="flex items-center text-gray-700 dark:text-gray-300">
            <GlobeIcon class="w-5 h-5"/>
            <a href="https://portfolio.example.com" class="ml-2 hover:underline">WhatsApp</a>
          </div>
          <div class="flex items-center text-gray-700 dark:text-gray-300">
            <GlobeIcon class="w-5 h-5"/>
            <a href="https://portfolio.example.com" class="ml-2 hover:underline">Telegram</a>
          </div> 
        </div>-->
    <div class="flex flex-col justify-between">
      <div v-if="influencer?.website" class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md m-2">
        <GlobeIcon class="w-6 h-6 ml-3 text-blue-500" />
        <a :href="formatUrl(influencer?.website)" class="ml-2 hover:underline">{{influencer?.website}}</a>
      </div>
      <div v-if="influencer?.linkedin" class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md m-2">
        <LinkedinIcon class="w-6 h-6 ml-3 text-black-500" />
        <a :href="formatUrl(influencer?.linkedin)" class="ml-2 hover:underline">{{influencer?.linkedin}}</a>
      </div>
      <div v-if="influencer?.youtube" class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md m-2">
        <YoutubeIcon class="w-6 h-6 ml-3 text-red-500" />
        <a :href="formatUrl(influencer?.youtube)" class="ml-2 hover:underline">{{influencer?.youtube}}</a>
      </div>
      <div v-if="influencer?.facebook" class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md m-2">
        <FacebookIcon class="w-6 h-6 ml-3 text-blue-600" />
        <a :href="formatUrl(influencer?.facebook)" class="ml-2 hover:underline">{{influencer?.facebook}}</a>
      </div>
      <div v-if="influencer?.influencer?.instagram" class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md m-2">
        <InstagramIcon class="w-6 h-6 ml-3 text-blue-500" />
        <a :href="formatUrl(influencer?.influencer?.instagram)" class="ml-2 hover:underline">{{influencer?.influencer?.instagram}}</a>
      </div>
      <div v-if="influencer?.influencer?.tiktok" class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md m-2">
        <CIcon :icon="cibTiktok" class="w-6 h-6 ml-3 text-blue-500" />
        <a :href="formatUrl(influencer?.influencer?.tiktok)" class="ml-2 hover:underline">{{influencer?.influencer?.tiktok}}</a>
      </div>
      <div v-if="influencer?.influencer?.snapchat" class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md m-2">
        <CIcon :icon="cibSnapchat" class="w-6 h-6 ml-3 text-blue-500" />
        <a :href="formatUrl(influencer?.influencer?.snapchat)" class="ml-2 hover:underline">{{influencer?.influencer?.snapchat}}</a>
      </div>
      <div v-if="influencer?.influencer?.twitch" class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md m-2">
        <TwitchIcon class="w-6 h-6 ml-3 text-red-500" />
        <a :href="formatUrl(influencer?.influencer?.twitch)" class="ml-2 hover:underline">{{influencer?.influencer?.twitch}}</a>
      </div>
      <div v-if="influencer?.influencer?.discord" class="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-md m-2">
        <DiscordLogoIcon class="w-6 h-6 ml-3 text-blue-600" />
        <a :href="formatUrl(influencer?.influencer?.discord)" class="ml-2 hover:underline">{{influencer?.influencer?.discord}}</a>
      </div>
    </div>
        
        <div class="flex justify-between mt-8">

            <MessagesButton v-if="Object.keys(contactInfo).length !== 0" :label="'Contact'" :isIcon="false" :newConversationInfo="contactInfo"></MessagesButton>
        </div>
      </CardContent>
    </Card>
</template>
