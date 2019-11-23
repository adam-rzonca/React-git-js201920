import React from "react";
import Poster from "./Poster";
import Title from "./Title";
import Description from "./Description";
import Rating from "./Rating";

function PostMovie(props) {
  return (
    <div>
      <Title title={props.title} />
      <Poster poster={props.poster} />
      <Description description={props.description} />
      <Rating rating={props.rating} />
    </div>
  );
}

export default PostMovie;
