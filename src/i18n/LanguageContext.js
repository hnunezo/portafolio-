import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

const getInitialLang = () => {
  const saved = localStorage.getItem("portfolio-lang");
  if (saved === "en" || saved === "es") return saved;
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => {
    const dict = translations[lang];
    const t = (path) => {
      return path.split(".").reduce((acc, key) => {
        if (acc == null) return path;
        return acc[key];
      }, dict);
    };

    return {
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === "en" ? "es" : "en")),
      t,
      dict,
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};
