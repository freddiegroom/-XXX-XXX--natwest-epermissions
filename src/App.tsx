import React, { FC } from "react";
import "./App.css";
import ConditionSelector from "./components/ConditionSelector";

const App: FC = ({ children }) => {
  return (
    <div className="App">
      <ConditionSelector />
    </div>
  );
};

export default App;
