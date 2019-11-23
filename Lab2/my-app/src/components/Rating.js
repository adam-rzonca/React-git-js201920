import React from "react";
// import Star from "./Star";

// function Rating(props) {
//   let stars = [];
//   for (let i = 0; i < props.rating; i++) {
//     stars.push(<Star />);
//   }

//   return <span>Rating: {stars}</span>;
// }

import star from "../star.png";

function Rating(props) {
  const stars = [];

  for (let i = 0; i < props.rating; i++) {
    stars.push(<img key={i} src={star} width="25" />);
  }

  return (
    <div>
      <span>Ocena:</span>
      <span>{stars}</span>
    </div>
  );
}

export default Rating;
