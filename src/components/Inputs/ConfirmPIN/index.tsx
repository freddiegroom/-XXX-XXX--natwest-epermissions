import React, { useState, FC } from "react";
import { InputContainer, RedInput, NormalInput } from "../inputs.styles";

const ConfirmPIN: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <InputContainer onClick={() => setClicked(true)}>
          <p>Confirm your PIN</p>
          <RedInput></RedInput>
        </InputContainer>
      )}
      {clicked && (
        <InputContainer>
          <p>Confirm your PIN</p>
          <NormalInput>5467</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default ConfirmPIN;
