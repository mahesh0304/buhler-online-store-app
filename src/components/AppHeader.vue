<template>
  <header class="header">
    <div class="header-left">
      <a @click.prevent="goHome" href="/products" class="logo-link">
        <img src="/src/assets/buhler-logo.svg" alt="buhler-logo" class="logo-img" />
      </a>
      <div class="timestamp">{{ nowString }}</div>
    </div>
    <div>
      <a @click.prevent="goCheckout" href="/checkout" class="cart-link">
        Cart ({{ cartCount }})
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue'
import { useCart } from '../stores/cart'

export default defineComponent({
  setup() {
    const { count } = useCart()
    const cartCount = count
    const now = ref(new Date())
    const tick = () => now.value = new Date()
    let id: number
    onMounted(() => {
      id = window.setInterval(tick, 1000)
    })
    onUnmounted(() => {
      clearInterval(id)
    })
    const nowString = computed(() => now.value.toLocaleString())
    function goHome() { window.location.href = '/products' }
    function goCheckout() { window.location.href = '/checkout' }
    return { cartCount, nowString, goHome, goCheckout }
  }
})
</script>

<style scoped>
.header {
  background: white;
  border-bottom: 1px solid #ddd;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center; /* Vertically center */
  justify-content: center; /* Horizontally center */
  gap: 12px;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.logo-img {
  height: 34px;
}

.timestamp {
  color: #0aa;
  margin: 0 auto;
 margin-left: 450px;
}
.cart-link {
  text-decoration: none;
  color: #0aa;
}

a {
  cursor: pointer;
}
</style>
