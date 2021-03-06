import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import TV from "Routes/TV";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
      </Switch>
    </>
  </Router>
);
