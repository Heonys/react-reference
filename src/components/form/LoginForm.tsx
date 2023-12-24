import { Form } from "./Form";

type FormType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  function validate(values: FormType) {
    const error = { email: "", password: "" };
    if (!values.email) error.email = "이메일을 입력 해주세요";
    if (!values.password) error.password = "패스워드를 입력 해주세요";
    return error;
  }

  function onSubmit() {
    console.log("success");
  }

  return (
    <Form initalValue={{ email: "", password: "" }} validate={validate} onSubmit={onSubmit}>
      <Form.Field name="email" placeholder="email" autoFocus />
      <Form.ErrorMessage name="email" />
      <Form.Field name="password" placeholder="password" />
      <Form.ErrorMessage name="password" />
      <Form.Button name="로그인" />
    </Form>
  );
};

export default LoginForm;
