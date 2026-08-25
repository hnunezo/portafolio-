import Section from "../stateless/section/Section";
import { useLanguage } from "../../i18n/LanguageContext";
import { experienceTech } from "../../i18n/translations";
import "./experience.css";

const Experience = ({ experienceRef }) => {
  const { dict } = useLanguage();
  const roles = dict.experience.roles;

  return (
    <div ref={experienceRef} id="experience" className="experience-wrap">
      <Section>
        <h2 className="experience-title">{dict.experience.title}</h2>
        <div className="experience-list">
          {roles.map((role, index) => (
            <article key={role.company} className="experience-card">
              <header className="experience-header">
                <div>
                  <h3>{role.company}</h3>
                  <p className="experience-role">{role.title}</p>
                </div>
                <span className="experience-period">{role.period}</span>
              </header>
              <p className="experience-summary">{role.summary}</p>
              <ul className="experience-tech">
                {experienceTech[index].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Experience;
