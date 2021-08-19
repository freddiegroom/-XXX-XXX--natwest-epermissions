import React, { FC } from "react";
import { NextButtonStyle, NextButtonContainer } from "./NextButton.style";
import bottomBevel from "../../../images/bottom-bevel.png";
import largebottomBevel from "../../../images/large-bottom-bevel.png";
import { useHistory } from "react-router-dom";

export interface NextButtonProps {
  routeAddress: string;
}

const NextButton: FC<NextButtonProps> = ({ routeAddress }) => {
  const history = useHistory();
  const handleNextPage = (route: string) => {
    history.push(route);
  };

  console.log(routeAddress);
  return (
    <NextButtonContainer>
      <NextButtonStyle onClick={() => handleNextPage(`${routeAddress}`)}>
        Next
      </NextButtonStyle>
      <img className="smallBevel" src={bottomBevel} alt="" />
      <img className="largeBevel" src={largebottomBevel} alt="" />
    </NextButtonContainer>
  );
};

export default NextButton;
