import Section from "../stateless/section/Section";
import { useLanguage } from "../../i18n/LanguageContext";
import "./about.css";

const About = ({ aboutRef }) => {
  const { t } = useLanguage();

  return (
    <div ref={aboutRef} id="about" className="about-wrap">
      <Section>
        <h2 className="about-title">{t("about.title")}</h2>
        <div className="about-content">
          <p>
            {t("about.p1Before")}
            <strong>{t("about.p1Highlight")}</strong>
            {t("about.p1After")}
          </p>
        </div>
      </Section>
    </div>
  );
};

export default About;
