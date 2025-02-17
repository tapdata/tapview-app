<script setup lang="ts">
import type { BadgeColor } from '#ui/types'
import type { BlogPost } from '~/types'
import { withoutTrailingSlash } from 'ufo'

const route = useRoute()
const { toc, seo } = useAppConfig()

const { data } = await useAsyncData(route.path, () => Promise.all([
  queryCollection('blogPost').path(route.path).first(),
  queryCollectionItemSurroundings('blogPost', route.path, {
    fields: ['title', 'description'],
  }),
]), {
  transform: ([page, surround]) => ({ page, surround }),
})
if (!data.value || !data.value.page) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const page = computed(() => data.value?.page)
const surround = computed(() => data.value?.surround)

useSeoMeta({
  title: page.value.seo.title,
  ogTitle: `${page.value.seo.title} - ${seo?.siteName}`,
  description: page.value.seo.description,
  ogDescription: page.value.seo.description,
})
</script>

<template>
  <UContainer v-if="page">
    <UPageHeader
      :title="page.title"
      :description="page.description"
    >
      <template #headline>
        <!-- <UBadge
          v-if="page.badge"
          :color="page.badge.color as BadgeColor"
          variant="subtle"
          :label="page.badge.label"
        />
        <span class="text-gray-500 dark:text-gray-400">&middot;</span> -->
        <time class="text-gray-500 dark:text-gray-400">{{ new Date(page.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' }) }}</time>
      </template>

      <!-- <div class="flex flex-wrap items-center gap-3 mt-4">
        <UButton
          v-for="(author, index) in page.authors"
          :key="index"
          :to="author.to"
          color="white"
          target="_blank"
          size="sm"
        >
          <UAvatar
            v-bind="author.avatar"
            alt="Author avatar"
            size="2xs"
          />

          {{ author.name }}
        </UButton>
      </div> -->
    </UPageHeader>

    <UPage>
      <UPageBody prose>
        <ContentRenderer
          v-if="page"
          :value="page"
        />

        <hr v-if="surround?.length">

        <UContentSurround :surround="surround" />
      </UPageBody>

      <template v-if="page?.body?.toc?.links?.length" #right>
        <UContentToc
          :title="toc?.title"
          :links="page.body?.toc?.links"
        />
      </template>
    </UPage>
  </UContainer>
</template>
