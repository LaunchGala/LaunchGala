
<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Store, Plus } from 'lucide-vue-next';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const isOpen = ref(false);

function addVolunteerTag(volunteerTag: string) {
  if (props.volunteerListing.volunteerTags.includes(volunteerTag)) {
    props.volunteerListing.volunteerTags = props.volunteerListing.volunteerTags.filter((item) => item !== volunteerTag);
  } else {
    props.volunteerListing.volunteerTags.push(volunteerTag);
  }
  console.log(props.volunteerListing.volunteerTags);


}


function openStateChange(state: boolean) {
    isOpen.value = state;
}

const props = defineProps(['mainSubSelector', 'volunteerListing']);
console.log(props.mainSubSelector);

</script>

<template>
    <Popover @update:open="openStateChange">
        <PopoverTrigger as-child :data-state="isOpen">
                <button 
                class="flex flex-col items-center p-4 border rounded-lg shadow-lg "
                :class="{ 
                    'bg-orange-200': (props.volunteerListing.volunteerTags.includes(props.mainSubSelector.main) || props.volunteerListing.volunteerTags.some(item => props.mainSubSelector.subs.includes(item))), 
                    'bg-lg': !props.volunteerListing.volunteerTags.includes(props.mainSubSelector.main) }"

                @click="addVolunteerTag(props.mainSubSelector.main)"
                >
                <div class="m-3 cursor-pointer">
                <component :is="props.mainSubSelector.icon" class="w-10 h-10 text-orange-500 hover:text-orange-300 " />
                </div>
                            <span class="text-sm font-semibold">{{ props.mainSubSelector.main }}</span>
                <!-- <span class="text-sm dark:text-gray-300">Organizing and facilitating event activities</span> -->

                </button>
            </PopoverTrigger>
            
        <PopoverContent 
            class="w-96 justify-items-center items-center place-items-center rounded-xl shadow-2xl bg-gradient-to-br from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white"
            align="start"
            justify="center"
        >
        <div>
            <ul class="p-6 space-y-8">
            <div class="text-l font-bold text-orange-500">{{ props.mainSubSelector.main }}:</div>
            <div class="font-semibold text-l  mb-0">Services you want to volunteer for</div>
            <span class="text-sm text-gray-500 mt-0">Choose all applicable</span>
                <li v-for="sub in props.mainSubSelector.subs" @click="addVolunteerTag(sub)" class="flex items-center space-x-2 p-2 rounded-md transition-colors duration-150 hover:bg-orange-200  "  
                :class="{ 'bg-orange-200': props.volunteerListing.volunteerTags.includes(sub), 'bg-lg': !props.volunteerListing.volunteerTags.includes(sub) }" 
                >
                <Plus class="w-5 h-5 text-orange-500 " />
                <label  class="flex-1 cursor-pointer text-sm font-semibold">
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
</template>
