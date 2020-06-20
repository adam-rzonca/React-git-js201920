import React, { useState } from "react";
import "./App.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

function App() {
  const [values, setValues] = useState({ ...initialValues });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const validate = () => {
    const validateErrors = {};

    if (!values.firstName) {
      validateErrors.firstName = "Required";
    }

    setErrors(validateErrors);

    return Object.keys(validateErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) {
      return;
    }

    console.log(values);
  };

  const reset = () => {
    setValues({ ...initialValues });
    setErrors({});
  };

  console.log(errors);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Imie
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={onChange}
              className={errors.firstName ? "errorInput" : ""}
            />
          </label>
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div>
          <label>
            Nazwisko
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email{" "}
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            Haslo{" "}
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            Powtorz Haslo
            <input
              type="password"
              name="repeatPassword"
              value={values.repeatPassword}
              onChange={onChange}
            />
          </label>
        </div>
        <button type="submit">Zarejestruj</button>
        <button type="button" onClick={reset}>
          Wyczyść
        </button>
      </form>
    </div>
  );
}
export default App;
