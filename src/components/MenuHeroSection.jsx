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
    position: "relative",
    zIndex: 1,
  },
  layout: {
    display: "grid",
    gap: "1.25rem",
  },
  heroBand: {
    display: "grid",
    gap: "1.75rem",
    padding: "clamp(1.75rem, 4vw, 2.5rem)",
    borderRadius: "2rem",
    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.8fr)",
    background:
      "linear-gradient(120deg, #111827 0%, #111827 56%, #ea580c 56%, #fb923c 100%)",
    boxShadow: "0 28px 90px rgba(15, 23, 42, 0.18)",
    alignItems: "stretch",
  },
  content: {
    display: "grid",
    gap: "1.25rem",
    maxWidth: "46rem",
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
    fontSize: "clamp(3rem, 9vw, 5.75rem)",
    lineHeight: 0.94,
    letterSpacing: "-0.05em",
    color: "#ffffff",
    textWrap: "balance",
  },
  lead: {
    margin: 0,
    maxWidth: "40rem",
    fontSize: "clamp(1.05rem, 2.6vw, 1.28rem)",
    lineHeight: 1.75,
    color: "rgba(255, 255, 255, 0.74)",
  },
  panel: {
    display: "grid",
    gap: "1rem",
    padding: "clamp(1.5rem, 3vw, 2rem)",
    borderRadius: "1.5rem",
    background: "linear-gradient(160deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.08))",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    alignContent: "start",
  },
  panelLabel: {
    margin: 0,
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#111827",
  },
  panelTitle: {
    margin: 0,
    fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
    lineHeight: 1.05,
    letterSpacing: "-0.04em",
    color: "#111827",
  },
  panelText: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "rgba(17, 24, 39, 0.86)",
  },
  stats: {
    display: "grid",
    gap: "0.9rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  },
  stat: {
    display: "grid",
    gap: "0.35rem",
  },
  statValue: {
    margin: 0,
    fontSize: "1.65rem",
    fontWeight: 700,
    letterSpacing: "-0.04em",
    color: "#fb923c",
  },
  statLabel: {
    margin: 0,
    fontSize: "0.92rem",
    lineHeight: 1.6,
    color: "rgba(255, 255, 255, 0.68)",
  },
}

export default function MenuHeroSection() {
  return (
    <section id="menu-hero" aria-labelledby="menu-hero-title" style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.layout}>
          <div style={styles.heroBand}>
            <div style={styles.content}>
              <p style={styles.eyebrow}>Servizi</p>
              <h1 id="menu-hero-title" style={styles.title}>
                Soluzioni web pensate per dare piu forza al tuo business.
              </h1>
              <p style={styles.lead}>
                Dalla landing page al sito completo, Alai Web progetta e sviluppa
                esperienze digitali chiare, veloci e coerenti con il posizionamento del
                brand. Ogni intervento nasce per migliorare immagine, fiducia e contatti.
              </p>
              <div style={styles.stats}>
                <div style={styles.stat}>
                  <p style={styles.statValue}>Design</p>
                  <p style={styles.statLabel}>Direzione visiva pulita e credibile.</p>
                </div>
                <div style={styles.stat}>
                  <p style={styles.statValue}>Speed</p>
                  <p style={styles.statLabel}>Build leggere, veloci e stabili.</p>
                </div>
                <div style={styles.stat}>
                  <p style={styles.statValue}>Focus</p>
                  <p style={styles.statLabel}>Struttura orientata all'azione.</p>
                </div>
              </div>
            </div>

            <aside aria-label="Direzione dei servizi" style={styles.panel}>
              <p style={styles.panelLabel}>Il nostro focus</p>
              <p style={styles.panelTitle}>
                Design credibile, performance reali, struttura orientata alla conversione.
              </p>
              <p style={styles.panelText}>
                Niente effetti gratuiti e niente complessita inutile. Solo cio che serve
                per far apparire meglio il brand, migliorare la leggibilita e portare
                l'utente verso il contatto.
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
