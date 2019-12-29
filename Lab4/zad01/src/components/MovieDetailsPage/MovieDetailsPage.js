import React from "react";
import MoviesService from "../../services/movies.service.js";
import { useParams, useHistory, Redirect } from "react-router-dom";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const movie = MoviesService.getMovieById(id);

  if (!movie) {
    // history.replace("/movies");
    // return null;

    return <Redirect to="/movies" />;
  }

  return (
    <div>
      <h3>MovieDetailsPage</h3>
      <button onClick={history.goBack}>Back</button>
      <h4>{movie.title}</h4>
      <img src={movie.poster} />
      <br />
      {movie.description}
    </div>
  );
};

export default MovieDetailsPage;
