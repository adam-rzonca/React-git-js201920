import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { all } from "services/products.service";
import thunk from "redux-thunk";

// import productList from "../../products.json";

import rootReducer from "../reducers";

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const store = createStore(
  rootReducer,
  {
    searchText: "",
    manufacturer: all,
    products: null,
    isFetching: false,
    error: null,
    cart: [],
  },
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
