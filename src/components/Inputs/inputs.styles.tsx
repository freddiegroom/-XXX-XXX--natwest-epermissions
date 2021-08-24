import styled from "styled-components";

export const InputContainer = styled.div`
  padding-bottom: 24px;
  p {
    color: #666666;
    font-size: 16px;
    line-height: 24px;
  }
  .subText {
    color: #333333;
    font-size: 14px;
    line-height: 16px;

  }
  .redSubText {
    color: #ad1982;
    font-size: 14px;
    line-height: 16px;

  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    p,
    .subText {
      align-self: flex-start;
    }
    .redSubText {
      color: #ad1982;
      font-size: 14px;
      line-height: 16px;


  }
`;

export const RedInputContainer = styled.div`
  padding-bottom: 24px;
  p {
    color: #666666;
    font-size: 16px;
    line-height: 24px;
  }
  .subText {
    color: #ad1982;
    font-size: 14px;
    line-height: 16px;
  }
  .redSubText {
    color: #ad1982;
    font-size: 14px;
    line-height: 16px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    p,
    .subText {
      align-self: flex-start;
    }
    .subText {
    }
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
  padding-left: 8px;
  color: #969c9c;
  cursor: pointer;
  padding-left: 8px;
  @media only screen and (max-width: 600px) {
    width: 293px;
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
  color: #333;
  padding-left: 8px;
  @media only screen and (max-width: 600px) {
    width: 293px;
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
