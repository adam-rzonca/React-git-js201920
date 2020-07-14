export const ACTION_TYPES = {
  FETCH_USER: "FETCH_USER",
  FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
  FETCH_USER_ERROR: "FETCH_USER_ERROR",
};

const fetchUser = () => ({ type: ACTION_TYPES.FETCH_USER });
const fetchUserSuccess = (user) => ({
  type: ACTION_TYPES.FETCH_USER_SUCCESS,
  user,
});
const fetchUserError = () => ({ type: ACTION_TYPES.FETCH_USER_ERROR });

export const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUser());

      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const [user] = data.results;

      dispatch(fetchUserSuccess(user));
    } catch (e) {
      console.error(e.message);
      dispatch(fetchUserError());
    }
  };
};
