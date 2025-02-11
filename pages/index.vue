<script setup lang="ts">
import LandingHero from '~/components/home/LandingHero.vue'

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('content').first())
</script>

<template>
  <div class="home">
    <LandingHero />

    <ULandingSection
      title="Core Technology Advantages"
      description="Innovative solutions providing comprehensive support for your data services"
    >
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) in page.advantages.items"
          :key="index"
          v-bind="item"
          class="shadow-lg"
          :ui="{
            icon: {
              wrapper: 'mb-2 pointer-events-none bg-primary-100 inline-flex items-center justify-center rounded-lg p-2',
              base: 'w-8 h-8 flex-shrink-0 text-primary dark:text-white',
            },
          }"
        >
          <template #icon />
        </ULandingCard>
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      :title="page.features.title"
      :description="page.features.description"
    >
      <UPageGrid :ui="{ wrapper: 'grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-8' }">
        <ULandingCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
        >
          <img
            :src="item.image"
            alt="Product Feature"
            class="w-full h-full object-cover"
          >
        </ULandingCard>
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      :title="page.stories.title"
      :description="page.stories.description"
    >
      <UPageGrid>
        <div
          v-for="(story, index) in page.stories.items"
          :key="index"
          class="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <!-- Image container -->
          <div class="aspect-w-16 aspect-h-9 overflow-hidden">
            <img
              :src="story.image"
              :alt="story.title"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            >
          </div>

          <!-- Content area -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ story.title }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ story.description }}
            </p>

            <!-- Read more button -->
            <NuxtLink
              :to="story.link"
              class="inline-flex items-center text-purple-600 hover:text-purple-700"
            >
              Read More
              <svg
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>
        <!-- <ULandingCard
          v-for="(item, index) in page.body.stories.items"
          :key="index"
          v-bind="item"
        >
          <img
            :src="item.image"
            alt="Product Feature"
            class="w-full h-full object-cover"
          >
        </ULandingCard> -->
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      id="faq"
      v-bind="page.faq"
      class="scroll-mt-[var(--header-height)]"
    >
      <ULandingFAQ
        multiple
        :items="page.faq.items"
        class="max-w-4xl mx-auto"
      >
        <template #body="{ item }">
          <MDC
            :value="item.content"
            unwrap="p"
          />
        </template>
      </ULandingFAQ>
    </ULandingSection>
  </div>
</template>

<style scoped>
.home {
  padding-top: 64px; /* Header height */
}
</style>
