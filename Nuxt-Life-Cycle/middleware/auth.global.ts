// Global middleware - runs before every page navigation
export default defineNuxtRouteMiddleware((to, from) => {
  // Simple example: log every navigation
  console.log('🔒 [Auth Middleware] Checking route:', to.path)
  
  // Example: Check if user is authenticated (you can add real auth logic here)
  const isAuthenticated = true // In real app, check from store or cookie
  
  // Example: Protect certain routes
  if (to.path.startsWith('/protected') && !isAuthenticated) {
    return navigateTo('/login')
  }
  
  console.log('✅ [Auth Middleware] Route allowed')
})

