<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('content').path(route.path).first())
console.log('page', page.value)
// if (!page.value) {
//   throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
// }
</script>

<template>
  <ULandingSection
    title="Core Technology Advantages"
    description="Innovative solutions providing comprehensive support for your data services"
  >
    <UPageGrid>
      <ULandingCard
        v-for="(item, index) in page.body.features.items"
        :key="index"
        v-bind="item"
        class="shadow-lg"
      />
    </UPageGrid>
  </ULandingSection>
</template>
