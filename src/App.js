import React from 'react';

import {
  HashRouter, Route, Switch, NavLink
} from 'react-router-dom';

import Contacts from  './components/Contacts/Contacts';
import HomePage from  './components/HomePage/HomePage';
import Profile from  './components/Profile/Profile';
import Form from  './components/Form/Form';

import './App.scss';

class App extends React.Component {
  state = {
    disableMenu: false,
  }

  handleLogOut = () => {
    localStorage.clear();
    this.setState({
      redirectToMain: true,
    })
  }

  render () { 

    return (
      <HashRouter>
        <div className="app">
          <nav className="nav">
            <NavLink className="nav-link" exact to="/">Главная</NavLink>
            <NavLink className="nav-link" exact to="/contacts">Контакты</NavLink>
            <NavLink className="nav-link" exact to="/profile">Профиль</NavLink>
          </nav>
          <button
            type="button"
            className="logout"
            onClick={this.handleLogOut}
          ></button>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/profile" component={Profile} />
          <Route path="/autorise" component={Form} />
        </Switch>
      </HashRouter>
    );
  }
};

export default App;
