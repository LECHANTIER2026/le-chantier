import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import reglages from '../data/reglages.json';

export async function GET(context) {
  const articles = (
    await getCollection('articles', ({ data }) => !data.brouillon)
  ).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: reglages.nom_du_site,
    description: reglages.slogan,
    site: context.site,
    items: articles.map((a) => ({
      title: a.data.titre,
      pubDate: a.data.date,
      description: a.data.chapeau ?? '',
      link: `/articles/${a.id}/`,
    })),
    customData: `<language>fr</language>`,
  });
}
