export const ACTION_TYPES = {
  SET_SEARCH_TEXT: "SET_SEARCH_TEXT",
  SET_MANUFACTURER: "SET_MANUFACTURER",
  SET_PRODUCTS_LIST: "SET_PRODUCTS_LIST",
};

export const setSearchText = (searchText) => ({
  type: ACTION_TYPES.SET_SEARCH_TEXT,
  searchText,
});

export const setManufacturer = (manufacturer) => ({
  type: ACTION_TYPES.SET_MANUFACTURER,
  manufacturer,
});

export const setProductsList = (products) => ({
  type: ACTION_TYPES.SET_PRODUCTS_LIST,
  products,
});
