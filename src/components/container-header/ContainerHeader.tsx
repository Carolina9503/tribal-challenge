import React from "react";

import "./ContainerHeader.css";

type ContainerHeaderProps = {
  title: string | React.ReactNode;
  rightContent?: React.ReactNode;
};
const ContainerHeader = ({ title, rightContent }: ContainerHeaderProps) => {
  return (
    <div className="container-header">
      <h1 className="container-header__title">{title}</h1>
      <div className="container-header__actions">{rightContent}</div>
    </div>
  );
};

export default ContainerHeader;
