import { useEFSData } from "@dectech/react-library";
import React, { FC } from "react";
import Condition1 from "routes/e-permissions/Condition1";
import Condition10 from "routes/e-permissions/Condition10";
import Condition2 from "routes/e-permissions/Condition2";
import Condition3 from "routes/e-permissions/Condition3";
import Condition4 from "routes/e-permissions/Condition4";
import Condition5 from "routes/e-permissions/Condition5";
import Condition6 from "routes/e-permissions/Condition6";
import Condition7 from "routes/e-permissions/Condition7";
import Condition8 from "routes/e-permissions/Condition8";
import Condition9 from "routes/e-permissions/Condition9";
import InLife1 from "routes/in-life/InLife1";
import InLife2Route from "routes/in-life/InLife2/InLife2Route";
import InLife3 from "routes/in-life/InLife3";
import InLife4 from "routes/in-life/InLife4";
import InLife5 from "routes/in-life/InLife5";

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
      {condition === 11 && <InLife1 />}
      {condition === 12 && <InLife2Route />}
      {condition === 13 && <InLife3 />}
      {condition === 14 && <InLife4 />}
      {condition === 15 && <InLife5 />}
    </>
  );
};

export default EFSConditionSelector;
