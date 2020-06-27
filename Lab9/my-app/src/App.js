import React from "react";
import { Provider } from "react-redux";
import Counter from "./containers/Counter/Counter";
import Counter2 from "./components/Counter2/Counter2";
import store from "./store/index.js";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <br />
        <Counter2 />
      </div>
    </Provider>
  );
}

export default App;
