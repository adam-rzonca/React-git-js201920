import React from "react";
import Product from "components/Product";
import PropTypes from "prop-types";

function ProductList(props) {
  const productsComponentList = props.productList.map(product => {
    return <Product key={product.id} id={product.id} />;
  });

  return <div className="products">{productsComponentList}</div>;
}

ProductList.propTypes = { productList: PropTypes.array };

export default ProductList;
