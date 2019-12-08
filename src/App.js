import React from 'react';

import {
  HashRouter, Route, Switch
} from 'react-router-dom';

import Contacts from './components/Contacts/Contacts';
import HomePage from './components/HomePage/HomePage';
import Profile from './components/Profile/Profile';
import Form from './components/Form/Form';

import './App.scss';

class App extends React.Component {
  state = {
    disableMenu: false,
  }

  render() {
    return (<>
      <HashRouter>
        <Route path="/autorise" component={Form} />
      </HashRouter>

      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </HashRouter>
    </>);
  }
};

export default App;
