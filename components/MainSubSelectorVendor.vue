
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Store, Plus, Check } from 'lucide-vue-next';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const isOpen = ref(false);

function addVendorTag(vendorTag: string) {
  if (props.vendorListing.vendorTags.includes(vendorTag)) {
    if (vendorTag === props.mainSubSelectorVendor.main && props.vendorListing.vendorTags.some(item => props.mainSubSelectorVendor.subs.includes(item))) {
      return;
    }
    props.vendorListing.vendorTags = props.vendorListing.vendorTags.filter((item) => item !== vendorTag);
  } else {
    props.vendorListing.vendorTags.push(vendorTag);
  }
  console.log(props.vendorListing.vendorTags);
}

function openStateChange(state: boolean) {
  isOpen.value = state;
}

const props = defineProps(['mainSubSelectorVendor', 'vendorListing']);
console.log(props.mainSubSelectorVendor);
</script>

<template>
  <div v-if="props.vendorListing && props.vendorListing.vendorTags">
    <Popover @update:open="openStateChange">
      <PopoverTrigger as-child :data-state="isOpen">
        <button 
          class="flex flex-col items-center p-4 border rounded-lg shadow-lg"
          :class="{ 
            'bg-orange-200': (props.vendorListing.vendorTags.includes(props.mainSubSelectorVendor.main) || props.vendorListing.vendorTags.some(item => props.mainSubSelectorVendor.subs.includes(item))), 
            'bg-lg': !props.vendorListing.vendorTags.includes(props.mainSubSelectorVendor.main) 
          }"
          @click="addVendorTag(props.mainSubSelectorVendor.main)"
        >
          <div class="m-3 cursor-pointer">
            <component :is="props.mainSubSelectorVendor.icon" class="w-10 h-10 text-orange-500 hover:text-orange-300" />
          </div>
          <span class="text-sm font-semibold">{{ props.mainSubSelectorVendor.main }}</span>
        </button>
      </PopoverTrigger>
      
      <PopoverContent 
        class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
        align="start"
        justify="center"
      >
        <div>
          <ul class="p-6 space-y-8">
            <div class="text-l font-bold text-orange-500">{{ props.mainSubSelectorVendor.main }}:</div>
            <div class="font-semibold text-l mb-0">Services you want to vendor for</div>
            <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
            <li v-for="sub in props.mainSubSelectorVendor.subs" @click="addVendorTag(sub)" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 border hover:border-orange-500"  
              :class="{ 'bg-orange-200': props.vendorListing.vendorTags.includes(sub), 'bg-lg': !props.vendorListing.vendorTags.includes(sub) }"
            >
              <Plus class="w-5 h-5 text-orange-500" />
              <label class="flex-1 cursor-pointer text-sm font-semibold">
                {{ sub }}
              </label>
              <label class="cursor-pointer">
                <Check class="w-4 h-4 text-orange-500" />
              </label>
            </li>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>