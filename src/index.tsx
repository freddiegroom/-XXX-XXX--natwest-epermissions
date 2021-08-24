import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { EFSInputProvider } from "@dectech/react-library";
import { EFSContinueProvider } from "./hooks/useEFSContinue";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <EFSInputProvider efsDataID="efsData">
    <EFSContinueProvider>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </EFSContinueProvider>
  </EFSInputProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
