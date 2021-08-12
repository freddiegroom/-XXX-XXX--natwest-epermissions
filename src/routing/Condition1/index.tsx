import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

// import BasketScreen from './pageDirectory/basketScreen'
// import FirstScreen from './pageDirectory/firstScreen'
// import StoreScreen from './pageDirectory/storePage'

const Condition1: FC = () => {
  const history = useHistory();

  const handleNextPage = (route: string) => {
    history.push(route);
  };
  return (
    <Switch>
      <Route exact path="/">
        {/* <FirstScreen /> */}
      </Route>
      <Route path="/1">{/* <StoreScreen /> */}</Route>
      <Route path="/2">{/* <BasketScreen /> */}</Route>
      <Route path="/3">{/* <BasketScreen /> */}</Route>
      <Route path="/4">{/* <BasketScreen /> */}</Route>
      <Route path="/5">{/* <BasketScreen /> */}</Route>
    </Switch>
  );
};

export default Condition1;
