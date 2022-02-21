import React, { FC } from "react";
import { CheckBoxWrapper, CheckBoxImg, CheckBoxLabel } from "./Checkbox.styles";
import trueSwitch from "./switch-true.png";
import falseSwitch from "./switch-false.png";

interface CheckBoxProps {
  label: string;
}

const CheckBox: FC<CheckBoxProps> = ({ label }) => {
  return (
    <CheckBoxWrapper>
      <CheckBoxImg src={trueSwitch} />
      <CheckBoxImg src={falseSwitch} />
      <CheckBoxLabel>{label}</CheckBoxLabel>
    </CheckBoxWrapper>
  );
};

export default CheckBox;
