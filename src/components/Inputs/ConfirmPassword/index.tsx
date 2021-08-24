import React, { useState, FC } from "react";
import { InputContainer, RedInput, NormalInput } from "../inputs.styles";

interface ConfirmPasswordProps {
  state: boolean;
  setState: any;
}

const ConfirmPassword: FC<ConfirmPasswordProps> = ({ state, setState }) => {
  return (
    <>
      {!state && (
        <InputContainer onClick={() => setState(1)}>
          <p>Confirm your password</p>
          <RedInput>************</RedInput>
        </InputContainer>
      )}
      {state && (
        <InputContainer>
          <p>Confirm your password</p>
          <NormalInput>************</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default ConfirmPassword;
