import React, { FC } from "react";
import { ButtonStyle } from "./ChooseButton.style";

const ChooseButton: FC = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default ChooseButton;
