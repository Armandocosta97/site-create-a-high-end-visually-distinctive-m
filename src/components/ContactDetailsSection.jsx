const contactDetails = [
  {
    label: "Email",
    value: "hello@alaiweb.com",
    href: "mailto:hello@alaiweb.com",
    description: "Share your goals, timeline, and current site status.",
  },
  {
    label: "Phone",
    value: "+39 02 9475 1280",
    href: "tel:+390294751280",
    description: "Call for a quick conversation about scope and priorities.",
  },
  {
    label: "WhatsApp",
    value: "Message the studio",
    href: "https://wa.me/393331234567?text=Hi%20Alai%20Web%2C%20I%27d%20like%20to%20start%20a%20project.",
    description:
      "Ideal for early project questions, quick feedback, and scheduling the first call.",
    isDark: true,
    external: true,
  },
]

const styles = {
  section: {
    padding: "0 1.5rem 3rem",
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
      "linear-gradient(135deg, rgba(249, 115, 22, 0.14), rgba(17, 17, 17, 0.04))",
    border: "1px solid rgba(17, 17, 17, 0.08)",
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
    minHeight: "3rem",
    padding: "0.875rem 1.5rem",
    borderRadius: "999px",
    backgroundColor: "#111111",
    color: "#ffffff",
    fontWeight: 700,
    textDecoration: "none",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
  },
  card: {
    display: "grid",
    gap: "0.75rem",
    padding: "1.5rem",
    borderRadius: "1.5rem",
    backgroundColor: "#f5f5f5",
    color: "#111111",
    textDecoration: "none",
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
  },
  description: {
    color: "rgba(17, 17, 17, 0.72)",
    lineHeight: 1.6,
  },
  descriptionDark: {
    color: "rgba(255, 255, 255, 0.72)",
  },
}

export default function ContactDetailsSection() {
  return (
    <section id="contact-details" aria-labelledby="contact-details-title" style={styles.section}>
      <div style={styles.shell}>
        <h2 id="contact-details-title" style={styles.title}>
          Project conversations, without the friction.
        </h2>
        <p style={styles.lead}>
          Use the channel that fits your workflow. Email is best for detailed briefs,
          phone is best for quick alignment, and WhatsApp works well when you want to
          move fast.
        </p>
        <div style={styles.ctaBlock}>
          <h3 style={styles.ctaTitle}>Prefer to start with a quick WhatsApp message?</h3>
          <p style={styles.ctaText}>
            Send a short brief and we will reply with the next best step for your
            project, timeline, and budget range.
          </p>
          <a
            href="https://wa.me/393331234567?text=Hi%20Alai%20Web%2C%20I%27d%20like%20to%20start%20a%20project."
            target="_blank"
            rel="noreferrer"
            style={styles.ctaAction}
          >
            Chat on WhatsApp
          </a>
        </div>
        <div style={styles.grid}>
          {contactDetails.map((item) => (
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
