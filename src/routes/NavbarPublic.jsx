import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-dark py-3">
        <div className="col-6 pb-2 col-sm-3 col-md-6 col-lg-9">
          <Link to="/">
            <button type="button" className="btn btn-primary">
              Home
            </button>
          </Link>
        </div>
        <div className="col-6 pb-2 col-sm-3 col-md-2 col-lg-1">
          <Link to="/admin">
            <button type="button" className="btn btn-danger">
              Admin
            </button>
          </Link>
        </div>
        <div className="col-6 col-sm-3 col-md-2 col-lg-1">
          <Link to="/about">
            <button type="button" className="btn btn-primary">
              About
            </button>
          </Link>
        </div>
        <div className="col-6 col-sm-3 col-md-2 col-lg-1">
          <Link to="/contact">
            <button type="button" className="btn btn-primary">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
