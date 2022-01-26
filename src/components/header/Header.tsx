import React from "react";
import logo from "../../assets/img/tribal - logo.png";

import { useTranslation } from "react-i18next";
import Spanish from "../../assets/img/espana.png";
import English from "../../assets/img/reino-unido.png";

import "../header/Header.css";
import chevron from "../../assets/icon/chevron.png";

export const Header = () => {
  const [t, i18n] = useTranslation();
  return (
    <nav className="navbar navbar-white bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" />
          <div className="logo-hb">
            <h2 className="logo-hb__text">HB</h2>
          </div>
          <img className="p-2" src={chevron} alt="" />
          <button className="flags" onClick={() => i18n.changeLanguage("es")}>
            <img src={Spanish} alt="" />
          </button>
          <button className="flags" onClick={() => i18n.changeLanguage("en")}>
            <img src={English} alt="" />
          </button>
        </a>
      </div>
    </nav>
  );
};
