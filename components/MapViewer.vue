<template>
  <div>
    <div ref="map" class="map"></div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'

// Props
const props = defineProps({
  address: {
    type: String,
    required: true,
  },
})

const map = ref(null)
const marker = ref(null)
const geocoder = ref(null)

// API key for Google Maps
const apiKey = 'AIzaSyAjEbY_aGf3wrqxd89UPX1zzCDUw1cyPEc'

// Function to find location by the passed-in address
const findLocation = (address) => {
  if (!address || !geocoder.value || !map.value) return

  geocoder.value.geocode({ address }, (results, status) => {
    if (status === 'OK' && results[0]) {
      // Ensure map is initialized before trying to use it
      if (map.value) {
        // Center the map to the new location
        map.value.setCenter(results[0].geometry.location)

        // Remove any existing marker
        if (marker.value) {
          marker.value.setMap(null)
        }

        // Place a new marker on the map at the found location
        marker.value = new google.maps.Marker({
          map: map.value,
          position: results[0].geometry.location,
        })
      }
    } else {
      console.error('Geocode was not successful for the following reason: ' + status)
    }
  })
}

// Initialize the map after the API has loaded
onMounted(async () => {
  const loader = new Loader({
    apiKey: apiKey,
    version: 'weekly',
  })

  try {
    // Wait for the loader to finish loading
    await loader.load()

    // Now we can safely access the google object
    geocoder.value = new google.maps.Geocoder()

    // Wait for the DOM to be updated
    await nextTick()

    // Create the map with default center and zoom
    map.value = new google.maps.Map(map.value, {
      center: { lat: 37.7749, lng: -122.4194 }, // Default location (San Francisco)
      zoom: 10,
    })

    // Find and display location for the initial address
    if (props.address) {
      findLocation(props.address)
    }
  } catch (error) {
    console.error('Google Maps failed to load:', error)
  }
})

// Watch for changes to the address prop and update the map accordingly
watch(() => props.address, (newAddress) => {
  if (map.value) {
    findLocation(newAddress)
  }
})
</script>

<style scoped>
.map {
  height: 400px;
  width: 100%;
  margin-top: 20px;
}
</style>
