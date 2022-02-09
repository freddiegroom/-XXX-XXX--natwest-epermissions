import React, { FC } from "react";
import {
  BlankContentContainerStyle,
  BlankContainer,
} from "./BlankContentContainer.style";

const BlankContentContainer: FC = ({ children }) => {
  return (
    <BlankContentContainerStyle>
      <BlankContainer>{children}</BlankContainer>
    </BlankContentContainerStyle>
  );
};

export default BlankContentContainer;
