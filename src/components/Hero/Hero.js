import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div>
        <div className="title-container">
          <h1 className="title name">Héctor Núñez</h1>
          <h2 className="title">{"</>"}</h2>
        </div>
        <p className="lead">Fullstack Developer</p>
      </div>
    </div>
  );
};

export default Hero;
