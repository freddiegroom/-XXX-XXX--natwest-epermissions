import React, { FC } from "react";
import { CheckBoxWrapper, CheckBoxImg, CheckBoxLabel } from "./Checkbox.styles";
import fullCheckbox from "./full-checkbox.png";
import emptyCheckbox from "./empty-checkbox.png";
import { useDispatch } from "react-redux";
// import falseSwitch from "./switch-false.png";

interface CheckBoxProps {
  state: any;
  setState: any;
  tickRedux: any;
  unTickRedux: any;
}

const CheckBox: FC<CheckBoxProps> = ({
  state,
  setState,
  tickRedux,
  unTickRedux,
}) => {
  const dispatch = useDispatch();
  const handleTruthyClick = () => {
    setState(0);
    dispatch(unTickRedux());
  };

  const handleFalseyClick = () => {
    setState(1);
    dispatch(tickRedux());
  };

  return (
    <CheckBoxWrapper>
      {/* <CheckBoxImg src={trueSwitch} /> */}
      {/* <CheckBoxImg src={falseSwitch} /> */}
      <CheckBoxImg />
      {state === 1 && <CheckBoxImg src={fullCheckbox} />}
      {state === 0 && (
        <CheckBoxImg src={emptyCheckbox} onClick={() => handleFalseyClick()} />
      )}
      {state === 3 && (
        <CheckBoxImg src={emptyCheckbox} onClick={() => handleFalseyClick()} />
      )}
      <CheckBoxLabel>Yes</CheckBoxLabel>
      {state === 1 && (
        <CheckBoxImg src={emptyCheckbox} onClick={() => handleTruthyClick()} />
      )}
      {state === 0 && <CheckBoxImg src={fullCheckbox} />}
      {state === 3 && (
        <CheckBoxImg src={emptyCheckbox} onClick={() => handleTruthyClick()} />
      )}
      <CheckBoxLabel>No</CheckBoxLabel>
    </CheckBoxWrapper>
  );
};

export default CheckBox;
