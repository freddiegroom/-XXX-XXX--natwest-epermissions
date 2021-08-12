import React, { useState, FC } from "react";
import {
  RedInputContainer,
  InputContainer,
  RedInput,
  NormalInput,
} from "../inputs.styles";

const EmailAddress: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <RedInputContainer onClick={() => setClicked(true)}>
          <p>Email address</p>
          <p className="subText">Why do you need my email? v</p>
          <RedInput></RedInput>
        </RedInputContainer>
      )}
      {clicked && (
        <InputContainer>
          <p>Email address</p>
          <p className="subText">Why do you need my number? v</p>
          <NormalInput>alexsmith@gmail.com</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default EmailAddress;
