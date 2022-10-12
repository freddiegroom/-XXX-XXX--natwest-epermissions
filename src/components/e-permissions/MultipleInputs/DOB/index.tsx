import React, { FC } from "react";
import {
  MultipleInputContainer,
  InputContainer,
  RedInput,
  NormalInput,
  SmallRedInput,
  SmallNormalInput,
} from "../multipleInputs.styles";
import slash from "../../../../images/slash.png";

interface DOBDateProps {
  ddState?: number;
  setDDState: any;
  mmState?: number;
  setMMState: any;
  yyyyState?: number;
  setYYYYState: any;
}

const DOB: FC<DOBDateProps> = ({
  ddState,
  setDDState,
  mmState,
  setMMState,
  yyyyState,
  setYYYYState,
}) => {
  return (
    <>
      <p>Date of birth</p>
      <MultipleInputContainer>
        {!ddState && (
          <InputContainer
            onClick={(e) => {
              e.preventDefault();
              setDDState(1);
            }}
          >
            <p className="subText">DD</p>
            <SmallRedInput>01</SmallRedInput>
          </InputContainer>
        )}
        {ddState && (
          <InputContainer>
            <p className="subText">DD</p>
            <SmallNormalInput>01</SmallNormalInput>
          </InputContainer>
        )}
        <img src={slash} alt="" />
        {!mmState && (
          <InputContainer
            onClick={(e) => {
              e.preventDefault();
              setMMState(1);
            }}
          >
            <p className="subText">MM</p>
            <SmallRedInput>01</SmallRedInput>
          </InputContainer>
        )}
        {mmState && (
          <InputContainer>
            <p className="subText">MM</p>
            <SmallNormalInput>01</SmallNormalInput>
          </InputContainer>
        )}{" "}
        <img src={slash} alt="" />
        {!yyyyState && (
          <InputContainer
            onClick={(e) => {
              e.preventDefault();
              setYYYYState(1);
            }}
          >
            <p className="subText">YYYY</p>
            <RedInput>1982</RedInput>
          </InputContainer>
        )}
        {yyyyState && (
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
