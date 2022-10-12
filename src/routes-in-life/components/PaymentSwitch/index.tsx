import React from "react";
import {
  PaymentSwitchActive,
  PaymentSwitchColumn,
  PaymentSwitchLine,
  PaymentSwitchNub,
  PaymentSwitchWrapper,
} from "./PaymentSwitch.styles";

const PaymentSwitch = () => {
  return (
    <PaymentSwitchWrapper>
      <PaymentSwitchColumn>
        <PaymentSwitchActive>Personal</PaymentSwitchActive>
        <PaymentSwitchLine />
        <PaymentSwitchNub />
      </PaymentSwitchColumn>
    </PaymentSwitchWrapper>
  );
};

export default PaymentSwitch;
