import React, { FC } from "react";
import {
  RedInputContainer,
  InputContainer,
  RedInput,
  NormalInput,
} from "../inputs.styles";
import redChevronDown from "images/icon-chev-up.png";

interface MobileNumberProps {
  state?: number;
  setState: any;
}

const MobileNumber: FC<MobileNumberProps> = ({ state, setState }) => {
  return (
    <>
      {!state && (
        <RedInputContainer
          onClick={(e) => {
            e.preventDefault();
            setState(true);
          }}
        >
          <p>Mobile number</p>
          <p className="redSubText">
            Why do you need my number?{" "}
            <img src={redChevronDown} alt="chevron down" />
          </p>
          <RedInput>0778****234</RedInput>
        </RedInputContainer>
      )}
      {state && (
        <InputContainer>
          <p>Mobile number</p>
          <p className="redSubText">
            Why do you need my number?{" "}
            <img src={redChevronDown} alt="chevron down" />
          </p>
          <NormalInput>0778****234</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default MobileNumber;
