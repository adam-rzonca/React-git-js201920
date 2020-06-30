import React from "react";
import PropTypes from "prop-types";

function HeaderBig(props) {
  return <h1 className="header-big">{props.text}</h1>;
}

HeaderBig.propTypes = { text: PropTypes.string };

export default HeaderBig;
