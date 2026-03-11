import ContactHeroSection from "../components/ContactHeroSection"
import ContactDetailsSection from "../components/ContactDetailsSection"

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
      <ContactHeroSection />
      <ContactDetailsSection />

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
