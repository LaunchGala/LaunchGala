<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GlobeIcon, LinkedinIcon, MapPinIcon, UserIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const route = useRoute();
const venueId = route.query.id;
</script>

<template>
  <div class="min-h-screen bg-gray-200 dark:bg-black flex items-center justify-center p-4">
    <TalentDetailCard :id="venueId"></TalentDetailCard>
  </div>
</template>