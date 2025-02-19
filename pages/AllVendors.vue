<script setup lang="ts">
import {
  Heart,
  MessageCircle,
  Search,
  ArrowRight,
  MapPin,
  Star,
  Building2,
  Package,
  Users,
  Target,
  Briefcase,
  Globe,
  TrendingUp,
  DollarSign,
  Sparkles,
  Link,
  ShoppingBag,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Award
} from 'lucide-vue-next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const supabase = useSupabaseClient()
const searchQuery = ref('')
const selectedCategory = ref('All Categories')

const categories = [
  'All Categories',
  'Catering',
  'Decor & Design',
  'Audio/Visual',
  'Photography',
  'Transportation',
  'Security',
  'Rentals'
]

const vendors = ref([
  {
    id: 1,
    business_name: "EventPro Catering",
    location: "San Francisco, CA",
    businessLogo: "path/to/logo.png",
    categories: ["Catering", "Food Service", "Beverage"],
    industries: ["Hospitality", "Events", "Food & Beverage"],
    services: ["Corporate Catering", "Wedding Catering", "Event Planning"]
  }
]);

async function getAllVendors(query) {
  const { data: AllVendors, error } = !!query ? await query : await supabase
    .from('Vendors')
    .select('*');

  if (error) {
    console.error(error);
    return;
  }

  await Promise.all(AllVendors.map(async (vendor) => {
    vendor.businessLogo = await fetchImage(vendor.business_logo, 'images')
  }));

  vendors.value = AllVendors;
}

const fetchImage = async (id, bucket) => {
  if (!!id) {
    const urlData = await supabase.storage.from(bucket).createSignedUrl(id, 60);
    return urlData?.data?.signedUrl ?? "";
  }
  return "";
}

const filteredVendors = computed(() => {
  return vendors.value.filter(vendor => {
    const matchesSearch = !searchQuery.value || 
      vendor.business_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      vendor.location?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      vendor.headline?.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    const matchesCategory = selectedCategory.value === 'All Categories' ||
      vendor.categories?.includes(selectedCategory.value);
    
    return matchesSearch && matchesCategory;
  });
});

