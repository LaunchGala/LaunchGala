<template>
    <div class="map-container">
      <Input
        id="search-box"
        v-model="address"
        @input="onAddressInput"
        placeholder="Enter address"
        type="text"
        class="address-input mb-2"
      />
      <div ref="mapContainer" class="map"></div>
    </div>
  </template>
  
<script setup>
import { Input } from '@/components/ui/input';
import { ref, onMounted, watch, defineProps, defineEmits } from 'vue'
  import { Loader } from '@googlemaps/js-api-loader';
  
  // Refs
const props = defineProps({
  address: {
    type: String,
    required: true,
  },
})

// Emit event to notify parent
const emit = defineEmits(['update-address'])

// Internal state for address (local to child)
const internalAddress = ref(props.address)

  const mapContainer = ref(null);
  const geocoder = ref(null);
  const map = ref(null);
  const address = ref('')
  const placesService = ref(null);
  const apiKey = 'AIzaSyAjEbY_aGf3wrqxd89UPX1zzCDUw1cyPEc'; // Replace with your API key

// Emit an event to update the parent when input changes
const emitAddressUpdate = () => {
  emit('update-address', address)
}


watch(() => props.address, (newValue) => {
  if (newValue !== address.value) {
    address.value = props.address
    onAddressInput()
    emitAddressUpdate()
  }
})
  const initializeMap = () => {
    const loader = new Loader({
      apiKey,
      version: 'weekly',
      libraries: ['places'],
    });
  
    loader.load().then(() => {
      if (mapContainer.value) {
        map.value = new google.maps.Map(mapContainer.value, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
  
        geocoder.value = new google.maps.Geocoder();
        placesService.value = new google.maps.places.PlacesService(map.value);
  
        // Initialize the autocomplete functionality
        const input = document.getElementById('search-box');
        if (input) {
          const autocomplete = new google.maps.places.Autocomplete(input);
          autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (place.geometry) {
              map.value.setCenter(place.geometry.location);
              new google.maps.Marker({
                map: map.value,
                position: place.geometry.location,
              });
              address.value = place.formatted_address;
              emitAddressUpdate()
            }
          });
        }
      }
    }).catch(error => {
      console.error('Failed to load Google Maps:', error);
    });
  };
  
  const onAddressInput = () => {
    if (address.value && geocoder.value) {
      geocoder.value.geocode({ address: address.value }, (results, status) => {
        if (status === 'OK') {
          map.value.setCenter(results[0].geometry.location);
          new google.maps.Marker({
            map: map.value,
            position: results[0].geometry.location,
          });
          address.value = place.formatted_address;
          emitAddressUpdate()
        } else {
          console.error('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  };
  
  onMounted(() => {
    initializeMap();
  });
  </script>
  
  <style scoped>
  .map-container {
    display: flex;
    flex-direction: column;
    height: 45rem;
  }
  
  .address-input {
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    background-color: white;
  }
  
  .map {
    flex: 1;
    height: 100%;
  }
  </style>
  