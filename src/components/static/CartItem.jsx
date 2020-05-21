import React from "react";
import PropTypes from "prop-types";
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className={styles.cartItem}>
      <img src={imageUrl} alt="item" />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} X Rs{price}
        </span>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.func.isRequired
};

export default CartItem;
