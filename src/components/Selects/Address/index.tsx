import React, { useState, FC } from "react";
import { SelectContainer, RedSelect, NormalSelect } from "../selects.styles";
import chevronDown from "../../../images/icon-chev-down.png";

const Address: FC = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <SelectContainer onClick={() => setClicked(true)}>
          <p>Your address</p>
          <RedSelect>
            Please choose...
            <img src={chevronDown} alt="" />
          </RedSelect>
        </SelectContainer>
      )}
      {clicked && (
        <SelectContainer>
          <p>Your address</p>
          <NormalSelect>
            1 Example Road, Edinburgh <img src={chevronDown} alt="" />
          </NormalSelect>
        </SelectContainer>
      )}
    </>
  );
};

export default Address;
