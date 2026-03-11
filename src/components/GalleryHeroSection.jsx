const highlights = [
  {
    label: "Dining room",
    text: "Soft light, natural materials, and a room designed to feel calm before the first course arrives.",
  },
  {
    label: "Kitchen detail",
    text: "Close finishes, precise plating, and the small gestures that give the menu its identity.",
  },
  {
    label: "Service rhythm",
    text: "A visual sequence of evenings shaped by timing, warmth, and a steady pace across the table.",
  },
]

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
    background:
      "radial-gradient(circle at top right, rgba(249, 115, 22, 0.16), transparent 30%), linear-gradient(145deg, #fffaf5 0%, #ffffff 52%, #f8fafc 100%)",
  },
  shell: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gap: "2rem",
  },
  layout: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    alignItems: "end",
  },
  content: {
    display: "grid",
    gap: "1.25rem",
    maxWidth: "760px",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#f97316",
  },
  title: {
    margin: 0,
    maxWidth: "10ch",
    fontSize: "clamp(3rem, 9vw, 5.75rem)",
    lineHeight: 0.92,
    letterSpacing: "-0.05em",
    color: "#111111",
    textWrap: "balance",
  },
  lead: {
    margin: 0,
    maxWidth: "40rem",
    fontSize: "clamp(1.05rem, 2.6vw, 1.28rem)",
    lineHeight: 1.75,
    color: "#52525b",
  },
  note: {
    margin: 0,
    fontSize: "0.95rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#0f172a",
  },
  panel: {
    display: "grid",
    gap: "1rem",
    padding: "clamp(1.5rem, 4vw, 2rem)",
    borderRadius: "1.75rem",
    backgroundColor: "#0f172a",
    boxShadow: "0 24px 70px rgba(15, 23, 42, 0.12)",
  },
  panelTitle: {
    margin: 0,
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#fb923c",
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "grid",
    gap: "1rem",
  },
  item: {
    display: "grid",
    gap: "0.35rem",
    paddingTop: "1rem",
    borderTop: "1px solid rgba(255, 255, 255, 0.12)",
  },
  itemLabel: {
    margin: 0,
    fontSize: "1.1rem",
    lineHeight: 1.2,
    color: "#ffffff",
  },
  itemText: {
    margin: 0,
    fontSize: "0.98rem",
    lineHeight: 1.7,
    color: "rgba(255, 255, 255, 0.74)",
  },
}

export default function GalleryHeroSection() {
  return (
    <section id="gallery-hero" aria-labelledby="gallery-hero-title" style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.layout}>
          <div style={styles.content}>
            <p style={styles.eyebrow}>Gallery</p>
            <h1 id="gallery-hero-title" style={styles.title}>
              Moments from the table, the kitchen, and the room.
            </h1>
            <p style={styles.lead}>
              Explore the atmosphere of our restaurant through plated signatures,
              evening service, and the details that shape each visit.
            </p>
            <p style={styles.note}>A closer look at the dishes, setting, and pace behind every service.</p>
          </div>

          <aside aria-label="Gallery highlights" style={styles.panel}>
            <p style={styles.panelTitle}>What the gallery captures</p>
            <ul style={styles.list}>
              {highlights.map((highlight) => (
                <li key={highlight.label} style={styles.item}>
                  <p style={styles.itemLabel}>{highlight.label}</p>
                  <p style={styles.itemText}>{highlight.text}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
