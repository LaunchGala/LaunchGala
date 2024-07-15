// middleware/auth.js
import { useAuthStore } from '~/stores/auth'

export default function ({ redirect }) {
  const authStore = useAuthStore()
  // Check if the user is authenticated
  if (!authStore.authenticated && process.client) {
    // If not authenticated, redirect to login page
    return redirect('/login')
  }
}
