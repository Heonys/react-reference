import React, { createContext, useContext, useEffect, useState } from "react";

type FormProps<FormType> = {
  initalValue: FormType;
  validate: (value: FormType) => FormType;
  onSubmit: () => void;
};

export const useForm = <FormType extends Record<string, string>>({
  initalValue,
  validate,
  onSubmit,
}: FormProps<FormType>) => {
  type TouchedType = {
    [key in keyof FormType]: boolean;
  };

  const [values, setValues] = useState<FormType>(initalValue);
  const [errors, setErrors] = useState<FormType>({} as FormType);
  const [touched, setTouched] = useState<TouchedType>({} as TouchedType);

  const handleChnage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({
      ...prev,
      [event.target.name]: true,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const allValuesTrue = Object.keys(values).reduce((acc, cur) => {
      return { ...acc, [cur]: true };
    }, {} as TouchedType);

    setTouched(allValuesTrue);
    const error = validate(values);
    setErrors(error);
    if (Object.values(error).some(Boolean)) return;
    onSubmit();
  };

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  const register = (name: string) => {
    return {
      name,
      value: values[name],
      onChange: handleChnage,
      onBlur: handleBlur,
    };
  };

  return { values, errors, touched, handleChnage, handleBlur, handleSubmit, register };
};

type FormContextType = ReturnType<typeof useForm>;
const FormContext = createContext<FormContextType>({} as FormContextType);
FormContext.displayName = "FormContext";

type FormProviderType<FormType> = {
  children: React.ReactNode;
  initalValue: FormType;
  validate: (value: FormType) => FormType;
  onSubmit: () => void;
};

export const FormProvider = <InitalValue extends Record<string, string>>({
  children,
  ...formProps
}: FormProviderType<InitalValue>) => {
  const context = useForm({ ...formProps });

  return (
    <FormContext.Provider value={context}>
      <form noValidate onSubmit={context.handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

type NativeProps<T extends "input" | "textarea"> = React.ComponentPropsWithoutRef<T>;

type FieldProps<T extends "input" | "textarea"> = {
  as?: T;
  name: string;
  children?: React.ReactNode;
} & NativeProps<T>;

export const Field = <T extends "input" | "textarea">({
  as = "input" as T,
  name,
  children,
  ...rest
}: FieldProps<T>) => {
  const { register } = useContext(FormContext);
  return React.createElement(as, { ...register(name), ...rest }, children);
};

type ErrorMessageType = {
  name: string;
} & React.ComponentPropsWithoutRef<"span">;

export const ErrorMessage = ({ name }: ErrorMessageType) => {
  const { touched, errors } = useContext(FormContext);
  if (!touched[name] || !errors[name]) return <React.Fragment />;
  return <span>{errors[name]}</span>;
};

export const Button = ({ name }: { name: string }) => {
  return <button>{name}</button>;
};

export const Form = Object.assign(FormProvider, {
  Field,
  ErrorMessage,
  Button,
});
