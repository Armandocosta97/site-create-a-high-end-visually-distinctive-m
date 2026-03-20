import { useState } from "react"
import siteConfig from "../config/siteConfig"
import { useI18n } from "../i18n/useI18n"

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.25a2 2 0 0 1 2.11-.45c.84.33 1.72.56 2.62.68A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12.03 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.27-1.38a9.9 9.9 0 0 0 4.75 1.21h.01c5.47 0 9.93-4.45 9.93-9.93a9.86 9.86 0 0 0-2.91-6.96Zm-7.02 15.2h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.22 8.22 0 0 1-1.26-4.35c0-4.54 3.69-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.55-3.7 8.24-8.25 8.24Zm4.52-6.17c-.25-.12-1.49-.73-1.72-.81-.23-.09-.39-.12-.56.12-.16.25-.64.81-.78.98-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.36-1.71-.14-.24-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.44-.07-.12-.56-1.35-.77-1.86-.2-.47-.4-.41-.56-.42h-.47c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.9 2.41 1.02 2.57.12.16 1.76 2.7 4.27 3.79.59.26 1.06.41 1.42.52.6.19 1.15.17 1.59.11.48-.07 1.49-.61 1.7-1.19.21-.58.21-1.08.15-1.19-.05-.1-.22-.16-.47-.29Z" />
    </svg>
  )
}

function FormIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 6h10" />
      <path d="M8 12h10" />
      <path d="M8 18h6" />
      <path d="M4 6h.01" />
      <path d="M4 12h.01" />
      <path d="M4 18h.01" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12 5 5L20 7" />
    </svg>
  )
}

function getContactIcon(label) {
  const normalizedLabel = label.toLowerCase()

  if (normalizedLabel.includes("mail") || normalizedLabel.includes("email") || normalizedLabel.includes("courriel")) {
    return <MailIcon />
  }

  if (normalizedLabel.includes("phone") || normalizedLabel.includes("telefono") || normalizedLabel.includes("telefon")) {
    return <PhoneIcon />
  }

  if (normalizedLabel.includes("whatsapp")) {
    return <WhatsAppIcon />
  }

  return <FormIcon />
}

