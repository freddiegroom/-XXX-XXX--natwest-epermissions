import React, { useState, FC } from "react";
import {
  RadioContainer,
  DisabledRadio,
  RedRadio,
  NormalRadio,
  RedCircle,
} from "../tickboxes.styles";

const TickBox: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <RadioContainer
          onClick={(e) => {
            e.preventDefault();
            setClicked(true);
          }}
        >
          <RedRadio></RedRadio>
          <p>Yes</p>
        </RadioContainer>
      )}
      {clicked && (
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

export default TickBox;
