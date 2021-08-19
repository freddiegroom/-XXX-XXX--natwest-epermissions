import React, { useState, FC } from "react";
import { InputContainer, RedInput, NormalInput } from "../inputs.styles";

const PIN: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <InputContainer onClick={() => setClicked(true)}>
          <RedInput></RedInput>
        </InputContainer>
      )}
      {clicked && (
        <InputContainer>
          <NormalInput>5467</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default PIN;
