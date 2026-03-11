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
      <section id="about-hero" style={sectionStyle}>
        <div style={contentStyle}>
          <p style={eyebrowStyle}>Chi siamo</p>
          <h1
            style={{
              margin: "0 0 1.5rem",
              maxWidth: "14ch",
              fontSize: "clamp(2.75rem, 8vw, 5.5rem)",
              lineHeight: 0.95,
              color: "#0f172a",
            }}
          >
            Un ristorante costruito sulla cura dei dettagli.
          </h1>
          <p style={bodyStyle}>
            La nostra cucina parte da ingredienti stagionali, tecnica pulita e
            un servizio attento. Ogni scelta, dal menu alla sala, e pensata per
            offrire un&apos;esperienza contemporanea ma accogliente.
          </p>
        </div>
      </section>

      <section id="story" style={sectionStyle}>
        <div style={contentStyle}>
          <h2
            style={{
              margin: "0 0 1rem",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              lineHeight: 1,
              color: "#0f172a",
            }}
          >
            Una storia fatta di ritmo, materia prima e ospitalita.
          </h2>
          <p style={bodyStyle}>
            Siamo nati con un&apos;idea semplice: creare un luogo in cui la cucina
            italiana incontri una sensibilita piu essenziale, precisa e
            attuale. Il risultato e un ambiente caldo, piatti riconoscibili e
            una proposta che cambia con naturalezza durante l&apos;anno.
          </p>
        </div>
      </section>

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
