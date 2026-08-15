import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Les rubriques du site. Pour en ajouter une, il faut l'ajouter ici
// ET dans src/rubriques.ts ET dans .pages.yml.
export const RUBRIQUES = [
  'recensions',
  'reflexions',
  'recommandations',
] as const;

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    titre: z.string(),
    rubrique: z.enum(RUBRIQUES),
    date: z.coerce.date(),
    auteur: z.string().optional(),
    chapeau: z.string().optional(),
    image: z.string().optional(),
    credit_image: z.string().optional(),
    lien: z.string().optional(),
    source: z.string().optional(),
    document: z.string().optional(),
    brouillon: z.boolean().default(false),
    mise_en_avant: z.boolean().default(false),
    // Les réactions de lecteurs que vous avez choisi de publier.
    reactions: z
      .array(
        z.object({
          auteur: z.string(),
          date: z.coerce.date().optional(),
          texte: z.string(),
        })
      )
      .default([]),
  }),
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
  schema: z.object({
    titre: z.string(),
    chapeau: z.string().optional(),
  }),
});

export const collections = { articles, pages };
