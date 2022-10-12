import React, { FC } from "react";
import { NextButtonStyle, NextButtonContainer } from "./NextButton.style";
import bottomBevel from "../../../images/bottom-bevel.png";
import largebottomBevel from "../../../images/large-bottom-bevel.png";

export interface NextButtonProps {
  continueFunction: any;
}

const ContinueButton: FC<NextButtonProps> = ({ continueFunction }) => {
  return (
    <NextButtonContainer>
      <NextButtonStyle
        onClick={(e) => {
          e.preventDefault();
          continueFunction();
        }}
      >
        Next
      </NextButtonStyle>
      <img className="smallBevel" src={bottomBevel} alt="" />
      <img className="largeBevel" src={largebottomBevel} alt="" />
    </NextButtonContainer>
  );
};

export default ContinueButton;
