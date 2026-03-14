import { createContext, useEffect, useMemo, useState } from "react"
import { defaultLocale, localeStorageKey, supportedLocales } from "./config"
import messages from "./messages"

export const LanguageContext = createContext(null)

function getInitialLocale() {
  if (typeof window === "undefined") {
    return defaultLocale
  }

  const storedLocale = window.localStorage.getItem(localeStorageKey)

  if (storedLocale && supportedLocales[storedLocale]) {
    return storedLocale
  }

  const browserLanguage = window.navigator.language?.slice(0, 2).toLowerCase()

  if (browserLanguage && supportedLocales[browserLanguage]) {
    return browserLanguage
  }

  return defaultLocale
}

export default function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(getInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(localeStorageKey, locale)
    document.documentElement.lang = messages[locale]?.locale?.htmlLang ?? locale
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      messages: messages[locale] ?? messages[defaultLocale],
      supportedLocales,
    }),
    [locale]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
