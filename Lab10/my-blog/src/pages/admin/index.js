import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";

const postInitialValue = { post: "", category: "" };
const categoryInitialValue = { category: "" };

const PostSchema = yup.object().shape({
  post: yup.string().required("Required"),
  category: yup.string().required("Required"),
});

const CategorySchema = yup
  .object()
  .shape({ category: yup.string().required("Required") });

export default () => {
  const onPostSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  const onCategorySubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  const categories = ["One", "Two", "Three"];

  return (
    <div>
      <h4>Add post</h4>
      <Formik
        initialValues={postInitialValue}
        validationSchema={PostSchema}
        onSubmit={onPostSubmit}
      >
        {({ isSubmitting, dirty, isValid, resetForm }) => {
          const disabled = isSubmitting || !(dirty && isValid);
          return (
            <Form>
              <Field name="post" type="text" component={TextField}></Field>
              <br />
              <Field name="category" component={TextField} select>
                {categories.map((category, index) => {
                  return (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  );
                })}
              </Field>
              <br />
              {isSubmitting && <LinearProgress />}
              <Button type="submit" disabled={disabled} color="primary">
                Add post
              </Button>
              <Button color="secondary" onClick={resetForm}>
                Reset
              </Button>
            </Form>
          );
        }}
      </Formik>

      <h4>Add category:</h4>
      <Formik
        initialValues={categoryInitialValue}
        validationSchema={CategorySchema}
        onSubmit={onCategorySubmit}
      >
        {({ isSubmitting, dirty, isValid, resetForm }) => {
          const disabled = isSubmitting || !(dirty && isValid);
          return (
            <Form>
              <Field name="category" type="text" component={TextField}></Field>
              <br />
              {isSubmitting && <LinearProgress />}
              <Button type="submit" disabled={disabled} color="primary">
                Add category
              </Button>
              <Button color="secondary" onClick={resetForm}>
                Reset
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
