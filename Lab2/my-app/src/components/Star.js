import React from "react";
import star from "../star.jfif";
import emptyStar from "../emptyStar.jfif";

function Star(props) {
  return (
    <img
      width="25"
      src={props.number < props.rating ? star : emptyStar}
      alt="star"
      onClick={props.onClick}
    />
  );
}

export default Star;
