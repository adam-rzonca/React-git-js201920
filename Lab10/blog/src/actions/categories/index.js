import { v4 as uuidv4 } from "uuid";

export const ACTION_TYPES = {
  CATEGORY_ADD: "CATEGORY_ADD",
};

export const addCategory = (name) => ({
  type: ACTION_TYPES.CATEGORY_ADD,
  payload: {
    id: uuidv4(),
    name,
  },
});
