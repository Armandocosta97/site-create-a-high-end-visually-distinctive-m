const storyMoments = [
  {
    label: "Origine",
    text: "Il progetto nasce dal desiderio di offrire una cucina italiana nitida, contemporanea e leggibile, senza perdere calore umano.",
  },
  {
    label: "Metodo",
    text: "Lavoriamo su ingredienti stagionali, preparazioni essenziali e un servizio che accompagna il tavolo con naturalezza.",
  },
  {
    label: "Atmosfera",
    text: "Sala, luci e ritmo del servizio sono pensati per lasciare spazio alla conversazione e far percepire ogni dettaglio con equilibrio.",
  },
]

const styles = {
  section: {
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
    borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
    background:
      "linear-gradient(180deg, #ffffff 0%, #fffaf5 100%)",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <div style={styles.intro}>
            <p style={styles.eyebrow}>La nostra storia</p>
            <h2 id="story-title" style={styles.title}>
              Una visione italiana resa piu essenziale.
            </h2>
            <p style={styles.lead}>
              Siamo partiti da un&apos;idea semplice: creare un luogo in cui la cucina
              resti riconoscibile, ma venga alleggerita da tutto cio che e superfluo.
              Per questo il menu cambia con il ritmo della stagione, i sapori sono netti
              e ogni piatto cerca equilibrio prima dell&apos;effetto.
            </p>
            <p style={styles.emphasis}>
              Vogliamo che l&apos;esperienza sia contemporanea, curata e accessibile:
              abbastanza precisa da farsi ricordare, abbastanza naturale da far sentire
              ogni ospite al posto giusto.
            </p>
          </div>

          <aside aria-label="Momenti chiave della nostra storia" style={styles.panel}>
            <p style={styles.panelTitle}>Come prendiamo forma</p>
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
