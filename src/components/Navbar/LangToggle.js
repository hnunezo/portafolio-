import { useLanguage } from "../../i18n/LanguageContext";
import "./langToggle.css";

const LangToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={lang === "es" ? "is-active" : ""}
        onClick={() => setLang("es")}
      >
        ES
      </button>
      <span aria-hidden="true">|</span>
      <button
        type="button"
        className={lang === "en" ? "is-active" : ""}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LangToggle;
