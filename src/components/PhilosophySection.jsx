const principles = [
  {
    title: "Semplicita leggibile",
    text: "Riduciamo il rumore visivo per lasciare spazio a messaggio, gerarchia e call to action davvero utili.",
  },
  {
    title: "Tecnica senza ostentazione",
    text: "La qualita tecnica non deve mettersi in mostra: deve far caricare il sito velocemente e farlo funzionare bene.",
  },
  {
    title: "Esperienza che converte",
    text: "Ogni pagina deve accompagnare l'utente con fluidita, fino al contatto o alla richiesta di preventivo.",
  },
]

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
    background:
      "linear-gradient(135deg, #0f172a 0%, #111827 56%, #1e293b 100%)",
  },
  glow: {
    position: "absolute",
    inset: "auto auto -8rem -6rem",
    width: "20rem",
    height: "20rem",
    borderRadius: "999px",
    background: "radial-gradient(circle, rgba(249, 115, 22, 0.34), transparent 68%)",
    pointerEvents: "none",
  },
  shell: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1280px",
    margin: "0 auto",
  },
  layout: {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    alignItems: "start",
  },
  intro: {
    display: "grid",
    gap: "1.25rem",
    maxWidth: "42rem",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#fb923c",
  },
  title: {
    margin: 0,
    maxWidth: "11ch",
    fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
    lineHeight: 0.94,
    letterSpacing: "-0.05em",
    color: "#ffffff",
    textWrap: "balance",
  },
  lead: {
    margin: 0,
    fontSize: "clamp(1.05rem, 2.4vw, 1.22rem)",
    lineHeight: 1.8,
    color: "rgba(255, 255, 255, 0.78)",
  },
  emphasis: {
    margin: 0,
    maxWidth: "34rem",
    fontSize: "0.98rem",
    lineHeight: 1.75,
    color: "rgba(255, 255, 255, 0.64)",
  },
  panel: {
    display: "grid",
    gap: "1rem",
    alignContent: "start",
    padding: "clamp(1.5rem, 4vw, 2rem)",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    borderRadius: "1.75rem",
    background: "rgba(255, 255, 255, 0.04)",
    backdropFilter: "blur(8px)",
  },
  panelTitle: {
    margin: 0,
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#fdba74",
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "grid",
    gap: "1rem",
  },
  item: {
    display: "grid",
    gap: "0.45rem",
    paddingTop: "1rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  },
  itemTitle: {
    margin: 0,
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#ffffff",
  },
  itemText: {
    margin: 0,
    fontSize: "0.98rem",
    lineHeight: 1.7,
    color: "rgba(255, 255, 255, 0.72)",
  },
}

export default function PhilosophySection() {
  return (
    <section id="philosophy" aria-labelledby="philosophy-title" style={styles.section}>
      <div aria-hidden="true" style={styles.glow} />
      <div style={styles.shell}>
        <div style={styles.layout}>
          <div style={styles.intro}>
            <p style={styles.eyebrow}>La nostra filosofia</p>
            <h2 id="philosophy-title" style={styles.title}>
              Togliere il superfluo, lasciare spazio a cio che conta.
            </h2>
            <p style={styles.lead}>
              Crediamo che un buon sito funzioni quando ogni elemento ha un ruolo
              preciso: contenuti chiari, struttura leggibile, performance solide e un
              design capace di dare autorevolezza senza complicare l'esperienza.
            </p>
            <p style={styles.emphasis}>
              Per questo scegliamo equilibrio prima dell'effetto, leggibilita prima
              dell'eccesso e decisioni progettuali che aiutino davvero chi il sito lo
              deve usare, non solo guardare.
            </p>
          </div>

          <aside aria-label="Principi che guidano l'agenzia" style={styles.panel}>
            <p style={styles.panelTitle}>I principi che seguiamo</p>
            <ul style={styles.list}>
              {principles.map((principle) => (
                <li key={principle.title} style={styles.item}>
                  <p style={styles.itemTitle}>{principle.title}</p>
                  <p style={styles.itemText}>{principle.text}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
