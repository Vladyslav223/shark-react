import React from 'react';
import { Redirect, HashRouter } from 'react-router-dom';
import './Form.scss';

const API_URL = 'https://randomuser.me/api/'

class Form extends React.Component {
  state = {
    handleSubmitResult: 0,
    loginValue: '',
    passwordValue: '',
    handleSubmitFacebook: false,
    userData: {},
    usersLoginData: {
      admin:{
        login: 'reactdev',
        password: '123456',
      }
    }    
  }

 
  handleSubmit = (e) => {
    e.preventDefault();
    const { loginValue, passwordValue, usersLoginData } = this.state;
    const { setFlag } = this.props;
    if (loginValue === usersLoginData.admin.login
      && passwordValue === usersLoginData.admin.password) {
        setFlag(true);
      this.setState({
        handleSubmitResult: 2,
      });
    } else {
      this.setState({
        handleSubmitResult: 1,
      });
    }
  }

  handleSubmitFacebook = async() => {  
       
    const response = await fetch(API_URL);
    const userData = await response.json();
    const userKey = userData.results[0].login.sha256;
    this.setState({
      handleSubmitFacebook: true,
    });       

    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('userKey', JSON.stringify(userKey));
    this.setState({
      userData,
      handleSubmitFacebook: false,
    });
  }



  render() {
    const {
      handleSubmitResult,
      handleSubmitFacebook,
      loginValue,
      passwordValue
    } = this.state;
    

    if (handleSubmitFacebook) {
        return (
          <HashRouter>
            <Redirect to="/" />
          </HashRouter>
        );
      }

    return (
      <>
        <h1>Login please</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="label" htmlFor="login">
            login:
            <input
              value={loginValue}
              onChange={(event) => { this.setState({ loginValue: event.target.value }); }}
              id="login"
              type="text"
            />
          </label>
          <label className="label" htmlFor="password">
            password:
            <input
              value={passwordValue}
              onChange={(event) => { this.setState({ passwordValue: event.target.value }); }}
              id="password"
              type="password"
            />
          </label>
          <button
            className="button"
            type="submit"
          >
                Login
                </button>
          <button
            className="login-facebook"
            type="button"
            onClick={this.handleSubmitFacebook}
          ></button>
        </form>
        {handleSubmitResult === 1
          && (
            <p className="error">
          The data is entered incorrectly.
            </p>
          )
        }
      </>
    );
  }
}

export default Form;

