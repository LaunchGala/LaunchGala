<template>
  <div class="relative min-h-screen overflow-hidden bg-orange-100 ">
    <!-- Floating Images Background -->
    <div class="absolute inset-0">
      <div 
        v-for="(image, index) in venueImages" 
        :key="index"
        class="floating-image absolute"
        :style="{
          '--delay': `${index * -3}s`,
          '--duration': `${20 + Math.random() * 10}s`,
          left: `${image.x}%`,
          top: `${image.y}%`,
          zIndex: image.z,
          transform: `scale(${0.8 + Math.random() * 0.4})`
        }"
      >
        <img 
          :src="image.url" 
          :alt="image.alt"
          class="w-64 h-48 object-cover rounded-xl opacity-20 hover:opacity-40 transition-all duration-500 shadow-lg hover:shadow-2xl"
        />
      </div>

      <!-- Decorative Elements -->
      <div class="absolute inset-0">
        <div 
          v-for="n in 12" 
          :key="`circle-${n}`"
          class="absolute w-4 h-4 rounded-full bg-orange-200/30"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `pulse ${3 + Math.random() * 2}s infinite`,
            animationDelay: `${n * -0.5}s`
          }"
        ></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 min-h-screen flex items-center justify-center p-6">
      <div class="w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12">
        <h1 class="text-4xl font-bold text-orange-500 mb-2 animate-fade-in">
          Finding the Right Fit? We've Got Your Back!
        </h1>
        <p class="text-gray-600 mb-8 animate-fade-in-delay text-lg">
          Get personalized assistance from our team to identify the ideal choice for your business.
        </p>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Name Input -->
            <div class="form-group">
              <label class="text-gray-700 text-sm font-medium mb-2 block">Name</label>
              <div class="relative group">
                <UserIcon class="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
                <input 
                  v-model="formData.name"
                  type="text"
                  placeholder="John Doe"
                  class="w-full bg-white border border-orange-100 rounded-xl px-12 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all duration-300 group-hover:border-orange-300"
                />
              </div>
            </div>

            <!-- Email Input -->
            <div class="form-group">
              <label class="text-gray-700 text-sm font-medium mb-2 block">Email</label>
              <div class="relative group">
                <MailIcon class="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
                <input 
                  v-model="formData.email"
                  type="email"
                  placeholder="john@example.com"
                  class="w-full bg-white border border-orange-100 rounded-xl px-12 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all duration-300 group-hover:border-orange-300"
                />
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <!-- City Select -->
            <div class="form-group">
              <label class="text-gray-700 text-sm font-medium mb-2 block">Select your city</label>
              <div class="relative group">
                <MapPinIcon class="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
                <select 
                  v-model="formData.city"
                  class="w-full bg-white border border-orange-100 rounded-xl px-12 py-3 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all duration-300 group-hover:border-orange-300"
                >
                  <option value="" disabled selected>Select a city</option>
                  <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
                </select>
                <ChevronDownIcon class="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
              </div>
            </div>

            <!-- Help Type Select -->
            <div class="form-group">
              <label class="text-gray-700 text-sm font-medium mb-2 block">How can we help?</label>
              <div class="relative group">
                <HelpCircleIcon class="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
                <select 
                  v-model="formData.helpType"
                  class="w-full bg-white border border-orange-100 rounded-xl px-12 py-3 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all duration-300 group-hover:border-orange-300"
                >
                  <option value="" disabled selected>Select assistance type</option>
                  <option v-for="type in helpTypes" :key="type" :value="type">{{ type }}</option>
                </select>
                <ChevronDownIcon class="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
              </div>
            </div>
          </div>

          <!-- Message Box -->
          <div class="form-group">
            <label class="text-gray-700 text-sm font-medium mb-2 block">Your Message</label>
            <div class="relative group">
              <MessageSquareIcon class="absolute left-4 top-4 text-orange-400 w-5 h-5" />
              <textarea 
                v-model="formData.message"
                rows="4"
                placeholder="Tell us more about your needs..."
                class="w-full bg-white border border-orange-100 rounded-xl px-12 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 transition-all duration-300 group-hover:border-orange-300 resize-none"
              ></textarea>
            </div>
          </div>

          <!-- Terms -->
          <p class="text-sm text-gray-500">
            By clicking the button below, you agree to our 
            <a href="#" class="text-orange-500 hover:text-orange-600">Terms of Service</a> 
            and acknowledge our 
            <a href="#" class="text-orange-500 hover:text-orange-600">Global Privacy Policy</a>.
          </p>

          <!-- Submit Button -->
          <button 
            type="submit"
            class="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-4 rounded-xl font-medium hover:from-orange-500 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <SendIcon class="w-5 h-5" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  UserIcon, 
  MailIcon, 
  MapPinIcon, 
  HelpCircleIcon, 
  ChevronDownIcon,
  MessageSquareIcon,
  SendIcon 
} from 'lucide-vue-next'

const formData = ref({
  name: '',
  email: '',
  city: '',
  helpType: '',
  message: ''
})

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Miami',
  'San Francisco'
]

const helpTypes = [
  'Event Planning',
  'Venue Selection',
  'Catering Services',
  'Technical Support',
  'Entertainment',
  'Decoration',
  'Full Service Package'
]

const venueImages = [
  {
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
    alt: 'Luxury Wedding Venue',
    x: 10,
    y: 20,
    z: 1
  },
  {
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
    alt: 'Conference Hall',
    x: 70,
    y: 15,
    z: 2
  },
  {
    url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329',
    alt: 'Beachfront Events',
    x: 25,
    y: 60,
    z: 1
  },
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    alt: 'Garden Party',
    x: 85,
    y: 70,
    z: 2
  },
  {
    url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
    alt: 'Rooftop Venue',
    x: 40,
    y: 30,
    z: 1
  },
  {
    url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3',
    alt: 'Concert Hall',
    x: 15,
    y: 80,
    z: 2
  },
  {
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb',
    alt: 'Ballroom',
    x: 60,
    y: 40,
    z: 1
  },
  {
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
    alt: 'Gallery Space',
    x: 90,
    y: 25,
    z: 2
  }
]

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
}
</script>

<style scoped>
.floating-image {
  animation: float var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(20px, -20px) rotate(2deg);
  }
  66% {
    transform: translate(-15px, 15px) rotate(-2deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 0.6s ease-out 0.3s forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Glass effect */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
}

/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb {
  background: #ffa500;
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: #ff8c00;
}
</style>