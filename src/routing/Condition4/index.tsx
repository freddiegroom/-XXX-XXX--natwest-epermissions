import { useEFSData } from "@dectech/react-library";
import React, { FC } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CurrentAccount from "../../screens/1.ProductChoice/current-account";
import Loan from "../../screens/1.ProductChoice/loan/index";
import PCNewCustomer from "../../screens/2.PersonalDetails/PCNewCustomer/index";
import AccountDetailsBlank from "../../screens/3.AccountDetails/AccountDetails";
import PermissionsInfo from "../../screens/4.PermissionsInfo";
import Scenario4 from "../../screens/5.MarketingPreferences/NewCustomer/Scenario4";
import PrivacyPermissions from "../../screens/6.PrivacyPermissions";

const Condition4: FC = () => {
  const { product = "current account" } = useEFSData();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* <FirstScreen /> */}
          {product === "current account" && <CurrentAccount />}
          {product === "loan" && <Loan />}
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
          <Scenario4 />
        </Route>
        <Route path="/PrivacyPermissions">
          <PrivacyPermissions />
        </Route>
      </Switch>
    </Router>
  );
};

export default Condition4;
