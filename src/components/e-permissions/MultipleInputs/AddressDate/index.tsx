import React, { FC } from "react";
import {
  ADMultipleInputContainer,
  InputContainer,
  RedInput,
  NormalInput,
  SmallRedInput,
  SmallNormalInput,
} from "../multipleInputs.styles";
import slash from "images/slash.png";

interface AddressDateProps {
  mmState?: number;
  setMMState: any;
  yyyyState?: number;
  setYYYYState: any;
}

const AddressDate: FC<AddressDateProps> = ({
  mmState,
  setMMState,
  yyyyState,
  setYYYYState,
}) => {
  return (
    <>
      <p>When did you move into this address?</p>
      <ADMultipleInputContainer>
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
            <RedInput>2009</RedInput>
          </InputContainer>
        )}
        {yyyyState && (
          <InputContainer>
            <p className="subText">YYYY</p>
            <NormalInput>2009</NormalInput>
          </InputContainer>
        )}
      </ADMultipleInputContainer>
    </>
  );
};

export default AddressDate;
