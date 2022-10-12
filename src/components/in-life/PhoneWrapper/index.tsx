import React, { FC } from "react";
import PhoneHeader from "./PhoneHeader";
import {
  PhoneWrapperStyle,
  PhoneBorder,
  DesktopWrapperStyle,
} from "./PhoneWrapper.styles";

interface PhoneWrapperProps {
  children: any;
}

const PhoneWrapper: FC<PhoneWrapperProps> = ({ children }) => {
  return (
    <>
      <PhoneWrapperStyle>
        <PhoneBorder>
          {" "}
          <PhoneHeader></PhoneHeader>
          {children}
        </PhoneBorder>
      </PhoneWrapperStyle>
      <DesktopWrapperStyle>{children}</DesktopWrapperStyle>
    </>
  );
};

export default PhoneWrapper;
