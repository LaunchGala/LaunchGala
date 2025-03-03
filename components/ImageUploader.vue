<template>
  <div
    class="image-uploader"
    @dragover.prevent="handleDragOver"
    @drop.prevent="handleDrop"
    @click="triggerFileInput"
  >
    <div v-if="isLoading" class="loading-overlay">
      <div class="spinner"></div>
    </div>
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
          @click.stop="confirmDelete(image.id, index)"
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
const isLoading = ref(false); // Added loading state

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
const handleFiles = async (event) => {
  const files = event.target.files;
  await handleFileSelection(files);
};


// ✅ Function to validate file names before upload
function isValidKey(key) {
  return key.length > 0 && /^(\w|\/|!|-|\.|\*|'|\(|\)| |&|\$|@|=|;|:|\+|,|\?)*$/.test(key);
}

// Handle file selection
const handleFileSelection = async (files) => {
  if (files) {
    const selectedFiles = Array.from(files);

    if (!props.allowMultiple && selectedFiles.length > 1) {
      alert('Only one image can be uploaded.');
      return;
    }

    // ✅ Check all file names before uploading any files
    const invalidFiles = selectedFiles.filter(file => !isValidKey(file.name));
    
    if (invalidFiles.length > 0) {
      alert(`Invalid file names detected:\n${invalidFiles.map(f => f.name).join("\n")}\n\nPlease rename these files and try again.`);
      return; // Stop upload if any file name is invalid
    }

    if (!props.allowMultiple) {
      uploadedImages.value = []; // Clear previous images for single upload mode
    }
    isLoading.value = true; //Start loading
    // ✅ Proceed with upload only if all files are valid
    for (const file of selectedFiles) {
      await uploadImage(file);
    }
    isLoading.value = false; //End loading

    emit('update:images', uploadedImages.value.map((image) => image.id));
  }
};

// ✅ Upload a single image to Supabase storage
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

    // ✅ Add uploaded image to the list
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
    isLoading.value = true; // Start loading when deleting
    await deleteFileFromBucket(fileId, index);
    isLoading.value = false; // Stop loading when done
    emit('update:images', uploadedImages.value.map((image) => image.id));
  }
};

// Delete the file from Supabase storage
const deleteFileFromBucket = async (fileId, index) => {
  try {
    const { error } = await supabase.storage.from('images').remove([fileId]);

    if (error) {
      console.error('Deletion error:', error);
      return;
    }

    uploadedImages.value.splice(index, 1);
  } catch (err) {
    console.error('Unexpected error:', err);
  }
};

// Fetch existing images passed through props
const fetchImages = async () => {
  isLoading.value = true; // Start loading when fetching
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
          id: fileName,
          url: data.signedUrl,
        };
      })
    );

    uploadedImages.value = results.filter((image) => image !== null);
    emit('update:images', uploadedImages.value.map((image) => image.id));
  }
  isLoading.value = false; // Stop loading when done
};

// Fetch images when the component is mounted
onMounted(() => {
  fetchImages();
});

// Watch for changes in `imageNames` prop to update the image list
watch(
  () => props.imageNames,
  (newValue, oldValue) => {
    if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
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
/* Styles for the loading overlay and spinner */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  border-radius: 8px;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #ff6900;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
