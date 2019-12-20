import React from "react";
import { withRouter } from "react-router-dom";
import "./Form.scss";

const API_URL = "https://randomuser.me/api/";

class Form extends React.Component {
  state = {
    handleSubmitResult: 0,
    loginValue: "",
    passwordValue: ""
  };

  handleSubmitFacebook = async () => {
    try {
      const response = await fetch(API_URL);
      const userData = await response.json();
      const userKey = userData.results[0].login.sha256;
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("userKey", JSON.stringify(userKey));
      this.props.history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  handleRegistration = () => {
    this.props.history.push("/register");
  };

  render() {
    const { handleSubmitResult, loginValue, passwordValue } = this.state;

    return (
      <>
        <h1>Login please</h1>
        <form className="form">
          <label className="label" htmlFor="login">
            login:
            <input
              value={loginValue}
              onChange={event => {
                this.setState({ loginValue: event.target.value });
              }}
              id="login"
              type="text"
            />
          </label>
          <label className="label" htmlFor="password">
            password:
            <input
              value={passwordValue}
              onChange={event => {
                this.setState({ passwordValue: event.target.value });
              }}
              id="password"
              type="password"
            />
          </label>
          <button
            className="button"
            type="submit"
            onClick={this.handleRegistration}
          >
            Register
          </button>
          <button className="button" type="submit">
            Login
          </button>
          <button
            className="login-facebook"
            type="button"
            onClick={this.handleSubmitFacebook}
          ></button>
        </form>
        {handleSubmitResult === 1 && (
          <p className="error">The data is entered incorrectly.</p>
        )}
      </>
    );
  }
}

export default withRouter(Form);
