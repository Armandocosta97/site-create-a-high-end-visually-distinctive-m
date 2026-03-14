import { Link } from "react-router-dom"
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
    gap: "2.5rem",
    alignItems: "end",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#f97316",
  },
  content: {
    maxWidth: "760px",
    display: "grid",
    gap: "1.5rem",
  },
  title: {
    margin: 0,
    fontSize: "clamp(3.5rem, 10vw, 7rem)",
    lineHeight: 0.95,
    letterSpacing: "-0.05em",
    color: "#111111",
    textWrap: "balance",
  },
  lead: {
    margin: 0,
    maxWidth: "42rem",
    fontSize: "clamp(1.05rem, 2.6vw, 1.35rem)",
    lineHeight: 1.7,
    color: "#3f3f46",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.9rem",
    marginTop: "0.25rem",
  },
  primaryAction: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "3.5rem",
    padding: "0.95rem 1.4rem",
    borderRadius: "999px",
    backgroundColor: "#f97316",
    color: "#ffffff",
    fontWeight: 700,
  },
  secondaryAction: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "3.5rem",
    padding: "0.95rem 1.4rem",
    borderRadius: "999px",
    border: "1px solid rgba(17, 17, 17, 0.14)",
    color: "#111111",
    fontWeight: 700,
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    backdropFilter: "blur(12px)",
  },
  metrics: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
    gap: "1rem",
    padding: "1.25rem",
    borderRadius: "1.5rem",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    boxShadow: "0 24px 80px rgba(15, 23, 42, 0.12)",
  },
  metric: {
    display: "grid",
    gap: "0.2rem",
    minWidth: 0,
  },
  metricValue: {
    fontSize: "1.8rem",
    fontWeight: 700,
    letterSpacing: "-0.04em",
  },
  metricLabel: {
    margin: 0,
    fontSize: "0.92rem",
    color: "rgba(255, 255, 255, 0.72)",
  },
}

export default function HeroSection() {
  const { messages } = useI18n()
  const { hero } = messages.home

  return (
    <section id="hero" aria-labelledby="home-hero-title" style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.content}>
          <p style={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 id="home-hero-title" style={styles.title}>{hero.title}</h1>
          <p style={styles.lead}>{hero.lead}</p>
          <div style={styles.actions}>
            <Link to={hero.primaryCta.to} style={styles.primaryAction}>
              {hero.primaryCta.label}
            </Link>
            <Link to={hero.secondaryCta.to} style={styles.secondaryAction}>
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div aria-label={hero.metricsAriaLabel} style={styles.metrics} className="home-metrics-deck">
          {hero.metrics.map((metric) => (
            <div key={metric.value} style={styles.metric} className="home-metric-card">
              <span style={styles.metricValue}>{metric.value}</span>
              <p style={styles.metricLabel}>{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
