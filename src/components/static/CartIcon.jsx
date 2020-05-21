import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./CartIcon.module.css";
import { toggleCartHidden } from "../../redux/cart/CartAction";

const CartIcon = ({ toggleCart }) => {
  return (
    <div
      className={styles.icon}
      onClick={toggleCart}
      onKeyPress={toggleCart}
      role="menuitem"
      tabIndex="0"
    >
      <img
        src="https://clipartart.com/images/yellow-food-cart-clipart-6.jpg"
        alt="cart-icon"
        className={styles.icon}
      />
    </div>
  );
};

CartIcon.propTypes = {
  toggleCart: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
