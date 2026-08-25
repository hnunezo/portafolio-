import Section from "../stateless/section/Section";
import "./about.css";

const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} id="about" className="about-wrap">
      <Section>
        <h2 className="about-title">ABOUT</h2>
        <div className="about-content">
          <p>
            I’m a Computer Engineer and Full Stack Developer based in
            Concepción, Chile, focused on <strong>legal tech </strong>. My professional experience has been building
            enterprise systems for the public sector: case management, document
            workflows, electronic signatures, auditing and integrations with
            institutional services.
          </p>
          
        </div>
      </Section>
    </div>
  );
};

export default About;
