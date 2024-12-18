<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FacebookIcon, GlobeIcon, InstagramIcon, LinkedinIcon, MapPinIcon, TwitterIcon, UserIcon, Youtube, YoutubeIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'


const props = defineProps(['id', 'profile']);
const supabase = useSupabaseClient()
const vendor = ref({});
const contactInfo = ref({})

const formatArray = arr => arr.length > 3 ? `${arr.slice(0, 3).join(", ")}...` : arr.join(", ");
async function getAllVendors(query) {
  const { data: AllVendors, error } = !!query ? await query : await supabase
    .from('Vendors')
    .select('*') // Assuming the table is named 'experts'
    .eq('id', props.id);
  console.log(error)
  Promise.all(AllVendors.map(async (v) => {
    v.businessLogo = await fetchImage(v.business_logo, 'images')
  })).then(() => {
    vendor.value = AllVendors[0];
    contactInfo.value = {other_user_id: profile.value.created_by, other_user_name: profile.value.full_name}
    console.log(AllVendors)
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
        getAllVendors(null)
    }
})
</script>

<template>
    <Card class="max-w-4xl w-full bg-white dark:bg-gray-900 shadow-xl rounded-lg overflow-hidden">
      <CardHeader class="bg-gradient-to-r from-orange-600 to-orange-400 p-6 flex flex-col items-center text-white">
        <button>
        <Avatar class="mb-4 w-24 h-24 ring-4 ring-white">
          <AvatarImage :src="vendor?.businessLogo" alt="Volunteer Name" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <CardTitle class="text-2xl font-bold">{{ vendor?.business_name }}</CardTitle>
        <span class="text-m opacity-90">{{vendor?.headline}} </span>

    </button>
        <div class="flex items-center mt-2">
          <MapPinIcon class="w-5 h-5" />
          <span class="ml-2 font-semibold">{{vendor?.location}}</span>
        </div>
      </CardHeader>
      <CardContent class="p-6">
        <h2 class="font-semibold mb-4">Vendor Categories:</h2>
        <p class=" ml-2 text-gray-700 dark:text-gray-300 mb-6">
          {{vendor?.industry}}
        </p>
        <h2 class="font-semibold mb-4">Services/Products Offered:</h2>
        <p class=" ml-2 text-gray-700 dark:text-gray-300 mb-6">
          {{vendor?.services_offered}}
        </p>
        
        <h2 class="font-semibold mb-4">Links:</h2>

        <div class="flex flex-col justify-between">
          <div v-if="vendor?.website" class="flex items-center text-gray-700 dark:text-gray-300">
            <GlobeIcon class="w-5 h-5"/>
            <a :href="formatUrl(vendor?.website)" class="ml-2 hover:underline">{{vendor?.website}}</a>
          </div>
          <div v-if="vendor?.linkedin" class="flex items-center text-gray-700 dark:text-gray-300">
            <LinkedinIcon class="w-5 h-5"/>
            <a :href="formatUrl(vendor?.linkedin)" class="ml-2 hover:underline">{{vendor?.linkedin}}</a>
          </div>
          <div v-if="vendor?.twitter" class="flex items-center text-gray-700 dark:text-gray-300">
            <TwitterIcon class="w-5 h-5"/>
            <a :href="formatUrl(vendor?.twitter)" class="ml-2 hover:underline">{{vendor?.twitter}}</a>
          </div>
          <div v-if="vendor?.youtube" class="flex items-center text-gray-700 dark:text-gray-300">
            <YoutubeIcon class="w-5 h-5"/>
            <a :href="formatUrl(vendor?.youtube)" class="ml-2 hover:underline">{{vendor?.youtube}}</a>
          </div>
          <div v-if="vendor?.facebook" class="flex items-center text-gray-700 dark:text-gray-300">
            <FacebookIcon class="w-5 h-5"/>
            <a :href="formatUrl(vendor?.facebook)" class="ml-2 hover:underline">{{vendor?.facebook}}</a>
          </div>
          <div v-if="vendor?.instagram" class="flex items-center text-gray-700 dark:text-gray-300">
            <InstagramIcon class="w-5 h-5"/>
            <a :href="formatUrl(vendor?.instagram)" class="ml-2 hover:underline">{{vendor?.instagram}}</a>
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
