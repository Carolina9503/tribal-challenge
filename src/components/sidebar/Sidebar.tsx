import React from "react";
import "../sidebar/Sidebar.css";
import icon from "../../assets/icon/Icon.png";
import card from "../../assets/icon/card.png";
import bank from "../../assets/icon/bank.png";
import dollar from "../../assets/icon/dollar.png";
import shape from "../../assets/icon/Shape.png";
import user from "../../assets/icon/user.png";

export const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li>
        <img src={icon} alt="" /> <span>Overview</span>
      </li>
      <li>
        <img src={card} alt="" /> <span>Tribal Pay</span>
      </li>
      <li>
        <img src={bank} alt="" />
        <span>Tribal Credit</span>
      </li>
      <li>
        <img src={dollar} alt="" />
        <span>Payments</span>
      </li>
      <li>
        <img src={shape} alt="" />
        <span>Notifications</span>
      </li>
      <li>
        <img src={user} alt="" />
        <span>Users</span>
      </li>
    </ul>
  );
};
