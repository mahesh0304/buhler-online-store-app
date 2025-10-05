<template>
  <div v-if="product" class="product-detail">
    <button @click="goBack" class="back-btn">← Back</button>
    <div class="product-container">
      <img :src="product.image" alt="Product Image" class="product-image" />
      <div class="product-info">
        <h2 class="product-name">{{ product.name }}</h2>
        <div class="product-type">Type: {{ product.type }}</div>
        <div class="product-price">Price: x{{ product.price.toFixed(2) }}</div>
        <button @click="addToCart" class="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  </div>

  <div v-else class="product-not-found">
    <p>Product not found</p>
    <button @click="goBack" class="back-btn">Back to list</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import productsData from '../data/products.json'
import { useRoute, useRouter } from 'vue-router'
import { useCart } from '../stores/cart'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { add } = useCart()
    const id = route.params.id as string
    
    // Find product in data
    const product = (productsData as any).sections
      .flatMap((s: any) => s.products)
      .find((p: any) => p.id === id)

    function goBack() { 
      router.push('/products') 
    }

    function addToCart() {
      if (product) {
        add({
          id: product.id, 
          name: product.name, 
          price: product.price, 
          image: product.image, 
          type: product.type 
        })
        alert('Added to cart')
      }
    }

    return { product, goBack, addToCart }
  }
})
</script>

<style scoped>
.product-detail {
  padding: 16px;
}

.back-btn {
  margin-bottom: 12px;
  padding: 8px 16px;
  border: none;
  background-color: #f4f4f4;
  cursor: pointer;
  border-radius: 4px;
}

.product-container {
  display: flex;
  gap: 16px;
  background: white;
  padding: 12px;
  border-radius: 6px;
}

.product-image {
  width: 320px;
  height: 220px;
  object-fit: cover;
  background: #eee;
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 600;
}

.product-type {
  color: #666;
}

.product-price {
  margin: 8px 0;
  font-weight: 700;
}

.add-to-cart-btn {
  padding: 10px 20px;
  border: none;
  background-color: #0aa;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
}

.add-to-cart-btn:hover {
  background-color: #009b91;
}

.product-not-found {
  font-size: 1.2rem;
  color: #666;
}

.product-not-found .back-btn {
  background-color: #ff4d4f;
  color: white;
}

.product-not-found .back-btn:hover {
  background-color: #d43f3a;
}
</style>
