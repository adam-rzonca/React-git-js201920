import products from "products.json";

class ProductsService {
  static all = "All";

  // Funkcja dostaje obiekt z filtrami, które należy zastosować do listy produktów.
  // Jeśli obiekt jest undefined, null lub {}, to żaden filtr nie zostanie zastosowany.
  // Zasada działania funkcji opiera się na sprawdzeniu, czy warunek z filtra odpowiada obiektowi
  // z tablicy Products.
  // Np. filter = {"featured": false} sprawdzamy więc,
  // czy obiekty z tablicy Products mają właściwość "featured" równą false

  // Można podać kilka warunków w filtrze np:
  // {
  //   category: "desktop",
  //   featured: true
  // }

  // W specjalny sposób potraktowane są właściwości "name" oraz "manufacture"
  // Jeśli "manufacture" równa się "all", to nie stosujemy filtra
  // Jeśli "name" to pusty string "", to nie stosujemy filtra
  // Filtrowanie po "name" polega na sprawdzeniu,
  // czy string zastosowany w filtrze zawiera sie w nazwie produktu

  static getProducts(filter) {
    let result = products;

    if (!filter) {
      return result;
    }

    for (let key in filter) {
      //console.log(key);

      // Pusty filtr traktujemy jak all
      // Wyświwtlamy wszystkie produkty, które w nazwie zawierają string z filtru
      if (key === "name") {
        if (filter[key] !== "") {
          result = result.filter(product => {
            // console.log("product[key]", product[key]);
            // console.log("filter[key]", filter[key]);
            return product[key]
              .toLowerCase()
              .includes(filter[key].toLowerCase());
          });
        }
        continue;
      }

      // Jeśli jako manufacture podamy all,
      // to wyświetlamy wszystkich producentów
      if (key === "manufacture" && filter[key] === this.all) {
        continue;
      }

      result = result.filter(product => product[key] === filter[key]);
    }

    return result;
  }

  static getManufacturersList() {
    const result = [];

    products.forEach(element => {
      if (result.indexOf(element.manufacture) === -1) {
        result.push(element.manufacture);
      }
    });

    return result;
  }

  static getProductById(id) {
    return products.find(product => product.id === id);
  }
}

export default ProductsService;
