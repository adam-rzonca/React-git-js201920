import React from "react";
import CatalogFilter from "components/CatalogFilter";
import ProductList from "components/ProductList";
import ProductsService from "services/products.service";

const products = ProductsService.getProducts();

function Catalog() {
  return (
    <div className="catalog">
      <div className="column-left">
        <CatalogFilter />
      </div>
      <div className="column-right">
        <ProductList productList={products} />
      </div>
    </div>
  );
}

export default Catalog;
