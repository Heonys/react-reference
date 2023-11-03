//@ts-nocheck
import React, { createContext, useContext, useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const style = css`
  & input,
  & button {
    display: block;
  }
`;

export const useForm = ({ initialValue, validate, onSubmit }) => {
  const [values, setValue] = useState(initialValue);
  const [errors, setErros] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const nextValue = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValue(nextValue);
  };

  const handleBlur = (e) => {
    const nextTouched = {
      ...touched,
      [e.target.name]: true,
    };
    setTouched(nextTouched);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const touched = Object.keys(values).reduce((acc, cur) => {
      return { ...acc, ...{ [cur]: true } };
    }, {});
    setTouched(touched);
    const errors = validate(values);
    setErros(errors);
    if (Object.values(errors).some(Boolean)) return;
    onSubmit(values);
  };

  const getFieldProps = (name) => {
    return {
      name,
      value: values[name],
      onChange: handleChange,
      onBlur: handleBlur,
      onSubmit: handleSubmit,
    };
  };

  useEffect(() => {
    setErros(validate(values));
  }, [touched]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    getFieldProps,
  };
};

const formContext = createContext();
formContext.displayName = "FormContext";

const FormProvider = ({ children, ...rest }) => {
  const formValue = useForm(rest);

  return (
    <formContext.Provider value={formValue}>
      <form noValidate css={style} onSubmit={formValue.handleSubmit}>
        {children}
      </form>
    </formContext.Provider>
  );
};

const Field = ({ as = "input", children, name, ...rest }) => {
  const { getFieldProps } = useContext(formContext);
  return React.createElement(as, { ...getFieldProps(name), ...rest }, children);
};

const ErrorMessage = ({ name }) => {
  const { touched, errors } = useContext(formContext);
  if (!touched[name] || !errors[name]) return null;
  return <span>{errors[name]}</span>;
};

const Button = ({ name }) => <button>{name}</button>;

const Form = Object.assign(FormProvider, {
  Field,
  ErrorMessage,
  Button,
});

export default Form;
