const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
    background:
      "radial-gradient(circle at top left, rgba(249, 115, 22, 0.16), transparent 30%), linear-gradient(135deg, #fff8f1 0%, #ffffff 50%, #f8fafc 100%)",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
    alignItems: "end",
  },
  content: {
    display: "grid",
    gap: "1.25rem",
    maxWidth: "760px",
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
    fontSize: "clamp(3rem, 9vw, 5.75rem)",
    lineHeight: 0.94,
    letterSpacing: "-0.05em",
    color: "#111111",
    textWrap: "balance",
  },
  lead: {
    margin: 0,
    maxWidth: "40rem",
    fontSize: "clamp(1.05rem, 2.6vw, 1.28rem)",
    lineHeight: 1.75,
    color: "#52525b",
  },
  panel: {
    display: "grid",
    gap: "0.85rem",
    padding: "clamp(1.5rem, 4vw, 2rem)",
    borderRadius: "1.75rem",
    backgroundColor: "#0f172a",
    boxShadow: "0 24px 70px rgba(15, 23, 42, 0.12)",
  },
  panelLabel: {
    margin: 0,
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#fb923c",
  },
  panelTitle: {
    margin: 0,
    fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
    lineHeight: 1.05,
    letterSpacing: "-0.04em",
    color: "#ffffff",
  },
  panelText: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "rgba(255, 255, 255, 0.76)",
  },
}

export default function MenuHeroSection() {
  return (
    <section id="menu-hero" aria-labelledby="menu-hero-title" style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.layout}>
          <div style={styles.content}>
            <p style={styles.eyebrow}>Menu</p>
            <h1 id="menu-hero-title" style={styles.title}>
              A seasonal menu built for long dinners and easy returns.
            </h1>
            <p style={styles.lead}>
              Explore the kitchen&apos;s current direction across antipasti, fresh pasta,
              mains, and desserts. Each section is shaped around simple ingredients,
              clear flavors, and a pace that suits shared dining.
            </p>
          </div>

          <aside aria-label="Menu direction" style={styles.panel}>
            <p style={styles.panelLabel}>Current direction</p>
            <p style={styles.panelTitle}>Balanced courses, bright finishes, deliberate pacing.</p>
            <p style={styles.panelText}>
              The menu moves from lighter opening plates into richer pasta and wood-fired
              mains, ending with desserts that stay clean and precise.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
