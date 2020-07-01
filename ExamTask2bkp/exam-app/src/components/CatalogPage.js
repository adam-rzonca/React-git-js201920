import React from "react";
import HeaderBig from "components/HeaderBig";
import Catalog from "components/Catalog";
import Container from "components/Container";

function CatalogPage() {
  return (
    <Container>
      <HeaderBig text="Catalog" />
      <Catalog />
    </Container>
  );
}

export default CatalogPage;
