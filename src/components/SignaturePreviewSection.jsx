const signatureItems = [
  {
    number: "01",
    title: "Direzione visiva nitida",
    description:
      "Tipografia forte, gerarchia chiara e un layout che valorizza il brand senza sembrare un template.",
  },
  {
    number: "02",
    title: "Build leggere e veloci",
    description:
      "Decisioni front-end essenziali per mantenere il sito rapido, leggibile e solido su ogni schermo.",
  },
  {
    number: "03",
    title: "Struttura pronta per crescere",
    description:
      "Markup semantico, contenuti ordinati e pagine pensate per farsi trovare e generare contatti.",
  },
]

const styles = {
  section: {
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
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
          <p style={styles.eyebrow}>Cosa facciamo</p>
          <h2 id="signature-preview-title" style={styles.title}>
            Tre principi guidano ogni progetto firmato Alai Web.
          </h2>
          <p style={styles.lead}>
            Ogni sito nasce dall'equilibrio tra immagine, performance e chiarezza.
            L'obiettivo non e impressionare per pochi secondi, ma aiutare un'attivita
            reale a trasformare visite in richieste concrete.
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
