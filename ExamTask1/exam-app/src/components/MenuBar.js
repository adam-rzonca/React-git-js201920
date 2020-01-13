import React from "react";
import { NavLink } from "react-router-dom";
import StyledDiv from "components/StyledDiv";

function MenuBar() {
  return (
    <nav className="navbar">
      <StyledDiv className="container">
        <ul className="nav">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </StyledDiv>
    </nav>
  );
}

export default MenuBar;
