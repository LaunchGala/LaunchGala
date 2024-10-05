
<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, X } from 'lucide-vue-next';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { Progress } from '@/components/ui/progress';



const props = defineProps(['venueListing']);
const name = ref('Vue.js');
const files = ref([])

class UploadableFile {
	constructor(file) {
		this.file = file
		this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`
		this.url = URL.createObjectURL(file)
		this.status = null
	}
}

function addFiles(newFiles){
  props.venueListing.images = newFiles;
  let newUploadableFiles = [...newFiles].map((file) => new UploadableFile(file)).filter((file) => !fileExists(file.id))
		files.value = files.value.concat(newUploadableFiles)
  console.log(props.venueListing.images);
}

function fileExists(otherId) {
  return files.value.some(({ id }) => id === otherId)
}

function removeFile(file) {
		const ind1 = props.venueListing.images.indexOf(file)
		const ind2 = files.value.indexOf(file)

		if (ind2 > -1) files.value.splice(ind2, 1)
		if (ind1 > -1) props.venueListing.images.splice(ind1, 1)
	}

function onInputChange(e) {
	addFiles(e.target.files)
	e.target.value = null // reset so that selecting the same file again will still cause it to fire this change
}

</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Upload Venue Images</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageUploader :image-names="props.venueListing.images"/>
        </CardContent>
        <div class="flex justify-between items-center p-4">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="60"  />
          <Button @click="$emit('nextStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
            <div  class="flex items-center">
              Next
              <ArrowRight class="w-4 h-4 ml-2" />
            </div>
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.drop-area {
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	padding: 50px;
	background: #ffffff55;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	transition: .2s ease;

	&[data-active=true] {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		background: #ffffffcc;
	}
}
.image-list {
	display: flex;
	list-style: none;
	flex-wrap: wrap;
	padding: 0;
}
</style>
