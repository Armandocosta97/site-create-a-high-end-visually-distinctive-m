const whatsappHref =
  "https://api.whatsapp.com/send?phone=393454639301&text=Hello%20Alai%20Web%2C%20I%27d%20like%20to%20talk%20about%20a%20website%20project."

const styles = {
  link: {
    position: "fixed",
    right: "max(0.75rem, env(safe-area-inset-right))",
    bottom: "max(0.75rem, env(safe-area-inset-bottom))",
    zIndex: 1000,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    minHeight: "3.5rem",
    maxWidth: "calc(100vw - 1.5rem)",
    padding: "0.8rem 1rem",
    borderRadius: "999px",
    border: "1px solid rgba(7, 94, 84, 0.18)",
    background:
      "linear-gradient(135deg, rgba(37, 211, 102, 0.96), rgba(18, 140, 126, 0.96))",
    color: "#ffffff",
    fontWeight: 700,
    letterSpacing: "-0.01em",
    textDecoration: "none",
    boxShadow: "0 18px 40px rgba(18, 140, 126, 0.24)",
    backdropFilter: "blur(12px)",
    boxSizing: "border-box",
  },
  iconWrap: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.25rem",
    height: "2.25rem",
    borderRadius: "999px",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
    flexShrink: 0,
  },
  label: {
    display: "block",
    fontSize: "0.98rem",
    lineHeight: 1,
    whiteSpace: "nowrap",
  },
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12.03 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.27-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.47 0 9.93-4.45 9.93-9.93a9.86 9.86 0 0 0-2.91-6.96Zm-7.02 15.2h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.22 8.22 0 0 1-1.26-4.35c0-4.54 3.69-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.24-8.25 8.24Zm4.52-6.17c-.25-.12-1.49-.73-1.72-.81-.23-.09-.39-.12-.56.12-.16.25-.64.81-.78.98-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.36-1.71-.14-.24-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.07-.12-.56-1.35-.77-1.86-.2-.47-.4-.41-.56-.42h-.47c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.9 2.41 1.02 2.57.12.16 1.76 2.7 4.27 3.79.59.26 1.06.41 1.42.52.6.19 1.15.17 1.59.11.48-.07 1.49-.61 1.7-1.19.21-.58.21-1.08.15-1.19-.05-.1-.22-.16-.47-.29Z" />
    </svg>
  )
}

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Alai Web on WhatsApp"
      style={styles.link}
    >
      <span aria-hidden="true" style={styles.iconWrap}>
        <WhatsAppIcon />
      </span>
      <span style={styles.label}>WhatsApp</span>
    </a>
  )
}
