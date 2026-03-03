import { defineCollection, z } from 'astro:content';

const subjects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    subject: z.string(),
    initial: z.string().length(1),
    order: z.number(),
  }),
});

const pricing = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    price: z.number(),
    currency: z.string(),
    period: z.string(),
    featured: z.boolean(),
    order: z.number(),
    features: z.array(z.string()),
    ctaLabel: z.string(),
    ctaStyle: z.enum(['outline', 'solid']),
  }),
});

export const collections = { subjects, testimonials, pricing };
