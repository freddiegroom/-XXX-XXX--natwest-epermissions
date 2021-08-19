import React, { useState, FC } from "react";
import {
  ADMultipleInputContainer,
  InputContainer,
  RedInput,
  NormalInput,
  SmallRedInput,
  SmallNormalInput,
} from "../multipleInputs.styles";
import slash from "../../../images/slash.png";

const AddressDate: FC = () => {
  const [mmClicked, mmSetClicked] = useState(false);
  const [yyyyClicked, yyyySetClicked] = useState(false);
  return (
    <>
      <p>When did you move into this address?</p>
      <ADMultipleInputContainer>
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
            <NormalInput>2009</NormalInput>
          </InputContainer>
        )}
      </ADMultipleInputContainer>
    </>
  );
};

export default AddressDate;
