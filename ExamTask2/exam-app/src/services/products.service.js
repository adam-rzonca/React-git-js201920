const ld = require("lodash");

const all = "All";

// Funkcja dostaje listę produktów oraz obiekt z filtrami, które należy zastosować do listy produktów.
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

function filterProducts(products, filter) {
  let result = products;

  if (!products || !filter) {
    return [];
  }

  for (let key in filter) {
    //console.log(key);

    // Pusty filtr traktujemy jak all
    // Wyświwtlamy wszystkie produkty, które w nazwie zawierają string z filtru
    if (key === "name") {
      if (filter[key] !== "") {
        result = result.filter((product) => {
          // console.log("product[key]", product[key]);
          // console.log("filter[key]", filter[key]);
          return product[key].toLowerCase().includes(filter[key].toLowerCase());
        });
      }
      continue;
    }

    // Jeśli jako manufacture podamy all,
    // to wyświetlamy wszystkich producentów
    if (key === "manufacture" && filter[key] === all) {
      continue;
    }

    result = result.filter((product) => product[key] === filter[key]);
  }

  return result;
}

function getManufacturersList(products) {
  const result = [];

  if (!products) {
    return result;
  }

  products.forEach((element) => {
    if (result.indexOf(element.manufacture) === -1) {
      result.push(element.manufacture);
    }
  });

  return result;
}

function getProductById(products, id) {
  let result;

  if (products) {
    result = products.find((product) => product.id === id);
  }

  return result;
}

async function fetchProductsFromApi() {
  const url = "http://jsdeveloper-shop-api.s3-website-eu-west-1.amazonaws.com";
  try {
    const response = await fetch(url);
    const products = await response.json();

    return products;
  } catch (error) {
    throw error;
  }
}

function cartCost(products, cart) {
  return cart.reduce((cost, id) => {
    const product = getProductById(products, id);

    return ld.round(cost + (product ? parseFloat(product.amount) : 0), 2);
  }, 0);
}

export {
  all,
  filterProducts,
  getManufacturersList,
  getProductById,
  fetchProductsFromApi,
  cartCost,
};
