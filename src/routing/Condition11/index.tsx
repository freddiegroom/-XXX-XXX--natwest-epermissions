import { useEFSData } from "@dectech/react-library";
import React, { FC, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CurrentAccount from "../../screens/1.ProductChoice/current-account";
import Loan from "../../screens/1.ProductChoice/loan/index";
import PCNewCustomer from "../../screens/2.PersonalDetails/PCNewCustomer/index";
import AccountDetailsBlank from "../../screens/3.AccountDetails/AccountDetails";
import PermissionsInfo from "../../screens/4.PermissionsInfo";
import Scenario11 from "../../screens/5.MarketingPreferences/NewCustomer/Scenario11";
import PrivacyPermissions from "../../screens/6.PrivacyPermissions";

const Condition11: FC = () => {
  const { product = "current account", debug } = useEFSData();
  const [debugProduct, setDebugProduct] = useState("loan");
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <button onClick={() => setDebugProduct("current account")}>
            current account
          </button>
          <button onClick={() => setDebugProduct("loan")}>loan</button>
          {/* <FirstScreen /> */}
          {!debug && product === "current account" && <CurrentAccount />}
          {!debug && product === "loan" && <Loan />}
          {debug && debugProduct === "current account" && <CurrentAccount />}
          {debug && debugProduct === "loan" && <Loan />}
        </Route>
        <Route path="/PersonalDetails">
          <PCNewCustomer />
        </Route>
        <Route path="/AccountDetails">
          <AccountDetailsBlank />
        </Route>
        <Route path="/PermissionsInfo">
          <PermissionsInfo />
        </Route>
        <Route path="/MarketingPreferences">
          <Scenario11 />
        </Route>
        <Route path="/PrivacyPermissions">
          <PrivacyPermissions />
        </Route>
      </Switch>
    </Router>
  );
};

export default Condition11;
