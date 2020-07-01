import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ProductsService from "services/products.service";

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
    searchText: 0,
    manufacturer: ProductsService.all,
    products: [],
  },
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
