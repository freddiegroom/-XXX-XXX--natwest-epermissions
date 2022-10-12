import React, { FC, useState } from "react";
// import Condition1 from "../../routing/Condition1";
// import Condition10 from "../../routing/Condition10";
// import Condition2 from "../../routing/Condition2";
// import Condition3 from "../../routing/Condition3";
// import Condition4 from "../../routing/Condition4";
// import Condition5 from "../../routing/Condition5";
// import Condition6 from "../../routing/Condition6";
// import Condition7 from "../../routing/Condition7";
// import Condition8 from "../../routing/Condition8";
// import Condition9 from "../../routing/Condition9";
import { ConditionSelectorStyle } from "./DebugConditionSelector.style";
import InLife1 from "../../routes-in-life/InLife1";
import InLife2 from "../../routes-in-life/InLife2";
import InLife3 from "../../routes-in-life/InLife3";
import InLife4 from "../../routes-in-life/InLife4";
import InLife5 from "../../routes-in-life/InLife5";
import InLife2Route from "../../routes-in-life/InLife2/InLife2Route";
// import InLife1Container from "../../screens/InLife/InLife1/InLife1Container";

const DebugConditionSelector: FC = () => {
  const [debugCondition, SetDebugCondition] = useState(1);
  return (
    <>
      <ConditionSelectorStyle onClick={(e) => e.preventDefault()}>
        Scenarios{" "}
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
        {/* <button
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
        </button> */}
        {/* <button
          className={debugCondition === 11 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(11);
          }}
        >
          InLife 1
        </button>
        <button
          className={debugCondition === 12 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(12);
          }}
        >
          InLife 2
        </button>
        <button
          className={debugCondition === 13 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(13);
          }}
        >
          InLife 3
        </button>
        <button
          className={debugCondition === 14 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(14);
          }}
        >
          InLife 4
        </button>
        <button
          className={debugCondition === 15 ? "redButton" : "none"}
          onClick={(e) => {
            e.preventDefault();
            SetDebugCondition(15);
          }}
        >
          InLife 5
        </button> */}
      </ConditionSelectorStyle>
      {/* 
      {debugCondition === 1 && <Condition1 />}
      {debugCondition === 2 && <Condition2 />}
      {debugCondition === 3 && <Condition3 />}
      {debugCondition === 4 && <Condition4 />}
      {debugCondition === 5 && <Condition5 />}
      {debugCondition === 6 && <Condition6 />}
      {debugCondition === 7 && <Condition7 />}
      {debugCondition === 8 && <Condition8 />}
      {debugCondition === 9 && <Condition9 />}
      {debugCondition === 10 && <Condition10 />} */}
      {debugCondition === 1 && <InLife1 />}
      {debugCondition === 2 && <InLife2Route />}
      {debugCondition === 3 && <InLife3 />}
      {debugCondition === 4 && <InLife4 />}
      {debugCondition === 5 && <InLife5 />}
    </>
  );
};

export default DebugConditionSelector;
