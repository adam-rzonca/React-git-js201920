import React from "react";
import HeaderBig from "components/HeaderBig";
import Container from "components/Container";
import CartList from "./CartList";

function CartPage() {
  return (
    <Container>
      <HeaderBig text="Cart" />
      <CartList />
    </Container>
  );
}

export default CartPage;
