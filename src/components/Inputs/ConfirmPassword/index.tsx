import React, { useState, FC } from "react";
import { InputContainer, RedInput, NormalInput } from "../inputs.styles";

const Postcode: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <InputContainer onClick={() => setClicked(true)}>
          <p>Postcode</p>
          <RedInput></RedInput>
        </InputContainer>
      )}
      {clicked && (
        <InputContainer>
          <p>Postcode</p>
          <NormalInput>EH1 1HE</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default Postcode;
