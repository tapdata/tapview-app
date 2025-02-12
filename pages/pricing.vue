<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('pricing').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})

// defineOgImageComponent('Saas')

const isYearly = ref(false)
</script>

<template>
  <div v-if="page">
    <UPageHero v-bind="page.hero">
      <!-- <template #links>
        <UPricingToggle
          v-model="isYearly"
          class="w-[240px]"
          left="Full Management"
          right="Semi-Managed"
        />
      </template> -->
    </UPageHero>

    <UContainer>
      <UPricingGrid>
        <UPricingCard
          v-for="(plan, index) in page.plans"
          :key="index"
          v-bind="plan"
          :price="plan.price.hour"
          cycle="hourly"
        />
      </UPricingGrid>
    </UContainer>
  </div>
</template>
