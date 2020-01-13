import React from "react";
import Product from "components/Product";
import StyledDiv from "components/StyledDiv";

function ProductList(props) {
  const productsComponentList = props.productList.map(product => {
    return <Product key={product.id} id={product.id} />;
  });

  return <StyledDiv className="products">{productsComponentList}</StyledDiv>;
}

export default ProductList;
