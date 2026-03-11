const galleryItems = [
  {
    title: "Chef's tasting course",
    description:
      "A plated sequence focused on sharp color contrast, clean geometry, and seasonal produce.",
    alt: "A refined tasting plate with bright vegetables and precise sauce placement.",
    palette: ["#fff7ed", "#fdba74", "#7c2d12"],
    accent: "Signature dishes",
  },
  {
    title: "Evening service",
    description:
      "Soft light, layered table settings, and a room tuned for intimate conversations over dinner.",
    alt: "An elegant dining room with candlelight, set tables, and warm evening tones.",
    palette: ["#e2e8f0", "#1e293b", "#f97316"],
    accent: "Dining room",
  },
  {
    title: "Open kitchen rhythm",
    description:
      "Focused movements, polished surfaces, and a service pace built around calm precision.",
    alt: "A chef plating dishes in an open kitchen with stainless steel counters.",
    palette: ["#f8fafc", "#94a3b8", "#0f172a"],
    accent: "Kitchen detail",
  },
  {
    title: "Seasonal starters",
    description:
      "Light compositions that bring together herbs, citrus, and texture without excess.",
    alt: "A seasonal starter with herbs, citrus, and delicate plating on a ceramic dish.",
    palette: ["#fef2f2", "#fb923c", "#431407"],
    accent: "Fresh courses",
  },
  {
    title: "Private corner tables",
    description:
      "Material warmth, measured spacing, and the kind of seating that encourages longer evenings.",
    alt: "A quiet restaurant corner with linen-covered tables and soft ambient lighting.",
    palette: ["#fafaf9", "#d6d3d1", "#292524"],
    accent: "Atmosphere",
  },
  {
    title: "Final course details",
    description:
      "Desserts finished with restraint, texture, and the same visual care as the first plate.",
    alt: "A minimalist dessert course with layered textures and a glossy finish.",
    palette: ["#fff1f2", "#fb7185", "#4c0519"],
    accent: "Closing notes",
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
    background:
      "linear-gradient(180deg, #ffffff 0%, #fff7f1 22%, #ffffff 54%, #f8fafc 100%)",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.25rem",
  },
  item: {
    display: "grid",
    gap: "1rem",
    margin: 0,
    padding: "1rem",
    borderRadius: "1.85rem",
    border: "1px solid rgba(17, 17, 17, 0.08)",
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    boxShadow: "0 20px 55px rgba(15, 23, 42, 0.08)",
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
          <p style={styles.eyebrow}>Image grid</p>
          <h2 id="gallery-grid-title" style={styles.title}>
            Plates, spaces, and service details that define the experience.
          </h2>
          <p style={styles.lead}>
            The gallery brings together signature dishes, dining-room atmosphere, and
            kitchen moments in a responsive editorial grid designed to stay clear on
            mobile and expansive on larger screens.
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
