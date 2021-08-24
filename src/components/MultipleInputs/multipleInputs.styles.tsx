import styled from "styled-components";

export const ADMultipleInputContainer = styled.div`
  display: flex;
  // width: 156px;
  justify-content: flex-start;
  img {
    width: 10px;
    height: 43px;
    padding: 0 16px;
  }
  align-items: center;
  @media only screen and (max-width: 600px) {
    padding-left: 16px;
  }
`;
export const MultipleInputContainer = styled.div`
  display: flex;
  // width: 249px;
  justify-content: flex-start;
  img {
    width: 10px;
    height: 43px;
    padding: 0 16px;
  }
  align-items: center;
  @media only screen and (max-width: 600px) {
    padding-left: 16px;
  }
`;

export const InputContainer = styled.div`
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

export const RedInputContainer = styled.div`
  padding-bottom: 24px;
  p {
    margin: 0;
    color: #666666;
    font-size: 16px;
    line-height: 24px;
  }
  .subText {
    color: #ad1982;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const RedInput = styled.div`
  border: 2px solid #c8001e;
  width: 70px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #969c9c;
  cursor: pointer;
  padding-left: 8px;
`;

export const NormalInput = styled.div`
  border: 2px solid #969c9c;
  width: 70px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #333;
  padding-left: 8px;
`;

export const SmallRedInput = styled.div`
  border: 2px solid #c8001e;
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #969c9c;
  cursor: pointer;
  padding-left: 8px;
`;

export const SmallNormalInput = styled.div`
  border: 2px solid #969c9c;
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #333;
  padding-left: 8px;
`;

export const DisabledInput = styled.div`
  border: 2px solid #969c9c;
  width: 293px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 16px;
  padding-left: 16px;
  color: #333;
`;
