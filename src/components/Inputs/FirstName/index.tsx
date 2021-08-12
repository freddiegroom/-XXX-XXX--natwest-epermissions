import React, { useState, FC } from "react";
import {
  RedInputContainer,
  InputContainer,
  RedInput,
  NormalInput,
} from "../inputs.styles";

const FirstName: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <RedInputContainer onClick={() => setClicked(true)}>
          <p>First Name</p>
          <RedInput></RedInput>
        </RedInputContainer>
      )}
      {clicked && (
        <InputContainer>
          <p>First Name</p>
          <NormalInput>Alex</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default FirstName;
