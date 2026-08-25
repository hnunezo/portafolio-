import Section from "../stateless/section/Section";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useLanguage } from "../../i18n/LanguageContext";
import { projectMeta } from "../../i18n/translations";
import "./projects.css";

const Projects = ({ projectsRef }) => {
  const { dict } = useLanguage();
  const projects = dict.projects.items;

  return (
    <div ref={projectsRef} id="projects" className="projects-wrap">
      <Section>
        <h2 className="projects-title">{dict.projects.title}</h2>
        <p className="projects-kicker">{dict.projects.kicker}</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card ${
                index % 2 === 0 ? "project-card--pink" : "project-card--cyan"
              }`}
            >
              <div className="project-media">
                <img
                  src={require(`../../assets/img/${projectMeta[index].img}.png`)}
                  alt={project.title}
                />
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a
                  href={projectMeta[index].href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  {dict.projects.view}
                  <AiOutlineArrowRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Projects;
