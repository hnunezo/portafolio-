import React from "react";
import "./section.css";

const Section = ({ children, style }) => {
  return (
    <div className="section" style={style}>
      {children}
    </div>
  );
};

export default Section;
