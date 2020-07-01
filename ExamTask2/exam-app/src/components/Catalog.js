import React from "react";
import CatalogFilter from "components/CatalogFilter";
import ProductList from "components/ProductList";
import ProductsService from "services/products.service";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText, setManufacturer } from "redux/actions";

function Catalog() {
  const searchText = useSelector((state) => state.searchText);
  const manufacturer = useSelector((state) => state.manufacturer);

  const dispatch = useDispatch();

  const handleManufactureChange = (e) => {
    dispatch(setManufacturer(e.target.value));
  };

  const handleSearchTextChange = (e) => {
    dispatch(setSearchText(e.target.value));
  };

  const handleClearClick = (e) => {
    e.preventDefault();
    dispatch(setManufacturer(ProductsService.all));
    dispatch(setSearchText(""));
  };

  const products = ProductsService.getProducts({
    manufacture: manufacturer,
    name: searchText,
  });

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
