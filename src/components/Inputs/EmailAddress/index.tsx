import React, { useState, FC } from "react";
import {
  RedInputContainer,
  InputContainer,
  RedInput,
  NormalInput,
} from "../inputs.styles";
import redChevronDown from "../../../images/icon-chev-up.png";

interface EmailAddressProps {
  state?: number;
  setState: any;
}

const EmailAddress: FC<EmailAddressProps> = ({ state, setState }) => {
  return (
    <>
      {!state && (
        <RedInputContainer
          onClick={(e) => {
            e.preventDefault();
            setState(1);
          }}
        >
          <p>Email address</p>
          <p className="redSubText">
            Why do you need my email?{" "}
            <img src={redChevronDown} alt="chevron down" />
          </p>
          <RedInput>alexsmith@gmail.com</RedInput>
        </RedInputContainer>
      )}
      {state && (
        <InputContainer>
          <p>Email address</p>
          <p className="redSubText">
            Why do you need my email?{" "}
            <img src={redChevronDown} alt="chevron down" />
          </p>
          <NormalInput>alexsmith@gmail.com</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default EmailAddress;
