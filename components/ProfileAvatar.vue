<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera } from "lucide-vue-next";
import { Button } from "@/components/ui/button";


const props = defineProps(['path', 'hideUpload'])
const { path } = toRefs(props)

const emit = defineEmits(['update:path', 'upload'])

const supabase = useSupabaseClient()

const uploading = ref(false)
const src = ref('')
const files = ref()

const downloadImage = async () => {
    if (path.value.includes('http')) {
        src.value = path.value;
    } else {
        try {
          const { data, error } = await supabase.storage.from('avatars').download(path.value)
          if (error) throw error
          src.value = URL.createObjectURL(data)
        } catch (error) {
          console.error('Error downloading image: ', error.message)
        }
    }
}

const uploadAvatar = async (evt) => {
  files.value = evt.target.files
  try {
    uploading.value = true

    if (!files.value || files.value.length === 0) {
      throw new Error('You must select an image to upload.')
    }

    const file = files.value[0]
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

    if (uploadError) throw uploadError

    emit('update:path', filePath)
    emit('upload')
  } catch (error) {
    alert(error.message)
  } finally {
    uploading.value = false
  }
}

downloadImage()

watch(path, () => {
  if (path.value) {
    downloadImage()
  }
})
</script>

<template>
  <div class="relative">
    <Avatar class="w-28 h-28 rounded-full shadow-lg">
          <AvatarImage :src="src" alt="Profile picture" />
          <AvatarFallback>No Avatar</AvatarFallback>
    </Avatar>

    <!-- <img
      v-if="src"
      :src="src"
      alt="Avatar"
      class="avatar image"
      style="width: 10em; height: 10em;"
    />
    <div v-else class="avatar no-image" :style="{ height: size, width: size }" /> -->

    
      <!-- <label class="button primary block" for="single">
        {{ uploading ? 'Uploading ...' : 'Upload' }}
      </label> -->
      <Button v-if="!hideUpload" class="absolute bottom-0 left-0 transform translate-y-1/3 rounded-half bg-orange-500  hover:bg-orange-400 focus:ring-orange-400">
        <label class="cursor-pointer flex items-center justify-center p-2 text-white">
          <Camera class="w-6 h-6 text-white"/>
          <input
            style="position: absolute; visibility: hidden;"
            type="file"
            id="single"
            accept="image/*"
            @change="uploadAvatar"
            :disabled="uploading"
          />             
          </label>
      </Button>
          

    </div>
</template>