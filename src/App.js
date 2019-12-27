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
<<<<<<< HEAD
import User from "./components/User";
import UserInfo from "./components/User/UserInfo";
import "normalize.css";
=======
import PostList from "./components/PostList";
import userComments from "./components/PostList/UserComments";
>>>>>>> c15402091b58b88a0e922a1779c96bc271c383d7

const App = () => (
  <Switch>
    <Route path="/autorise" component={Form} />
    <Route path="/register" component={Registration} />
<<<<<<< HEAD
    <>
      <Nav />
      <Switch>
        <Route path="/user" component={UserInfo} />
        <Route path="/posts" component={User} />
=======
    <Route path="/posts" component={PostList} />
    <Route path="/user" component={userComments} />
    <div>
      <Nav />
      <Switch>
>>>>>>> c15402091b58b88a0e922a1779c96bc271c383d7
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute path="/contacts" component={Contacts} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> c15402091b58b88a0e922a1779c96bc271c383d7
  </Switch>
);

export default App;
