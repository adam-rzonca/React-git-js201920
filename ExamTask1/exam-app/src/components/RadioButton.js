import React from "react";

function RadioButton(props) {
  return (
    <div>
      <input
        type="radio"
        name={props.name}
        id={props.id}
        value={props.vale}
        checked
      />
      <label for={props.for}>{props.text}</label>
    </div>
  );
}

export default RadioButton;
