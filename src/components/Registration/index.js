import React from "react";
import { reduxForm, Field } from "redux-form";
//import { useDispatch } from "react-redux";
//import { compose } from "redux";

//import { connectWithDB } from "../../store/actions.js";

const Registration = ({ handleSubmit }) => {
  //const dispatch = useDispatch();

  // const handleSubmitA = a => {
  //   console.log(compose);
  //   dispatch(connectWithDB(a));
  // };
  return (
    <div>
      <h1>Register please</h1>
      <form
        className="form registration-form"
        //onSubmit={handleSubmit(handleSubmitA)}
      >
        <label className="label" htmlFor="login">
          login:
          <Field name="login" component="input" id="login" type="text" />
        </label>
        <label className="label" htmlFor="password">
          password:
          <Field
            name="password"
            component="input"
            id="password"
            type="password"
          />
        </label>
        <label className="label" htmlFor="confirm-password">
          confirm:
          <Field
            name="confirm-password"
            component="input"
            id="confirm-password"
            type="password"
          />
        </label>
        <button className="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "registration"
})(Registration);
