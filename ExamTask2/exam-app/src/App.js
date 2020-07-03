import React from "react";
import MenuBar from "components/MenuBar";
import HomePage from "components/HomePage";
import CatalogPage from "components/CatalogPage";
import AboutPage from "components/AboutPage";
import Footer from "components/Footer";
import Page404 from "components/Page404";
import CartPage from "components/CartPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <MenuBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/catalog" component={CatalogPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
