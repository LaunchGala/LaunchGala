
<script setup lang="ts">
import { Home, User, Mail, Globe, Facebook, Twitter, Instagram } from 'lucide-vue-next';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Youtube } from 'lucide-vue-next';
import { Linkedin } from 'lucide-vue-next';
import { Tiktoken } from 'js-tiktoken';
</script>

<template>
  <footer class="bg-gray-100 dark:bg-black text-gray-700 dark:text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
        <div>
          <h3 class="font-bold text-lg mb-4">Company</h3>
          <ul>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">About Us</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Careers</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Press</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-4">Community</h3>
          <ul>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Diversity & Belonging</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Accessibility</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Guest Referrals</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Gift Cards</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-4">Host</h3>
          <ul>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Host your home</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Host an experience</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Responsible hosting</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Resource Center</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-4">Support</h3>
          <ul>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Our COVID-19 Response</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Help Center</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Cancellation options</a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-900 dark:hover:text-gray-300">Neighborhood Support</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div class="flex justify-between lg:justify-start space-x-6 py-4 border-t md:border-t-0 border-gray-300">
          <span class="inline-flex items-center">
            <Globe class="mr-1 h-4 w-4" />
            <Select class="inline-block">
              <SelectTrigger>
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="english">
                    English
                  </SelectItem>
                  <SelectItem value="german">
                    Deutsch
                  </SelectItem>
                  <SelectItem value="french">
                    Français
                  </SelectItem>
                  <SelectItem value="spanish">
                    Español
                  </SelectItem>

                  
                </SelectGroup>
              </SelectContent>
            </Select>
          </span>
          <span class="inline-flex items-center">
            <Mail class="mr-1 h-4 w-4" />
            <button class="hover:text-gray-900 dark:hover:text-gray-300">Get Newsletters</button>
          </span>
        </div>
        <p class="py-4 border-t border-gray-300 text-center md:text-left">© 2024 Meta Bang LLC</p>
        <div class="flex justify-between space-x-6 py-4 border-t border-gray-300">
          <a href="#">
            <Facebook class="h-6 w-6 hover:text-gray-900 dark:hover:text-gray-300" />
          </a>
          <a href="#">
            <Twitter class="h-6 w-6 hover:text-gray-900 dark:hover:text-gray-300" />
          </a>
          <a href="#">
            <Instagram class="h-6 w-6 hover:text-gray-900 dark:hover:text-gray-300" />
          </a>
          <a href="#">
            <Youtube class="h-6 w-6 hover:text-gray-900 dark:hover:text-gray-300" />
          </a>
          <a href="#">
            <Linkedin class="h-6 w-6 hover:text-gray-900 dark:hover:text-gray-300" />
          </a>
          <!-- <a href="#">
            <Tiktok class="h-6 w-6 hover:text-gray-900 dark:hover:text-gray-300" />
          </a> -->
        </div>
      </div>
    </div>
  </footer>
</template>
