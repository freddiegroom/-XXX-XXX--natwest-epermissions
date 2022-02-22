import React from "react";
import { SubmitButtonStyled, SubmitButtonWrapper } from "./SubmitButton.styles";

const SubmitButton = (handleFinishExperiment: any) => {
  return (
    <SubmitButtonWrapper>
      <SubmitButtonStyled onClick={handleFinishExperiment}>
        Submit
      </SubmitButtonStyled>
    </SubmitButtonWrapper>
  );
};

export default SubmitButton;
