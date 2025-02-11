<template>
  <div class="blog-page">
    <h1>Blog Posts</h1>
    <div class="blog-grid">
      <!-- Blog posts will go here -->
    </div>
  </div>
</template>

<script setup>
// Blog page logic here
</script>

<style scoped>
.blog-page {
  padding: 2rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
</style> 