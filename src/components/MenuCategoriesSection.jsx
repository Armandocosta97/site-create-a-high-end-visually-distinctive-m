const menuCategories = [
  {
    number: "01",
    name: "Siti aziendali",
    accent: "Presenza digitale chiara",
    tone: "light",
    description:
      "Siti completi per attivita, studi e professionisti che hanno bisogno di raccontarsi meglio e generare fiducia subito.",
    dishes: ["Architettura dei contenuti", "Design editoriale su misura", "Sviluppo responsive e veloce"],
  },
  {
    number: "02",
    name: "Landing page",
    accent: "Una pagina, un obiettivo",
    tone: "dark",
    description:
      "Pagine focalizzate su un'offerta precisa, pensate per campagne, lanci, lead generation o nuovi servizi.",
    dishes: ["Headline e struttura orientate all'azione", "Copy sintetico e gerarchia forte", "CTA pensate per convertire"],
  },
  {
    number: "03",
    name: "Restyling sito",
    accent: "Da confuso a credibile",
    tone: "warm",
    description:
      "Riprogettazione di siti esistenti che oggi risultano datati, lenti o incoerenti con il posizionamento del brand.",
    dishes: ["Pulizia visiva e nuova gerarchia", "Revisione contenuti e percorsi utente", "Aggiornamento tecnico e mobile-first"],
  },
  {
    number: "04",
    name: "Ottimizzazione performance",
    accent: "Piu veloci, piu efficaci",
    tone: "light",
    description:
      "Interventi mirati per migliorare caricamento, leggibilita, stabilita e basi SEO del sito.",
    dishes: ["Riduzione del peso front-end", "Migliorie SEO tecniche di base", "Pulizia markup e accessibilita"],
  },
]

const styles = {
  section: {
    padding: "clamp(2rem, 4vw, 3rem) clamp(1.25rem, 4vw, 3rem) clamp(5rem, 8vw, 7rem)",
    background: "transparent",
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
    paddingBottom: "0.5rem",
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
    gap: "1.25rem",
  },
  card: {
    display: "grid",
    gap: "1.5rem",
    minHeight: "100%",
    padding: "clamp(1.75rem, 3vw, 2.25rem)",
    borderRadius: "1.75rem",
    position: "relative",
    overflow: "hidden",
  },
  cardLight: {
    border: "1px solid rgba(17, 17, 17, 0.08)",
    background: "#ffffff",
    color: "#111111",
    boxShadow: "0 18px 48px rgba(15, 23, 42, 0.06)",
  },
  cardDark: {
    border: "1px solid rgba(255, 255, 255, 0.12)",
    background: "linear-gradient(160deg, #111827, #0f172a)",
    color: "#ffffff",
    boxShadow: "0 18px 48px rgba(15, 23, 42, 0.12)",
  },
  cardWarm: {
    border: "1px solid rgba(249, 115, 22, 0.24)",
    background: "linear-gradient(145deg, #fff1e6, #ffd8b5)",
    color: "#111111",
    boxShadow: "0 18px 48px rgba(249, 115, 22, 0.12)",
  },
  cardLayout: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)",
    alignItems: "start",
  },
  headingBlock: {
    display: "grid",
    gap: "1rem",
    alignContent: "start",
  },
  accent: {
    margin: 0,
    fontSize: "0.78rem",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#f97316",
  },
  accentDark: {
    color: "#fdba74",
  },
  number: {
    margin: 0,
    fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
    lineHeight: 0.9,
    letterSpacing: "-0.06em",
    color: "rgba(249, 115, 22, 0.22)",
  },
  numberDark: {
    color: "rgba(251, 146, 60, 0.28)",
  },
  name: {
    margin: 0,
    fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
    lineHeight: 1,
    letterSpacing: "-0.04em",
  },
  description: {
    margin: 0,
    fontSize: "1.04rem",
    lineHeight: 1.8,
    color: "#52525b",
  },
  descriptionDark: {
    color: "rgba(255, 255, 255, 0.72)",
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
  itemDark: {
    borderTop: "1px solid rgba(255, 255, 255, 0.12)",
    color: "rgba(255, 255, 255, 0.82)",
  },
  stripe: {
    position: "absolute",
    inset: 0,
    width: "0.5rem",
    background: "linear-gradient(180deg, #f97316, #fb923c)",
  },
  stripeSoft: {
    background: "linear-gradient(180deg, #fdba74, #f97316)",
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
          <p style={styles.eyebrow}>Servizi principali</p>
          <h2 id="menu-categories-title" style={styles.title}>
            Ogni servizio ha un obiettivo preciso: chiarezza, fiducia, conversione.
          </h2>
          <p style={styles.lead}>
            Il lavoro non si riduce a "fare un sito". Ogni intervento serve a migliorare
            come il brand si presenta, come viene percepito e quanto facilmente porta a
            una richiesta reale.
          </p>
        </div>

        <div style={styles.grid}>
          {menuCategories.map((category) => (
            <article
              key={category.name}
              style={{
                ...styles.card,
                ...(category.tone === "dark"
                  ? styles.cardDark
                  : category.tone === "warm"
                    ? styles.cardWarm
                    : styles.cardLight),
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  ...styles.stripe,
                  ...(category.tone === "warm" ? styles.stripeSoft : null),
                }}
              />
              <div
                style={{
                  ...styles.cardLayout,
                  gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)",
                }}
              >
                <div style={styles.headingBlock}>
                  <p
                    style={{
                      ...styles.number,
                      ...(category.tone === "dark" ? styles.numberDark : null),
                    }}
                  >
                    {category.number}
                  </p>
                  <div>
                    <p
                      style={{
                        ...styles.accent,
                        ...(category.tone === "dark" ? styles.accentDark : null),
                      }}
                    >
                      {category.accent}
                    </p>
                    <h3 style={styles.name}>{category.name}</h3>
                  </div>
                </div>

                <div style={{ display: "grid", gap: "1.1rem" }}>
                  <p
                    style={{
                      ...styles.description,
                      ...(category.tone === "dark" ? styles.descriptionDark : null),
                    }}
                  >
                    {category.description}
                  </p>
                  <ul style={styles.list}>
                    {category.dishes.map((dish) => (
                      <li
                        key={dish}
                        style={{
                          ...styles.item,
                          ...(category.tone === "dark" ? styles.itemDark : null),
                        }}
                      >
                        {dish}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
