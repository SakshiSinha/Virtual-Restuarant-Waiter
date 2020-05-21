import React, { Component } from "react";
import NavbarPublic from "./NavbarPublic";
import LoginForm from "../components/common/LoginForm";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavbarPublic />
        <LoginForm redirectprops={this.props} />
      </>
    );
  }
}

export default Admin;
