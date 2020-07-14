import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";

import store from "./store";

import IndexPage from "./pages";
import AdminPage from "./pages/admin";
import PostPage from "./pages/post";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/admin" component={AdminPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
