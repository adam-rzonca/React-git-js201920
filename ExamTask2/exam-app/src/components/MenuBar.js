import React from "react";
import { NavLink } from "react-router-dom";
import Container from "components/Container";
import { useSelector } from "react-redux";
import { cartCost } from "services/products.service";

function MenuBar() {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  const cartLabel = cart.length
    ? "(items: " + cart.length + " cost: $" + cartCost(products, cart) + ")"
    : "";
  return (
    <nav className="navbar">
      <Container>
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
          <NavLink exact to="/cart" className="nav-li-right">
            Cart {cartLabel}
          </NavLink>
        </ul>
      </Container>
    </nav>
  );
}

export default MenuBar;
