import React, { useState, FC } from "react";
import {
  RedInputContainer,
  InputContainer,
  RedInput,
  NormalInput,
} from "../inputs.styles";

const LastName: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <RedInputContainer onClick={() => setClicked(true)}>
          <p>Last Name</p>
          <RedInput></RedInput>
        </RedInputContainer>
      )}
      {clicked && (
        <InputContainer>
          <p>Last Name</p>
          <NormalInput>Smith</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default LastName;
