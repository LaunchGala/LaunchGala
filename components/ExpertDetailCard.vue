<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GlobeIcon, LinkedinIcon, MapPinIcon, UserIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import MessagesButton from './MessagesButton.vue';


const props = defineProps(['id', 'profile']);
const supabase = useSupabaseClient()
const profile = ref({});
const contactInfo = ref({})

const formatArray = arr => arr.length > 3 ? `${arr.slice(0, 3).join(", ")}...` : arr.join(", ");
async function getAllExperts(query) {
  const { data: AllExperts, error } = !!query ? await query : await supabase
    .from('profiles')
    .select('*, expert:Experts(*)') // Assuming the table is named 'experts'
    .eq('is_expert', true)
    .eq('id', props.id);
  console.log(error)
  Promise.all(AllExperts.map(async (profile) => {
    profile.avatarSRC = await fetchImage(profile.avatar_url, 'avatars')
    profile.bannerSRC = await fetchImage(profile.banner_url, 'images')
  })).then(() => {
    profile.value = AllExperts[0];
    contactInfo.value = {other_user_id: profile.value.id, other_user_name: profile.value.full_name}
    console.log(AllExperts)
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
        getAllExperts(null)
        console.log(contactInfo)
    }else{
        profile.value = props.profile
        fetchImage(profile.value.avatar_path, 'avatars')
        .then((avatar) => {
          profile.value.avatarSRC = avatar;
        })
        .catch((error) => {
          console.error('Error fetching avatar image:', error);
        });
        fetchImage(profile.value.banner_path, 'images')
        .then((banner) => {
          profile.value.bannerSRC = banner;
        })
        .catch((error) => {
          console.error('Error fetching banner image:', error);
        });
    }
})
</script>

<template>
    <Card class="max-w-4xl w-full bg-white dark:bg-gray-900 shadow-xl rounded-lg overflow-hidden">
      <CardHeader :style="profile?.bannerSRC 
    ? { backgroundImage: `url(${profile?.bannerSRC})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : null"
  class="bg-gradient-to-r from-orange-600 to-orange-400 p-6 flex flex-col items-center text-white">
        <button>
        <Avatar class="mb-4 w-24 h-24 ring-4 ring-white">
          <AvatarImage :src="profile?.avatarSRC" alt="Volunteer Name" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <CardTitle class="text-2xl font-bold">{{ profile?.full_name }}</CardTitle>
        <span class="text-m opacity-90">{{profile?.expert?.headline}} </span>

    </button>
        <div class="flex items-center mt-2">
          <MapPinIcon class="w-5 h-5" />
          <span class="ml-2 font-semibold">{{profile?.location}}</span>
        </div>
        <div v-if="profile?.expert?.will_travel" variant="light" class="mt-3 px-4 py-1 rounded text-white text-s font-normal bg-opacity-20">Available for Travel</div>
      </CardHeader>
      <CardContent class="p-6">
        <p class="text-gray-700 dark:text-gray-300 mb-6">
          {{profile?.about}}
        </p>
        <h2 class="font-semibold mb-4">Expert Categories:</h2>
        <div v-for="category in profile?.expert?.categories" class="mb-6 flex gap-2 flex-wrap">
          <span class="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{{category}}</span>
        </div>
        <h2 class="font-semibold mb-4">Industries:</h2>
        <div v-for="industry in profile?.industries" class="mb-6 flex gap-2 flex-wrap">
          <span class="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{{industry}}</span>
        </div>
        <h2 class="font-semibold mb-4">Links:</h2>

        <div class="flex flex-wrap justify-between">
          <div class="flex items-center text-gray-700 dark:text-gray-300">
            <GlobeIcon class="w-5 h-5"/>
            <a :href="formatUrl(profile?.website)" class="ml-2 hover:underline">{{profile?.website}}</a>
          </div>
          <div class="flex items-center text-gray-700 dark:text-gray-300">
            <LinkedinIcon class="w-5 h-5"/>
            <a :href="formatUrl(profile?.linkedin)" class="ml-2 hover:underline">{{profile?.linkedin}}</a>
          </div>
        </div>
        <div class="flex justify-between mt-8">
          <!-- <Button class="flex items-center justify-center px-8 py-3 rounded-md bg-orange-500 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500  text-white">
            Edit
          </Button> -->
          <MessagesButton v-if="Object.keys(contactInfo).length !== 0" :label="'Contact'" :isIcon="false" :newConversationInfo="contactInfo"></MessagesButton>
        </div>
      </CardContent>
    </Card>
</template>
