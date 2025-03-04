<template>
  <div class="address-selection-no-map">
    <Input id="search-box" v-model="internalAddress" @input="emitAddressUpdate" placeholder="Enter address" type="text"
      class="address-input" />
  </div>
</template>

<script setup>
import { Input } from '@/components/ui/input';
import { ref, onMounted, watch, defineProps, defineEmits } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';

// Props
const props = defineProps({
  address: {
    type: String,
    required: true,
  },
});

// Emit event to notify parent
const emit = defineEmits(['update-address']);

// Internal state for address (local to child)
const internalAddress = ref(props.address);

// API key for Google Maps
const apiKey = 'AIzaSyAjEbY_aGf3wrqxd89UPX1zzCDUw1cyPEc'; // Replace with your API key

// Emit an event to update the parent when input changes
const emitAddressUpdate = () => {
  emit('update-address', internalAddress.value);
};

watch(() => props.address, (newValue) => {
  if (newValue !== internalAddress.value) {
    internalAddress.value = newValue;
  }
})
onMounted(async () => {
  const loader = new Loader({
    apiKey: apiKey,
    version: 'weekly',
    libraries: ['places'],
  });

  try {
    await loader.load();
    const input = document.getElementById('search-box');
    if (input) {
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place) {
          internalAddress.value = place.formatted_address;
          emitAddressUpdate();
        }
      });
    }
  } catch (error) {
    console.error('Google Maps failed to load:', error);
  }
});
</script>

<style scoped>
.address-selection-no-map {
  width: 100%; /* Ensure the input takes up full width */
}

.address-input {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}
</style>
