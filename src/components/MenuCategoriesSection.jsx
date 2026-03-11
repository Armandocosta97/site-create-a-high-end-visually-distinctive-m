const menuCategories = [
  {
    name: "Antipasti",
    accent: "Start lightly",
    description:
      "Small plates built for sharing, with bright vegetables, house-made details, and a clean opening rhythm.",
    dishes: ["Roasted peppers, anchovy vinaigrette, toasted breadcrumbs", "Burrata with citrus fennel and warm focaccia", "Crisp zucchini blossoms with ricotta and lemon"],
  },
  {
    name: "Primi",
    accent: "Fresh pasta and risotto",
    description:
      "The center of the menu leans into slow sauces, balanced portions, and the depth that keeps guests lingering.",
    dishes: ["Tagliatelle al ragu with parmesan and black pepper", "Lemon mascarpone ravioli with brown butter sage", "Saffron risotto with roasted shallots and pecorino"],
  },
  {
    name: "Secondi",
    accent: "From the fire",
    description:
      "Wood-fired mains stay focused: quality protein, restrained garnishes, and enough acidity to keep the plate moving.",
    dishes: ["Sea bass with charred greens and herb oil", "Veal cutlet with rosemary potatoes", "Half chicken with smoked lemon and grilled radicchio"],
  },
  {
    name: "Dolci",
    accent: "Finish clean",
    description:
      "Desserts close the meal with texture and precision instead of excess sweetness or heavy plating.",
    dishes: ["Olive oil cake with orange creme fraiche", "Dark chocolate budino with sea salt", "Vanilla panna cotta with late-harvest berries"],
  },
]

const styles = {
  section: {
    padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3rem)",
    background:
      "linear-gradient(180deg, #fffaf5 0%, #ffffff 22%, #f8fafc 100%)",
  },
  shell: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gap: "2.5rem",
  },
  intro: {
    display: "grid",
    gap: "1rem",
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
    fontSize: "clamp(2.4rem, 6vw, 4.6rem)",
    lineHeight: 0.95,
    letterSpacing: "-0.05em",
    color: "#111111",
    textWrap: "balance",
  },
  lead: {
    margin: 0,
    fontSize: "clamp(1rem, 2.2vw, 1.18rem)",
    lineHeight: 1.75,
    color: "#52525b",
  },
  grid: {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
  },
  card: {
    display: "grid",
    gap: "1.25rem",
    minHeight: "100%",
    padding: "clamp(1.5rem, 3vw, 2rem)",
    border: "1px solid rgba(17, 17, 17, 0.08)",
    borderRadius: "1.75rem",
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    boxShadow: "0 18px 48px rgba(15, 23, 42, 0.08)",
  },
  accent: {
    margin: 0,
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#f97316",
  },
  name: {
    margin: 0,
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    lineHeight: 1,
    letterSpacing: "-0.04em",
    color: "#111111",
  },
  description: {
    margin: 0,
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "#52525b",
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "grid",
    gap: "0.85rem",
  },
  item: {
    paddingTop: "0.85rem",
    borderTop: "1px solid rgba(17, 17, 17, 0.08)",
    fontSize: "0.98rem",
    lineHeight: 1.65,
    color: "#27272a",
  },
}

export default function MenuCategoriesSection() {
  return (
    <section
      id="menu-categories"
      aria-labelledby="menu-categories-title"
      style={styles.section}
    >
      <div style={styles.shell}>
        <div style={styles.intro}>
          <p style={styles.eyebrow}>Menu categories</p>
          <h2 id="menu-categories-title" style={styles.title}>
            From first plates to dessert, every course stays measured and seasonal.
          </h2>
          <p style={styles.lead}>
            The menu is organized to move naturally through the evening: lighter openings,
            pasta with depth, fire-led mains, and desserts that finish with clarity.
          </p>
        </div>

        <div style={styles.grid}>
          {menuCategories.map((category) => (
            <article key={category.name} style={styles.card}>
              <div>
                <p style={styles.accent}>{category.accent}</p>
                <h3 style={styles.name}>{category.name}</h3>
              </div>
              <p style={styles.description}>{category.description}</p>
              <ul style={styles.list}>
                {category.dishes.map((dish) => (
                  <li key={dish} style={styles.item}>
                    {dish}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
