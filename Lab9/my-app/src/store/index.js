import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Można tak:
// import rootReducer from "../reducers;
// bo plik indexjs zostanie autoamtycznie zaczytany
import rootReducer from "../reducers/index.js";

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const store = createStore(
  rootReducer,
  { counter: 0 },
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
