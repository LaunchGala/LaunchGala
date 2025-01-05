<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';
import { ChevronDown } from 'lucide-vue-next';
import Input from './ui/input/Input.vue'; 
import Popover from './ui/popover/Popover.vue';
import { ComboboxRoot, ComboboxTrigger, ComboboxContent, ComboboxItem } from 'radix-vue';

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
const isDropdownOpen = ref(false);
// Fetch options from Supabase
const fetchOptions = async (query = '') => {
  if(!!query){
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
        if(!!options.value && options.value.length > 0){
          isDropdownOpen.value = true
        }
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
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
        <ComboboxRoot v-model:open="isDropdownOpen">
      <ComboboxTrigger class="w-full">
        <Input id="company" v-model="searchQuery" placeholder="Type to search..." />
      </ComboboxTrigger>
      
      <ComboboxContent class="bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-64 overflow-y-auto">
        <div v-if="options.length === 0" class="p-4 text-gray-500">No matches found.</div>
        <ComboboxItem v-for="option in options" :key="option.name" @select="selected = option" class="p-3 flex gap-2 items-start hover:bg-orange-100 cursor-pointer">
          <div class="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full"></div> <!-- Placeholder for icon/avatar -->
          <div>
            <p class="font-medium">{{ option.name }}</p>
            <p class="text-sm text-gray-500">{{ "meh" }}</p>
          </div>
        </ComboboxItem>
      </ComboboxContent>
        </ComboboxRoot>
</template>

<style scoped>
/* Add any additional styles as needed */
</style>