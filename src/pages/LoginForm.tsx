//@ts-nocheck
import React from "react";
import Form from "../components/Form";

const LoginForm = () => {
  function validate(value) {
    const error = { email: "", password: "" };
    if (!value.email) error.email = "이메일을 입력하세요";
    if (!value.password) error.password = "비밀번호를 입력하세요";
    return error;
  }

  function onSubmit() {
    console.log(" succes ");
  }

  return (
    <Form initialValue={{ email: "", password: "" }} validate={validate} onSubmit={onSubmit}>
      <Form.Field name="email" required autoFocus />
      <Form.ErrorMessage name="email" />
      <Form.Field name="password" required />
      <Form.ErrorMessage name="password" />
      <Form.Button name={"제출"} />
    </Form>
  );
};

export default LoginForm;
