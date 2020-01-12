import React from "react";
import ProductsService from "services/products.service";

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

export default Product;
