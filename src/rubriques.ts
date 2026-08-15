export type Rubrique = {
  slug: string;
  nom: string;
  singulier: string;
  intro: string;
};

export const rubriques: Rubrique[] = [
  {
    slug: 'recensions',
    nom: 'Recensions',
    singulier: 'Recension',
    intro:
      'Un regard critique sur une œuvre littéraire, académique ou cinématographique.',
  },
  {
    slug: 'reflexions',
    nom: 'Réflexions',
    singulier: 'Réflexion',
    intro: 'Quelques pistes pour ouvrir la voie à la pensée.',
  },
  {
    slug: 'recommandations',
    nom: 'Recommandations',
    singulier: 'Recommandation',
    intro: 'À lire, à voir, à écouter.',
  },
];

export const rubriqueParSlug = (slug: string) =>
  rubriques.find((r) => r.slug === slug);

/** « recensions » → « Recension » (pour l'étiquette d'un article) */
export const nomSingulier = (slug: string) =>
  rubriqueParSlug(slug)?.singulier ?? slug;

export const formaterDate = (date: Date) =>
  new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);

export const formaterDateCourte = (date: Date) =>
  new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short' }).format(
    date
  );
