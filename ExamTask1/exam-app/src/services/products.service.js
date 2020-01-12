import products from "products.json";

class ProductsService {
  static getProducts(filter) {
    let result = products;

    if (!filter) {
      return result;
    }

    for (let key in filter) {
      result = result.filter(product => product[key] === filter[key]);
    }

    return result;
  }

  static getProductById(id) {
    return products.find(product => product.id === id);
  }
}

export default ProductsService;
