import { Link } from "react-router-dom"

const principles = [
  "Clarity in structure, so visitors always know where to go next.",
  "Restraint in design, so every detail supports the message instead of distracting from it.",
  "Performance in delivery, so the final site feels fast, polished, and dependable.",
]

const styles = {
  section: {
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
    background:
      "linear-gradient(180deg, #ffffff 0%, #ffffff 28%, #f8fafc 100%)",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
  return (
    <section
      id="brand-story-preview"
      aria-labelledby="brand-story-preview-title"
      style={styles.section}
    >
      <div style={styles.shell}>
        <div style={styles.layout}>
          <div style={styles.contentPanel}>
            <p style={styles.eyebrow}>Brand story preview</p>
            <h2 id="brand-story-preview-title" style={styles.title}>
              Designed with a calm hand and a technical eye.
            </h2>
            <p style={styles.lead}>
              Alai Web builds websites for businesses that want something cleaner than a
              template and more useful than a visual refresh. Every project aims to feel
              editorial, fast, and easy to trust.
            </p>
            <Link to="/chi-siamo" style={styles.action}>
              Learn how Alai Web works
            </Link>
          </div>

          <div style={styles.detailPanel}>
            <p style={styles.kicker}>What drives the work</p>
            <p style={styles.highlight}>
              The goal is not to add more interface. It is to make the right message land
              faster.
            </p>
            <ul style={styles.list}>
              {principles.map((principle) => (
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
