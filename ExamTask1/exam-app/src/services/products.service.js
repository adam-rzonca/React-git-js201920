import products from "products.json";
import manufacturers from "services/manufacturers";

const all = manufacturers.all;

class ProductsService {
  static getProducts(filter) {
    let result = products;

    if (!filter) {
      return result;
    }

    for (let key in filter) {
      //console.log(key);

      // Filtrowanie po name nie jest CaseSensitive
      // Pusty filtr traktujemy jak all
      // Wyświwtlamy wszystkie produkty, które w nazwie zawierają string z filtru
      if (key === "name") {
        if (filter[key] !== "") {
          result = result.filter(product => {
            // console.log("product[key]", product[key]);
            // console.log("filter[key]", filter[key]);
            return product[key].includes(filter[key]);
          });
        }
        continue;
      }

      // Jeśli jako manufacture podamy all,
      // to wyświetlamy wszystkich producentów
      if (key === "manufacture" && filter[key] === all) {
        continue;
      }

      result = result.filter(product => product[key] === filter[key]);
    }

    return result;
  }

  static getProductById(id) {
    return products.find(product => product.id === id);
  }
}

export default ProductsService;
