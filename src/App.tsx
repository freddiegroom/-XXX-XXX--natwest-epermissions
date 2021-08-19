import React, { FC } from "react";
import "./App.css";
import Condition1 from "./routing/Condition1";

const App: FC = ({ children }) => {
  return (
    <div className="App">
      <Condition1 />
    </div>
  );
};

export default App;
