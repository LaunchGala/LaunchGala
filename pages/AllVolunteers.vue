
<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
const categories = [
  { name: 'Admin', description: 'Manage administrative tasks.', image: "/placeholder.svg" },
  { name: 'Tech support', description: 'Provide technical assistance.', image: "/placeholder.svg" },
  { name: 'DJ', description: 'Create musical ambiance.', image: "/placeholder.svg" },
  { name: 'Lighting', description: 'Handle lighting and effects.', image: "/placeholder.svg" },
  { name: 'Entertainment', description: 'Perform and entertain guests.', image: "/placeholder.svg" },
  { name: 'Hosting', description: 'Greet and accommodate guests.', image: "/placeholder.svg" },
  { name: 'Finance', description: 'Manage financial operations.', image: "/placeholder.svg" },
  { name: 'Legal', description: 'Advise on legal matters.', image: "/placeholder.svg" },
  { name: 'Cooking', description: 'Prepare and cook meals.', image: "/placeholder.svg" },
  { name: 'Bartending', description: 'Serve drinks and cocktails.', image: "/placeholder.svg" },
  { name: 'Marketing', description: 'Promote events and activities.', image: "/placeholder.svg" },
  { name: 'Building', description: 'Construct and repair structures.', image: "/placeholder.svg" },
  { name: 'Others', description: 'Various other volunteer opportunities.', image: "/placeholder.svg" },
];
</script>

<template>
  <div class="dark:bg-black">
    <div class="flex justify-between items-center px-6 py-4 bg-gray-200 dark:bg-gray-900">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Volunteer Categories</h1>
      <Button variant="primary" class="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2 shadow-lg">
        <Plus class="w-5 h-5" />
        <span>Become a Volunteer</span>
      </Button>
    </div>
    <div class="px-8 py-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card v-for="category in categories" :key="category.name" class="border-0 overflow-hidden shadow-xl rounded-2xl dark:shadow-none transition-transform transform hover:-translate-y-1 dark:hover:shadow-2xl">
          <CardHeader class="p-0">
            <img :src="category.image" alt="category.name" class="w-full h-44 object-cover rounded-t-2xl transition-opacity duration-200 hover:opacity-80">
          </CardHeader>
          <CardContent class="flex flex-col items-start p-6 dark:bg-gray-900">
            <h3 class="text-xl font-semibold mb-2 dark:text-gray-100">{{ category.name }}</h3>
            <p class="text-gray-600 dark:text-gray-400 flex-grow">{{ category.description }}</p>
          </CardContent>
          <CardFooter class="p-6 dark:bg-gray-900">
            <Button variant="default" class="w-full text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-300">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
</template>


