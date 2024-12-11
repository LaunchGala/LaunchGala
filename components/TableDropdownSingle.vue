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
  table: { type: String, required: true },
  column: { type: String, required: true },
  selectedValue: { type: Object, default: () => ({}) }, // Initial selected value
});
const emit = defineEmits(['update:selectedValue']); // For two-way binding

// Initialize Supabase client (replace with your credentials)
const supabase = useSupabaseClient();

// Reactive state
const searchQuery = ref('');
const options = ref([]); // The current list of options
const selected = ref(props.selectedValue); // Local copy of the selected item

// Fetch options from Supabase
const fetchOptions = async (query = '') => {
  try {
    const { data, error } = await supabase
      .from(props.table)
      .select('*')
      .ilike(props.column, `%${query}%`) // Case-insensitive partial match
      .limit(100); // Fetch only the first 100 results

    if (error) {
      console.error('Supabase error:', error);
    } else {
      options.value = data.map((row) => row);
    }
  } catch (err) {
    console.error('Fetch error:', err);
  }
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
      class="flex mt-1 w-full rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2 text-sm text-left"
    >
      <ChevronDown class="w-5 h-5 mr-2 text-orange-600 dark:text-orange-400" />
      <span>{{ Object.keys(selected).length !== 0 ? selected[props.column] : props.table }}</span>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg">
      <div class="p-2">
        <Input
          v-model="searchQuery"
          placeholder="Search..."
          class="w-full mb-2 rounded-md bg-gray-100 dark:bg-gray-800 border-transparent focus:border-gray-400 dark:focus:border-gray-700 p-2"
        />
      </div>
      <DropdownMenuItem
        v-for="option in options"
        :key="option.id"
        @click="selected = option"
        class="hover:bg-orange-200 dark:hover:bg-orange-700"
      >
        {{ option[props.column] }}
      </DropdownMenuItem>
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