import React, { FC } from "react";
import { ButtonStyle } from "./Button.style";

const Button: FC = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;
