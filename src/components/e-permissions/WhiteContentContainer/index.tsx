import React, { FC } from "react";
import {
  ContentContainerStyle,
  Container,
} from "./WhiteContentContainer.style";

const WhiteContentContainer: FC = ({ children }) => {
  return (
    <ContentContainerStyle>
      <Container>{children}</Container>
    </ContentContainerStyle>
  );
};

export default WhiteContentContainer;
