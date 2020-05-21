import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { authAdminLogout } from "../../redux/userData/actions";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-dark py-3">
        <div className="col-2 d-flex justify-content-start">
          <Link to="/admin/dash">
            <button type="button" className="btn btn-primary">
              HOME
            </button>
          </Link>
        </div>
        <div className="col-2 d-flex justify-content-center">
          <Link to="/admin/dash/menu">
            <button type="button" className="btn btn-warning">
              SET MENU
            </button>
          </Link>
        </div>
        <div className="col-2 d-flex justify-content-center">
          <Link to="/admin/dash/orders">
            <button type="button" className="btn btn-warning">
              TABLE ORDERS
            </button>
          </Link>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <Link to="/admin">
            <button type="button" className="btn btn-danger">
              SIGN OUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
