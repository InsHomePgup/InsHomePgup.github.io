import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    movies: defineCollection({
      type: 'data',
      source: 'movies/*.md',
      schema: z.object({
        title: z.string(),
        type: z.enum(['电影', '剧集', '音乐']),
        year: z.string().optional(),
        note: z.string().optional(),
        placeholder: z.boolean().optional(),
      }),
    }),
    books: defineCollection({
      type: 'data',
      source: 'books/*.md',
      schema: z.object({
        title: z.string(),
        author: z.string(),
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
