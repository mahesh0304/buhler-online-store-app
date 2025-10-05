import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Products from './pages/Products.vue'
import ProductDetail from './pages/ProductDetail.vue'
import Checkout from './pages/Checkout.vue'

const routes = [
  { path: '/', redirect: '/products' },
  { path: '/products', component: Products },
  { path: '/products/:id', component: ProductDetail, props: true },
  { path: '/checkout', component: Checkout }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
