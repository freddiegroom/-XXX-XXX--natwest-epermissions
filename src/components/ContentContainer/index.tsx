import React, { FC } from "react";
import { ContentContainerStyle, Container } from "./ContentContainer.style";

const ContentContainer: FC = ({ children }) => {
  return (
    <ContentContainerStyle>
      <Container>{children}</Container>
    </ContentContainerStyle>
  );
};

export default ContentContainer;
