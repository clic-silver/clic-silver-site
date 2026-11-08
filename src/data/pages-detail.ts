// Pages de détail des prestations et de l'expertise (DEC-VITRINE-019, 025).
// Textes finaux : docs/redaction/contenus-finaux.md (ChatGPT). Un point de liste = un libellé en gras (facultatif) suivi du texte.
import type { Interet } from './formulaire';

export interface Point { gras?: string; texte: string }
export interface PageDetail {
  slug: string;
  titre: string; // H1 et titre de la carte
  titreOnglet: string; // balise title
  description: string; // meta description
  carte: string; // image de la carte (Nos prestations / Notre expertise)
  altCarte: string;
  bandeau: string; // image du bandeau, dans public/images/pages/
  alt: string; // texte alternatif du bandeau
  accroche: string;
  introduction: string;
  titreListe: string;
  points: Point[];
  titreCible: string;
  cibles: string[];
  interet: Interet; // case pré-cochée dans le formulaire
}

export const prestations: PageDetail[] = [
  {
    "slug": "site-vitrine",
    "titre": "Site vitrine",
    "titreOnglet": "Site vitrine professionnel",
    "description": "Présentez votre activité avec un site vitrine rapide, responsive et pensé pour vos visiteurs. Clic Silver vous accompagne de la conception à la mise en ligne.",
    "carte": "prestations-site-vitrine.jpg",
    "altCarte": "Écran présentant un site web institutionnel",
    "bandeau": "detail-site-vitrine.jpg",
    "alt": "Page d’accueil d’un site vitrine professionnel sur ordinateur",
    "accroche": "Votre premier rendez-vous avec vos futurs clients.",
    "introduction": "Un site vitrine doit inspirer confiance dès les premières secondes, expliquer clairement vos services et donner envie de vous contacter. Nous créons une présence web à votre image, simple à parcourir, agréable sur mobile et conçue pour faire émerger votre valeur ajoutée.",
    "titreListe": "Notre accompagnement",
    "points": [
      {
        "gras": "Cadrage et messages clés",
        "texte": " : identification de vos cibles, de vos offres et des actions attendues des visiteurs."
      },
      {
        "gras": "Conception UX/UI",
        "texte": " : parcours de navigation fluides, identité visuelle cohérente et maquettes adaptées à vos publics."
      },
      {
        "gras": "Développement responsive",
        "texte": " : affichage soigné sur mobile, tablette et ordinateur."
      },
      {
        "gras": "Référencement naturel",
        "texte": " : structure des pages, titres, contenus et bonnes pratiques techniques SEO."
      },
      {
        "gras": "Mise en ligne sécurisée",
        "texte": " : configuration du domaine, certificat HTTPS et vérifications de fonctionnement."
      },
      {
        "gras": "Prise en main",
        "texte": " : documentation et conseils pour garder vos contenus à jour."
      }
    ],
    "titreCible": "Pour quels besoins ?",
    "cibles": [
      "Présenter une activité ou une entreprise avec crédibilité.",
      "Faire découvrir vos services à des prospects locaux ou internationaux.",
      "Créer un point de contact professionnel indépendant des réseaux sociaux."
    ],
    "interet": "site-vitrine"
  },
  {
    "slug": "site-e-commerce",
    "titre": "Site e-commerce",
    "titreOnglet": "Création de site e-commerce",
    "description": "Lancez ou faites évoluer votre boutique en ligne : catalogue, paiement, parcours d’achat et outils métier. Un e-commerce pensé pour convertir et grandir.",
    "carte": "prestations-e-commerce.jpg",
    "altCarte": "Interface de boutique en ligne avec catalogue de produits",
    "bandeau": "detail-site-e-commerce.jpg",
    "alt": "Boutique en ligne avec fiches produits et panier",
    "accroche": "Une boutique qui simplifie l’achat et soutient votre activité.",
    "introduction": "Vendre en ligne, ce n’est pas seulement afficher des produits. Il faut guider les visiteurs, rassurer au moment du paiement et faciliter le travail de vos équipes. Nous construisons un dispositif e-commerce adapté à votre catalogue, à vos canaux de vente et à vos processus.",
    "titreListe": "Notre accompagnement",
    "points": [
      {
        "gras": "Cadrage commercial",
        "texte": " : objectifs, profils clients, parcours d’achat et règles de gestion."
      },
      {
        "gras": "Catalogue produit",
        "texte": " : catégories, variantes, filtres et fiches claires pour mieux choisir."
      },
      {
        "gras": "Parcours de commande",
        "texte": " : panier, paiement et confirmation adaptés à votre marché."
      },
      {
        "gras": "Outils de gestion",
        "texte": " : commandes, stocks, livraison et informations clients selon la plateforme retenue."
      },
      {
        "gras": "Connexions métier",
        "texte": " : liaison possible avec CRM, ERP, PIM ou outils de suivi."
      },
      {
        "gras": "Optimisation de l’expérience",
        "texte": " : interfaces mobiles, SEO, performance et mesure des conversions."
      },
      {
        "gras": "Évolutivité",
        "texte": " : accompagnement après lancement pour enrichir les fonctionnalités et améliorer les performances."
      }
    ],
    "titreCible": "Pour quels besoins ?",
    "cibles": [
      "Ouvrir un nouveau canal de vente pour un commerce ou une marque.",
      "Moderniser une boutique existante et améliorer le parcours d’achat.",
      "Connecter votre activité en ligne à vos outils de gestion."
    ],
    "interet": "site-e-commerce"
  },
  {
    "slug": "application-web",
    "titre": "Application web",
    "titreOnglet": "Applications web métier sur mesure",
    "description": "Portails, outils internes, extranet et applications métier : Clic Silver conçoit des solutions web sur mesure intégrées à votre système d’information.",
    "carte": "prestations-application-web.jpg",
    "altCarte": "Interface d’une application web métier",
    "bandeau": "detail-application-web.jpg",
    "alt": "Interface d’une application web métier sur ordinateur",
    "accroche": "Vos processus métier méritent mieux qu’une succession de fichiers.",
    "introduction": "Lorsque les outils standards ne suivent plus votre organisation, une application web métier permet de centraliser les informations, fiabiliser les traitements et simplifier la collaboration. Nous transformons vos besoins opérationnels en un produit utilisable et évolutif, sans perdre de vue les contraintes de votre SI.",
    "titreListe": "Notre accompagnement",
    "points": [
      {
        "gras": "Cadrage et prototypage",
        "texte": " : parcours utilisateurs, règles métier, backlog et maquettes."
      },
      {
        "gras": "Développement sur mesure",
        "texte": " : architecture adaptée, PHP/Symfony, JavaScript et API REST selon les besoins."
      },
      {
        "gras": "Droits et sécurité",
        "texte": " : authentification, rôles et protection des données dès la conception."
      },
      {
        "gras": "Expérience responsive",
        "texte": " : interfaces accessibles depuis les terminaux de vos équipes."
      },
      {
        "gras": "Tests et évolutions",
        "texte": " : validation des fonctionnalités, corrections et améliorations successives."
      },
      {
        "gras": "Intégrations API",
        "texte": " : échanges avec vos outils internes ou plateformes tierces (ERP, CRM, services externes)."
      }
    ],
    "titreCible": "Pour quels besoins ?",
    "cibles": [
      "Créer un portail client, partenaire ou collaborateur.",
      "Dématérialiser un processus métier et réduire les doubles saisies.",
      "Lancer un service ou une plateforme métier accessible sur le web."
    ],
    "interet": "application-web"
  },
  {
    "slug": "application-mobile",
    "titre": "Application mobile",
    "titreOnglet": "Applications mobiles sur mesure",
    "description": "Conception et développement d’applications mobiles iOS et Android : des parcours utiles, des interfaces soignées et des services connectés à vos systèmes.",
    "carte": "prestations-application-mobile.jpg",
    "altCarte": "Application mobile affichée sur un smartphone",
    "bandeau": "detail-application-mobile.jpg",
    "alt": "Écrans d’une application mobile sur smartphone",
    "accroche": "Votre service, au plus près des usages de vos utilisateurs.",
    "introduction": "Une application mobile doit mériter sa place sur l’écran d’accueil. Nous partons des situations d’usage pour définir les fonctions essentielles, concevoir une expérience simple et préparer une solution connectée à votre système d’information.",
    "titreListe": "Notre accompagnement",
    "points": [
      {
        "gras": "Étude des usages",
        "texte": " : objectifs, personas, fonctionnalités prioritaires et parcours."
      },
      {
        "gras": "Design mobile",
        "texte": " : maquettes et interactions adaptées aux smartphones."
      },
      {
        "gras": "Développement multiplateforme",
        "texte": " : solutions React Native ou Flutter selon le projet."
      },
      {
        "gras": "Services connectés",
        "texte": " : API, authentification et synchronisation avec vos outils métier."
      },
      {
        "gras": "Fonctionnalités natives",
        "texte": " : notifications, localisation ou appareil photo si elles apportent une valeur réelle."
      }
    ],
    "titreCible": "Pour quels besoins ?",
    "cibles": [
      "Proposer un service pratique à vos clients ou adhérents.",
      "Équiper vos équipes terrain d’un outil mobile.",
      "Tester puis développer un nouveau service numérique."
    ],
    "interet": "application-mobile"
  },
  {
    "slug": "marketing-digital",
    "titre": "Marketing digital",
    "titreOnglet": "Marketing digital et acquisition",
    "description": "Référencement, contenus, campagnes et suivi des conversions : Clic Silver construit une stratégie de marketing digital liée à vos objectifs commerciaux.",
    "carte": "prestations-marketing-digital.jpg",
    "altCarte": "Tableau de bord d’une campagne de marketing digital",
    "bandeau": "detail-marketing-digital.jpg",
    "alt": "Équipe consultant des indicateurs de campagne digitale",
    "accroche": "De la visibilité aux contacts qui comptent vraiment.",
    "introduction": "Un bon site ne suffit pas si vos prospects ne le trouvent pas. Nous travaillons votre présence digitale comme un levier commercial : comprendre les recherches de vos clients, clarifier vos messages, choisir les bons canaux et mesurer les résultats obtenus.",
    "titreListe": "Notre accompagnement",
    "points": [
      {
        "gras": "Diagnostic de visibilité",
        "texte": " : présence en ligne, concurrence, positionnement et attentes de vos cibles."
      },
      {
        "gras": "Stratégie SEO",
        "texte": " : contenus, structure et optimisations qui facilitent la découverte de vos offres."
      },
      {
        "gras": "Campagnes ciblées",
        "texte": " : préparation et optimisation des actions publicitaires selon votre budget."
      },
      {
        "gras": "Contenus utiles",
        "texte": " : articles, pages de service, newsletters et messages orientés vers les besoins réels."
      },
      {
        "gras": "Mesure et amélioration",
        "texte": " : suivi des indicateurs d’acquisition, d’engagement et de conversion."
      }
    ],
    "titreCible": "Pour quels besoins ?",
    "cibles": [
      "Attirer des prospects correspondant à vos services.",
      "Améliorer votre visibilité locale ou sur de nouveaux marchés.",
      "Donner davantage de cohérence à votre communication en ligne."
    ],
    "interet": "marketing-digital"
  },
  {
    "slug": "tma-mco",
    "titre": "TMA & MCO",
    "titreOnglet": "TMA & MCO des applications",
    "description": "Maintenance applicative, correction d’anomalies, évolutions et continuité de service : Clic Silver vous aide à garder un SI fiable et maîtrisé.",
    "carte": "prestations-tma-mco.jpg",
    "altCarte": "Équipe suivant les incidents et la maintenance applicative",
    "bandeau": "detail-tma-mco.jpg",
    "alt": "Suivi de la maintenance d’une application sur un écran",
    "accroche": "Une application livrée doit continuer à rendre service.",
    "introduction": "Après la mise en production, les attentes changent : résoudre les incidents, maintenir la sécurité, faire évoluer les fonctionnalités et garder une visibilité sur le service rendu. Nous structurons la maintenance applicative et le maintien en conditions opérationnelles autour de priorités partagées.",
    "titreListe": "Notre accompagnement",
    "points": [
      {
        "gras": "Traitement des anomalies",
        "texte": " : qualification, priorisation et suivi des corrections jusqu’à leur validation."
      },
      {
        "gras": "Maintenance technique",
        "texte": " : mises à jour, compatibilité et maîtrise des évolutions de l’environnement."
      },
      {
        "gras": "Évolutions fonctionnelles",
        "texte": " : adaptation progressive aux nouveaux usages et exigences métier."
      },
      {
        "gras": "Suivi de service",
        "texte": " : indicateurs, engagements, points de pilotage et traçabilité des décisions."
      }
    ],
    "titreCible": "Pour quels besoins ?",
    "cibles": [
      "Stabiliser une application déjà utilisée par vos équipes.",
      "Organiser la maintenance avec un interlocuteur responsable.",
      "Préparer les évolutions sans perturber l’activité courante."
    ],
    "interet": "tma-mco"
  },
  {
    "slug": "amoa",
    "titre": "AMOA",
    "titreOnglet": "AMOA et cadrage de projets SI",
    "description": "Cadrage des besoins, ateliers métier, spécifications, recette et conduite du changement : une AMOA qui relie les utilisateurs et les équipes techniques.",
    "carte": "prestations-amoa.jpg",
    "altCarte": "Atelier de cadrage entre utilisateurs et responsables métier",
    "bandeau": "detail-amoa.jpg",
    "alt": "Atelier de cadrage entre responsables métier et équipe projet",
    "accroche": "Faire converger le besoin métier et la solution livrée.",
    "introduction": "Un projet avance mieux lorsque chacun partage la même compréhension du besoin. Nous vous aidons à clarifier les objectifs, formaliser les attentes et organiser le dialogue entre utilisateurs, décideurs et équipes de réalisation, depuis le cadrage jusqu’à l’adoption.",
    "titreListe": "Notre accompagnement",
    "points": [
      {
        "gras": "Recueil des besoins",
        "texte": " : ateliers, parcours actuels, irritants et objectifs métier."
      },
      {
        "gras": "Formalisation fonctionnelle",
        "texte": " : exigences, règles de gestion, critères d’acceptation et priorités."
      },
      {
        "gras": "Aide à la décision",
        "texte": " : comparaison des options et préparation des arbitrages."
      },
      {
        "gras": "Recette et adoption",
        "texte": " : scénarios de tests, validation avec les utilisateurs et accompagnement du changement."
      }
    ],
    "titreCible": "Pour quels besoins ?",
    "cibles": [
      "Préparer un projet avant de choisir une solution ou un prestataire.",
      "Clarifier les demandes entre métiers et équipe informatique.",
      "Sécuriser la recette et l’appropriation d’un nouvel outil."
    ],
    "interet": "amoa"
  },
  {
    "slug": "pilotage-gouvernance",
    "titre": "Pilotage de projets et gouvernance du SI",
    "titreOnglet": "Pilotage de projets et gouvernance SI",
    "description": "Backlog, prestataires, roadmap, recettes, mises en production et comités : sécurisez vos projets et votre logiciel métier avec un pilotage SI concret.",
    "carte": "prestations-pilotage-gouvernance.jpg",
    "altCarte": "Tableau de bord de pilotage SI avec jalons et indicateurs",
    "bandeau": "detail-pilotage-gouvernance.jpg",
    "alt": "Tableau de pilotage avec roadmap, indicateurs et décisions",
    "accroche": "Retrouvez de la visibilité sur votre SI, vos priorités et vos engagements.",
    "introduction": "Votre logiciel métier est en production, les demandes s’accumulent et plusieurs interlocuteurs doivent avancer ensemble ? Nous mettons en place un pilotage lisible entre directions métier, utilisateurs et prestataires. Le but : rendre les décisions explicites, mieux préparer les livraisons et réduire le temps perdu dans la gestion permanente des urgences.",
    "titreListe": "Notre accompagnement",
    "points": [
      {
        "gras": "Diagnostic opérationnel",
        "texte": " : cartographie des acteurs, des irritants, des engagements et des risques."
      },
      {
        "gras": "Backlog et feuille de route",
        "texte": " : qualification, priorisation et séquencement réaliste des demandes."
      },
      {
        "gras": "Coordination des prestataires",
        "texte": " : suivi des contributions, dépendances, échéances et points de blocage."
      },
      {
        "gras": "Recettes et mises en production",
        "texte": " : préparation des validations, gestion des versions et suivi post-livraison."
      },
      {
        "gras": "Gouvernance et indicateurs",
        "texte": " : comités utiles, décisions tracées et reporting compréhensible par les métiers."
      },
      {
        "gras": "Transfert de compétences",
        "texte": " : documentation et accompagnement pour rendre vos équipes progressivement autonomes."
      }
    ],
    "titreCible": "Pour quels besoins ?",
    "cibles": [
      "Reprendre le pilotage d’un logiciel métier après son déploiement.",
      "Structurer une relation avec un ou plusieurs prestataires informatiques.",
      "Retrouver une feuille de route partagée entre utilisateurs et équipes techniques."
    ],
    "interet": "pilotage-gouvernance"
  }
];

