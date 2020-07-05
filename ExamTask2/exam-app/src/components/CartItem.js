import React from "react";
import { getProductById } from "services/products.service";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "redux/actions";
const ld = require("lodash");

function CartItem({ id, qty }) {
  const products = useSelector((state) => state.products);
  const product = getProductById(products, id);
  const dispatch = useDispatch();

  const removeFromCart = (e) => {
    dispatch(removeItemFromCart(id));
  };

  const value = ld.round(product.amount * qty, 2);

  return (
    <div key={id} className="product">
      <img src={product.image} alt={product.name}></img>
      <p className="price">Qty: {qty}</p>
      <br />
      <p className="price">Value: ${value}</p>
      <h3>{product.name}</h3>
      <button className={"my-button"} onClick={removeFromCart}>
        Remove
      </button>
    </div>
  );
}

CartItem.propTypes = { id: PropTypes.string };

export default CartItem;
