import React, { useState, FC } from "react";
import { InputContainer, RedInput, NormalInput } from "../inputs.styles";

const ChoosePassword: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <InputContainer onClick={() => setClicked(true)}>
          <p>Choose your Online Banking password</p>
          <RedInput></RedInput>
        </InputContainer>
      )}
      {clicked && (
        <InputContainer>
          <p>Choose your Online Banking password</p>
          <NormalInput>************</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default ChoosePassword;
