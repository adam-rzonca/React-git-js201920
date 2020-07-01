import React, { useState } from "react";
import CatalogFilter from "components/CatalogFilter";
import ProductList from "components/ProductList";
import ProductsService from "services/products.service";
//import { useSelector, useDispatch } from "react-redux";
//import { SET_SEARCH_TEXT, SET_MANUFACTURER } from "redux/actions";

function Catalog() {
  const [searchText, setSearchText] = useState("");
  const [manufacturer, setManufacturer] = useState(ProductsService.all);

  const handleManufactureChange = (e) => {
    setManufacturer(e.target.value);
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClearClick = (e) => {
    e.preventDefault();
    setManufacturer(ProductsService.all);
    setSearchText("");
  };

  const products = ProductsService.getProducts({
    manufacture: manufacturer,
    name: searchText,
  });
  // console.log(manufacture);
  // console.log(products);

  return (
    <div className="catalog">
      <div className="column-left">
        <CatalogFilter
          manufacturer={manufacturer}
          handleManufactureChange={handleManufactureChange}
          searchText={searchText}
          handleSearchTextChange={handleSearchTextChange}
          handleClearClick={handleClearClick}
          manufacturersList={ProductsService.getManufacturersList()}
        />
      </div>
      <div className="column-right">
        <ProductList productList={products} />
      </div>
    </div>
  );
}

export default Catalog;
