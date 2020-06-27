import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./App.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const formSchema = Yup.object().shape({
  firstName: Yup.string().required("Required!").max(20, "Max length 20"),
  lastName: Yup.string().required("Required!").max(20, "Max length 20"),
  email: Yup.string().required("Required!").email("Incorrect email format"),
  password: Yup.string().required("Required!"),
  repeatPassword: Yup.string()
    .required("Required!")
    .oneOf([Yup.ref("password")], "Password and repeat Password must match"),
});

function App() {
  const formik = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  //console.log(formik);

  const disabled = !(formik.isValid && formik.dirty);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>
            Imię
            <input type="text" {...formik.getFieldProps("firstName")} />
          </label>
          {formik.errors.firstName && (
            <span className="error">{formik.errors.firstName}</span>
          )}
        </div>
        <div>
          <label>
            Nazwisko
            <input type="text" {...formik.getFieldProps("lastName")} />
          </label>
          {formik.errors.lastName && (
            <span className="error">{formik.errors.lastName}</span>
          )}
        </div>
        <div>
          <label>
            Email
            <input type="text" {...formik.getFieldProps("email")} />
          </label>
          {formik.errors.email && (
            <span className="error">{formik.errors.email}</span>
          )}
        </div>
        <div>
          <label>
            Hasło
            <input type="text" {...formik.getFieldProps("password")} />
          </label>
          {formik.errors.password && (
            <span className="error">{formik.errors.password}</span>
          )}
        </div>
        <div>
          <label>
            Powtórz hasło
            <input type="text" {...formik.getFieldProps("repeatPassword")} />
          </label>
          {formik.errors.repeatPassword && (
            <span className="error">{formik.errors.repeatPassword}</span>
          )}
        </div>
        <button type="submit" disabled={disabled}>
          Zarejestruj
        </button>
        <button type="button" onClick={formik.resetForm}>
          Wyczyść
        </button>
      </form>
    </div>
  );
}
export default App;
