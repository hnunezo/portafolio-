import React from "react";
import "./hero.css";

const Hero = ({ experienceRef, contactRef }) => {
  return (
    <div className="hero-container">
      <div className="hero-copy">
        <h1 className="hero-name">Héctor Núñez</h1>
        <h2 className="hero-role">
          Full Stack Developer
        </h2>
        <p className="hero-pitch">
          I build maintainable enterprise applications, document workflows and
          system integrations. Over 3 years of experience working in legal tech.
        </p>
        <p className="hero-meta">
          Concepción, Chile · Open to remote opportunities
        </p>
      </div>
    </div>
  );
};

export default Hero;
