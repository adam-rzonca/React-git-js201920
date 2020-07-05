import React from "react";
import HeaderSmall from "components/HeaderSmall";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function CartList() {
  // Lista id produktów w koszyku
  const cart = useSelector((state) => state.cart);

  if (!cart.length) {
    return <HeaderSmall text="Your cart is empty. . ." />;
  }

  const cartList = getCartList(cart);
  return <div className="products">{cartList}</div>;
}

function getCartList(cart) {
  let cartList = [];
  for (let i = 0; i < cart.length; i++) {
    let cartItem = cartList.find((item) => {
      return item.id === cart[i];
    });

    if (cartItem) {
      cartItem.qty += 1;
    } else {
      cartItem = {};
      cartItem.id = cart[i];
      cartItem.qty = 1;
      cartList.push(cartItem);
    }
  }

  cartList = cartList.map((item, index) => {
    return <CartItem id={item.id} qty={item.qty} />;
  });

  return cartList;
}

export default CartList;
