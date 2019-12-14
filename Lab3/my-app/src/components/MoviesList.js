import React from "react";
import PostMovie from "./PostMovie";

function MoviesList(props) {
  return props.movies.map(movie => (
    <PostMovie
      key={movie.id}
      title={movie.title}
      poster={movie.poster}
      description={movie.description}
      rating={movie.rating}
    />
  ));
}

export default MoviesList;
