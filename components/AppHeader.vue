<template>
  <header class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <NuxtLink to="/">
          <img src="/logo.svg" alt="TapView" />
        </NuxtLink>
      </div>
      <nav class="items-center gap-x-8 hidden lg:flex">
        <NuxtLink class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" to="/product">Product</NuxtLink>
        <NuxtLink class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" to="/connector">Connector</NuxtLink>
        <NuxtLink class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" to="/docs">Docs</NuxtLink>
        <NuxtLink class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" to="/blog">Blog</NuxtLink>
        <NuxtLink class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" to="/pricing">Pricing</NuxtLink>
      </nav>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <UButton color="primary">Get Started</UButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 100;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav {
    display: flex;
    gap: 2rem;
    align-items: center;

    a {
      color: #333;
      text-decoration: none;
      font-weight: 500;
      
      &:hover {
        color: var(--primary-color);
      }
    }
  }

  .actions {
    display: flex;
    gap: 1rem;
    align-items: center;

    .contact-link {
      color: #333;
      text-decoration: none;
    }

    .btn-primary {
      background: var(--primary-color);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      border: none;
      cursor: pointer;
    }
  }
}
</style> 