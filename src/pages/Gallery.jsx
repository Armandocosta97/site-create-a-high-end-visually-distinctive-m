import GalleryHeroSection from "../components/GalleryHeroSection"

export default function Gallery() {
  return (
    <main>
      <GalleryHeroSection />

      <section id="gallery-grid" aria-labelledby="gallery-grid-title">
        <h2 id="gallery-grid-title">A visual look at our dining experience</h2>
        <p>
          This page brings together the dishes, textures, and spaces that define
          our menu and hospitality.
        </p>
        <div>
          <article>
            <h3>Signature plates</h3>
            <p>
              Seasonal compositions, refined presentation, and ingredients chosen
              with care.
            </p>
          </article>
          <article>
            <h3>Dining room atmosphere</h3>
            <p>
              Warm lighting, intimate tables, and a setting designed for long,
              relaxed evenings.
            </p>
          </article>
          <article>
            <h3>Service in motion</h3>
            <p>
              A closer look at the rhythm of the kitchen and the team behind each
              course.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
