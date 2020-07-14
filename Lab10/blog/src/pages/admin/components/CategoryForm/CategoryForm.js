import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required!";
  }
  return errors;
};

const CategoryForm = ({ onSubmit }) => {
  const { getFieldProps, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
    },
    validate,
    onSubmit: (values, FormikHelpers) => {
      onSubmit(values);
      FormikHelpers.resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...getFieldProps("name")} />
      {errors.name && <span className="error">{errors.name}</span>}
      <p>
        <button type="submit">Save</button>
      </p>
    </form>
  );
};

export default CategoryForm;
