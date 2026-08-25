import Section from "../stateless/section/Section";
import "./experience.css";

const roles = [
  {
    company: "Lexflow — MINVU",
    title: "Full Stack Developer",
    period: "2023–2026",
    summary:
      "Developed enterprise modules for case management, work queues, requests, electronic signatures and reporting. Designed an auditing system from scratch, implemented asynchronous workflows with RabbitMQ and integrated external document and identity services in a multitenant architecture.",
    tech: [
      "Java",
      "Spring Boot",
      "Angular",
      "PostgreSQL",
      "RabbitMQ",
      "Hibernate",
      "Flyway",
      "Docker",
      "Azure DevOps",
    ],
  },
  {
    company: "UNIJUD — Poder Judicial",
    title: "Full Stack Developer",
    period: "Professional engagement",
    summary:
      "Contributed to judicial information systems with a focus on integrations with the Corte Suprema, auditing capabilities and asynchronous messaging. Supported reliable data exchange and operational workflows in a regulated institutional environment—presented here as a professional case study without confidential details.",
    tech: [
      "Java",
      "Spring Boot",
      "Angular",
      "PostgreSQL",
      "RabbitMQ",
      "REST APIs",
      "Hibernate",
    ],
  },
];

const Experience = ({ experienceRef }) => {
  return (
    <div ref={experienceRef} id="experience" className="experience-wrap">
      <Section>
        <h2 className="experience-title">EXPERIENCE</h2>
        <div className="experience-list">
          {roles.map((role) => (
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
                {role.tech.map((item) => (
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
