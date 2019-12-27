import React from "react";
import { Field, Form, reduxForm } from "redux-form";

import "./index.scss";

const EditCommentForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      className="edit-comment"
      name="UserCommentTitle"
      component="textarea"
    />
    <Field
      className="edit-comment"
      name="UserCommentBody"
      component="textarea"
    />
    <button type="submit">Save</button>
  </Form>
);

export default reduxForm({
  form: "comment"
})(EditCommentForm);
