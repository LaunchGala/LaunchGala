
<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-vue-next';
</script>

<template>
  <div class="relative bg-[url('/placeholder.svg')] bg-cover bg-center min-h-screen dark:bg-black">
    <div class="flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow-md">
      <h1 class="text-xl font-bold text-gray-900 dark:text-white">Resources Center</h1>
      <Button>Add Resources</Button>
    </div>
    <div class="p-4">
      <div class="flex items-center w-full max-w-md p-2 mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
        <Search class="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <Input class="w-full pl-2 bg-transparent border-none focus:ring-0" placeholder="Search by Company Name, Service" />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">AWS Credit</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Amazon</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Amazon" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $100,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Get up to $100,000 in free credit for your cloud services needs.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>
      
      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Tax Prep Discount</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Tax Advisor</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Tax Advisor" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">50% Off Tax Preparation</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Save 50% on professional tax preparation services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>

      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>
      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>
      <Card class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <CardHeader class="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-800">
          <div>
            <CardTitle class="text-lg font-semibold text-gray-900 dark:text-white">Google Cloud Offer</CardTitle>
            <CardDescription class="text-sm text-gray-700 dark:text-gray-300">Google</CardDescription>
          </div>
          <img src="/placeholder.svg" alt="Google" class="w-16 h-16">
        </CardHeader>
        <CardContent class="p-4">
          <p class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free $50,000 Credit</p>
          <CardDescription class="text-gray-500 dark:text-gray-400">Receive $50,000 in credits for Google Cloud services.</CardDescription>
          <Button variant="outline" class="mt-4">Learn More</Button>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
