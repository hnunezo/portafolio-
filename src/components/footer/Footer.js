import "./footer.css";
import { FaAngleUp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../../i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <div style={{ width: "100%" }}>
      <button
        className="button-up"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <FaAngleUp size={42} />
      </button>

      <div className="container-footer">
        <div className="icon-container">
          <a
            href="https://github.com/hnunezo"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={50} className="icon-link" />
          </a>
          <a
            href="https://www.linkedin.com/in/hector-nuñez-oviedo-a054171a7/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={50} className="icon-link" />
          </a>
          <a
            href="mailto:hector.nunez.contact@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope size={50} className="icon-link" />
          </a>
        </div>

        <h2 className="lead">{t("footer.copy")}</h2>
      </div>
    </div>
  );
};

export default Footer;
