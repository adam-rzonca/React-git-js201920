import React, { useState } from "react";
import CatalogFilter from "components/CatalogFilter";
import ProductList from "components/ProductList";
import ProductsService from "services/products.service";
import manufacturers from "services/manufacturers";

function Catalog() {
  const [name, setName] = useState("");
  const [manufacture, setManufacture] = useState(manufacturers.all);

  const handleManufactureChange = e => {
    setManufacture(e.target.value);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleClearClick = e => {
    e.preventDefault();
    setManufacture(manufacturers.all);
    setName("");
  };

  const products = ProductsService.getProducts({
    manufacture: manufacture,
    name: name
  });
  // console.log(manufacture);
  // console.log(products);

  return (
    <div className="catalog">
      <div className="column-left">
        <CatalogFilter
          manufacture={manufacture}
          handleManufactureChange={handleManufactureChange}
          name={name}
          handleNameChange={handleNameChange}
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
