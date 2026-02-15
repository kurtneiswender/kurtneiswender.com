import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const garden = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/garden' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    maturity: z.enum(['seed', 'sprout', 'evergreen']),
    tags: z.array(z.string()),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    relatedTools: z.array(z.string()).optional(),
  }),
});

export const collections = { garden };
