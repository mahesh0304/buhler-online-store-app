<template>
  <div>
    <section v-for="section in data.sections" :key="section.id" class="section">
      <h3 class="section-title">{{ section.title }}</h3>
      <div class="product-grid">
        <ProductCard v-for="p in section.products" :key="p.id" :product="p" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import data from '../data/products.json'

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  type: string;
}

interface Section {
  id: string;
  title: string;
  products: Product[];
}

interface ProductData {
  sections: Section[];
}

export default defineComponent({
  components: { ProductCard },
  setup() {
    const dt: ProductData = data as ProductData
    return { data: dt }
  }
})
</script>

<style scoped>
.section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}
</style>
