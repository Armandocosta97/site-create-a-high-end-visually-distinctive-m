const values = [
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
]

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
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
              Un'agenzia web costruita su design, velocita e sostanza.
            </h1>
            <p style={styles.lead}>
              Alai Web nasce per creare siti moderni per piccole imprese e realta
              indipendenti che vogliono comunicare meglio online. Ogni scelta, dalla
              gerarchia dei contenuti al codice, punta a rendere il progetto piu chiaro,
              piu rapido e piu efficace.
            </p>
            <p style={styles.note}>Meno rumore visivo, piu chiarezza, piu risultati.</p>
          </div>

          <aside aria-label="Valori dell'agenzia" style={styles.panel}>
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
