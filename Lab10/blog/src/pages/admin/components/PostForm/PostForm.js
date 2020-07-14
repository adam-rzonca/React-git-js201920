import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Required!";
  }

  if (!values.category) {
    errors.category = "Required!";
  }

  if (!values.content) {
    errors.content = "Required!";
  }
  return errors;
};

const PostForm = ({ categories, onSubmit }) => {
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      title: "",
      category: "",
      content: "",
    },
    validate,
    onSubmit: (values, FormikHelpers) => {
      onSubmit(values);
      FormikHelpers.resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input type="text" placeholder="Title" {...getFieldProps("title")} />
        {errors.title && touched.title && (
          <span className="error">{errors.title}</span>
        )}
      </p>
      <p>
        <select {...getFieldProps("category")}>
          <option value="">----</option>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
        {errors.category && touched.category && (
          <span className="error">{errors.category}</span>
        )}
      </p>
      <p>
        <textarea cols={60} rows={15} {...getFieldProps("content")} />
        {errors.content && touched.content && (
          <span className="error">{errors.content}</span>
        )}
      </p>
      <button type="submit">Save</button>
    </form>
  );
};

export default PostForm;
