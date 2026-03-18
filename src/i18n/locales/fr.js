import routes from "../../config/routes"
import siteConfig from "../../config/siteConfig"

const fr = {
  locale: {
    code: "fr",
    htmlLang: "fr",
  },
  accessibility: {
    homeLabelSuffix: "accueil",
    logoLabelSuffix: "logo",
    mainNavigation: "Navigation principale",
    footerNavigation: "Navigation du pied de page",
    languageMenu: "Sélecteur de langue",
    languageMenuOpen: "Ouvrir le sélecteur de langue",
  },
  brand: {
    name: siteConfig.brandName,
    tagline: "Beautiful. Fast. Effective.",
    descriptor: "Studio de design web",
    summary:
      "Des sites modernes, rapides et clairs pour les entreprises qui ont besoin d'une présence digitale plus solide et plus crédible.",
  },
  navigation: [
    { label: "Accueil", target: routes.home },
    { label: "Services", target: routes.services },
    { label: "À propos", target: routes.about },
    { label: "Portfolio", target: routes.portfolio },
    { label: "Contact", target: routes.contact },
  ],
  seo: {
    home: {
      title: "Alai Web | Des sites modernes qui sont beaux et efficaces",
      description:
        "Alai Web crée des sites modernes, rapides et SEO-ready pour les petites entreprises qui recherchent plus de clarté, de performance et d'impact digital.",
    },
    menu: {
      title: "Services | Alai Web",
      description:
        "Découvrez les services d'Alai Web : sites modernes, refontes, landing pages et builds rapides pour les entreprises qui ont besoin de clarté et de performance.",
    },
    chiSiamo: {
      title: "À propos | Alai Web",
      description:
        "Découvrez la méthode, la vision et l'approche d'Alai Web : design essentiel, développement rapide et sites pensés pour de vrais objectifs business.",
    },
    gallery: {
      title: "Portfolio | Alai Web",
      description:
        "Explorez le portfolio d'Alai Web avec des aperçus de projets, une direction visuelle claire et des solutions digitales pensées pour les marques et petites entreprises.",
    },
    contatti: {
      title: "Contact | Alai Web",
      description:
        "Contactez Alai Web par email, téléphone ou WhatsApp pour parler de vos objectifs, de votre timing et des prochaines étapes de votre présence digitale.",
    },
  },
  footer: {
    navigationHeading: "Navigation",
    contactHeading: "Contact",
    ctaLabel: "Lancer un projet",
    legal: "© 2026 Alai Web. Beautiful. Fast. Effective.",
  },
  languageSwitcher: {
    label: "Langue",
  },
  floatingWhatsapp: {
    label: "WhatsApp",
    ariaLabel: "Discuter avec Alai Web sur WhatsApp",
  },
  home: {
    hero: {
      eyebrow: "Alai Web",
      title: "Des sites web élégants et construits pour être efficaces.",
      lead:
        "Beautiful. Fast. Effective. Alai Web conçoit des sites modernes, rapides et SEO-ready pour les entreprises qui veulent une présence digitale plus claire, plus crédible et plus utile au business.",
      primaryCta: { label: "Découvrir les services", to: routes.services },
      secondaryCta: { label: "Parlons de votre projet", to: routes.contact },
      metricsAriaLabel: "Points clés d'Alai Web",
      metrics: [
        {
          value: "Rapides",
          label: "Des builds légers qui chargent vite et restent faciles à parcourir.",
        },
        {
          value: "Clairs",
          label: "Une structure nette qui guide l'utilisateur vers la bonne action.",
        },
        {
          value: "SEO-ready",
          label: "Des bases techniques pensées pour la visibilité et la conversion.",
        },
      ],
    },
    signaturePreview: {
      eyebrow: "Ce que nous faisons",
      title: "Trois principes guident chaque projet signé Alai Web.",
      lead:
        "Chaque site naît de l'équilibre entre image, performance et clarté. L'objectif n'est pas d'impressionner pendant quelques secondes, mais d'aider une vraie activité à transformer les visites en demandes concrètes.",
      items: [
        {
          number: "01",
          title: "Direction visuelle nette",
          description:
            "Une typographie forte, une hiérarchie claire et une mise en page qui valorise la marque sans ressembler à un template.",
        },
        {
          number: "02",
          title: "Builds légers et rapides",
          description:
            "Des choix front-end essentiels pour garder le site rapide, lisible et solide sur tous les écrans.",
        },
        {
          number: "03",
          title: "Une structure prête à évoluer",
          description:
            "Un markup sémantique, des contenus organisés et des pages pensées pour être trouvées et générer des demandes.",
        },
      ],
    },
    brandStoryPreview: {
      principles: [
        "Une structure claire pour faire comprendre immédiatement ce que vous faites et où guider l'utilisateur.",
        "Un design mesuré, dans lequel chaque détail renforce le message au lieu de le distraire.",
        "Un développement léger, pour que le site soit rapide, fiable et agréable à utiliser.",
      ],
      imageSvgLabel: "Aperçu de projet Alai Web",
      eyebrow: "Notre approche",
      title: "Design essentiel, vision claire, développement concret.",
      lead:
        "Alai Web travaille avec des activités qui veulent quelque chose de plus utile qu'un simple restylage. Chaque projet est pensé pour être crédible, rapide et facile à comprendre dès le premier regard.",
      ctaLabel: "Découvrir notre méthode",
      imageAlt:
        "Mockup éditorial d'un site avec une typographie forte et un call to action mis en avant.",
      kicker: "Ce qui compte vraiment",
      highlight:
        "Le but n'est pas d'ajouter des effets. Le but est de faire passer le bon message, plus vite.",
    },
  },
  menu: {
    hero: {
      eyebrow: "Services",
      title: "Des solutions web conçues pour donner plus d'impact à votre activité.",
      lead:
        "De la landing page au site complet, Alai Web conçoit et développe des expériences digitales claires, rapides et cohérentes avec le positionnement de la marque. Chaque intervention vise à améliorer l'image, la confiance et les prises de contact.",
      stats: [
        { value: "Design", label: "Une direction visuelle propre et crédible." },
        { value: "Speed", label: "Des builds légers, rapides et stables." },
        { value: "Focus", label: "Une structure orientée vers l'action." },
      ],
      panelAriaLabel: "Direction des services",
      panelLabel: "Notre focus",
      panelTitle:
        "Un design crédible, de vraies performances et une structure pensée pour convertir.",
      panelText:
        "Pas d'effets gratuits ni de complexité inutile. Seulement ce qui aide la marque à mieux se présenter, à mieux se lire et à guider l'utilisateur vers le contact.",
    },
    categories: {
      eyebrow: "Services principaux",
      title: "Chaque service répond à un objectif précis : clarté, confiance, conversion.",
      lead:
        'Le travail ne consiste pas seulement à "faire un site". Chaque intervention améliore la façon dont la marque se présente, dont elle est perçue et la facilité avec laquelle elle génère une demande réelle.',
      items: [
        {
          number: "01",
          name: "Sites d'entreprise",
          accent: "Présence digitale claire",
          tone: "light",
          description:
            "Des sites complets pour entreprises, studios et professionnels qui ont besoin de mieux se raconter et de générer de la confiance immédiatement.",
          dishes: [
            "Architecture des contenus",
            "Design éditorial sur mesure",
            "Développement responsive et rapide",
          ],
        },
        {
          number: "02",
          name: "Landing pages",
          accent: "Une page, un objectif",
          tone: "dark",
          description:
            "Des pages focalisées sur une offre précise, pensées pour les campagnes, les lancements, la lead generation ou de nouveaux services.",
          dishes: [
            "Titres et structure orientés action",
            "Copy concis et hiérarchie forte",
            "CTA pensés pour convertir",
          ],
        },
        {
          number: "03",
          name: "Refonte de site",
          accent: "De confus à crédible",
          tone: "warm",
          description:
            "Une refonte complète pour des sites aujourd'hui datés, lents ou incohérents avec le positionnement de la marque.",
          dishes: [
            "Nettoyage visuel et nouvelle hiérarchie",
            "Révision des contenus et parcours utilisateur",
            "Mise à jour technique et logique mobile-first",
          ],
        },
        {
          number: "04",
          name: "Optimisation des performances",
          accent: "Plus rapides, plus efficaces",
          tone: "light",
          description:
            "Des interventions ciblées pour améliorer le chargement, la lisibilité, la stabilité et les bases SEO du site.",
          dishes: [
            "Réduction du poids front-end",
            "Améliorations SEO techniques de base",
            "Nettoyage du markup et accessibilité",
          ],
        },
      ],
    },
  },
  about: {
    hero: {
      values: [
        {
          title: "Clarté",
          text: "Chaque site part d'une structure lisible qui aide l'utilisateur à comprendre rapidement la valeur, l'offre et l'action suivante.",
        },
        {
          title: "Précision",
          text: "Design, contenus et développement doivent travailler ensemble sans bruit, avec une vraie attention portée aux détails qui comptent.",
        },
        {
          title: "Concret",
          text: "Nous ne créons pas seulement des sites beaux : nous les pensons pour qu'ils soient rapides, crédibles et utiles aux objectifs business.",
        },
      ],
      eyebrow: "À propos",
      title: "Un studio web construit sur le design, la vitesse et la substance.",
      lead:
        "Alai Web est né pour créer des sites modernes pour les petites entreprises et les réalités indépendantes qui veulent mieux communiquer en ligne. Chaque choix, de la hiérarchie des contenus au code, vise à rendre le projet plus clair, plus rapide et plus efficace.",
      note: "Moins de bruit visuel, plus de clarté, de meilleurs résultats.",
      panelAriaLabel: "Valeurs de l'agence",
      panelTitle: "Ce qui guide notre travail",
    },
    story: {
      moments: [
        {
          label: "Origine",
          text: "Alai Web est né de l'idée que beaucoup d'activités ont besoin d'un site plus simple, plus soigné et moins standardisé.",
        },
        {
          label: "Méthode",
          text: "Chaque projet commence par les objectifs, la structure et les contenus, puis prend forme avec un design éditorial et un développement léger.",
        },
        {
          label: "Direction",
          text: "Nous cherchons toujours l'équilibre entre image, performance et utilité, sans alourdir le site avec des éléments superflus.",
        },
      ],
      eyebrow: "Notre histoire",
      title: "Une vision simple : créer des sites qui aident vraiment le business.",
      lead:
        "Nous sommes partis d'une idée précise : beaucoup d'entreprises ont des sites lents, confus ou peu crédibles, non pas parce qu'elles manquent de valeur, mais parce que leur communication digitale est mal construite. C'est pour cela que nous coordonnons contenus, layout et développement afin que chaque page ait un rôle clair.",
      emphasis:
        "Le résultat doit être contemporain mais utile : assez soigné pour se distinguer, assez simple pour être compris et assez solide pour soutenir la croissance dans le temps.",
      panelAriaLabel: "Moments clés de notre histoire",
      panelTitle: "Comment nous travaillons",
    },
    philosophy: {
      principles: [
        {
          title: "Simplicité lisible",
          text: "Nous réduisons le bruit visuel pour laisser plus d'espace au message, à la hiérarchie et à des appels à l'action réellement utiles.",
        },
        {
          title: "Technique sans démonstration",
          text: "La qualité technique n'a pas besoin de se montrer : elle doit permettre au site de charger vite et de bien fonctionner.",
        },
        {
          title: "Une expérience qui convertit",
          text: "Chaque page doit guider l'utilisateur avec fluidité jusqu'au contact ou à la demande de devis.",
        },
      ],
      eyebrow: "Notre philosophie",
      title: "Enlever le superflu, laisser la place à ce qui compte.",
      lead:
        "Nous croyons qu'un bon site fonctionne lorsque chaque élément a un rôle précis : des contenus clairs, une structure lisible, de solides performances et un design capable de donner de l'autorité sans compliquer l'expérience.",
      emphasis:
        "C'est pourquoi nous choisissons l'équilibre avant l'effet, la lisibilité avant l'excès et des décisions de design qui aident vraiment ceux qui utilisent le site, pas seulement ceux qui le regardent.",
      panelAriaLabel: "Principes qui guident le studio",
      panelTitle: "Les principes que nous suivons",
    },
  },
  gallery: {
    hero: {
      highlights: [
        {
          label: "Direction visuelle",
          text: "Des layouts éditoriaux, une typographie forte et une construction visuelle qui soutient le positionnement de la marque.",
        },
        {
          label: "Structure des pages",
          text: "Des sections essentielles, une hiérarchie claire et des parcours pensés pour guider l'utilisateur jusqu'au contact.",
        },
        {
          label: "Détail technique",
          text: "Performance, lisibilité et solidité front-end traitées comme une partie intégrante du design.",
        },
      ],
      eyebrow: "Portfolio",
      title: "Une sélection de directions créatives et de styles de projets digitaux.",
      lead:
        "Cette section rassemble des exemples de direction visuelle, de structure et de présentation de marque. Pas seulement de l'esthétique : chaque concept est pensé pour être clair, crédible et prêt à convertir.",
      note: "Marque, layout et contenu alignés pour donner plus de force au message.",
      panelAriaLabel: "Points forts du portfolio",
      panelTitle: "Ce que raconte le portfolio",
    },
    grid: {
      eyebrow: "Sélection de projets",
      title: "Des exemples de pages, de systèmes et de structures pensés pour de vraies entreprises.",
      lead:
        "Vous trouverez ici des aperçus conceptuels de projets et de directions créatives conçus pour montrer comment Alai Web travaille la marque, la lisibilité et la conversion dans une grille responsive claire.",
      items: [
        {
          title: "Site corporate essentiel",
          description:
            "Un layout propre avec une hiérarchie forte, pensé pour raconter les services et la valeur sans dispersion.",
          alt: "Mockup d'un site corporate avec typographie marquée, blocs éditoriaux et calls to action visibles.",
          palette: ["#fff7ed", "#fdba74", "#7c2d12"],
          accent: "Corporate",
        },
        {
          title: "Landing page de campagne",
          description:
            "Une page focalisée sur une offre précise, avec des contenus concis et un parcours linéaire vers la demande.",
          alt: "Mockup d'une landing page avec hero, blocs de bénéfices et calls to action pour la lead generation.",
          palette: ["#e2e8f0", "#1e293b", "#f97316"],
          accent: "Lead generation",
        },
        {
          title: "Interface portfolio studio",
          description:
            "Un système visuel plus éditorial, utile pour ceux qui doivent montrer leurs travaux, leur approche et leur sensibilité esthétique.",
          alt: "Mockup d'un portfolio créatif avec fort impact typographique et aperçus de projets.",
          palette: ["#f8fafc", "#94a3b8", "#0f172a"],
          accent: "Portfolio",
        },
        {
          title: "Refonte pour petite entreprise",
          description:
            "Une révision complète du ton, de la structure et de la présence visuelle pour rendre le site plus actuel et professionnel.",
          alt: "Mockup d'une refonte pour petite entreprise avec palette neutre, sections ordonnées et messages clairs.",
          palette: ["#fef2f2", "#fb923c", "#431407"],
          accent: "Redesign",
        },
        {
          title: "Page services à haute lisibilité",
          description:
            "Une composition pensée pour rendre chaque service immédiatement compréhensible, y compris sur mobile.",
          alt: "Mockup d'une page services avec blocs éditoriaux, grands titres et lecture claire des contenus.",
          palette: ["#fafaf9", "#d6d3d1", "#292524"],
          accent: "Services",
        },
        {
          title: "Page contact orientée conversion",
          description:
            "Une page finale conçue pour supprimer les frictions et faciliter la prise de contact avec des CTA clairs.",
          alt: "Mockup d'une page contact avec calls to action visibles, coordonnées et hiérarchie visuelle forte.",
          palette: ["#fff1f2", "#fb7185", "#4c0519"],
          accent: "Conversion",
        },
      ],
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Construisons quelque chose de net et d'efficace.",
      lead:
        "Écrivez-nous avec vos objectifs, votre calendrier et le type de présence digitale dont vous avez besoin. Nous répondons avec une prochaine étape claire, pas avec un tunnel commercial flou.",
      primaryCta: "Parlez-nous de votre idée",
      secondaryCta: "Commencer sur WhatsApp",
    },
    details: {
      items: [
        {
          label: "Email",
          value: siteConfig.email,
          href: `mailto:${siteConfig.email}`,
          description: "Partagez vos objectifs, votre planning et l'état actuel du site.",
        },
        {
          label: "Téléphone",
          value: siteConfig.phoneDisplay,
          href: siteConfig.phoneHref,
          description: "Appelez pour un échange rapide sur le périmètre et les priorités.",
        },
        {
          label: "WhatsApp",
          value: "Écrire au studio",
          href: siteConfig.whatsappHref,
          description:
            "Idéal pour les premières questions, les retours rapides et l'organisation du premier appel.",
          isDark: true,
          external: true,
        },
      ],
      title: "Des échanges projet, sans friction.",
      lead:
        "Utilisez le canal le plus adapté à votre façon de travailler. L'email est idéal pour les briefs détaillés, le téléphone pour un alignement rapide, et WhatsApp quand vous voulez avancer vite.",
      ctaTitle: "Vous préférez commencer avec un message WhatsApp rapide ?",
      ctaText:
        "Envoyez un brief court et nous vous répondrons avec la prochaine étape la plus utile pour votre projet, votre timing et votre budget.",
      ctaLabel: "Discuter sur WhatsApp",
      formLabel: "Formulaire",
      formValue: "Envoyer un brief rapide",
      formDescription:
        "Si vous voulez commencer avec une demande courte, utilisez ce point d'entrée et nous vous guiderons vers la prochaine étape.",
      form: {
        eyebrow: "Brief",
        title: "Ajoutez ici les détails du projet.",
        lead:
          "Nous préparons maintenant une structure simple : à l'étape suivante, ce bloc sera relié à un vrai formulaire statique.",
        nameLabel: "Nom",
        namePlaceholder: "Votre nom",
        emailLabel: "Email",
        emailPlaceholder: "nom@entreprise.fr",
        phoneLabel: "Téléphone",
        phonePlaceholder: "+33 0 00 00 00 00",
        businessLabel: "Entreprise",
        businessPlaceholder: "Entreprise ou activité",
        messageLabel: "Message",
        messagePlaceholder: "Objectifs, timing, type de site, pages nécessaires et notes utiles.",
        submitLabel: "Envoyer la demande",
        note: "Formulaire statique en préparation : le raccord du submit sera ajouté à l'étape suivante.",
      },
    },
    hours: {
      title: "Horaires du studio",
      lead:
        "Nous gardons notre calendrier concentré pour faire avancer les projets rapidement. Si votre lancement est urgent, mentionnez la deadline dans votre premier message et nous confirmerons directement la disponibilité.",
      entries: [
        { day: "Lundi", hours: "09:00 - 18:00" },
        { day: "Mardi", hours: "09:00 - 18:00" },
        { day: "Mercredi", hours: "09:00 - 18:00" },
        { day: "Jeudi", hours: "09:00 - 18:00" },
        { day: "Vendredi", hours: "09:00 - 16:00" },
        { day: "Samedi", hours: "Sur demande" },
        { day: "Dimanche", hours: "Fermé" },
      ],
    },
  },
}

export default fr
