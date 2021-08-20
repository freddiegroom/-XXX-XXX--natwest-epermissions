import React, { FC } from "react";
import "./App.css";
import ConditionSelector from "./ConditionSelector";

const App: FC = ({ children }) => {
  return (
    <div className="App">
      <ConditionSelector />
    </div>
  );
};

export default App;
