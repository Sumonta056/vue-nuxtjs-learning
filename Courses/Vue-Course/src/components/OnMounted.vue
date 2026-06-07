<template>
  <div class="container">
    <h1 class="page-title">Learning On Mount</h1>

    <div v-if="products.products" class="products-grid">
      <div v-for="product in products.products" :key="product.id" class="product-card">
        <div class="product-image">
          <img :src="product.thumbnail" :alt="product.title" />
          <div class="product-badge" v-if="product.discountPercentage > 0">
            -{{ Math.round(product.discountPercentage) }}%
          </div>
        </div>

        <div class="product-content">
          <div class="product-category">{{ product.category }}</div>
          <h3 class="product-title">{{ product.title }}</h3>
          <p class="product-description">{{ product.description }}</p>

          <div class="product-rating">
            <div class="stars">
              <span
                v-for="star in 5"
                :key="star"
                class="star"
                :class="{ filled: star <= Math.round(product.rating) }"
              >
                ★
              </span>
            </div>
            <span class="rating-text">({{ product.rating }})</span>
          </div>

          <div class="product-footer">
            <div class="price-section">
              <span class="current-price">${{ product.price }}</span>
              <span v-if="product.discountPercentage > 0" class="original-price">
                ${{ (product.price / (1 - product.discountPercentage / 100)).toFixed(2) }}
              </span>
            </div>

            <div class="stock-info" :class="{ 'low-stock': product.stock < 10 }">
              {{ product.stock }} in stock
            </div>
          </div>

          <button class="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>

    <div v-else class="loading">
      <div class="spinner"></div>
      <p>Loading products...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const products = ref({})

onMounted(async () => {
  try {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    products.value = data
    console.log(data)
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.page-title {
  text-align: center;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 300;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.product-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #f1f1f1;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.product-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e74c3c;
  color: white;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.product-content {
  padding: 1.5rem;
}

.product-category {
  color: #7f8c8d;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.product-title {
  color: #2c3e50;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.product-description {
  color: #5a6c7d;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #ddd;
  font-size: 1.1rem;
}

.star.filled {
  color: #f39c12;
}

.rating-text {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.price-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.current-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #27ae60;
}

.original-price {
  font-size: 1rem;
  color: #95a5a6;
  text-decoration: line-through;
}

.stock-info {
  color: #27ae60;
  font-size: 0.85rem;
  font-weight: 500;
}

.stock-info.low-stock {
  color: #e74c3c;
}

.add-to-cart-btn {
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  color: #7f8c8d;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .page-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
