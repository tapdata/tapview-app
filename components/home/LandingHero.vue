<template>
  <section class="hero">
    <div class="container max-w-7xl">
      <div class="hero-content">
        <h1 class="text-gray-900 dark:text-white">
          Building Document-Based Real-Time Materialized Views
        </h1>
        <p class="text-gray-600 dark:text-gray-300">
          Collect Real-Time data from your source RDBMS using CDC, build
          document-structured materialized views in MongoDB Atlas. Enjoy a
          FREE trial of our cloud service today!
        </p>
        <div class="hero-actions">
          <UButton color="primary">
            Get Started
          </UButton>
          <UButton variant="outline" color="primary">
            Read More
          </UButton>
        </div>
      </div>
      <div class="rounded-lg relative overflow-hidden">
        <img src="~/assets/images/hero-diagram.svg" alt="TapView Diagram">
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 6rem 0;

  .container {
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-content {
    @apply max-w-3xl mb-16;
  }

  .hero-content h1 {
    @apply text-4xl sm:text-5xl font-bold mb-6;
  }

  .hero-content p {
    @apply text-lg mb-8;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;

    button {
      padding: 0.8rem 1.5rem;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
    }

    .btn-primary {
      background: var(--primary-color);
      color: white;
      border: none;
    }

    .btn-secondary {
      background: transparent;
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
    }
  }
}
</style>
