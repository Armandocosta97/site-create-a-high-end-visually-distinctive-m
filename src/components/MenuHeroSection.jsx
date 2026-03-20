import { useI18n } from "../i18n/useI18n"

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
    gridTemplateColumns: "minmax(0, 1.58fr) minmax(240px, 0.6fr)",
    background:
      "linear-gradient(104deg, #111827 0%, #111827 63%, #ea580c 63%, #fb923c 100%)",
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
    maxWidth: "34rem",
    justifySelf: "end",
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
  const { messages } = useI18n()
  const { hero } = messages.menu

  return (
    <section id="menu-hero" aria-labelledby="menu-hero-title" style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.layout}>
          <div style={styles.heroBand} className="menu-hero-band">
            <div style={styles.content} className="menu-hero-content">
              <p style={styles.eyebrow}>{hero.eyebrow}</p>
              <h1 id="menu-hero-title" style={styles.title}>{hero.title}</h1>
              <p style={styles.lead}>{hero.lead}</p>
              <div style={styles.stats} className="menu-hero-stats">
                {hero.stats.map((stat) => (
                  <div key={stat.value} style={styles.stat} className="menu-hero-stat">
                    <p style={styles.statValue} className="menu-hero-stat-value">{stat.value}</p>
                    <p style={styles.statLabel} className="menu-hero-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside aria-label={hero.panelAriaLabel} style={styles.panel} className="menu-hero-panel">
              <p style={styles.panelLabel} className="menu-hero-panel-label">{hero.panelLabel}</p>
              <p style={styles.panelTitle} className="menu-hero-panel-title">{hero.panelTitle}</p>
              <p style={styles.panelText} className="menu-hero-panel-text">{hero.panelText}</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
