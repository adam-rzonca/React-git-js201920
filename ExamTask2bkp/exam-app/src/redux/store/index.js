import { createStore } from "redux";
import ProductsService from "services/products.service";

import rootReducer from "../reducers";

const store = createStore(rootReducer, {
  searchText: 0,
  manufacturer: ProductsService.all,
  products: [],
});

export default store;
