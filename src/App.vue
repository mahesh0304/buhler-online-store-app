<template>
  <div>
    <AppHeader />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './components/AppHeader.vue'

export default defineComponent({
  components: { AppHeader }
})
</script>

<style>
body { font-family: Arial, Helvetica, sans-serif; margin:0; padding:0; background:#f6f6f6; }
.container { padding: 16px; max-width:1100px; margin: 0 auto; }
</style>
