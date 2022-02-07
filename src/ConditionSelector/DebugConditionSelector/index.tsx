import React, { FC, useState } from "react";
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
import { ConditionSelectorStyle } from "./DebugConditionSelector.style";

const DebugConditionSelector: FC = () => {
  const [debugCondition, SetDebugCondition] = useState(1);
  return (
    <>
      <ConditionSelectorStyle onClick={(e) => e.preventDefault()}>
        conditions
        <button
          className={debugCondition === 1 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(1);
          }}
        >
          1
        </button>
        <button
          className={debugCondition === 2 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(2);
          }}
        >
          2
        </button>
        <button
          className={debugCondition === 3 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(3);
          }}
        >
          3
        </button>
        <button
          className={debugCondition === 4 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(4);
          }}
        >
          4
        </button>
        <button
          className={debugCondition === 5 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(5);
          }}
        >
          5
        </button>
        <button
          className={debugCondition === 6 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(6);
          }}
        >
          6
        </button>
        <button
          className={debugCondition === 7 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(7);
          }}
        >
          7
        </button>
        <button
          className={debugCondition === 8 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(8);
          }}
        >
          8
        </button>
        <button
          className={debugCondition === 9 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(9);
          }}
        >
          9
        </button>
        <button
          className={debugCondition === 10 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(10);
          }}
        >
          10
        </button>
      </ConditionSelectorStyle>

      {debugCondition === 1 && <Condition1 />}
      {debugCondition === 2 && <Condition2 />}
      {debugCondition === 3 && <Condition3 />}
      {debugCondition === 4 && <Condition4 />}
      {debugCondition === 5 && <Condition5 />}
      {debugCondition === 6 && <Condition6 />}
      {debugCondition === 7 && <Condition7 />}
      {debugCondition === 8 && <Condition8 />}
      {debugCondition === 9 && <Condition9 />}
      {debugCondition === 10 && <Condition10 />}
    </>
  );
};

export default DebugConditionSelector;
