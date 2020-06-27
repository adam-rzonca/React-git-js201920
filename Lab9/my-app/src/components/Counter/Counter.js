import React from "react";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      Counter: <strong>{count}</strong>
      <br />
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decremeant</button>
    </div>
  );
};

export default Counter;
