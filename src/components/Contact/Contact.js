import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import InputStyled from "../stateless/input/InputStyled";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_va6cnim",
        "template_24td2r1",
        form.current,
        "4hhZQ1w3snYi_0eUe"
      )
      .then(
        (result) => {
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="section-contact">
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
        <InputStyled type={"text"} name="email" />
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
