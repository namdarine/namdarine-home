// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)

// blog
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

// team
const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// templates (shared schema for both en/ko)
const templateSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  category: z.string().optional(),
  status: z.enum(["standard", "pro", "beta"]).optional(),
  comingSoon: z.boolean().optional(),
  thumbnail: z.string(),
  publishDate: z.string(),
});

// 3. Export all collections
export const collections = {
  blog: blogCollection,
  team: teamCollection,
  templates: defineCollection({ schema: templateSchema }),
  "ko/templates": defineCollection({ schema: templateSchema }),
};