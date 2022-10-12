import React, { FC } from "react";
import { InputContainer, RedInput, NormalInput } from "./inputs.styles";

interface ConfirmPINProps {
  state: any;
  setState: any;
}

const ConfirmPIN: FC<ConfirmPINProps> = ({ state, setState }) => {
  // const [input, setInput] = useState("");
  let num = "5467";
  return (
    <>
      {state !== num && (
        <InputContainer>
          <p>Confirm your PIN</p>
          <RedInput
            onChange={(event) => setState(`${event.target.value}`)}
          ></RedInput>
        </InputContainer>
      )}
      {state === num && (
        <InputContainer>
          <p>Confirm your PIN</p>
          <NormalInput>5467</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default ConfirmPIN;
