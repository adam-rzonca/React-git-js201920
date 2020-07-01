import React from "react";
import CatalogFilter from "components/CatalogFilter";
import ProductList from "components/ProductList";
import ProductsService from "services/products.service";
import { useSelector } from "react-redux";

function Catalog() {
  const searchText = useSelector((state) => state.searchText);
  const manufacturer = useSelector((state) => state.manufacturer);

  const products = ProductsService.getProducts({
    manufacture: manufacturer,
    name: searchText,
  });

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
