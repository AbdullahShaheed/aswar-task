const products = [
  {
    product_id: 1,
    name: "product A",
    price: 2.5,
    creationDate: "2018-01-03T19:04:28.809Z",
  },
  {
    product_id: 2,
    name: "product B",
    price: 2.55,
    creationDate: "2019-01-03T19:04:28.809Z",
  },
  {
    product_id: 3,
    name: "product C",
    price: 2.65,
    creationDate: "2020-01-03T19:04:28.809Z",
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((p) => p.product_id === id);
}

export function saveProduct(product) {
  let productInDb =
    products.find((p) => p.product_id === product.product_id) || {};
  productInDb.name = product.name;
  productInDb.price = product.price;
  productInDb.creationDate = product.creationDate;

  if (!productInDb.product_id) {
    productInDb.product_id = Date.now().toString();
    products.push(productInDb);
  }

  return productInDb;
}

export function deleteProduct(id) {
  let productInDb = products.find((p) => p.product_id === id);
  products.splice(products.indexOf(productInDb), 1);
  return productInDb;
}
