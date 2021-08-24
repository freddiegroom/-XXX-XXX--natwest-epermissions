import styled from "styled-components";

export const SelectContainer = styled.div`
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
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p,
    .subText {
      align-self: flex-start;
    }
  }
  margin-bottom: 16px;
`;

export const RedSelectContainer = styled.div`
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
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
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
  padding: 0 16px;
  margin-bottom: 16px;
`;

export const RedSelect = styled.div`
  border: 2px solid #c8001e;
  padding-left: 8px;
  width: 293px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 24px;
  color: #969c9c;
  cursor: pointer;

  img {
    padding-right: 16px;
  }
`;

export const NormalSelect = styled.div`
  border: 2px solid #969c9c;
  padding-left: 8px;

  @media only screen and (min-width: 293px) {
    width: 293px;
  }
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 24px;
  color: #333;
  @media only screen and (max-width: 293px) {
    width: 95%;
  }
  img {
    padding-right: 16px;
  }
`;

// export const DisabledSelect = styled.div`
//   border: 2px solid #969c9c;
//   @media only screen and (min-width: 601px) {
//     width: 293px;
//   }
//   height: 40px;
//   display: flex;
//   align-items: center;
//   font-size: 16px;
//   line-height: 24px;
//   padding-left: 16px;
//   color: #333;
//   @media only screen and (max-width: 600px) {
//     width: 85%;
//   }
//   img {
//     padding-right: 16px;
//   }
// `;

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  button {
    display: flex;
    padding-left: 8px;
    align-items: center;
    background-color: #fff;
    color: #969c9c;
    border: 2px solid #c8001e;
    height: 40px;
    font-size: 16px;
    border-top: none;
    width: 305px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    button {
      width: 305px;
      // margin-left: 16px;
      border-top: none;
    }
    align-items: flex-start;
  }
  @media only screen and (min-width: 601px) {
    width: 293px;
  }
`;
