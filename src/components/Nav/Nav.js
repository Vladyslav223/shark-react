import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Nav extends React.Component {

    handleLogOut = () => {
        localStorage.clear();   
             this.props.history.push('/autorise');
    }

    render() {
        return (<>
            <nav className="nav">
                <NavLink className="nav-link"  to="/">Главная</NavLink>
                <NavLink className="nav-link"  to="/contacts">Контакты</NavLink>
                <NavLink className="nav-link"  to="/profile">Профиль</NavLink>
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


export default withRouter(Nav);