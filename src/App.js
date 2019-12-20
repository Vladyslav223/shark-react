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
import PostList from "./components/PostList";
import userComments from "./components/PostList/UserComments";

const App = () => (
  <Switch>
    <Route path="/autorise" component={Form} />
    <Route path="/register" component={Registration} />
    <Route path="/posts" component={PostList} />
    <Route path="/user" component={userComments} />
    <div>
      <Nav />
      <Switch>
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute path="/contacts" component={Contacts} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
    </div>
  </Switch>
);

export default App;
