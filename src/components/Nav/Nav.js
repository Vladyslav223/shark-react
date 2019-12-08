import React from 'react';
import { HashRouter, Redirect, NavLink } from 'react-router-dom';

class Nav extends React.Component {
    state={ redirectToMain: false,}

    handleLogOut = () => {
        localStorage.clear();
        this.setState({
            redirectToMain: true,
        })
    }
    render() {
        const { redirectToMain } = this.state;
        if (redirectToMain) {
            return (
              <HashRouter>
                <Redirect to="/autorise" />
              </HashRouter>
            ); 
          }

        return (<>
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
        </>)
    }

    ;
};


export default Nav;