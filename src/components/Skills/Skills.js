import React from "react";

const Skills = () => {
  const skillsArray = [
    "html",
    "css",
    "javascript",
    "typescript",
    "react",
    "redux",
    "bootstrap",
    "git",
    "npm",
    "stackoverflow",
  ];
  return (
    <div
      style={{
        height: "91vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="row text-center justify-content-evenly gap-1">
        <h2 className="col-12">SKILLS</h2>
        {skillsArray.map((el) => (
          <div
            className="col-4 col-md-2"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "10rem",
                height: "10rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={`./logos/${el}.png`}
                style={{ width: "7rem" }}
                alt="xd"
              />
            </div>
            <h3>{el.charAt(0).toUpperCase() + el.slice(1)}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
