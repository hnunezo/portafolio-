import Section from "../stateless/section/Section";
import { useLanguage } from "../../i18n/LanguageContext";
import { skillGroups } from "../../i18n/translations";
import "./skills.css";

const Skills = ({ skillsRef }) => {
  const { dict } = useLanguage();

  return (
    <div ref={skillsRef} id="skills" className="skills-wrap">
      <Section>
        <h2 className="skills-title">{dict.skills.title}</h2>
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div key={group.key} className="skills-group">
              <h3>{dict.skills.groups[group.key]}</h3>
              <div className="skills-chips">
                {group.items.map((item) => (
                  <div key={item.label} className="skill-chip" tabIndex={0}>
                    <img
                      src={`./logos/${item.logo}.png`}
                      alt=""
                      loading="lazy"
                    />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Skills;
