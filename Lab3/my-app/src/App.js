import React, { useState } from "react";
// Zad 1-4 import Counter from "./components/Counter";
import LanguageContext from "./components/LanguageContext";
import MoviesList from "./components/MoviesList";
import movies from "./movies2.json";

function App() {
  // Zad 1-4 const [counterVisible, setCounterVisible] = useState(true);

  const [userLang, setUserLang] = useState("pl");

  const isActiveLangButton = lng => userLang === lng;

  return (
    <div className="App">
      {/* Zad 1-4 {counterVisible && <Counter />}
      {!counterVisible ? (
        <button onClick={() => setCounterVisible(true)}>Show counter</button>
      ) : (
        <button onClick={() => setCounterVisible(false)}>Hide counter</button>
      )} */}
      <LanguageContext.Provider value={userLang}>
        <button
          disabled={isActiveLangButton("pl")}
          onClick={() => setUserLang("pl")}
        >
          PL
        </button>
        <button
          disabled={isActiveLangButton("en")}
          onClick={() => setUserLang("en")}
        >
          EN
        </button>
        <LanguageContext.Consumer>
          {lang => <MoviesList movies={movies} lang={lang} />}
        </LanguageContext.Consumer>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
