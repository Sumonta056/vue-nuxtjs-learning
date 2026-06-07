import { ref } from "vue";

export const products = ref([
  {
    id: 1,
    productName: "Running Shoes",
    productDescription:
      "High-performance running shoes with advanced cushioning",
    productLink: "www.google.com",
    productImage: [
      {
        key: "Default",
        url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
      {
        key: "Blue",
        url: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
      {
        key: "Green",
        url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
    ],
    productInventory: [
      { key: "Default", stock: 25 },
      { key: "Blue", stock: 8 },
      { key: "Green", stock: 50 },
    ],
    price: [
      { key: "Default", amount: 3500 },
      { key: "Blue", amount: 4000 },
      { key: "Green", amount: 3800 },
    ],
    onSale: true,
    salesAmount: "30",
    salesOccasion: "Summer",
    sizes: ["S", "M", "L", "XL"],
    details: [
      "Breathable mesh upper",
      "Responsive foam midsole",
      "Durable rubber outsole",
    ],
    variant: ["Default", "Blue", "Green"],
  },
  {
    id: 2,
    productName: "Leather Sneakers",
    productDescription: "Timeless design with premium leather finish",
    productLink: "www.google.com",
    productImage: [
      {
        key: "Default",
        url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
      {
        key: "Blue",
        url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
      {
        key: "Green",
        url: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
    ],
    productInventory: [
      { key: "Default", stock: 40 },
      { key: "Blue", stock: 30 },
      { key: "Green", stock: 12 },
    ],
    price: [
      { key: "Default", amount: 2800 },
      { key: "Blue", amount: 3000 },
      { key: "Green", amount: 3200 },
    ],
    onSale: false,
    salesAmount: "0",
    salesOccasion: "",
    sizes: ["M", "L", "XL", "XXL"],
    details: [
      "100% genuine leather",
      "Cushioned insole for comfort",
      "Classic lace-up design",
    ],
    variant: ["Default", "Blue", "Green"],
  },
  {
    id: 3,
    productName: "Training Shoes",
    productDescription: "Perfect for gym workouts and cross-training",
    productLink: "www.google.com",
    productImage: [
      {
        key: "Default",
        url: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
      {
        key: "Blue",
        url: "https://images.unsplash.com/photo-1603787081207-362bcef7f620?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
      {
        key: "Green",
        url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
    ],
    productInventory: [
      { key: "Default", stock: 5 },
      { key: "Blue", stock: 20 },
      { key: "Green", stock: 35 },
    ],
    price: [
      { key: "Default", amount: 4500 },
      { key: "Blue", amount: 4800 },
      { key: "Green", amount: 4600 },
    ],
    onSale: true,
    salesAmount: "40",
    salesOccasion: "Fitness",
    sizes: ["S", "M", "L"],
    details: [
      "Enhanced ankle support",
      "Anti-slip grip pattern",
      "Lightweight construction",
    ],
    variant: ["Default", "Blue", "Green"],
  },
  {
    id: 4,
    productName: "Canvas Shoes",
    productDescription: "Comfortable everyday wear with canvas material",
    productLink: "www.google.com",
    productImage: [
      {
        key: "Default",
        url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
      {
        key: "Blue",
        url: "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
      {
        key: "Green",
        url: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
    ],
    productInventory: [
      { key: "Default", stock: 60 },
      { key: "Blue", stock: 45 },
      { key: "Green", stock: 28 },
    ],
    price: [
      { key: "Default", amount: 1500 },
      { key: "Blue", amount: 1600 },
      { key: "Green", amount: 1700 },
    ],
    onSale: false,
    salesAmount: "0",
    salesOccasion: "",
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      "Breathable canvas fabric",
      "Flexible rubber sole",
      "Easy slip-on style",
    ],
    variant: ["Default", "Blue", "Green"],
  },
  {
    id: 5,
    productName: "Hiking Boots",
    productDescription: "Rugged outdoor boots for all terrains",
    productLink: "www.google.com",
    productImage: [
      {
        key: "Default",
        url: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
      {
        key: "Blue",
        url: "https://images.unsplash.com/photo-1478359844494-1092259d93e4?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
      {
        key: "Green",
        url: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1074",
      },
    ],
    productInventory: [
      { key: "Default", stock: 18 },
      { key: "Blue", stock: 22 },
      { key: "Green", stock: 9 },
    ],
    price: [
      { key: "Default", amount: 6500 },
      { key: "Blue", amount: 7000 },
      { key: "Green", amount: 6800 },
    ],
    onSale: true,
    salesAmount: "25",
    salesOccasion: "Adventure",
    sizes: ["M", "L", "XL", "XXL"],
    details: [
      "Waterproof leather upper",
      "High-traction outsole",
      "Padded collar and tongue",
    ],
    variant: ["Default", "Blue", "Green"],
  },
]);
