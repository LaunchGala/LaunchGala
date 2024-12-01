<template>
  <div
    class="image-uploader"
    @dragover.prevent="handleDragOver"
    @drop.prevent="handleDrop"
    @click="triggerFileInput"
  >
    <input
      type="file"
      :multiple="allowMultiple"
      accept="image/*"
      ref="fileInput"
      @change="handleFiles"
      class="file-input"
    />
    <div class="drop-message">
      <p>Drag & Drop Images Here or Click to Select</p>
    </div>

    <!-- Preview for already uploaded and newly uploaded images -->
    <div class="preview-container">
      <div v-for="(image, index) in uploadedImages" :key="index" class="image-wrapper">
        <img :src="image.url" class="preview-image" />
        <Badge
          @click="confirmDelete(image.id, index)"
          class="remove-button text-lg text-orange-500 hover:border-orange-500 hover:bg-orange-100 font-extrabold ml-2"
        >
          <div class="flex items-center">X</div>
        </Badge>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue';
import { Badge } from '@/components/ui/badge';

const supabase = useSupabaseClient();
const emit = defineEmits(['update:images']);

const props = defineProps({
  allowMultiple: {
    type: Boolean,
    default: true,
  },
  imageNames: {
    type: Array,
    default: () => [],
  },
});

const fileInput = ref(null);
const uploadedImages = ref([]);

// Fetch existing images passed through props
const fetchImages = async () => {
  if (props.imageNames?.length > 0) {
    const results = await Promise.all(
      props.imageNames.map(async (fileName) => {
        const { data, error } = await supabase.storage
          .from('images') // Replace with your bucket name
          .createSignedUrl(fileName, 60);

        if (error) {
          console.error('Error fetching image URL:', error);
          return null;
        }

        return {
          id: fileName, // Use the file name as the ID
          url: data.signedUrl, // Signed URL for preview
        };
      })
    );

    // Filter out any null results in case of errors
    uploadedImages.value = results.filter((image) => image !== null);

    // Emit the initial images
    emit('update:images', uploadedImages.value.map((image) => image.id));
  }
};

// Handle file drag-and-drop
const handleDragOver = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

const handleDrop = async (event) => {
  const files = event.dataTransfer.files;
  await handleFileSelection(files);
};

// Handle file selection
const handleFileSelection = async (files) => {
  if (files) {
    const selectedFiles = Array.from(files);

    if (!props.allowMultiple && selectedFiles.length > 1) {
      alert('Only one image can be uploaded.');
      return;
    }

    if (!props.allowMultiple) {
      uploadedImages.value = []; // Clear previous images for single upload mode
    }

    for (const file of selectedFiles) {
      await uploadImage(file);
    }

    // Emit the updated images
    emit('update:images', uploadedImages.value.map((image) => image.id));
  }
};

const handleFiles = async (event) => {
  const files = event.target.files;
  await handleFileSelection(files);
};

// Upload a single image to Supabase storage
const uploadImage = async (file) => {
  const fileName = `${Date.now()}_${file.name}`;
  const url = URL.createObjectURL(file); // Generate preview URL

  try {
    const { data, error } = await supabase.storage
      .from('images') // Replace with your bucket name
      .upload(fileName, file);

    if (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image.');
      return;
    }

    // Add the uploaded image to the list
    uploadedImages.value.push({
      id: data.path,
      url,
    });
  } catch (err) {
    console.error('Unexpected error:', err);
  }
};

// Trigger file input click
const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

// Confirm and delete an image
const confirmDelete = async (fileId, index) => {
  if (confirm('Are you sure you want to delete this file?')) {
    await deleteFileFromBucket(fileId, index);

    // Emit the updated images
    emit('update:images', uploadedImages.value.map((image) => image.id));
  }
};

// Delete the file from Supabase storage
const deleteFileFromBucket = async (fileId, index) => {
  try {
    const { error } = await supabase.storage
      .from('images') // Replace with your bucket name
      .remove([fileId]);

    if (error) {
      console.error('Deletion error:', error);
      return;
    }

    // Remove the image from the list
    uploadedImages.value.splice(index, 1);
  } catch (err) {
    console.error('Unexpected error:', err);
  }
};

// Fetch existing images when component is mounted
onMounted(() => {
  fetchImages();
});
function arraysAreEqual(arr1, arr2) {
  // Check if the lengths are different
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Iterate over the elements and compare them
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // If all elements are equal, return true
  return true;
}
// Watch for changes in `imageNames` prop to update the image list
watch(
  () => props.imageNames,
  (newValue, oldValue) => {
    if (!arraysAreEqual(newValue, oldValue)) {
      fetchImages();
    }
  }
);
</script>



<style scoped>
.image-uploader {
  border: 2px dashed;
  border-color: rgba(249, 115, 22, .4);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  position: relative;
  background-color: #f9f9f9;
  cursor: pointer;
}

.file-input {
  display: none;
}

.drop-message {
  margin-bottom: 20px;
}

.preview-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  width: 100%;
}

.image-wrapper {
  position: relative;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-button {
  position: absolute;
  top: -15px;
  right: -10px;
  cursor: pointer;
  padding: 0px;
  background: rgba(255, 255, 255, 0.0);
}

.remove-button:hover {
  background: rgba(255, 255, 255, 0.9);
}

.uploaded-files {
  margin-top: 20px;
}
</style>
