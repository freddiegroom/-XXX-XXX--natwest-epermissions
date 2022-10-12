import React, { FC } from "react";
import {
  RedInputContainer,
  InputContainer,
  RedInput,
  NormalInput,
} from "../inputs.styles";

interface LastNameProps {
  state?: number;
  setState: any;
}

const LastName: FC<LastNameProps> = ({ state, setState }) => {
  return (
    <>
      {!state && (
        <RedInputContainer
          onClick={(e) => {
            e.preventDefault();
            setState(1);
          }}
        >
          <p>Last Name</p>
          <RedInput>Smith</RedInput>
        </RedInputContainer>
      )}
      {state && (
        <InputContainer>
          <p>Last Name</p>
          <NormalInput>Smith</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default LastName;
