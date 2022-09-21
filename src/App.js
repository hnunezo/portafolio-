import React, { useRef } from "react";
import NavbarHome from "./components/Navbar/NavbarHome";
import ParticlesBackground from "./components/Particles/ParticlesBackground";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";

const App = () => {
  const homeRef = useRef();
  const navRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <div>
      <div
        className="w-100"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <ParticlesBackground homeRef={homeRef} />
        <Hero />
      </div>
      <div>
        <i
          className="arrow down button"
          onClick={() => navRef.current.scrollIntoView()}
        ></i>
      </div>
      <NavbarHome
        navRef={navRef}
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <About aboutRef={aboutRef} />
        <Skills skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
