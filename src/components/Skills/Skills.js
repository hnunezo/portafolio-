import Section from "../stateless/section/Section";
import "./skills.css";

const groups = [
  {
    title: "Backend",
    items: [
      { label: "Java", logo: "java" },
      { label: "Spring Boot", logo: "spring" },
      { label: "JPA/Hibernate", logo: "hibernate" },
      { label: "REST APIs", logo: "rest" },
      { label: "RabbitMQ", logo: "rabbitmq" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { label: "Angular", logo: "angular" },
      { label: "TypeScript", logo: "typescript" },
      { label: "RxJS", logo: "rxjs" },
      { label: "HTML", logo: "html" },
      { label: "Sass", logo: "sass" },
    ],
  },
  {
    title: "Data",
    items: [
      { label: "PostgreSQL", logo: "postgres" },
      { label: "SQL Server", logo: "sqlserver" },
    ],
  },
  {
    title: "Tools & delivery",
    items: [
      { label: "Git", logo: "git" },
      { label: "Maven", logo: "maven" },
      { label: "Docker", logo: "docker" },
      { label: "Flyway", logo: "flyway" },
      { label: "Azure DevOps", logo: "azure" },
    ],
  },
  {
    title: "Testing",
    items: [
      { label: "Karma", logo: "karma" },
      { label: "Jasmine", logo: "jasmine" },
      { label: "Cypress", logo: "cypress" },
    ],
  },
];

const Skills = ({ skillsRef }) => {
  return (
    <div ref={skillsRef} id="skills" className="skills-wrap">
      <Section>
        <h2 className="skills-title">SKILLS</h2>
        <div className="skills-groups">
          {groups.map((group) => (
            <div key={group.title} className="skills-group">
              <h3>{group.title}</h3>
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
