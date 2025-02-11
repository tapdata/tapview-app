<template>
  <section class="core-features">
    <div class="container">
      <h2>Core Technology Advantages</h2>
      <p class="subtitle">Innovative solutions providing comprehensive support for your data services</p>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="icon">
            <!-- <img src="~/assets/icons/multi-source.svg" alt="Multi-Source" /> -->
          </div>
          <h3>Multi-Source Data Support</h3>
          <p>Support for various data sources including Oracle, MySQL, PostgreSQL, and MongoDB, enabling seamless data integration.</p>
        </div>

        <div class="feature-card">
          <div class="icon">
            <!-- <img src="~/assets/icons/realtime.svg" alt="Real-Time" /> -->
          </div>
          <h3>Real-Time Synchronization</h3>
          <p>Millisecond-level data synchronization, continuous monitoring of both incremental and full data synchronization.</p>
        </div>

        <div class="feature-card">
          <div class="icon">
            <!-- <img src="~/assets/icons/secure.svg" alt="Secure" /> -->
          </div>
          <h3>Secure and Reliable</h3>
          <p>Enterprise-grade security protection, data encryption, and cloud-level high availability.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.core-features {
  padding: 4rem 0;
  background: white;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }

  .subtitle {
    color: #666;
    margin-bottom: 3rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .feature-card {
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 8px;
    text-align: left;

    .icon {
      margin-bottom: 1.5rem;
      
      img {
        width: 48px;
        height: 48px;
      }
    }

    h3 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: #1a1a1a;
    }

    p {
      color: #666;
      line-height: 1.6;
    }
  }
}
</style> 