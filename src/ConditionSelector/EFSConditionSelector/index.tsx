import { useEFSData } from "@dectech/react-library";
import React, { FC } from "react";
import Condition1 from "../../routing/Condition1";
import Condition10 from "../../routing/Condition10";
import Condition2 from "../../routing/Condition2";
import Condition3 from "../../routing/Condition3";
import Condition4 from "../../routing/Condition4";
import Condition5 from "../../routing/Condition5";
import Condition6 from "../../routing/Condition6";
import Condition7 from "../../routing/Condition7";
import Condition8 from "../../routing/Condition8";
import Condition9 from "../../routing/Condition9";

const EFSConditionSelector: FC = () => {
  const { condition } = useEFSData();

  return (
    <>
      {condition === 1 && <Condition1 />}
      {condition === 2 && <Condition2 />}
      {condition === 3 && <Condition3 />}
      {condition === 4 && <Condition4 />}
      {condition === 5 && <Condition5 />}
      {condition === 6 && <Condition6 />}
      {condition === 7 && <Condition7 />}
      {condition === 8 && <Condition8 />}
      {condition === 9 && <Condition9 />}
      {condition === 10 && <Condition10 />}
    </>
  );
};

export default EFSConditionSelector;
