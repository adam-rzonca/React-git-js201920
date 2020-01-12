import React from "react";
import Product from "components/Product";

function ProductList(props) {
  const productsComponentList = props.productList.map(product => {
    return <Product key={product.id} id={product.id} />;
  });

  return <div className="products">{productsComponentList}</div>;
}

export default ProductList;
