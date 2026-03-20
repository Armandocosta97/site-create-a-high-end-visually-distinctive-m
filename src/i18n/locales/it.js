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
    footerNavigation: "Navigazione del footer",
    languageMenu: "Selettore lingua",
    languageMenuOpen: "Apri selettore lingua",
  },
  brand: {
    name: siteConfig.brandName,
    tagline: "Beautiful. Fast. Effective.",
    descriptor: "Studio di web design",
    summary:
      "Siti moderni, veloci e chiari per attività che vogliono una presenza digitale più credibile e utile.",
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
      title: "Alai Web | Siti moderni che funzionano davvero",
      description:
        "Alai Web realizza siti moderni, veloci e pronti per la SEO per piccole imprese che vogliono più chiarezza, performance e una presenza digitale più forte.",
    },
    menu: {
      title: "Servizi | Alai Web",
      description:
        "Scopri i servizi di Alai Web: siti web moderni, restyling, landing page e sviluppi rapidi pensati per aziende che vogliono performance e chiarezza.",
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
        "Beautiful. Fast. Effective. Alai Web realizza siti moderni, veloci e pronti per la SEO per attività che vogliono una presenza digitale più chiara, credibile e utile al business.",
      primaryCta: { label: "Scopri i servizi", to: routes.services },
      secondaryCta: { label: "Parliamo del tuo progetto", to: routes.contact },
      metricsAriaLabel: "Punti chiave di Alai Web",
      metrics: [
        {
          value: "Veloci",
          label: "Strutture leggere, rapide da caricare e facili da navigare.",
        },
        {
          value: "Chiari",
          label: "Struttura pulita che accompagna l'utente verso l'azione.",
        },
        {
          value: "SEO solida",
          label: "Fondamenta tecniche pensate per visibilità e richieste.",
        },
      ],
    },
    signaturePreview: {
      eyebrow: "Cosa facciamo",
      title: "Tre principi guidano ogni progetto firmato Alai Web.",
      lead:
        "Ogni sito nasce dall'equilibrio tra immagine, performance e chiarezza. L'obiettivo non è impressionare per pochi secondi, ma aiutare un'attività reale a trasformare visite in richieste concrete.",
      items: [
        {
          number: "01",
          title: "Direzione visiva nitida",
          description:
            "Tipografia forte, gerarchia chiara e una composizione che valorizza il brand senza sembrare un template.",
        },
        {
          number: "02",
          title: "Sviluppi leggeri e veloci",
          description:
            "Decisioni di front-end essenziali per mantenere il sito rapido, leggibile e solido su ogni schermo.",
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
        "Uno sviluppo leggero, così il sito risulta rapido, affidabile e piacevole da usare.",
      ],
      imageSvgLabel: "Anteprima progetto Alai Web",
      eyebrow: "Il nostro approccio",
      title: "Design essenziale, visione chiara, sviluppo concreto.",
      lead:
        "Alai Web lavora con attività che vogliono qualcosa di più utile di un semplice restyling. Ogni progetto è pensato per essere credibile, veloce e facile da capire al primo sguardo.",
      ctaLabel: "Scopri come lavoriamo",
      imageAlt:
        "Mockup editoriale di un sito con tipografia forte e call to action in evidenza.",
      kicker: "Ciò che conta davvero",
      highlight:
        "Il punto non è aggiungere effetti. Il punto è far arrivare il messaggio giusto, più in fretta.",
    },
  },
  menu: {
    hero: {
      eyebrow: "Servizi",
      title: "Soluzioni web pensate per dare più forza al tuo business.",
      lead:
        "Dalla landing page al sito completo, Alai Web progetta e sviluppa esperienze digitali chiare, veloci e coerenti con il posizionamento del brand. Ogni intervento nasce per migliorare immagine, fiducia e contatti.",
      stats: [
        { value: "Design", label: "Direzione visiva pulita e credibile." },
        { value: "Velocità", label: "Strutture leggere, veloci e stabili." },
        { value: "Chiarezza", label: "Struttura orientata all'azione." },
      ],
      panelAriaLabel: "Direzione dei servizi",
      panelLabel: "Il nostro focus",
      panelTitle:
        "Design credibile, performance reali, struttura orientata alla conversione.",
      panelText:
        "Niente effetti gratuiti e niente complessità inutile. Solo ciò che serve per far apparire meglio il brand, migliorare la leggibilità e portare l'utente verso il contatto.",
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
            "Siti completi per attività, studi e professionisti che hanno bisogno di raccontarsi meglio e generare fiducia subito.",
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
            "Pagine focalizzate su un'offerta precisa, pensate per campagne, lanci, acquisizione contatti o nuovi servizi.",
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
          accent: "Più veloci, più efficaci",
          tone: "light",
          description:
            "Interventi mirati per migliorare caricamento, leggibilità, stabilità e basi SEO del sito.",
          dishes: [
            "Riduzione del peso del front-end",
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
        "Alai Web nasce per creare siti moderni per piccole imprese e realtà indipendenti che vogliono comunicare meglio online. Ogni scelta, dalla gerarchia dei contenuti al codice, punta a rendere il progetto più chiaro, più rapido e più efficace.",
      note: "Meno rumore visivo, più chiarezza, più risultati.",
      panelAriaLabel: "Valori dell'agenzia",
      panelTitle: "Cosa guida il nostro lavoro",
    },
    story: {
      moments: [
        {
          label: "Origine",
          text: "Alai Web nasce dall'idea che molte attività abbiano bisogno di un sito più semplice, più curato e meno standardizzato.",
        },
        {
          label: "Metodo",
          text: "Ogni progetto parte da obiettivi, struttura e contenuti, poi prende forma con design editoriale e sviluppo leggero.",
        },
        {
          label: "Direzione",
          text: "Cerchiamo sempre equilibrio tra immagine, performance e utilità, senza appesantire il sito con elementi superflui.",
        },
      ],
      eyebrow: "La nostra storia",
      title: "Una visione semplice: fare siti che aiutano davvero il business.",
      lead:
        "Siamo partiti da un'idea precisa: molte aziende hanno siti lenti, confusi o poco credibili, non per mancanza di valore, ma per una comunicazione digitale costruita male. Per questo lavoriamo su contenuti, struttura e sviluppo in modo coordinato, così ogni pagina ha un ruolo chiaro.",
      emphasis:
        "Il risultato deve essere contemporaneo ma utile: abbastanza curato da distinguerti, abbastanza semplice da essere capito e abbastanza solido da sostenere la crescita nel tempo.",
      panelAriaLabel: "Momenti chiave della nostra storia",
      panelTitle: "Come lavoriamo",
    },
    philosophy: {
      principles: [
        {
          title: "Semplicità leggibile",
          text: "Riduciamo il rumore visivo per lasciare spazio a messaggio, gerarchia e call to action davvero utili.",
        },
        {
          title: "Tecnica senza ostentazione",
          text: "La qualità tecnica non deve mettersi in mostra: deve far caricare il sito velocemente e farlo funzionare bene.",
        },
        {
          title: "Esperienza che converte",
          text: "Ogni pagina deve accompagnare l'utente con fluidità, fino al contatto o alla richiesta di preventivo.",
        },
      ],
      eyebrow: "La nostra filosofia",
      title: "Togliere il superfluo, lasciare spazio a ciò che conta.",
      lead:
        "Crediamo che un buon sito funzioni quando ogni elemento ha un ruolo preciso: contenuti chiari, struttura leggibile, performance solide e un design capace di dare autorevolezza senza complicare l'esperienza.",
      emphasis:
        "Per questo scegliamo equilibrio prima dell'effetto, leggibilità prima dell'eccesso e decisioni progettuali che aiutino davvero chi il sito lo deve usare, non solo guardare.",
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
          text: "Performance, leggibilità e solidità del front-end trattate come parte integrante del design.",
        },
      ],
      eyebrow: "Portfolio",
      title: "Una selezione di direzioni creative e progetti digitali.",
      lead:
        "Questa sezione raccoglie esempi di approccio visivo, struttura e presentazione del brand. Non solo estetica: ogni progetto è pensato per essere chiaro, credibile e pronto a convertire.",
      note: "Brand, struttura e contenuti allineati per dare più forza al messaggio.",
      panelAriaLabel: "Portfolio highlights",
      panelTitle: "Cosa racconta il portfolio",
    },
    grid: {
      eyebrow: "Selezione lavori",
      title: "Esempi di pagine, sistemi visivi e strutture pensate per business reali.",
      lead:
        "Qui trovi anteprime concettuali di progetti e direzioni creative sviluppate per mostrare come Alai Web lavora su brand, leggibilità e conversione in una griglia responsive chiara su ogni dispositivo.",
      items: [
        {
          title: "Sito corporate essenziale",
          description:
            "Una composizione pulita con gerarchia forte, pensata per raccontare servizi e valore senza dispersione.",
          alt: "Mockup di un sito corporate con tipografia decisa, blocchi editoriali e call to action in evidenza.",
          palette: ["#fff7ed", "#fdba74", "#7c2d12"],
          accent: "Corporate",
        },
        {
          title: "Landing page per campagna",
          description:
            "Una pagina focalizzata su un'offerta specifica, con contenuti brevi e un percorso lineare verso la richiesta.",
          alt: "Mockup di una landing page con sezione hero, blocchi di benefici e call to action per acquisizione contatti.",
          palette: ["#e2e8f0", "#1e293b", "#f97316"],
          accent: "Acquisizione",
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
          alt: "Mockup di restyling per piccola impresa con palette neutra, sezioni ordinate e messaggi chiari.",
          palette: ["#fef2f2", "#fb923c", "#431407"],
          accent: "Restyling",
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
          label: "Telefono",
          value: siteConfig.phoneDisplay,
          href: siteConfig.phoneHref,
          description: "Chiama per un confronto rapido su scope e priorità.",
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
        "Usa il canale che si adatta meglio al tuo flusso di lavoro. Il telefono è ideale per un confronto rapido, WhatsApp quando vuoi muoverti più in fretta e il form per un brief più strutturato.",
      ctaTitle: "Preferisci iniziare con un messaggio rapido su WhatsApp?",
      ctaText:
        "Invia un brief sintetico e ti risponderemo con il prossimo passo più utile per progetto, tempi e fascia di budget.",
      ctaLabel: "Scrivi su WhatsApp",
      form: {
        eyebrow: "Brief",
        title: "Inserisci qui i dettagli del progetto.",
        lead:
          "Compila il form con i dettagli essenziali del progetto e ti risponderemo con un prossimo passo chiaro.",
        nameLabel: "Nome",
        namePlaceholder: "Il tuo nome",
        emailLabel: "Email",
        emailPlaceholder: "nome@azienda.it",
        phoneLabel: "Telefono",
        phonePlaceholder: "+39 000 000 0000",
        businessLabel: "Attività",
        businessPlaceholder: "Azienda o attività",
        messageLabel: "Messaggio",
        messagePlaceholder: "Obiettivi, tempi, tipo di sito, pagine richieste, note utili.",
        submitLabel: "Invia richiesta",
        sendingLabel: "Invio in corso...",
        successMessage: "Richiesta inviata correttamente. Ti risponderemo il prima possibile.",
        successSheetTitle: "Richiesta inviata con successo",
        successSheetCloseLabel: "Chiudi conferma invio",
        errorMessage: "Invio non riuscito. Riprova tra poco o scrivici via email/WhatsApp.",
        honeypotLabel: "Lascia vuoto questo campo",
        note: "Il form invia direttamente la richiesta allo studio tramite Static Forms.",
      },
    },
  },
}

export default it
