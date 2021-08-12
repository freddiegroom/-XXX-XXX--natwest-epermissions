import React, { FC } from "react";
import { HeaderStyle, IconRow, TitleRow } from "./Header.style";
import nwLogo from "../../images/nw-logo.png";
import otherLogo from "../../images/credit-card-logo.png";

const Header: FC = ({ children }) => {
  return (
    <HeaderStyle>
      <IconRow>
        <img src={nwLogo} alt={`${nwLogo}`} />
      </IconRow>
      <TitleRow>
        <h1>{children}</h1>
        <img src={otherLogo} alt={`${otherLogo}`} />
      </TitleRow>
    </HeaderStyle>
  );
};
export default Header;
