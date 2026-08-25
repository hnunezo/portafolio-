import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./hero.css";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="hero-container">
      <div className="hero-copy">
        <h1 className="hero-name">Héctor Núñez</h1>
        <h2 className="hero-role">{t("hero.role")}</h2>
        <p className="hero-pitch">{t("hero.pitch")}</p>
        <p className="hero-meta">{t("hero.meta")}</p>
      </div>
    </div>
  );
};

export default Hero;
