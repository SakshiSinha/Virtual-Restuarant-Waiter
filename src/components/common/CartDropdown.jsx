import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CartDropdown.module.css";
import CartItem from "../static/CartItem";

const CartDropdown = ({ cartItems, tableSelected }) => {
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems}>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className={styles.msg}>Your cart is empty</span>
        )}
      </div>
      <Link to={`/reservation/${tableSelected}/cart`}>
        <button type="button" className="btn btn-lg btn-outline-dark">
          ORDER FOOD
        </button>
      </Link>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.func.isRequired,
  tableSelected: PropTypes.string
};

CartDropdown.defaultProps = {
  tableSelected: ""
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  tableSelected: state.user.tableSelected
});

export default connect(mapStateToProps, null)(CartDropdown);