export const expertises: PageDetail[] = [
  {
    "slug": "developpement-web",
    "titre": "Développement web",
    "titreOnglet": "Développement web et intégration",
    "description": "Architecture, applications web, API et intégrations métier : une expertise de développement web orientée performance, qualité et pérennité durable.",
    "carte": "accueil-expertise-developpement-web.jpg",
    "altCarte": "Développeur travaillant sur une interface web",
    "bandeau": "detail-developpement-web.jpg",
    "alt": "Illustration de notre expertise en développement web",
    "accroche": "Des applications solides, conçues pour vos usages.",
    "introduction": "Une solution numérique réussie doit être simple à utiliser, fiable à faire évoluer et capable de dialoguer avec votre écosystème. Nous relions architecture, développement et intégration pour bâtir des applications utiles à vos équipes et à vos clients.",
    "titreListe": "Ce que nous apportons",
    "points": [
      {
        "gras": "Architecture web",
        "texte": " : structurer les composants selon le besoin fonctionnel et les contraintes techniques."
      },
      {
        "gras": "Développement applicatif",
        "texte": " : construire des fonctionnalités métier avec PHP/Symfony et les technologies web adaptées."
      },
      {
        "gras": "API et interopérabilité",
        "texte": " : définir les contrats d’échange et connecter des services existants."
      },
      {
        "gras": "Qualité logicielle",
        "texte": " : organiser tests, revues et automatisation des livraisons."
      },
      {
        "gras": "Évolutivité",
        "texte": " : documenter, maintenir et préparer les évolutions sans fragiliser l’existant."
      }
    ],
    "titreCible": "Pour quels projets ?",
    "cibles": [
      "Construire une application métier ou un extranet.",
      "Connecter des outils qui échangent encore manuellement.",
      "Faire évoluer une plateforme web existante."
    ],
    "interet": "application-web"
  },
  {
    "slug": "audit-conseils",
    "titre": "Audit & conseils",
    "titreOnglet": "Audit & conseils SI",
    "description": "Audit technique, analyse des risques et conseil IT : identifiez les véritables priorités et décidez sur des éléments concrets avant d’investir.",
    "carte": "accueil-expertise-audit-conseils.jpg",
    "altCarte": "Consultants analysant des processus et indicateurs",
    "bandeau": "detail-audit-conseils.jpg",
    "alt": "Illustration de notre expertise en audit & conseils",
    "accroche": "Prenez vos décisions techniques avec une vue d’ensemble.",
    "introduction": "Avant de refondre, de migrer ou de changer d’outil, il faut savoir ce qui fonctionne, ce qui coûte et ce qui bloque. Nous examinons votre situation, confrontons les options à vos objectifs et traduisons le diagnostic en décisions et actions hiérarchisées.",
    "titreListe": "Ce que nous apportons",
    "points": [
      {
        "gras": "État des lieux",
        "texte": " : architecture, usages, processus et contraintes d’exploitation."
      },
      {
        "gras": "Analyse des risques",
        "texte": " : dette technique, dépendances, sécurité et continuité."
      },
      {
        "gras": "Scénarios de solution",
        "texte": " : comparaison des impacts, coûts et efforts de mise en œuvre."
      },
      {
        "gras": "Conseil indépendant",
        "texte": " : aide au choix de technologies, de prestataires ou de trajectoires."
      },
      {
        "gras": "Plan d’action",
        "texte": " : recommandations priorisées, jalons et critères de réussite."
      }
    ],
    "titreCible": "Pour quels projets ?",
    "cibles": [
      "Faire auditer un système avant une évolution importante.",
      "Arbitrer entre plusieurs prestataires ou architectures.",
      "Relancer un projet dont les résultats restent insuffisants."
    ],
    "interet": "amoa"
  },
  {
    "slug": "marketing-seo",
    "titre": "Marketing & SEO",
    "titreOnglet": "Marketing digital & SEO",
    "description": "Stratégie SEO, contenus, campagnes et analyse des conversions : rendez vos offres plus visibles et mesurez l’impact de votre marketing digital.",
    "carte": "accueil-expertise-marketing-seo.jpg",
    "altCarte": "Équipe suivant un tableau de bord de référencement",
    "bandeau": "detail-marketing-seo.jpg",
    "alt": "Illustration de notre expertise en marketing & SEO",
    "accroche": "Transformez votre présence en ligne en opportunités.",
    "introduction": "Une stratégie d’acquisition efficace commence par la compréhension de vos clients. Nous associons référencement naturel, messages commerciaux, contenus et suivi des performances pour attirer un public pertinent et améliorer le passage à l’action.",
    "titreListe": "Ce que nous apportons",
    "points": [
      {
        "gras": "Diagnostic de visibilité",
        "texte": " : analyser votre marché, vos concurrents et les recherches de vos prospects."
      },
      {
        "gras": "SEO technique et éditorial",
        "texte": " : structurer vos pages et renforcer la pertinence des contenus."
      },
      {
        "gras": "Campagnes ciblées",
        "texte": " : choisir les canaux et organiser les actions sponsorisées selon vos objectifs."
      },
      {
        "gras": "Contenus de marque",
        "texte": " : concevoir des pages, articles et messages qui répondent aux questions de vos clients."
      },
      {
        "gras": "Animation digitale",
        "texte": " : donner de la cohérence à vos prises de parole et à vos canaux."
      },
      {
        "gras": "Mesure des résultats",
        "texte": " : suivre le trafic qualifié, les demandes et les conversions, puis ajuster."
      }
    ],
    "titreCible": "Pour quels projets ?",
    "cibles": [
      "Attirer des visiteurs réellement intéressés par vos offres.",
      "Développer les prises de contact et les demandes de devis.",
      "Clarifier la place du digital dans votre démarche commerciale."
    ],
    "interet": "marketing-digital"
  },
  {
    "slug": "consulting-accompagnement",
    "titre": "Consulting & accompagnement",
    "titreOnglet": "Conseil et accompagnement SI",
    "description": "Cadrage, assistance à maîtrise d’ouvrage et coordination de projets : Clic Silver vous aide à transformer des objectifs métier en réalisations pilotées.",
    "carte": "accueil-expertise-consulting.jpg",
    "altCarte": "Réunion de pilotage entre métiers et informatique",
    "bandeau": "detail-consulting-accompagnement.jpg",
    "alt": "Illustration de notre expertise en consulting & accompagnement",
    "accroche": "Un interlocuteur qui comprend le métier et challenge la technique.",
    "introduction": "Vos projets exigent parfois de la méthode, parfois un regard technique, souvent les deux. Nous intervenons auprès des décideurs et des équipes pour structurer la démarche, réduire les ambiguïtés et rendre l’avancement compréhensible par tous.",
    "titreListe": "Ce que nous apportons",
    "points": [
      {
        "gras": "Diagnostic des besoins",
        "texte": " : identifier les attentes, les acteurs et les contraintes décisives."
      },
      {
        "gras": "Feuille de route",
        "texte": " : construire un plan réaliste avec priorités, dépendances et jalons."
      },
      {
        "gras": "Coordination",
        "texte": " : faciliter le dialogue entre métiers, équipes techniques et prestataires."
      },
      {
        "gras": "Gouvernance",
        "texte": " : suivre les engagements, les risques et les décisions importantes."
      },
      {
        "gras": "Transmission",
        "texte": " : documenter les méthodes et accompagner la prise en main des outils."
      }
    ],
    "titreCible": "Pour quels projets ?",
    "cibles": [
      "Cadrer une transformation numérique ou un projet applicatif.",
      "Créer une gouvernance claire autour d’équipes et de prestataires.",
      "Accélérer l’adoption et la montée en autonomie des utilisateurs."
    ],
    "interet": "amoa"
  },
  {
    "slug": "devops-cloud",
    "titre": "DevOps & Cloud",
    "titreOnglet": "DevOps, Cloud et exploitation",
    "description": "Pipelines CI/CD, conteneurisation, observabilité et infrastructure cloud : industrialisez vos mises en production et améliorez la fiabilité des services.",
    "carte": "expertise-devops-cloud.jpg",
    "altCarte": "Équipe observant un pipeline de déploiement et une infrastructure cloud",
    "bandeau": "detail-devops-cloud.jpg",
    "alt": "Illustration de notre expertise en DevOps & Cloud",
    "accroche": "Des déploiements maîtrisés, des applications mieux exploitées.",
    "introduction": "Faire évoluer une application suppose de pouvoir la livrer, l’observer et la restaurer dans de bonnes conditions. Nous rapprochons développement et exploitation avec des pratiques d’automatisation, de contrôle et de supervision, en mobilisant notre écosystème de partenaires selon les projets.",
    "titreListe": "Ce que nous apportons",
    "points": [
      {
        "gras": "Chaînes CI/CD",
        "texte": " : construire des processus répétables de contrôle, de test et de livraison."
      },
      {
        "gras": "Cloud et conteneurs",
        "texte": " : cadrer les environnements, les déploiements et leur exploitation avec les expertises adaptées."
      },
      {
        "gras": "Observabilité",
        "texte": " : suivre disponibilité, erreurs et temps de réponse avec des indicateurs utiles."
      },
      {
        "gras": "Automatisation",
        "texte": " : réduire les manipulations manuelles et fiabiliser les procédures récurrentes."
      },
      {
        "gras": "Sécurité et continuité",
        "texte": " : intégrer accès, sauvegardes, restauration et conditions de reprise."
      }
    ],
    "titreCible": "Pour quels projets ?",
    "cibles": [
      "Industrialiser les déploiements d’une application.",
      "Préparer une évolution d’hébergement ou une migration cloud.",
      "Améliorer la visibilité sur la santé de vos services numériques."
    ],
    "interet": "devops-cloud"
  }
];
