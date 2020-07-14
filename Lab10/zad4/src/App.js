import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <input value={state.count} readOnly />
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}

export default App;
