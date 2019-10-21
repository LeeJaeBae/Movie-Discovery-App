import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "Components/Header";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Home from "Routes/Home";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
      </Switch>
    </>
  </Router>
);
