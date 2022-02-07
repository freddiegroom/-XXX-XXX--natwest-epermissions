import { useEFSData } from "@dectech/react-library";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { OutputSection } from "../output/outputSection";
import { saveCondition } from "./ConditionSelectorSlice";
import DebugConditionSelector from "./DebugConditionSelector/index";
import EFSConditionSelector from "./EFSConditionSelector";

const ConditionSelector: FC = () => {
  const { debug, condition } = useEFSData();
  const dispatch = useDispatch();

  const conditionFunction = () => {
    dispatch(saveCondition(condition));
  };

  conditionFunction();
  return (
    <>
      {debug === 1 && <DebugConditionSelector />}
      {(debug === 1 || !debug) && <EFSConditionSelector />}
      <OutputSection />
    </>
  );
};

export default ConditionSelector;
