import React from "react";
import { Route, Switch } from "react-router-dom";

import Registration from "./components/Registration";
import Contacts from "./components/Contacts";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Form from "./components/Form/Form";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.scss";
import User from "./components/User";
import UserInfo from "./components/User/UserInfo";
import "normalize.css";

const App = () => (
  <Switch>
    <Route path="/autorise" component={Form} />
    <Route path="/register" component={Registration} />
    <>
      <Nav />
      <Switch>
        <Route path="/user" component={UserInfo} />
        <Route path="/posts" component={User} />
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute path="/contacts" component={Contacts} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
    </>
  </Switch>
);

export default App;
