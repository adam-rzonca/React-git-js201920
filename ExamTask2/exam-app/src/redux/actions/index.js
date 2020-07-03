import { fetchProductsFromApi } from "../../services/products.service";

export const ACTION_TYPES = {
  SET_SEARCH_TEXT: "SET_SEARCH_TEXT",
  SET_MANUFACTURER: "SET_MANUFACTURER",
  START_FETCH_PRODUCTS_LIST: "PRODUCTS_LIST",
  FAIL_FETCH_PRODUCTS_LIST: "FAIL_FETCH_PRODUCTS_LIST",
  FINISH_FETCH_PRODUCTS_LIST: "FINISH_FETCH_PRODUCTS_LIST",
};

export const setSearchText = (searchText) => ({
  type: ACTION_TYPES.SET_SEARCH_TEXT,
  searchText,
});

export const setManufacturer = (manufacturer) => ({
  type: ACTION_TYPES.SET_MANUFACTURER,
  manufacturer,
});

export const startFetchProductsList = () => ({
  type: ACTION_TYPES.START_FETCH_PRODUCTS_LIST,
});

export const failFetchProductsList = (error) => ({
  type: ACTION_TYPES.FAIL_FETCH_PRODUCTS_LIST,
  error,
});

export const finishFetchProductsList = (products) => ({
  type: ACTION_TYPES.FINISH_FETCH_PRODUCTS_LIST,
  products,
});

export const fetchProductsList = () => async (dispatch) => {
  dispatch(startFetchProductsList);
  try {
    const products = await fetchProductsFromApi();
    dispatch(finishFetchProductsList(products));
  } catch (error) {
    dispatch(failFetchProductsList(error));
  }
};
