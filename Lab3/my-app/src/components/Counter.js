import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.document.title = `Counter ${count}`;
  }, [count]);

  // To jest zwrócenie funkcji, kóra się wykona, gdy komponent zostanie odmontowany.
  // Odmontowany, ponieważ podaliśmy pustą tablicę zalezności
  useEffect(() => {
    return () => (window.document.title = "React App");
  }, []);

  return (
    <div visible={props.visible}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)} disabled={count >= 20}>
        +
      </button>
    </div>
  );
}

export default Counter;
