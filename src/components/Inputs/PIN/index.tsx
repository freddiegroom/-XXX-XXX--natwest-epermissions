import React, { useState, FC } from "react";
import { InputContainer, RedInput, NormalInput } from "../inputs.styles";

interface PINProps {
  state: boolean;
  setState: any;
}

const PIN: FC<PINProps> = ({ state, setState }) => {
  return (
    <>
      {!state && (
        <InputContainer onClick={() => setState(true)}>
          <RedInput>5467</RedInput>
        </InputContainer>
      )}
      {state && (
        <InputContainer>
          <NormalInput>5467</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default PIN;
