import React, { useRef } from "react";
import NavbarHome from "./components/Navbar/NavbarHome";
import ParticlesBackground from "./components/Particles/ParticlesBackground";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Moreme from "./components/MoreMe/Moreme";

const App = () => {
  const homeRef = useRef();
  const navRef = useRef();
  const aboutRef = useRef();

  return (
    <div>
      <ParticlesBackground homeRef={homeRef} />
      <div>
        <i
          className="arrow down button"
          onClick={() => navRef.current.scrollIntoView()}
        ></i>
      </div>
      <NavbarHome navRef={navRef} homeRef={homeRef} aboutRef={aboutRef} />
      <About aboutRef={aboutRef} />
      <Skills />
      <Projects />
      <Moreme />
    </div>
  );
};

export default App;
