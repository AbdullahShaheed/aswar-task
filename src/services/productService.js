import http from "./httpService";

const endpoint = "/products";

export function getProducts() {
  return http.get(endpoint);
}

export function getProduct(productId) {
  return http.get(`${endpoint}/${productId}`);
}

export function saveProduct(product) {
  //update scenario
  if (product.product_id) {
    const body = { ...product };
    delete body.product_id;
    return http.put(endpoint + "/" + product.product_id, body);
  }
  //add new scenario
  return http.post(endpoint, product);
}

export function deleteProduct(productId) {
  return http.delete(`${endpoint}/${productId}`);
}
