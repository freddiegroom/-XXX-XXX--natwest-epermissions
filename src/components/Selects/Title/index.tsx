import React, { useState, FC } from "react";
import {
  SelectContainer,
  RedSelect,
  NormalSelect,
  SelectorContainer,
} from "../selects.styles";
import chevronDown from "../../../images/icon-chev-down.png";
import { saveTitle } from "../../../screens/2.PersonalDetails/personalDetailsSlice";
import { useDispatch } from "react-redux";

interface TitleProps {
  state?: number;
  setState: any;
}

const Title: FC<TitleProps> = ({ state, setState }) => {
  const [title, setTitle] = useState("Please choose...");
  const dispatch = useDispatch();
  const clickFunc = (titleString: string) => {
    dispatch(saveTitle(titleString));
    setState(2);
    setTitle(titleString);
  };

  return (
    <>
      {!state && (
        <SelectContainer
          onClick={(e) => {
            e.preventDefault();
            setState(1);
          }}
        >
          <p>Title</p>
          <RedSelect>
            {title}
            <img src={chevronDown} alt="" />
          </RedSelect>
        </SelectContainer>
      )}
      {state === 1 && (
        <SelectContainer>
          <p>Title</p>
          <SelectorContainer>
            <NormalSelect
              onClick={(e) => {
                e.preventDefault();
                setState(0);
              }}
            >
              {title}
              <img src={chevronDown} alt="" />
            </NormalSelect>
            <button
              onClick={(e) => {
                e.preventDefault();
                clickFunc("Mr");
              }}
            >
              Mr
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                clickFunc("Mrs");
              }}
            >
              Mrs
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                clickFunc("Miss");
              }}
            >
              Miss
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                clickFunc("Ms");
              }}
            >
              Ms
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                clickFunc("Dr");
              }}
            >
              Dr
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                clickFunc("Professor");
              }}
            >
              Professor
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
          <p>Title</p>
          <NormalSelect>
            {title} <img src={chevronDown} alt="" />
          </NormalSelect>
        </SelectContainer>
      )}
    </>
  );
};

export default Title;
