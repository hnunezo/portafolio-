import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import InputStyled from "../stateless/input/InputStyled";
import "./contact.css";
import { useDispatch } from "react-redux";
import { reset } from "../../state/formSlice";
import { useLanguage } from "../../i18n/LanguageContext";

const Contact = ({ contactRef }) => {
  const form = useRef();
  const dispatch = useDispatch();
  const { t } = useLanguage();

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
        () => {
          dispatch(reset());
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="section-contact" ref={contactRef} id="contact">
      <h2 className="align-self-center text-light">{t("contact.title")}</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <InputStyled type="text" name="name" label={t("contact.name")} />
        <InputStyled type="email" name="email" label={t("contact.email")} />
        <InputStyled
          type="textarea"
          name="message"
          label={t("contact.message")}
        />

        <button type="submit" className="align-self-center buttonForm btn-2">
          {t("contact.send")}
        </button>
      </form>
    </div>
  );
};

export default Contact;
