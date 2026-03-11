const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 6vw, 4rem)",
    background: "transparent",
  },
  shell: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gap: "1.5rem",
  },
  eyebrow: {
    margin: 0,
    color: "#f97316",
    fontSize: "0.875rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
  title: {
    margin: 0,
    maxWidth: "12ch",
    fontSize: "clamp(3rem, 8vw, 5.5rem)",
    lineHeight: 0.95,
    letterSpacing: "-0.05em",
    textWrap: "balance",
    color: "#111111",
  },
  lead: {
    margin: 0,
    maxWidth: "38rem",
    fontSize: "1.125rem",
    lineHeight: 1.7,
    color: "rgba(17, 17, 17, 0.78)",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  },
  primaryAction: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "3rem",
    padding: "0.875rem 1.5rem",
    borderRadius: "999px",
    backgroundColor: "#f97316",
    color: "#ffffff",
    fontWeight: 700,
    textDecoration: "none",
  },
  secondaryAction: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "3rem",
    padding: "0.875rem 1.5rem",
    borderRadius: "999px",
    border: "1px solid rgba(17, 17, 17, 0.14)",
    color: "#111111",
    fontWeight: 700,
    textDecoration: "none",
  },
}

export default function ContactHeroSection() {
  return (
    <section id="contact-hero" aria-labelledby="contact-hero-title" style={styles.section}>
      <div style={styles.shell}>
        <p style={styles.eyebrow}>Contact</p>
        <h1 id="contact-hero-title" style={styles.title}>
          Let&apos;s build something sharp and effective.
        </h1>
        <p style={styles.lead}>
          Reach out with your business goals, launch timeline, and the kind of
          digital presence you need. We reply with a clear next step, not a vague
          sales sequence.
        </p>
        <div style={styles.actions}>
          <a href="mailto:alai.web.info@gmail.com" style={styles.primaryAction}>
            Tell us about your idea
          </a>
          <a
            href="https://wa.me/393454639301?text=Hi%20Alai%20Web%2C%20I%27d%20like%20to%20start%20a%20project."
            target="_blank"
            rel="noreferrer"
            style={styles.secondaryAction}
          >
            Start on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
