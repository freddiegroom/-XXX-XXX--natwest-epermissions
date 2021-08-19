import styled from "styled-components";

export const InputContainer = styled.div`
  padding-bottom: 24px;
  p {
    margin: 0;
    padding: 0;
    color: #666666;
    font-size: 16px;
    line-height: 24px;
  }
  .subText {
    color: #333333;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
    padding: 0;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const RedInputContainer = styled.div`
  padding-bottom: 24px;
  p {
    margin: 0;
    padding: 0;

    color: #666666;
    font-size: 16px;
    line-height: 24px;
  }
  .subText {
    color: #ad1982;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
    padding: 0;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const RedInput = styled.div`
  border: 2px solid #c8001e;
  @media only screen and (min-width: 601px) {
    width: 293px;
  }
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  padding-left: 16px;
  color: #969c9c;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 85%;
  }
`;

export const NormalInput = styled.div`
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
`;

export const DisabledInput = styled.div`
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
`;
