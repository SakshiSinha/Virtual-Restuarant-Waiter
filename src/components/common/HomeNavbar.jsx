import React from "react";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-dark py-3">
        <div className="col-9 d-flex justify-content-start">
          <Link to="/">
            <button type="button" className="btn btn-primary">
              Home
            </button>
          </Link>
        </div>
        <div className="col d-flex justify-content-end">
          <Link to="/admin">
            <button type="button" className="btn btn-danger">
              Admin
            </button>
          </Link>
        </div>
        <div className="col d-flex justify-content-end">
          <Link to="/about">
            <button type="button" className="btn btn-primary">
              About
            </button>
          </Link>
        </div>
        <div className="col d-flex justify-content-end">
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

export default HomeNavbar;