onMounted(() => {
  getAllVendors(null)
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-orange-600 to-orange-500 overflow-hidden">
      <div class="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="flex justify-between items-center">
          <div class="max-w-2xl">
            <div class="flex items-center space-x-3 mb-4">
              <ShoppingBag class="w-8 h-8 text-white animate-bounce" />
              <h1 class="text-4xl font-bold text-white">Vendors Marketplace</h1>
            </div>
            <p class="text-xl text-white/90">
              Connect with trusted vendors to bring your event to life
            </p>
          </div>
          <NuxtLink to="VendorListing">
            <Button class="bg-white text-orange-600 hover:bg-orange-50 shadow-lg transform hover:scale-105 transition-all">
              <Package class="w-5 h-5 mr-2" />
              Add Your Business
            </Button>
          </NuxtLink>
        </div>

        <!-- Search Section -->
        <div class="mt-12 max-w-4xl mx-auto">
          <div class="relative">
            <div class="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl"></div>
            <div class="relative p-2">
              <div class="flex items-center gap-4">
                <div class="flex-1 bg-white rounded-xl shadow-lg">
                  <div class="relative">
                    <Search class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      v-model="searchQuery"
                      type="text"
                      placeholder="Search vendors by name, service, or location..."
                      class="w-full pl-12 pr-4 py-3 bg-transparent rounded-xl focus:outline-none"
                    />
                  </div>
                </div>
                <select
                  v-model="selectedCategory"
                  class="px-4 py-3 bg-white rounded-xl shadow-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
                >
                  <option v-for="category in categories" :key="category" :value="category">
                    {{ category }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Vendors Grid -->
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="vendor in filteredVendors"
          :key="vendor.id"
          class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
        >
          <!-- Large Image Section -->
          <div class="relative h-64 bg-gradient-to-br from-orange-500 to-orange-600 p-8">
            <div class="absolute inset-0 bg-grid-white/[0.1] bg-[size:16px_16px]"></div>
            
            <!-- Business Logo -->
            <div class="relative h-full flex items-center justify-center">
              <img 
                :src="vendor.businessLogo" 
                :alt="vendor.business_name"
                class="max-w-full max-h-full object-contain filter drop-shadow-xl"
              />
            </div>

            <!-- Verified Badge -->
            <div class="absolute top-4 right-4">
              <Badge class="bg-white/90 text-orange-600 font-medium flex items-center gap-1 px-3 py-1.5">
                <CheckCircle class="w-4 h-4" />
                Verified Vendor
              </Badge>
            </div>

            <!-- Favorite Button -->
            <button class="absolute top-4 left-4 p-2.5 rounded-full bg-white/90 hover:bg-white transition-colors">
              <Heart class="w-5 h-5 text-orange-500" />
            </button>
          </div>

          <div class="p-6">
            <!-- Business Info -->
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-gray-900">{{ vendor.business_name }}</h3>
                <div class="flex items-center mt-1 text-gray-600">
                  <MapPin class="w-4 h-4 mr-1" />
                  <span class="text-sm">{{ vendor.location }}</span>
                </div>
              </div>
              <div class="flex items-center bg-orange-50 px-3 py-1.5 rounded-full">
                <Star class="w-4 h-4 text-orange-500 mr-1" />
                <span class="text-sm font-medium text-orange-600">4.9</span>
              </div>
            </div>

            <!-- Industries Row -->
            <div class="mb-4">
              <div class="flex items-center space-x-2 overflow-hidden">
                <Badge class="bg-gray-100 text-gray-600 font-medium px-2 py-1">
                  <Briefcase class="w-3 h-3 mr-1 inline-block" />
                  Industries
                </Badge>
                <div class="flex-1 flex items-center space-x-2 overflow-hidden">
                  <span
                    v-for="industry in vendor.industries?.slice(0, 3)"
                    :key="industry"
                    class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium whitespace-nowrap"
                  >
                    {{ industry }}
                  </span>
                  <span 
                    v-if="vendor.industries?.length > 3"
                    class="text-sm text-gray-500 whitespace-nowrap"
                  >
                    +{{ vendor.industries.length - 3 }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Services Row -->
            <div class="mb-4">
              <div class="flex items-center space-x-2 overflow-hidden">
                <Badge class="bg-gray-100 text-gray-600 font-medium px-2 py-1">
                  <Package class="w-3 h-3 mr-1 inline-block" />
                  Services
                </Badge>
                <div class="flex-1 flex items-center space-x-2 overflow-hidden">
                  <span
                    v-for="service in vendor.services?.slice(0, 3)"
                    :key="service"
                    class="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium whitespace-nowrap"
                  >
                    {{ service }}
                  </span>
                  <span 
                    v-if="vendor.services?.length > 3"
                    class="text-sm text-gray-500 whitespace-nowrap"
                  >
                    +{{ vendor.services.length - 3 }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-3 gap-3 mb-6">
              <div class="p-2 bg-gray-50 rounded-lg text-center">
                <span class="block text-sm font-medium text-gray-900">24/7</span>
                <span class="text-xs text-gray-600">Support</span>
              </div>
              <div class="p-2 bg-gray-50 rounded-lg text-center">
                <span class="block text-sm font-medium text-gray-900">2 Hr</span>
                <span class="text-xs text-gray-600">Response</span>
              </div>
              <div class="p-2 bg-gray-50 rounded-lg text-center">
                <span class="block text-sm font-medium text-gray-900">100+</span>
                <span class="text-xs text-gray-600">Events</span>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex gap-3">
              <Button class="flex-1 bg-orange-500 text-white hover:bg-orange-600">
                Contact
                <MessageCircle class="w-4 h-4 ml-2" />
              </Button>
              <NuxtLink 
                :to="{ name: 'VendorDetailPage', query: { id: vendor.id } }"
                class="flex-1"
              >
                <Button class="w-full bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50">
                  View Details
                  <ArrowRight class="w-4 h-4 ml-2" />
                </Button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-grid-white {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>