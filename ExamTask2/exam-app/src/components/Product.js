import React from "react";
import { getProductById } from "services/products.service";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function Product({ id }) {
  const products = useSelector((state) => state.products);
  const product = getProductById(products, id);

  return (
    <div className="product">
      <img src={product.image} alt={product.name}></img>
      <p className="price">${product.amount}</p>
      <h3>{product.name}</h3>
    </div>
  );
}

Product.propTypes = { id: PropTypes.string };

export default Product;
