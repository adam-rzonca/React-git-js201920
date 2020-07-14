import { combineReducers } from "redux";
import { ACTION_TYPES } from "../actions";

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case ACTION_TYPES.MODAL_SHOW:
      return { title: action.payload.title, text: action.payload.text };
    case ACTION_TYPES.MODAL_HIDE:
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  modal: modalReducer,
});

export default rootReducer;
