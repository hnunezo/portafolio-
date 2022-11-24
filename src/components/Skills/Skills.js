import React, { useState } from "react";
import FlipSection from "../stateless/section/FlipSection";
import Section from "../stateless/section/Section";
import Toogle from "../Switch/Toogle";

const Skills = ({ skillsRef }) => {
  const [flipped, setFlipped] = useState(false);
  const skills = [
    "javascript",
    "typescript",
    "git",
    "npm",
    "stackoverflow",
    "docker",
  ];
  const skillsFrontArray = [
    "html",
    "css",
    "react",
    "redux",
    "bootstrap",
    "sass",
  ];
  const skillsBackArray = [
    "node",
    "express",
    "mongoDB",
    "mongoose",
    "jsonWebToken",
  ];
  return (
    <div
      ref={skillsRef}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Section>
        <div className="d-flex flex-column align-items-center gap-3">
          <h2>SKILLS</h2>
          <h4>GENERAL</h4>
          <div
            className="d-flex justify-content-center align-items-center flex-wrap"
            style={{ gap: "6rem", width: "70%" }}
          >
            {skills.map((el) => (
              <div
                key={el}
                className="d-flex flex-column justify-content align-items-center"
              >
                <img
                  src={`./logos/${el}.png`}
                  style={{ width: "7rem" }}
                  alt="xd"
                />
                <h3>{el.charAt(0).toUpperCase() + el.slice(1)}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div
          className="d-flex flex-column align-items-center gap-3"
          style={{ marginTop: "-10rem" }}
        >
          <h4>SPECIFICS</h4>
          <Toogle flipped={flipped} setFlipped={setFlipped} />
          <FlipSection
            flipped={flipped}
            setFlipped={setFlipped}
            skillsFrontArray={skillsFrontArray}
            skillsBackArray={skillsBackArray}
          />
        </div>
      </Section>
    </div>
  );
};

export default Skills;
