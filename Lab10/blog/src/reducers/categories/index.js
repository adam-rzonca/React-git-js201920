import { ACTION_TYPES } from "../../actions/categories";

export default function (state = [], action) {
  switch (action.type) {
    case ACTION_TYPES.CATEGORY_ADD:
      return [...state, action.payload];
    default:
      return state;
  }
}
