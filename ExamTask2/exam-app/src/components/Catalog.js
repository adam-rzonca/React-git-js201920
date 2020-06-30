import React, { useState } from "react";
import CatalogFilter from "components/CatalogFilter";
import ProductList from "components/ProductList";
import ProductsService from "services/products.service";

function Catalog() {
  const [searchText, setSearchText] = useState("");
  const [manufacture, setManufacture] = useState(ProductsService.all);

  const handleManufactureChange = e => {
    setManufacture(e.target.value);
  };

  const handleSearchTextChange = e => {
    setSearchText(e.target.value);
  };

  const handleClearClick = e => {
    e.preventDefault();
    setManufacture(ProductsService.all);
    setSearchText("");
  };

  const products = ProductsService.getProducts({
    manufacture: manufacture,
    name: searchText
  });
  // console.log(manufacture);
  // console.log(products);

  return (
    <div className="catalog">
      <div className="column-left">
        <CatalogFilter
          manufacture={manufacture}
          handleManufactureChange={handleManufactureChange}
          searchText={searchText}
          handleSearchTextChange={handleSearchTextChange}
          handleClearClick={handleClearClick}
        />
      </div>
      <div className="column-right">
        <ProductList productList={products} />
      </div>
    </div>
  );
}

export default Catalog;
