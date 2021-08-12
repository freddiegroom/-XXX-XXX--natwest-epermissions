import React, { FC } from "react";
import "./App.css";
import Button from "./components/Button";
import ExperimentContainer from "./components/ExperimentContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import { OutputSection } from "./output/outputSection";
import PCCurrentAccount from "./screens/1.ProductChoice/current-account";

const App: FC = ({ children }) => {
  return (
    <div className="App">
      {/* <ExperimentContainer> */}
      {/* <Header>Find the right bank account for you</Header>
        <Button>Test</Button>
        <Footer />
      </ExperimentContainer> */}
      {/* <OutputSection /> */}
      {/* <PCCurrentAccount /> */}
      {children}
    </div>
  );
};

export default App;
