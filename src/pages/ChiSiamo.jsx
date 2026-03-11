import AboutHeroSection from "../components/AboutHeroSection"
import StorySection from "../components/StorySection"

export default function ChiSiamo() {
  const sectionStyle = {
    padding: "4rem 0",
    borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
  }

  const contentStyle = {
    width: "min(100%, 64rem)",
    margin: "0 auto",
  }

  const eyebrowStyle = {
    margin: "0 0 1rem",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#f97316",
  }

  const bodyStyle = {
    margin: "0",
    maxWidth: "44rem",
    fontSize: "1.05rem",
    lineHeight: 1.7,
    color: "#475569",
  }

  return (
    <>
      <AboutHeroSection />
      <StorySection />

      <section id="philosophy" style={{ ...sectionStyle, borderBottom: "none" }}>
        <div style={contentStyle}>
          <h2
            style={{
              margin: "0 0 1rem",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              lineHeight: 1,
              color: "#0f172a",
            }}
          >
            La nostra filosofia
          </h2>
          <p style={bodyStyle}>
            Puntiamo su menu leggibili, sapori netti e una sala che lascia
            spazio alla conversazione. Qualita, stagionalita e semplicita sono
            i principi che guidano ogni servizio.
          </p>
        </div>
      </section>
    </>
  )
}
