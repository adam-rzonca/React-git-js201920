import React from "react";
import MenuBar from "components/MenuBar";
import HomePage from "components/HomePage";
import CatalogPage from "components/CatalogPage";
import AboutPage from "components/AboutPage";
import Footer from "components/Footer";
import Page404 from "components/Page404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <MenuBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/catalog" component={CatalogPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
