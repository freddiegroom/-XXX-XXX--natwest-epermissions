import React, { FC } from "react";
import {
  BackButtonStyle,
  BackButtonContainer,
  // SmallBevel,
  LargeBevel,
} from "./BackButton.style";
import bottomBevel from "../../../images/bottom-bevel.png";
import largebottomBevel from "../../../images/large-bottom-bevel.png";
import { useHistory } from "react-router-dom";

export interface BackButtonProps {
  routeAddress: string;
  pageTimeFunc: any;
}

const BackButton: FC<BackButtonProps> = ({ routeAddress, pageTimeFunc }) => {
  const history = useHistory();
  const handleNextPage = (route: string) => {
    pageTimeFunc();
    history.push(route);
  };

  return (
    <BackButtonContainer>
      <BackButtonStyle
        onClick={(e) => {
          e.preventDefault();
          handleNextPage(`${routeAddress}`);
        }}
      >
        Back
      </BackButtonStyle>
      <LargeBevel src={largebottomBevel} />
    </BackButtonContainer>
  );
};

export default BackButton;
