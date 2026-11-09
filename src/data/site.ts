// Réglages du site, en un seul fichier (règle « rien en dur », DEC-VITRINE-005) : identité, contact, navigation, réseaux.
// Les textes des pages sont dans les pages ; leur statut de validation est suivi dans TEXTES.md.

export const site = {
  nom: 'Clic Silver Digital Solutions',
  nomCourt: 'Clic Silver',
  logo: '/logo-clic-silver.svg',
  logoAlt: 'Logo de Clic Silver Digital Solutions, conseil et ingénierie informatique',
  logoAltPied: 'Logo Clic Silver Digital Solutions',
  contact: {
    courriel: 'contact@clicsilver.com',
    adresse: '78630 Orgeval — Île-de-France, France', // siège de la société (DEC-VITRINE-028) ; Achères est l'adresse personnelle de Brice, jamais sur le site
    telephone: '+33 6 07 94 55 79',
    telephoneLien: '+33607945579',
  },
  // Identité légale : Notion, « Clic Silver Digital Solutions — Fiche société (source unique) » (DEC-VITRINE-024).
  societe: {
    denomination: 'CLIC SILVER DIGITAL SOLUTIONS',
    forme: 'SARL à associé unique (EURL) au capital de 1 000 €',
    siege: '1 Allée de Marly, 78630 Orgeval, France',
    rcs: 'RCS Versailles 904 918 141',
    siret: '904 918 141 00014',
    tva: 'FR12904918141',
    directeurPublication: 'Brice POTE, gérant',
  },
  // Hébergeur affiché aux mentions légales : GitHub Pages (DEC-VITRINE-027).
  hebergeur: {
    texte: 'Site hébergé par GitHub Pages, service de GitHub, Inc. — 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.',
    contact: 'https://support.github.com/contact',
  },
  messagerie: 'Google Workspace (Google)',
  // Liens des réseaux sociaux : à fournir par Brice. Vide = icône affichée sans lien.
  reseaux: [
    { nom: 'LinkedIn', icone: 'linkedin', url: '' },
    { nom: 'Instagram', icone: 'instagram', url: '' },
    { nom: 'X', icone: 'x', url: '' },
    { nom: 'Facebook', icone: 'facebook', url: '' },
  ],
  // Présence internationale : retirée tant qu'aucune page n'existe (DEC-VITRINE-016). Pour la rétablir, ajouter des entrées
  // { libelle, url } avec une adresse réelle : le pied de page n'affiche le bloc que s'il y a au moins une entrée.
  presences: [] as { libelle: string; url: string }[],
} as const;

export const navigation = [
  { libelle: 'Accueil', href: '/' },
  { libelle: 'Notre histoire et vision', href: '/notre-histoire-et-vision/' },
  { libelle: 'Nos prestations', href: '/nos-prestations/' },
  { libelle: 'Notre expertise', href: '/notre-expertise/' },
  { libelle: 'Actualités', href: '/actualites/' },
] as const;

export const pageContact = { libelle: 'Nous contacter', href: '/nous-contacter/' } as const;
export const pageMentions = { libelle: 'Mentions légales', href: '/mentions-legales/' } as const;
export const pageAccessibilite = { libelle: 'Accessibilité', href: '/mentions-legales/#accessibilite' } as const;
