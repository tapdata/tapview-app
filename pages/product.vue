<template>
  <div class="product-page">
    <h1>Our Products</h1>
    <div class="product-grid">
      <!-- Product content will go here -->
    </div>
  </div>
</template>

<script setup>
// Product page logic here
</script>

<style scoped>
.product-page {
  padding: 2rem;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
</style> 