<template>
    <div class="carousel" v-if="images?.length">
      <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="(image, index) in images" :key="index">
          <img :src="image" :alt="'Image ' + (index + 1)" />
        </div>
      </div>
      <button @click="prevImage" class="carousel-button prev">‹</button>
      <button @click="nextImage" class="carousel-button next">›</button>
    </div>
    <p v-else>No images available</p>
  </template>
  
  <script setup>
  import { onMounted, ref, watch } from 'vue'
  
const supabase = useSupabaseClient()
  // Props: List of public image URLs
  const props = defineProps({
    imageNames: {
      type: Array,
      required: true,
    },
  })
  
  const images = ref([])
  const currentIndex = ref(0)
  
  // Function to move to the next image
  const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length
  }
  
  // Function to move to the previous image
  const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
  }
  const fetchImages = async () => {
    if(!!props.imageNames && props.imageNames.length > 0)
    {
        Promise.all(props.imageNames?.map(async (fileName) => {
            const urlData = await supabase.storage.from('images').createSignedUrl(fileName,60)
            return urlData.data.signedUrl
        })).then(results => images.value = results)
    }
  }
  watch(() => props.imageNames, () => fetchImages(), {deep: true})
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
  }
  
  .carousel-item {
    min-width: 100%;
  }
  
  .carousel img {
    width: 100%;
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
  