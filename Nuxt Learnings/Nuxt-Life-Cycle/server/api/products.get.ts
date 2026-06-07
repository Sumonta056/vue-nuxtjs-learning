// Server API endpoint - returns products list
export default defineEventHandler(async (event) => {
  // Simulate database delay
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return {
    products: [
      { id: 1, name: 'Laptop', price: 999 },
      { id: 2, name: 'Mouse', price: 25 },
      { id: 3, name: 'Keyboard', price: 75 },
      { id: 4, name: 'Monitor', price: 299 },
    ]
  }
})

