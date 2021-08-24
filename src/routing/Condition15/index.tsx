import { useEFSData } from "@dectech/react-library";
import React, { FC, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CurrentAccount from "../../screens/1.ProductChoice/current-account";
import Loan from "../../screens/1.ProductChoice/loan/index";
import PCExistingCustomer from "../../screens/2.PersonalDetails/PCExistingCustomer";
import AccountDetails from "../../screens/3.AccountDetails/AccountDetails";
import PermissionsInfo from "../../screens/4.PermissionsInfo";
import Scenario15 from "../../screens/5.MarketingPreferences/ExistingCustomer/Scenario15";
import PrivacyPermissions from "../../screens/6.PrivacyPermissions";
import ScrollToTop from "../ScrollToTop";

const Condition15: FC = () => {
  const { product = "current account", debug } = useEFSData();
  const [debugProduct, setDebugProduct] = useState("loan");
  return (
    <Router>
      {" "}
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
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
          {!debug && product === "current account" && <CurrentAccount />}
          {!debug && product === "loan" && <Loan />}
          {debug && debugProduct === "current account" && <CurrentAccount />}
          {debug && debugProduct === "loan" && <Loan />}
        </Route>
        <Route path="/PersonalDetails">
          <PCExistingCustomer />
        </Route>
        <Route path="/AccountDetails">
          <AccountDetails />
        </Route>
        <Route path="/PermissionsInfo">
          <PermissionsInfo />
        </Route>
        <Route path="/MarketingPreferences">
          <Scenario15 />
        </Route>
        <Route path="/PrivacyPermissions">
          <PrivacyPermissions />
        </Route>
      </Switch>
    </Router>
  );
};

export default Condition15;
