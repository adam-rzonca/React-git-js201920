import { ACTION_TYPES } from "../actions";

const rootReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_SEARCH_TEXT:
      return { ...state, searchText: action.searchText };
    case ACTION_TYPES.SET_MANUFACTURER:
      return { ...state, manufacturer: action.manufacturer };
    case ACTION_TYPES.START_FETCH_PRODUCTS_LIST:
      return { ...state, isFetching: true };
    case ACTION_TYPES.FINISH_FETCH_PRODUCTS_LIST:
      return {
        ...state,
        isFetching: false,
        products: action.products,
        error: null,
      };
    case ACTION_TYPES.FAIL_FETCH_PRODUCTS_LIST:
      return {
        ...state,
        isFetching: false,
        products: null,
        error: action.error,
      };
    case ACTION_TYPES.ADD_ITEM_TO_CART:
      console.log("ADD_ITEM_TO_CART", state.cart);
      return {
        ...state,
        cart: [...state.cart, action.id],
      };
    default:
      return state;
  }
};

export default rootReducer;
