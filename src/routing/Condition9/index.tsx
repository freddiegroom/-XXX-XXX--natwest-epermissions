import { useEFSData } from "@dectech/react-library";
import React, { FC, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CurrentAccount from "../../screens/1.ProductChoice/current-account";
import Loan from "../../screens/1.ProductChoice/loan/index";
import PCExistingCustomer from "../../screens/2.PersonalDetails/PCExistingCustomer";
import PermissionsInfo from "../../screens/4.PermissionsInfo";
import Scenario9 from "../../screens/5.MarketingPreferences/ExistingCustomer/Scenario9";
import PrivacyPermissions from "../../screens/6.PrivacyPermissions";
import PrivacyPopUp from "../../screens/7.PrivacyPopUp";
import ScrollToTop from "../ScrollToTop";

const Condition9: FC = () => {
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
          <PCExistingCustomer />
        </Route>
        <Route path="/PermissionsInfo">
          <PermissionsInfo />
        </Route>
        <Route path="/MarketingPreferences">
          <Scenario9 />
        </Route>
        <Route path="/PrivacyPermissions">
          <PrivacyPermissions />
        </Route>
        <Route path="/PrivacyPopUp">
          <PrivacyPopUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Condition9;
