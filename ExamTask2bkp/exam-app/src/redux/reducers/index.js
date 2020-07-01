import { ACTION_TYPES } from "../actions";

const rootReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_SEARCH_TEXT:
      return { ...state, searchText: action.searchText };
    case ACTION_TYPES.SET_MANUFACTURER:
      return { ...state, manufacturer: action.manufacturer };
    case ACTION_TYPES.SET_PRODUCTS_LIST:
      return { ...state, products: action.products };
    default:
      return state;
  }
};

export default rootReducer;
