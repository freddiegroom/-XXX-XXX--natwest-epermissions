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
    setTitle(titleString);
  };

  return (
    <>
      {!state && (
        <SelectContainer onClick={() => setState(1)}>
          <p>Title</p>
          <RedSelect>
            {title}
            <img src={chevronDown} alt="" />
          </RedSelect>
        </SelectContainer>
      )}
      {state === 1 && (
        <SelectContainer onClick={() => setState(2)}>
          <p>Title</p>
          <SelectorContainer>
            <NormalSelect>
              {title}
              <img src={chevronDown} alt="" />
            </NormalSelect>
            <button onClick={() => clickFunc("Mr")}>Mr</button>
            <button onClick={() => clickFunc("Mrs")}>Mrs</button>
            <button onClick={() => clickFunc("Miss")}>Miss</button>
            <button onClick={() => clickFunc("Ms")}>Ms</button>
            <button onClick={() => clickFunc("Dr")}>Dr</button>
            <button onClick={() => clickFunc("Professor")}>Professor</button>
          </SelectorContainer>
        </SelectContainer>
      )}

      {state === 2 && (
        <SelectContainer onClick={() => setState(1)}>
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
