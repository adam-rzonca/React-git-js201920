import React from "react";
import HeaderBig from "components/HeaderBig";
import Catalog from "components/Catalog";
import StyledDiv from "components/StyledDiv";

function CatalogPage() {
  return (
    <StyledDiv className="container">
      <HeaderBig text="Catalog" />
      <Catalog />
    </StyledDiv>
  );
}

export default CatalogPage;
