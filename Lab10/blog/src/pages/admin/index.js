import React from "react";
import CategoryForm from "./components/CategoryForm/CategoryForm";
import PostForm from "./components/PostForm/PostForm";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../actions/categories";
import { addPost } from "../../actions/posts";

export default function () {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/">[Back to blog]</Link>
      <h2>Admin</h2>
      <h4>Categories:</h4>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <h4>Create Categories</h4>
      <CategoryForm
        onSubmit={({ name }) => {
          dispatch(addCategory(name));
        }}
      />
      <h4>Create Post</h4>
      <PostForm
        categories={categories}
        onSubmit={({ title, category, content }) => {
          dispatch(addPost({ title, categoryId: category, content }));
        }}
      />
    </div>
  );
}
