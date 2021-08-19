import React, { useState, FC } from "react";
import {
  MultipleInputContainer,
  InputContainer,
  RedInput,
  NormalInput,
  SmallRedInput,
  SmallNormalInput,
} from "../multipleInputs.styles";
import slash from "../../../images/slash.png";

const DOB: FC = () => {
  const [ddClicked, ddSetClicked] = useState(false);
  const [mmClicked, mmSetClicked] = useState(false);
  const [yyyyClicked, yyyySetClicked] = useState(false);
  return (
    <>
      <p>Date of birth</p>
      <MultipleInputContainer>
        {!ddClicked && (
          <InputContainer onClick={() => ddSetClicked(true)}>
            <p className="subText">DD</p>
            <SmallRedInput></SmallRedInput>
          </InputContainer>
        )}
        {ddClicked && (
          <InputContainer>
            <p className="subText">DD</p>
            <SmallNormalInput>01</SmallNormalInput>
          </InputContainer>
        )}
        <img src={slash} alt="" />
        {!mmClicked && (
          <InputContainer onClick={() => mmSetClicked(true)}>
            <p className="subText">MM</p>
            <SmallRedInput></SmallRedInput>
          </InputContainer>
        )}
        {mmClicked && (
          <InputContainer>
            <p className="subText">MM</p>
            <SmallNormalInput>01</SmallNormalInput>
          </InputContainer>
        )}{" "}
        <img src={slash} alt="" />
        {!yyyyClicked && (
          <InputContainer onClick={() => yyyySetClicked(true)}>
            <p className="subText">YYYY</p>
            <RedInput></RedInput>
          </InputContainer>
        )}
        {yyyyClicked && (
          <InputContainer>
            <p className="subText">YYYY</p>
            <NormalInput>1982</NormalInput>
          </InputContainer>
        )}
      </MultipleInputContainer>
    </>
  );
};

export default DOB;
