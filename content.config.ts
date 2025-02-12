import { defineCollection, z } from '@nuxt/content'

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])

const baseSchema = {
  title: z.string().nonempty(),
  description: z.string().nonempty(),
}

const linkSchema = z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional(),
  size: sizeEnum,
  trailing: z.boolean().optional(),
  target: z.string().optional(),
  color: colorEnum,
  variant: variantEnum,
})

const imageSchema = z.object({
  src: z.string().nonempty(),
  alt: z.string().optional(),
  loading: z.string().optional(),
  srcset: z.string().optional(),
})

const badgeSchema = z.object({
  label: z.string().nonempty(),
  color: colorEnum.optional(),
  variant: variantEnum,
})

const featureItemSchema = z.object({
  ...baseSchema,
  icon: z.string().nonempty(),
})

const sectionSchema = z.object({
  headline: z.string().optional(),
  ...baseSchema,
  features: z.array(featureItemSchema),
})

const userSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  to: z.string().nonempty(),
  avatar: imageSchema,
})

const sectionWithLinksSchema = sectionSchema.extend({
  links: z.array(linkSchema),
})

const testimonialUserSchema = userSchema.extend({
  target: z.string().nonempty(),
})

export const collections = {
  content: defineCollection({
    source: '*index.yml',
    type: 'data',
    schema: z.object({
      ...baseSchema,
      hero: sectionWithLinksSchema,
      features: sectionSchema,
      advantages: sectionSchema.extend({
        items: z.array(z.object({
          label: z.string().nonempty(),
          content: z.string().nonempty(),
          defaultOpen: z.boolean().optional(),
        })),
      }),
      stories: sectionSchema.extend({
        items: z.array(z.object({
          label: z.string().nonempty(),
          content: z.string().nonempty(),
          defaultOpen: z.boolean().optional(),
        })),
      }),
      faq: sectionSchema.extend({
        items: z.array(z.object({
          label: z.string().nonempty(),
          content: z.string().nonempty(),
          defaultOpen: z.boolean().optional(),
        })),
      }),
    }),
  }),

  pricing: defineCollection({
    source: '*pricing.yml',
    type: 'data',
    schema: z.object({
      ...baseSchema,
      hero: sectionWithLinksSchema,
      plans: z.array(z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        price: z.object({
          hour: z.string().nonempty(),
          month: z.string().nonempty(),
          year: z.string().nonempty(),
        }),
        align: z.enum(['top', 'center', 'bottom']),
        button: linkSchema,
        features: z.array(featureItemSchema),
      })),
    }),
  }),

  blog: defineCollection({
    source: '*blog.yml',
    type: 'data',
    schema: z.object({
      ...baseSchema,
      posts: z.array(z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        date: z.string().nonempty(),
        image: imageSchema,
        author: userSchema,
      })),
    }),
  }),

  blogPost: defineCollection({
    source: 'blog/*.md',
    type: 'page',
    schema: z.object({
      ...baseSchema,
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      date: z.string().nonempty(),
      badge: badgeSchema,
      authors: z.array(userSchema),
    }),
  }),
}
