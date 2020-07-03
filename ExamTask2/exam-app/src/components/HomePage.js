import React, { useEffect } from "react";
import HeaderBig from "components/HeaderBig";
import HeaderSmall from "components/HeaderSmall";
import ProductList from "components/ProductList";
import { filterProducts } from "services/products.service";
import Container from "components/Container";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsList } from "redux/actions";

const firstCategoryTitle = "desktops";
const secondCategoryTitle = "tablets";

function HomePage() {
  const products = useSelector((state) => state.products);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const firstCategoryFeaturedProducts = filterProducts(products, {
    category: "desktop",
    featured: true,
  });
  const secondCategoryFeaturedProducts = filterProducts(products, {
    category: "tablet",
    featured: true,
  });

  const fetchData = async () => {
    await dispatch(fetchProductsList());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <HeaderBig text="Welcome to our store" />
      <HeaderSmall text={firstCategoryTitle} />
      <ProductList productList={firstCategoryFeaturedProducts} />
      <HeaderSmall text={secondCategoryTitle} />
      <ProductList productList={secondCategoryFeaturedProducts} />
    </Container>
  );
}

export default HomePage;
