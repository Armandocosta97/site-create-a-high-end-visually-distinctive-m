import routes from "../../config/routes"
import siteConfig from "../../config/siteConfig"

const en = {
  locale: {
    code: "en",
    htmlLang: "en",
  },
  accessibility: {
    homeLabelSuffix: "home",
    logoLabelSuffix: "logo",
    mainNavigation: "Main navigation",
    footerNavigation: "Footer navigation",
    languageMenu: "Language selector",
    languageMenuOpen: "Open language selector",
  },
  brand: {
    name: siteConfig.brandName,
    tagline: "Beautiful. Fast. Effective.",
    descriptor: "Web design studio",
    summary:
      "Modern, fast, and clear websites for businesses that need a stronger and more credible digital presence.",
  },
  navigation: [
    { label: "Home", target: routes.home },
    { label: "Services", target: routes.services },
    { label: "About", target: routes.about },
    { label: "Portfolio", target: routes.portfolio },
    { label: "Contact", target: routes.contact },
  ],
  seo: {
    home: {
      title: "Alai Web | Modern websites that look great and work",
      description:
        "Alai Web builds modern, fast, and SEO-ready websites for small businesses that need clarity, performance, and stronger digital presence.",
    },
    menu: {
      title: "Services | Alai Web",
      description:
        "Discover Alai Web services: modern websites, redesigns, landing pages, and fast builds for businesses that need clarity and performance.",
    },
    chiSiamo: {
      title: "About | Alai Web",
      description:
        "Explore the method, mindset, and approach behind Alai Web: essential design, fast development, and websites built for real goals.",
    },
    gallery: {
      title: "Portfolio | Alai Web",
      description:
        "Browse Alai Web portfolio previews, visual direction, and digital solutions built for brands and small businesses.",
    },
    contatti: {
      title: "Contact | Alai Web",
      description:
        "Contact Alai Web by email, phone, or WhatsApp to discuss your goals, timeline, and next steps for your digital presence.",
    },
  },
  footer: {
    navigationHeading: "Navigation",
    contactHeading: "Contact",
    ctaLabel: "Start a project",
    legal: "© 2026 Alai Web. Beautiful. Fast. Effective.",
  },
  languageSwitcher: {
    label: "Language",
  },
  floatingWhatsapp: {
    label: "WhatsApp",
    ariaLabel: "Chat with Alai Web on WhatsApp",
  },
  home: {
    hero: {
      eyebrow: "Alai Web",
      title: "Websites that look sharp and are built to work.",
      lead:
        "Beautiful. Fast. Effective. Alai Web builds modern, fast, SEO-ready websites for businesses that want a clearer, more credible, and more useful digital presence.",
      primaryCta: { label: "Explore services", to: routes.services },
      secondaryCta: { label: "Let's talk about your project", to: routes.contact },
      metricsAriaLabel: "Alai Web highlights",
      metrics: [
        {
          value: "Fast",
          label: "Lightweight builds that load quickly and stay easy to navigate.",
        },
        {
          value: "Clear",
          label: "A clean structure that leads users toward the right action.",
        },
        {
          value: "SEO-ready",
          label: "Technical foundations designed for visibility and conversion.",
        },
      ],
    },
    signaturePreview: {
      eyebrow: "What we do",
      title: "Three principles shape every Alai Web project.",
      lead:
        "Every website is built around the balance between image, performance, and clarity. The goal is not to impress for a few seconds, but to help a real business turn visits into real inquiries.",
      items: [
        {
          number: "01",
          title: "Sharp visual direction",
          description:
            "Strong typography, clear hierarchy, and a layout that supports the brand without looking like a template.",
        },
        {
          number: "02",
          title: "Light and fast builds",
          description:
            "Essential front-end decisions that keep the site fast, readable, and solid across screens.",
        },
        {
          number: "03",
          title: "A structure ready to grow",
          description:
            "Semantic markup, organized content, and pages built to be found and generate inquiries.",
        },
      ],
    },
    brandStoryPreview: {
      principles: [
        "A clear structure that explains what you do and where the user should go next.",
        "Measured design, where every detail reinforces the message instead of distracting from it.",
        "Lightweight development, so the site feels fast, reliable, and pleasant to use.",
      ],
      imageSvgLabel: "Alai Web project preview",
      eyebrow: "Our approach",
      title: "Essential design, clear thinking, concrete development.",
      lead:
        "Alai Web works with businesses that want something more useful than a simple visual refresh. Every project is built to feel credible, fast, and easy to understand at first glance.",
      ctaLabel: "See how we work",
      imageAlt:
        "Editorial website mockup with bold typography and a highlighted call to action.",
      kicker: "What actually matters",
      highlight:
        "The point is not to add effects. The point is to land the right message, faster.",
    },
  },
  menu: {
    hero: {
      eyebrow: "Services",
      title: "Web solutions designed to give your business more impact.",
      lead:
        "From focused landing pages to full websites, Alai Web designs and builds digital experiences that are clear, fast, and aligned with your brand positioning. Every project aims to improve image, trust, and leads.",
      stats: [
        { value: "Design", label: "Clean, credible visual direction." },
        { value: "Speed", label: "Lightweight, fast, stable builds." },
        { value: "Focus", label: "Structure built around action." },
      ],
      panelAriaLabel: "Service direction",
      panelLabel: "Our focus",
      panelTitle:
        "Credible design, real performance, and a structure shaped for conversion.",
      panelText:
        "No gratuitous effects and no unnecessary complexity. Only what helps the brand look better, read better, and move users toward contact.",
    },
    categories: {
      eyebrow: "Core services",
      title: "Each service is built around a specific goal: clarity, trust, conversion.",
      lead:
        'The work is not just about "making a website". Each intervention improves how the brand presents itself, how it is perceived, and how easily it generates a real inquiry.',
      items: [
        {
          number: "01",
          name: "Business websites",
          accent: "Clear digital presence",
          tone: "light",
          description:
            "Complete websites for businesses, studios, and professionals who need to explain themselves better and build trust immediately.",
          dishes: [
            "Content architecture",
            "Tailored editorial design",
            "Responsive and fast development",
          ],
        },
        {
          number: "02",
          name: "Landing pages",
          accent: "One page, one goal",
          tone: "dark",
          description:
            "Focused pages built around a specific offer, ideal for campaigns, launches, lead generation, or new services.",
          dishes: [
            "Action-oriented headlines and structure",
            "Concise copy and strong hierarchy",
            "Conversion-focused CTA design",
          ],
        },
        {
          number: "03",
          name: "Website redesign",
          accent: "From confusing to credible",
          tone: "warm",
          description:
            "A full rethink for websites that currently feel outdated, slow, or disconnected from the brand positioning.",
          dishes: [
            "Visual cleanup and better hierarchy",
            "Content review and user paths",
            "Technical refresh and mobile-first thinking",
          ],
        },
        {
          number: "04",
          name: "Performance optimization",
          accent: "Faster, more effective",
          tone: "light",
          description:
            "Targeted improvements to loading speed, readability, stability, and SEO foundations.",
          dishes: [
            "Front-end weight reduction",
            "Core technical SEO improvements",
            "Markup cleanup and accessibility fixes",
          ],
        },
      ],
    },
  },
  about: {
    hero: {
      values: [
        {
          title: "Clarity",
          text: "Every website starts from a readable structure that helps users understand value, offer, and next step quickly.",
        },
        {
          title: "Precision",
          text: "Design, content, and development should work together without noise, with real attention to the details that matter.",
        },
        {
          title: "Substance",
          text: "We do not build websites that are only beautiful: we build them to be fast, credible, and useful for business goals.",
        },
      ],
      eyebrow: "About",
      title: "A web studio built on design, speed, and substance.",
      lead:
        "Alai Web exists to build modern websites for small businesses and independent brands that need to communicate better online. Every decision, from content hierarchy to code, aims to make the project clearer, faster, and more effective.",
      note: "Less visual noise, more clarity, better results.",
      panelAriaLabel: "Agency values",
      panelTitle: "What guides our work",
    },
    story: {
      moments: [
        {
          label: "Origin",
          text: "Alai Web started from the idea that many businesses need a simpler, more refined, and less standardized website.",
        },
        {
          label: "Method",
          text: "Every project starts from goals, structure, and content, then takes shape through editorial design and lightweight development.",
        },
        {
          label: "Direction",
          text: "We always look for balance between image, performance, and usefulness, without weighing the site down with unnecessary elements.",
        },
      ],
      eyebrow: "Our story",
      title: "A simple vision: build websites that genuinely help the business.",
      lead:
        "We started from a precise idea: many companies have slow, confusing, or unconvincing websites, not because they lack value, but because their digital communication is badly structured. That is why we align content, layout, and development so every page has a clear role.",
      emphasis:
        "The result should feel contemporary but useful: refined enough to stand out, simple enough to be understood, and solid enough to support growth over time.",
      panelAriaLabel: "Key moments in our story",
      panelTitle: "How we work",
    },
    philosophy: {
      principles: [
        {
          title: "Readable simplicity",
          text: "We reduce visual noise to give more space to message, hierarchy, and genuinely useful calls to action.",
        },
        {
          title: "Technique without showmanship",
          text: "Technical quality should not perform for attention: it should make the site load fast and work well.",
        },
        {
          title: "An experience that converts",
          text: "Every page should guide users smoothly all the way to contact or quote request.",
        },
      ],
      eyebrow: "Our philosophy",
      title: "Remove the excess, leave space for what matters.",
      lead:
        "We believe a good website works when every element has a precise role: clear content, readable structure, solid performance, and a design strong enough to build authority without complicating the experience.",
      emphasis:
        "That is why we choose balance before effect, readability before excess, and design decisions that genuinely help the people who use the site, not just look at it.",
      panelAriaLabel: "Principles that guide the studio",
      panelTitle: "The principles we follow",
    },
  },
  gallery: {
    hero: {
      highlights: [
        {
          label: "Visual direction",
          text: "Editorial layouts, strong typography, and a visual system that supports the brand positioning.",
        },
        {
          label: "Page structure",
          text: "Essential sections, clear hierarchy, and paths designed to guide users toward contact.",
        },
        {
          label: "Technical detail",
          text: "Performance, readability, and front-end solidity treated as part of the design itself.",
        },
      ],
      eyebrow: "Portfolio",
      title: "A selection of creative directions and digital project styles.",
      lead:
        "This section gathers examples of visual direction, structure, and brand presentation. Not just aesthetics: each concept is designed to be clear, credible, and ready to convert.",
      note: "Brand, layout, and content aligned to give the message more strength.",
      panelAriaLabel: "Portfolio highlights",
      panelTitle: "What the portfolio shows",
    },
    grid: {
      eyebrow: "Selected work",
      title: "Examples of pages, systems, and structures designed for real businesses.",
      lead:
        "Here you will find conceptual previews of projects and creative directions built to show how Alai Web approaches brand, readability, and conversion in a clear responsive grid.",
      items: [
        {
          title: "Essential corporate website",
          description:
            "A clean layout with strong hierarchy, built to explain services and value without clutter.",
          alt: "Mockup of a corporate website with bold typography, editorial blocks, and highlighted calls to action.",
          palette: ["#fff7ed", "#fdba74", "#7c2d12"],
          accent: "Corporate",
        },
        {
          title: "Campaign landing page",
          description:
            "A page focused on a specific offer, with concise content and a linear path toward inquiry.",
          alt: "Mockup of a landing page with hero section, benefit blocks, and lead generation calls to action.",
          palette: ["#e2e8f0", "#1e293b", "#f97316"],
          accent: "Lead generation",
        },
        {
          title: "Studio portfolio interface",
          description:
            "A more editorial visual system, useful for teams that need to show work, approach, and aesthetic sensitivity.",
          alt: "Mockup of a creative portfolio with strong typography and project previews.",
          palette: ["#f8fafc", "#94a3b8", "#0f172a"],
          accent: "Portfolio",
        },
        {
          title: "Small business redesign",
          description:
            "A full revision of tone, structure, and visual presence to make the website feel more current and professional.",
          alt: "Mockup of a redesign for a small business with neutral palette, ordered sections, and clear messaging.",
          palette: ["#fef2f2", "#fb923c", "#431407"],
          accent: "Redesign",
        },
        {
          title: "High-readability services page",
          description:
            "A composition designed to make every service easy to understand, including on small screens.",
          alt: "Mockup of a services page with editorial blocks, large headings, and clear content scanning.",
          palette: ["#fafaf9", "#d6d3d1", "#292524"],
          accent: "Services",
        },
        {
          title: "Conversion-focused contact page",
          description:
            "A final page designed to remove friction and make contact requests easier with clear CTA placement.",
          alt: "Mockup of a contact page with visible calls to action, contact details, and strong visual hierarchy.",
          palette: ["#fff1f2", "#fb7185", "#4c0519"],
          accent: "Conversion",
        },
      ],
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Let's build something sharp and effective.",
      lead:
        "Reach out with your business goals, launch timeline, and the kind of digital presence you need. We reply with a clear next step, not a vague sales sequence.",
      primaryCta: "Tell us about your idea",
      secondaryCta: "Start on WhatsApp",
    },
    details: {
      items: [
        {
          label: "Email",
          value: siteConfig.email,
          href: `mailto:${siteConfig.email}`,
          description: "Share your goals, timeline, and current site status.",
        },
        {
          label: "Phone",
          value: siteConfig.phoneDisplay,
          href: siteConfig.phoneHref,
          description: "Call for a quick conversation about scope and priorities.",
        },
        {
          label: "WhatsApp",
          value: "Message the studio",
          href: siteConfig.whatsappHref,
          description:
            "Ideal for early project questions, quick feedback, and scheduling the first call.",
          isDark: true,
          external: true,
        },
      ],
      title: "Project conversations, without the friction.",
      lead:
        "Use the channel that fits your workflow. Email is best for detailed briefs, phone is best for quick alignment, and WhatsApp works well when you want to move fast.",
      ctaTitle: "Prefer to start with a quick WhatsApp message?",
      ctaText:
        "Send a short brief and we will reply with the next best step for your project, timeline, and budget range.",
      ctaLabel: "Chat on WhatsApp",
    },
    hours: {
      title: "Studio hours",
      lead:
        "We keep our calendar focused so projects move quickly. If your launch is urgent, mention the deadline in your first message and we will confirm availability directly.",
      entries: [
        { day: "Monday", hours: "09:00 - 18:00" },
        { day: "Tuesday", hours: "09:00 - 18:00" },
        { day: "Wednesday", hours: "09:00 - 18:00" },
        { day: "Thursday", hours: "09:00 - 18:00" },
        { day: "Friday", hours: "09:00 - 16:00" },
        { day: "Saturday", hours: "By request" },
        { day: "Sunday", hours: "Closed" },
      ],
    },
  },
}

export default en
