import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const postByIdSelector = (id) => (state) =>
  state.posts.find((post) => post.id === id);

const categoryByIdSelector = (id) => (state) =>
  state.categories.find((cat) => cat.id === id);

export default function () {
  const { id } = useParams();
  const post = useSelector(postByIdSelector(id));

  if (!post) {
    return <Redirect to="/" />;
  }

  const category = useSelector(categoryByIdSelector(post.categoryId));

  return (
    <div>
      <Link to="/">[Back to blog]</Link>

      <div>
        <h3>{post.title}</h3>
        <div>
          Category: <strong>{category.name}</strong>
        </div>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
