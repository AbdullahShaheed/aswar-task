import React from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form";
import auth from "./../services/authService";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };
  schema = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  };

  async doSubmit() {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);
      window.location = "/products";
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <Input
              value={data.email}
              onChange={this.handleChange}
              name="email"
              label="Email"
              error={errors.email}
            />
            <Input
              value={data.password}
              onChange={this.handleChange}
              name="password"
              label="Password"
              error={errors.password}
            />
          </div>
          <button className="btn btn-primary" disabled={this.validateForm()}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
