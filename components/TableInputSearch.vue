<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';
import {
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxTrigger,
  ComboboxRoot,
  ComboboxAnchor,
} from 'radix-vue';
import Input from './ui/input/Input.vue';

// Props and emit setup
const props = defineProps({
  table: { type: String, required: true },
  column: { type: String, required: true },
  selectedValue: { type: Object, default: () => ({}) },
  allowString: { type: Boolean, default: false },
});
const emit = defineEmits(['update:selectedValue']);

// Supabase client
const supabase = useSupabaseClient();

// Reactive state
const searchQuery = ref('');
const options = ref([]); // The list of dropdown options
const selected = ref(props.selectedValue); // Track selected item
const isDropdownOpen = ref(false);

// Fetch options from Supabase
async function fetchOptions() {
  selected.value = {}
  if (searchQuery.value.trim()) {
    try {
      const { data, error } = await supabase
        .from(props.table)
        .select('*')
        .ilike(props.column, `%${searchQuery.value}%`)
        .limit(100);

      if (error) {
        console.error('Supabase error:', error);
      } else {
        options.value = data;
        isDropdownOpen.value = options.value.length > 0;
      }
    } catch (err) {
      console.error('Fetch error:', err);
    }
  } else {
    options.value = [];
    isDropdownOpen.value = false;
  }
}

// Watch for search query changes to fetch options
watch(searchQuery, () => {
  fetchOptions();
});

// Sync the selected item
watch(selected, (newValue) => {
  if(Object.keys(selected.value).length > 0){
    console.log('real')
    searchQuery.value = newValue.name || '';
    emit('update:selectedValue', newValue);
  }
});

// Handle input blur to use `searchQuery` if no selection is made
function handleBlur() {
  if (props.allowString && Object.keys(selected.value).length === 0) {
    selected.value = { name: searchQuery.value };
    emit('update:selectedValue', { name: searchQuery.value });
  }
}

// Select an option
function selectOption(option) {
  selected.value = option;
  isDropdownOpen.value = false;
}
</script>
<template>
  <ComboboxRoot v-model:open="isDropdownOpen" class="relative w-full">
    <ComboboxAnchor class="min-w-[160px] inline-flex w-full">
      <ComboboxTrigger as-child>
      </ComboboxTrigger>
        <Input
          id="company"
          v-model="searchQuery"
          placeholder="Search for a company..."
          class="w-full"
          @blur="handleBlur" 
        />
    </ComboboxAnchor>
    <ComboboxContent
      position="popper"
      class="absolute min-w-[160px] z-10 w-full mt-2 border rounded-md border-orange-300 dark:border-orange-600 bg-white dark:bg-gray-800 shadow-lg -left-20 max-h-60 overflow-y-auto"
    >
      <div v-if="options.length > 0">
        <ComboboxItem
          v-for="option in options"
          :key="option.name"
          class="p-3 flex gap-2 items-center hover:bg-orange-100 cursor-pointer"
          @click="selectOption(option)"
        >
          <div>
            <p class="font-medium">{{ option.name }}</p>
          </div>
        </ComboboxItem>
      </div>
      <div v-else class="p-3 text-gray-500 text-sm text-center">
        No results found
      </div>
    </ComboboxContent>
  </ComboboxRoot>
</template>
<style scoped>
/* Customize dropdown appearance */
.ComboboxContent {
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
}
.ComboboxItem {
  transition: background-color 0.2s ease;
}
.ComboboxItem:hover {
  background-color: #fef3c7;
}
</style>