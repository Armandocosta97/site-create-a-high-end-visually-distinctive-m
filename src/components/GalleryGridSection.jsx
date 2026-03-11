const galleryItems = [
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
]

function createGalleryImage(title, palette) {
  const [base, accent, detail] = palette
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${base}" />
          <stop offset="100%" stop-color="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" rx="48" fill="url(#bg)" />
      <circle cx="930" cy="220" r="190" fill="${accent}" fill-opacity="0.22" />
      <circle cx="240" cy="720" r="210" fill="${detail}" fill-opacity="0.10" />
      <rect x="134" y="164" width="932" height="572" rx="34" fill="#ffffff" fill-opacity="0.72" />
      <rect x="190" y="230" width="420" height="300" rx="28" fill="${detail}" fill-opacity="0.88" />
      <rect x="652" y="230" width="220" height="132" rx="24" fill="${accent}" fill-opacity="0.86" />
      <rect x="652" y="390" width="314" height="48" rx="24" fill="${detail}" fill-opacity="0.12" />
      <rect x="652" y="464" width="252" height="34" rx="17" fill="${detail}" fill-opacity="0.1" />
      <rect x="190" y="566" width="776" height="36" rx="18" fill="${detail}" fill-opacity="0.08" />
      <rect x="190" y="624" width="610" height="28" rx="14" fill="${detail}" fill-opacity="0.08" />
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const styles = {
  section: {
    position: "relative",
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem) clamp(5rem, 8vw, 8rem)",
    background: "transparent",
  },
  shell: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gap: "2.5rem",
  },
  intro: {
    display: "grid",
    gap: "1rem",
    maxWidth: "780px",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#f97316",
  },
  title: {
    margin: 0,
    fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
    lineHeight: 0.95,
    letterSpacing: "-0.05em",
    color: "#111111",
    textWrap: "balance",
  },
  lead: {
    margin: 0,
    maxWidth: "46rem",
    fontSize: "clamp(1rem, 2.2vw, 1.18rem)",
    lineHeight: 1.75,
    color: "#52525b",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
    gap: "1.25rem",
  },
  item: {
    display: "grid",
    gap: "1rem",
    margin: 0,
    padding: "1rem",
    borderRadius: "1.85rem",
    border: "1px solid rgba(17, 17, 17, 0.08)",
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    boxShadow: "0 20px 55px rgba(15, 23, 42, 0.08)",
    backdropFilter: "blur(12px)",
  },
  imageWrap: {
    margin: 0,
    overflow: "hidden",
    borderRadius: "1.3rem",
    backgroundColor: "#f5f5f5",
  },
  image: {
    display: "block",
    width: "100%",
    aspectRatio: "4 / 3",
    objectFit: "cover",
  },
  meta: {
    display: "grid",
    gap: "0.65rem",
  },
  accent: {
    margin: 0,
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#f97316",
  },
  itemTitle: {
    margin: 0,
    fontSize: "1.45rem",
    lineHeight: 1.08,
    letterSpacing: "-0.04em",
    color: "#111111",
  },
  itemText: {
    margin: 0,
    fontSize: "0.98rem",
    lineHeight: 1.7,
    color: "#52525b",
  },
}

export default function GalleryGridSection() {
  return (
    <section
      id="gallery-grid"
      aria-labelledby="gallery-grid-title"
      style={styles.section}
    >
      <div style={styles.shell}>
        <div style={styles.intro}>
          <p style={styles.eyebrow}>Selezione lavori</p>
          <h2 id="gallery-grid-title" style={styles.title}>
            Esempi di pagine, sistemi visivi e strutture pensate per business reali.
          </h2>
          <p style={styles.lead}>
            Qui trovi anteprime concettuali di progetti e direzioni creative sviluppate
            per mostrare come Alai Web lavora su brand, leggibilita e conversione in una
            griglia responsive chiara su ogni dispositivo.
          </p>
        </div>

        <div style={styles.grid}>
          {galleryItems.map((item) => (
            <article key={item.title} style={styles.item}>
              <figure style={styles.imageWrap}>
                <img
                  src={createGalleryImage(item.title, item.palette)}
                  alt={item.alt}
                  loading="lazy"
                  style={styles.image}
                />
              </figure>
              <div style={styles.meta}>
                <p style={styles.accent}>{item.accent}</p>
                <h3 style={styles.itemTitle}>{item.title}</h3>
                <p style={styles.itemText}>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
