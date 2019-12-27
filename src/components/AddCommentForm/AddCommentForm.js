import React from "react";
import { Field, Form, reduxForm } from "redux-form";

import "./AddCommentForm.scss";

const AddCommentForm = ({ handleSubmit }) => {
  return (
    <>
      <h2>Add comment</h2>
      <Form onSubmit={handleSubmit} className="form add-comment">
        <label className="label" htmlFor="title">
          Title:
          <Field
            className="add-comment__textarea"
            name="title"
            component="textarea"
            type="text"
          />
        </label>
        <label className="label" htmlFor="body">
          Body:
          <Field
            className="add-comment__textarea"
            name="body"
            component="textarea"
            type="text"
          />
        </label>
        <button className="button" type="submit">
          отправить
        </button>
      </Form>
    </>
  );
};

export default reduxForm({
  form: "AddComment"
})(AddCommentForm);
