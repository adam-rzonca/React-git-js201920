import React from "react";
import HeaderBig from "components/HeaderBig";
import Catalog from "components/Catalog";

function CatalogPage() {
  return (
    <div className="container">
      <HeaderBig text="Catalog" />
      <Catalog />
    </div>
  );
}

export default CatalogPage;
