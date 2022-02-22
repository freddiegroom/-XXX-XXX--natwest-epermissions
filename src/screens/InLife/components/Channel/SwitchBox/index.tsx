import React, { FC } from "react";
import { SwitchBoxWrapper, SwitchBoxImg } from "./Switchbox.styles";
import trueSwitch from "./switch-true.png";
import falseSwitch from "./switch-false.png";
import { useDispatch } from "react-redux";

interface SwitchBoxProps {
  state: any;
  setState: any;
  tickRedux: any;
  unTickRedux: any;
}

const SwitchBox: FC<SwitchBoxProps> = ({
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
    <SwitchBoxWrapper>
      {!!state && (
        <SwitchBoxImg src={trueSwitch} onClick={() => handleTruthyClick()} />
      )}
      {!state && (
        <SwitchBoxImg src={falseSwitch} onClick={() => handleFalseyClick()} />
      )}
    </SwitchBoxWrapper>
  );
};

export default SwitchBox;
