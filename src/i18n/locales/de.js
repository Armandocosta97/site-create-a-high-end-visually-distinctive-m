import routes from "../../config/routes"
import siteConfig from "../../config/siteConfig"

const de = {
  locale: {
    code: "de",
    htmlLang: "de",
  },
  accessibility: {
    homeLabelSuffix: "startseite",
    logoLabelSuffix: "logo",
    mainNavigation: "Hauptnavigation",
    footerNavigation: "Footer-Navigation",
    languageMenu: "Sprachauswahl",
    languageMenuOpen: "Sprachauswahl öffnen",
  },
  brand: {
    name: siteConfig.brandName,
    tagline: "Beautiful. Fast. Effective.",
    descriptor: "Webdesign-Studio",
    summary:
      "Moderne, schnelle und klare Websites für Unternehmen, die eine stärkere und glaubwürdigere digitale Präsenz brauchen.",
  },
  navigation: [
    { label: "Start", target: routes.home },
    { label: "Leistungen", target: routes.services },
    { label: "Über uns", target: routes.about },
    { label: "Portfolio", target: routes.portfolio },
    { label: "Kontakt", target: routes.contact },
  ],
  seo: {
    home: {
      title: "Alai Web | Moderne Websites, die stark aussehen und funktionieren",
      description:
        "Alai Web erstellt moderne, schnelle und SEO-ready Websites für kleine Unternehmen, die mehr Klarheit, Performance und digitale Wirkung brauchen.",
    },
    menu: {
      title: "Leistungen | Alai Web",
      description:
        "Entdecken Sie die Leistungen von Alai Web: moderne Websites, Relaunches, Landingpages und schnelle Builds für Unternehmen, die Klarheit und Performance brauchen.",
    },
    chiSiamo: {
      title: "Über uns | Alai Web",
      description:
        "Lernen Sie Methode, Haltung und Ansatz von Alai Web kennen: klares Design, schnelle Entwicklung und Websites für echte Geschäftsziele.",
    },
    gallery: {
      title: "Portfolio | Alai Web",
      description:
        "Entdecken Sie das Portfolio von Alai Web mit Projektvorschauen, klarer visueller Richtung und digitalen Lösungen für Marken und kleine Unternehmen.",
    },
    contatti: {
      title: "Kontakt | Alai Web",
      description:
        "Kontaktieren Sie Alai Web per E-Mail, Telefon oder WhatsApp, um über Ziele, Zeitplan und die nächsten Schritte Ihrer digitalen Präsenz zu sprechen.",
    },
  },
  footer: {
    navigationHeading: "Navigation",
    contactHeading: "Kontakt",
    ctaLabel: "Projekt starten",
    legal: "© 2026 Alai Web. Beautiful. Fast. Effective.",
  },
  languageSwitcher: {
    label: "Sprache",
  },
  floatingWhatsapp: {
    label: "WhatsApp",
    ariaLabel: "Mit Alai Web auf WhatsApp chatten",
  },
  home: {
    hero: {
      eyebrow: "Alai Web",
      title: "Websites, die stark aussehen und dafür gebaut sind, zu funktionieren.",
      lead:
        "Beautiful. Fast. Effective. Alai Web entwickelt moderne, schnelle und SEO-ready Websites für Unternehmen, die eine klarere, glaubwürdigere und nützlichere digitale Präsenz wollen.",
      primaryCta: { label: "Leistungen entdecken", to: routes.services },
      secondaryCta: { label: "Über Ihr Projekt sprechen", to: routes.contact },
      metricsAriaLabel: "Highlights von Alai Web",
      metrics: [
        {
          value: "Schnell",
          label: "Leichte Builds, die schnell laden und einfach zu nutzen bleiben.",
        },
        {
          value: "Klar",
          label: "Eine saubere Struktur, die Nutzer gezielt zur richtigen Aktion führt.",
        },
        {
          value: "SEO-ready",
          label: "Technische Grundlagen für Sichtbarkeit und Conversion.",
        },
      ],
    },
    signaturePreview: {
      eyebrow: "Was wir tun",
      title: "Drei Prinzipien prägen jedes Projekt von Alai Web.",
      lead:
        "Jede Website entsteht aus dem Gleichgewicht von Bildsprache, Performance und Klarheit. Das Ziel ist nicht, für ein paar Sekunden zu beeindrucken, sondern einem echten Unternehmen zu helfen, Besuche in konkrete Anfragen umzuwandeln.",
      items: [
        {
          number: "01",
          title: "Klare visuelle Richtung",
          description:
            "Starke Typografie, klare Hierarchie und ein Layout, das die Marke stärkt, ohne wie ein Template zu wirken.",
        },
        {
          number: "02",
          title: "Leichte und schnelle Builds",
          description:
            "Essenzielle Frontend-Entscheidungen, damit die Website auf jedem Screen schnell, lesbar und stabil bleibt.",
        },
        {
          number: "03",
          title: "Eine Struktur, die mitwachsen kann",
          description:
            "Semantisches Markup, geordnete Inhalte und Seiten, die darauf ausgelegt sind, gefunden zu werden und Anfragen zu erzeugen.",
        },
      ],
    },
    brandStoryPreview: {
      principles: [
        "Eine klare Struktur, damit sofort verständlich wird, was Sie tun und wohin der Nutzer geführt werden soll.",
        "Ein präzises Design, bei dem jedes Detail die Botschaft stärkt statt davon abzulenken.",
        "Leichte Entwicklung, damit die Website schnell, zuverlässig und angenehm nutzbar ist.",
      ],
      imageSvgLabel: "Projektvorschau von Alai Web",
      eyebrow: "Unser Ansatz",
      title: "Klares Design, klare Richtung, konkrete Entwicklung.",
      lead:
        "Alai Web arbeitet mit Unternehmen, die etwas Nützlicheres wollen als ein einfaches Redesign. Jedes Projekt wird so gedacht, dass es glaubwürdig, schnell und auf den ersten Blick verständlich ist.",
      ctaLabel: "So arbeiten wir",
      imageAlt:
        "Editoriales Website-Mockup mit starker Typografie und hervorgehobenem Call-to-Action.",
      kicker: "Was wirklich zählt",
      highlight:
        "Es geht nicht darum, Effekte hinzuzufügen. Es geht darum, die richtige Botschaft schneller zu vermitteln.",
    },
  },
  menu: {
    hero: {
      eyebrow: "Leistungen",
      title: "Weblösungen, die Ihrem Unternehmen mehr Wirkung geben.",
      lead:
        "Von fokussierten Landingpages bis zu kompletten Websites entwickelt Alai Web digitale Erlebnisse, die klar, schnell und mit Ihrer Markenpositionierung abgestimmt sind. Jede Leistung zielt darauf ab, Image, Vertrauen und Anfragen zu verbessern.",
      stats: [
        { value: "Design", label: "Klare und glaubwürdige visuelle Richtung." },
        { value: "Speed", label: "Leichte, schnelle und stabile Builds." },
        { value: "Focus", label: "Struktur mit Fokus auf Handlung." },
      ],
      panelAriaLabel: "Leistungsfokus",
      panelLabel: "Unser Fokus",
      panelTitle:
        "Glaubwürdiges Design, echte Performance und eine Struktur, die auf Conversion ausgerichtet ist.",
      panelText:
        "Keine unnötigen Effekte und keine überflüssige Komplexität. Nur das, was der Marke hilft, besser wahrgenommen zu werden, besser gelesen zu werden und Nutzer Richtung Kontakt zu führen.",
    },
    categories: {
      eyebrow: "Kernleistungen",
      title: "Jede Leistung verfolgt ein klares Ziel: Klarheit, Vertrauen, Conversion.",
      lead:
        'Die Arbeit besteht nicht nur darin, "eine Website zu machen". Jede Intervention verbessert, wie die Marke auftritt, wie sie wahrgenommen wird und wie leicht daraus eine echte Anfrage entsteht.',
      items: [
        {
          number: "01",
          name: "Unternehmenswebsites",
          accent: "Klare digitale Präsenz",
          tone: "light",
          description:
            "Komplette Websites für Unternehmen, Studios und Professionals, die sich besser erklären und sofort Vertrauen aufbauen müssen.",
          dishes: [
            "Content-Architektur",
            "Individuelles Editorial Design",
            "Responsives und schnelles Development",
          ],
        },
        {
          number: "02",
          name: "Landingpages",
          accent: "Eine Seite, ein Ziel",
          tone: "dark",
          description:
            "Fokussierte Seiten rund um ein klares Angebot, gedacht für Kampagnen, Launches, Lead Generation oder neue Services.",
          dishes: [
            "Handlungsorientierte Headlines und Struktur",
            "Knappes Copywriting und starke Hierarchie",
            "CTA mit Fokus auf Conversion",
          ],
        },
        {
          number: "03",
          name: "Website-Relaunch",
          accent: "Von unklar zu glaubwürdig",
          tone: "warm",
          description:
            "Ein kompletter Neustart für Websites, die aktuell veraltet, langsam oder nicht mehr passend zur Markenpositionierung sind.",
          dishes: [
            "Visuelle Bereinigung und neue Hierarchie",
            "Inhaltsprüfung und User-Pfade",
            "Technisches Update und mobile-first Denken",
          ],
        },
        {
          number: "04",
          name: "Performance-Optimierung",
          accent: "Schneller, wirksamer",
          tone: "light",
          description:
            "Gezielte Eingriffe zur Verbesserung von Ladezeit, Lesbarkeit, Stabilität und SEO-Grundlagen.",
          dishes: [
            "Reduktion des Frontend-Gewichts",
            "Technische SEO-Basisverbesserungen",
            "Markup-Bereinigung und Barrierefreiheit",
          ],
        },
      ],
    },
  },
  about: {
    hero: {
      values: [
        {
          title: "Klarheit",
          text: "Jede Website beginnt mit einer lesbaren Struktur, damit Nutzer Wert, Angebot und den nächsten Schritt schnell verstehen.",
        },
        {
          title: "Präzision",
          text: "Design, Inhalte und Entwicklung müssen ohne Störungen zusammenspielen und sich auf die wirklich relevanten Details konzentrieren.",
        },
        {
          title: "Substanz",
          text: "Wir bauen nicht nur schöne Websites: Wir gestalten sie so, dass sie schnell, glaubwürdig und für Geschäftsziele nützlich sind.",
        },
      ],
      eyebrow: "Über uns",
      title: "Ein Webstudio, das auf Design, Geschwindigkeit und Substanz gebaut ist.",
      lead:
        "Alai Web wurde gegründet, um moderne Websites für kleine Unternehmen und unabhängige Marken zu entwickeln, die online besser kommunizieren wollen. Jede Entscheidung, von der Content-Hierarchie bis zum Code, soll das Projekt klarer, schneller und wirkungsvoller machen.",
      note: "Weniger visuelles Rauschen, mehr Klarheit, bessere Ergebnisse.",
      panelAriaLabel: "Werte der Agentur",
      panelTitle: "Was unsere Arbeit leitet",
    },
    story: {
      moments: [
        {
          label: "Ursprung",
          text: "Alai Web entstand aus der Idee, dass viele Unternehmen eine einfachere, sorgfältigere und weniger standardisierte Website brauchen.",
        },
        {
          label: "Methode",
          text: "Jedes Projekt beginnt mit Zielen, Struktur und Inhalten und nimmt dann mit editorialem Design und leichter Entwicklung Form an.",
        },
        {
          label: "Richtung",
          text: "Wir suchen immer das Gleichgewicht zwischen Bildsprache, Performance und Nutzen, ohne die Website mit überflüssigen Elementen zu belasten.",
        },
      ],
      eyebrow: "Unsere Geschichte",
      title: "Eine einfache Vision: Websites bauen, die dem Business wirklich helfen.",
      lead:
        "Wir sind von einer klaren Beobachtung ausgegangen: Viele Unternehmen haben langsame, verwirrende oder wenig überzeugende Websites, nicht weil ihnen Wert fehlt, sondern weil ihre digitale Kommunikation schlecht aufgebaut ist. Deshalb stimmen wir Inhalte, Layout und Entwicklung so aufeinander ab, dass jede Seite eine klare Rolle hat.",
      emphasis:
        "Das Ergebnis soll zeitgemäß, aber nützlich sein: sorgfältig genug, um sich abzuheben, einfach genug, um verstanden zu werden, und solide genug, um Wachstum langfristig zu tragen.",
      panelAriaLabel: "Schlüsselmomente unserer Geschichte",
      panelTitle: "Wie wir arbeiten",
    },
    philosophy: {
      principles: [
        {
          title: "Lesbare Einfachheit",
          text: "Wir reduzieren visuelles Rauschen, um der Botschaft, der Hierarchie und wirklich nützlichen Calls-to-Action mehr Raum zu geben.",
        },
        {
          title: "Technik ohne Inszenierung",
          text: "Technische Qualität muss sich nicht in den Vordergrund stellen: Sie soll die Website schnell laden und zuverlässig funktionieren lassen.",
        },
        {
          title: "Ein Erlebnis, das konvertiert",
          text: "Jede Seite soll Nutzer flüssig bis zum Kontakt oder zur Angebotsanfrage führen.",
        },
      ],
      eyebrow: "Unsere Philosophie",
      title: "Das Überflüssige weglassen und Platz für das schaffen, was zählt.",
      lead:
        "Wir glauben, dass eine gute Website dann funktioniert, wenn jedes Element eine klare Rolle hat: verständliche Inhalte, lesbare Struktur, solide Performance und ein Design, das Autorität aufbaut, ohne das Erlebnis unnötig zu verkomplizieren.",
      emphasis:
        "Deshalb wählen wir Balance vor Effekt, Lesbarkeit vor Übermaß und Designentscheidungen, die den Menschen wirklich helfen, die die Website nutzen, nicht nur betrachten.",
      panelAriaLabel: "Prinzipien, die das Studio leiten",
      panelTitle: "Die Prinzipien, denen wir folgen",
    },
  },
  gallery: {
    hero: {
      highlights: [
        {
          label: "Visuelle Richtung",
          text: "Editoriale Layouts, starke Typografie und ein visuelles System, das die Markenpositionierung unterstützt.",
        },
        {
          label: "Seitenstruktur",
          text: "Essenzielle Sektionen, klare Hierarchie und Wege, die Nutzer bis zum Kontakt führen.",
        },
        {
          label: "Technisches Detail",
          text: "Performance, Lesbarkeit und Frontend-Stabilität als integrierter Teil des Designs.",
        },
      ],
      eyebrow: "Portfolio",
      title: "Eine Auswahl kreativer Richtungen und digitaler Projektstile.",
      lead:
        "Dieser Bereich versammelt Beispiele für visuelle Richtung, Struktur und Markenpräsentation. Nicht nur Ästhetik: Jedes Konzept ist darauf ausgelegt, klar, glaubwürdig und conversion-ready zu sein.",
      note: "Marke, Layout und Inhalte aufeinander abgestimmt, um der Botschaft mehr Kraft zu geben.",
      panelAriaLabel: "Portfolio-Highlights",
      panelTitle: "Was das Portfolio zeigt",
    },
    grid: {
      eyebrow: "Ausgewählte Arbeiten",
      title: "Beispiele für Seiten, Systeme und Strukturen, die für echte Unternehmen entwickelt wurden.",
      lead:
        "Hier finden Sie konzeptionelle Vorschauen auf Projekte und kreative Richtungen, die zeigen, wie Alai Web mit Marke, Lesbarkeit und Conversion in einem klaren responsiven Raster arbeitet.",
      items: [
        {
          title: "Essenzielle Corporate Website",
          description:
            "Ein sauberes Layout mit starker Hierarchie, entwickelt, um Leistungen und Mehrwert ohne Ablenkung zu vermitteln.",
          alt: "Mockup einer Corporate Website mit markanter Typografie, editorialen Blöcken und hervorgehobenen Calls-to-Action.",
          palette: ["#fff7ed", "#fdba74", "#7c2d12"],
          accent: "Corporate",
        },
        {
          title: "Landingpage für Kampagnen",
          description:
            "Eine Seite mit Fokus auf ein konkretes Angebot, mit kompakten Inhalten und einem linearen Pfad zur Anfrage.",
          alt: "Mockup einer Landingpage mit Hero-Bereich, Nutzenblöcken und Calls-to-Action zur Lead-Generierung.",
          palette: ["#e2e8f0", "#1e293b", "#f97316"],
          accent: "Lead generation",
        },
        {
          title: "Studio-Portfolio-Interface",
          description:
            "Ein stärker editorial geprägtes visuelles System, ideal für Teams, die Arbeiten, Ansatz und ästhetisches Gespür zeigen müssen.",
          alt: "Mockup eines kreativen Portfolios mit starker Typografie und Projektvorschauen.",
          palette: ["#f8fafc", "#94a3b8", "#0f172a"],
          accent: "Portfolio",
        },
        {
          title: "Relaunch für kleine Unternehmen",
          description:
            "Eine vollständige Überarbeitung von Tonalität, Struktur und visueller Präsenz, damit die Website aktueller und professioneller wirkt.",
          alt: "Mockup eines Redesigns für ein kleines Unternehmen mit neutraler Farbpalette, geordneten Sektionen und klaren Botschaften.",
          palette: ["#fef2f2", "#fb923c", "#431407"],
          accent: "Redesign",
        },
        {
          title: "Service-Seite mit hoher Lesbarkeit",
          description:
            "Eine Komposition, die jeden Service sofort verständlich macht, auch auf kleinen Screens.",
          alt: "Mockup einer Service-Seite mit editorialen Blöcken, großen Überschriften und klarer Inhaltsstruktur.",
          palette: ["#fafaf9", "#d6d3d1", "#292524"],
          accent: "Services",
        },
        {
          title: "Kontaktseite mit Fokus auf Conversion",
          description:
            "Eine Abschlussseite, die Reibung reduziert und die Kontaktaufnahme mit klaren CTA-Platzierungen erleichtert.",
          alt: "Mockup einer Kontaktseite mit sichtbaren Calls-to-Action, Kontaktdaten und starker visueller Hierarchie.",
          palette: ["#fff1f2", "#fb7185", "#4c0519"],
          accent: "Conversion",
        },
      ],
    },
  },
  contact: {
    hero: {
      eyebrow: "Kontakt",
      title: "Lassen Sie uns etwas Präzises und Wirksames aufbauen.",
      lead:
        "Schreiben Sie uns mit Ihren Geschäftszielen, Ihrem Zeitplan und der Art digitaler Präsenz, die Sie brauchen. Wir antworten mit einem klaren nächsten Schritt, nicht mit einer vagen Sales-Sequenz.",
      primaryCta: "Erzählen Sie uns von Ihrer Idee",
      secondaryCta: "Auf WhatsApp starten",
    },
    details: {
      items: [
        {
          label: "E-Mail",
          value: siteConfig.email,
          href: `mailto:${siteConfig.email}`,
          description: "Teilen Sie Ihre Ziele, Ihren Zeitplan und den aktuellen Status Ihrer Website.",
        },
        {
          label: "Telefon",
          value: siteConfig.phoneDisplay,
          href: siteConfig.phoneHref,
          description: "Rufen Sie an für ein kurzes Gespräch über Umfang und Prioritäten.",
        },
        {
          label: "WhatsApp",
          value: "Dem Studio schreiben",
          href: siteConfig.whatsappHref,
          description:
            "Ideal für erste Projektfragen, schnelles Feedback und die Planung des ersten Calls.",
          isDark: true,
          external: true,
        },
      ],
      title: "Projektgespräche ohne Reibung.",
      lead:
        "Nutzen Sie den Kanal, der am besten zu Ihrem Arbeitsablauf passt. E-Mail eignet sich für detaillierte Briefings, Telefon für schnelle Abstimmung und WhatsApp, wenn es schnell gehen soll.",
      ctaTitle: "Lieber mit einer kurzen WhatsApp-Nachricht starten?",
      ctaText:
        "Senden Sie ein kurzes Briefing und wir antworten mit dem sinnvollsten nächsten Schritt für Projekt, Timing und Budgetrahmen.",
      ctaLabel: "Auf WhatsApp chatten",
      formLabel: "Formular",
      formValue: "Kurzes Briefing senden",
      formDescription:
        "Wenn Sie mit einer kurzen Anfrage starten möchten, nutzen Sie diesen Einstieg und wir führen Sie zum nächsten sinnvollen Schritt.",
      form: {
        eyebrow: "Briefing",
        title: "Tragen Sie hier die Projektdetails ein.",
        lead:
          "Wir bereiten jetzt eine einfache Struktur vor: im nächsten Schritt wird dieser Block an ein echtes statisches Formular angebunden.",
        nameLabel: "Name",
        namePlaceholder: "Ihr Name",
        emailLabel: "E-Mail",
        emailPlaceholder: "name@firma.de",
        phoneLabel: "Telefon",
        phonePlaceholder: "+49 000 000000",
        businessLabel: "Unternehmen",
        businessPlaceholder: "Firma oder Geschäft",
        messageLabel: "Nachricht",
        messagePlaceholder: "Ziele, Timing, Art der Website, benötigte Seiten und nützliche Hinweise.",
        submitLabel: "Anfrage senden",
        sendingLabel: "Wird gesendet...",
        successMessage: "Anfrage erfolgreich gesendet. Wir melden uns so schnell wie möglich.",
        successSheetTitle: "Anfrage erfolgreich gesendet",
        successSheetCloseLabel: "Bestätigung schließen",
        errorMessage: "Senden fehlgeschlagen. Bitte versuchen Sie es in Kürze erneut oder kontaktieren Sie uns per E-Mail/WhatsApp.",
        honeypotLabel: "Lassen Sie dieses Feld leer",
        note: "Das Formular sendet Ihre Anfrage direkt über Static Forms an das Studio.",
      },
    },
    hours: {
      title: "Studiozeiten",
      lead:
        "Wir halten unseren Kalender fokussiert, damit Projekte schnell vorankommen. Wenn Ihr Launch dringend ist, nennen Sie die Deadline in Ihrer ersten Nachricht und wir bestätigen die Verfügbarkeit direkt.",
      entries: [
        { day: "Montag", hours: "09:00 - 18:00" },
        { day: "Dienstag", hours: "09:00 - 18:00" },
        { day: "Mittwoch", hours: "09:00 - 18:00" },
        { day: "Donnerstag", hours: "09:00 - 18:00" },
        { day: "Freitag", hours: "09:00 - 16:00" },
        { day: "Samstag", hours: "Auf Anfrage" },
        { day: "Sonntag", hours: "Geschlossen" },
      ],
    },
  },
}

export default de
