const storyMoments = [
  {
    label: "Origine",
    text: "Alai Web nasce dall'idea che molte attivita abbiano bisogno di un sito piu semplice, piu curato e meno standardizzato.",
  },
  {
    label: "Metodo",
    text: "Ogni progetto parte da obiettivi, struttura e contenuti, poi prende forma con design editoriale e sviluppo leggero.",
  },
  {
    label: "Direzione",
    text: "Cerchiamo sempre equilibrio tra immagine, performance e utilita, senza appesantire il sito con elementi superflui.",
  },
]

const styles = {
  section: {
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
    borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
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
    gap: "2rem",
    gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 0.8fr)",
    alignItems: "start",
  },
  intro: {
    display: "grid",
    gap: "1.25rem",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#f97316",
  },
  title: {
    margin: 0,
    maxWidth: "12ch",
    fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
    lineHeight: 0.95,
    letterSpacing: "-0.05em",
    color: "#111111",
    textWrap: "balance",
  },
  lead: {
    margin: 0,
    maxWidth: "42rem",
    fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)",
    lineHeight: 1.8,
    color: "#475569",
  },
  emphasis: {
    margin: 0,
    maxWidth: "32rem",
    fontSize: "1rem",
    lineHeight: 1.8,
    color: "#0f172a",
  },
  panel: {
    display: "grid",
    gap: "1rem",
    padding: "clamp(1.5rem, 4vw, 2rem)",
    borderRadius: "1.5rem",
    backgroundColor: "#0f172a",
    boxShadow: "0 20px 60px rgba(15, 23, 42, 0.1)",
  },
  panelTitle: {
    margin: 0,
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#fb923c",
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
    gap: "0.35rem",
    paddingTop: "1rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.12)",
  },
  itemLabel: {
    margin: 0,
    fontSize: "1rem",
    fontWeight: 700,
    color: "#ffffff",
  },
  itemText: {
    margin: 0,
    fontSize: "0.98rem",
    lineHeight: 1.7,
    color: "rgba(255, 255, 255, 0.76)",
  },
}

export default function StorySection() {
  return (
    <section id="story" aria-labelledby="story-title" style={styles.section}>
      <div style={styles.shell}>
        <div
          style={{
            ...styles.layout,
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          }}
        >
          <div style={styles.intro}>
            <p style={styles.eyebrow}>La nostra storia</p>
            <h2 id="story-title" style={styles.title}>
              Una visione semplice: fare siti che aiutano davvero il business.
            </h2>
            <p style={styles.lead}>
              Siamo partiti da un'idea precisa: molte aziende hanno siti lenti,
              confusi o poco credibili, non per mancanza di valore, ma per una
              comunicazione digitale costruita male. Per questo lavoriamo su contenuti,
              layout e sviluppo in modo coordinato, cosi ogni pagina ha un ruolo chiaro.
            </p>
            <p style={styles.emphasis}>
              Il risultato deve essere contemporaneo ma utile: abbastanza curato da
              distinguerti, abbastanza semplice da essere capito e abbastanza solido da
              sostenere la crescita nel tempo.
            </p>
          </div>

          <aside aria-label="Momenti chiave della nostra storia" style={styles.panel}>
            <p style={styles.panelTitle}>Come lavoriamo</p>
            <ul style={styles.list}>
              {storyMoments.map((moment) => (
                <li key={moment.label} style={styles.item}>
                  <p style={styles.itemLabel}>{moment.label}</p>
                  <p style={styles.itemText}>{moment.text}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
