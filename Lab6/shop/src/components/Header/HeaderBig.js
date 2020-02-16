import React from "react";
import PropTypes from "prop-types";

import style from "./Header.module.css";

/** Header component description test 1 2 3 */
const HeaderBig = ({ children }) => (
  <h1 className={style.HeaderBig}>{children}</h1>
);

HeaderBig.propTypes = {
  /** Header text test 1 2 3*/
  children: PropTypes.node
};

HeaderBig.defaultProps = {
  children: "Hello World"
};

export default HeaderBig;
