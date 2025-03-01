<script setup lang="ts">
import { ref, watch } from 'vue';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Users, Plus, Minus } from 'lucide-vue-next';

const capacity = ref(0);
const error = ref('');

const props = defineProps<{
  venueListing: {
    capacity: number;
  };
}>();

const emit = defineEmits(['previousStep', 'nextStep']);

const validateCapacity = (value: number) => {
  if (value < 0) {
    error.value = 'Capacity cannot be negative';
    return false;
  }
  if (value > 9999) {
    error.value = 'Maximum capacity is 9999';
    return false;
  }
  error.value = '';
  return true;
};

const incrementCapacity = () => {
  const newValue = capacity.value + 1;
  if (validateCapacity(newValue)) {
    capacity.value = newValue;
    props.venueListing.capacity = newValue;
  }
};

const decrementCapacity = () => {
  const newValue = capacity.value - 1;
  if (validateCapacity(newValue)) {
    capacity.value = newValue;
    props.venueListing.capacity = newValue;
  }
};

const handleCapacityChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const newValue = parseInt(input.value) || 0;
  if (validateCapacity(newValue)) {
    capacity.value = newValue;
    props.venueListing.capacity = newValue;
  }
};

const handleNext = () => {
  if (validateCapacity(capacity.value)) {
    emit('nextStep');
  }
};

// Watch for changes in props
watch(() => props.venueListing.capacity, (newValue) => {
  if (newValue !== undefined) {
    capacity.value = newValue;
  }
});
</script>

<template>
  <div class="bg-white min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card class="max-w-2xl mx-auto">
        <CardHeader class="text-center">
          <CardTitle class="text-3xl font-bold text-gray-900">
            Venue Capacity
          </CardTitle>
          <p class="text-gray-600 mt-4 max-w-lg mx-auto">
            How many guests can your venue accommodate? This helps us match you with the right events.
          </p>
        </CardHeader>
        
        <CardContent class="space-y-8">
          <!-- Capacity Input Section -->
          <div class="space-y-6">
            <div class="relative">
              <div class="flex items-center justify-center p-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl">
                <div class="flex flex-col items-center space-y-6">
                  <div class="p-4 bg-white rounded-full shadow-lg">
                    <Users class="w-10 h-10 text-orange-500" />
                  </div>
                  
                  <!-- Number Input with Increment/Decrement -->
                  <div class="flex items-center space-x-4">
                    <button 
                      @click="decrementCapacity"
                      class="w-12 h-12 flex items-center justify-center rounded-full bg-white text-orange-500 shadow-lg hover:bg-orange-50 transition-colors"
                      :disabled="capacity <= 0"
                    >
                      <Minus class="w-6 h-6" />
                    </button>
                    
                    <div class="relative">
                      <input
                        type="number"
                        v-model="capacity"
                        @input="handleCapacityChange"
                        class="w-40 text-center text-3xl font-bold bg-white px-4 py-3 rounded-xl border-2 border-orange-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        min="0"
                        max="9999"
                      />
                      <span class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-500">
                        guests
                      </span>
                    </div>
                    
                    <button 
                      @click="incrementCapacity"
                      class="w-12 h-12 flex items-center justify-center rounded-full bg-white text-orange-500 shadow-lg hover:bg-orange-50 transition-colors"
                      :disabled="capacity >= 9999"
                    >
                      <Plus class="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
              
              <!-- Error Message -->
              <p v-if="error" class="mt-2 text-sm text-red-600 text-center">
                {{ error }}
              </p>
            </div>

            <!-- Capacity Guidelines -->
            <div class="bg-gray-50 rounded-2xl p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">
                Recommended Capacities
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex items-center space-x-4 p-3 bg-white rounded-xl">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <span class="text-sm font-medium text-gray-900">Small Gatherings</span>
                    <p class="text-sm text-gray-500">10-50 guests</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4 p-3 bg-white rounded-xl">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <span class="text-sm font-medium text-gray-900">Medium Events</span>
                    <p class="text-sm text-gray-500">51-200 guests</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4 p-3 bg-white rounded-xl">
                  <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div>
                    <span class="text-sm font-medium text-gray-900">Large Events</span>
                    <p class="text-sm text-gray-500">201-500 guests</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4 p-3 bg-white rounded-xl">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div>
                    <span class="text-sm font-medium text-gray-900">Conventions</span>
                    <p class="text-sm text-gray-500">500+ guests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        <!-- Navigation Buttons -->
        <div class="flex justify-between items-center p-6 border-t">
          <Button @click="$emit('previousStep')" as-child variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold mr-2">
            <div  class="flex items-center">
              <ArrowLeft class="w-4 h-4 mr-2" />
              Back
            </div>
          </Button>
          <Progress :model-value="20"  />
          <Button @click="$emit('nextStep')" variant="default" class="bg-white text-orange-500 border-orange-500 hover:bg-orange-100 font-bold ml-2">
            <div  class="flex items-center">
              Next
              <ArrowRight class="w-4 h-4 ml-2" />
            </div>
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>