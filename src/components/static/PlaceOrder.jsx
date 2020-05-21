import React from "react";
import PropTypes from "prop-types";
import styles from "./PlaceOrder.module.css";

const PlaceOrder = ({ cartItem }) => {
  // const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div>
      {cartItem.map(item => (
        <div className={styles.orderItem}>
          <div className={styles.imgContainer}>
            <img src={item.imageUrl} alt="item" />
          </div>
          <span className={styles.name}>{item.name}</span>
          <span className={styles.quant}>{item.quantity}</span>
          <span className={styles.price}>{item.price}</span>
        </div>
      ))}
    </div>
  );
};

PlaceOrder.propTypes = {
  cartItem: PropTypes.func.isRequired
};

export default PlaceOrder;
