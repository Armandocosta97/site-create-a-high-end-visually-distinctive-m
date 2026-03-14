import { useI18n } from "../i18n/useI18n"

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
  const { messages } = useI18n()
  const { grid } = messages.gallery

  return (
    <section
      id="gallery-grid"
      aria-labelledby="gallery-grid-title"
      style={styles.section}
    >
      <div style={styles.shell}>
        <div style={styles.intro}>
          <p style={styles.eyebrow}>{grid.eyebrow}</p>
          <h2 id="gallery-grid-title" style={styles.title}>{grid.title}</h2>
          <p style={styles.lead}>{grid.lead}</p>
        </div>

        <div style={styles.grid}>
          {grid.items.map((item) => (
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
