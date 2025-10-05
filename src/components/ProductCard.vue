<template>
  <div class="card">
    <a :href="'/products/' + product.id">
      <img :src="product.image" alt="" class="img"/>
    </a>
    <div class="info">
      <div class="name">{{ product.name }}</div>
      <div class="price">x{{ product.price.toFixed(2) }}</div>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCart } from '../stores/cart'

export default defineComponent({
  props: {
    product: { type: Object as () => any, required: true }
  },
  setup(props){
    const { add } = useCart()
    function addToCart(){
      add({
        id: props.product.id,
        name: props.product.name,
        price: props.product.price,
        image: props.product.image,
        type: props.product.type
      })
      alert('Added to cart')
    }
    return { addToCart }
  }
})
</script>

<style scoped>
.card { background:white; border:1px solid #e0e0e0; padding:8px; border-radius:4px; display:flex; gap:8px; align-items:center; }
.img { width:120px; height:90px; object-fit:cover; background:#eee; display:block; }
.info { flex:1; display:flex; flex-direction:column; gap:6px; }
.name { font-weight:600; color:#0aa; }
.price { color:#666 }
button { align-self:flex-end; background:#0aa; color:white; border:none; padding:6px 10px; border-radius:4px; cursor:pointer }
</style>
