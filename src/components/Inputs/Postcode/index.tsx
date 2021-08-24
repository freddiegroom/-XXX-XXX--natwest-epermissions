import React, { useState, FC } from "react";
import { InputContainer, RedInput, NormalInput } from "../inputs.styles";

interface PostcodeProps {
  state?: number;
  setState: any;
}

const Postcode: FC<PostcodeProps> = ({ state, setState }) => {
  return (
    <>
      {!state && (
        <InputContainer onClick={() => setState(1)}>
          <p>Postcode</p>
          <RedInput>EH1 1HE</RedInput>
        </InputContainer>
      )}
      {state && (
        <InputContainer>
          <p>Postcode</p>
          <NormalInput>EH1 1HE</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default Postcode;
