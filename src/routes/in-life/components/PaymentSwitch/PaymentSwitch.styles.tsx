import styled from "styled-components";

export const PaymentSwitchWrapper = styled.div`
  padding: 24px;
  display: flex;
  justify-content: center;
`;
export const PaymentSwitchColumn = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaymentSwitchActive = styled.p`
  color: #42145f;
  //   font-family: RNHouseSans-Regular !important;
`;
export const PaymentSwitchInactive = styled.p`
  font-family: RNHouseSans-Thin !important;
  color: grey;
  cursor: not-allowed;
`;

export const PaymentSwitchLine = styled.div`
  width: 100%;
  background-color: #42145f;
  height: 3px;
`;
export const PaymentSwitchGreyLine = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  height: 2px;
`;
export const PaymentSwitchSpacer = styled.div`
  height: 5px;
`;

export const PaymentSwitchNub = styled.div`
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #42145f;
`;
