import { useI18n } from "../i18n/useI18n"

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
  const { messages } = useI18n()
  const { hours } = messages.contact

  return (
    <section id="opening-hours" aria-labelledby="opening-hours-title" style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.header}>
          <h2 id="opening-hours-title" style={styles.title}>{hours.title}</h2>
          <p style={styles.lead}>{hours.lead}</p>
        </div>
        <div style={styles.list}>
          {hours.entries.map((entry) => (
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
