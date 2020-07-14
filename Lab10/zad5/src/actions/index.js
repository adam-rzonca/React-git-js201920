export const ACTION_TYPES = {
  MODAL_SHOW: "MODAL_SHOW",
  MODAL_HIDE: "MODAL_HIDE",
};

export const showModal = ({ title, text }) => ({
  type: ACTION_TYPES.MODAL_SHOW,
  payload: {
    title,
    text,
  },
});
export const hideModal = () => ({ type: ACTION_TYPES.MODAL_HIDE });
