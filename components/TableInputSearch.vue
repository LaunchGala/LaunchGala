<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';
import { ComboboxContent, ComboboxInput, ComboboxItem, ComboboxTrigger, ComboboxRoot, ComboboxAnchor } from 'radix-vue'
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
const isDropdownOpen = ref(false);
const v = ref('')
// Fetch options from Supabase
async function fetchOptions() {
  if (!!searchQuery) {
    try {
      const { data, error } = await supabase
        .from(props.table)
        .select('*')
        .ilike(props.column, `%${searchQuery.value}%`) // Case-insensitive partial match
        .limit(100); // Fetch only the first 100 results

      if (error) {
        console.error('Supabase error:', error);
      } else {
        options.value = data.map((row) => row);
        isDropdownOpen.value = options.value.length > 0
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
  }
}

// Watch searchQuery to re-fetch options on input change
watch(searchQuery, () => {
  fetchOptions();
});

// Watch selected value to sync with props and emit changes
watch(selected, (newValue) => {
  emit('update:selectedValue', newValue); // Emit the updated value to the parent
});

</script>

<template>
  <ComboboxRoot v-model:open="isDropdownOpen" class="relative w-full self-start">
    <ComboboxAnchor class="min-w-[160px] inline-flex items-center justify-between rounded">
      <!-- The trigger for opening the dropdown -->
      <ComboboxTrigger as-child class="block w-full">
      </ComboboxTrigger>
      <Input id="company" v-model="searchQuery" placeholder="Type to search..." />
    </ComboboxAnchor>
    <ComboboxContent position="popper"
      class="absolute z-10 w-full mt-2 min-w-[160px] bg-white overflow-hidden rounded">
      <ComboboxItem class="w-full p-3 flex gap-2 items-start hover:bg-orange-100 cursor-pointer" v-for="opt in options"
        :key="opt.name">
        {{ opt.name }}
      </ComboboxItem>
    </ComboboxContent>
  </ComboboxRoot>
</template>

<style scoped>
/* Add any additional styles as needed */
</style>