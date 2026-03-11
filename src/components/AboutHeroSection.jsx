const values = [
  {
    title: "Stagionalita",
    text: "Il menu segue il tempo degli ingredienti, con piatti che cambiano senza perdere equilibrio.",
  },
  {
    title: "Precisione",
    text: "Ogni dettaglio, dalla cucina alla sala, e misurato per mantenere il servizio chiaro e naturale.",
  },
  {
    title: "Accoglienza",
    text: "L'esperienza resta contemporanea, ma sempre calda, leggibile e pensata per far tornare le persone.",
  },
]

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
    background:
      "radial-gradient(circle at top left, rgba(249, 115, 22, 0.16), transparent 28%), linear-gradient(135deg, #fffaf5 0%, #ffffff 52%, #f8fafc 100%)",
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
    maxWidth: "11ch",
    fontSize: "clamp(3rem, 9vw, 5.9rem)",
    lineHeight: 0.92,
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
  note: {
    margin: 0,
    fontSize: "0.95rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#0f172a",
  },
  panel: {
    display: "grid",
    gap: "1rem",
    padding: "clamp(1.5rem, 4vw, 2rem)",
    borderRadius: "1.75rem",
    backgroundColor: "#0f172a",
    boxShadow: "0 24px 70px rgba(15, 23, 42, 0.12)",
  },
  panelTitle: {
    margin: 0,
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#fb923c",
  },
  valueList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "grid",
    gap: "1rem",
  },
  valueItem: {
    display: "grid",
    gap: "0.35rem",
    paddingTop: "1rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.12)",
  },
  valueHeading: {
    margin: 0,
    fontSize: "1.15rem",
    lineHeight: 1.2,
    color: "#ffffff",
  },
  valueText: {
    margin: 0,
    fontSize: "0.98rem",
    lineHeight: 1.7,
    color: "rgba(255, 255, 255, 0.74)",
  },
}

export default function AboutHeroSection() {
  return (
    <section id="about-hero" aria-labelledby="about-hero-title" style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.layout}>
          <div style={styles.content}>
            <p style={styles.eyebrow}>Chi siamo</p>
            <h1 id="about-hero-title" style={styles.title}>
              Un ristorante costruito sulla cura dei dettagli.
            </h1>
            <p style={styles.lead}>
              La nostra cucina parte da ingredienti stagionali, tecnica pulita e un
              servizio attento. Ogni scelta, dal menu alla sala, e pensata per offrire
              un'esperienza contemporanea ma accogliente.
            </p>
            <p style={styles.note}>Cucina essenziale, ritmo preciso, ospitalita senza eccessi.</p>
          </div>

          <aside aria-label="Valori del ristorante" style={styles.panel}>
            <p style={styles.panelTitle}>Cosa guida il nostro lavoro</p>
            <ul style={styles.valueList}>
              {values.map((value) => (
                <li key={value.title} style={styles.valueItem}>
                  <p style={styles.valueHeading}>{value.title}</p>
                  <p style={styles.valueText}>{value.text}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
