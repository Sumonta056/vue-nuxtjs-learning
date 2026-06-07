// Server API endpoint - POST example
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Simulate user creation
  return {
    success: true,
    user: {
      id: Math.floor(Math.random() * 1000),
      name: body.name,
      email: body.email,
      createdAt: new Date().toISOString(),
    }
  }
})

