<template>
  <div
    class="image-uploader"
    @dragover.prevent="handleDragOver"
    @drop.prevent="handleDrop"
    @click="triggerFileInput"
  >
    <input
      type="file"
      multiple
      accept="image/*"
      ref="fileInput"
      @change="handleFiles"
      class="file-input"
    />
    <div class="drop-message">
      <p>Drag & Drop Images Here or Click to Select</p>
    </div>

    <!-- Preview for images yet to be uploaded -->
    <div class="preview-container">
      <div v-for="(image, index) in images" :key="index" class="image-wrapper">
        <img :src="image.url" class="preview-image" />
        <Badge @click="removeImage(index)" class="remove-button text-lg text-orange-500 hover:border-orange-500 hover:bg-orange-100 font-extrabold ml-2">
          <div class="flex items-center">
              X
            </div>
        </Badge>
      </div>
    </div>
  </div>
    <Button @click="uploadImages" v-show="images?.length" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
      <div  class="flex items-center">
        Upload and Attach to Listing
        <ArrowRight class="w-4 h-4 ml-2" />
      </div>
    </Button>
    <!-- Second container for already uploaded files -->
    <div class="uploaded-files" v-show="uploadedImages?.length">
      <h3>Atached Images</h3>
      <div class="preview-container">
        <div v-for="(file, index) in uploadedImages" :key="file.id" class="image-wrapper">
          <img :src="file" class="preview-image" />
          <Badge
            @click="confirmDelete(file.id, index)"
            class="remove-button text-lg text-orange-500 hover:border-orange-500 hover:bg-orange-100 font-extrabold ml-2"
          >
            <div class="flex items-center">X</div>
          </Badge>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const supabase = useSupabaseClient();

const props = defineProps(['imageNames']);

const fileInput = ref(null);
const images = ref([]);
const uploadedImages = ref([]);

const handleDragOver = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

const handleDrop = (event) => {
  const files = event.dataTransfer.files;
  handleFileSelection(files);
};

const handleFileSelection = (files) => {
  if (files) {
    const newImages = Array.from(files).map(file => {
      return {
        url: URL.createObjectURL(file),
        file
      };
    });
    images.value.push(...newImages);
  }
};

const handleFiles = (event) => {
  const files = event.target.files;
  handleFileSelection(files);
};
const removeImage = (index) => {
  const image = images.value[index];
  URL.revokeObjectURL(image.url); // Clean up the object URL
  images.value.splice(index, 1); // Remove the image from the array
};

const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

const fetchImages = async () => {
    if(!!props.imageNames && props.imageNames.length > 0)
    {
        Promise.all(props.imageNames?.map(async (fileName) => {
            const urlData = await supabase.storage.from('images').createSignedUrl(fileName,60)
            return urlData.data.signedUrl
        })).then(results => 
        uploadedImages.value = results)
    }
  }

const uploadImages = async () => {
  if (images.value.length === 0) {
    alert('No images to upload.');
    return;
  }
  const imageNames = []
  for (const image of images.value) {
    const { file } = image;
    const fileName = `${Date.now()}_${file.name}`;

    try {
      const { data, error } = await supabase
        .storage
        .from('images') // Replace with your bucket name
        .upload(fileName, file);

      if (error) {
        console.error('Upload error:', error);
        continue;
      }

      imageNames.push(data.path); // Use the file's path
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  }
  props.imageNames.push(imageNames)
  // Clear the image previews after upload
  images.value = [];
};

// Confirm delete with the user before removing from Supabase bucket
const confirmDelete = (fileId, index) => {
  if (confirm('Are you sure you want to delete this file?')) {
    deleteFileFromBucket(fileId, index);
  }
};

// Delete the file from Supabase bucket
const deleteFileFromBucket = async (fileId, index) => {
  try {
    const { error } = await supabase
      .storage
      .from('your-bucket-name') // Replace with your bucket name
      .remove([fileId]);

    if (error) {
      console.error('Deletion error:', error);
      return;
    }

    // Remove the file from the uploadedFiles list
    props.images.value.splice(index, 1);
  } catch (err) {
    console.error('Unexpected error:', err);
  }
};

watch(() => props.imageNames, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    fetchImages()
  }
});
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
