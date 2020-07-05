import React from "react";
import { getProductById } from "services/products.service";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "redux/actions";

function Product({ id }) {
  const products = useSelector((state) => state.products);
  const product = getProductById(products, id);
  const dispatch = useDispatch();

  const addToCart = (e) => {
    dispatch(addItemToCart(id));
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name}></img>
      <p className="price">${product.amount}</p>
      <h3>{product.name}</h3>
      <button className={"my-button"} onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
}

Product.propTypes = { id: PropTypes.string };

export default Product;
