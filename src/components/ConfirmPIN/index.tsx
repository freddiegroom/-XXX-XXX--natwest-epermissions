import React, { useState, FC } from "react";
import { InputContainer, RedInput, NormalInput } from "./inputs.styles";

const ConfirmPIN: FC = () => {
  const [input, setInput] = useState("");
  let num = "5467";
  return (
    <>
      {input != num && (
        <InputContainer>
          <p>Confirm your PIN</p>
          <RedInput
            onChange={(event) => setInput(`${event.target.value}`)}
          ></RedInput>
        </InputContainer>
      )}
      {input == num && (
        <InputContainer>
          <p>Confirm your PIN</p>
          <NormalInput>5467</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default ConfirmPIN;
