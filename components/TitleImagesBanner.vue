<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from '@/components/ui/button';
const supabase = useSupabaseClient();

// Props: List of public image URLs
const props = defineProps({
  imageNames: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
  },
  showButton: {
    type: Boolean,
    default: false
  }
});

// State
const images = ref([]);
const displayedImages = ref([]);
const remainingImages = ref(0);

// Router instance
const router = useRouter();

// Fetch images
const fetchImages = async () => {
  if (props.imageNames && props.imageNames.length > 0) {
    const fetchedImages = await Promise.all(
      props.imageNames.map(async (fileName) => {
        const { data } = await supabase.storage.from('images').createSignedUrl(fileName, 60);
        return data.signedUrl;
      })
    );

    images.value = fetchedImages ? fetchedImages : [];
  }
};

// Open full gallery in a new page/component
const openFullGallery = () => {
  router.push({ name: 'AllImages', query: { images: JSON.stringify(images.value) } });
};

watch(
  () => props.imageNames,
  () => fetchImages(),
  { deep: true }
);

onMounted(() => {
  fetchImages();
});
</script>

<template>
    <img :src="images[0]" alt="Venue main image" class="w-full h-full object-cover" v-if="images.length > 0"/>
    <div v-if="showButton">
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <Button variant="ghost">
        <Share class="absolute top-8 right-8 text-xl font-bold text-white"/>Share

            <!-- <ShareButton @click="sharePage" class="w-5 h-5" /> Share -->
          </Button>
      <h1 class="absolute bottom-8 left-8 text-4xl font-bold text-white">{{ props.title }}</h1>

    <!-- Show All Photos Button -->

    <NuxtLink v-if="images?.length" :to="{ name: 'AllImagesPage', query: { images: JSON.stringify(images) } }">
    <Button  class="show-all-button absolute bottom-8 right-8 rounded-lg py-2 px-4 bg-orange-500 text-white">
      Show All Photos
    </Button>
    </NuxtLink>
    <p v-else>No images available</p></div>

</template>

<style scoped>
.carousel-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 8px;
  max-width: 600px;
  margin: auto;
}

.carousel-image {
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.carousel-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  border-radius: 8px;
}

.overlay-text {
  font-weight: bold;
}

.show-all-button {
  display: block;
  margin: 16px auto;
  padding: 8px 16px;
  background: #ff6900;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.show-all-button:hover {
  background: #e55b00;
}
</style>