<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useSupabaseClient } from '@supabase/supabase-js'

export default {
  setup() {
    const authStore = useAuthStore()
    const supabase = useSupabaseClient()

    onMounted(async () => {
      const user = await supabase.auth.user()
      if (user) {
        authStore.login()
      } else {
        authStore.logout()
      }
    })
  }
}
</script>
