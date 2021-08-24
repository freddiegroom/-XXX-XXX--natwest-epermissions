import React, { useState, FC } from "react";
import {
  SelectContainer,
  RedSelect,
  NormalSelect,
  SelectorContainer,
} from "../selects.styles";
import chevronDown from "../../../images/icon-chev-down.png";

interface AddressProps {
  state?: number;
  setState: any;
}

const Address: FC<AddressProps> = ({ state, setState }) => {
  const [address, setAddress] = useState("Please choose...");

  const clickFunc = (titleString: string) => {
    setState(2);
    setAddress(titleString);
  };
  return (
    <>
      {state === 0 && (
        <SelectContainer
          onClick={(e) => {
            e.preventDefault();
            setState(1);
          }}
        >
          <p>Your address</p>
          <RedSelect>
            {address}
            <img src={chevronDown} alt="" />
          </RedSelect>
        </SelectContainer>
      )}
      {state === 1 && (
        <SelectContainer>
          <p>Your address</p>
          <SelectorContainer>
            <NormalSelect
              onClick={(e) => {
                e.preventDefault();
                setState(0);
              }}
            >
              {address} <img src={chevronDown} alt="" />
            </NormalSelect>
            <button
              onClick={(e) => {
                e.preventDefault();
                clickFunc("1 Example Road, Edinburgh");
              }}
            >
              1 Example Road, Edinburgh
            </button>
          </SelectorContainer>
        </SelectContainer>
      )}

      {state === 2 && (
        <SelectContainer
          onClick={(e) => {
            e.preventDefault();
            setState(1);
          }}
        >
          <p>Your address</p>
          <NormalSelect>
            {address} <img src={chevronDown} alt="" />
          </NormalSelect>
        </SelectContainer>
      )}
    </>
  );
};

export default Address;
