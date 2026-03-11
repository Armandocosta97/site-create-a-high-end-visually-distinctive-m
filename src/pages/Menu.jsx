const featuredCategories = [
  {
    name: "Antipasti",
    description: "Small plates built for the table, with seasonal vegetables, local cheese, and crisp textures.",
  },
  {
    name: "Primi",
    description: "Fresh pasta and risotto designed around slow-cooked sauces, depth, and balanced portions.",
  },
  {
    name: "Secondi",
    description: "Wood-fired meats and market fish served with focused sides and bright finishing notes.",
  },
  {
    name: "Dolci",
    description: "Clean, layered desserts that close the meal without feeling heavy.",
  },
]

export default function Menu() {
  return (
    <main>
      <section id="menu-hero">
        <p>Menu</p>
        <h1>A seasonal menu built for long dinners and easy returns.</h1>
        <p>
          Explore the kitchen&apos;s current direction across antipasti, fresh pasta,
          mains, and desserts. Each section is shaped around simple ingredients,
          clear flavors, and a pace that suits shared dining.
        </p>
      </section>

      <section id="menu-categories" aria-labelledby="menu-categories-title">
        <p>Current structure</p>
        <h2 id="menu-categories-title">From first plates to dessert.</h2>
        <div>
          {featuredCategories.map((category) => (
            <article key={category.name}>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
