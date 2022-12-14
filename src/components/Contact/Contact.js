import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import InputStyled from "../stateless/input/InputStyled";
import "./contact.css";
import { useDispatch } from "react-redux";
import { reset } from "../../state/formSlice";

const Contact = ({ contactRef }) => {
  const form = useRef();
  const dispatch = useDispatch();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tdopazp",
        "template_i5b2t8q",
        form.current,
        "4hhZQ1w3snYi_0eUe"
      )
      .then(
        (result) => {
          dispatch(reset());
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="section-contact" ref={contactRef}>
      <h2 className="align-self-center text-light">CONTACT</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <InputStyled type={"text"} name="name" />
        <InputStyled type={"email"} name="email" />
        <InputStyled type={"textarea"} name="message" />

        <button
          type="submit"
          required
          className="align-self-center buttonForm btn-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
