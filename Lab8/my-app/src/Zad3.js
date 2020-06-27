import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { TextField } from "formik-material-ui";
import { Button, LinearProgress } from "@material-ui/core";

import "./App.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const RegisterSchema = yup.object().shape({
  firstName: yup.string().required("Required").max(20, "Max 20 characters"),
  lastName: yup.string().required("Required").max(20, "Max 20 characters"),
  email: yup.string().required("Required").email("Invalid email"),
  password: yup.string().required("Required"),
  repeatPassword: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password")], "Passwords must be the same"),
});

function App() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, dirty, isValid, resetForm }) => {
          const disabled = isSubmitting || !(dirty && isValid);
          return (
            <Form>
              <Field
                component={TextField}
                name="firstName"
                type="text"
                variant="outlined"
                label="First name"
              />
              <br />
              <Field
                component={TextField}
                name="lastName"
                type="text"
                variant="outlined"
                label="Last name"
              />
              <br />
              <Field
                component={TextField}
                name="email"
                type="text"
                variant="outlined"
                label="Email"
              />
              <br />
              <Field
                component={TextField}
                name="password"
                type="text"
                variant="outlined"
                label="Password"
              />
              <br />
              <Field
                component={TextField}
                name="repeatPassword"
                type="text"
                variant="outlined"
                label="Repeat password"
              />
              <br />
              {isSubmitting && <LinearProgress />}
              <Button
                type="submit"
                disabled={disabled}
                variant="contained"
                color="primary"
              >
                Register
              </Button>
              <Button variant="contained" color="secondary" onClick={resetForm}>
                Reset
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
export default App;
