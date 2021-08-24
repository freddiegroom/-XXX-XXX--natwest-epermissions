import styled from "styled-components";

export const SelectContainer = styled.div`
  padding-bottom: 24px;
  p {
    margin: 0;
    color: #666666;
    font-size: 16px;
    line-height: 24px;
    padding-left: 8px;
  }
  .subText {
    color: #333333;
    font-size: 14px;
    line-height: 16px;
    padding-left: 8px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p,
    .subText {
      align-self: flex-start;
      padding-left: 16px;
    }
    p {
      padding: 0;
      padding-left: 16px;
    }
  }
`;

export const RedSelectContainer = styled.div`
  padding-bottom: 24px;
  p {
    margin: 0;
    color: #666666;
    font-size: 16px;
    line-height: 24px;
    padding-left: 8px;
  }
  .subText {
    color: #ad1982;
    font-size: 14px;
    line-height: 16px;
    padding-left: 8px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    p {
      padding: 0;
      padding-left: 16px;
    }
  }
  padding-bottom: 24px;
  p {
    margin: 0;
    color: #666666;
    font-size: 16px;
    line-height: 24px;
  }
  .subText {
    color: #333333;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const RedSelect = styled.div`
  border: 2px solid #c8001e;
  @media only screen and (min-width: 601px) {
    width: 293px;
  }
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 24px;
  padding-left: 16px;
  color: #969c9c;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 85%;
  }
  img {
    padding-right: 16px;
  }
`;

export const NormalSelect = styled.div`
  border: 2px solid #969c9c;
  @media only screen and (min-width: 601px) {
    width: 293px;
  }
  height: 40px;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 24px;
  padding-left: 16px;
  color: #333;
  @media only screen and (max-width: 600px) {
    width: 85%;
  }
  img {
    padding-right: 16px;
  }
`;

export const DisabledSelect = styled.div`
  border: 2px solid #969c9c;
  @media only screen and (min-width: 601px) {
    width: 293px;
  }
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  padding-left: 16px;
  color: #333;
  @media only screen and (max-width: 600px) {
    width: 85%;
  }
  img {
    padding-right: 16px;
  }
`;

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    display: flex;
    padding-left: 16px;
    align-items: center;
    background-color: #fff;
    color: #969c9c;
    border: 2px solid #c8001e;
    height: 40px;
    font-size: 16px;
    border-top: none;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    button {
      width: 90%;
      // margin-left: 16px;
      border-top: none;
    }
    align-items: center;
  }
  @media only screen and (min-width: 601px) {
    width: 293px;
  }
`;
