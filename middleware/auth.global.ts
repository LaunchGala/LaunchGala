export default defineNuxtRouteMiddleware((to, from) => {
  // Allow access to the homepage
  if (to.path === '/') {
    return;
  }
  const user = useSupabaseUser(); // Assuming you're using Supabase for authentication
console.log(user)
  // Redirect to the login page if the user is not logged in and the route is not '/login'
  if (!user.value && to.path !== '/login') {
    return navigateTo('/login');
  }
});
