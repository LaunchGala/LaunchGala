<script>
import { ref } from 'vue';
import { Tabs, Tab, TabPanel } from '@/components/ui/tabs'; 
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const activeTab = ref('basic-info');

function handleTabChange(newTab) {
  activeTab.value = newTab;
}

function submitForm() {
  // Handle form submission
}
</script>

<template>
  <div class="p-6 dark:bg-black">
    <h1 class="text-2xl font-bold dark:text-white mb-4">Provide Your Venue</h1>
    
    <Tabs v-model:active="activeTab" @change="handleTabChange">
      <Tab name="basic-info" label="Basic Info" />
      <Tab name="details" label="Details" />
      <Tab name="pricing" label="Pricing" />
      <Tab name="images" label="Images" />
    </Tabs>

    <TabPanel name="basic-info">
      <div class="space-y-4">
        <Input placeholder="Venue Title" />
        <Input placeholder="Location" />
        <Input placeholder="Host Name" />
      </div>
    </TabPanel>

    <TabPanel name="details">
      <div class="space-y-4">
        <Input placeholder="Capacity" />
        <Input placeholder="Venue Type" />
        <Input placeholder="Amenities" />
      </div>
    </TabPanel>

    <TabPanel name="pricing">
      <div class="space-y-4">
        <Input placeholder="Price per Hour" />
        <Input placeholder="Sponsorship Option" />
      </div>
    </TabPanel>

    <TabPanel name="images">
      <div class="space-y-4">
        <Input placeholder="Upload Images" type="file" />
      </div>
    </TabPanel>

    <Button class="mt-4 bg-blue-500 text-white" @click="submitForm">Submit</Button>
  </div>
</template>
