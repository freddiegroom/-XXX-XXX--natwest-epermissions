import { useEFSData } from "@dectech/react-library";
import React, { FC } from "react";
import DebugConditionSelector from "./DebugConditionSelector/index";
import EFSConditionSelector from "./EFSConditionSelector";

const ConditionSelector: FC = () => {
  const { debug } = useEFSData();
  return (
    <>
      {debug && <DebugConditionSelector />}
      {!debug && <EFSConditionSelector />}
    </>
  );
};

export default ConditionSelector;
