import Section from "../stateless/section/Section";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./projects.css";

const projects = [
  {
    title: "WeebList",
    description:
      "Browser for anime, manga, characters and voice actors — with favorites and a draggable ranking list.",
    img: "weeblist",
    href: "https://weeb-list.vercel.app/",
    tags: ["Search", "Favorites", "Drag & drop"],
  },
  {
    title: "NASA App",
    description:
      "Explore space imagery: daily photo with context, random discovery and custom image search.",
    img: "nasaapp",
    href: "https://nasa-app-iota.vercel.app/",
    tags: ["NASA API", "Search", "Daily image"],
  },
  {
    title: "Pokémon App",
    description:
      "Catch wild Pokémon, build a team, fill the Pokédex and store creatures on the PC.",
    img: "poke-app",
    href: "https://poke-app-eight-pi.vercel.app/",
    tags: ["Teams", "Pokédex", "Storage"],
  },
  {
    title: "Mathgram",
    description:
      "Math quiz app to practice logic and track progress with pass percentages per exam.",
    img: "mathgram",
    href: "https://mathgram.vercel.app/",
    tags: ["Quizzes", "Scoring"],
  },
];

const Projects = ({ projectsRef }) => {
  return (
    <div ref={projectsRef} id="projects" className="projects-wrap">
      <Section>
        <h2 className="projects-title">PROJECTS</h2>
        <p className="projects-kicker">Personal side projects</p>
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
                  src={require(`../../assets/img/${project.img}.png`)}
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
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View project
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
