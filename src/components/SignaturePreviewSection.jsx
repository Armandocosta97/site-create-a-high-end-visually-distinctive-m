const signatureItems = [
  {
    number: "01",
    title: "Refined visual systems",
    description:
      "Clear typography, measured spacing, and art direction that gives small businesses a sharper digital presence.",
  },
  {
    number: "02",
    title: "Fast, lightweight builds",
    description:
      "Lean front-end decisions keep the experience responsive, readable, and easy to navigate on every screen.",
  },
  {
    number: "03",
    title: "SEO-ready structure",
    description:
      "Semantic markup and purposeful content layouts create a stronger foundation for visibility and conversion.",
  },
]

const styles = {
  section: {
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
    background:
      "linear-gradient(180deg, #ffffff 0%, #fff7f1 52%, #ffffff 100%)",
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
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    lineHeight: 0.95,
    letterSpacing: "-0.05em",
    color: "#111111",
    textWrap: "balance",
  },
  lead: {
    margin: 0,
    maxWidth: "44rem",
    fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
    lineHeight: 1.7,
    color: "#52525b",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
  },
  card: {
    minHeight: "100%",
    display: "grid",
    gap: "1rem",
    padding: "1.5rem",
    border: "1px solid rgba(17, 17, 17, 0.08)",
    borderRadius: "1.75rem",
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    boxShadow: "0 18px 48px rgba(15, 23, 42, 0.08)",
  },
  number: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "3rem",
    height: "3rem",
    borderRadius: "999px",
    backgroundColor: "#111111",
    color: "#ffffff",
    fontSize: "0.95rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
  },
  cardTitle: {
    margin: 0,
    fontSize: "1.45rem",
    lineHeight: 1.05,
    letterSpacing: "-0.04em",
    color: "#111111",
  },
  description: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "#52525b",
  },
}

export default function SignaturePreviewSection() {
  return (
    <section
      id="signature-preview"
      aria-labelledby="signature-preview-title"
      style={styles.section}
    >
      <div style={styles.shell}>
        <div style={styles.intro}>
          <p style={styles.eyebrow}>Signature preview</p>
          <h2 id="signature-preview-title" style={styles.title}>
            Three traits shape every Alai Web project.
          </h2>
          <p style={styles.lead}>
            The work is intentionally balanced: strong visual identity, technical restraint,
            and a structure that helps real businesses turn attention into inquiries.
          </p>
        </div>

        <div style={styles.grid}>
          {signatureItems.map((item) => (
            <article key={item.number} style={styles.card}>
              <span aria-hidden="true" style={styles.number}>
                {item.number}
              </span>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.description}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
