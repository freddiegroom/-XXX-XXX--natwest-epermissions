import React, { FC } from "react";
import {
  HeaderContainer,
  HeaderStyle,
  IconRow,
  TitleRow,
} from "./Header.style";
import nwLogo from "../../../images/nw-logo.png";
// import otherLogo from "../../images/credit-card-logo.png";

interface HeaderImageProps {
  image?: string;
}

const Header: FC<HeaderImageProps> = ({ children, image }) => {
  return (
    <HeaderContainer>
      <HeaderStyle>
        <IconRow>
          <img src={nwLogo} alt={`${nwLogo}`} />
        </IconRow>
        <TitleRow>
          <h1>{children}</h1>
          {image && <img src={image} alt={`${image}`} />}
        </TitleRow>
      </HeaderStyle>
    </HeaderContainer>
  );
};
export default Header;
