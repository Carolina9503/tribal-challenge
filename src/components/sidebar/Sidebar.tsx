import React from "react";
import "../sidebar/Sidebar.css";
import icon from "../../assets/icon/Icon.png";
import card from "../../assets/icon/card.png";
import bank from "../../assets/icon/bank.png";
import dollar from "../../assets/icon/dollar.png";
import shape from "../../assets/icon/Shape.png";
import user from "../../assets/icon/user.png";

import { useTranslation } from "react-i18next";

export const Sidebar = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <ul className="sidebar">
      <li>
        <img src={icon} alt="" /> <span>{t("sidebar.overview")}</span>
      </li>
      <li>
        <img src={card} alt="" /> <span>{t("sidebar.tribal-pay")}</span>
      </li>
      <li>
        <img src={bank} alt="" />
        <span>{t("sidebar.tribal-credit")}</span>
      </li>
      <li>
        <img src={dollar} alt="" />
        <span>{t("sidebar.payments")}</span>
      </li>
      <li>
        <img src={shape} alt="" />
        <span>{t("sidebar.notifications")}</span>
      </li>
      <li>
        <img src={user} alt="" />
        <span>{t("sidebar.users")}</span>
      </li>
    </ul>
  );
};
