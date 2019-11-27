import React from "react";
import "./App.css";
import movies from "./movies.json";
import MoviesList from "./components/MoviesList";

const goodMovies = movies.filter(movie => movie.rating > 6);
const badMovies = movies.filter(movie => movie.rating <= 6);

// HomeWork: wyrenederować liste filmów według gatunków
// oraz zrobić pomniższą listę przy pomocy Reduce

// movies.forEach(movie => {
//   if (Array.isArray(moviesGroups[movie.genre])) {
//     moviesGroups[movie.genre].push(movie);
//   } else {
//     moviesGroups[movie.genre] = [movie];
//   }
// });

const moviesGroups = movies.reduce((moviesGroups, movie) => {
  if (Array.isArray(moviesGroups[movie.genre])) {
    moviesGroups[movie.genre].push(movie);
  } else {
    moviesGroups[movie.genre] = [movie];
  }

  return moviesGroups;
}, []);

const moviesByGenre = [];
for (let genre in moviesGroups) {
  let elem = (
    <div key={genre}>
      <h1>{genre}</h1>
      <MoviesList movies={moviesGroups[genre]} />
    </div>
  );
  moviesByGenre.push(elem);
}

function App() {
  return (
    <div className="App">
      {/* Zadanie 6
      <h1>Dobre filmy</h1>
      <MoviesList movies={goodMovies} />
      <h1>Słabe filmy</h1>
      <MoviesList movies={badMovies} /> */}
      {moviesByGenre}
    </div>
  );
}

export default App;
