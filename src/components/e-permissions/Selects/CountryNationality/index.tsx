import React, { useState, FC } from "react";
import {
  SelectContainer,
  RedSelect,
  NormalSelect,
  SelectorContainer,
} from "../selects.styles";
import chevronDown from "images/icon-chev-down.png";
import { saveNationality } from "../../../../screens/2.PersonalDetails/personalDetailsSlice";
import { useDispatch } from "react-redux";

interface CountryNationalityProps {
  state?: number;
  setState: any;
}

const CountryNationality: FC<CountryNationalityProps> = ({
  state,
  setState,
}) => {
  const [nationality, setNationality] = useState("Please choose...");

  const dispatch = useDispatch();
  const clickFunc = (titleString: string) => {
    dispatch(saveNationality(titleString));
    setState(2);
    setNationality(titleString);
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
          <p>Country of nationality</p>
          <RedSelect>
            {nationality}
            <img src={chevronDown} alt="" />
          </RedSelect>
        </SelectContainer>
      )}
      {state === 1 && (
        <SelectContainer>
          <p>Country of nationality</p>
          <SelectorContainer>
            <NormalSelect
              onClick={(e) => {
                e.preventDefault();
                setState(0);
              }}
            >
              {nationality}
              <img src={chevronDown} alt="" />
            </NormalSelect>
            <button
              onClick={(e) => {
                e.preventDefault();
                clickFunc("United Kingdom");
              }}
            >
              United Kingdom
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                clickFunc("Other");
              }}
            >
              Other
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
          <p>Country of nationality</p>
          <NormalSelect>
            {nationality} <img src={chevronDown} alt="" />
          </NormalSelect>
        </SelectContainer>
      )}
    </>
  );
};

export default CountryNationality;
