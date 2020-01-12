import React from "react";
import HeaderBig from "components/HeaderBig";
import HeaderSmall from "components/HeaderSmall";
import ProductList from "components/ProductList";
import ProductsService from "services/products.service";

const firstCategoryTitle = "desktops";
const firstCategoryFeaturedProducts = ProductsService.getProducts({
  category: "desktop",
  featured: true
});

const secondCategoryTitle = "tablets";
const secondCategoryFeaturedProducts = ProductsService.getProducts({
  category: "tablet",
  featured: true
});

function HomePage() {
  return (
    <div className="container">
      <HeaderBig text="Welcome to our store" />
      <HeaderSmall text={firstCategoryTitle} />
      <ProductList productList={firstCategoryFeaturedProducts} />
      <HeaderSmall text={secondCategoryTitle} />
      <ProductList productList={secondCategoryFeaturedProducts} />
    </div>
  );
}

export default HomePage;
