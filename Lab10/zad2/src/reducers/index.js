import { ACTION_TYPES } from "../actions";

const initialState = {
  user: null,
  isLoading: true,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_USER:
      return { ...initialState };
    case ACTION_TYPES.FETCH_USER_SUCCESS:
      return { user: action.user, isLoading: false, isError: false };
    case ACTION_TYPES.FETCH_USER_ERROR:
      return { user: null, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default reducer;
