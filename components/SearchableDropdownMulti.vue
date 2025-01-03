<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronDown } from 'lucide-vue-next';
import Input from './ui/input/Input.vue';
import {
  ScrollArea
} from '@/components/ui/scroll-area';

// Define props and emit events
const props = defineProps({
  values: { type: Array<string>, required: true },
  label: { type: String, required: false },
  selectedValues: { type: Array<string>, default: () => ([]) }, // Initial selected value
});
const emit = defineEmits(['update:selectedValue']); // For two-way binding

// Initialize Supabase client (replace with your credentials)
const supabase = useSupabaseClient();

// Reactive state
const searchQuery = ref('');
const options = ref<Array<string>>([]); // The current list of options
const selected = ref(props.selectedValues); // Local copy of the selected item

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

const toggleSelection = (opt: string) => {
  if (selected.value.includes(opt)) {
    // If the option is already selected, remove it
    selected.value = selected.value.filter((item) => item !== opt);
  } else {
    // Otherwise, add it to the selected values
    selected.value.push(opt);
  }
};

const formatArray = (arr: any[], length: any) => arr.length > 3 ? `${arr.slice(0, length).join(", ")}...` : arr.join(", ");

</script>

<template>
  <Popover>
    <PopoverTrigger
      class="mb-4 w-full rounded-md text-sm border border-gray-300 dark:border-orange-600 bg-white dark:bg-gray-800 py-2 px-3 flex justify-between items-center">
      <span>{{ selectedValues.length ? formatArray(selectedValues, 2) : 'Select' }}</span>
      <ChevronDown class="w-5 h-5 text-orange-600 dark:text-orange-400" />
    </PopoverTrigger>
    <PopoverContent
      class="border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg">
      <div class="p-2">
        <Input
          v-model="searchQuery"
          placeholder="Search..."
          class="w-full mb-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2"
        />
      </div>
      <ScrollArea class="h-80 w-full p-1">
        <ul class="menu">
          <li v-for="opt in options" :key="opt" class="flex items-center gap-2">
            <input type="checkbox" 
            :checked="selected.includes(opt)"
              @change="toggleSelection(opt)" />
            <span>{{ opt }}</span>
          </li>
        </ul>
      </ScrollArea>
    </PopoverContent>
  </Popover>
</template>

<style scoped>
/* Add any additional styles as needed */
</style>