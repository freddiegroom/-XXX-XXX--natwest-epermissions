import React, { FC } from "react";
import { InputContainer, NormalInput } from "../inputs.styles";

const MiddleName: FC = () => {
  return (
    <>
      <InputContainer>
        <p>Middle Name</p>
        <p className="subText">
          You need to tell us if you've got a middle name. Your name must match
          your ID.
        </p>
        <NormalInput></NormalInput>
      </InputContainer>
    </>
  );
};

export default MiddleName;
