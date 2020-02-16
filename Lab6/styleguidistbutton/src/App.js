import React from "react";
import Button from "components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button />
      <br />
      <Button text="dark=default, size=default" />
      <br />
      <Button text="dark=true, size=default" dark={true} />
      <br />
      <Button text="dark=false, size=default" dark={false} />
      <br />
      <Button text="dark=default, size=small" size="small" />
      <br />
      <Button text="dark=default, size=normal" size="normal" />
      <br />
      <Button text="dark=default, size=big" size="big" />
    </div>
  );
}

export default App;
