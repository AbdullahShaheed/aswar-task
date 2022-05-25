import React, { Component } from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {!this.props.user && (
          <div>
            <p>
              Please log in if you have an account or register if you have not.
            </p>
            <br />
            <br />
            <br />
            <p>
              Admin user ==> username: <b>user1@domain.com</b> &nbsp; &nbsp;
              &nbsp; password:
              <b>1234</b>
            </p>
            <p>
              Common user ==> username: <b>user2@domain.com</b> &nbsp; &nbsp;
              &nbsp; password:
              <b>1234</b>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
