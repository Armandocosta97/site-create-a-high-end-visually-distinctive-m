const officeHours = [
  { day: "Monday", hours: "09:00 - 18:00" },
  { day: "Tuesday", hours: "09:00 - 18:00" },
  { day: "Wednesday", hours: "09:00 - 18:00" },
  { day: "Thursday", hours: "09:00 - 18:00" },
  { day: "Friday", hours: "09:00 - 16:00" },
  { day: "Saturday", hours: "By request" },
  { day: "Sunday", hours: "Closed" },
]

const styles = {
  section: {
    padding: "0 clamp(1rem, 4vw, 1.5rem) 5rem",
  },
  shell: {
    maxWidth: "72rem",
    margin: "0 auto",
    padding: "clamp(1.5rem, 4vw, 2rem)",
    borderRadius: "2rem",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    display: "grid",
    gap: "1.5rem",
  },
  header: {
    display: "grid",
    gap: "0.75rem",
  },
  title: {
    margin: 0,
    fontSize: "clamp(2rem, 4vw, 3rem)",
  },
  lead: {
    margin: 0,
    maxWidth: "38rem",
    color: "rgba(255, 255, 255, 0.72)",
    lineHeight: 1.7,
  },
  list: {
    display: "grid",
    gap: "0.75rem",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "1rem",
    paddingBottom: "0.75rem",
    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
  },
  hours: {
    color: "rgba(255, 255, 255, 0.72)",
    textAlign: "right",
    marginLeft: "auto",
  },
}

export default function OpeningHoursSection() {
  return (
    <section id="opening-hours" aria-labelledby="opening-hours-title" style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.header}>
          <h2 id="opening-hours-title" style={styles.title}>
            Studio hours
          </h2>
          <p style={styles.lead}>
            We keep our calendar focused so projects move quickly. If your launch is
            urgent, mention the deadline in your first message and we will confirm
            availability directly.
          </p>
        </div>
        <div style={styles.list}>
          {officeHours.map((entry) => (
            <div key={entry.day} style={styles.row}>
              <span>{entry.day}</span>
              <span style={styles.hours}>{entry.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
