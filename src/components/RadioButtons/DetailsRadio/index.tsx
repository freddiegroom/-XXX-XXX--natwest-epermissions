import React, { useState, FC } from "react";
import {
  RadioContainer,
  DisabledRadio,
  RedRadio,
  NormalRadio,
  RedCircle,
} from "../radios.styles";

interface DetailsRadioProps {
  state: any;
  setState: any;
}

const DetailsRadio: FC<DetailsRadioProps> = ({ state, setState }) => {
  return (
    <>
      {!state && (
        <RadioContainer
          onClick={(e) => {
            e.preventDefault();
            setState(1);
          }}
        >
          <RedRadio></RedRadio>
          <p>Yes</p>
        </RadioContainer>
      )}
      {state && (
        <RadioContainer>
          <NormalRadio>
            <RedCircle />
          </NormalRadio>
          <p>Yes</p>
        </RadioContainer>
      )}
      <RadioContainer>
        <DisabledRadio></DisabledRadio>
        <p>No</p>
      </RadioContainer>
    </>
  );
};

export default DetailsRadio;
