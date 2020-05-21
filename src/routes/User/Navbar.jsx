import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CartIcon from "../../components/static/CartIcon";
import CartDropdown from "../../components/common/CartDropdown";

const Navbar = ({ tableSelected, hidden }) => {
  return (
    <div className="container-fluid">
      <div className="row bg-dark py-3">
        <div className="col-9 pb-2 col-sm-8 col-lg-9">
          <Link to={`/reservation/${tableSelected}`}>
            <button type="button" className="btn btn-primary">
              Menu
            </button>
          </Link>
        </div>
        <div className="col-3 pb-2 col-sm-2 col-lg-2">
          <Link to={`/reservation/${tableSelected}/bill`}>
            <button type="button" className="btn btn-danger">
              Get Bill!
            </button>
          </Link>
        </div>
        <div className="col-3 offset-9 pb-2 col-sm-2 offset-sm-0 col-lg-1">
          <CartIcon />
        </div>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

Navbar.propTypes = {
  tableSelected: PropTypes.string.isRequired,
  hidden: PropTypes.bool
};

Navbar.defaultProps = {
  hidden: true
};

const mapStateToProps = state => ({
  tableSelected: state.user.tableSelected,
  hidden: state.cart.hidden
});

export default connect(mapStateToProps, null)(Navbar);
