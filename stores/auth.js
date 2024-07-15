// stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    user: null
  }),
  actions: {
    setUser(user) {
      this.user = user
      this.authenticated = !!user
    },
    logout() {
      this.user = null
      this.authenticated = false
    }
  }
})