const styles = {
  section: {
    padding: "0 clamp(1rem, 4vw, 1.5rem) 3rem",
  },
  shell: {
    maxWidth: "72rem",
    margin: "0 auto",
    display: "grid",
    gap: "1.5rem",
  },
  title: {
    margin: 0,
    fontSize: "clamp(2rem, 5vw, 3.25rem)",
  },
  lead: {
    margin: 0,
    maxWidth: "42rem",
    color: "rgba(17, 17, 17, 0.72)",
    lineHeight: 1.7,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
    gap: "1rem",
  },
  card: {
    display: "grid",
    alignContent: "start",
    gap: "0.8rem",
    padding: "1.5rem",
    borderRadius: "1.5rem",
    border: "1px solid rgba(17, 17, 17, 0.1)",
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(255, 250, 244, 0.94))",
    color: "#111111",
    textDecoration: "none",
    boxShadow: "0 16px 40px rgba(15, 23, 42, 0.06)",
  },
  iconBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.85rem",
    height: "2.85rem",
    borderRadius: "999px",
    background: "rgba(249, 115, 22, 0.12)",
    color: "#f97316",
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#f97316",
  },
  value: {
    fontSize: "1.25rem",
    overflowWrap: "anywhere",
  },
  description: {
    color: "rgba(17, 17, 17, 0.72)",
    lineHeight: 1.6,
    overflowWrap: "anywhere",
  },
  formShell: {
    position: "relative",
    display: "grid",
    gap: "1rem",
    padding: "1.5rem",
    borderRadius: "1.75rem",
    border: "1px solid rgba(17, 17, 17, 0.1)",
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(255, 247, 239, 0.92))",
    boxShadow: "0 18px 44px rgba(15, 23, 42, 0.06)",
  },
  formHeader: {
    display: "grid",
    gap: "0.45rem",
  },
  formTitle: {
    margin: 0,
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    color: "#111111",
  },
  formLead: {
    margin: 0,
    maxWidth: "42rem",
    color: "rgba(17, 17, 17, 0.72)",
    lineHeight: 1.7,
  },
  form: {
    display: "grid",
    gap: "1rem",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
    gap: "1rem",
  },
  field: {
    display: "grid",
    gap: "0.45rem",
  },
  fieldLabel: {
    fontSize: "0.82rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#6b7280",
  },
  input: {
    width: "100%",
    minHeight: "3.25rem",
    padding: "0.9rem 1rem",
    borderRadius: "1rem",
    border: "1px solid rgba(17, 17, 17, 0.12)",
    backgroundColor: "#ffffff",
    color: "#111111",
    font: "inherit",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    minHeight: "9rem",
    padding: "1rem",
    borderRadius: "1rem",
    border: "1px solid rgba(17, 17, 17, 0.12)",
    backgroundColor: "#ffffff",
    color: "#111111",
    font: "inherit",
    resize: "vertical",
    boxSizing: "border-box",
  },
  formFooter: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "0.85rem 1rem",
  },
  formAction: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
    minHeight: "3rem",
    padding: "0.8rem 1.15rem",
    borderRadius: "999px",
    backgroundColor: "#111111",
    color: "#ffffff",
    fontSize: "0.95rem",
    fontWeight: 700,
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
  },
  formNote: {
    margin: 0,
    color: "rgba(17, 17, 17, 0.62)",
    fontSize: "0.92rem",
    lineHeight: 1.6,
  },
  honeypot: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
  },
  formStatus: {
    margin: 0,
    fontSize: "0.92rem",
    lineHeight: 1.6,
  },
  formStatusSuccess: {
    color: "#0f766e",
  },
  formStatusError: {
    color: "#b91c1c",
  },
  successSheet: {
    position: "absolute",
    left: "50%",
    top: "50%",
    zIndex: 5,
    width: "min(28rem, calc(100% - 2rem))",
    padding: "1rem 1rem 1.05rem",
    borderRadius: "1.5rem",
    border: "1px solid rgba(15, 23, 42, 0.08)",
    background: "rgba(255, 255, 255, 0.98)",
    boxShadow: "0 24px 60px rgba(15, 23, 42, 0.16)",
    backdropFilter: "blur(18px)",
    transform: "translate(-50%, -50%)",
    boxSizing: "border-box",
  },
  successSheetContent: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    gap: "0.85rem",
  },
  successSheetBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.85rem",
    height: "2.85rem",
    borderRadius: "999px",
    background: "#22c55e",
    color: "#ffffff",
    boxShadow: "0 12px 30px rgba(34, 197, 94, 0.26)",
  },
  successSheetText: {
    display: "grid",
    gap: "0.15rem",
  },
  successSheetTitle: {
    margin: 0,
    fontSize: "1rem",
    fontWeight: 700,
    color: "#111111",
  },
  successSheetLead: {
    margin: 0,
    color: "rgba(17, 17, 17, 0.68)",
    fontSize: "0.9rem",
    lineHeight: 1.5,
  },
  successSheetClose: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.5rem",
    height: "2.5rem",
    border: "0",
    borderRadius: "999px",
    background: "rgba(17, 17, 17, 0.05)",
    color: "#111111",
    fontSize: "1.25rem",
    cursor: "pointer",
  },
}

