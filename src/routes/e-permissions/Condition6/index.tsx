import { useEFSData } from "@dectech/react-library";
import React, { FC, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CurrentAccount from "../../../screens/1.ProductChoice/current-account";
import Loan from "../../../screens/1.ProductChoice/loan/index";
import PCExistingCustomer from "../../../screens/2.PersonalDetails/PCExistingCustomer";
import Scenario6 from "../../../screens/5.MarketingPreferences/ExistingCustomer/Scenario6";
import PrivacyPermissions from "../../../screens/6.PrivacyPermissions";
import ScrollToTop from "../../ScrollToTop";

const Condition6: FC = () => {
  const { product = "current account", debug } = useEFSData();
  const [debugProduct, setDebugProduct] = useState("loan");
  return (
    <Router>
      {" "}
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          {debug && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setDebugProduct("current account");
                }}
              >
                current account
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setDebugProduct("loan");
                }}
              >
                loan
              </button>
            </>
          )}
          {!debug && product === "current account" && <CurrentAccount />}
          {!debug && product === "loan" && <Loan />}
          {debug && debugProduct === "current account" && <CurrentAccount />}
          {debug && debugProduct === "loan" && <Loan />}
        </Route>
        <Route path="/PersonalDetails">
          <PCExistingCustomer debugCondition={15} />
        </Route>
        {/* <Route path="/AccountDetails">
          <AccountDetails debugCondition={15} />
        </Route> */}
        <Route path="/MarketingPreferences">
          <Scenario6 />
        </Route>
        <Route path="/PrivacyPermissions">
          <PrivacyPermissions />
        </Route>
      </Switch>
    </Router>
  );
};

export default Condition6;
