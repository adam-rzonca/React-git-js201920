import React from "react";
import ProductsService from "services/products.service";
import PropTypes from "prop-types";

function Product(props) {
  const product = ProductsService.getProductById(props.id);

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
