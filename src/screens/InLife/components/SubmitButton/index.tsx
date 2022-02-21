import React from "react";
import { SubmitButtonStyled, SubmitButtonWrapper } from "./SubmitButton.styles";

const SubmitButton = (finishExperiment: any) => {
  return (
    <SubmitButtonWrapper>
      <SubmitButtonStyled onClick={(e) => finishExperiment(e)}>
        Submit
      </SubmitButtonStyled>
    </SubmitButtonWrapper>
  );
};

export default SubmitButton;
