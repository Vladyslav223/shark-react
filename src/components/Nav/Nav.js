import React from "react";
import { NavLink, withRouter } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: null };
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  handleLogOut() {
    localStorage.clear();
    this.props.history.push("/autorise");
  }

  render() {
    return (
      <div>
        <nav className="nav">
          <NavLink className="nav-link" to="/">
            Главная
          </NavLink>
          <NavLink className="nav-link" to="/contacts">
            Контакты
          </NavLink>
          <NavLink className="nav-link" to="/profile">
            Профиль
          </NavLink>
          <NavLink className="nav-link" to="/posts">
            Посты
          </NavLink>
        </nav>
        <button
          type="button"
          className="logout"
          onClick={this.handleLogOut}
        ></button>
      </div>
    );
  }
}

export default withRouter(Nav);
