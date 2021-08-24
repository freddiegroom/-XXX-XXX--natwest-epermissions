import React, { FC } from "react";
import { InputContainer, RedInput, NormalInput } from "../inputs.styles";

interface ChoosePasswordProps {
  state: boolean;
  setState: any;
}

const ChoosePassword: FC<ChoosePasswordProps> = ({ state, setState }) => {
  return (
    <>
      {!state && (
        <InputContainer onClick={() => setState(true)}>
          <p>Choose your Online Banking password</p>
          <RedInput>************</RedInput>
        </InputContainer>
      )}
      {state && (
        <InputContainer>
          <p>Choose your Online Banking password</p>
          <NormalInput>************</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default ChoosePassword;
