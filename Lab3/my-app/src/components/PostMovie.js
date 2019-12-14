import React, { useContext } from "react";
import Poster from "./Poster";
import Title from "./Title";
import Description from "./Description";
import Rating from "./Rating";
import LanguageContext from "./LanguageContext";

function PostMovie(props) {
  const lang = useContext(LanguageContext);

  return (
    <div>
      <Title title={props.title[lang]} />
      <Poster poster={props.poster} />
      <Description description={props.description[lang]} />
      <Rating rating={props.rating} lang={lang} />
    </div>
  );
}

export default PostMovie;
