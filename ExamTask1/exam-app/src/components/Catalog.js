import React, { useState } from "react";
import CatalogFilter from "components/CatalogFilter";
import ProductList from "components/ProductList";
import ProductsService from "services/products.service";
import StyledDiv from "components/StyledDiv";
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
    setManufacture(manufacturers.all);
    setName("");
    e.preventDefault();
  };

  const products = ProductsService.getProducts({
    manufacture: manufacture,
    name: name
  });
  // console.log(manufacture);
  // console.log(products);

  return (
    <StyledDiv className="catalog">
      <StyledDiv className="column-left">
        <CatalogFilter
          manufacture={manufacture}
          handleManufactureChange={handleManufactureChange}
          name={name}
          handleNameChange={handleNameChange}
          handleClearClick={handleClearClick}
        />
      </StyledDiv>
      <StyledDiv className="column-right">
        <ProductList productList={products} />
      </StyledDiv>
    </StyledDiv>
  );
}

export default Catalog;
