import React, { useEffect } from "react";
import CatalogFilter from "components/CatalogFilter";
import ProductList from "components/ProductList";
import { all, filterProducts } from "services/products.service";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchText,
  setManufacturer,
  fetchProductsList,
} from "redux/actions";

function Catalog() {
  const searchText = useSelector((state) => state.searchText);
  const manufacturer = useSelector((state) => state.manufacturer);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const productsList = filterProducts(products, {
    manufacture: manufacturer,
    name: searchText,
  });

  const fetchData = async () => {
    await dispatch(fetchProductsList());
  };

  // Ponowne pobranie daych z API oraz resetowanie filtra podczas montowania komponentu
  useEffect(() => {
    fetchData();
    dispatch(setManufacturer(all));
    dispatch(setSearchText(""));
  }, []);

  return (
    <div className="catalog">
      <div className="column-left">
        <CatalogFilter />
      </div>
      <div className="column-right">
        <ProductList productList={productsList} />
      </div>
    </div>
  );
}

export default Catalog;