export default function ContactDetailsSection() {
  const [status, setStatus] = useState("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const [isSuccessSheetOpen, setIsSuccessSheetOpen] = useState(false)
  const { messages } = useI18n()
  const { contact } = messages
  const contactCards = contact.details.items.filter((item) => {
    const normalizedLabel = item.label.toLowerCase()

    return !normalizedLabel.includes("mail") && !normalizedLabel.includes("email") && !normalizedLabel.includes("courriel")
  })

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    if (String(formData.get("website") || "").trim() !== "") {
      return
    }

    setStatus("loading")
    setStatusMessage("")

    formData.set("apiKey", siteConfig.staticFormsApiKey)
    formData.set("subject", `${siteConfig.brandName} website inquiry`)
    formData.set("replyTo", String(formData.get("email") || ""))

    try {
      const response = await fetch(siteConfig.staticFormsEndpoint, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Request failed")
      }

      setStatus("success")
      setStatusMessage(contact.details.form.successMessage)
      setIsSuccessSheetOpen(true)
      form.reset()
    } catch {
      setStatus("error")
      setStatusMessage(contact.details.form.errorMessage)
    }
  }

  return (
    <section id="contact-details" aria-labelledby="contact-details-title" style={styles.section}>
      <div style={styles.shell}>
        <h2 id="contact-details-title" style={styles.title}>{contact.details.title}</h2>
        <p style={styles.lead}>{contact.details.lead}</p>
        <div style={styles.grid}>
          {contactCards.map((item) => (
            <a
              key={`${item.label}-${item.value}`}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              style={styles.card}
            >
              <span style={styles.iconBadge}>{getContactIcon(item.label)}</span>
              <span style={styles.label}>{item.label}</span>
              <strong style={styles.value}>{item.value}</strong>
              <span style={styles.description}>{item.description}</span>
            </a>
          ))}
        </div>
        <div style={styles.formShell}>
          <div style={styles.formHeader}>
            <span style={styles.label}>{contact.details.form.eyebrow}</span>
            <h3 style={styles.formTitle}>{contact.details.form.title}</h3>
            <p style={styles.formLead}>{contact.details.form.lead}</p>
          </div>
          <form style={styles.form} onSubmit={handleSubmit}>
            <input type="hidden" name="apiKey" value={siteConfig.staticFormsApiKey} />
            <input type="hidden" name="subject" value={`${siteConfig.brandName} website inquiry`} />
            <label style={styles.honeypot} aria-hidden="true">
              <span>{contact.details.form.honeypotLabel}</span>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
            <div style={styles.formGrid}>
              <label style={styles.field}>
                <span style={styles.fieldLabel}>{contact.details.form.nameLabel}</span>
                <input type="text" name="name" required placeholder={contact.details.form.namePlaceholder} style={styles.input} />
              </label>
              <label style={styles.field}>
                <span style={styles.fieldLabel}>{contact.details.form.emailLabel}</span>
                <input type="email" name="email" required placeholder={contact.details.form.emailPlaceholder} style={styles.input} />
              </label>
              <label style={styles.field}>
                <span style={styles.fieldLabel}>{contact.details.form.phoneLabel}</span>
                <input type="tel" name="phone" placeholder={contact.details.form.phonePlaceholder} style={styles.input} />
              </label>
              <label style={styles.field}>
                <span style={styles.fieldLabel}>{contact.details.form.businessLabel}</span>
                <input type="text" name="business" placeholder={contact.details.form.businessPlaceholder} style={styles.input} />
              </label>
            </div>
            <label style={styles.field}>
              <span style={styles.fieldLabel}>{contact.details.form.messageLabel}</span>
              <textarea name="message" required placeholder={contact.details.form.messagePlaceholder} style={styles.textarea} />
            </label>
            <div style={styles.formFooter}>
              <button type="submit" style={styles.formAction} disabled={status === "loading"}>
                {status === "loading" ? contact.details.form.sendingLabel : contact.details.form.submitLabel}
              </button>
              {statusMessage ? (
                <p
                  style={{
                    ...styles.formStatus,
                    ...(status === "success" ? styles.formStatusSuccess : null),
                    ...(status === "error" ? styles.formStatusError : null),
                  }}
                >
                  {statusMessage}
                </p>
              ) : (
                <p style={styles.formNote}>{contact.details.form.note}</p>
              )}
            </div>
          </form>
          {isSuccessSheetOpen ? (
            <div style={styles.successSheet} role="status" aria-live="polite">
              <div style={styles.successSheetContent}>
                <span style={styles.successSheetBadge}>
                  <CheckIcon />
                </span>
                <div style={styles.successSheetText}>
                  <p style={styles.successSheetTitle}>{contact.details.form.successSheetTitle}</p>
                  <p style={styles.successSheetLead}>{contact.details.form.successMessage}</p>
                </div>
                <button
                  type="button"
                  aria-label={contact.details.form.successSheetCloseLabel}
                  style={styles.successSheetClose}
                  onClick={() => setIsSuccessSheetOpen(false)}
                >
                  ×
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
