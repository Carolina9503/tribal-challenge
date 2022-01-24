import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  register?: UseFormRegisterReturn;
}
export const Input = ({ type, register, ...props }: InputProps) => {
  return (
    <input type={type} className="form-control" {...register} {...props} />
  );
};
