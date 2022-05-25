import React, { Component } from "react";
import Joi from "joi-browser";

class Form extends React.Component {
  state = {
    data: {},
    errors: {},
  };
  validateForm() {
    const errors = {};
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  }
  validateField = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateField(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, errors });
  };

  handleRadioChange = (e) => {
    const data = { ...this.state.data };
    data.role = e.target.value;
    this.setState({ data });
    console.log(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };
}

export default Form;
