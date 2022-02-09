import React, { FC } from "react";
import {
  BeigeContentContainerStyle,
  BeigeContainer,
} from "./BeigeContentContainer.style";

const BeigeContentContainer: FC = ({ children }) => {
  return (
    <BeigeContentContainerStyle>
      <BeigeContainer>{children}</BeigeContainer>
    </BeigeContentContainerStyle>
  );
};

export default BeigeContentContainer;
