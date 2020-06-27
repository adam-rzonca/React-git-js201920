import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "actions/counter";

const Counter2 = ({ onIncrement, onDecrement }) => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  onIncrement = () => dispatch(increment());
  onDecrement = () => dispatch(decrement());
  return (
    <div>
      Counter2: <strong>{count}</strong>
      <br />
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decremeant</button>
    </div>
  );
};

export default Counter2;
