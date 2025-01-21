<template>
    <div>
      <div class="carousel-grid">
        <!-- Show the first 5 images -->
        <div
          v-for="(image, index) in displayedImages"
          :key="index"
          class="carousel-image"
          @click="openFullGallery"
        >
          <img :src="image" :alt="'Image ' + (index + 1)" />
          <!-- Show overlay if it's the last image and there are more -->
          <div v-if="index === 4 && remainingImages > 0" class="overlay">
            <span class="overlay-text">+{{ remainingImages }}</span>
          </div>
        </div>
      </div>
  
      <!-- Show All Photos Button -->
      <button v-if="images?.length > 5" @click="openFullGallery" class="show-all-button">
        Show All Photos
      </button>
  
      <p v-else>No images available</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  const supabase = useSupabaseClient();
  
  // Props: List of public image URLs
  const props = defineProps({
    imageNames: {
      type: Array,
      required: true,
    },
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
  
      images.value = fetchedImages;
      displayedImages.value = images.value.slice(0, 5); // Show up to 5 images
      remainingImages.value = images.value.length > 5 ? images.value.length - 5 : 0;
    }
  };
  
  // Open full gallery in a new page/component
  const openFullGallery = () => {
    router.push({ name: 'GalleryPage', query: { images: JSON.stringify(images.value) } });
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