<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const colorMode = useColorMode()
const appConfig = useAppConfig()
const { $ui } = useNuxtApp()

// Computed

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? appConfig.ui.icons.dark : appConfig.ui.icons.light"
      v-bind="{
        ...($ui?.button?.secondary as any),
        ...$attrs,
      }"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
      @click="isDark = !isDark"
    />

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
