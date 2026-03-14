import { Link } from "react-router-dom"
import routes from "../config/routes"
import { useI18n } from "../i18n/useI18n"

function createPreviewImage(imageSvgLabel) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${imageSvgLabel}">
    <defs>
      <linearGradient id="surface" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff7ed" />
        <stop offset="100%" stop-color="#ffffff" />
      </linearGradient>
    </defs>
    <rect width="1200" height="900" rx="52" fill="url(#surface)" />
    <circle cx="930" cy="190" r="170" fill="#f97316" fill-opacity="0.18" />
    <circle cx="235" cy="735" r="210" fill="#0f172a" fill-opacity="0.08" />
    <rect x="118" y="126" width="964" height="648" rx="40" fill="#ffffff" />
    <rect x="170" y="190" width="470" height="520" rx="28" fill="#0f172a" />
    <rect x="700" y="220" width="210" height="28" rx="14" fill="#f97316" fill-opacity="0.85" />
    <rect x="700" y="280" width="282" height="86" rx="24" fill="#0f172a" fill-opacity="0.08" />
    <rect x="700" y="392" width="330" height="22" rx="11" fill="#0f172a" fill-opacity="0.12" />
    <rect x="700" y="432" width="258" height="22" rx="11" fill="#0f172a" fill-opacity="0.12" />
    <rect x="700" y="472" width="306" height="22" rx="11" fill="#0f172a" fill-opacity="0.12" />
    <rect x="700" y="550" width="190" height="58" rx="29" fill="#f97316" />
  </svg>
`)}` 
}

const styles = {
  section: {
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
    background: "transparent",
  },
  shell: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gap: "2rem",
  },
  layout: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    alignItems: "stretch",
  },
  contentPanel: {
    display: "grid",
    gap: "1.25rem",
    padding: "clamp(1.75rem, 4vw, 3rem)",
    borderRadius: "2rem",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    boxShadow: "0 24px 70px rgba(15, 23, 42, 0.14)",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#fb923c",
  },
  title: {
    margin: 0,
    maxWidth: "12ch",
    fontSize: "clamp(2.5rem, 6vw, 4.75rem)",
    lineHeight: 0.95,
    letterSpacing: "-0.05em",
    textWrap: "balance",
  },
  lead: {
    margin: 0,
    maxWidth: "34rem",
    fontSize: "clamp(1rem, 2.3vw, 1.18rem)",
    lineHeight: 1.75,
    color: "rgba(255, 255, 255, 0.76)",
  },
  action: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    minHeight: "3.5rem",
    padding: "0.95rem 1.4rem",
    borderRadius: "999px",
    backgroundColor: "#f97316",
    color: "#ffffff",
    fontWeight: 700,
  },
  detailPanel: {
    display: "grid",
    gap: "1rem",
    padding: "clamp(1.75rem, 4vw, 3rem)",
    borderRadius: "2rem",
    border: "1px solid rgba(17, 17, 17, 0.08)",
    background:
      "linear-gradient(160deg, rgba(255, 247, 237, 0.96), rgba(255, 255, 255, 0.98))",
    boxShadow: "0 18px 48px rgba(15, 23, 42, 0.08)",
  },
  imageFrame: {
    overflow: "hidden",
    minHeight: "100%",
    borderRadius: "2rem",
    border: "1px solid rgba(17, 17, 17, 0.08)",
    background:
      "linear-gradient(160deg, rgba(255, 247, 237, 0.96), rgba(255, 255, 255, 0.98))",
    boxShadow: "0 18px 48px rgba(15, 23, 42, 0.08)",
  },
  image: {
    display: "block",
    width: "100%",
    height: "100%",
    minHeight: "320px",
    objectFit: "cover",
  },
  kicker: {
    margin: 0,
    fontSize: "0.95rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#f97316",
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "grid",
    gap: "1rem",
  },
  item: {
    paddingTop: "1rem",
    borderTop: "1px solid rgba(17, 17, 17, 0.08)",
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#3f3f46",
  },
  highlight: {
    margin: 0,
    fontSize: "clamp(1.4rem, 3vw, 2rem)",
    lineHeight: 1.15,
    letterSpacing: "-0.04em",
    color: "#111111",
  },
}

export default function BrandStoryPreviewSection() {
  const { messages } = useI18n()
  const { brandStoryPreview } = messages.home
  const previewImage = createPreviewImage(brandStoryPreview.imageSvgLabel)

  return (
    <section
      id="brand-story-preview"
      aria-labelledby="brand-story-preview-title"
      style={styles.section}
    >
      <div style={styles.shell}>
        <div style={styles.layout}>
          <div style={styles.contentPanel}>
            <p style={styles.eyebrow}>{brandStoryPreview.eyebrow}</p>
            <h2 id="brand-story-preview-title" style={styles.title}>{brandStoryPreview.title}</h2>
            <p style={styles.lead}>{brandStoryPreview.lead}</p>
            <Link to={routes.about} style={styles.action}>
              {brandStoryPreview.ctaLabel}
            </Link>
          </div>

          <div style={styles.imageFrame}>
            <img
              src={previewImage}
              alt={brandStoryPreview.imageAlt}
              style={styles.image}
            />
          </div>

          <div style={styles.detailPanel}>
            <p style={styles.kicker}>{brandStoryPreview.kicker}</p>
            <p style={styles.highlight}>{brandStoryPreview.highlight}</p>
            <ul style={styles.list}>
              {brandStoryPreview.principles.map((principle) => (
                <li key={principle} style={styles.item}>
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
