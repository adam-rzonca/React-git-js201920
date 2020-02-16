import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

// https://github.com/JedWatson/classnames
const cx = classNames.bind(styles);

function Button(props) {
  const classNames = cx(props.size, { dark: props.dark });

  return <button className={classNames}>{props.text}</button>;
}

export default Button;

// https://github.com/facebook/prop-types
Button.propTypes = {
  /** Button label */
  text: PropTypes.string,
  /** Button size */
  size: PropTypes.oneOf(["small", "normal", "big"]),
  /** Dark mode enabled/disabled */
  dark: PropTypes.bool
};

Button.defaultProps = {
  text: "Default text",
  size: "normal",
  dark: false
};
