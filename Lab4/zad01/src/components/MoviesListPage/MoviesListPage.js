import React from "react";
import MoviesService from "../../services/movies.service.js";
import { Link } from "react-router-dom";

const MoviesListPage = () => {
  const movies = MoviesService.getMovies().map(movie => {
    return (
      <p key={movie.id}>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </p>
    );
  });

  return (
    <div>
      <h3>MoviesListPage</h3>
      {movies}
    </div>
  );
};

export default MoviesListPage;
