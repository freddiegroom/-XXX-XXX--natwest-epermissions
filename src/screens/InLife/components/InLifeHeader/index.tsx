import React from "react";
import { InLifeHeaderLogo, InLifeHeaderStyle } from "./InLifeHeader.styles";
import logo from "./logo.png";

const InLifeHeader = () => {
  return (
    <InLifeHeaderStyle>
      <InLifeHeaderLogo src={logo} />
    </InLifeHeaderStyle>
  );
};

export default InLifeHeader;
