import React from "react";
import PropTypes from "prop-types";

function HeaderSmall(props) {
  return <h1 className="header-small">{props.text}</h1>;
}

HeaderSmall.propTypes = { text: PropTypes.string };

export default HeaderSmall;
