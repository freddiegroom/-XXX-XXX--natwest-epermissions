import React, { useState, FC } from "react";
import { SelectContainer, RedSelect, NormalSelect } from "../selects.styles";
import chevronDown from "../../../images/icon-chev-down.png";

const Title: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <SelectContainer onClick={() => setClicked(true)}>
          <p>Title</p>
          <RedSelect>
            Please choose...
            <img src={chevronDown} alt="" />
          </RedSelect>
        </SelectContainer>
      )}
      {clicked && (
        <SelectContainer>
          <p>Title</p>
          <NormalSelect>
            Mr <img src={chevronDown} alt="" />
          </NormalSelect>
        </SelectContainer>
      )}
    </>
  );
};

export default Title;
