import { useEFSData } from "@dectech/react-library";
import React, { FC, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CurrentAccount from "screens/1.ProductChoice/current-account";
import Loan from "screens/1.ProductChoice/loan/index";
import PCNewCustomer from "screens/2.PersonalDetails/PCNewCustomer/index";
import AccountDetailsBlank from "screens/3.AccountDetails/AccountDetails";
import PermissionsInfo from "screens/4.PermissionsInfo";
import Scenario5 from "screens/5.MarketingPreferences/NewCustomer/Scenario5";
import PrivacyPopUp from "screens/7.PrivacyPopUp";
import AboutUsPopUp from "screens/8.AboutUsUp";
import ScrollToTop from "../../ScrollToTop";
import PrivacyPermissions510 from "screens/6.PrivacyPermissions/6.PrivacyPermissions510/index";

const Condition5: FC = () => {
  const { product = "current account", debug } = useEFSData();
  const [debugProduct, setDebugProduct] = useState("loan");
  return (
    <Router>
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
          <AccountDetailsBlank debugCondition={5} />
        </Route>
        <Route path="/PermissionsInfo">
          <PermissionsInfo />
        </Route>
        <Route path="/MarketingPreferences">
          <Scenario5 />
        </Route>
        <Route path="/PrivacyPermissions">
          <PrivacyPermissions510 />
        </Route>
        <Route path="/PrivacyPopUp">
          <PrivacyPopUp />
        </Route>
        <Route path="/AboutUsPopUp">
          <AboutUsPopUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Condition5;
