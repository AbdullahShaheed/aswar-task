import React, { Component } from "react";
import Joi from "joi-browser";
import { getProduct, saveProduct } from "../services/productService";
import Form from "./common/form";
import Input from "./common/input";

class ProductForm extends Form {
  state = {
    data: {
      name: "",
      price: "",
      creationDate: "",
    },
    errors: {},
  };
  schema = {
    product_id: Joi.number(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    creationDate: Joi.date().required(),
  };
  async componentDidMount() {
    const productId = this.props.match.params.id;
    if (productId === "new") return;

    try {
      const { data: product } = await getProduct(productId);
      this.setState({ data: this.mapToProductModel(product) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }
  mapToProductModel = (product) => {
    return {
      product_id: product.product_id,
      name: product.name,
      price: product.price,
      creationDate: product.creation_date, //**** pay strong attention */
    };
  };
  doSubmit = async () => {
    await saveProduct(this.state.data);
    this.props.history.push("/products");
  };
  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Product Form - {this.props.match.params.id}</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={data.name}
            onChange={this.handleChange}
            name="name"
            label="Name"
            error={errors.name}
          />
          <Input
            value={data.price}
            onChange={this.handleChange}
            name="price"
            label="Price"
            error={errors.price}
          />
          <small className="mt-3">date format should be YYYY-MM-DD</small>
          <Input
            value={data.creationDate}
            onChange={this.handleChange}
            name="creationDate"
            label="Creation Date"
            error={errors.creationDate}
          />
          <button className="btn btn-primary" disabled={this.validateForm()}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default ProductForm;
