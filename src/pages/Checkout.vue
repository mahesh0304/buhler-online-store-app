<template>
  <div>
    <h2 class="checkout-title">Checkout</h2>
    
    <!-- Handle empty cart state -->
    <div v-if="items.length === 0" class="empty-cart-message">Cart is empty</div>
    
    <!-- Table when cart has items -->
    <table v-else class="checkout-table">
      <thead>
        <tr>
          <th class="table-header">Product</th>
          <th class="table-header">Price</th>
          <th class="table-header">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(it, idx) in items" :key="idx" class="table-row">
          <td class="table-cell product-cell">
            <img :src="it.image" alt="Product Image" class="product-image" />
            <div>
              <div class="product-name">{{ it.name }}</div>
              <div class="product-type">{{ it.type }}</div>
            </div>
          </td>
          <td class="table-cell price-cell">x{{ it.price.toFixed(2) }}</td>
          <td class="table-cell action-cell">
            <button @click="remove(idx)" class="remove-btn">Remove</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="total-cell">Total</td>
          <td class="total-price">x{{ total.toFixed(2) }}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCart } from '../stores/cart'

export default defineComponent({
  setup() {
    const { items, remove, total } = useCart()
    return { items, remove, total }
  }
})
</script>

<style scoped>
.checkout-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.empty-cart-message {
  font-size: 1.2rem;
  color: #666;
}

.checkout-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.table-header {
  text-align: left;
  padding: 8px;
  background-color: #f4f4f4;
}

.table-row {
  border-top: 1px solid #eee;
}

.table-cell {
  padding: 8px;
}

.product-cell {
  display: flex;
  gap: 8px;
  align-items: center;
}

.product-image {
  width: 80px;
  height: 60px;
  object-fit: cover;
  background: #eee;
}

.product-name {
  font-weight: 600;
}

.product-type {
  color: #666;
}

.price-cell {
  text-align: center;
}

.action-cell {
  text-align: center;
}

.remove-btn {
  padding: 6px 12px;
  border: none;
  background-color: #ff4d4f;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.9rem;
}

.remove-btn:hover {
  background-color: #d43f3a;
}

.total-cell {
  font-weight: 700;
  padding: 12px;
}

.total-price {
  font-weight: 700;
  text-align: center;
}
</style>
