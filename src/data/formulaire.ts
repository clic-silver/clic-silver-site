// Formulaire de prise de contact (docs/contenu-pages-interieures.md, partie C). Un seul endroit pour les choix proposés.
export const interets = [
  { id: 'site-vitrine', libelle: 'Site vitrine' },
  { id: 'site-e-commerce', libelle: 'Site e-commerce' },
  { id: 'application-web', libelle: 'Application web' },
  { id: 'application-mobile', libelle: 'Application mobile' },
  { id: 'marketing-digital', libelle: 'Marketing digital' },
  { id: 'amoa', libelle: 'AMOA' },
  { id: 'pilotage-gouvernance', libelle: 'Pilotage de projets et gouvernance du SI' },
  { id: 'tma-mco', libelle: 'TMA & MCO' },
  { id: 'devops-cloud', libelle: 'DevOps & Cloud' },
] as const;

export type Interet = (typeof interets)[number]['id'];

export const statutsJuridiques = [
  'SAS', 'SCI', 'SASU', 'SARL', 'EURL', 'Micro-entreprise', 'Association', 'Organisme public', 'Autre',
];
