import React, { useState, FC } from "react";
import {
  RedInputContainer,
  InputContainer,
  RedInput,
  NormalInput,
} from "../inputs.styles";

const MobileNumber: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <RedInputContainer onClick={() => setClicked(true)}>
          <p>Mobile number</p>
          <p className="subText">Why do you need my number? v</p>
          <RedInput></RedInput>
        </RedInputContainer>
      )}
      {clicked && (
        <InputContainer>
          <p>Mobile number</p>
          <p className="subText">Why do you need my number? v</p>
          <NormalInput>0778****234</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default MobileNumber;
