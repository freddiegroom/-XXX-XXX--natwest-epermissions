import { useEFSData } from "@dectech/react-library";
import React, { FC, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CurrentAccount from "../../screens/1.ProductChoice/current-account";
import Loan from "../../screens/1.ProductChoice/loan/index";
import PCExistingCustomer from "../../screens/2.PersonalDetails/PCExistingCustomer";
import PCNewCustomer from "../../screens/2.PersonalDetails/PCNewCustomer/index";
import AccountDetailsBlank from "../../screens/3.AccountDetails/AccountDetails";
import PermissionsInfo from "../../screens/4.PermissionsInfo";
import Scenario16 from "../../screens/5.MarketingPreferences/ExistingCustomer/Scenario16";
import Scenario1 from "../../screens/5.MarketingPreferences/NewCustomer/Scenario1";
import PrivacyPermissions from "../../screens/6.PrivacyPermissions";

const Condition16: FC = () => {
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
          <PCExistingCustomer />
        </Route>
        {/* <Route path="/AccountDetails">
          <AccountDetailsBlank />
        </Route> */}
        <Route path="/PermissionsInfo">
          <PermissionsInfo />
        </Route>
        <Route path="/MarketingPreferences">
          <Scenario16 />
        </Route>
        <Route path="/PrivacyPermissions">
          <PrivacyPermissions />
        </Route>
      </Switch>
    </Router>
  );
};

export default Condition16;
