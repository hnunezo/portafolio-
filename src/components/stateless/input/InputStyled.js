import React from "react";
import "./input.css";
import { setMail, setMessage, setUsername } from "../../../state/formSlice";
import { useDispatch, useSelector } from "react-redux";

const InputStyled = ({ type, name }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.form);

  console.log(state);

  return (
    <div>
      {name === "name" ? (
        <div className="input-group">
          <input
            className={state.username === "" ? "input" : "input fully"}
            type={type}
            name={name}
            required
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
          <label
            className={
              state.username === "" ? "input-label" : "input-label transform"
            }
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </label>
        </div>
      ) : name === "email" ? (
        <div className="input-group">
          <input
            className={state.mail === "" ? "input" : "input fully"}
            type={type}
            name={name}
            required
            onChange={(e) => dispatch(setMail(e.target.value))}
          />
          <label
            className={
              state.mail === "" ? "input-label" : "input-label transform"
            }
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </label>
        </div>
      ) : (
        <div className="input-group">
          <textarea
            className={state.message === "" ? "input" : "input fully"}
            name={name}
            required
            onChange={(e) => dispatch(setMessage(e.target.value))}
          />
          <label
            className={
              state.message === "" ? "input-label" : "input-label transform"
            }
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </label>{" "}
        </div>
      )}
    </div>
  );
};

export default InputStyled;
