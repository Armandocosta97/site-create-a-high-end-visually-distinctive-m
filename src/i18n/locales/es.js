import routes from "../../config/routes"
import siteConfig from "../../config/siteConfig"

const es = {
  locale: {
    code: "es",
    htmlLang: "es",
  },
  accessibility: {
    homeLabelSuffix: "inicio",
    logoLabelSuffix: "logo",
    mainNavigation: "Navegación principal",
    footerNavigation: "Navegación del pie de página",
    languageMenu: "Selector de idioma",
    languageMenuOpen: "Abrir selector de idioma",
  },
  brand: {
    name: siteConfig.brandName,
    tagline: "Beautiful. Fast. Effective.",
    descriptor: "Estudio de diseño web",
    summary:
      "Sitios modernos, rápidos y claros para empresas que necesitan una presencia digital más sólida y creíble.",
  },
  navigation: [
    { label: "Inicio", target: routes.home },
    { label: "Servicios", target: routes.services },
    { label: "Nosotros", target: routes.about },
    { label: "Portfolio", target: routes.portfolio },
    { label: "Contacto", target: routes.contact },
  ],
  seo: {
    home: {
      title: "Alai Web | Sitios modernos que se ven bien y funcionan",
      description:
        "Alai Web crea sitios modernos, rápidos y SEO-ready para pequeñas empresas que necesitan más claridad, rendimiento e impacto digital.",
    },
    menu: {
      title: "Servicios | Alai Web",
      description:
        "Descubre los servicios de Alai Web: sitios modernos, rediseños, landing pages y builds rápidos para empresas que necesitan claridad y rendimiento.",
    },
    chiSiamo: {
      title: "Nosotros | Alai Web",
      description:
        "Descubre el método, la visión y el enfoque de Alai Web: diseño esencial, desarrollo rápido y sitios pensados para objetivos reales.",
    },
    gallery: {
      title: "Portfolio | Alai Web",
      description:
        "Explora el portfolio de Alai Web con previews de proyectos, dirección visual clara y soluciones digitales pensadas para marcas y pequeñas empresas.",
    },
    contatti: {
      title: "Contacto | Alai Web",
      description:
        "Contacta con Alai Web por email, teléfono o WhatsApp para hablar de tus objetivos, tiempos y próximos pasos de tu presencia digital.",
    },
  },
  footer: {
    navigationHeading: "Navegación",
    contactHeading: "Contacto",
    ctaLabel: "Iniciar un proyecto",
    legal: "© 2026 Alai Web. Beautiful. Fast. Effective.",
  },
  languageSwitcher: {
    label: "Idioma",
  },
  floatingWhatsapp: {
    label: "WhatsApp",
    ariaLabel: "Chatear con Alai Web en WhatsApp",
  },
  home: {
    hero: {
      eyebrow: "Alai Web",
      title: "Sitios web que se ven bien y están construidos para funcionar.",
      lead:
        "Beautiful. Fast. Effective. Alai Web diseña sitios modernos, rápidos y SEO-ready para empresas que quieren una presencia digital más clara, más creíble y más útil para el negocio.",
      primaryCta: { label: "Descubrir servicios", to: routes.services },
      secondaryCta: { label: "Hablemos de tu proyecto", to: routes.contact },
      metricsAriaLabel: "Puntos clave de Alai Web",
      metrics: [
        {
          value: "Rápidos",
          label: "Builds ligeros que cargan rápido y siguen siendo fáciles de navegar.",
        },
        {
          value: "Claros",
          label: "Una estructura limpia que guía al usuario hacia la acción correcta.",
        },
        {
          value: "SEO-ready",
          label: "Bases técnicas pensadas para visibilidad y conversión.",
        },
      ],
    },
    signaturePreview: {
      eyebrow: "Qué hacemos",
      title: "Tres principios guían cada proyecto firmado por Alai Web.",
      lead:
        "Cada sitio nace del equilibrio entre imagen, rendimiento y claridad. El objetivo no es impresionar durante unos segundos, sino ayudar a un negocio real a convertir visitas en solicitudes concretas.",
      items: [
        {
          number: "01",
          title: "Dirección visual nítida",
          description:
            "Tipografía fuerte, jerarquía clara y un layout que refuerza la marca sin parecer una plantilla.",
        },
        {
          number: "02",
          title: "Builds ligeros y rápidos",
          description:
            "Decisiones front-end esenciales para mantener el sitio rápido, legible y sólido en cualquier pantalla.",
        },
        {
          number: "03",
          title: "Una estructura lista para crecer",
          description:
            "Markup semántico, contenidos ordenados y páginas pensadas para ser encontradas y generar contactos.",
        },
      ],
    },
    brandStoryPreview: {
      principles: [
        "Una estructura clara para explicar enseguida qué haces y hacia dónde debe ir el usuario.",
        "Un diseño medido, donde cada detalle refuerza el mensaje en lugar de distraer.",
        "Un desarrollo ligero para que el sitio sea rápido, fiable y agradable de usar.",
      ],
      imageSvgLabel: "Vista previa de proyecto de Alai Web",
      eyebrow: "Nuestro enfoque",
      title: "Diseño esencial, visión clara y desarrollo concreto.",
      lead:
        "Alai Web trabaja con negocios que quieren algo más útil que un simple restyling. Cada proyecto se piensa para ser creíble, rápido y fácil de entender desde el primer vistazo.",
      ctaLabel: "Descubre cómo trabajamos",
      imageAlt:
        "Mockup editorial de un sitio con tipografía marcada y un call to action destacado.",
      kicker: "Lo que realmente importa",
      highlight:
        "La cuestión no es añadir efectos. La cuestión es hacer llegar el mensaje correcto, más rápido.",
    },
  },
  menu: {
    hero: {
      eyebrow: "Servicios",
      title: "Soluciones web pensadas para dar más fuerza a tu negocio.",
      lead:
        "Desde landing pages hasta sitios completos, Alai Web diseña y desarrolla experiencias digitales claras, rápidas y coherentes con el posicionamiento de la marca. Cada intervención busca mejorar imagen, confianza y contactos.",
      stats: [
        { value: "Design", label: "Dirección visual limpia y creíble." },
        { value: "Speed", label: "Builds ligeros, rápidos y estables." },
        { value: "Focus", label: "Estructura orientada a la acción." },
      ],
      panelAriaLabel: "Dirección de servicios",
      panelLabel: "Nuestro foco",
      panelTitle:
        "Diseño creíble, rendimiento real y una estructura orientada a la conversión.",
      panelText:
        "Nada de efectos gratuitos ni complejidad innecesaria. Solo lo que ayuda a que la marca se vea mejor, se entienda mejor y lleve al usuario hacia el contacto.",
    },
    categories: {
      eyebrow: "Servicios principales",
      title: "Cada servicio tiene un objetivo preciso: claridad, confianza y conversión.",
      lead:
        'El trabajo no se reduce a "hacer un sitio". Cada intervención mejora cómo se presenta la marca, cómo se percibe y con qué facilidad genera una solicitud real.',
      items: [
        {
          number: "01",
          name: "Sitios corporativos",
          accent: "Presencia digital clara",
          tone: "light",
          description:
            "Sitios completos para negocios, estudios y profesionales que necesitan explicarse mejor y generar confianza desde el primer momento.",
          dishes: [
            "Arquitectura de contenidos",
            "Diseño editorial a medida",
            "Desarrollo responsive y rápido",
          ],
        },
        {
          number: "02",
          name: "Landing pages",
          accent: "Una página, un objetivo",
          tone: "dark",
          description:
            "Páginas centradas en una oferta concreta, pensadas para campañas, lanzamientos, lead generation o nuevos servicios.",
          dishes: [
            "Titulares y estructura orientados a la acción",
            "Copy conciso y jerarquía fuerte",
            "CTA pensados para convertir",
          ],
        },
        {
          number: "03",
          name: "Rediseño web",
          accent: "De confuso a creíble",
          tone: "warm",
          description:
            "Un replanteamiento completo para sitios que hoy se sienten desactualizados, lentos o incoherentes con el posicionamiento de la marca.",
          dishes: [
            "Limpieza visual y nueva jerarquía",
            "Revisión de contenidos y recorridos de usuario",
            "Actualización técnica y enfoque mobile-first",
          ],
        },
        {
          number: "04",
          name: "Optimización de rendimiento",
          accent: "Más rápidos, más eficaces",
          tone: "light",
          description:
            "Intervenciones dirigidas para mejorar carga, legibilidad, estabilidad y bases SEO del sitio.",
          dishes: [
            "Reducción del peso front-end",
            "Mejoras SEO técnicas básicas",
            "Limpieza de markup y accesibilidad",
          ],
        },
      ],
    },
  },
  about: {
    hero: {
      values: [
        {
          title: "Claridad",
          text: "Cada sitio parte de una estructura legible que ayuda al usuario a entender rápido el valor, la oferta y la siguiente acción.",
        },
        {
          title: "Precisión",
          text: "Diseño, contenidos y desarrollo deben trabajar juntos sin ruido, con una atención real a los detalles que importan.",
        },
        {
          title: "Solidez",
          text: "No construimos sitios solo bonitos: los diseñamos para que sean rápidos, creíbles y útiles para objetivos de negocio.",
        },
      ],
      eyebrow: "Nosotros",
      title: "Un estudio web construido sobre diseño, velocidad y sustancia.",
      lead:
        "Alai Web nace para crear sitios modernos para pequeñas empresas y marcas independientes que quieren comunicar mejor online. Cada decisión, desde la jerarquía de contenidos hasta el código, busca hacer el proyecto más claro, más rápido y más eficaz.",
      note: "Menos ruido visual, más claridad, mejores resultados.",
      panelAriaLabel: "Valores de la agencia",
      panelTitle: "Lo que guía nuestro trabajo",
    },
    story: {
      moments: [
        {
          label: "Origen",
          text: "Alai Web nace de la idea de que muchas actividades necesitan un sitio más simple, más cuidado y menos estandarizado.",
        },
        {
          label: "Método",
          text: "Cada proyecto empieza con objetivos, estructura y contenidos, y después toma forma con diseño editorial y desarrollo ligero.",
        },
        {
          label: "Dirección",
          text: "Siempre buscamos equilibrio entre imagen, rendimiento y utilidad, sin cargar el sitio con elementos superfluos.",
        },
      ],
      eyebrow: "Nuestra historia",
      title: "Una visión simple: hacer sitios que ayuden de verdad al negocio.",
      lead:
        "Partimos de una idea precisa: muchas empresas tienen sitios lentos, confusos o poco creíbles, no por falta de valor, sino por una comunicación digital mal construida. Por eso alineamos contenidos, layout y desarrollo para que cada página tenga un papel claro.",
      emphasis:
        "El resultado debe ser contemporáneo pero útil: lo bastante cuidado para destacar, lo bastante simple para entenderse y lo bastante sólido para sostener el crecimiento en el tiempo.",
      panelAriaLabel: "Momentos clave de nuestra historia",
      panelTitle: "Cómo trabajamos",
    },
    philosophy: {
      principles: [
        {
          title: "Simplicidad legible",
          text: "Reducimos el ruido visual para dejar más espacio al mensaje, la jerarquía y llamadas a la acción realmente útiles.",
        },
        {
          title: "Técnica sin exhibición",
          text: "La calidad técnica no necesita lucirse: debe hacer que el sitio cargue rápido y funcione bien.",
        },
        {
          title: "Una experiencia que convierte",
          text: "Cada página debe guiar al usuario con fluidez hasta el contacto o la solicitud de presupuesto.",
        },
      ],
      eyebrow: "Nuestra filosofía",
      title: "Quitar lo superfluo y dejar espacio a lo que importa.",
      lead:
        "Creemos que un buen sitio funciona cuando cada elemento tiene un papel preciso: contenidos claros, estructura legible, rendimiento sólido y un diseño capaz de aportar autoridad sin complicar la experiencia.",
      emphasis:
        "Por eso elegimos equilibrio antes que efecto, legibilidad antes que exceso y decisiones de diseño que ayuden de verdad a quien usa el sitio, no solo a quien lo mira.",
      panelAriaLabel: "Principios que guían el estudio",
      panelTitle: "Los principios que seguimos",
    },
  },
  gallery: {
    hero: {
      highlights: [
        {
          label: "Dirección visual",
          text: "Layouts editoriales, tipografía fuerte y un sistema visual que sostiene el posicionamiento de la marca.",
        },
        {
          label: "Estructura de páginas",
          text: "Secciones esenciales, jerarquía clara y recorridos pensados para llevar al usuario hasta el contacto.",
        },
        {
          label: "Detalle técnico",
          text: "Rendimiento, legibilidad y solidez front-end tratados como parte integral del diseño.",
        },
      ],
      eyebrow: "Portfolio",
      title: "Una selección de direcciones creativas y estilos de proyectos digitales.",
      lead:
        "Esta sección reúne ejemplos de dirección visual, estructura y presentación de marca. No solo estética: cada concepto está pensado para ser claro, creíble y listo para convertir.",
      note: "Marca, layout y contenido alineados para dar más fuerza al mensaje.",
      panelAriaLabel: "Highlights del portfolio",
      panelTitle: "Lo que cuenta el portfolio",
    },
    grid: {
      eyebrow: "Trabajos seleccionados",
      title: "Ejemplos de páginas, sistemas y estructuras pensadas para negocios reales.",
      lead:
        "Aquí encontrarás previews conceptuales de proyectos y direcciones creativas diseñadas para mostrar cómo Alai Web trabaja marca, legibilidad y conversión en una grilla responsive clara.",
      items: [
        {
          title: "Sitio corporativo esencial",
          description:
            "Un layout limpio con jerarquía fuerte, pensado para explicar servicios y valor sin dispersión.",
          alt: "Mockup de un sitio corporativo con tipografía marcada, bloques editoriales y calls to action destacados.",
          palette: ["#fff7ed", "#fdba74", "#7c2d12"],
          accent: "Corporate",
        },
        {
          title: "Landing page de campaña",
          description:
            "Una página centrada en una oferta concreta, con contenidos breves y un recorrido lineal hacia la solicitud.",
          alt: "Mockup de una landing page con hero, bloques de beneficios y calls to action para lead generation.",
          palette: ["#e2e8f0", "#1e293b", "#f97316"],
          accent: "Lead generation",
        },
        {
          title: "Interfaz de portfolio de estudio",
          description:
            "Un sistema visual más editorial, útil para equipos que necesitan mostrar trabajos, enfoque y sensibilidad estética.",
          alt: "Mockup de un portfolio creativo con fuerte impacto tipográfico y previews de proyectos.",
          palette: ["#f8fafc", "#94a3b8", "#0f172a"],
          accent: "Portfolio",
        },
        {
          title: "Rediseño para pequeña empresa",
          description:
            "Una revisión completa del tono, la estructura y la presencia visual para hacer el sitio más actual y profesional.",
          alt: "Mockup de un rediseño para pequeña empresa con paleta neutra, secciones ordenadas y mensajes claros.",
          palette: ["#fef2f2", "#fb923c", "#431407"],
          accent: "Redesign",
        },
        {
          title: "Página de servicios de alta legibilidad",
          description:
            "Una composición pensada para que cada servicio se entienda enseguida, también en móvil.",
          alt: "Mockup de una página de servicios con bloques editoriales, grandes títulos y lectura clara del contenido.",
          palette: ["#fafaf9", "#d6d3d1", "#292524"],
          accent: "Services",
        },
        {
          title: "Página de contacto orientada a la conversión",
          description:
            "Una página final diseñada para eliminar fricción y facilitar el contacto con CTA claros.",
          alt: "Mockup de una página de contacto con calls to action visibles, datos de contacto y fuerte jerarquía visual.",
          palette: ["#fff1f2", "#fb7185", "#4c0519"],
          accent: "Conversion",
        },
      ],
    },
  },
  contact: {
    hero: {
      eyebrow: "Contacto",
      title: "Construyamos algo nítido y eficaz.",
      lead:
        "Escríbenos con tus objetivos, tu calendario y el tipo de presencia digital que necesitas. Respondemos con un siguiente paso claro, no con una secuencia comercial vaga.",
      primaryCta: "Cuéntanos tu idea",
      secondaryCta: "Empezar en WhatsApp",
    },
    details: {
      items: [
        {
          label: "Email",
          value: siteConfig.email,
          href: `mailto:${siteConfig.email}`,
          description: "Comparte tus objetivos, tus tiempos y el estado actual del sitio.",
        },
        {
          label: "Teléfono",
          value: siteConfig.phoneDisplay,
          href: siteConfig.phoneHref,
          description: "Llama para una conversación rápida sobre alcance y prioridades.",
        },
        {
          label: "WhatsApp",
          value: "Escribir al estudio",
          href: siteConfig.whatsappHref,
          description:
            "Ideal para primeras preguntas, feedback rápido y organizar la primera llamada.",
          isDark: true,
          external: true,
        },
      ],
      title: "Conversaciones de proyecto, sin fricción.",
      lead:
        "Usa el canal que mejor encaje con tu forma de trabajar. El email es ideal para briefs detallados, el teléfono para alinearse rápido y WhatsApp cuando quieres avanzar más deprisa.",
      ctaTitle: "¿Prefieres empezar con un mensaje rápido por WhatsApp?",
      ctaText:
        "Envía un brief corto y te responderemos con el siguiente paso más útil para tu proyecto, tiempos y rango de presupuesto.",
      ctaLabel: "Chatear por WhatsApp",
      formLabel: "Formulario",
      formValue: "Enviar un brief rápido",
      formDescription:
        "Si quieres empezar con una solicitud breve, usa este punto de entrada y te guiaremos hacia el siguiente paso.",
      form: {
        eyebrow: "Brief",
        title: "Añade aquí los detalles del proyecto.",
        lead:
          "Estamos preparando ahora una estructura simple: en el siguiente paso este bloque se conectará a un formulario estático real.",
        nameLabel: "Nombre",
        namePlaceholder: "Tu nombre",
        emailLabel: "Email",
        emailPlaceholder: "nombre@empresa.com",
        phoneLabel: "Teléfono",
        phonePlaceholder: "+34 000 000 000",
        businessLabel: "Negocio",
        businessPlaceholder: "Empresa o actividad",
        messageLabel: "Mensaje",
        messagePlaceholder: "Objetivos, tiempos, tipo de web, páginas necesarias y notas útiles.",
        submitLabel: "Enviar solicitud",
        sendingLabel: "Enviando...",
        successMessage: "Solicitud enviada correctamente. Te responderemos lo antes posible.",
        successSheetTitle: "Solicitud enviada con éxito",
        successSheetCloseLabel: "Cerrar confirmación",
        errorMessage: "El envío no se ha completado. Vuelve a intentarlo en breve o contáctanos por email/WhatsApp.",
        honeypotLabel: "Deja este campo vacío",
        note: "El formulario envía tu solicitud directamente al estudio mediante Static Forms.",
      },
    },
    hours: {
      title: "Horario del estudio",
      lead:
        "Mantenemos el calendario enfocado para que los proyectos avancen rápido. Si tu lanzamiento es urgente, indica la fecha límite en tu primer mensaje y confirmaremos la disponibilidad directamente.",
      entries: [
        { day: "Lunes", hours: "09:00 - 18:00" },
        { day: "Martes", hours: "09:00 - 18:00" },
        { day: "Miércoles", hours: "09:00 - 18:00" },
        { day: "Jueves", hours: "09:00 - 18:00" },
        { day: "Viernes", hours: "09:00 - 16:00" },
        { day: "Sábado", hours: "Bajo petición" },
        { day: "Domingo", hours: "Cerrado" },
      ],
    },
  },
}

export default es
