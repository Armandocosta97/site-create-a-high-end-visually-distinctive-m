import siteConfig from "../config/siteConfig"
import { useI18n } from "../i18n/useI18n"

const styles = {
  section: {
    padding: "0 clamp(1rem, 4vw, 1.5rem) 3rem",
  },
  shell: {
    maxWidth: "72rem",
    margin: "0 auto",
    display: "grid",
    gap: "1.5rem",
  },
  title: {
    margin: 0,
    fontSize: "clamp(2rem, 5vw, 3.25rem)",
  },
  lead: {
    margin: 0,
    maxWidth: "42rem",
    color: "rgba(17, 17, 17, 0.72)",
    lineHeight: 1.7,
  },
  ctaBlock: {
    display: "grid",
    gap: "1rem",
    padding: "1.5rem",
    borderRadius: "1.75rem",
    background:
      "linear-gradient(135deg, rgba(249, 115, 22, 0.18), rgba(255, 255, 255, 0.42))",
    border: "1px solid rgba(17, 17, 17, 0.08)",
    backdropFilter: "blur(12px)",
  },
  ctaTitle: {
    margin: 0,
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    color: "#111111",
  },
  ctaText: {
    margin: 0,
    maxWidth: "42rem",
    color: "rgba(17, 17, 17, 0.72)",
    lineHeight: 1.7,
  },
  ctaAction: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    maxWidth: "100%",
    minHeight: "3rem",
    padding: "0.875rem 1.5rem",
    borderRadius: "999px",
    backgroundColor: "#111111",
    color: "#ffffff",
    fontWeight: 700,
    textDecoration: "none",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
    gap: "1rem",
  },
  card: {
    display: "grid",
    gap: "0.75rem",
    padding: "1.5rem",
    borderRadius: "1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    color: "#111111",
    textDecoration: "none",
    backdropFilter: "blur(12px)",
  },
  cardDark: {
    backgroundColor: "#111111",
    color: "#ffffff",
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#f97316",
  },
  value: {
    fontSize: "1.25rem",
    overflowWrap: "anywhere",
  },
  description: {
    color: "rgba(17, 17, 17, 0.72)",
    lineHeight: 1.6,
    overflowWrap: "anywhere",
  },
  descriptionDark: {
    color: "rgba(255, 255, 255, 0.72)",
  },
}

export default function ContactDetailsSection() {
  const { messages } = useI18n()
  const { contact } = messages

  return (
    <section id="contact-details" aria-labelledby="contact-details-title" style={styles.section}>
      <div style={styles.shell}>
        <h2 id="contact-details-title" style={styles.title}>{contact.details.title}</h2>
        <p style={styles.lead}>{contact.details.lead}</p>
        <div style={styles.ctaBlock}>
          <h3 style={styles.ctaTitle}>{contact.details.ctaTitle}</h3>
          <p style={styles.ctaText}>{contact.details.ctaText}</p>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
            style={styles.ctaAction}
          >
            {contact.details.ctaLabel}
          </a>
        </div>
        <div style={styles.grid}>
          {contact.details.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              style={{
                ...styles.card,
                ...(item.isDark ? styles.cardDark : null),
              }}
            >
              <span style={styles.label}>{item.label}</span>
              <strong style={styles.value}>{item.value}</strong>
              <span
                style={{
                  ...styles.description,
                  ...(item.isDark ? styles.descriptionDark : null),
                }}
              >
                {item.description}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
