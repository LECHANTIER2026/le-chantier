import { getCollection } from 'astro:content';

/** Tous les articles publiés (les brouillons sont exclus), du plus récent au plus ancien. */
export async function tousLesArticles() {
  const articles = await getCollection('articles', ({ data }) => !data.brouillon);
  return articles.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
}

export async function articlesDeLaRubrique(slug: string) {
  const tous = await tousLesArticles();
  return tous.filter((a) => a.data.rubrique === slug);
}
