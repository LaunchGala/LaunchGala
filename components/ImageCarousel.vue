<template>
  <div class="carousel" v-if="images?.length">
    <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-item" v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="'Image ' + (index + 1)" class="w-full h-full object-cover"/>
      </div>
    </div><div class="absolute inset-y-0 left-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    @click.stop="prevImage"
                    class="p-2 bg-white/90 hover:bg-white rounded-r-xl shadow-lg transform transition-transform hover:scale-105 ml-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    @click.stop="nextImage"
                    class="p-2 bg-white/90 hover:bg-white rounded-l-xl shadow-lg transform transition-transform hover:scale-105 mr-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
  </div>
  <p v-else>No images available</p>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';

const supabase = useSupabaseClient();
// Props: List of public image URLs
const props = defineProps({
  imageNames: {
    type: Array,
    required: true,
  },
});

const images = ref([]);
const currentIndex = ref(0);

// Function to move to the next image
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

// Function to move to the previous image
const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const fetchImages = async () => {
  if (props.imageNames && props.imageNames.length > 0) {
    Promise.all(
      props.imageNames.map(async (fileName) => {
        const urlData = await supabase.storage.from('images').createSignedUrl(fileName, 60);
        return urlData.data.signedUrl;
      })
    ).then((results) => (images.value = results));
  }
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

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  max-width: 600px;
  margin: auto;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  min-height: 100%;
  max-height: 100%;
}

.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  max-height: 100%;
}

.carousel-item img {
  display: block;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.carousel-button.prev {
  left: 10px;
}

.carousel-button.next {
  right: 10px;
}
</style>
