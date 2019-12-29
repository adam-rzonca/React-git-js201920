import React from "react";

import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import HomePage from "./components/HomePage/HomePage";
import MoviesListPage from "./components/MoviesListPage/MoviesListPage";
import Menu from "./components/Menu/Menu";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page404 from "./components/Page404/Page404";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={MoviesListPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/movie/:id" component={MovieDetailsPage} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
