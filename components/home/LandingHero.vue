<template>
  <section class="hero">
    <div class="container max-w-7xl">
      <div class="hero-content">
        <h1>Building Document-Based Real-Time Materialized Views</h1>
        <p>Collect Real-Time data from your  source RDBMS using CDC, build document-structured materialized views in MongoDB Atlas. Enjoy a FREE trial of our cloud service today!</p>
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
    h1 {
      font-size: 3rem;
      line-height: 1.2;
      margin-bottom: 1.5rem;
      color: #1a1a1a;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6;
      color: #666;
      margin-bottom: 2rem;
    }
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
