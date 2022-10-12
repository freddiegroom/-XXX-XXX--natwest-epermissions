import React, { FC } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import InLife2 from "../index";
import PrivacyPopUp from "../PrivacyPopUp/index";
import ScrollToTop from "../../../ScrollToTop";

const InLife2Route: FC = () => {
  return (
    <Router>
      {" "}
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <InLife2 />
        </Route>
        <Route path="/PrivacyPopUp">
          <PrivacyPopUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default InLife2Route;
