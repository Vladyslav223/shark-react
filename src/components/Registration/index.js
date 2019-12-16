import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import { connectWithDB } from '../../store/actions.js';

class Registration extends React.Component {
  state = {
  }
 
  handleSubmit = (event) => {
    const { 
      nameValue,
      passValue,
      confirmPassValue
    } = this.props;

    event.preventDefault();
    if (passValue === confirmPassValue ) {
      console.log(this.props.values, passValue, confirmPassValue);
      connectWithDB(nameValue, passValue, confirmPassValue);
      //this.props.history.push('/');
    }   
  }

 
  render() {
   
    return (
      <>
        <h1>Register please</h1>
        <form className="form registration-form">
          <label className="label" htmlFor="login">
            login:
            <Field
              name="login"
              component="input"
              onChange={(event) => { this.setState({ nameValue: event.target.value }); }}
              id="login"
              type="text"
            />            
          </label>
          <label className="label" htmlFor="password">
            password:
            <Field
              name="password"
              component="input"
              onChange={(event) => { this.setState({ passValue: event.target.value }); }}
              id="password"
              type="password"
            />            
          </label>
          <label className="label" htmlFor="confirm-password">
            confirm:
            <Field
              name="confirm-password"
              component="input"
              onChange={(event) => { this.setState({ confirmPassValue: event.target.value }); }}
              id="confirm-password"
              type="password"
            />            
          </label>
          <button
            className="button"
            type="submit"
            onClick={this.handleSubmit}
          >
            Register
          </button>
        </form>        
      </>
    );
  }
}

 Registration = reduxForm({
   form: 'registration'
 })(Registration);

export default Registration;