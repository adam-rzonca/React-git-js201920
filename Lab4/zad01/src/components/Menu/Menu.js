import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const style = { fontWeight: "bold" };
  return (
    <div>
      MENU
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={style}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/movies" activeStyle={style}>
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={style}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeStyle={style}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
