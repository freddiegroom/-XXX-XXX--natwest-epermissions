import React, { FC } from "react";
import { NextButtonStyle, NextButtonContainer } from "./FakeNextButton.style";
import bottomBevel from "images/bottom-bevel.png";
import largebottomBevel from "images/large-bottom-bevel.png";

export interface FakeNextButtonProps {
  setState: any;
}

const FakeNextButton: FC<FakeNextButtonProps> = ({ setState }) => {
  const clickFunc = () => {
    setState(true);
  };
  return (
    <NextButtonContainer>
      <NextButtonStyle
        onClick={(e) => {
          e.preventDefault();
          clickFunc();
        }}
      >
        Next
      </NextButtonStyle>
    </NextButtonContainer>
  );
};

export default FakeNextButton;
