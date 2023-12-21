import React, { createContext, useContext, useEffect, useState } from "react";

export const useForm = ({ initalValue, validate, onSubmit }) => {
  const [values, setValues] = useState(initalValue);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    const error = validate(values);
    setErrors(error);
    if (Object.values(error).some(Boolean)) return;
    onSubmit();
  };

  const handleBlur = (e) => {
    const nextTouched = {
      ...touched,
      [e.target.name]: true,
    };
    setTouched(nextTouched);
  };

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    setErrors(validate(values));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const register = (name) => ({
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
  });

  return { values, errors, touched, handleBlur, handleChange, handleSubmit, register };
};

const FormContext = createContext({});
FormContext.displayName = "FormContext";

export const FormProvider = ({ children, ...rest }) => {
  const context = useForm(rest);

  return (
    <FormContext.Provider value={context}>
      <form noValidate onSubmit={context.handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export const Field = ({ as = "input", name, children, ...rest }) => {
  const { register } = useContext(FormContext);
  return React.createElement(as, { ...register(name), ...rest }, children);
};

export const ErrorMessage = ({ name }) => {
  const { touched, errors } = useContext(FormContext);
  if (!touched[name] || !errors[name]) return null;
  return <span>{errors[name]}</span>;
};

export const Button = ({ name }) => {
  return <button>{name}</button>;
};

export const Form = Object.assign(FormProvider, {
  Field,
  ErrorMessage,
  Button,
});
