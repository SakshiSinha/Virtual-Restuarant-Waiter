import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { authAdminLogin } from "../../redux/userData/actions";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    const { auth } = this.props;
    const { email, password } = this.state;
    auth(email, password);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container-fluid ">
        <div className="row py-4 bg-light">
          <div className="col-6 mt-4 offset-3 border shadow">
            <div className="row pt-4 text-center">
              <div className="col">
                <h1>LOGIN FORM</h1>
              </div>
            </div>
            <div className="row text-center mt-4">
              <div className="col">
                <label htmlFor="email" className="lead font-weight-bold">
                  Email
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Enter Email"
                  />
                </label>
              </div>
            </div>
            <div className="row text-center mt-4">
              <div className="col">
                <label htmlFor="password" className="lead font-weight-bold">
                  Password
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    placeholder="Enter Password"
                  />
                </label>
              </div>
            </div>
            <div className="text-center my-4 pb-4">
              <Link to="/admin/dash">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => this.handleClick()}
                >
                  SUBMIT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  auth: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  auth: (email, password) => dispatch(authAdminLogin(email, password))
});

export default connect(null, mapDispatchToProps)(LoginForm);
