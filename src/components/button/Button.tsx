import React from "react";
import "../button/Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  styleButton: string;
}

export const Button = ({ name, styleButton, type, ...props }: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      className={`button ${styleButton}`}
      {...props}
    >
      {name}
    </button>
  );
};
