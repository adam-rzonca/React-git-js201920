import React from "react";

function StyledDiv(props) {
  let styledDiv;

  // Jak to można zrobić lepiej?
  if (props.className) {
    styledDiv = <div className={props.className}>{props.children}</div>;
  } else {
    styledDiv = <div>{props.children}</div>;
  }

  return styledDiv;
}

export default StyledDiv;
