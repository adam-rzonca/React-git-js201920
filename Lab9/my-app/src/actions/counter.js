export const ACTION_TYPES = { INCREMENT: "INCREMENT", DECREMENT: "DECREMENT" };

export const increment = () => ({ type: ACTION_TYPES.INCREMENT });
export const decrement = () => ({ type: ACTION_TYPES.DECREMENT });
