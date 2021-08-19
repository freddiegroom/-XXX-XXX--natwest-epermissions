import React, { useState, FC } from "react";
import { SelectContainer, RedSelect, NormalSelect } from "../selects.styles";
import chevronDown from "../../../images/icon-chev-down.png";

const CountryNationality: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <SelectContainer onClick={() => setClicked(true)}>
          <p>Country of nationality</p>
          <RedSelect>
            Please choose...
            <img src={chevronDown} alt="" />
          </RedSelect>
        </SelectContainer>
      )}
      {clicked && (
        <SelectContainer>
          <p>Country of nationality</p>
          <NormalSelect>
            Monaco <img src={chevronDown} alt="" />
          </NormalSelect>
        </SelectContainer>
      )}
    </>
  );
};

export default CountryNationality;
