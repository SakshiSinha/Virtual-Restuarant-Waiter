import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./OrderItems.module.css";
import { clearItemFromCart } from "../../redux/cart/CartAction";

const OrderItems = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className={styles.orderItem}>
      <div className={styles.imgContainer}>
        <img src={imageUrl} alt="item" />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quant}>{quantity}</span>
      <span className={styles.price}>{price}</span>
      <div className="removeButton">
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => clearItem(cartItem)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

OrderItems.propTypes = {
  cartItem: PropTypes.func.isRequired,
  clearItem: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(OrderItems);
