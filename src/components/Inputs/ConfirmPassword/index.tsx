import React, { useState, FC } from "react";
import { InputContainer, RedInput, NormalInput } from "../inputs.styles";

const ConfirmPassword: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <InputContainer onClick={() => setClicked(true)}>
          <p>Confirm your password</p>
          <RedInput></RedInput>
        </InputContainer>
      )}
      {clicked && (
        <InputContainer>
          <p>Confirm your password</p>
          <NormalInput>************</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default ConfirmPassword;
