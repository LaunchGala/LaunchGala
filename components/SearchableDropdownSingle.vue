<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-vue-next';
import Input from './ui/input/Input.vue';

// Define props and emit events
const props = defineProps({
  values: { type: Array<string>, required: true },
  label: { type: String, required: false },
  selectedValue: { type: String, default: () => ('') }, // Initial selected value
});
const emit = defineEmits(['update:selectedValue']); // For two-way binding

// Initialize Supabase client (replace with your credentials)
const supabase = useSupabaseClient();

// Reactive state
const searchQuery = ref('');
const options = ref<Array<string>>([]); // The current list of options
const selected = ref(props.selectedValue); // Local copy of the selected item

// Fetch options from Supabase
const fetchOptions = async (query = '') => {
  const lowerCaseSearchTerm = query.toLowerCase();
  options.value = props.values.filter(str => str.toLowerCase().includes(lowerCaseSearchTerm));
};

// Watch searchQuery to re-fetch options on input change
watch(searchQuery, (newQuery) => {
  fetchOptions(newQuery);
});

// Watch selected value to sync with props and emit changes
watch(selected, (newValue) => {
  emit('update:selectedValue', newValue); // Emit the updated value to the parent
});

// Fetch initial options on component mount
fetchOptions();

</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger
      class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left">
      <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
      <span>{{ !!selected ? selected : !!props.label ? props.label : 'Choose one.' }}</span>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg">
      <div class="p-2">
        <Input v-model="searchQuery" placeholder="Search..."
          class="w-full mb-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2" />
      </div>
      <div class="overflow-y-scroll max-h-48">
        <DropdownMenuItem v-for="option in options" :key="option" @click="selected = option"
          class="hover:bg-orange-200 dark:hover:bg-orange-700">
          {{ option }}
        </DropdownMenuItem>
      </div>
      <DropdownMenuSeparator />
      <div>
        <slot />
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped>
/* Add any additional styles as needed */
</style>