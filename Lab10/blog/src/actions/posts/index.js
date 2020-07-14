import { v4 as uuidv4 } from "uuid";

export const ACTION_TYPES = {
  POST_ADD: "POST_ADD",
};

export const addPost = ({ title, categoryId, content }) => ({
  type: ACTION_TYPES.POST_ADD,
  payload: {
    id: uuidv4(),
    title,
    categoryId,
    content,
  },
});
