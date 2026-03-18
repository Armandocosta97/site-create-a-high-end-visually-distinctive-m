import routes from "../../config/routes"
import siteConfig from "../../config/siteConfig"

const it = {
  locale: {
    code: "it",
    htmlLang: "it",
  },
  accessibility: {
    homeLabelSuffix: "home",
    logoLabelSuffix: "logo",
    mainNavigation: "Navigazione principale",
    footerNavigation: "Navigazione footer",
    languageMenu: "Selettore lingua",
    languageMenuOpen: "Apri selettore lingua",
  },
  brand: {
    name: siteConfig.brandName,
    tagline: "Beautiful. Fast. Effective.",
    descriptor: "Web design studio",
    summary:
      "Siti moderni, veloci e chiari per business che vogliono una presenza digitale piu credibile e utile.",
  },
  navigation: [
    { label: "Home", target: routes.home },
    { label: "Servizi", target: routes.services },
    { label: "Chi siamo", target: routes.about },
    { label: "Portfolio", target: routes.portfolio },
    { label: "Contatti", target: routes.contact },
  ],
  seo: {
    home: {
      title: "Alai Web | Modern websites that look great and work",
      description:
        "Alai Web builds modern, fast, and SEO-ready websites for small businesses that need clarity, performance, and stronger digital presence.",
    },
    menu: {
      title: "Servizi | Alai Web",
      description:
        "Scopri i servizi di Alai Web: siti web moderni, redesign, landing page e build veloci pensate per aziende che vogliono performance e chiarezza.",
    },
    chiSiamo: {
      title: "Chi siamo | Alai Web",
      description:
        "Scopri il metodo, la visione e l'approccio di Alai Web: design essenziale, sviluppo veloce e siti pensati per obiettivi reali.",
    },
    gallery: {
      title: "Portfolio | Alai Web",
      description:
        "Esplora il portfolio di Alai Web con anteprime di progetti, direzione visiva e soluzioni digitali pensate per brand e piccole imprese.",
    },
    contatti: {
      title: "Contatti | Alai Web",
      description:
        "Contatta Alai Web via email, telefono o WhatsApp per parlare di obiettivi, tempi e prossimi passi del tuo progetto digitale.",
    },
  },
  footer: {
    navigationHeading: "Navigazione",
    contactHeading: "Contatto",
    ctaLabel: "Avvia un progetto",
    legal: "© 2026 Alai Web. Beautiful. Fast. Effective.",
  },
  languageSwitcher: {
    label: "Lingua",
  },
  floatingWhatsapp: {
    label: "WhatsApp",
    ariaLabel: "Chatta con Alai Web su WhatsApp",
  },
  home: {
    hero: {
      eyebrow: "Alai Web",
      title: "Siti web belli da vedere e costruiti per funzionare.",
      lead:
        "Beautiful. Fast. Effective. Alai Web realizza siti moderni, veloci e SEO-ready per attivita che vogliono una presenza digitale piu chiara, credibile e utile al business.",
      primaryCta: { label: "Scopri i servizi", to: routes.services },
      secondaryCta: { label: "Parliamo del tuo progetto", to: routes.contact },
      metricsAriaLabel: "Punti chiave di Alai Web",
      metrics: [
        {
          value: "Veloci",
          label: "Build leggere, rapide da caricare e facili da navigare.",
        },
        {
          value: "Chiari",
          label: "Struttura pulita che accompagna l'utente verso l'azione.",
        },
        {
          value: "SEO-ready",
          label: "Fondamenta tecniche pensate per visibilita e conversione.",
        },
      ],
    },
    signaturePreview: {
      eyebrow: "Cosa facciamo",
      title: "Tre principi guidano ogni progetto firmato Alai Web.",
      lead:
        "Ogni sito nasce dall'equilibrio tra immagine, performance e chiarezza. L'obiettivo non e impressionare per pochi secondi, ma aiutare un'attivita reale a trasformare visite in richieste concrete.",
      items: [
        {
          number: "01",
          title: "Direzione visiva nitida",
          description:
            "Tipografia forte, gerarchia chiara e un layout che valorizza il brand senza sembrare un template.",
        },
        {
          number: "02",
          title: "Build leggere e veloci",
          description:
            "Decisioni front-end essenziali per mantenere il sito rapido, leggibile e solido su ogni schermo.",
        },
        {
          number: "03",
          title: "Struttura pronta per crescere",
          description:
            "Markup semantico, contenuti ordinati e pagine pensate per farsi trovare e generare contatti.",
        },
      ],
    },
    brandStoryPreview: {
      principles: [
        "Una struttura chiara, per far capire subito cosa fai e dove portare l'utente.",
        "Un design misurato, in cui ogni dettaglio rafforza il messaggio invece di distrarlo.",
        "Uno sviluppo leggero, cosi il sito risulta rapido, affidabile e piacevole da usare.",
      ],
      imageSvgLabel: "Anteprima progetto Alai Web",
      eyebrow: "Il nostro approccio",
      title: "Design essenziale, visione chiara, sviluppo concreto.",
      lead:
        "Alai Web lavora con attivita che vogliono qualcosa di piu utile di un semplice restyling. Ogni progetto e pensato per essere credibile, veloce e facile da capire al primo sguardo.",
      ctaLabel: "Scopri come lavoriamo",
      imageAlt:
        "Mockup editoriale di un sito con tipografia forte e call to action in evidenza.",
      kicker: "Cio che conta davvero",
      highlight:
        "Il punto non e aggiungere effetti. Il punto e far arrivare il messaggio giusto, piu in fretta.",
    },
  },
  menu: {
    hero: {
      eyebrow: "Servizi",
      title: "Soluzioni web pensate per dare piu forza al tuo business.",
      lead:
        "Dalla landing page al sito completo, Alai Web progetta e sviluppa esperienze digitali chiare, veloci e coerenti con il posizionamento del brand. Ogni intervento nasce per migliorare immagine, fiducia e contatti.",
      stats: [
        { value: "Design", label: "Direzione visiva pulita e credibile." },
        { value: "Speed", label: "Build leggere, veloci e stabili." },
        { value: "Focus", label: "Struttura orientata all'azione." },
      ],
      panelAriaLabel: "Direzione dei servizi",
      panelLabel: "Il nostro focus",
      panelTitle:
        "Design credibile, performance reali, struttura orientata alla conversione.",
      panelText:
        "Niente effetti gratuiti e niente complessita inutile. Solo cio che serve per far apparire meglio il brand, migliorare la leggibilita e portare l'utente verso il contatto.",
    },
    categories: {
      eyebrow: "Servizi principali",
      title: "Ogni servizio ha un obiettivo preciso: chiarezza, fiducia, conversione.",
      lead:
        'Il lavoro non si riduce a "fare un sito". Ogni intervento serve a migliorare come il brand si presenta, come viene percepito e quanto facilmente porta a una richiesta reale.',
      items: [
        {
          number: "01",
          name: "Siti aziendali",
          accent: "Presenza digitale chiara",
          tone: "light",
          description:
            "Siti completi per attivita, studi e professionisti che hanno bisogno di raccontarsi meglio e generare fiducia subito.",
          dishes: [
            "Architettura dei contenuti",
            "Design editoriale su misura",
            "Sviluppo responsive e veloce",
          ],
        },
        {
          number: "02",
          name: "Landing page",
          accent: "Una pagina, un obiettivo",
          tone: "dark",
          description:
            "Pagine focalizzate su un'offerta precisa, pensate per campagne, lanci, lead generation o nuovi servizi.",
          dishes: [
            "Headline e struttura orientate all'azione",
            "Copy sintetico e gerarchia forte",
            "CTA pensate per convertire",
          ],
        },
        {
          number: "03",
          name: "Restyling sito",
          accent: "Da confuso a credibile",
          tone: "warm",
          description:
            "Riprogettazione di siti esistenti che oggi risultano datati, lenti o incoerenti con il posizionamento del brand.",
          dishes: [
            "Pulizia visiva e nuova gerarchia",
            "Revisione contenuti e percorsi utente",
            "Aggiornamento tecnico e mobile-first",
          ],
        },
        {
          number: "04",
          name: "Ottimizzazione performance",
          accent: "Piu veloci, piu efficaci",
          tone: "light",
          description:
            "Interventi mirati per migliorare caricamento, leggibilita, stabilita e basi SEO del sito.",
          dishes: [
            "Riduzione del peso front-end",
            "Migliorie SEO tecniche di base",
            "Pulizia markup e accessibilita",
          ],
        },
      ],
    },
  },
  about: {
    hero: {
      values: [
        {
          title: "Chiarezza",
          text: "Ogni sito parte da una struttura leggibile, per aiutare l'utente a capire subito valore, offerta e prossima azione.",
        },
        {
          title: "Precisione",
          text: "Design, contenuti e sviluppo devono lavorare insieme senza rumore, con attenzione reale ai dettagli che contano.",
        },
        {
          title: "Concretezza",
          text: "Non costruiamo siti solo belli: li progettiamo per essere veloci, credibili e utili agli obiettivi del business.",
        },
      ],
      eyebrow: "Chi siamo",
      title: "Un'agenzia web costruita su design, velocita e sostanza.",
      lead:
        "Alai Web nasce per creare siti moderni per piccole imprese e realta indipendenti che vogliono comunicare meglio online. Ogni scelta, dalla gerarchia dei contenuti al codice, punta a rendere il progetto piu chiaro, piu rapido e piu efficace.",
      note: "Meno rumore visivo, piu chiarezza, piu risultati.",
      panelAriaLabel: "Valori dell'agenzia",
      panelTitle: "Cosa guida il nostro lavoro",
    },
    story: {
      moments: [
        {
          label: "Origine",
          text: "Alai Web nasce dall'idea che molte attivita abbiano bisogno di un sito piu semplice, piu curato e meno standardizzato.",
        },
        {
          label: "Metodo",
          text: "Ogni progetto parte da obiettivi, struttura e contenuti, poi prende forma con design editoriale e sviluppo leggero.",
        },
        {
          label: "Direzione",
          text: "Cerchiamo sempre equilibrio tra immagine, performance e utilita, senza appesantire il sito con elementi superflui.",
        },
      ],
      eyebrow: "La nostra storia",
      title: "Una visione semplice: fare siti che aiutano davvero il business.",
      lead:
        "Siamo partiti da un'idea precisa: molte aziende hanno siti lenti, confusi o poco credibili, non per mancanza di valore, ma per una comunicazione digitale costruita male. Per questo lavoriamo su contenuti, layout e sviluppo in modo coordinato, cosi ogni pagina ha un ruolo chiaro.",
      emphasis:
        "Il risultato deve essere contemporaneo ma utile: abbastanza curato da distinguerti, abbastanza semplice da essere capito e abbastanza solido da sostenere la crescita nel tempo.",
      panelAriaLabel: "Momenti chiave della nostra storia",
      panelTitle: "Come lavoriamo",
    },
    philosophy: {
      principles: [
        {
          title: "Semplicita leggibile",
          text: "Riduciamo il rumore visivo per lasciare spazio a messaggio, gerarchia e call to action davvero utili.",
        },
        {
          title: "Tecnica senza ostentazione",
          text: "La qualita tecnica non deve mettersi in mostra: deve far caricare il sito velocemente e farlo funzionare bene.",
        },
        {
          title: "Esperienza che converte",
          text: "Ogni pagina deve accompagnare l'utente con fluidita, fino al contatto o alla richiesta di preventivo.",
        },
      ],
      eyebrow: "La nostra filosofia",
      title: "Togliere il superfluo, lasciare spazio a cio che conta.",
      lead:
        "Crediamo che un buon sito funzioni quando ogni elemento ha un ruolo preciso: contenuti chiari, struttura leggibile, performance solide e un design capace di dare autorevolezza senza complicare l'esperienza.",
      emphasis:
        "Per questo scegliamo equilibrio prima dell'effetto, leggibilita prima dell'eccesso e decisioni progettuali che aiutino davvero chi il sito lo deve usare, non solo guardare.",
      panelAriaLabel: "Principi che guidano l'agenzia",
      panelTitle: "I principi che seguiamo",
    },
  },
  gallery: {
    hero: {
      highlights: [
        {
          label: "Direzione visiva",
          text: "Layout editoriali, tipografia forte e una costruzione visiva che sostiene il posizionamento del brand.",
        },
        {
          label: "Struttura delle pagine",
          text: "Sezioni essenziali, gerarchie chiare e percorsi pensati per accompagnare l'utente fino al contatto.",
        },
        {
          label: "Dettaglio tecnico",
          text: "Performance, leggibilita e solidita front-end trattate come parte integrante del design.",
        },
      ],
      eyebrow: "Portfolio",
      title: "Una selezione di direzioni creative e progetti digitali.",
      lead:
        "Questa sezione raccoglie esempi di approccio visivo, struttura e presentazione del brand. Non solo estetica: ogni progetto e pensato per essere chiaro, credibile e pronto a convertire.",
      note: "Brand, layout e contenuti allineati per dare piu forza al messaggio.",
      panelAriaLabel: "Portfolio highlights",
      panelTitle: "Cosa racconta il portfolio",
    },
    grid: {
      eyebrow: "Selezione lavori",
      title: "Esempi di pagine, sistemi visivi e strutture pensate per business reali.",
      lead:
        "Qui trovi anteprime concettuali di progetti e direzioni creative sviluppate per mostrare come Alai Web lavora su brand, leggibilita e conversione in una griglia responsive chiara su ogni dispositivo.",
      items: [
        {
          title: "Sito corporate essenziale",
          description:
            "Un layout pulito con gerarchia forte, pensato per raccontare servizi e valore senza dispersione.",
          alt: "Mockup di un sito corporate con tipografia decisa, blocchi editoriali e call to action in evidenza.",
          palette: ["#fff7ed", "#fdba74", "#7c2d12"],
          accent: "Corporate",
        },
        {
          title: "Landing page per campagna",
          description:
            "Una pagina focalizzata su un'offerta specifica, con contenuti brevi e un percorso lineare verso la richiesta.",
          alt: "Mockup di una landing page con sezione hero, blocchi di benefici e call to action per lead generation.",
          palette: ["#e2e8f0", "#1e293b", "#f97316"],
          accent: "Lead generation",
        },
        {
          title: "Interfaccia portfolio studio",
          description:
            "Un impianto visivo piu editoriale, utile per chi deve mostrare lavori, approccio e sensibilita estetica.",
          alt: "Mockup di un portfolio creativo con grande impatto tipografico e anteprime progetto.",
          palette: ["#f8fafc", "#94a3b8", "#0f172a"],
          accent: "Portfolio",
        },
        {
          title: "Restyling per piccola impresa",
          description:
            "Una revisione completa di tono, struttura e presenza visiva per rendere il sito piu attuale e professionale.",
          alt: "Mockup di redesign per piccola impresa con palette neutra, sezioni ordinate e messaggi chiari.",
          palette: ["#fef2f2", "#fb923c", "#431407"],
          accent: "Redesign",
        },
        {
          title: "Pagina servizi ad alta leggibilita",
          description:
            "Una composizione pensata per rendere ogni servizio immediato da capire, anche da mobile.",
          alt: "Mockup di pagina servizi con blocchi editoriali, titoli grandi e chiara scansione dei contenuti.",
          palette: ["#fafaf9", "#d6d3d1", "#292524"],
          accent: "Servizi",
        },
        {
          title: "Contatti orientati alla conversione",
          description:
            "Una pagina finale costruita per eliminare attriti e facilitare la presa di contatto con CTA chiare.",
          alt: "Mockup di pagina contatti con call to action evidenti, recapiti e forte gerarchia visiva.",
          palette: ["#fff1f2", "#fb7185", "#4c0519"],
          accent: "Conversione",
        },
      ],
    },
  },
  contact: {
    hero: {
      eyebrow: "Contatti",
      title: "Costruiamo qualcosa di nitido ed efficace.",
      lead:
        "Scrivici con obiettivi, tempi e tipo di presenza digitale che ti serve. Rispondiamo con un prossimo passo chiaro, non con una sequenza commerciale vaga.",
      primaryCta: "Raccontaci la tua idea",
      secondaryCta: "Inizia su WhatsApp",
    },
    details: {
      items: [
        {
          label: "Email",
          value: siteConfig.email,
          href: `mailto:${siteConfig.email}`,
          description: "Condividi obiettivi, tempi e stato attuale del sito.",
        },
        {
          label: "Telefono",
          value: siteConfig.phoneDisplay,
          href: siteConfig.phoneHref,
          description: "Chiama per un confronto rapido su scope e priorita.",
        },
        {
          label: "WhatsApp",
          value: "Scrivi allo studio",
          href: siteConfig.whatsappHref,
          description:
            "Ideale per prime domande, feedback rapidi e organizzare la prima call.",
          isDark: true,
          external: true,
        },
      ],
      title: "Conversazioni di progetto, senza attriti.",
      lead:
        "Usa il canale che si adatta meglio al tuo flusso di lavoro. L'email e ideale per brief dettagliati, il telefono per allinearsi rapidamente, WhatsApp quando vuoi muoverti piu in fretta.",
      ctaTitle: "Preferisci iniziare con un messaggio rapido su WhatsApp?",
      ctaText:
        "Invia un brief sintetico e ti risponderemo con il prossimo passo piu utile per progetto, tempi e range di budget.",
      ctaLabel: "Chatta su WhatsApp",
      formLabel: "Form",
      formValue: "Invia un brief rapido",
      formDescription:
        "Se vuoi partire con una richiesta sintetica, usa questo punto di ingresso e ti guidiamo nel prossimo passo.",
      form: {
        eyebrow: "Brief",
        title: "Inserisci qui i dettagli del progetto.",
        lead:
          "Prepariamo da ora una struttura semplice: nel prossimo passaggio collegheremo questo blocco a uno static form reale.",
        nameLabel: "Nome",
        namePlaceholder: "Il tuo nome",
        emailLabel: "Email",
        emailPlaceholder: "nome@azienda.it",
        phoneLabel: "Telefono",
        phonePlaceholder: "+39 000 000 0000",
        businessLabel: "Business",
        businessPlaceholder: "Azienda o attivita",
        messageLabel: "Messaggio",
        messagePlaceholder: "Obiettivi, tempi, tipo di sito, pagine richieste, note utili.",
        submitLabel: "Invia richiesta",
        note: "Form statico in preparazione: il collegamento del submit arriva nel prossimo step.",
      },
    },
    hours: {
      title: "Orari studio",
      lead:
        "Manteniamo il calendario concentrato per far avanzare i progetti in fretta. Se hai una scadenza urgente, indicala nel primo messaggio e confermeremo subito la disponibilita.",
      entries: [
        { day: "Lunedi", hours: "09:00 - 18:00" },
        { day: "Martedi", hours: "09:00 - 18:00" },
        { day: "Mercoledi", hours: "09:00 - 18:00" },
        { day: "Giovedi", hours: "09:00 - 18:00" },
        { day: "Venerdi", hours: "09:00 - 16:00" },
        { day: "Sabato", hours: "Su richiesta" },
        { day: "Domenica", hours: "Chiuso" },
      ],
    },
  },
}

export default it
