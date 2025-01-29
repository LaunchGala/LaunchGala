<template>
  <div class="full-gallery">
    <div v-for="(row, rowIndex) in groupedImages" :key="rowIndex" class="grid">
      <div
        v-for="(image, index) in row"
        :key="index"
        class="grid-item flex-1"
      >
        <img :src="image" :alt="'Image ' + (index + 1)"/>
      </div>
    </div>
    <button @click="goBack" class="close-button">Close</button>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const imageList = JSON.parse(route.query.images || '[]');

const goBack = () => {
  router.go(-1); // Go back to the previous page
};

// Group images into rows
const groupedImages = imageList.reduce((acc, image, index) => {
  // Add a new row for even indexes, single image
  if (index % 3 != 2) {
    acc.push([image]);
  } else {
    // Add to the current row (max 2 images per row for odd-indexed rows)
    acc[acc.length - 1].push(image);
  }
  return acc;
}, []);
console.log(groupedImages)
</script>
<style scoped>
.full-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}

.grid {
  display: flex;
  gap: 8px;
  max-width: 1000px;
  width: 100%;
}

.grid-item {
  display: flex;
}

.single {
}

.double {
}

.grid-item img {
  object-fit: contain;
  border-radius: 8px;
}

.close-button {
  margin-top: 16px;
  padding: 8px 16px;
  background: #ff6900;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.close-button:hover {
  background: #e55b00;
}
</style>