// Server API with caching example
export default defineEventHandler(async (event) => {
  // Use Nitro's built-in caching
  // Set cache headers for 60 seconds
  setHeader(event, 'Cache-Control', 'public, max-age=60')
  
  // Simulate expensive operation
  const data = {
    timestamp: new Date().toISOString(),
    message: 'This data is cached for 60 seconds',
    random: Math.random(),
  }
  
  return data
})

