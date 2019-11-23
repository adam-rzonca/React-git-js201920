import React from "react";
import "./App.css";
import movies from "./movies.json";
import MoviesList from "./components/MoviesList";

const goodMovies = movies.filter(movie => movie.rating > 6);
const badMovies = movies.filter(movie => movie.rating <= 6);

const moviesGroups = {};

// HomeWork: wyrenederować liste filmów według gatunków
// oraz zrobić pomniższą listę przy pomocy Reduce

movies.forEach(movie => {
  if (Array.isArray(moviesGroups[movie.genere])) {
    moviesGroups[movie.genere].push(movie);
  } else {
    moviesGroups[movie.genere] = [movie];
  }
});

function App() {
  return (
    <div className="App">
      <h1>Dobre filmy</h1>
      <MoviesList movies={goodMovies} />
      <h1>Słabe filmy</h1>
      <MoviesList movies={badMovies} />
    </div>
  );
}

export default App;
