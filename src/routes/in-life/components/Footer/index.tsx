import React, { FC } from "react";
import { FooterStyle, FooterWrapper } from "./Footer.style";

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterStyle>
        <p>© 2017 - 2022 National Westminster Bank Plc </p>
      </FooterStyle>
    </FooterWrapper>
  );
};

export default Footer;
