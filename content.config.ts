import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    books: defineCollection({
      type: 'data',
      source: 'books/*.md',
      schema: z.object({
        title: z.string(),
        author: z.string(),
        cover: z.string().optional(),
      }),
    }),
    sports: defineCollection({
      type: 'data',
      source: 'sports/*.md',
      schema: z.object({
        name: z.string(),
        icon: z.string(),
      }),
    }),
    life: defineCollection({
      type: 'data',
      source: 'life/*.md',
      schema: z.object({
        date: z.string(),
        text: z.string(),
      }),
    }),
  },
})
