import React from "react";
import "./input.css";

const InputStyled = ({ type, name }) => {
  return (
    <div>
      {type !== "textarea" ? (
        <div className="input-group">
          <input className="input" type={type} name={name} required />
          <label className="input-label">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </label>
        </div>
      ) : (
        <div className="input-group">
          <textarea className="input" name={name} required />
          <label className="input-label">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </label>{" "}
        </div>
      )}
    </div>
  );
};

export default InputStyled;
