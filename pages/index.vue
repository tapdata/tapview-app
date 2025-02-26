<script setup lang="ts">
import LandingHero from '~/components/home/LandingHero.vue'

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('content').first())
</script>

<template>
  <div class="home">
    <ULandingHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
      :ui="{
        container: 'gap-16 sm:gap-x-24 flex-row',
        base: 'text-left',
        title: '!text-[2rem] md:!text-[2.5rem] xl:!text-[3.5rem] !leading-[1.25] font-semibold tracking-tight text-gray-900 dark:text-white',
        links: 'mt-10 flex flex-wrap justify-start gap-x-6 gap-y-3',
      }"
    >
      <template #title>
        <div>
          Building Document-Based
          <span
            class="inline-block my-1 px-4 rounded-lg
                       bg-primary-100 border-b-8 border-primary-400
                       dark:bg-primary-900/50 dark:border-primary-600 dark:text-primary-100"
          >
            Real-Time
          </span>
          Materialized Views
        </div>
      </template>
      <template #default>
        <div class="relative flex-shrink-0">
          <img class="block dark:hidden" src="~/assets/images/hero-diagram.svg" alt="TapView Diagram">
          <img class="hidden dark:block" src="~/assets/images/hero-diagram-dark.svg" alt="TapView Diagram">
          <div
            class="w-80 h-80 bg-purple-500 rounded-full opacity-70 dark:opacity-60 blur-[120px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
          />
        </div>

        <!-- <div class="absolute inset-0 rotate-180 bg-primary-gradient" /> -->
      </template>
    </ULandingHero>

    <ULandingSection
      :title="page.advantages.title"
      :description="page.advantages.description"
      :ui="{
        wrapper: 'relative py-24 sm:py-32',
      }"
    >
      <!-- <div class="absolute inset-0 -z-10 rotate-180 bg-primary-gradient" /> -->
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) in page.advantages.items"
          :key="index"
          v-bind="item"
          class="shadow-lg"
          :ui="{
            icon: {
              wrapper: 'mb-2 pointer-events-none inline-flex items-center justify-center rounded-lg p-2 bg-primary-100 dark:bg-primary-900/50',
              base: 'w-8 h-8 flex-shrink-0 text-primary-600 dark:text-primary-200',
            },
          }"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      :title="page.features.title"
      :description="page.features.description"
      :ui="{
        wrapper: 'relative py-24 sm:py-32',
      }"
    >
      <!-- <div class="absolute inset-0 -z-10 rotate-180 bg-primary-gradient" /> -->
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
          class="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Seamless Data Integration
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Experience real-time data synchronization with our advanced CDC technology, ensuring your MongoDB views are always up-to-date with your source database.
            </p>

            <!-- Read more button -->
            <NuxtLink
              :to="story.link"
              class="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
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
