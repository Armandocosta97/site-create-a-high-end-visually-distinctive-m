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
]

const officeHours = [
  { day: "Monday", hours: "09:00 - 18:00" },
  { day: "Tuesday", hours: "09:00 - 18:00" },
  { day: "Wednesday", hours: "09:00 - 18:00" },
  { day: "Thursday", hours: "09:00 - 18:00" },
  { day: "Friday", hours: "09:00 - 16:00" },
  { day: "Saturday", hours: "By request" },
  { day: "Sunday", hours: "Closed" },
]

export default function Contatti() {
  return (
    <main>
      <section
        id="contact-hero"
        style={{
          padding: "5rem 1.5rem 3rem",
          background:
            "linear-gradient(180deg, rgba(249, 115, 22, 0.08) 0%, rgba(255, 255, 255, 1) 70%)",
        }}
      >
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            display: "grid",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#f97316",
              fontSize: "0.875rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Contact
          </p>
          <h1
            style={{
              margin: 0,
              maxWidth: "12ch",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              lineHeight: 0.95,
            }}
          >
            Let&apos;s build something sharp and effective.
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: "38rem",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "rgba(17, 17, 17, 0.78)",
            }}
          >
            Reach out with your business goals, launch timeline, and the kind of
            digital presence you need. We reply with a clear next step, not a vague
            sales sequence.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <a
              href="mailto:hello@alaiweb.com"
              style={{
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
              }}
            >
              Tell us about your idea
            </a>
            <a
              href="https://wa.me/393331234567?text=Hi%20Alai%20Web%2C%20I%27d%20like%20to%20start%20a%20project."
              target="_blank"
              rel="noreferrer"
              style={{
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
              }}
            >
              Start on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="contact-details" style={{ padding: "0 1.5rem 3rem" }}>
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            display: "grid",
            gap: "1.5rem",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
            Project conversations, without the friction.
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: "42rem",
              color: "rgba(17, 17, 17, 0.72)",
              lineHeight: 1.7,
            }}
          >
            Use the channel that fits your workflow. Email is best for detailed
            briefs, phone is best for quick alignment, and WhatsApp works well when
            you want to move fast.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {contactDetails.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  display: "grid",
                  gap: "0.75rem",
                  padding: "1.5rem",
                  borderRadius: "1.5rem",
                  backgroundColor: "#f5f5f5",
                  color: "#111111",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#f97316",
                  }}
                >
                  {item.label}
                </span>
                <strong style={{ fontSize: "1.25rem" }}>{item.value}</strong>
                <span style={{ color: "rgba(17, 17, 17, 0.72)", lineHeight: 1.6 }}>
                  {item.description}
                </span>
              </a>
            ))}
            <a
              href="https://wa.me/393331234567?text=Hi%20Alai%20Web%2C%20I%27d%20like%20to%20start%20a%20project."
              target="_blank"
              rel="noreferrer"
              style={{
                display: "grid",
                gap: "0.75rem",
                padding: "1.5rem",
                borderRadius: "1.5rem",
                backgroundColor: "#111111",
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#f97316",
                }}
              >
                WhatsApp
              </span>
              <strong style={{ fontSize: "1.25rem" }}>Message the studio</strong>
              <span style={{ color: "rgba(255, 255, 255, 0.72)", lineHeight: 1.6 }}>
                Ideal for early project questions, quick feedback, and scheduling the
                first call.
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="opening-hours" style={{ padding: "0 1.5rem 5rem" }}>
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "2rem",
            borderRadius: "2rem",
            backgroundColor: "#0f172a",
            color: "#ffffff",
            display: "grid",
            gap: "1.5rem",
          }}
        >
          <div style={{ display: "grid", gap: "0.75rem" }}>
            <h2 style={{ margin: 0, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Studio hours
            </h2>
            <p style={{ margin: 0, maxWidth: "38rem", color: "rgba(255, 255, 255, 0.72)" }}>
              We keep our calendar focused so projects move quickly. If your launch is
              urgent, mention the deadline in your first message and we will confirm
              availability directly.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gap: "0.75rem",
            }}
          >
            {officeHours.map((entry) => (
              <div
                key={entry.day}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <span>{entry.day}</span>
                <span style={{ color: "rgba(255, 255, 255, 0.72)" }}>{entry.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
