// middleware/auth.js
export default function ({ store, redirect }) {
    // Check if the user is authenticated
    if (!store.state.authenticated) {
      // If not authenticated, redirect to login page
      return redirect('/login')
    }
  }
  