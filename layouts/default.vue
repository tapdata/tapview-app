<script setup>
import DotPattern from '~/components/BackgroundPatterns/DotPattern.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />

    <div
      v-if="$route.path === '/'"
      class="absolute inset-0 -z-10 flex items-center justify-center"
    >
      <div
        class="w-80 h-80 bg-purple-500 rounded-full mt-52 lg:mt-28 opacity-70 dark:opacity-60 blur-[120px]"
      />
      <ClientOnly>
        <DotPattern
          class="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-40 lg:opacity-100"
        />
      </ClientOnly>
    </div>
  </div>
</template>
